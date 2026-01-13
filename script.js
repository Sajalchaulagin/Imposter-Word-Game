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
    imposterWords: [],
    gameWords: [
        // Categories and words for the game
        {
            category: "Nature",
            regularWord: "Forest",
            imposterWords: ["Jungle", "Woods", "Wilderness", "Rainforest"]
        },
        {
            category: "Technology",
            regularWord: "Computer",
            imposterWords: ["Laptop", "Desktop", "Machine", "Device"]
        },
        {
            category: "Food",
            regularWord: "Pizza",
            imposterWords: ["Burger", "Pasta", "Taco", "Sandwich"]
        },
        {
            category: "Sports",
            regularWord: "Soccer",
            imposterWords: ["Football", "Rugby", "Basketball", "Hockey"]
        },
        {
            category: "Animals",
            regularWord: "Elephant",
            imposterWords: ["Rhino", "Hippo", "Mammoth", "Giraffe"]
        },
        {
            category: "Music",
            regularWord: "Guitar",
            imposterWords: ["Violin", "Banjo", "Ukulele", "Mandolin"]
        },
        {
            category: "Travel",
            regularWord: "Airplane",
            imposterWords: ["Helicopter", "Jet", "Aircraft", "Plane"]
        },
        {
            category: "Emotions",
            regularWord: "Happiness",
            imposterWords: ["Joy", "Bliss", "Contentment", "Euphoria"]
        },
        {
            category: "Science",
            regularWord: "Atom",
            imposterWords: ["Molecule", "Particle", "Element", "Nucleus"]
        },
        {
            category: "Geography",
            regularWord: "Mountain",
            imposterWords: ["Peak", "Summit", "Range", "Volcano"]
        },
        {
            category: "Literature",
            regularWord: "Novel",
            imposterWords: ["Book", "Tome", "Fiction", "Story"]
        },
        {
            category: "Movies",
            regularWord: "Director",
            imposterWords: ["Filmmaker", "Producer", "Auteur", "Cinematographer"]
        },
        {
            category: "Art",
            regularWord: "Painting",
            imposterWords: ["Canvas", "Artwork", "Masterpiece", "Portrait"]
        },
        {
            category: "Mathematics",
            regularWord: "Equation",
            imposterWords: ["Formula", "Expression", "Theorem", "Calculation"]
        },
        {
            category: "Medicine",
            regularWord: "Doctor",
            imposterWords: ["Physician", "Surgeon", "Medic", "Practitioner"]
        },
        {
            category: "Space",
            regularWord: "Planet",
            imposterWords: ["World", "Orb", "Celestial Body", "Sphere"]
        },
        {
            category: "Transportation",
            regularWord: "Bicycle",
            imposterWords: ["Bike", "Cycle", "Two-wheeler", "Pedal Bike"]
        },
        {
            category: "Clothing",
            regularWord: "Jacket",
            imposterWords: ["Coat", "Blazer", "Windbreaker", "Parka"]
        },
        {
            category: "Furniture",
            regularWord: "Sofa",
            imposterWords: ["Couch", "Divan", "Loveseat", "Chesterfield"]
        },
        {
            category: "Beverages",
            regularWord: "Coffee",
            imposterWords: ["Espresso", "Latte", "Brew", "Java"]
        },
        {
            category: "Time",
            regularWord: "Clock",
            imposterWords: ["Watch", "Timepiece", "Chronometer", "Horologe"]
        },
        {
            category: "Communication",
            regularWord: "Telephone",
            imposterWords: ["Phone", "Mobile", "Handset", "Receiver"]
        },
        {
            category: "Money",
            regularWord: "Currency",
            imposterWords: ["Money", "Cash", "Tender", "Legal Tender"]
        },
        {
            category: "Education",
            regularWord: "Teacher",
            imposterWords: ["Educator", "Instructor", "Professor", "Tutor"]
        },
        {
            category: "Buildings",
            regularWord: "Skyscraper",
            imposterWords: ["Tower", "High-rise", "Edifice", "Building"]
        },
        {
            category: "Weather",
            regularWord: "Hurricane",
            imposterWords: ["Typhoon", "Cyclone", "Storm", "Tempest"]
        },
        {
            category: "Writing",
            regularWord: "Pen",
            imposterWords: ["Quill", "Fountain Pen", "Ballpoint", "Stylus"]
        },
        {
            category: "Reading",
            regularWord: "Library",
            imposterWords: ["Bookstore", "Archive", "Collection", "Reading Room"]
        },
        {
            category: "Ocean",
            regularWord: "Whale",
            imposterWords: ["Dolphin", "Orca", "Cetacean", "Leviathan"]
        },
        {
            category: "Birds",
            regularWord: "Eagle",
            imposterWords: ["Hawk", "Falcon", "Raptor", "Bird of Prey"]
        },
        {
            category: "Insects",
            regularWord: "Butterfly",
            imposterWords: ["Moth", "Lepidoptera", "Insect", "Caterpillar"]
        },
        {
            category: "Reptiles",
            regularWord: "Snake",
            imposterWords: ["Serpent", "Viper", "Reptile", "Python"]
        },
        {
            category: "Flowers",
            regularWord: "Rose",
            imposterWords: ["Tulip", "Daisy", "Blossom", "Bloom"]
        },
        {
            category: "Trees",
            regularWord: "Oak",
            imposterWords: ["Maple", "Pine", "Elm", "Tree"]
        },
        {
            category: "Vegetables",
            regularWord: "Carrot",
            imposterWords: ["Parsnip", "Vegetable", "Root", "Tuber"]
        },
        {
            category: "Fruits",
            regularWord: "Apple",
            imposterWords: ["Pear", "Fruit", "Pome", "Orchard Fruit"]
        },
        {
            category: "Desserts",
            regularWord: "Cake",
            imposterWords: ["Pastry", "Dessert", "Gateau", "Confection"]
        },
        {
            category: "Spices",
            regularWord: "Cinnamon",
            imposterWords: ["Nutmeg", "Spice", "Cassia", "Seasoning"]
        },
        {
            category: "Condiments",
            regularWord: "Ketchup",
            imposterWords: ["Sauce", "Condiment", "Tomato Sauce", "Relish"]
        },
        {
            category: "Dairy",
            regularWord: "Cheese",
            imposterWords: ["Dairy", "Curd", "Fromage", "Whey Product"]
        },
        {
            category: "Grains",
            regularWord: "Wheat",
            imposterWords: ["Grain", "Cereal", "Barley", "Rye"]
        },
        {
            category: "Meats",
            regularWord: "Beef",
            imposterWords: ["Meat", "Steak", "Red Meat", "Bovine Meat"]
        },
        {
            category: "Seafood",
            regularWord: "Salmon",
            imposterWords: ["Fish", "Trout", "Seafood", "Pink Fish"]
        },
        {
            category: "Baked Goods",
            regularWord: "Bread",
            imposterWords: ["Loaf", "Baked Good", "Baguette", "Bun"]
        },
        {
            category: "Cookware",
            regularWord: "Pan",
            imposterWords: ["Skillet", "Frying Pan", "Cookware", "Saucepan"]
        },
        {
            category: "Cutlery",
            regularWord: "Knife",
            imposterWords: ["Blade", "Cutlery", "Dagger", "Carving Knife"]
        },
        {
            category: "Containers",
            regularWord: "Bottle",
            imposterWords: ["Flask", "Container", "Jug", "Decanter"]
        },
        {
            category: "Electronics",
            regularWord: "Television",
            imposterWords: ["TV", "Monitor", "Screen", "Display"]
        },
        {
            category: "Appliances",
            regularWord: "Refrigerator",
            imposterWords: ["Fridge", "Cooler", "Appliance", "Icebox"]
        },
        {
            category: "Tools",
            regularWord: "Hammer",
            imposterWords: ["Mallet", "Tool", "Gavel", "Sledge"]
        },
        {
            category: "Construction",
            regularWord: "Brick",
            imposterWords: ["Block", "Building Material", "Clay", "Stone"]
        },
        {
            category: "Materials",
            regularWord: "Wood",
            imposterWords: ["Timber", "Lumber", "Material", "Plank"]
        },
        {
            category: "Metals",
            regularWord: "Gold",
            imposterWords: ["Metal", "Aurum", "Precious Metal", "Bullion"]
        },
        {
            category: "Fabrics",
            regularWord: "Silk",
            imposterWords: ["Fabric", "Textile", "Satin", "Chiffon"]
        },
        {
            category: "Patterns",
            regularWord: "Stripes",
            imposterWords: ["Lines", "Pattern", "Bands", "Streaks"]
        },
        {
            category: "Shapes",
            regularWord: "Circle",
            imposterWords: ["Round", "Sphere", "Ring", "Oval"]
        },
        {
            category: "Numbers",
            regularWord: "Seven",
            imposterWords: ["Digit", "Number", "Numeral", "Figure"]
        },
        {
            category: "Letters",
            regularWord: "Alphabet",
            imposterWords: ["Letters", "Script", "Characters", "Glyphs"]
        },
        {
            category: "Languages",
            regularWord: "English",
            imposterWords: ["Language", "Tongue", "Linguistics", "Speech"]
        },
        {
            category: "Religion",
            regularWord: "Church",
            imposterWords: ["Temple", "Place of Worship", "Cathedral", "Chapel"]
        },
        {
            category: "Mythology",
            regularWord: "Dragon",
            imposterWords: ["Mythical Creature", "Beast", "Serpent", "Wyvern"]
        },
        {
            category: "Fantasy",
            regularWord: "Wizard",
            imposterWords: ["Sorcerer", "Magician", "Warlock", "Mage"]
        },
        {
            category: "Superheroes",
            regularWord: "Hero",
            imposterWords: ["Superhero", "Champion", "Protagonist", "Savior"]
        },
        {
            category: "Villains",
            regularWord: "Villain",
            imposterWords: ["Antagonist", "Evildoer", "Nemesis", "Rogue"]
        },
        {
            category: "Royalty",
            regularWord: "King",
            imposterWords: ["Monarch", "Ruler", "Sovereign", "Emperor"]
        },
        {
            category: "Weapons",
            regularWord: "Sword",
            imposterWords: ["Blade", "Weapon", "Saber", "Cutlass"]
        },
        {
            category: "Defense",
            regularWord: "Shield",
            imposterWords: ["Protection", "Defense", "Buckler", "Aegis"]
        },
        {
            category: "Vehicles",
            regularWord: "Car",
            imposterWords: ["Automobile", "Vehicle", "Auto", "Sedan"]
        },
        {
            category: "Aircraft",
            regularWord: "Helicopter",
            imposterWords: ["Chopper", "Aircraft", "Rotorcraft", "Whirlybird"]
        },
        {
            category: "Watercraft",
            regularWord: "Ship",
            imposterWords: ["Boat", "Vessel", "Watercraft", "Liner"]
        },
        {
            category: "Trains",
            regularWord: "Locomotive",
            imposterWords: ["Engine", "Train", "Railway", "Iron Horse"]
        },
        {
            category: "Cycling",
            regularWord: "Motorcycle",
            imposterWords: ["Bike", "Motorbike", "Cycle", "Two-wheeler"]
        },
        {
            category: "Jobs",
            regularWord: "Engineer",
            imposterWords: ["Technician", "Professional", "Specialist", "Designer"]
        },
        {
            category: "Business",
            regularWord: "Company",
            imposterWords: ["Business", "Firm", "Corporation", "Enterprise"]
        },
        {
            category: "Finance",
            regularWord: "Bank",
            imposterWords: ["Financial Institution", "Lender", "Credit Union", "Vault"]
        },
        {
            category: "Shopping",
            regularWord: "Market",
            imposterWords: ["Store", "Shop", "Bazaar", "Mart"]
        },
        {
            category: "Home",
            regularWord: "House",
            imposterWords: ["Home", "Dwelling", "Residence", "Abode"]
        },
        {
            category: "Rooms",
            regularWord: "Kitchen",
            imposterWords: ["Cooking Area", "Galley", "Pantry", "Cookroom"]
        },
        {
            category: "Sleep",
            regularWord: "Bed",
            imposterWords: ["Mattress", "Cot", "Berth", "Bunk"]
        },
        {
            category: "Lighting",
            regularWord: "Lamp",
            imposterWords: ["Light", "Fixtures", "Lantern", "Torch"]
        },
        {
            category: "Windows",
            regularWord: "Window",
            imposterWords: ["Pane", "Opening", "Casement", "Aperture"]
        },
        {
            category: "Doors",
            regularWord: "Door",
            imposterWords: ["Entrance", "Portal", "Gate", "Entryway"]
        },
        {
            category: "Floors",
            regularWord: "Carpet",
            imposterWords: ["Rug", "Flooring", "Mat", "Tapestry"]
        },
        {
            category: "Walls",
            regularWord: "Wallpaper",
            imposterWords: ["Wall Covering", "Paper", "Decoration", "Mural"]
        },
        {
            category: "Cleaning",
            regularWord: "Broom",
            imposterWords: ["Sweeper", "Cleaning Tool", "Besom", "Whisk"]
        },
        {
            category: "Gardening",
            regularWord: "Shovel",
            imposterWords: ["Spade", "Digging Tool", "Trowel", "Scoop"]
        },
        {
            category: "Farming",
            regularWord: "Tractor",
            imposterWords: ["Farm Vehicle", "Agricultural Machine", "Harvester", "Plow"]
        },
        {
            category: "Weather Events",
            regularWord: "Tornado",
            imposterWords: ["Twister", "Cyclone", "Funnel Cloud", "Whirlwind"]
        },
        {
            category: "Celestial",
            regularWord: "Star",
            imposterWords: ["Sun", "Celestial Body", "Luminous Sphere", "Fixed Star"]
        },
        {
            category: "Astronomy",
            regularWord: "Telescope",
            imposterWords: ["Optical Instrument", "Spyglass", "Observatory Tool", "Lens"]
        },
        {
            category: "Chemistry",
            regularWord: "Acid",
            imposterWords: ["Chemical", "Corrosive", "pH Substance", "Proton Donor"]
        },
        {
            category: "Physics",
            regularWord: "Gravity",
            imposterWords: ["Force", "Attraction", "Weight", "Pull"]
        },
        {
            category: "Biology",
            regularWord: "Cell",
            imposterWords: ["Unit", "Microscopic Structure", "Organism Component", "Biology Basic"]
        },
        {
            category: "Geology",
            regularWord: "Rock",
            imposterWords: ["Stone", "Mineral Aggregate", "Boulder", "Lithic Material"]
        },
        {
            category: "Psychology",
            regularWord: "Mind",
            imposterWords: ["Consciousness", "Psyche", "Cognition", "Intellect"]
        },
        {
            category: "Philosophy",
            regularWord: "Truth",
            imposterWords: ["Reality", "Fact", "Veracity", "Certainty"]
        },
        {
            category: "History",
            regularWord: "Empire",
            imposterWords: ["Kingdom", "Realm", "Dominion", "Sovereignty"]
        },
        {
            category: "Archaeology",
            regularWord: "Fossil",
            imposterWords: ["Remains", "Relic", "Artifact", "Preserved Remains"]
        },
        {
            category: "Anthropology",
            regularWord: "Culture",
            imposterWords: ["Society", "Civilization", "Customs", "Traditions"]
        },
        {
            category: "Sociology",
            regularWord: "Community",
            imposterWords: ["Society", "Group", "Population", "Collective"]
        },
        {
            category: "Economics",
            regularWord: "Market",
            imposterWords: ["Economy", "Trade System", "Commerce", "Exchange"]
        },
        {
            category: "Politics",
            regularWord: "Government",
            imposterWords: ["Administration", "Regime", "Authority", "Leadership"]
        },
        {
            category: "Law",
            regularWord: "Justice",
            imposterWords: ["Fairness", "Law", "Equity", "Righteousness"]
        },
        {
            category: "Military",
            regularWord: "Soldier",
            imposterWords: ["Warrior", "Troop", "Fighter", "Combatant"]
        },
        {
            category: "Medieval",
            regularWord: "Knight",
            imposterWords: ["Warrior", "Cavalier", "Champion", "Paladin"]
        },
        {
            category: "Weather",
            regularWord: "Sunshine",
            imposterWords: ["Sunlight", "Daylight", "Radiance", "Brightness"]
        },
        {
            category: "Colors",
            regularWord: "Blue",
            imposterWords: ["Navy", "Azure", "Cobalt", "Sapphire"]
        }
    ],
    roundHistory: [],
    challengeHistory: [],
    truths: [
        "What's the most embarrassing thing you've ever done?",
        "If you could swap lives with someone for a day, who would it be?",
        "What's a secret you've never told anyone?",
        "What's your biggest fear?",
        "What's the worst lie you've ever told?",
        "What's the most childish thing you still do?",
        "What's your most irrational fear?",
        "What's the worst date you've ever been on?",
        "What's the most illegal thing you've ever done?",
        "What's your biggest regret in life?",
        "What's something you've stolen and never returned?",
        "What's the worst thing you've ever said to someone?",
        "Have you ever cheated on a test or exam?",
        "What's the most inappropriate place you've fallen asleep?",
        "What's your most controversial opinion?",
        "What's something you judge people for but shouldn't?",
        "What's the biggest mistake you've made at work/school?",
        "What's the most embarrassing photo you have?",
        "What's something you're still angry about from years ago?",
        "What's the worst gift you've ever given someone?",
        "Have you ever pretended to like a gift you hated?",
        "What's the most childish fear you still have?",
        "What's something you've broken and never told anyone?",
        "What's the worst advice you've ever given?",
        "What's a habit you have that you know annoys people?",
        "What's something you should probably apologize for but haven't?",
        "What's the most entitled thing you've ever done?",
        "What's a lie you told that got way out of hand?",
        "What's something you're deeply insecure about?",
        "What's the most hypocritical thing you do?",
        "What's something you thought was cool but now cringe about?",
        "What's the pettiest thing you've ever done?",
        "Have you ever eavesdropped on a private conversation?",
        "What's something you've faked expertise in?",
        "What's the most awkward romantic encounter you've had?",
        "What's something you've done while drunk that you regret?",
        "What's the most dramatic thing you've done to get attention?",
        "What's something you'd never admit in real life?",
        "What's the worst first impression you've ever made?",
        "What's something you're secretly competitive about?",
        "What's the most selfish thing you've ever done?",
        "What's something you pretend to understand but don't?",
        "What's the most embarrassing thing in your search history?",
        "What's something you're secretly proud of?",
        "If you could be famous for one thing, what would it be?",
        "What's the silliest thing you've ever cried over?",
        "What's your guiltiest pleasure?",
        "What's the most trouble you've ever been in?",
        "What's something you pretend to like but actually hate?",
        "What's the weirdest habit you have?"
    ],
    dares: [
        "Do your best impression of a celebrity until someone guesses who it is.",
        "Let the group give you a new hairstyle using only their hands.",
        "Speak in an accent for the next three rounds.",
        "Let the group post one thing on your social media.",
        "Wear your clothes backwards for the next hour.",
        "Do 20 jumping jacks while singing the national anthem.",
        "Let someone style your hair with food items.",
        "Speak only in questions for the next 10 minutes.",
        "Do an interpretive dance of your favorite movie scene.",
        "Let the group choose three weird food combinations you must try.",
        "Call a random contact and sing 'Happy Birthday' to them.",
        "Do a handstand against the wall for 30 seconds.",
        "Let someone blindfold you and feed you mystery foods.",
        "Try to juggle three random objects for one minute.",
        "Do your best impression of each person in the room.",
        "Let the group write something on your forehead with marker.",
        "Attempt to touch your toes for 30 seconds without bending your knees.",
        "Do a catwalk down an imaginary runway with the group's commentary.",
        "Let someone give you a makeover with whatever they have on hand.",
        "Attempt to breakdance for one minute.",
        "Do a dramatic reading of a text conversation from your phone.",
        "Let the group control your next social media story for 24 hours.",
        "Attempt to moonwalk across the room.",
        "Do 15 squats while reciting the alphabet backwards.",
        "Let someone style an outfit for you from other people's clothes.",
        "Attempt to mimic a famous painting with your body.",
        "Do your best impression of a baby learning to walk.",
        "Let the group teach you a ridiculous dance you must perform.",
        "Attempt to recite a poem while hopping on one foot.",
        "Do a fashion show wearing the most mismatched outfit possible.",
        "Let someone draw a temporary tattoo on your arm.",
        "Attempt to do the worm (the dance move).",
        "Do a dramatic reenactment of a childhood memory.",
        "Let the group create a new signature move you must use all night.",
        "Attempt to hula hoop with an imaginary hula hoop.",
        "Do a news report about what's happening in the room right now.",
        "Let someone give you a new nickname that you must respond to.",
        "Attempt to do a magic trick with random objects from the room.",
        "Do 10 pushups right now.",
        "Sing the chorus of your favorite song as dramatically as possible.",
        "Let someone tickle you for 30 seconds without laughing.",
        "Make up a short rap about the person to your left.",
        "Do your best animal impression for one minute.",
        "Let the group choose an emoji you have to incorporate into every sentence for the next 5 minutes.",
        "Balance a spoon on your nose for 30 seconds.",
        "Do a silly dance for the next 30 seconds.",
        "Act out a scene from a movie without speaking until someone guesses it.",
        "Try to lick your elbow (it's impossible, but funny to watch!).",
        "Let someone draw on your face with a washable marker.",
        "Tell a funny story about yourself while standing on one leg."
    ]
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
            word: ''
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

    // Shuffle imposter words and assign to imposters
    const shuffledImposterWords = [...randomWordSet.imposterWords].sort(() => Math.random() - 0.5);
    gameState.imposterWords = shuffledImposterWords.slice(0, gameState.imposterCount);

    // Assign words to players
    let imposterWordIndex = 0;
    gameState.players.forEach((player, index) => {
        if (player.isImposter) {
            player.word = gameState.imposterWords[imposterWordIndex];
            imposterWordIndex++;
        } else {
            player.word = gameState.regularWord;
        }
    });

    // Reset game state
    gameState.currentPlayerIndex = 0;
    gameState.currentRound = 1;
    gameState.currentTurnIndex = 0;
    gameState.roundHistory = [];

    // Show word view screen
    showWordViewScreen();
}

// Word View Screen Functions
function showWordViewScreen() {
    showScreen('wordView');
    updateWordViewScreen();
}

function updateWordViewScreen() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];

    // Update player info
    currentPlayerNameElement.textContent = currentPlayer.name;
    playerRoleElement.textContent = currentPlayer.isImposter ? 'an IMPOSTER' : 'a regular player';
    playerRoleElement.style.color = currentPlayer.isImposter ? '#ff6b6b' : '#43cea2';

    // Update progress
    currentPlayerIndexElement.textContent = gameState.currentPlayerIndex + 1;
    totalPlayersElement.textContent = gameState.players.length;

    const progressPercentage = (gameState.currentPlayerIndex / gameState.players.length) * 100;
    wordProgressElement.style.width = `${progressPercentage}%`;

    // Reset word display
    wordDisplayElement.textContent = '';
    wordDisplayElement.classList.remove('active');
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
    wordDisplayElement.textContent = currentPlayer.word;

    // Add some animation
    setTimeout(() => {
        wordDisplayElement.classList.add('active');
    }, 100);

    // Enable hide button, disable reveal button
    revealWordButton.disabled = true;
    hideWordButton.disabled = false;
}

function hideAndPass() {
    // Play sound
    if (gameState.isSoundOn) {
        playSound('click');
    }

    // Move to next player or start the game
    gameState.currentPlayerIndex++;

    if (gameState.currentPlayerIndex < gameState.players.length) {
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
        word: "[Spoken word]" // In real play, players speak their word
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
    gameState.discussionTimeLeft = 300; // 5 minutes
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

    // Determine losers
    const losers = impostersWon
        ? gameState.players.filter(player => !player.isImposter) // Regular players lose
        : gameState.players.filter(player => player.isImposter); // Imposters lose

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
        imposterWords: [],
        roundHistory: []
        // Keep challengeHistory, truths, dares, gameWords, and isSoundOn
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