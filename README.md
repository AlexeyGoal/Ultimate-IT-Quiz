# "Ultimate IT Quiz"

This is an interactive web application for testing and reinforcing knowledge in three key IT areas: programming languages, the Linux operating system, and popular development tools (Git, Docker, Make).

The project is a dynamic quiz player featuring a modern design (neomorphism + glassmorphism), responsive layout, and an intuitive navigation system.

## Key Features

### 1. Three Global Modules (switch via top tabs)
-  **Programming Languages**
-  **Linux**
-  **Tools (Git, Docker, Make)**

### 2. Diverse Question Formats (within each module)

| Module | Formats |
|--------|---------|
| **Languages** | – Traditional questions<br>– Guess the language from code snippet<br>– Guess the language from logo<br>– Guess the program output |
| **Linux** | – Traditional questions<br>– What does the command do?<br>– Which command to enter for an action? |
| **Tools** | – Traditional questions<br>– What does the command do? (git/docker/make)<br>– Which command to enter? |

### 3. Three Difficulty Levels
-  **Easy**
-  **Medium**
-  **Hard**

### 4. Gameplay Experience
- Progress bar
- Question counter
- Instant feedback (correct/incorrect)
- Correct answer highlighting
- Final score with personalized comment

## Technical Details

- **Pure HTML + CSS + JS** (no frameworks)
- **Responsive design** for mobile devices and desktops
- **Animations and glass effect** (backdrop-filter)
- **Language logos** loaded from public CDN
- **Random selection** of questions and answer options
- **Separate state** for each tab (quizzes don't interfere with each other)