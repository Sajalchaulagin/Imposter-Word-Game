const WORD_CATEGORIES = [
    {
        category: "Nature",
        regularWord: "Forest",
        imposterWords: ["Jungle", "Woods", "Wilderness", "Rainforest"]
    },
    {
        category: "Food",
        regularWord: "Pizza",
        imposterWords: ["Burger", "Pasta", "Taco", "Sandwich"]
    },
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
];