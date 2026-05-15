(function() {
    // ================== БАЗЫ ВОПРОСОВ ==================

    // Языки: вопросы
    const quizQuestions = [
        { question: "Какой язык используют для веб-интерактива?", options: ["JavaScript", "Java", "C", "Rust"], answer: "JavaScript", difficulty: "easy" },
        { question: "Логотип в виде чашки кофе у языка:", options: ["Java", "Python", "Ruby", "C++"], answer: "Java", difficulty: "easy" },
        { question: "Для iOS-приложений Apple предлагает:", options: ["Swift", "Kotlin", "C#", "Dart"], answer: "Swift", difficulty: "easy" },
        { question: "Философия 'Дзен' ассоциируется с:", options: ["Python", "Ruby", "Haskell", "Go"], answer: "Python", difficulty: "easy" },
        { question: "Основной язык ядра Linux:", options: ["C", "Java", "Python", "Go"], answer: "C", difficulty: "easy" },
        { question: "Язык, созданный Гвидо ван Россумом:", options: ["Python", "Ruby", "Perl", "Lua"], answer: "Python", difficulty: "easy" },
        { question: "Microsoft разработала язык для .NET:", options: ["C#", "F#", "Visual Basic", "TypeScript"], answer: "C#", difficulty: "medium" },
        { question: "Системный язык от Mozilla:", options: ["Rust", "Go", "D", "C++"], answer: "Rust", difficulty: "medium" },
        { question: "Язык, совместимый с JVM и предпочитаемый для Android:", options: ["Kotlin", "Scala", "Groovy", "Java"], answer: "Kotlin", difficulty: "medium" },
        { question: "Google создала язык для высоконагруженных сервисов:", options: ["Go", "Rust", "Dart", "TypeScript"], answer: "Go", difficulty: "medium" },
        { question: "Язык, названный в честь британского комедийного шоу:", options: ["Python", "Monty", "Flynn", "Basil"], answer: "Python", difficulty: "medium" },
        { question: "Функциональный язык имени Хаскелла Карри:", options: ["Haskell", "Erlang", "Scala", "Clojure"], answer: "Haskell", difficulty: "medium" },
        { question: "Какой язык использует модель акторов?", options: ["Erlang", "Haskell", "Rust", "Go"], answer: "Erlang", difficulty: "hard" },
        { question: "Какой язык вдохновлён Smalltalk и Lisp и работает на JVM?", options: ["Clojure", "Scala", "Kotlin", "Groovy"], answer: "Clojure", difficulty: "hard" },
        { question: "Язык, использующий синтаксис значимых отступов и поддерживающий макросы:", options: ["Crystal", "Elixir", "Julia", "Nim"], answer: "Nim", difficulty: "hard" },
        { question: "Какой язык компилируется в JavaScript и известен строгой типизацией?", options: ["TypeScript", "CoffeeScript", "Dart", "Elm"], answer: "Elm", difficulty: "hard" },
        { question: "Язык с концепцией zero-cost abstractions:", options: ["C++", "Rust", "D", "Zig"], answer: "Rust", difficulty: "hard" },
        { question: "Диалект Lisp, встроенный в Emacs:", options: ["Emacs Lisp", "Common Lisp", "Scheme", "Clojure"], answer: "Emacs Lisp", difficulty: "hard" }
    ];

    const codeQuestions = [
        { code: 'print("Hello")', options: ["Python", "Ruby", "PHP", "Perl"], answer: "Python", difficulty: "easy" },
        { code: 'console.log("Hi");', options: ["JavaScript", "Java", "C++", "Kotlin"], answer: "JavaScript", difficulty: "easy" },
        { code: '<?php echo "Hi"; ?>', options: ["PHP", "HTML", "JavaScript", "Perl"], answer: "PHP", difficulty: "easy" },
        { code: '#include <stdio.h>\nint main(){\n  printf("Hi");\n  return 0;\n}', options: ["C", "C++", "Java", "C#"], answer: "C", difficulty: "easy" },
        { code: 'puts "Hello"', options: ["Ruby", "Python", "Lua", "Perl"], answer: "Ruby", difficulty: "easy" },
        { code: 'public class Hello {\n  public static void main(String[] a) {\n    System.out.println("Hi");\n  }\n}', options: ["Java", "C#", "Kotlin", "Scala"], answer: "Java", difficulty: "easy" },
        { code: 'fn main() {\n    println!("Hello");\n}', options: ["Rust", "Go", "Swift", "Kotlin"], answer: "Rust", difficulty: "medium" },
        { code: 'package main; import "fmt"; func main() { fmt.Println("Hi") }', options: ["Go", "Rust", "D", "Erlang"], answer: "Go", difficulty: "medium" },
        { code: 'fun main() { println("Hi") }', options: ["Kotlin", "Java", "Scala", "Groovy"], answer: "Kotlin", difficulty: "medium" },
        { code: 'print("Hello") // Swift style', options: ["Swift", "Kotlin", "Python", "Go"], answer: "Swift", difficulty: "medium" },
        { code: 'const msg: string = "Hi"; console.log(msg);', options: ["TypeScript", "JavaScript", "Dart", "Flow"], answer: "TypeScript", difficulty: "medium" },
        { code: 'print("Hi")  -- Lua comment', options: ["Lua", "Python", "Ruby", "Haskell"], answer: "Lua", difficulty: "medium" },
        { code: 'io::println("Hi");', options: ["Crystal", "Go", "D", "Rust"], answer: "Crystal", difficulty: "hard" },
        { code: '(println "Hello")', options: ["Clojure", "Scheme", "Common Lisp", "Racket"], answer: "Clojure", difficulty: "hard" },
        { code: 'echo "Hello"', options: ["Shell (bash)", "PHP", "Perl", "Python"], answer: "Shell (bash)", difficulty: "hard" },
        { code: 'MODULE Hello; FROM InOut IMPORT WriteString; BEGIN WriteString("Hi") END Hello.', options: ["Modula-2", "Pascal", "Ada", "Oberon"], answer: "Modula-2", difficulty: "hard" },
        { code: 'program Hello;\nbegin\n  writeln("Hi");\nend.', options: ["Pascal", "Ada", "Modula-2", "Oberon"], answer: "Pascal", difficulty: "hard" }
    ];

    const logoQuestions = [
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/python/python_64x64.png", options: ["Python", "Perl", "Ruby", "PHP"], answer: "Python", difficulty: "easy" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/javascript/javascript_64x64.png", options: ["JavaScript", "TypeScript", "Python", "Dart"], answer: "JavaScript", difficulty: "easy" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/java/java_64x64.png", options: ["Java", "Kotlin", "C#", "Scala"], answer: "Java", difficulty: "easy" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/c/c_64x64.png", options: ["C", "C++", "C#", "Objective-C"], answer: "C", difficulty: "easy" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/cpp/cpp_64x64.png", options: ["C++", "C", "C#", "D"], answer: "C++", difficulty: "easy" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/ruby/ruby_64x64.png", options: ["Ruby", "Python", "Elixir", "Crystal"], answer: "Ruby", difficulty: "easy" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/go/go_64x64.png", options: ["Go", "Rust", "Erlang", "Haskell"], answer: "Go", difficulty: "medium" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/swift/swift_64x64.png", options: ["Swift", "Kotlin", "Dart", "Objective-C"], answer: "Swift", difficulty: "medium" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/rust/rust_64x64.png", options: ["Rust", "Go", "C", "C++"], answer: "Rust", difficulty: "medium" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/typescript/typescript_64x64.png", options: ["TypeScript", "JavaScript", "Dart", "CoffeeScript"], answer: "TypeScript", difficulty: "medium" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/kotlin/kotlin_64x64.png", options: ["Kotlin", "Swift", "Java", "Scala"], answer: "Kotlin", difficulty: "medium" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/php/php_64x64.png", options: ["PHP", "Python", "Perl", "Ruby"], answer: "PHP", difficulty: "medium" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/elixir/elixir_64x64.png", options: ["Elixir", "Erlang", "Haskell", "Scala"], answer: "Elixir", difficulty: "hard" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/scala/scala_64x64.png", options: ["Scala", "Kotlin", "Java", "Groovy"], answer: "Scala", difficulty: "hard" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/haskell/haskell_64x64.png", options: ["Haskell", "Erlang", "OCaml", "F#"], answer: "Haskell", difficulty: "hard" },
        { imgUrl: "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/dart/dart_64x64.png", options: ["Dart", "TypeScript", "Kotlin", "Swift"], answer: "Dart", difficulty: "hard" }
    ];

    const outputQuestions = [
        { code: 'print(2 + 3 * 4)', options: ["14", "20", "24", "11"], answer: "14", difficulty: "easy" },
        { code: 'console.log("5" + 3);', options: ["53", "8", "NaN", "Error"], answer: "53", difficulty: "easy" },
        { code: 'print("Hello" + " " + "World")', options: ["Hello World", "HelloWorld", "Hello  World", "Error"], answer: "Hello World", difficulty: "easy" },
        { code: 'console.log(typeof NaN);', options: ["number", "NaN", "undefined", "object"], answer: "number", difficulty: "medium" },
        { code: 'print(10 // 3)', options: ["3", "3.33", "3.0", "10/3"], answer: "3", difficulty: "medium" },
        { code: 'console.log(0.1 + 0.2 == 0.3);', options: ["false", "true", "undefined", "0.3"], answer: "false", difficulty: "medium" },
        { code: 'print(bool("False"))', options: ["True", "False", "Error", "None"], answer: "True", difficulty: "medium" },
        { code: 'console.log(3 > 2 > 1);', options: ["false", "true", "1", "undefined"], answer: "false", difficulty: "hard" },
        { code: 'console.log([] + []);', options: ['""', "0", "NaN", "undefined"], answer: '""', difficulty: "hard" },
        { code: 'print([] is [])', options: ["False", "True", "Error", "None"], answer: "False", difficulty: "hard" },
        { code: 'console.log(typeof typeof 1);', options: ["string", "number", "undefined", "object"], answer: "string", difficulty: "hard" }
    ];

    // Linux
    const linuxQuizQuestions = [
        { question: "Команда вывода списка файлов:", options: ["ls", "cd", "rm", "mkdir"], answer: "ls", difficulty: "easy" },
        { question: "Перейти в домашнюю директорию:", options: ["cd ~", "cd ..", "cd /", "home"], answer: "cd ~", difficulty: "easy" },
        { question: "Создать пустой файл:", options: ["touch file", "mkdir file", "echo > file", "cat file"], answer: "touch file", difficulty: "easy" },
        { question: "Удалить файл:", options: ["rm file", "del file", "remove file", "trash file"], answer: "rm file", difficulty: "easy" },
        { question: "Показать текущую дату:", options: ["date", "time", "clock", "datetime"], answer: "date", difficulty: "easy" },
        { question: "Что делает man?", options: ["Показывает руководство", "Удаляет файлы", "Перемещает файлы", "Меняет права"], answer: "Показывает руководство", difficulty: "medium" },
        { question: "Команда для изменения прав доступа:", options: ["chmod", "chown", "ls -l", "sudo"], answer: "chmod", difficulty: "medium" },
        { question: "Вывести первые 10 строк файла:", options: ["head", "tail", "cat", "less"], answer: "head", difficulty: "medium" },
        { question: "Поиск текста в файле:", options: ["grep", "find", "locate", "search"], answer: "grep", difficulty: "medium" },
        { question: "Остановить загрузку системы:", options: ["shutdown", "reboot", "halt", "poweroff"], answer: "shutdown", difficulty: "medium" },
        { question: "Какая команда показывает таблицу маршрутизации?", options: ["ip route", "route", "netstat -r", "traceroute"], answer: "ip route", difficulty: "hard" },
        { question: "Что делает команда 'chroot'?", options: ["Меняет корневую директорию", "Меняет права root", "Создаёт root-пользователя", "Удаляет систему"], answer: "Меняет корневую директорию", difficulty: "hard" },
        { question: "В каком файле хранятся пароли пользователей (современный Linux)?", options: ["/etc/shadow", "/etc/passwd", "/etc/group", "/etc/secure"], answer: "/etc/shadow", difficulty: "hard" }
    ];

    const linuxCommandMeaning = [
        { command: "ls -a", options: ["Показать все файлы, включая скрытые", "Показать только папки", "Удалить скрытые", "Создать скрытый файл"], answer: "Показать все файлы, включая скрытые", difficulty: "easy" },
        { command: "cd ..", options: ["Перейти на уровень вверх", "Перейти в корень", "Перейти домой", "Показать содержимое"], answer: "Перейти на уровень вверх", difficulty: "easy" },
        { command: "rm -r dir", options: ["Рекурсивно удалить директорию", "Переименовать dir", "Переместить dir", "Создать dir"], answer: "Рекурсивно удалить директорию", difficulty: "easy" },
        { command: "chmod +x script.sh", options: ["Сделать исполняемым", "Удалить script.sh", "Переместить script.sh", "Сжать script.sh"], answer: "Сделать исполняемым", difficulty: "medium" },
        { command: 'grep "error" log.txt', options: ["Найти строки с error", "Удалить error", "Заменить error", "Посчитать строки"], answer: "Найти строки с error", difficulty: "medium" },
        { command: "tail -f log.txt", options: ["Показывать новые строки в реальном времени", "Показать первые строки", "Удалить лог", "Сжать лог"], answer: "Показывать новые строки в реальном времени", difficulty: "medium" },
        { command: 'sed "s/old/new/g" file', options: ["Заменить old на new в файле", "Удалить old", "Переименовать файл", "Создать новый файл"], answer: "Заменить old на new в файле", difficulty: "hard" },
        { command: "find . -name '*.txt'", options: ["Найти все txt-файлы в текущей директории", "Удалить txt-файлы", "Создать txt-файлы", "Переместить txt-файлы"], answer: "Найти все txt-файлы в текущей директории", difficulty: "hard" },
        { command: "du -sh *", options: ["Размер файлов/папок в читаемом виде", "Свободное место на диске", "Удалить всё", "Показать процессы"], answer: "Размер файлов/папок в читаемом виде", difficulty: "hard" }
    ];

    const linuxCommandToAction = [
        { description: "Создать директорию с именем project", options: ["mkdir project", "touch project", "create project", "newdir project"], answer: "mkdir project", difficulty: "easy" },
        { description: "Показать текущую рабочую директорию", options: ["pwd", "ls", "cd", "dir"], answer: "pwd", difficulty: "easy" },
        { description: "Вывести содержимое файла readme.txt", options: ["cat readme.txt", "less readme.txt", "more readme.txt", "head readme.txt"], answer: "cat readme.txt", difficulty: "easy" },
        { description: "Сделать файл program.py исполняемым", options: ["chmod +x program.py", "chown +x program.py", "exec program.py", "run program.py"], answer: "chmod +x program.py", difficulty: "medium" },
        { description: "Завершить текущий процесс терминала", options: ["exit", "quit", "close", "bye"], answer: "exit", difficulty: "medium" },
        { description: "Посмотреть список запущенных процессов", options: ["ps aux", "top", "htop", "ls /proc"], answer: "ps aux", difficulty: "medium" },
        { description: "Заменить все 'foo' на 'bar' в файле data.txt", options: ["sed -i 's/foo/bar/g' data.txt", "replace foo bar data.txt", "find foo -replace bar", "cat data.txt | foo bar"], answer: "sed -i 's/foo/bar/g' data.txt", difficulty: "hard" },
        { description: "Вывести только IP-адрес интерфейса eth0", options: ["ip -4 addr show eth0 | grep -oP '(?<=inet\\s)\\d+(\\.\\d+){3}'", "ifconfig eth0 ip", "ping eth0", "netstat -i eth0"], answer: "ip -4 addr show eth0 | grep -oP '(?<=inet\\s)\\d+(\\.\\d+){3}'", difficulty: "hard" },
        { description: "Найти все файлы размером больше 1MB в текущей директории", options: ["find . -size +1M", "ls -l | grep >1M", "du -sh * | gt 1M", "locate +1M"], answer: "find . -size +1M", difficulty: "hard" }
    ];

    // Инструменты
    const toolsQuizQuestions = [
        { question: "Что такое Git?", options: ["Система контроля версий", "Текстовый редактор", "Язык программирования", "База данных"], answer: "Система контроля версий", difficulty: "easy" },
        { question: "Docker — это...", options: ["Платформа контейнеризации", "Виртуальная машина", "Облачное хранилище", "Менеджер пакетов"], answer: "Платформа контейнеризации", difficulty: "easy" },
        { question: "Для чего нужен Make?", options: ["Сборка проектов", "Резервное копирование", "Развёртывание сайтов", "Управление пользователями"], answer: "Сборка проектов", difficulty: "easy" },
        { question: "Какая команда создаёт новый Git-репозиторий?", options: ["git init", "git start", "git create", "git new"], answer: "git init", difficulty: "easy" },
        { question: "В Docker команда для запуска контейнера:", options: ["docker run", "docker start", "docker launch", "docker begin"], answer: "docker run", difficulty: "easy" },
        { question: "Что такое CI/CD?", options: ["Непрерывная интеграция/доставка", "Система управления конфигурациями", "Язык разметки", "Формат файлов"], answer: "Непрерывная интеграция/доставка", difficulty: "medium" },
        { question: "Git хранит изменения в виде...", options: ["Снимков (snapshots)", "Патчей", "Бинарных файлов", "Текстовых записей"], answer: "Снимков (snapshots)", difficulty: "medium" },
        { question: "Как в Makefile обозначается цель по умолчанию?", options: ["Первая цель", "Цель с именем 'all'", "Цель 'default'", "Цель с именем 'main'"], answer: "Первая цель", difficulty: "medium" },
        { question: "Что делает директива EXPOSE в Dockerfile?", options: ["Информирует о портах, которые слушает контейнер", "Открывает порт на хосте", "Запускает процесс", "Устанавливает переменные окружения"], answer: "Информирует о портах, которые слушает контейнер", difficulty: "medium" },
        { question: "Как игнорировать файлы в Git?", options: ["Создать .gitignore", "Пометить как skip", "Использовать git ignore", "Удалить из репозитория"], answer: "Создать .gitignore", difficulty: "medium" },
        { question: "Что такое Docker Compose?", options: ["Инструмент для описания многоконтейнерных приложений", "Система оркестрации Kubernetes", "Графический интерфейс Docker", "Утилита резервного копирования"], answer: "Инструмент для описания многоконтейнерных приложений", difficulty: "hard" },
        { question: "Что делает команда 'git rebase'?", options: ["Перебазирует коммиты поверх другой ветки", "Объединяет ветки с созданием слияния", "Откатывает изменения", "Копирует файлы из другой ветки"], answer: "Перебазирует коммиты поверх другой ветки", difficulty: "hard" },
        { question: "Как в Makefile использовать параллельную сборку?", options: ["make -j8", "make --parallel 8", "make -p8", "make concurrent=8"], answer: "make -j8", difficulty: "hard" },
        { question: "Что такое Docker Hub?", options: ["Реестр образов Docker", "Сервер для хранения контейнеров", "Клиент Docker", "Панель управления Docker"], answer: "Реестр образов Docker", difficulty: "hard" }
    ];

    const toolsCommandMeaning = [
        { command: "git clone <url>", options: ["Копирует удалённый репозиторий", "Создаёт новую ветку", "Удаляет репозиторий", "Синхронизирует изменения"], answer: "Копирует удалённый репозиторий", difficulty: "easy" },
        { command: "docker ps", options: ["Показывает запущенные контейнеры", "Запускает новый контейнер", "Останавливает все контейнеры", "Выводит список образов"], answer: "Показывает запущенные контейнеры", difficulty: "easy" },
        { command: "make clean", options: ["Удаляет скомпилированные файлы", "Собирает проект", "Очищает кэш", "Запускает тесты"], answer: "Удаляет скомпилированные файлы", difficulty: "easy" },
        { command: "git add -A", options: ["Добавляет все изменения в индекс", "Удаляет все файлы", "Просматривает историю", "Создаёт новую ветку"], answer: "Добавляет все изменения в индекс", difficulty: "medium" },
        { command: "docker build -t myapp .", options: ["Создаёт образ с тегом myapp", "Запускает контейнер myapp", "Удаляет образ myapp", "Скачивает myapp из реестра"], answer: "Создаёт образ с тегом myapp", difficulty: "medium" },
        { command: "git checkout -b new-feature", options: ["Создаёт новую ветку и переключается на неё", "Удаляет ветку new-feature", "Сливает ветку new-feature", "Просматривает ветку new-feature"], answer: "Создаёт новую ветку и переключается на неё", difficulty: "medium" },
        { command: "docker-compose up", options: ["Запускает сервисы из docker-compose.yml", "Останавливает все сервисы", "Собирает образы", "Просматривает логи"], answer: "Запускает сервисы из docker-compose.yml", difficulty: "medium" },
        { command: "make -j4", options: ["Запускает сборку в 4 потока", "Выполняет 4 цели подряд", "Очищает проект 4 раза", "Создаёт 4 резервные копии"], answer: "Запускает сборку в 4 потока", difficulty: "hard" },
        { command: "git stash pop", options: ["Восстанавливает последние спрятанные изменения", "Сохраняет текущие изменения", "Удаляет stash", "Просматривает stash"], answer: "Восстанавливает последние спрятанные изменения", difficulty: "hard" },
        { command: "docker exec -it container bash", options: ["Подключается к контейнеру с оболочкой bash", "Перезапускает контейнер", "Удаляет контейнер", "Создаёт новый контейнер"], answer: "Подключается к контейнеру с оболочкой bash", difficulty: "hard" }
    ];

    const toolsCommandToAction = [
        { description: "Создать новый Git-репозиторий в текущей папке", options: ["git init", "git create", "git new", "git start"], answer: "git init", difficulty: "easy" },
        { description: "Запустить образ nginx в Docker с пробросом порта 80", options: ["docker run -p 80:80 nginx", "docker run nginx:80", "docker start nginx -p 80", "docker launch nginx 80"], answer: "docker run -p 80:80 nginx", difficulty: "easy" },
        { description: "Просмотреть историю коммитов в Git", options: ["git log", "git history", "git show", "git commits"], answer: "git log", difficulty: "easy" },
        { description: "Остановить контейнер mycontainer", options: ["docker stop mycontainer", "docker kill mycontainer", "docker pause mycontainer", "docker off mycontainer"], answer: "docker stop mycontainer", difficulty: "medium" },
        { description: "Добавить все изменения в индекс Git и сделать коммит", options: ["git commit -a -m 'msg'", "git add . && git commit -m 'msg'", "git commit all -m 'msg'", "git save -m 'msg'"], answer: "git add . && git commit -m 'msg'", difficulty: "medium" },
        { description: "Собрать проект с помощью Make, используя 8 потоков", options: ["make -j8", "make --threads 8", "make parallel=8", "make -p8"], answer: "make -j8", difficulty: "medium" },
        { description: "Удалить образ myimage в Docker", options: ["docker rmi myimage", "docker remove myimage", "docker delete myimage", "docker erase myimage"], answer: "docker rmi myimage", difficulty: "medium" },
        { description: "Переключиться на существующую ветку develop в Git", options: ["git checkout develop", "git switch develop", "git branch develop", "git change develop"], answer: "git checkout develop", difficulty: "hard" },
        { description: "Скопировать файл из контейнера на хост", options: ["docker cp container:/path/file .", "docker copy container:/path/file .", "docker get container:/path/file .", "docker export container:/path/file ."], answer: "docker cp container:/path/file .", difficulty: "hard" },
        { description: "Вывести список целей в Makefile", options: ["make -p | grep -E '^[a-zA-Z]'", "make list", "make targets", "make help"], answer: "make -p | grep -E '^[a-zA-Z]'", difficulty: "hard" }
    ];

    // ================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==================
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // ================== КЛАСС QUIZ ==================
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
                    <div class="difficulty-title">Выберите уровень сложности</div>
                    <div class="difficulty-buttons">
                        <button class="diff-btn easy" data-diff="easy">😊 Лёгкий</button>
                        <button class="diff-btn medium" data-diff="medium">🧐 Средний</button>
                        <button class="diff-btn hard" data-diff="hard">🤯 Сложный</button>
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
            const filtered = this.initialQuestions.filter(q => q.difficulty === difficulty);
            if (filtered.length === 0) {
                alert(`Нет вопросов уровня ${difficulty}!`);
                return;
            }
            this.questions = shuffleArray([...filtered]);
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
                <button class="btn next-btn" style="display:none;">Далее</button>
                <div class="result-screen" style="display:none;">
                    <h1>🏁 Результат</h1>
                    <div class="score-final"></div>
                    <div class="comment"></div>
                    <button class="btn restart-btn">Пройти ещё раз</button>
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
            this.elements.questionCounter.textContent = `Вопрос ${this.currentIndex + 1} из ${this.questions.length}`;
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
                if (btn.textContent === correct) {
                    btn.classList.add('correct');
                }
            });
            if (selected === correct) {
                this.score++;
                this.elements.feedback.innerHTML = '✅ Верно!';
                this.elements.feedback.style.color = '#00c853';
            } else {
                clickedBtn.classList.add('wrong');
                this.elements.feedback.innerHTML = `❌ Неверно. Правильный ответ: <strong>${correct}</strong>`;
                this.elements.feedback.style.color = '#ff5252';
            }
            const isLast = this.currentIndex === this.questions.length - 1;
            this.elements.nextBtn.textContent = isLast ? 'Посмотреть результаты' : 'Далее';
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
            if (percent === 100) comment = '🏆 Вы — настоящий эксперт!';
            else if (percent >= 80) comment = '🥇 Отличный результат!';
            else if (percent >= 60) comment = '🥈 Неплохо, но есть куда расти.';
            else if (percent >= 40) comment = '🥉 Можно лучше, продолжайте учиться.';
            else comment = '📚 Начало пути — это здорово!';
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

    // ================== ИНИЦИАЛИЗАЦИЯ ПОДТАБОВ В БЛОКЕ ==================
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
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                switchTab(tab);
            });
        });

        const firstTab = tabConfig[0].tabName;
        switchTab(firstTab);
    }

    // ================== ГЛОБАЛЬНОЕ ПЕРЕКЛЮЧЕНИЕ ==================
    const globalTabBtns = document.querySelectorAll('.global-tab-btn');
    const blocks = {
        languages: document.getElementById('languages-block'),
        os: document.getElementById('os-block'),
        tools: document.getElementById('tools-block')
    };

    function switchGlobalBlock(blockName) {
        globalTabBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.global-tab-btn[data-global="${blockName}"]`).classList.add('active');

        Object.keys(blocks).forEach(key => {
            blocks[key].classList.remove('active');
        });
        blocks[blockName].classList.add('active');
    }

    globalTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const global = btn.getAttribute('data-global');
            switchGlobalBlock(global);
        });
    });

    // ================== КОНФИГИ ТАБОВ ==================
    const languagesConfig = [
        { tabName: 'questions', panelId: 'panel-questions', questions: quizQuestions, render: q => q.question },
        { tabName: 'code', panelId: 'panel-code', questions: codeQuestions, render: q => `<pre><code>${q.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>` },
        { tabName: 'logo', panelId: 'panel-logo', questions: logoQuestions, render: q => `<img src="${q.imgUrl}" alt="Логотип языка" onerror="this.style.display='none'; this.parentElement.innerHTML+='<p>🚫 Изображение не загрузилось. Угадайте по вариантам!</p>'">` },
        { tabName: 'output', panelId: 'panel-output', questions: outputQuestions, render: q => `<p>Что выведет этот код?</p><pre><code>${q.code.replace(/</g, '&lt;')}</code></pre>` }
    ];

    const linuxConfig = [
        { tabName: 'linux-questions', panelId: 'panel-linux-questions', questions: linuxQuizQuestions, render: q => q.question },
        { tabName: 'linux-cmd-meaning', panelId: 'panel-linux-cmd-meaning', questions: linuxCommandMeaning, render: q => `<p>Что делает эта команда?</p><pre><code>${q.command.replace(/</g, '&lt;')}</code></pre>` },
        { tabName: 'linux-cmd-to-action', panelId: 'panel-linux-cmd-to-action', questions: linuxCommandToAction, render: q => `<p>${q.description}</p>` }
    ];

    const toolsConfig = [
        { tabName: 'tools-questions', panelId: 'panel-tools-questions', questions: toolsQuizQuestions, render: q => q.question },
        { tabName: 'tools-cmd-meaning', panelId: 'panel-tools-cmd-meaning', questions: toolsCommandMeaning, render: q => `<p>Что делает эта команда?</p><pre><code>${q.command.replace(/</g, '&lt;')}</code></pre>` },
        { tabName: 'tools-cmd-to-action', panelId: 'panel-tools-cmd-to-action', questions: toolsCommandToAction, render: q => `<p>${q.description}</p>` }
    ];

    // Инициализация всех блоков
    initBlockTabs(blocks.languages, languagesConfig);
    initBlockTabs(blocks.os, linuxConfig);
    initBlockTabs(blocks.tools, toolsConfig);
})();