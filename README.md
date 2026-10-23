# Portfolio Website - Module 4 Practical 1

## 🌐 Live Website
[View on GitHub Pages](https://bhavya.github.io/portfolio)

## 📋 Project Overview
A fully responsive **Personal Portfolio Website** built using HTML5, CSS3, Bootstrap 5, and JavaScript.
This project demonstrates **version control using Git and GitHub** as part of Module 4 - Practical 1.

## 🚀 Features
- ✅ Fully responsive design (mobile-first)
- ✅ Beautiful dark theme with glassmorphism
- ✅ Smooth scroll and section reveal animations
- ✅ Typewriter effect in hero section
- ✅ Animated skill progress bars
- ✅ Project showcase with live/code links
- ✅ Functional contact form with validation
- ✅ Dark/Light mode toggle (added via feature branch)
- ✅ SEO optimized

## 🗂️ Project Structure
```
Practical_1/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main stylesheet
│   └── theme.css       # Theme (feature branch)
├── js/
│   └── main.js         # JavaScript logic
├── .gitignore
└── README.md
```

## 🛠️ Technologies Used
| Technology | Purpose |
|---|---|
| HTML5 | Page structure & semantics |
| CSS3 | Styling, animations, glassmorphism |
| Bootstrap 5 | Responsive grid & components |
| JavaScript (ES6+) | Interactivity & DOM manipulation |
| Git & GitHub | Version control |

## ⚡ How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/bhavya/portfolio.git
   ```
2. Navigate to folder:
   ```bash
   cd portfolio
   ```
3. Open `index.html` in your browser — or use Live Server in VS Code.

## 📝 Git Workflow
```bash
git init                        # Initialize repo
git add .                       # Stage files
git commit -m "Initial commit" # Commit
git branch feature/dark-mode    # Create feature branch
git checkout feature/dark-mode  # Switch to branch
# Make changes...
git add . && git commit -m "feat: add dark/light mode toggle"
git checkout main
git merge feature/dark-mode     # Merge
git push origin main            # Push to GitHub
```

## 🌿 Branches
- `main` — Production-ready code
- `feature/dark-mode` — Dark/Light mode toggle feature

## 👤 Author
**Bhavya** | B.Tech Computer Science
- GitHub: [@bhavya](https://github.com)
- Email: bhavya@email.com
