# 🎮 Memory Card Game (React Basics & State Management)

A fun and interactive Memory Card Game built with React to practice components, props, state management, hooks, and game logic. Users can test their memory by finding matching pairs of cards. This project demonstrates how to manage state, implement custom hooks, handle user interactions, and structure a React project professionally.

## Features

Interactive Gameplay: Flip cards and match pairs to score points.

Random Card Sets: Play with fruits, animals, emojis, or sports themes.

Preview Phase: Cards are briefly revealed at the start of the game to memorize positions.

Score & Moves Tracking: Real-time updates for performance.

Win Detection: Celebratory message with blurred background on winning.

New Game & Restart: Start a new game anytime with a single click.

## Technology Stack

Frontend: React (Vite + JavaScript)

Styling: CSS3 (responsive and interactive effects)

State Management: React Hooks (useState, useEffect)

Custom Hook: useGameLogic for game state & logic separation

## Folder Structure
``` bash
memory-card-game/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── GameHeader.jsx
│   │   └── WinMessage.jsx
│   │
│   ├── hooks/
│   │   └── useGameLogic.js
│   │
│   ├── App.jsx
│   └── index.css
│
├── package.json
└── README.md

```

## Gameplay Instructions

Click Start Game to reveal all cards for a few seconds (preview phase).

Memorize the cards and wait for them to flip back.

Click two cards at a time to find matching pairs.

Successfully matched pairs remain visible and highlighted.

Track your Score and Moves in the game header.

When all pairs are matched, a Win Message appears.

Use New Game button to reset and play with a new random card set.

## Getting Started
Prerequisites

Node.js >= 16.x

npm or yarn

## Installation
### Clone the repository
``` bash
git clone https://github.com/<your-username>/memory-card-game.git
```

### Navigate into the folder
``` bash
cd memory-card-game
```

### Install dependencies
``` bash
npm install
```

### or
``` bash
yarn install
```

Running the App
### Start the development server
```bash
npm run dev
```

### or
```bash
yarn dev
```
```
 Open http://localhost:5173
```
 to view the game in your browser.
 
## Screenshots

### 1. Game Starting
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/f193ab54-36c6-48f7-90b7-42635536d221" />


### 2. Cards grid during gameplay
<img width="1919" height="873" alt="image" src="https://github.com/user-attachments/assets/ede6085e-b687-4203-96d4-5f18c0a0c651" />


### 3. Celebratory message with blurred background
<img width="1918" height="871" alt="image" src="https://github.com/user-attachments/assets/5fe1e077-c95d-4f96-89bb-7abd916b195e" />


## Learning Outcomes

By building this Memory Card Game, I gained hands-on experience with core and intermediate React concepts, including:

### 1. React Component Architecture

Breaking the UI into reusable components (Card, GameHeader, WinMessage)

Passing data and event handlers using props

### 2. State Management with Hooks

Managing multiple states using useState

Controlling UI behavior based on state changes

Understanding how state updates trigger re-renders

### 3. Side Effects Handling

Using useEffect for game initialization and lifecycle-based logic

Handling timed actions like card preview and flip-back logic

### 4. Custom Hooks

Creating and using a reusable custom hook (useGameLogic)

Separating business logic from UI components for cleaner code

### 5. Game Logic Implementation

Card shuffling using an algorithm

Matching logic for flipped cards

Locking interactions during animations and transitions

Detecting game completion and triggering win state

### 6. User Interaction Handling

Handling click events efficiently

Preventing invalid actions (double clicks, flipping matched cards)

Managing preview phase and game start flow

### 7. Conditional Rendering

Showing/hiding components like win message and buttons

Rendering UI based on game state (started, preview, completed)

## 8. Overall Outcome

This project Increase my understanding of React fundamentals, improved my problem-solving skills, and helped me build confidence in creating interactive, state-driven applications using modern React practices.




## Future Improvements

Add timer and leaderboard to track best scores.

Add difficulty levels (easy, medium, hard) with fewer/more cards.

Add sound effects for flips and matches.

Add animation effects for matched cards.


## Contribution

Contributions, issues, and feature requests are welcome!

Fork the repository

Create your feature branch (git checkout -b feature/new-feature)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature/new-feature)

Open a Pull Request

## Contact

Your Name :  ANUJ BHAGAT 

Email: bhagatanuj03@gmail.com
