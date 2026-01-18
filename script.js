// Game State Management
const gameState = {
    players: [],
    imposters: [],
    playerCount: 4,
    imposterCount: 1,
    currentPlayerIndex: 0,
    currentRound: 1,
    currentTurnIndex: 0,
    isDiscussionActive: false,
    discussionTimeLeft: 300, // 5 minutes in seconds
    discussionTimer: null,
    isSoundOn: true,
    regularWord: '',
    imposterWord: '', // CHANGED: Single imposter word for all imposters
    gameWords: WORD_CATEGORIES,
    truths: TRUTHS,
    dares: DARES,
    roundHistory:[],
    challengeHistory:[]
};

// DOM Elements
const screens = {
    loading: document.getElementById('loading-screen'),
    setup: document.getElementById('setup-screen'),
    wordView: document.getElementById('word-view-screen'),
    round: document.getElementById('round-screen'),
    discussion: document.getElementById('discussion-screen'),
    result: document.getElementById('result-screen'),
    truthDare: document.getElementById('truth-dare-screen')
};

// Setup Screen Elements
const playerCountElement = document.getElementById('player-count');
const imposterCountElement = document.getElementById('imposter-count');
const playerNamesContainer = document.getElementById('player-names-container');
const startGameButton = document.getElementById('start-game-btn');
const imposterWarning = document.getElementById('imposter-warning');

// Word View Elements
const currentPlayerNameElement = document.getElementById('current-player-name');
const playerRoleElement = document.getElementById('player-role');
const wordDisplayElement = document.getElementById('word-revealed');
const revealWordButton = document.getElementById('reveal-word-btn');
const hideWordButton = document.getElementById('hide-word-btn');
const currentPlayerIndexElement = document.getElementById('current-player-index');
const totalPlayersElement = document.getElementById('total-players');
const wordProgressElement = document.getElementById('word-progress');

// Round Screen Elements
const currentRoundElement = document.getElementById('current-round');
const currentTurnPlayerElement = document.getElementById('current-turn-player');
const nextTurnButton = document.getElementById('next-turn-btn');
const endRoundButton = document.getElementById('end-round-btn');
const historyContainer = document.getElementById('history-container');
const roundDots = document.querySelectorAll('.round-dot');

// Discussion Screen Elements
const timerCountElement = document.getElementById('timer-count');
const timerProgressElement = document.getElementById('timer-progress');
const pauseTimerButton = document.getElementById('pause-timer-btn');
const resetTimerButton = document.getElementById('reset-timer-btn');
const startDiscussionButton = document.getElementById('start-discussion-btn');
const endDiscussionButton = document.getElementById('end-discussion-btn');

// Result Screen Elements
const imposterWonButton = document.getElementById('imposter-won-btn');
const imposterLostButton = document.getElementById('imposter-lost-btn');

// Truth/Dare Screen Elements
const resultBannerElement = document.getElementById('result-banner');
const losersInfoElement = document.getElementById('losers-info');
const challengeIconElement = document.getElementById('challenge-icon');
const challengeTypeElement = document.getElementById('challenge-type');
const challengeBadgeElement = document.getElementById('challenge-badge');
const challengeTextElement = document.getElementById('challenge-text');
const challengeAssigneeElement = document.getElementById('challenge-assignee');
const newChallengeButton = document.getElementById('new-challenge-btn');
const playAgainButton = document.getElementById('play-again-btn');
const challengeHistoryElement = document.getElementById('challenge-history');

// Modal Elements
const howToPlayModal = document.getElementById('how-to-play-modal');
const howToPlayButton = document.getElementById('how-to-play-btn');
const closeModalButton = document.getElementById('close-modal-btn');
const gotItButton = document.getElementById('got-it-btn');

// Sound Toggle
const soundToggleButton = document.getElementById('sound-toggle-btn');

// Utility Functions
function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the requested screen
    screens[screenName].classList.add('active');

    // Play transition sound if sound is on
    if (gameState.isSoundOn) {
        playSound('transition');
    }
}

function playSound(soundType) {
    // Create audio context for sound effects
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        if (soundType === 'transition') {
            // Create a gentle transition sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
        } else if (soundType === 'click') {
            // Create a click sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.05);

            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.1);
        } else if (soundType === 'success') {
            // Create a success sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5

            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.4);
        } else if (soundType === 'reveal') {
            // Create a word reveal sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.5);

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.6);
        }
    } catch (error) {
        console.log("Audio context not supported or blocked by browser");
    }
}

function updateAllPlayerStates() {
    // Ensure all players start with hidden state
    if (gameState.players && gameState.players.length > 0) {
        gameState.players.forEach(player => {
            player.hasRevealed = false;
        });
    }
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '';

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.opacity = '0.8';

        confettiContainer.appendChild(confetti);

        // Animate confetti
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });

        // Remove confetti after animation
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

function getRandomColor() {
    const colors = [
        '#6d5dfc', '#43cea2', '#ff6b6b', '#4ecdc4', '#ffd166',
        '#ff9a76', '#a3de83', '#fea1a1', '#a3bded', '#d9d9d9'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Setup Screen Functions
function initializeSetupScreen() {
    // Set up player count controls
    document.getElementById('player-minus').addEventListener('click', () => {
        if (gameState.playerCount > 3) {
            gameState.playerCount--;
            updatePlayerCount();
            validateImposterCount();
            generatePlayerNameInputs();
            updateStartButton();
        }
    });

    document.getElementById('player-plus').addEventListener('click', () => {
        if (gameState.playerCount < 10) {
            gameState.playerCount++;
            updatePlayerCount();
            validateImposterCount();
            generatePlayerNameInputs();
            updateStartButton();
        }
    });

    // Set up imposter count controls
    document.getElementById('imposter-minus').addEventListener('click', () => {
        if (gameState.imposterCount > 1) {
            gameState.imposterCount--;
            updateImposterCount();
            validateImposterCount();
            updateStartButton();
        }
    });

    document.getElementById('imposter-plus').addEventListener('click', () => {
        if (gameState.imposterCount < 3 && gameState.imposterCount < gameState.playerCount - 1) {
            gameState.imposterCount++;
            updateImposterCount();
            validateImposterCount();
            updateStartButton();
        }
    });

    // Generate initial player name inputs
    generatePlayerNameInputs();

    // Set up start game button
    startGameButton.addEventListener('click', startGame);

    // Set up how to play button
    howToPlayButton.addEventListener('click', () => {
        howToPlayModal.classList.add('active');
    });

    // Set up modal close buttons
    closeModalButton.addEventListener('click', () => {
        howToPlayModal.classList.remove('active');
    });

    gotItButton.addEventListener('click', () => {
        howToPlayModal.classList.remove('active');
    });

    // Set up sound toggle
    soundToggleButton.addEventListener('click', toggleSound);

    // Initialize sound icon
    updateSoundIcon();
}

function updatePlayerCount() {
    playerCountElement.textContent = gameState.playerCount;
}

function updateImposterCount() {
    imposterCountElement.textContent = gameState.imposterCount;
}

function validateImposterCount() {
    const maxImposters = Math.min(3, gameState.playerCount - 2);

    if (gameState.imposterCount > maxImposters) {
        gameState.imposterCount = maxImposters;
        updateImposterCount();
    }

    // Update warning message
    if (gameState.imposterCount === maxImposters) {
        imposterWarning.textContent = `Maximum imposters for ${gameState.playerCount} players`;
        imposterWarning.style.display = 'block';
    } else if (gameState.imposterCount === 1) {
        imposterWarning.textContent = 'Minimum 1 imposter required';
        imposterWarning.style.display = 'block';
    } else {
        imposterWarning.style.display = 'none';
    }

    // Enable/disable buttons
    document.getElementById('imposter-minus').disabled = gameState.imposterCount <= 1;
    document.getElementById('imposter-plus').disabled = gameState.imposterCount >= maxImposters;
    document.getElementById('player-minus').disabled = gameState.playerCount <= 3;
    document.getElementById('player-plus').disabled = gameState.playerCount >= 10;
}

function generatePlayerNameInputs() {
    playerNamesContainer.innerHTML = '';

    for (let i = 0; i < gameState.playerCount; i++) {
        const playerNameInput = document.createElement('div');
        playerNameInput.className = 'player-name-input';
        playerNameInput.innerHTML = `
            <i class="fas fa-user"></i>
            <input type="text" id="player-name-${i}" class="player-name" 
                   placeholder="Player ${i + 1} Name" 
                   value="Player ${i + 1}"
                   maxlength="20">
        `;

        playerNamesContainer.appendChild(playerNameInput);

        // Add event listener to update start button on input
        const input = playerNameInput.querySelector('input');
        input.addEventListener('input', updateStartButton);
    }

    // Focus on first input
    document.getElementById('player-name-0').focus();
}

function updateStartButton() {
    // Check if all player names are filled
    let allNamesFilled = true;
    const playerNames = [];

    for (let i = 0; i < gameState.playerCount; i++) {
        const input = document.getElementById(`player-name-${i}`);
        if (!input || input.value.trim() === '') {
            allNamesFilled = false;
            break;
        }
        playerNames.push(input.value.trim());
    }

    // Check for duplicate names
    const uniqueNames = new Set(playerNames);
    const hasDuplicates = uniqueNames.size !== playerNames.length;

    // Enable/disable start button
    startGameButton.disabled = !allNamesFilled || hasDuplicates;

    // Update button text if there are duplicates
    if (hasDuplicates && allNamesFilled) {
        startGameButton.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Duplicate Names';
    } else if (allNamesFilled) {
        startGameButton.innerHTML = '<i class="fas fa-play-circle"></i> Start Game';
    } else {
        startGameButton.innerHTML = '<i class="fas fa-play-circle"></i> Start Game';
    }
}

function startGame() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    // Collect player names
    gameState.players = [];
    for (let i = 0; i < gameState.playerCount; i++) {
        const input = document.getElementById(`player-name-${i}`);
        gameState.players.push({
            id: i,
            name: input.value.trim(),
            isImposter: false,
            word: '',
            hasRevealed: false
        });
    }

    // Select imposters randomly
    gameState.imposters = [];
    const playerIndices = Array.from({ length: gameState.playerCount }, (_, i) => i);

    for (let i = 0; i < gameState.imposterCount; i++) {
        const randomIndex = Math.floor(Math.random() * playerIndices.length);
        const imposterIndex = playerIndices.splice(randomIndex, 1)[0];
        gameState.players[imposterIndex].isImposter = true;
        gameState.imposters.push(imposterIndex);
    }

    // Select a random word set
    const randomWordSet = gameState.gameWords[Math.floor(Math.random() * gameState.gameWords.length)];
    gameState.regularWord = randomWordSet.regularWord;
    gameState.imposterWord = randomWordSet.imposterWords[0];

    // Assign words to players
    gameState.players.forEach(player => {
        if (player.isImposter) {
            player.word = gameState.imposterWord;
        } else {
            player.word = gameState.regularWord;
        }
        player.hasRevealed = false;
    });

    // Reset game state
    gameState.currentPlayerIndex = 0;
    gameState.currentRound = 1;
    gameState.currentTurnIndex = 0;
    gameState.roundHistory = [];

    // Show word view screen
    showWordViewScreen();
}

// Word View Screen Functions - FIXED
function showWordViewScreen() {
    showScreen('wordView');
    updateWordViewScreen();
}

function updateWordViewScreen() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];

    // Update player info
    currentPlayerNameElement.textContent = currentPlayer.name;
    
    // Reset role display - show default message
    playerRoleElement.textContent = "will appear when you reveal your word";
    playerRoleElement.style.color = "";
    playerRoleElement.style.fontWeight = "";
    
    // Update progress
    currentPlayerIndexElement.textContent = gameState.currentPlayerIndex + 1;
    totalPlayersElement.textContent = gameState.players.length;

    const progressPercentage = (gameState.currentPlayerIndex / gameState.players.length) * 100;
    wordProgressElement.style.width = `${progressPercentage}%`;

    // Reset word display
    wordDisplayElement.textContent = "";
    wordDisplayElement.classList.remove('active');
    
    // Show the lock icon (word-hidden div)
    const wordHiddenDiv = document.querySelector('.word-hidden');
    if (wordHiddenDiv) {
        wordHiddenDiv.style.display = 'flex';
    }

    // Reset button states
    revealWordButton.disabled = false;
    hideWordButton.disabled = true;
    
    // Set up button events
    revealWordButton.onclick = revealWord;
    hideWordButton.onclick = hideAndPass;
}

function revealWord() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('reveal');
    }

    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    // Show word
    wordDisplayElement.textContent = currentPlayer.word;
    
    // Show role with color coding
    if (currentPlayer.isImposter) {
        playerRoleElement.textContent = "IMPOSTER 👺";
        playerRoleElement.style.color = "#ff6b6b";
    } else {
        playerRoleElement.textContent = "Regular Player 👍";
        playerRoleElement.style.color = "#43cea2";
    }
    playerRoleElement.style.fontWeight = "bold";
    
    // Hide the lock icon and show the word
    const wordHiddenDiv = document.querySelector('.word-hidden');
    if (wordHiddenDiv) {
        wordHiddenDiv.style.display = 'none';
    }
    
    // Show the word with animation
    wordDisplayElement.classList.add('active');
    
    // Mark player as having revealed
    currentPlayer.hasRevealed = true;
    
    // Enable hide button, disable reveal button
    revealWordButton.disabled = true;
    hideWordButton.disabled = false;
}

function hideAndPass() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    // Reset current player's visible state
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    currentPlayer.hasRevealed = false;
    
    // Move to next player
    gameState.currentPlayerIndex++;

    if (gameState.currentPlayerIndex < gameState.players.length) {
        // Next player
        updateWordViewScreen();
    } else {
        // All players have seen their words, start the game
        startRoundGame();
    }
}

// Round Game Functions
function startRoundGame() {
    showScreen('round');
    updateRoundScreen();
}

function updateRoundScreen() {
    // Update round info
    currentRoundElement.textContent = gameState.currentRound;

    // Update round dots
    roundDots.forEach(dot => {
        const roundNum = parseInt(dot.getAttribute('data-round'));
        if (roundNum <= gameState.currentRound) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update current turn player
    const currentPlayer = gameState.players[gameState.currentTurnIndex];
    currentTurnPlayerElement.textContent = currentPlayer.name;

    // Update history
    updateRoundHistory();

    // Set up button events
    nextTurnButton.onclick = nextTurn;
    endRoundButton.onclick = endRound;
}

function nextTurn() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    // Record that this player has taken their turn in this round
    const currentPlayer = gameState.players[gameState.currentTurnIndex];
    gameState.roundHistory.push({
        playerId: currentPlayer.id,
        playerName: currentPlayer.name,
        round: gameState.currentRound,
        word: "[Spoken word]"
    });

    // Move to next player
    gameState.currentTurnIndex++;

    // Check if round is complete
    if (gameState.currentTurnIndex >= gameState.players.length) {
        // Round is complete, move to next round
        gameState.currentRound++;
        gameState.currentTurnIndex = 0;

        if (gameState.currentRound > 3) {
            // All rounds complete, move to discussion
            startDiscussion();
            return;
        }
    }

    updateRoundScreen();
}

function endRound() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    // Skip remaining players and move to next round
    gameState.currentRound++;
    gameState.currentTurnIndex = 0;

    if (gameState.currentRound > 3) {
        // All rounds complete, move to discussion
        startDiscussion();
    } else {
        updateRoundScreen();
    }
}

function updateRoundHistory() {
    historyContainer.innerHTML = '';

    // Add history items
    gameState.roundHistory.forEach(entry => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-player">${entry.playerName}</div>
            <div class="history-round">Round ${entry.round}</div>
            <div class="history-word">${entry.word}</div>
        `;
        historyContainer.appendChild(historyItem);
    });

    // Scroll to bottom
    historyContainer.scrollTop = historyContainer.scrollHeight;
}

// Discussion Functions
function startDiscussion() {
    showScreen('discussion');

    // Reset discussion timer
    gameState.discussionTimeLeft = 300;
    updateTimerDisplay();

    // Set up timer controls
    startDiscussionButton.onclick = startDiscussionTimer;
    endDiscussionButton.onclick = endDiscussion;
    pauseTimerButton.onclick = toggleTimerPause;
    resetTimerButton.onclick = resetTimer;

    // Initially disable pause and reset buttons
    pauseTimerButton.disabled = true;
    resetTimerButton.disabled = true;
    endDiscussionButton.disabled = true;
}

function startDiscussionTimer() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    gameState.isDiscussionActive = true;
    startDiscussionButton.disabled = true;
    endDiscussionButton.disabled = false;
    pauseTimerButton.disabled = false;
    resetTimerButton.disabled = false;

    // Start timer
    gameState.discussionTimer = setInterval(() => {
        if (gameState.isDiscussionActive) {
            gameState.discussionTimeLeft--;
            updateTimerDisplay();

            if (gameState.discussionTimeLeft <= 0) {
                clearInterval(gameState.discussionTimer);
                endDiscussion();
            }
        }
    }, 1000);
}

function toggleTimerPause() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    gameState.isDiscussionActive = !gameState.isDiscussionActive;

    if (gameState.isDiscussionActive) {
        pauseTimerButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        pauseTimerButton.innerHTML = '<i class="fas fa-play"></i> Resume';
    }
}

function resetTimer() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    gameState.discussionTimeLeft = 300;
    updateTimerDisplay();

    if (!gameState.isDiscussionActive) {
        startDiscussionButton.disabled = false;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.discussionTimeLeft / 60);
    const seconds = gameState.discussionTimeLeft % 60;
    timerCountElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Update progress circle
    const progressPercentage = (gameState.discussionTimeLeft / 300) * 100;
    timerProgressElement.style.background = `conic-gradient(var(--primary-color) ${progressPercentage}%, transparent ${progressPercentage}%)`;
}

function endDiscussion() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('transition');
    }

    // Clear timer
    if (gameState.discussionTimer) {
        clearInterval(gameState.discussionTimer);
    }

    // Show result screen
    showResultScreen();
}

// Result Screen Functions
function showResultScreen() {
    showScreen('result');

    // Set up button events
    imposterWonButton.onclick = () => handleResult(true);
    imposterLostButton.onclick = () => handleResult(false);
}

function handleResult(impostersWon) {
    // Play sound
    if (gameState.isSoundOn) {
        playSound(impostersWon ? 'success' : 'click');
    }

    // Show confetti if imposters won
    if (impostersWon) {
        createConfetti();
    }

    if(!gameState.challengeHistory){
        gameState.challengeHistory = [];
    }

    // Determine losers
    const losers = impostersWon
        ? gameState.players.filter(player => !player.isImposter)
        : gameState.players.filter(player => player.isImposter);

    // Generate a random truth or dare
    const isTruth = Math.random() > 0.5;
    const challengeArray = isTruth ? gameState.truths : gameState.dares;
    const randomChallenge = challengeArray[Math.floor(Math.random() * challengeArray.length)];

    // Select a random loser or assign to all
    const assignToAll = losers.length <= 2 || Math.random() > 0.5;
    const assignedPlayer = assignToAll ? null : losers[Math.floor(Math.random() * losers.length)];

    // Save to challenge history
    gameState.challengeHistory.push({
        type: isTruth ? 'truth' : 'dare',
        text: randomChallenge,
        assignedTo: assignedPlayer ? assignedPlayer.name : 'All losing players',
        result: impostersWon ? 'Imposters Won' : 'Imposters Lost'
    });

    // Show truth/dare screen
    showTruthDareScreen(impostersWon, losers, isTruth, randomChallenge, assignedPlayer);
}

// Truth/Dare Screen Functions
function showTruthDareScreen(impostersWon, losers, isTruth, challenge, assignedPlayer) {
    showScreen('truthDare');

    // Update result banner
    resultBannerElement.textContent = impostersWon ? 'IMPOSTERS WON!' : 'IMPOSTERS LOST!';
    resultBannerElement.style.background = impostersWon
        ? 'linear-gradient(90deg, var(--success-color), var(--success-dark))'
        : 'linear-gradient(90deg, var(--danger-color), var(--danger-dark))';

    // Update losers info
    losersInfoElement.innerHTML = `
        <h3>${impostersWon ? 'Regular Players' : 'Imposters'} Receive Challenge</h3>
        <div class="losers-list">
            ${losers.map(player => `
                <div class="loser-tag">
                    <i class="fas fa-user"></i> ${player.name}
                </div>
            `).join('')}
        </div>
    `;

    // Update challenge type
    challengeTypeElement.textContent = isTruth ? 'Truth Challenge' : 'Dare Challenge';
    challengeBadgeElement.textContent = isTruth ? 'TRUTH' : 'DARE';
    challengeBadgeElement.className = `type-badge ${isTruth ? 'truth' : 'dare'}`;

    // Update challenge icon
    challengeIconElement.className = `type-icon ${isTruth ? 'truth' : 'dare'}`;
    challengeIconElement.innerHTML = isTruth
        ? '<i class="fas fa-question-circle"></i>'
        : '<i class="fas fa-exclamation-circle"></i>';

    // Update challenge text
    challengeTextElement.textContent = challenge;

    // Update assignee
    challengeAssigneeElement.textContent = assignedPlayer
        ? assignedPlayer.name
        : 'All losing players';

    // Set up button events
    newChallengeButton.onclick = generateNewChallenge.bind(null, impostersWon, losers);
    playAgainButton.onclick = resetGame;

    // Update challenge history
    updateChallengeHistory();
}

function generateNewChallenge(impostersWon, losers) {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    // Generate a new random truth or dare
    const isTruth = Math.random() > 0.5;
    const challengeArray = isTruth ? gameState.truths : gameState.dares;
    const randomChallenge = challengeArray[Math.floor(Math.random() * challengeArray.length)];

    // Select a random loser or assign to all
    const assignToAll = losers.length <= 2 || Math.random() > 0.5;
    const assignedPlayer = assignToAll ? null : losers[Math.floor(Math.random() * losers.length)];

    // Save to challenge history
    gameState.challengeHistory.push({
        type: isTruth ? 'truth' : 'dare',
        text: randomChallenge,
        assignedTo: assignedPlayer ? assignedPlayer.name : 'All losing players',
        result: impostersWon ? 'Imposters Won' : 'Imposters Lost'
    });

    // Update challenge type
    challengeTypeElement.textContent = isTruth ? 'Truth Challenge' : 'Dare Challenge';
    challengeBadgeElement.textContent = isTruth ? 'TRUTH' : 'DARE';
    challengeBadgeElement.className = `type-badge ${isTruth ? 'truth' : 'dare'}`;

    // Update challenge icon
    challengeIconElement.className = `type-icon ${isTruth ? 'truth' : 'dare'}`;
    challengeIconElement.innerHTML = isTruth
        ? '<i class="fas fa-question-circle"></i>'
        : '<i class="fas fa-exclamation-circle"></i>';

    // Update challenge text
    challengeTextElement.textContent = randomChallenge;

    // Update assignee
    challengeAssigneeElement.textContent = assignedPlayer
        ? assignedPlayer.name
        : 'All losing players';

    // Update challenge history
    updateChallengeHistory();
}

function updateChallengeHistory() {
    challengeHistoryElement.innerHTML = '';

    // Add history items (most recent first)
    const recentHistory = [...gameState.challengeHistory].reverse().slice(0, 5);

    recentHistory.forEach(entry => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item-small';
        historyItem.innerHTML = `
            <div class="history-type ${entry.type}">${entry.type.toUpperCase()}</div>
            <div class="history-text">${entry.text.substring(0, 40)}${entry.text.length > 40 ? '...' : ''}</div>
            <div class="history-assignee">${entry.assignedTo}</div>
        `;
        challengeHistoryElement.appendChild(historyItem);
    });
}

function resetGame() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('transition');
    }

    // Reset all player states
    updateAllPlayerStates();

    // Reset game state but keep player names and counts
    const playerNames = gameState.players.map(player => player.name);
    const playerCount = gameState.playerCount;
    const imposterCount = gameState.imposterCount;

    // Clear game state
    Object.assign(gameState, {
        players: [],
        imposters: [],
        playerCount: playerCount,
        imposterCount: imposterCount,
        currentPlayerIndex: 0,
        currentRound: 1,
        currentTurnIndex: 0,
        isDiscussionActive: false,
        discussionTimeLeft: 300,
        discussionTimer: null,
        regularWord: '',
        imposterWord: '',
        roundHistory: [],
        challengeHistory:[]
    });

    // Go back to setup screen
    showScreen('setup');

    // Update UI elements
    updatePlayerCount();
    updateImposterCount();
    generatePlayerNameInputs();

    // Set player names from previous game
    playerNames.forEach((name, index) => {
        const input = document.getElementById(`player-name-${index}`);
        if (input) {
            input.value = name;
        }
    });

    updateStartButton();
}

function toggleSound() {
    gameState.isSoundOn = !gameState.isSoundOn;
    updateSoundIcon();

    // Play sound if turning on
    if (gameState.isSoundOn) {
        playSound('click');
    }
}

function updateSoundIcon() {
    const icon = soundToggleButton.querySelector('i');
    icon.className = gameState.isSoundOn ? 'fas fa-volume-up' : 'fas fa-volume-mute';
}

// Initialize the game when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Simulate loading
    setTimeout(() => {
        showScreen('setup');
        initializeSetupScreen();
    }, 2000);
});