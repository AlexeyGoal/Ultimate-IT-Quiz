(async function () {

    // ================== LOAD QUESTIONS FROM JSON ==================
    let DATA;
    try {
        const res = await fetch('questions.json');
        DATA = await res.json();
    } catch (e) {
        document.body.innerHTML = '<p style="color:red;text-align:center;margin-top:40px">Failed to load questions.json</p>';
        return;
    }

    // ================== HELPER FUNCTIONS ==================
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Limit each difficulty bucket to max 10 questions, picked randomly
    function limitQuestions(questions, difficulty, max = 10) {
        const filtered = questions.filter(q => q.difficulty === difficulty);
        return shuffleArray([...filtered]).slice(0, max);
    }

    // ================== QUIZ CLASS ==================
    class Quiz {
        constructor(container, questions, renderQuestionContent) {
            this.container = container;
            this.initialQuestions = questions;
            this.renderQuestionContent = renderQuestionContent || (q => q.question || '');
            this.difficulty = null;
            this.questions = [];
            this.currentIndex = 0;
            this.score = 0;
            this.answered = false;
            this.elements = {};
            this.buildDifficultyScreen();
        }

        buildDifficultyScreen() {
            this.container.innerHTML = `
                <div class="difficulty-screen">
                    <div class="difficulty-title">Choose difficulty level</div>
                    <div class="difficulty-buttons">
                        <button class="diff-btn easy" data-diff="easy">😊 Easy</button>
                        <button class="diff-btn medium" data-diff="medium">🧐 Medium</button>
                        <button class="diff-btn hard" data-diff="hard">🤯 Hard</button>
                    </div>
                </div>
            `;
            this.container.querySelectorAll('.diff-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const diff = btn.getAttribute('data-diff');
                    this.startGame(diff);
                });
            });
        }

        startGame(difficulty) {
            this.difficulty = difficulty;
            const limited = limitQuestions(this.initialQuestions, difficulty, 10);
            if (limited.length === 0) {
                alert(`No questions available for difficulty: ${difficulty}`);
                return;
            }
            this.questions = limited;
            this.currentIndex = 0;
            this.score = 0;
            this.answered = false;
            this.buildGameDOM();
            this.attachEvents();
            this.loadQuestion();
        }

        buildGameDOM() {
            this.container.innerHTML = `
                <div class="progress-bar"><div class="progress-fill"></div></div>
                <div class="question-counter"></div>
                <div class="question-content"></div>
                <div class="options-grid"></div>
                <div class="feedback"></div>
                <button class="btn next-btn" style="display:none;">Next</button>
                <div class="result-screen" style="display:none;">
                    <h1>🏁 Results</h1>
                    <div class="score-final"></div>
                    <div class="comment"></div>
                    <button class="btn restart-btn">Play again</button>
                </div>
            `;
            const get = s => this.container.querySelector(s);
            this.elements.progressFill = get('.progress-fill');
            this.elements.questionCounter = get('.question-counter');
            this.elements.questionContent = get('.question-content');
            this.elements.optionsGrid = get('.options-grid');
            this.elements.feedback = get('.feedback');
            this.elements.nextBtn = get('.next-btn');
            this.elements.resultScreen = get('.result-screen');
            this.elements.scoreFinal = get('.score-final');
            this.elements.comment = get('.comment');
            this.elements.restartBtn = get('.restart-btn');
        }

        attachEvents() {
            this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
            this.elements.restartBtn.addEventListener('click', () => this.restart());
        }

        loadQuestion() {
            this.answered = false;
            const q = this.questions[this.currentIndex];
            this.elements.questionCounter.textContent =
                `Question ${this.currentIndex + 1} of ${this.questions.length}`;
            this.elements.questionContent.innerHTML = this.renderQuestionContent(q);
            this.elements.optionsGrid.innerHTML = '';
            const shuffledOptions = shuffleArray([...q.options]);
            shuffledOptions.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = option;
                btn.addEventListener('click', () => this.selectAnswer(option, btn));
                this.elements.optionsGrid.appendChild(btn);
            });
            this.elements.feedback.innerHTML = '';
            this.elements.nextBtn.style.display = 'none';
            this.elements.resultScreen.style.display = 'none';
            const progress = (this.currentIndex / this.questions.length) * 100;
            this.elements.progressFill.style.width = `${progress}%`;
        }

        selectAnswer(selected, clickedBtn) {
            if (this.answered) return;
            this.answered = true;
            const q = this.questions[this.currentIndex];
            const correct = q.answer;
            const allBtns = this.elements.optionsGrid.querySelectorAll('.option-btn');
            allBtns.forEach(btn => {
                btn.classList.add('disabled');
                if (btn.textContent === correct) btn.classList.add('correct');
            });

            // Construct explanation snippet if available
            const explanationHtml = q.explanation ? `
                <div class="explanation-box">
                    <strong>💡 Learning Note:</strong> ${q.explanation}
                </div>
            ` : '';

            if (selected === correct) {
                this.score++;
                this.elements.feedback.innerHTML = `<div>✅ Correct!</div>${explanationHtml}`;
                this.elements.feedback.style.color = '#00c853';
            } else {
                clickedBtn.classList.add('wrong');
                this.elements.feedback.innerHTML = `
                    <div>❌ Wrong. Correct answer: <strong>${correct}</strong></div>
                    ${explanationHtml}
                `;
                this.elements.feedback.style.color = '#ff5252';
            }
            const isLast = this.currentIndex === this.questions.length - 1;
            this.elements.nextBtn.textContent = isLast ? 'See results' : 'Next';
            this.elements.nextBtn.style.display = 'inline-block';
        }

        nextQuestion() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                this.loadQuestion();
            } else {
                this.showResult();
            }
        }

        showResult() {
            this.elements.resultScreen.style.display = 'block';
            const total = this.questions.length;
            const percent = Math.round((this.score / total) * 100);
            this.elements.scoreFinal.textContent = `${this.score} / ${total} (${percent}%)`;
            let comment;
            if (percent === 100) comment = '🏆 You\'re a true expert!';
            else if (percent >= 80) comment = '🥇 Excellent result!';
            else if (percent >= 60) comment = '🥈 Not bad, but there\'s room to grow.';
            else if (percent >= 40) comment = '🥉 You can do better — keep learning!';
            else comment = '📚 Every expert was once a beginner!';
            this.elements.comment.textContent = comment;
        }

        restart() {
            this.difficulty = null;
            this.questions = [];
            this.buildDifficultyScreen();
        }

        destroy() {
            this.container.innerHTML = '';
        }
    }

    // ================== TAB INITIALIZER ==================
    function initBlockTabs(blockElement, tabConfig) {
        const tabBtns = blockElement.querySelectorAll('.tab-btn');
        const panels = {};
        tabConfig.forEach(cfg => {
            panels[cfg.tabName] = blockElement.querySelector(`#${cfg.panelId}`);
        });

        let currentQuiz = null;

        function switchTab(tabName) {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            const activeBtn = blockElement.querySelector(`.tab-btn[data-tab="${tabName}"]`);
            if (activeBtn) activeBtn.classList.add('active');

            Object.values(panels).forEach(p => p.classList.remove('active'));
            const activePanel = panels[tabName];
            if (activePanel) activePanel.classList.add('active');

            if (currentQuiz && currentQuiz.container === activePanel) return;
            if (currentQuiz) currentQuiz.destroy();
            const cfg = tabConfig.find(c => c.tabName === tabName);
            if (cfg) {
                currentQuiz = new Quiz(activePanel, cfg.questions, cfg.render);
            }
        }

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
        });

        switchTab(tabConfig[0].tabName);
    }

    // ================== GLOBAL TAB SWITCHING ==================
    const globalTabBtns = document.querySelectorAll('.global-tab-btn');
    const blocks = {
        languages: document.getElementById('languages-block'),
        os: document.getElementById('os-block'),
        git: document.getElementById('git-block')
    };

    function switchGlobalBlock(blockName) {
        globalTabBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.global-tab-btn[data-global="${blockName}"]`).classList.add('active');
        Object.keys(blocks).forEach(key => blocks[key].classList.remove('active'));
        blocks[blockName].classList.add('active');
    }

    globalTabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchGlobalBlock(btn.getAttribute('data-global')));
    });

    // ================== RENDER HELPERS ==================
    const esc = s => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // ================== TAB CONFIGS ==================
    const lang = DATA.languages;
    const languagesConfig = [
        {
            tabName: 'questions',
            panelId: 'panel-questions',
            questions: lang.quizQuestions,
            render: q => q.question
        },
        {
            tabName: 'code',
            panelId: 'panel-code',
            questions: lang.codeQuestions,
            render: q => `<pre><code>${esc(q.code)}</code></pre>`
        },
        {
            tabName: 'logo',
            panelId: 'panel-logo',
            questions: lang.logoQuestions,
            render: q => `<img src="${q.imgUrl}" alt="Language logo"
                onerror="this.style.display='none';this.parentElement.innerHTML+='<p>🚫 Image failed to load. Guess from the options!</p>'">`
        },
        {
            tabName: 'output',
            panelId: 'panel-output',
            questions: lang.outputQuestions,
            render: q => `<p>What does this code output?</p><pre><code>${esc(q.code)}</code></pre>`
        }
    ];

    const lnx = DATA.linux;
    const linuxConfig = [
        {
            tabName: 'linux-questions',
            panelId: 'panel-linux-questions',
            questions: lnx.quizQuestions,
            render: q => q.question
        },
        {
            tabName: 'linux-cmd-meaning',
            panelId: 'panel-linux-cmd-meaning',
            questions: lnx.commandMeaning,
            render: q => `<p>What does this command do?</p><pre><code>${esc(q.command)}</code></pre>`
        },
        {
            tabName: 'linux-cmd-to-action',
            panelId: 'panel-linux-cmd-to-action',
            questions: lnx.commandToAction,
            render: q => `<p>${q.description}</p>`
        }
    ];

    const git = DATA.git;
    const gitConfig = [
        {
            tabName: 'git-questions',
            panelId: 'panel-git-questions',
            questions: git.quizQuestions,
            render: q => q.question
        },
        {
            tabName: 'git-cmd-meaning',
            panelId: 'panel-git-cmd-meaning',
            questions: git.commandMeaning,
            render: q => `<p>What does this command do?</p><pre><code>${esc(q.command)}</code></pre>`
        },
        {
            tabName: 'git-cmd-to-action',
            panelId: 'panel-git-cmd-to-action',
            questions: git.commandToAction,
            render: q => `<p>${q.description}</p>`
        }
    ];

    // ================== INITIALIZE ALL BLOCKS ==================
    initBlockTabs(blocks.languages, languagesConfig);
    initBlockTabs(blocks.os, linuxConfig);
    initBlockTabs(blocks.git, gitConfig);

})();