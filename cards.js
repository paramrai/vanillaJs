let page = 1;
let isLoading = false;
const projectsPerPage = 10;
const cardsContainer = document.getElementById("cards");

const projects = [
  {
    title: "To-Do List",
    description: "Simple to-do list with local storage",
    number: 1,
    github: "https://github.com/paramrai/vanillaJs/tree/main/todoList",
    demo: "./todoList/index.html",
    difficulty: "beginner",
    isAdded: true,
  },
  {
    title: "Calculator",
    description: "Basic arithmetic calculator with keyboard support",
    number: 2,
    github: "https://github.com/paramrai/vanillaJs/tree/main/calculator",
    demo: "./calculator/index.html",
    difficulty: "beginner",
    isAdded: true,
  },
  {
    title: "Digital Clock",
    description: "Real-time digital clock with date display",
    number: 3,
    github: "https://github.com/paramrai/vanillaJs/tree/main/digitalClock",
    demo: "./digitalClock/index.html",
    difficulty: "beginner",
    isAdded: true,
  },
  {
    title: "Color Picker",
    description: "RGB and HEX color picker with preview",
    number: 4,
    github: "https://github.com/paramrai/vanillaJs/tree/main/colorPicker",
    demo: "./colorPicker/index.html",
    difficulty: "beginner",
    isAdded: true,
  },
  {
    title: "Weather App",
    description: "Weather forecast using weather API",
    number: 5,
    github: "https://github.com/example/weather-app",
    demo: "https://example.com/weather-app-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Form Validator",
    description: "Input validation with regex patterns",
    number: 6,
    github: "https://github.com/example/form-validator",
    demo: "https://example.com/form-validator-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Password Generator",
    description: "Random password generator with options",
    number: 7,
    github: "https://github.com/example/password-generator",
    demo: "https://example.com/password-generator-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Typing Speed Test",
    description: "Test typing speed and accuracy",
    number: 8,
    github: "https://github.com/example/typing-speed-test",
    demo: "https://example.com/typing-speed-test-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Memory Game",
    description: "Card matching memory game",
    number: 9,
    github: "https://github.com/example/memory-game",
    demo: "https://example.com/memory-game-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Quiz App",
    description: "Multiple choice quiz with score tracking",
    number: 10,
    github: "https://github.com/paramrai/vanillaJs/tree/main/quizApp",
    demo: "./quizApp/index.html",
    difficulty: "beginner",
    isAdded: true,
  },
  {
    title: "Notes App",
    description: "Note-taking app with categories",
    number: 11,
    github: "https://github.com/example/notes-app",
    demo: "https://example.com/notes-app-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Countdown Timer",
    description: "Event countdown with date picker",
    number: 12,
    github: "https://github.com/example/countdown-timer",
    demo: "https://example.com/countdown-timer-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Budget Calculator",
    description: "Income and expense tracker",
    number: 13,
    github: "https://github.com/example/budget-calculator",
    demo: "https://example.com/budget-calculator-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Pomodoro Timer",
    description: "Work/break timer with notifications",
    number: 14,
    github: "https://github.com/example/pomodoro-timer",
    demo: "https://example.com/pomodoro-timer-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Drawing App",
    description: "Canvas-based drawing tool",
    number: 15,
    github: "https://github.com/example/drawing-app",
    demo: "https://example.com/drawing-app-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Music Player",
    description: "Audio player with playlist support",
    number: 16,
    github: "https://github.com/example/music-player",
    demo: "https://example.com/music-player-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Tic Tac Toe",
    description: "Classic game with AI opponent",
    number: 17,
    github: "https://github.com/example/tic-tac-toe",
    demo: "https://example.com/tic-tac-toe-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Snake Game",
    description: "Classic snake game with score",
    number: 18,
    github: "https://github.com/example/snake-game",
    demo: "https://example.com/snake-game-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Hangman Game",
    description: "Word guessing game with hints",
    number: 19,
    github: "https://github.com/example/hangman-game",
    demo: "https://example.com/hangman-game-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "BMI Calculator",
    description: "Body Mass Index calculator with chart",
    number: 20,
    github: "https://github.com/example/bmi-calculator",
    demo: "https://example.com/bmi-calculator-demo",
    difficulty: "beginner",
    isAdded: false,
  },
  {
    title: "Speech Recognition",
    description: "Voice to text converter",
    number: 21,
    github: "https://github.com/example/speech-recognition",
    demo: "https://example.com/speech-recognition-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Text to Speech",
    description: "Convert text to voice with options",
    number: 22,
    github: "https://github.com/example/text-to-speech",
    demo: "https://example.com/text-to-speech-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Currency Converter",
    description: "Real-time currency exchange rates",
    number: 23,
    github: "https://github.com/example/currency-converter",
    demo: "https://example.com/currency-converter-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Image Slider",
    description: "Responsive image carousel",
    number: 24,
    github: "https://github.com/example/image-slider",
    demo: "https://example.com/image-slider-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Recipe Finder",
    description: "Search recipes by ingredients",
    number: 25,
    github: "https://github.com/example/recipe-finder",
    demo: "https://example.com/recipe-finder-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Drag and Drop",
    description: "Sortable list with drag and drop",
    number: 26,
    github: "https://github.com/example/drag-and-drop",
    demo: "https://example.com/drag-and-drop-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Virtual Keyboard",
    description: "On-screen keyboard with typing support",
    number: 27,
    github: "https://github.com/example/virtual-keyboard",
    demo: "https://example.com/virtual-keyboard-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "GitHub Profile Finder",
    description: "Search and display GitHub user profiles",
    number: 28,
    github: "https://github.com/example/github-profile-finder",
    demo: "https://example.com/github-profile-finder-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Movie Search",
    description: "Search movies using OMDB API",
    number: 29,
    github: "https://github.com/example/movie-search",
    demo: "https://example.com/movie-search-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Expense Tracker",
    description: "Track income and expenses with charts",
    number: 30,
    github: "https://github.com/example/expense-tracker",
    demo: "https://example.com/expense-tracker-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Music Visualizer",
    description: "Audio visualization with canvas",
    number: 31,
    github: "https://github.com/example/music-visualizer",
    demo: "https://example.com/music-visualizer-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Pixel Art Maker",
    description: "Create pixel art with color palette",
    number: 32,
    github: "https://github.com/example/pixel-art-maker",
    demo: "https://example.com/pixel-art-maker-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Calendar App",
    description: "Monthly calendar with events",
    number: 33,
    github: "https://github.com/example/calendar-app",
    demo: "https://example.com/calendar-app-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "File Uploader",
    description: "Drag and drop file upload with preview",
    number: 34,
    github: "https://github.com/example/file-uploader",
    demo: "https://example.com/file-uploader-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Markdown Editor",
    description: "Real-time markdown preview editor",
    number: 35,
    github: "https://github.com/example/markdown-editor",
    demo: "https://example.com/markdown-editor-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Chess Game",
    description: "Two-player chess with move validation",
    number: 36,
    github: "https://github.com/example/chess-game",
    demo: "https://example.com/chess-game-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes from text/URLs",
    number: 37,
    github: "https://github.com/example/qr-code-generator",
    demo: "https://example.com/qr-code-generator-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Chat App",
    description: "Real-time chat with WebSocket",
    number: 38,
    github: "https://github.com/example/chat-app",
    demo: "https://example.com/chat-app-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Code Editor",
    description: "Simple code editor with syntax highlighting",
    number: 39,
    github: "https://github.com/example/code-editor",
    demo: "https://example.com/code-editor-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "PDF Viewer",
    description: "View and navigate PDF files",
    number: 40,
    github: "https://github.com/example/pdf-viewer",
    demo: "https://example.com/pdf-viewer-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Kanban Board",
    description: "Drag and drop task management",
    number: 41,
    github: "https://github.com/example/kanban-board",
    demo: "https://example.com/kanban-board-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Data Visualization",
    description: "Interactive charts using D3.js",
    number: 42,
    github: "https://github.com/example/data-visualization",
    demo: "https://example.com/data-visualization-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Word Counter",
    description: "Count words, characters and sentences",
    number: 43,
    github: "https://github.com/example/word-counter",
    demo: "https://example.com/word-counter-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Image Editor",
    description: "Basic image editing tools",
    number: 44,
    github: "https://github.com/example/image-editor",
    demo: "https://example.com/image-editor-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Video Player",
    description: "Custom controls video player",
    number: 45,
    github: "https://github.com/example/video-player",
    demo: "https://example.com/video-player-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Meme Generator",
    description: "Create memes with custom text",
    number: 46,
    github: "https://github.com/example/meme-generator",
    demo: "https://example.com/meme-generator-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Password Strength Checker",
    description: "Check password security level",
    number: 47,
    github: "https://github.com/example/password-strength-checker",
    demo: "https://example.com/password-strength-checker-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Breakout Game",
    description: "Classic brick breaker game",
    number: 48,
    github: "https://github.com/example/breakout-game",
    demo: "https://example.com/breakout-game-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "2048 Game",
    description: "Number sliding puzzle game",
    number: 49,
    github: "https://github.com/example/2048-game",
    demo: "https://example.com/2048-game-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Sudoku Solver",
    description: "Solve and validate Sudoku puzzles",
    number: 50,
    github: "https://github.com/example/sudoku-solver",
    demo: "https://example.com/sudoku-solver-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "URL Shortener",
    description: "Shorten long URLs with API",
    number: 51,
    github: "https://github.com/example/url-shortener",
    demo: "https://example.com/url-shortener-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Emoji Picker",
    description: "Searchable emoji selector",
    number: 52,
    github: "https://github.com/example/emoji-picker",
    demo: "https://example.com/emoji-picker-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Voice Recorder",
    description: "Record and save audio clips",
    number: 53,
    github: "https://github.com/example/voice-recorder",
    demo: "https://example.com/voice-recorder-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Math Game",
    description: "Quick math practice game",
    number: 54,
    github: "https://github.com/example/math-game",
    demo: "https://example.com/math-game-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Tetris Game",
    description: "Classic tetris with scoring",
    number: 55,
    github: "https://github.com/example/tetris-game",
    demo: "https://example.com/tetris-game-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Contact Form",
    description: "Form with email integration",
    number: 56,
    github: "https://github.com/example/contact-form",
    demo: "https://example.com/contact-form-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Screen Recorder",
    description: "Record screen with MediaRecorder API",
    number: 57,
    github: "https://github.com/example/screen-recorder",
    demo: "https://example.com/screen-recorder-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Photo Gallery",
    description: "Responsive image gallery with filters",
    number: 58,
    github: "https://github.com/example/photo-gallery",
    demo: "https://example.com/photo-gallery-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Dictionary App",
    description: "Word definitions with API",
    number: 59,
    github: "https://github.com/example/dictionary-app",
    demo: "https://example.com/dictionary-app-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Memory Card Game",
    description: "Flip and match card pairs",
    number: 60,
    github: "https://github.com/example/memory-card-game",
    demo: "https://example.com/memory-card-game-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Random Quote Generator",
    description: "Generate quotes with tweet option",
    number: 61,
    github: "https://github.com/example/random-quote-generator",
    demo: "https://example.com/random-quote-generator-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Pagination Component",
    description: "Custom pagination with data",
    number: 62,
    github: "https://github.com/example/pagination-component",
    demo: "https://example.com/pagination-component-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Video Conference",
    description: "WebRTC based video chat",
    number: 63,
    github: "https://github.com/example/video-conference",
    demo: "https://example.com/video-conference-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Browser Storage Manager",
    description: "Manage local/session storage",
    number: 64,
    github: "https://github.com/example/browser-storage-manager",
    demo: "https://example.com/browser-storage-manager-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Form Builder",
    description: "Drag and drop form creator",
    number: 65,
    github: "https://github.com/example/form-builder",
    demo: "https://example.com/form-builder-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Unit Converter",
    description: "Convert between various units",
    number: 66,
    github: "https://github.com/example/unit-converter",
    demo: "https://example.com/unit-converter-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Face Detection",
    description: "Detect faces in images",
    number: 67,
    github: "https://github.com/example/face-detection",
    demo: "https://example.com/face-detection-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "CSS Generator",
    description: "Generate CSS code with UI",
    number: 68,
    github: "https://github.com/example/css-generator",
    demo: "https://example.com/css-generator-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Infinite Scroll",
    description: "Endless scrolling with API",
    number: 69,
    github: "https://github.com/example/infinite-scroll",
    demo: "https://example.com/infinite-scroll-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Web Scraper",
    description: "Extract data from websites",
    number: 70,
    github: "https://github.com/example/web-scraper",
    demo: "https://example.com/web-scraper-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Habit Tracker",
    description: "Track daily habits with streaks",
    number: 71,
    github: "https://github.com/example/habit-tracker",
    demo: "https://example.com/habit-tracker-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Paint Tool",
    description: "Drawing app with brushes",
    number: 72,
    github: "https://github.com/example/paint-tool",
    demo: "https://example.com/paint-tool-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "News Reader",
    description: "RSS feed reader with categories",
    number: 73,
    github: "https://github.com/example/news-reader",
    demo: "https://example.com/news-reader-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Barcode Scanner",
    description: "Scan barcodes with camera",
    number: 74,
    github: "https://github.com/example/barcode-scanner",
    demo: "https://example.com/barcode-scanner-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Image Compressor",
    description: "Compress images client-side",
    number: 75,
    github: "https://github.com/example/image-compressor",
    demo: "https://example.com/image-compressor-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Social Media Dashboard",
    description: "Track social media metrics",
    number: 76,
    github: "https://github.com/example/social-media-dashboard",
    demo: "https://example.com/social-media-dashboard-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Grammar Checker",
    description: "Check text for grammar errors",
    number: 77,
    github: "https://github.com/example/grammar-checker",
    demo: "https://example.com/grammar-checker-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Meditation App",
    description: "Timer with ambient sounds",
    number: 78,
    github: "https://github.com/example/meditation-app",
    demo: "https://example.com/meditation-app-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Portfolio Generator",
    description: "Create portfolio from template",
    number: 79,
    github: "https://github.com/example/portfolio-generator",
    demo: "https://example.com/portfolio-generator-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Code Snippet Manager",
    description: "Save and organize code snippets",
    number: 80,
    github: "https://github.com/example/code-snippet-manager",
    demo: "https://example.com/code-snippet-manager-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Browser Homepage",
    description: "Custom browser start page",
    number: 81,
    github: "https://github.com/example/browser-homepage",
    demo: "https://example.com/browser-homepage-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Stock Tracker",
    description: "Track stock prices with API",
    number: 82,
    github: "https://github.com/example/stock-tracker",
    demo: "https://example.com/stock-tracker-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Flashcard App",
    description: "Study cards with spaced repetition",
    number: 83,
    github: "https://github.com/example/flashcard-app",
    demo: "https://example.com/flashcard-app-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "PWA Generator",
    description: "Generate PWA from website",
    number: 84,
    github: "https://github.com/example/pwa-generator",
    demo: "https://example.com/pwa-generator-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Bookmark Manager",
    description: "Organize browser bookmarks",
    number: 85,
    github: "https://github.com/example/bookmark-manager",
    demo: "https://example.com/bookmark-manager-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Multiplayer Pong",
    description: "Classic pong with multiplayer",
    number: 86,
    github: "https://github.com/example/multiplayer-pong",
    demo: "https://example.com/multiplayer-pong-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Animation Editor",
    description: "Create CSS animations",
    number: 87,
    github: "https://github.com/example/animation-editor",
    demo: "https://example.com/animation-editor-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Encryption Tool",
    description: "Encrypt/decrypt text messages",
    number: 88,
    github: "https://github.com/example/encryption-tool",
    demo: "https://example.com/encryption-tool-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Blog Platform",
    description: "Simple blogging platform",
    number: 89,
    github: "https://github.com/example/blog-platform",
    demo: "https://example.com/blog-platform-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Web Analytics",
    description: "Track website visitor data",
    number: 90,
    github: "https://github.com/example/web-analytics",
    demo: "https://example.com/web-analytics-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "3D Cube",
    description: "Interactive 3D cube with CSS",
    number: 91,
    github: "https://github.com/example/3d-cube",
    demo: "https://example.com/3d-cube-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Site Builder",
    description: "Drag and drop website builder",
    number: 92,
    github: "https://github.com/example/site-builder",
    demo: "https://example.com/site-builder-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Image Recognition",
    description: "Identify objects in images",
    number: 93,
    github: "https://github.com/example/image-recognition",
    demo: "https://example.com/image-recognition-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Music Theory Tool",
    description: "Learn music scales and chords",
    number: 94,
    github: "https://github.com/example/music-theory-tool",
    demo: "https://example.com/music-theory-tool-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "JavaScript Game Engine",
    description: "Simple 2D game engine",
    number: 95,
    github: "https://github.com/example/javascript-game-engine",
    demo: "https://example.com/javascript-game-engine-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Speech Game",
    description: "Voice-controlled game",
    number: 96,
    github: "https://github.com/example/speech-game",
    demo: "https://example.com/speech-game-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Network Speed Test",
    description: "Test internet connection speed",
    number: 97,
    github: "https://github.com/example/network-speed-test",
    demo: "https://example.com/network-speed-test-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Data Structure Visualizer",
    description: "Visualize common data structures",
    number: 98,
    github: "https://github.com/example/data-structure-visualizer",
    demo: "https://example.com/data-structure-visualizer-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Algorithm Visualizer",
    description: "Visualize sorting algorithms",
    number: 99,
    github: "https://github.com/example/algorithm-visualizer",
    demo: "https://example.com/algorithm-visualizer-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
  {
    title: "Progressive Web App",
    description: "Offline-capable web application",
    number: 100,
    github: "https://github.com/example/progressive-web-app",
    demo: "https://example.com/progressive-web-app-demo",
    difficulty: "intermediate",
    isAdded: false,
  },
];

// Update difficulty levels in projects array
projects.forEach((project) => {
  // Advanced projects
  if (
    project.title.includes("Game Engine") ||
    project.title.includes("Video Conference") ||
    project.title.includes("Data Structure") ||
    project.title.includes("Algorithm") ||
    project.title.includes("Web Analytics") ||
    project.title.includes("Image Recognition") ||
    project.title.includes("Face Detection") ||
    project.title.includes("Progressive Web App") ||
    project.title.includes("Site Builder") ||
    project.title.includes("Web Scraper")
  ) {
    project.difficulty = "advanced";
  }
  // Beginner projects
  else if (
    project.title.includes("Calculator") ||
    project.title.includes("Clock") ||
    project.title.includes("To-Do") ||
    project.title.includes("Color Picker") ||
    project.title.includes("Counter") ||
    project.title.includes("Quiz") ||
    project.title.includes("BMI") ||
    project.description.includes("simple") ||
    project.description.includes("basic") ||
    project.title.includes("Notes")
  ) {
    project.difficulty = "beginner";
  }
  // Everything else is intermediate
  else {
    project.difficulty = "intermediate";
  }
});

// Sort projects by difficulty
projects.sort((a, b) => {
  const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
  return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
});

// Update project numbers after sorting
projects.forEach((project, index) => {
  project.number = index + 1;
});

const firstTenProjects = projects.slice(0, 10);

function createCard(project, index) {
  const card = document.createElement("div");
  card.className = `card ${project.isAdded ? "" : "disabled"}`;
  card.innerHTML = `
        <div class="difficulty-badge ${project.difficulty || "beginner"}">
            ${project.difficulty || "Beginner"}
        </div>
        <div>
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="card-buttons">
                <a href="${
                  project.github
                }" target="_blank" class="project-link github-link">
                    <i class="fab fa-github"></i> View Code
                </a>
                <a href="${
                  project.demo
                }" target="_blank" class="project-link demo-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
        <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
    `;

  card.style.animationDelay = `${index * 0.1}s`;
  return card;
}

function createSpinner() {
  const spinner = document.createElement("div");
  spinner.className = "spinner-container";
  spinner.innerHTML = '<div class="spinner"></div>';
  return spinner;
}

let hasReachedEnd = false;

async function loadMoreCards() {
  if (isLoading || hasReachedEnd) return;

  const start = (page - 1) * projectsPerPage;
  const end = start + projectsPerPage;

  // Check if we've reached the end
  if (start >= projects.length) {
    if (!hasReachedEnd) {
      hasReachedEnd = true;
      // Remove any existing end message first
      const existingEndMessage = document.querySelector(".end-message");
      if (existingEndMessage) {
        existingEndMessage.remove();
      }

      const endMessage = document.createElement("div");
      endMessage.className = "end-message";
      endMessage.textContent = "You've reached the end of the projects! 🎉";
      document.querySelector("#body").appendChild(endMessage);

      // Remove scroll event listener
      window.removeEventListener("scroll", debouncedHandleScroll);
      window.removeEventListener("touchmove", debouncedHandleScroll);
      window.removeEventListener("touchend", debouncedHandleScroll);
    }
    return;
  }

  isLoading = true;

  // Add spinner
  const spinner = createSpinner();
  document.getElementById("body").appendChild(spinner);
  spinner.classList.add("show");

  // Wait for 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Get next batch of projects
  const projectsToLoad = projects.slice(start, end);

  // Remove spinner with fade out
  spinner.classList.remove("show");
  setTimeout(() => spinner.remove(), 300);

  projectsToLoad.forEach((project, index) => {
    cardsContainer.appendChild(createCard(project, start + index));
  });

  page++;
  isLoading = false;
}

// Add debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function isMobile() {
  return window.innerWidth <= 768;
}

function handleScroll() {
  if (hasReachedEnd) return;

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const mobileMargin = isMobile() ? 150 : 50; // Larger margin for mobile

  // Use window.innerHeight as fallback for mobile browsers
  const viewportHeight = clientHeight || window.innerHeight;
  const currentScroll = scrollTop || window.pageYOffset;

  // Check if we're near the bottom
  if (currentScroll + viewportHeight >= scrollHeight - mobileMargin) {
    loadMoreCards();
  }
}

// Use debounced version of scroll handler
const debouncedHandleScroll = debounce(handleScroll, 100);

// Initial load
loadMoreCards();

// Remove old event listener and add debounced version
window.removeEventListener("scroll", handleScroll);
window.addEventListener("scroll", debouncedHandleScroll);

// Add touch events for mobile
if ("ontouchstart" in window) {
  window.addEventListener("touchmove", debouncedHandleScroll);
  window.addEventListener("touchend", debouncedHandleScroll);
}
