// Design Thinking Video Database

const videoDatabase = {
  // Complete warm-up video collection
  "warm-up": [
    {
      id: "across-the-pond",
      title: "Across the Pond",
      url: "https://youtu.be/H0W-1phSEjQ?t=40",
      duration: "2 mins",
      description: "A fun physical warm-up activity to get teams moving and energized",
      tags: ["physical", "team-building", "energy"],
      difficulty: "easy",
      groupSize: "4-12 people"
    },
    {
      id: "noodle-run",
      title: "Noodle Run",
      url: "https://youtu.be/6tFfvQG5Nx0?t=14",
      duration: "3 mins",
      description: "Creative movement exercise using pool noodles for team coordination",
      tags: ["physical", "coordination", "fun"],
      difficulty: "easy",
      groupSize: "6-20 people"
    },
    {
      id: "knee-tag",
      title: "Knee Tag",
      url: "https://youtu.be/asbgD6vsjfM?t=70",
      duration: "2 mins",
      description: "Quick energizer game that gets everyone laughing and moving",
      tags: ["physical", "quick", "energizer"],
      difficulty: "easy",
      groupSize: "8-30 people"
    },
    {
      id: "crazy-8s-v1",
      title: "Crazy 8s v1",
      url: "https://youtu.be/EEIKbDNrkAI?t=44",
      duration: "8 mins",
      description: "Rapid ideation exercise - 8 ideas in 8 minutes",
      tags: ["ideation", "rapid", "sketching"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "crazy-8s-v2",
      title: "Crazy 8s v2",
      url: "https://youtu.be/VEw7FidF61c?t=14",
      duration: "8 mins",
      description: "Alternative version of the classic rapid ideation exercise",
      tags: ["ideation", "rapid", "sketching"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "i-am-a-tree",
      title: "I am a Tree",
      url: "https://youtu.be/d_j4SuhlG88?t=41",
      duration: "5 mins",
      description: "Improvisational exercise to build on others' ideas",
      tags: ["improv", "building-ideas", "creativity"],
      difficulty: "easy",
      groupSize: "5-15 people"
    },
    {
      id: "voice-mirror",
      title: "Voice Mirror",
      url: "https://youtu.be/g06Sc1VHyU4?t=23",
      duration: "3 mins",
      description: "Vocal warm-up exercise for presentation skills",
      tags: ["vocal", "presentation", "mirroring"],
      difficulty: "easy",
      groupSize: "pairs"
    },
    {
      id: "imaginary-ball",
      title: "Imaginary Ball",
      url: "https://youtu.be/3Z_np5xhCeA?t=14",
      duration: "5 mins",
      description: "Classic improv exercise for focus and imagination",
      tags: ["improv", "focus", "imagination"],
      difficulty: "easy",
      groupSize: "6-20 people"
    },
    {
      id: "mirror-game",
      title: "Mirror Game",
      url: "https://youtu.be/JTEjiJfJkNU?t=26",
      duration: "4 mins",
      description: "Partner exercise for building empathy and observation skills",
      tags: ["empathy", "observation", "pairs"],
      difficulty: "easy",
      groupSize: "pairs"
    },
    {
      id: "tug-o-war",
      title: "Tug o War",
      url: "https://youtu.be/eBiNH7JnHtc?t=20",
      duration: "3 mins",
      description: "Imaginary tug of war for team building",
      tags: ["team-building", "physical", "imaginary"],
      difficulty: "easy",
      groupSize: "6-20 people"
    },
    {
      id: "beastie-rap",
      title: "Beastie Rap",
      url: "https://youtu.be/Y5KcntZKtE8?t=19",
      duration: "4 mins",
      description: "Energetic rap exercise to boost creativity and confidence",
      tags: ["music", "energy", "confidence"],
      difficulty: "medium",
      groupSize: "6-15 people"
    },
    {
      id: "reach-into-space",
      title: "Reach into Space",
      url: "https://youtu.be/6ncUvrdfDj8?t=24",
      duration: "3 mins",
      description: "Physical stretching and imagination exercise",
      tags: ["physical", "stretching", "imagination"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "what-are-you-doing",
      title: "What are you doing?",
      url: "https://youtu.be/s8LVftcJ6f8?t=31",
      duration: "5 mins",
      description: "Improv exercise for quick thinking and creativity",
      tags: ["improv", "quick-thinking", "creativity"],
      difficulty: "medium",
      groupSize: "6-20 people"
    },
    {
      id: "zip-zap-zop",
      title: "Zip Zap Zop",
      url: "https://youtu.be/lyWKVGoXKak?t=25",
      duration: "6 mins",
      description: "Classic focus and energy circle game",
      tags: ["focus", "energy", "circle"],
      difficulty: "easy",
      groupSize: "8-25 people"
    },
    {
      id: "123-ta-da",
      title: "1,2,3, Ta Da!",
      url: "https://youtu.be/w8NZ-mAA0Ps?t=930",
      duration: "4 mins",
      description: "Confidence building and presentation warm-up",
      tags: ["confidence", "presentation", "celebration"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "hobby-interview",
      title: "Hobby Interview",
      url: "https://youtu.be/RvvzKXRlpeY?t=65",
      duration: "7 mins",
      description: "Partner interview exercise to practice listening skills",
      tags: ["interview", "listening", "partners"],
      difficulty: "easy",
      groupSize: "pairs"
    },
    {
      id: "super-handshake",
      title: "Super Handshake",
      url: "https://youtu.be/RvvzKXRlpeY?t=179",
      duration: "4 mins",
      description: "Creative greeting exercise for team bonding",
      tags: ["greeting", "creativity", "bonding"],
      difficulty: "easy",
      groupSize: "pairs"
    },
    {
      id: "rock-paper-scissors-war",
      title: "Rock Paper Scissors War",
      url: "https://youtu.be/-0st77RLsks?t=145",
      duration: "6 mins",
      description: "High-energy competitive warm-up game",
      tags: ["competitive", "energy", "fun"],
      difficulty: "easy",
      groupSize: "10-50 people"
    },
    {
      id: "sushi-making-machine",
      title: "Sushi-Making Machine",
      url: "https://youtu.be/2mlvvSwFkAQ?t=144",
      duration: "8 mins",
      description: "Creative machine-building exercise for collaboration",
      tags: ["collaboration", "machine", "creativity"],
      difficulty: "medium",
      groupSize: "6-12 people"
    },
    {
      id: "i-am-a-tree-v2",
      title: "I am a Tree v2",
      url: "https://youtu.be/jrM8Dr32_rc?t=167",
      duration: "5 mins",
      description: "Advanced version of the classic tree building exercise",
      tags: ["improv", "building-ideas", "advanced"],
      difficulty: "medium",
      groupSize: "5-15 people"
    },
    {
      id: "neighbour-portrait",
      title: "Neighbour Portrait",
      url: "https://youtu.be/Z4gAugRGpeY?t=228",
      duration: "10 mins",
      description: "Drawing exercise to build observation and empathy",
      tags: ["drawing", "observation", "empathy"],
      difficulty: "easy",
      groupSize: "pairs"
    },
    {
      id: "squiggle-limbs",
      title: "Squiggle Limbs",
      url: "https://youtu.be/Ddi-FclODYI?t=22",
      duration: "3 mins",
      description: "Physical movement exercise for loosening up",
      tags: ["physical", "movement", "loosening"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "yes-and-story",
      title: "Yes And... Story",
      url: "https://youtu.be/3LzyzrKYybo?t=22",
      duration: "8 mins",
      description: "Collaborative storytelling using 'yes and' principle",
      tags: ["storytelling", "collaboration", "yes-and"],
      difficulty: "medium",
      groupSize: "4-10 people"
    },
    {
      id: "helium-roll",
      title: "Helium Roll",
      url: "https://youtu.be/C4Q_s0_txrQ?t=20",
      duration: "4 mins",
      description: "Group coordination challenge with imaginary helium",
      tags: ["coordination", "challenge", "teamwork"],
      difficulty: "medium",
      groupSize: "8-15 people"
    },
    {
      id: "minefield",
      title: "Minefield",
      url: "https://youtu.be/nLXa1f0mTC0?t=10",
      duration: "10 mins",
      description: "Trust and communication exercise with obstacles",
      tags: ["trust", "communication", "navigation"],
      difficulty: "medium",
      groupSize: "pairs"
    },
    {
      id: "circle-hoop-pass",
      title: "Circle Hoop Pass",
      url: "https://youtu.be/ivYv1VmUXoQ?t=8",
      duration: "5 mins",
      description: "Team coordination challenge passing hoops around circle",
      tags: ["coordination", "teamwork", "challenge"],
      difficulty: "easy",
      groupSize: "8-20 people"
    },
    {
      id: "jump-in-jump-out",
      title: "Jump In Jump Out",
      url: "https://youtu.be/k6bHltjIYzE?t=92",
      duration: "4 mins",
      description: "Quick reaction and focus exercise",
      tags: ["reaction", "focus", "physical"],
      difficulty: "easy",
      groupSize: "6-15 people"
    },
    {
      id: "name-game",
      title: "Name Game",
      url: "https://youtu.be/Pd8_pZ2wHo8?t=96",
      duration: "8 mins",
      description: "Memory and name learning exercise",
      tags: ["memory", "names", "introduction"],
      difficulty: "easy",
      groupSize: "6-20 people"
    },
    {
      id: "name-impulse",
      title: "Name Impulse",
      url: "https://youtu.be/w-HQDMHJLHg?t=139",
      duration: "5 mins",
      description: "Fast-paced name passing exercise",
      tags: ["speed", "names", "energy"],
      difficulty: "medium",
      groupSize: "8-20 people"
    },
    {
      id: "line-number-dance",
      title: "Line Number Dance",
      url: "https://youtu.be/ncWlV9onwZs?t=259",
      duration: "6 mins",
      description: "Coordination exercise with numbers and movement",
      tags: ["coordination", "numbers", "dance"],
      difficulty: "medium",
      groupSize: "10-25 people"
    },
    {
      id: "alphabet-games",
      title: "Alphabet Games",
      url: "https://youtu.be/JS1J-2QYB-Q?t=95",
      duration: "7 mins",
      description: "Letter-based warm-up activities",
      tags: ["letters", "alphabet", "word-play"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "mingle-mingle-mingle",
      title: "Mingle Mingle Mingle",
      url: "https://youtu.be/VaPzX82PUew?t=41",
      duration: "5 mins",
      description: "Social mixing and grouping exercise",
      tags: ["social", "mixing", "grouping"],
      difficulty: "easy",
      groupSize: "10-50 people"
    },
    {
      id: "ladders",
      title: "Ladders",
      url: "https://youtu.be/t3-lNcCiqhA?t=44",
      duration: "8 mins",
      description: "Word association and quick thinking exercise",
      tags: ["word-association", "quick-thinking", "verbal"],
      difficulty: "medium",
      groupSize: "6-15 people"
    },
    {
      id: "hand-game",
      title: "Hand Game",
      url: "https://youtu.be/DHMxfA2OivI?t=58",
      duration: "3 mins",
      description: "Coordination exercise using hands and patterns",
      tags: ["coordination", "hands", "patterns"],
      difficulty: "easy",
      groupSize: "pairs"
    },
    {
      id: "one-word-story",
      title: "One Word Story",
      url: "https://youtu.be/5qZKnPmqD84?t=18",
      duration: "6 mins",
      description: "Collaborative storytelling one word at a time",
      tags: ["storytelling", "collaboration", "words"],
      difficulty: "easy",
      groupSize: "4-12 people"
    },
    {
      id: "conducted-story",
      title: "Conducted Story",
      url: "https://youtu.be/4evX9lFwVbU?t=38",
      duration: "7 mins",
      description: "Storytelling with a conductor directing the narrative",
      tags: ["storytelling", "conducting", "performance"],
      difficulty: "medium",
      groupSize: "6-15 people"
    },
    {
      id: "shared-group-activity",
      title: "Shared Group Activity",
      url: "https://youtu.be/6o2Wc2QJKrk?t=33",
      duration: "5 mins",
      description: "Collaborative activity building exercise",
      tags: ["collaboration", "group", "building"],
      difficulty: "easy",
      groupSize: "6-20 people"
    },
    {
      id: "twin-experts",
      title: "Twin Experts",
      url: "https://youtu.be/UKVxIUjeXj8?t=42",
      duration: "8 mins",
      description: "Partner improvisation as co-experts on a topic",
      tags: ["improv", "partners", "expertise"],
      difficulty: "medium",
      groupSize: "pairs"
    },
    {
      id: "the-oracle",
      title: "The Oracle",
      url: "https://youtu.be/y1NNbSYUx7Q?t=42",
      duration: "6 mins",
      description: "Wisdom-sharing and listening exercise",
      tags: ["wisdom", "listening", "sharing"],
      difficulty: "easy",
      groupSize: "6-15 people"
    },
    {
      id: "family-of",
      title: "Family of...",
      url: "https://youtu.be/0ibGBV_kScg?t=38",
      duration: "5 mins",
      description: "Categorization and grouping exercise",
      tags: ["categorization", "grouping", "thinking"],
      difficulty: "easy",
      groupSize: "6-20 people"
    },
    {
      id: "worlds-worst",
      title: "The World's Worst",
      url: "https://youtu.be/DPDz3oUFeQg?t=34",
      duration: "7 mins",
      description: "Creative exercise thinking of worst possible ideas",
      tags: ["creativity", "reverse-thinking", "humor"],
      difficulty: "medium",
      groupSize: "6-15 people"
    },
    {
      id: "freeze-tag",
      title: "Freeze Tag",
      url: "https://youtu.be/m2xuKeuMGwk?t=40",
      duration: "6 mins",
      description: "Physical improv exercise with freezing and scene creation",
      tags: ["improv", "physical", "scenes"],
      difficulty: "medium",
      groupSize: "6-20 people"
    },
    {
      id: "giant-freeze-tag",
      title: "Giant Freeze Tag",
      url: "https://youtu.be/61XJoK_65r0?t=41",
      duration: "8 mins",
      description: "Large group version of freeze tag improv",
      tags: ["improv", "large-group", "physical"],
      difficulty: "medium",
      groupSize: "15-50 people"
    },
    {
      id: "hitchhiker",
      title: "Hitchhiker",
      url: "https://youtu.be/MDrsiviKyP4?t=38",
      duration: "6 mins",
      description: "Character improv exercise with attitude changes",
      tags: ["improv", "characters", "attitudes"],
      difficulty: "medium",
      groupSize: "4-8 people"
    },
    {
      id: "cone-game",
      title: "Cone Game",
      url: "https://youtu.be/iTmzuki4bQM?t=259",
      duration: "5 mins",
      description: "Spatial awareness and coordination exercise",
      tags: ["spatial", "coordination", "awareness"],
      difficulty: "easy",
      groupSize: "6-15 people"
    },
    {
      id: "job-interview",
      title: "Job Interview",
      url: "https://youtu.be/djk4azPL4gg?t=41",
      duration: "8 mins",
      description: "Improv job interview scenarios",
      tags: ["improv", "interview", "scenarios"],
      difficulty: "medium",
      groupSize: "pairs"
    },
    {
      id: "zip-zap-zop-scenes",
      title: "Zip Zap Zop with Scenes",
      url: "https://youtu.be/fMITwcm1OLo?t=16",
      duration: "7 mins",
      description: "Advanced version combining focus exercise with scene work",
      tags: ["focus", "scenes", "advanced"],
      difficulty: "advanced",
      groupSize: "8-15 people"
    },
    {
      id: "help-desk",
      title: "Help Desk",
      url: "https://youtu.be/IYsOvBy8kxg?t=45",
      duration: "6 mins",
      description: "Problem-solving improv exercise",
      tags: ["problem-solving", "improv", "support"],
      difficulty: "medium",
      groupSize: "4-10 people"
    },
    {
      id: "narrate",
      title: "Narrate",
      url: "https://www.youtube.com/watch?v=_ptffBZ562Y",
      duration: "5 mins",
      description: "Storytelling and narration exercise",
      tags: ["storytelling", "narration", "voice"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "mystery-science-theater",
      title: "Mystery Science Theater",
      url: "https://youtu.be/RkOMAQAcBKE",
      duration: "8 mins",
      description: "Commentary and improvisation exercise",
      tags: ["commentary", "improv", "humor"],
      difficulty: "medium",
      groupSize: "3-8 people"
    },
    {
      id: "dreamer",
      title: "Dreamer",
      url: "https://www.youtube.com/watch?v=7TMBYfa8xxs",
      duration: "6 mins",
      description: "Imagination and visioning exercise",
      tags: ["imagination", "visioning", "creativity"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "fill-the-board",
      title: "Fill the Board",
      url: "https://www.youtube.com/watch?v=7TMBYfa8xxs",
      duration: "10 mins",
      description: "Rapid idea generation to fill whiteboard space",
      tags: ["rapid-generation", "visual", "quantity"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "knockout",
      title: "Knockout",
      url: "https://www.youtube.com/watch?v=7TMBYfa8xxs",
      duration: "8 mins",
      description: "Competitive idea elimination exercise",
      tags: ["competitive", "elimination", "selection"],
      difficulty: "medium",
      groupSize: "6-15 people"
    },
    {
      id: "animate-your-name",
      title: "Animate Your Name",
      url: "https://youtu.be/r_X37lMVQFk?t=39",
      duration: "5 mins",
      description: "Creative name introduction with movement",
      tags: ["names", "animation", "movement"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "animate-your-interests",
      title: "Animate Your Interests",
      url: "https://youtu.be/UCM6ESXCT4Q?t=35",
      duration: "6 mins",
      description: "Physical representation of personal interests",
      tags: ["interests", "physical", "personal"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "objects-of-inspiration",
      title: "Objects of Inspiration",
      url: "https://youtu.be/YeJRW7dBoM0?t=24",
      duration: "8 mins",
      description: "Using physical objects to spark creativity",
      tags: ["objects", "inspiration", "creativity"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "random-tinkering",
      title: "Random Tinkering",
      url: "https://youtu.be/P2pKwshcaa4?t=21",
      duration: "10 mins",
      description: "Unstructured creative exploration with materials",
      tags: ["tinkering", "exploration", "materials"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "word-storm",
      title: "Word Storm",
      url: "https://youtu.be/rjrTO_LYE7Q?t=49",
      duration: "5 mins",
      description: "Rapid word association exercise",
      tags: ["words", "association", "rapid"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "behind-the-noggin",
      title: "Behind the Noggin",
      url: "https://www.youtube.com/watch?v=FmgjnnuCSi8",
      duration: "6 mins",
      description: "Mental warm-up and cognitive preparation",
      tags: ["mental", "cognitive", "preparation"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "many-solutions-paper-game",
      title: "Many Solutions to 1 Problem Paper Game",
      url: "https://www.youtube.com/watch?v=pmh0E99LpK8",
      duration: "12 mins",
      description: "Paper-based problem solving with multiple solutions",
      tags: ["paper", "problem-solving", "multiple-solutions"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "what-is-in-my-pocket",
      title: "What is in my pocket?",
      url: "https://www.youtube.com/watch?v=3hUdOpCpOno",
      duration: "5 mins",
      description: "Imagination and guessing exercise",
      tags: ["imagination", "guessing", "mystery"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "word-rush",
      title: "Word Rush",
      url: "https://www.youtube.com/watch?v=hDAtg7u6coA",
      duration: "4 mins",
      description: "Fast-paced word generation exercise",
      tags: ["speed", "words", "generation"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "shapes-and-perceptions",
      title: "Shapes and Perceptions",
      url: "https://youtu.be/7TMBYfa8xxs?t=44",
      duration: "8 mins",
      description: "Visual perception and interpretation exercise",
      tags: ["visual", "perception", "interpretation"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "unrelated-questions",
      title: "Unrelated Questions",
      url: "https://youtu.be/7TMBYfa8xxs?t=67",
      duration: "6 mins",
      description: "Random question exercise to spark new thinking",
      tags: ["questions", "random", "thinking"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "creatively-use-me",
      title: "Creatively Use Me",
      url: "https://youtu.be/7TMBYfa8xxs?t=112",
      duration: "7 mins",
      description: "Alternative uses for common objects",
      tags: ["objects", "alternative-uses", "creativity"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "wedded-words",
      title: "Wedded Words",
      url: "https://youtu.be/7TMBYfa8xxs?t=149",
      duration: "5 mins",
      description: "Word combination and connection exercise",
      tags: ["words", "combinations", "connections"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "ask-me-anything",
      title: "Ask Me Anything",
      url: "https://youtu.be/7TMBYfa8xxs?t=174",
      duration: "8 mins",
      description: "Open question and improvisation exercise",
      tags: ["questions", "improv", "open"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "opposites-attract",
      title: "Opposites Attract",
      url: "https://youtu.be/7TMBYfa8xxs?t=195",
      duration: "6 mins",
      description: "Finding connections between opposite concepts",
      tags: ["opposites", "connections", "paradox"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "against-the-rules",
      title: "Against the Rules",
      url: "https://youtu.be/7TMBYfa8xxs?t=221",
      duration: "7 mins",
      description: "Breaking conventional thinking patterns",
      tags: ["rule-breaking", "unconventional", "patterns"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "connecting-the-dots",
      title: "Connecting the Dots",
      url: "https://youtu.be/7TMBYfa8xxs?t=253",
      duration: "8 mins",
      description: "Finding relationships between unrelated concepts",
      tags: ["connections", "relationships", "synthesis"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "5-dollar-seed-funding",
      title: "$5 Seed Funding",
      url: "https://youtu.be/VVgIX0s1wY8?t=31",
      duration: "10 mins",
      description: "Quick entrepreneurship and creativity challenge",
      tags: ["entrepreneurship", "creativity", "challenge"],
      difficulty: "medium",
      groupSize: "3-6 people"
    },
    {
      id: "one-word-save-world",
      title: "One Word Save The World",
      url: "https://youtu.be/HHbS1YDhsBg?t=149",
      duration: "8 mins",
      description: "Creative problem-solving with single word solutions",
      tags: ["problem-solving", "words", "global"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "president-of-me",
      title: "President of Me",
      url: "https://youtu.be/8NAwBahN1JI?t=78",
      duration: "6 mins",
      description: "Self-advocacy and presentation exercise",
      tags: ["self-advocacy", "presentation", "confidence"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "lemons-to-lemonade",
      title: "Lemons to Lemonade",
      url: "https://youtu.be/VcUmioEHe_M?t=278",
      duration: "8 mins",
      description: "Turning challenges into opportunities exercise",
      tags: ["challenges", "opportunities", "reframing"],
      difficulty: "medium",
      groupSize: "any"
    }
  ],
  
  //Brainstorming Section
  "brainstorm": [
    {
      id: "brainstorm-rules",
      title: "Brainstorm 101/Rules",
      url: "https://www.youtube.com/watch?v=W1h5L_0rFz8",
      duration: "8 mins",
      description: "Essential rules and guidelines for effective brainstorming sessions",
      tags: ["fundamentals", "rules", "best-practices"],
      difficulty: "beginner",
      groupSize: "any"
    },
    {
      id: "brainstorm-rules-v2",
      title: "101/Rules v2",
      url: "https://youtu.be/09_JdhFA2W0",
      duration: "6 mins",
      description: "Alternative presentation of brainstorming fundamentals",
      tags: ["fundamentals", "rules", "alternative"],
      difficulty: "beginner",
      groupSize: "any"
    },
    {
      id: "divergent-thinking",
      title: "Divergent Thinking",
      url: "https://youtu.be/ZeD7x0GoKEA?t=4",
      duration: "6 mins",
      description: "Understanding and practicing divergent thinking techniques",
      tags: ["divergent", "thinking", "creativity"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "move-past-first-answer",
      title: "Move Past First Answer",
      url: "https://youtu.be/mp-Jj6BBkzM?t=282",
      duration: "5 mins",
      description: "Techniques for getting beyond obvious solutions",
      tags: ["deeper-thinking", "alternatives", "exploration"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "challenge-assumptions",
      title: "Challenge Assumptions",
      url: "https://youtu.be/mp-Jj6BBkzM?t=7",
      duration: "10 mins",
      description: "Learn to identify and challenge limiting assumptions",
      tags: ["assumptions", "critical-thinking", "barriers"],
      difficulty: "medium",
      groupSize: "3-8 people"
    },
    {
      id: "challenge-assumptions-v2",
      title: "Challenge Assumptions v2",
      url: "https://youtu.be/2mlvvSwFkAQ?t=1621",
      duration: "8 mins",
      description: "Advanced assumption challenging techniques",
      tags: ["assumptions", "advanced", "critical-thinking"],
      difficulty: "advanced",
      groupSize: "any"
    },
    {
      id: "connect-combine",
      title: "Connect & Combine",
      url: "https://youtu.be/-CGgLnbFHBI?t=10",
      duration: "7 mins",
      description: "Techniques for connecting disparate ideas and combining concepts",
      tags: ["connections", "combinations", "synthesis"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "best-ideas",
      title: "Best Ideas",
      url: "https://youtu.be/2mlvvSwFkAQ?t=317",
      duration: "6 mins",
      description: "Identifying and developing the strongest ideas",
      tags: ["selection", "development", "quality"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "worst-ideas",
      title: "Worst Ideas",
      url: "https://youtu.be/2mlvvSwFkAQ?t=505",
      duration: "5 mins",
      description: "Using bad ideas to generate breakthrough thinking",
      tags: ["reverse-thinking", "breakthrough", "unconventional"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "worst-to-best-ideas",
      title: "Worst to Best Ideas",
      url: "https://youtu.be/2mlvvSwFkAQ?t=781",
      duration: "8 mins",
      description: "Transform terrible ideas into brilliant solutions",
      tags: ["transformation", "reversal", "improvement"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "new-questions",
      title: "New Questions",
      url: "https://youtu.be/HHbS1YDhsBg?t=15",
      duration: "7 mins",
      description: "Generating fresh questions to drive innovation",
      tags: ["questions", "inquiry", "exploration"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "constraints-into-opportunities",
      title: "Constraints into Opportunities",
      url: "https://youtu.be/v5FL9VTBZzQ?t=95",
      duration: "9 mins",
      description: "Turn limitations into creative catalysts",
      tags: ["constraints", "opportunities", "reframing"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "six-hats-v1",
      title: "Six Hats v1",
      url: "https://youtu.be/-0st77RLsks?t=298",
      duration: "12 mins",
      description: "De Bono's six thinking hats method",
      tags: ["six-hats", "thinking-modes", "perspective"],
      difficulty: "medium",
      groupSize: "4-8 people"
    },
    {
      id: "idea-mash-ups",
      title: "Idea Mash Ups",
      url: "https://youtu.be/2cOACU7bbys?t=755",
      duration: "6 mins",
      description: "Combining unrelated ideas for innovation",
      tags: ["combinations", "mash-ups", "innovation"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "metaphors",
      title: "Metaphors",
      url: "https://youtu.be/-CGgLnbFHBI?t=125",
      duration: "8 mins",
      description: "Using metaphorical thinking for creative solutions",
      tags: ["metaphors", "analogies", "creative-thinking"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "how-might-we",
      title: "How Might We",
      url: "https://www.youtube.com/watch?v=sRGk5oKXgCk&list=PLxk9zj3EDi0UQ3mq7k_-6pSoCQKS11iLd&index=3",
      duration: "12 mins",
      description: "Master the 'How Might We' question framing technique",
      tags: ["questions", "framing", "problems"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "crazy-8s-brainstorm",
      title: "Crazy 8s (Brainstorm)",
      url: "https://www.youtube.com/watch?v=yz4g87XapQ0&list=PLxk9zj3EDi0UQ3mq7k_-6pSoCQKS11iLd&index=2",
      duration: "8 mins",
      description: "Rapid sketching technique for idea generation",
      tags: ["sketching", "rapid", "ideation"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "writing-slip-method",
      title: "Writing Slip Method",
      url: "https://youtu.be/dful8bs574A?t=186",
      duration: "10 mins",
      description: "Silent brainstorming using written notes",
      tags: ["silent", "writing", "individual"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "mind-mapping",
      title: "Mind Mapping",
      url: "https://youtu.be/yAidvTKX6xM?t=18",
      duration: "15 mins",
      description: "Visual brainstorming technique using mind maps",
      tags: ["visual", "mapping", "connections"],
      difficulty: "easy",
      groupSize: "individual or small groups"
    },
    {
      id: "right-braining",
      title: "Right Braining",
      url: "https://youtu.be/yAidvTKX6xM?t=45",
      duration: "8 mins",
      description: "Accessing creative right-brain thinking",
      tags: ["right-brain", "creativity", "intuitive"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "provocative-actions",
      title: "Provocative Actions",
      url: "https://youtu.be/yAidvTKX6xM?t=71",
      duration: "6 mins",
      description: "Using provocative statements to stimulate thinking",
      tags: ["provocative", "stimulation", "breakthrough"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "break-and-build",
      title: "Break & Build",
      url: "https://youtu.be/yAidvTKX6xM?t=105",
      duration: "7 mins",
      description: "Deconstructing problems to rebuild solutions",
      tags: ["deconstruction", "rebuilding", "analysis"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "pessimist-vs-optimist",
      title: "Pessimist vs Optimist",
      url: "https://youtu.be/yAidvTKX6xM?t=132",
      duration: "6 mins",
      description: "Exploring different perspectives on problems",
      tags: ["perspectives", "optimism", "pessimism"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "randomness",
      title: "Randomness",
      url: "https://youtu.be/yAidvTKX6xM?t=174",
      duration: "5 mins",
      description: "Using random inputs to generate new ideas",
      tags: ["random", "inputs", "stimulation"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "nominal-method",
      title: "Nominal Method",
      url: "https://youtu.be/vryDFDD4l_E?t=28",
      duration: "12 mins",
      description: "Structured group brainstorming technique",
      tags: ["structured", "group", "systematic"],
      difficulty: "medium",
      groupSize: "4-8 people"
    },
    {
      id: "reverse-the-problem",
      title: "Reverse the Problem",
      url: "https://youtu.be/vryDFDD4l_E?t=427",
      duration: "8 mins",
      description: "Approach problems from the opposite direction",
      tags: ["reverse", "opposite", "reframing"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "random-word",
      title: "Random Word",
      url: "https://youtu.be/YvNOsogS6Mg?t=652",
      duration: "6 mins",
      description: "Using random words to spark new connections",
      tags: ["random", "words", "connections"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "similies",
      title: "Similies",
      url: "https://youtu.be/-1m6TyBHh5c?t=30",
      duration: "8 mins",
      description: "Using comparison and analogy for ideation",
      tags: ["similies", "analogies", "comparison"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "pass-the-parcel",
      title: "Pass the Parcel",
      url: "https://youtu.be/-1m6TyBHh5c?t=322",
      duration: "10 mins",
      description: "Collaborative idea building exercise",
      tags: ["collaboration", "building", "iteration"],
      difficulty: "easy",
      groupSize: "4-8 people"
    },
    {
      id: "six-hats-v2",
      title: "Six Hats v2",
      url: "https://youtu.be/RMr7JGKk5BQ?t=186",
      duration: "15 mins",
      description: "Advanced six thinking hats application",
      tags: ["six-hats", "advanced", "thinking-modes"],
      difficulty: "advanced",
      groupSize: "4-8 people"
    },
    {
      id: "disney-method",
      title: "Disney Method",
      url: "https://youtu.be/hE2fZYTdIqA?t=466",
      duration: "18 mins",
      description: "Three-role creative thinking method",
      tags: ["disney", "roles", "creative-process"],
      difficulty: "advanced",
      groupSize: "3-6 people"
    },
    {
      id: "scamper-method",
      title: "S.C.A.M.P.E.R.",
      url: "https://youtu.be/f1XDD1vd0E4?t=43",
      duration: "20 mins",
      description: "Systematic creative thinking using the SCAMPER framework",
      tags: ["framework", "systematic", "creative"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "substitute",
      title: "Substitute",
      url: "https://youtu.be/G8w0rJhztJ4?t=101",
      duration: "5 mins",
      description: "SCAMPER technique - finding substitutes",
      tags: ["scamper", "substitute", "alternatives"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "combine",
      title: "Combine",
      url: "https://youtu.be/G8w0rJhztJ4?t=146",
      duration: "4 mins",
      description: "SCAMPER technique - combining elements",
      tags: ["scamper", "combine", "synthesis"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "adapt",
      title: "Adapt",
      url: "https://youtu.be/G8w0rJhztJ4?t=171",
      duration: "5 mins",
      description: "SCAMPER technique - adapting from other contexts",
      tags: ["scamper", "adapt", "context"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "modify-maximize-minimize",
      title: "Modify, Maximize, or Minimize",
      url: "https://youtu.be/G8w0rJhztJ4?t=199",
      duration: "6 mins",
      description: "SCAMPER technique - changing scale or attributes",
      tags: ["scamper", "modify", "scale"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "put-to-other-uses",
      title: "Put to Other Uses",
      url: "https://youtu.be/G8w0rJhztJ4?t=220",
      duration: "4 mins",
      description: "SCAMPER technique - finding new applications",
      tags: ["scamper", "uses", "applications"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "eliminate",
      title: "Eliminate",
      url: "https://youtu.be/G8w0rJhztJ4?t=247",
      duration: "3 mins",
      description: "SCAMPER technique - removing elements",
      tags: ["scamper", "eliminate", "simplify"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "reverse-rearrange",
      title: "Reverse or Re-arrange",
      url: "https://youtu.be/G8w0rJhztJ4?t=267",
      duration: "5 mins",
      description: "SCAMPER technique - changing order or perspective",
      tags: ["scamper", "reverse", "rearrange"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "silent-brainstorming",
      title: "Silent Brainstorming",
      url: "https://youtu.be/ll7F_tSRkFQ?t=31",
      duration: "10 mins",
      description: "Quiet ideation technique for introverted team members",
      tags: ["silent", "individual", "inclusive"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "predict-future-headlines",
      title: "Predict Future Headlines",
      url: "https://youtu.be/UB9UVHGI6AI?t=538",
      duration: "12 mins",
      description: "Future-focused brainstorming technique",
      tags: ["future", "headlines", "prediction"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "user-journey-improv",
      title: "User Journey Improv",
      url: "https://youtu.be/RkOMAQAcBKE",
      duration: "15 mins",
      description: "Improvisational approach to user journey mapping",
      tags: ["user-journey", "improv", "experience"],
      difficulty: "advanced",
      groupSize: "4-8 people"
    }
  ],

  // Prototyping Section
  "prototype": [
    {
      id: "lego-small-scale",
      title: "LEGO/Small Scale",
      url: "https://www.youtube.com/watch?v=x2TEU5jHz5s",
      duration: "10 mins",
      description: "Build quick concept models using LEGO blocks",
      tags: ["lego", "small-scale", "tangible"],
      difficulty: "easy",
      groupSize: "1-4 people"
    },
    {
      id: "cardboard-real-size-v1",
      title: "Cardboard/Real-Size v1",
      url: "https://youtu.be/k_9Q-KDSb9o?t=3",
      duration: "15 mins",
      description: "Create life-size prototypes using cardboard",
      tags: ["cardboard", "real-size", "physical"],
      difficulty: "medium",
      groupSize: "2-6 people"
    },
    {
      id: "cardboard-real-size-v2",
      title: "Cardboard/Real-Size v2",
      url: "https://youtu.be/GCNHvQULBjc?t=5",
      duration: "12 mins",
      description: "Advanced cardboard prototyping techniques",
      tags: ["cardboard", "advanced", "construction"],
      difficulty: "medium",
      groupSize: "2-6 people"
    },
    {
      id: "cardboard-real-size-v3",
      title: "Cardboard/Real-Size v3",
      url: "https://youtu.be/Rbjej4A6oRk?t=572",
      duration: "18 mins",
      description: "Complex cardboard prototype construction",
      tags: ["cardboard", "complex", "detailed"],
      difficulty: "advanced",
      groupSize: "3-8 people"
    },
    {
      id: "30s-commercial",
      title: "30s Commercial",
      url: "https://youtu.be/2mlvvSwFkAQ?t=2033",
      duration: "8 mins",
      description: "Create a 30-second commercial to prototype your concept",
      tags: ["commercial", "video", "storytelling"],
      difficulty: "medium",
      groupSize: "2-5 people"
    },
    {
      id: "1-min-commercial",
      title: "1-min Commercial",
      url: "https://youtu.be/2mlvvSwFkAQ?t=1055",
      duration: "12 mins",
      description: "Extended commercial format for detailed concept presentation",
      tags: ["commercial", "extended", "presentation"],
      difficulty: "medium",
      groupSize: "3-6 people"
    },
    {
      id: "presentations",
      title: "Presentations",
      url: "https://youtu.be/jrM8Dr32_rc?t=480",
      duration: "15 mins",
      description: "Prototype through presentation and pitch formats",
      tags: ["presentation", "pitch", "communication"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "creative-story-telling",
      title: "Creative Story Telling",
      url: "https://youtu.be/_tDkO4SyDOA?t=128",
      duration: "10 mins",
      description: "Use storytelling to prototype experiences and solutions",
      tags: ["storytelling", "narrative", "experience"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "storyboard-v1",
      title: "Storyboard v1",
      url: "https://youtu.be/Hn0oxvw7-OE?t=4",
      duration: "8 mins",
      description: "Visual storytelling through storyboarding",
      tags: ["storyboard", "visual", "narrative"],
      difficulty: "medium",
      groupSize: "1-3 people"
    },
    {
      id: "storyboard-v2",
      title: "Storyboard v2",
      url: "https://youtu.be/z4glsttyxw8?t=73",
      duration: "12 mins",
      description: "Advanced storyboarding techniques",
      tags: ["storyboard", "advanced", "detailed"],
      difficulty: "medium",
      groupSize: "1-4 people"
    },
    {
      id: "paper-prototypes",
      title: "Paper Prototypes",
      url: "https://www.youtube.com/watch?v=85muhAaySps&t=1s",
      duration: "12 mins",
      description: "Low-fidelity paper prototyping for digital interfaces",
      tags: ["paper", "digital", "low-fidelity"],
      difficulty: "easy",
      groupSize: "1-3 people"
    },
    {
      id: "sketch",
      title: "Sketch",
      url: "https://youtu.be/ewMksAbgdBI?t=356",
      duration: "10 mins",
      description: "Rapid sketching for idea communication",
      tags: ["sketching", "rapid", "communication"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "wizard-of-oz-v1",
      title: "Wizard of Oz v1",
      url: "https://youtu.be/vetw8sE8I_s?t=3",
      duration: "7 mins",
      description: "Simulate functionality without building the actual system",
      tags: ["simulation", "testing", "functionality"],
      difficulty: "medium",
      groupSize: "2-4 people"
    },
    {
      id: "foam-core-model",
      title: "Foam-Core Model",
      url: "https://www.youtube.com/watch?v=-bUceTmlCuI",
      duration: "14 mins",
      description: "Build detailed models using foam core materials",
      tags: ["foam-core", "detailed", "construction"],
      difficulty: "medium",
      groupSize: "1-4 people"
    },
    {
      id: "wizard-of-oz-v2",
      title: "Wizard of Oz v2",
      url: "https://youtu.be/yTpWTN6Zt40?t=6",
      duration: "9 mins",
      description: "Advanced simulation techniques for complex systems",
      tags: ["simulation", "advanced", "complex"],
      difficulty: "advanced",
      groupSize: "3-6 people"
    },
    {
      id: "service-design",
      title: "Service Design",
      url: "https://youtu.be/PNeTV6_JoRQ?t=4",
      duration: "16 mins",
      description: "Prototype service experiences and touchpoints",
      tags: ["service", "experience", "touchpoints"],
      difficulty: "advanced",
      groupSize: "4-8 people"
    },
    {
      id: "fake-app-video-demo",
      title: "Fake App Video Demo",
      url: "https://youtu.be/VH7SzKNS9Ik?t=330",
      duration: "8 mins",
      description: "Create video demos of non-existent apps",
      tags: ["app", "video", "demo"],
      difficulty: "medium",
      groupSize: "2-4 people"
    },
    {
      id: "moving-storyboard",
      title: "Moving Storyboard",
      url: "https://youtu.be/5UzgUyUWoTk?t=2",
      duration: "6 mins",
      description: "Animated storyboards for dynamic prototyping",
      tags: ["animation", "storyboard", "dynamic"],
      difficulty: "medium",
      groupSize: "1-3 people"
    },
    {
      id: "paper-app-prototype",
      title: "Paper App Prototype",
      url: "https://youtu.be/VQujvmo1F-4",
      duration: "11 mins",
      description: "Create app interfaces using paper and pen",
      tags: ["app", "paper", "interface"],
      difficulty: "easy",
      groupSize: "1-3 people"
    },
    {
      id: "sketch-and-paper",
      title: "Sketch and Paper",
      url: "https://www.youtube.com/watch?v=JMjozqJS44M",
      duration: "9 mins",
      description: "Combine sketching with paper prototyping",
      tags: ["sketch", "paper", "hybrid"],
      difficulty: "easy",
      groupSize: "1-4 people"
    },
    {
      id: "digital-prototypes",
      title: "Digital Prototypes",
      url: "https://www.youtube.com/watch?v=KWGBGTGryFk",
      duration: "18 mins",
      description: "Creating interactive digital prototypes",
      tags: ["digital", "interactive", "software"],
      difficulty: "advanced",
      groupSize: "1-3 people"
    },
    {
      id: "native-prototypes",
      title: "Native Prototypes",
      url: "https://www.youtube.com/watch?v=lusOgox4xMI",
      duration: "20 mins",
      description: "Build prototypes using native development tools",
      tags: ["native", "development", "technical"],
      difficulty: "advanced",
      groupSize: "1-2 people"
    },
    {
      id: "bodystorming",
      title: "Bodystorming",
      url: "https://youtu.be/AoWAnY2La5k?t=26",
      duration: "6 mins",
      description: "Physical role-playing to understand user experiences",
      tags: ["physical", "role-play", "experience"],
      difficulty: "medium",
      groupSize: "3-8 people"
    },
    {
      id: "lego-chrome-build",
      title: "Lego Chrome Build",
      url: "https://youtu.be/o_vId3S6kP8",
      duration: "12 mins",
      description: "Advanced LEGO construction techniques",
      tags: ["lego", "advanced", "construction"],
      difficulty: "medium",
      groupSize: "2-6 people"
    },
    {
      id: "woodworking",
      title: "Woodworking",
      url: "https://www.youtube.com/watch?v=lyWlBRlHilI",
      duration: "25 mins",
      description: "Build prototypes using woodworking techniques",
      tags: ["woodworking", "craftsmanship", "physical"],
      difficulty: "advanced",
      groupSize: "1-3 people"
    },
    {
      id: "create-presentation",
      title: "Create Presentation",
      url: "https://youtu.be/kYA6GLAzz9A",
      duration: "14 mins",
      description: "Build prototypes through presentation formats",
      tags: ["presentation", "slides", "communication"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "virtual-museums",
      title: "Virtual Museums",
      url: "https://youtu.be/5XNevQHfvjc",
      duration: "16 mins",
      description: "Create virtual exhibition spaces",
      tags: ["virtual", "museums", "exhibition"],
      difficulty: "advanced",
      groupSize: "2-5 people"
    },
    {
      id: "digital-sketchpad",
      title: "Digital Sketchpad",
      url: "https://youtu.be/UkBnwPqaIjA",
      duration: "8 mins",
      description: "Use digital tools for rapid prototyping",
      tags: ["digital", "sketching", "rapid"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "create-e-book",
      title: "Create e-Book",
      url: "https://youtu.be/3m1F9Bbn-gU",
      duration: "18 mins",
      description: "Prototype concepts through e-book format",
      tags: ["e-book", "digital", "content"],
      difficulty: "medium",
      groupSize: "1-3 people"
    },
    {
      id: "pvc-pipe-prototyping",
      title: "PVC Pipe Prototyping",
      url: "https://www.youtube.com/watch?v=J7DJbAhIke8",
      duration: "15 mins",
      description: "Build structures and mechanisms with PVC pipes",
      tags: ["pvc", "construction", "mechanical"],
      difficulty: "medium",
      groupSize: "2-6 people"
    },
    {
      id: "create-website",
      title: "Create a Website",
      url: "https://youtu.be/6Q4737kSSzA",
      duration: "22 mins",
      description: "Prototype digital experiences through websites",
      tags: ["website", "digital", "interactive"],
      difficulty: "advanced",
      groupSize: "1-4 people"
    },
    {
      id: "create-flyer",
      title: "Create a Flyer",
      url: "https://www.youtube.com/watch?v=A_IMeGuzo-s&index=52&list=PLP7Bvyb3ap45bHL3Twz8-x2cUAzTZtF6T",
      duration: "10 mins",
      description: "Communicate concepts through flyer design",
      tags: ["flyer", "design", "communication"],
      difficulty: "easy",
      groupSize: "1-3 people"
    },
    {
      id: "foam-modelling",
      title: "Foam Modelling",
      url: "https://youtu.be/g6xG-5YtesU?t=16",
      duration: "12 mins",
      description: "Sculpt and shape ideas using foam materials",
      tags: ["foam", "sculpting", "3d"],
      difficulty: "medium",
      groupSize: "1-4 people"
    },
    {
      id: "foam-architecture",
      title: "Foam Architecture",
      url: "https://youtu.be/ssxCQuv3KzE",
      duration: "20 mins",
      description: "Build architectural prototypes with foam",
      tags: ["architecture", "foam", "spatial"],
      difficulty: "advanced",
      groupSize: "2-6 people"
    },
    {
      id: "interactive-storyboard",
      title: "Interactive Storyboard",
      url: "https://www.youtube.com/watch?v=mkziNLioEpY&list=PLP7Bvyb3ap45bHL3Twz8-x2cUAzTZtF6T&index=8",
      duration: "14 mins",
      description: "Create clickable, interactive storyboards",
      tags: ["interactive", "storyboard", "clickable"],
      difficulty: "advanced",
      groupSize: "2-4 people"
    },
    {
      id: "share-google-docs",
      title: "Share Google Docs",
      url: "https://www.youtube.com/watch?v=dcgvt7zxFhQ&list=PLP7Bvyb3ap45bHL3Twz8-x2cUAzTZtF6T&index=15",
      duration: "8 mins",
      description: "Collaborative document creation for prototyping",
      tags: ["google-docs", "collaboration", "documents"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "3d-printing",
      title: "3D Printing",
      url: "https://youtu.be/6krYjjfSejY",
      duration: "25 mins",
      description: "Create physical prototypes using 3D printing",
      tags: ["3d-printing", "manufacturing", "precision"],
      difficulty: "advanced",
      groupSize: "1-3 people"
    },
    {
      id: "ifttt-mini-app",
      title: "IFTTT mini-app",
      url: "https://youtu.be/HRJSz9mz80s",
      duration: "12 mins",
      description: "Create automated prototypes using IFTTT",
      tags: ["automation", "ifttt", "connectivity"],
      difficulty: "advanced",
      groupSize: "1-2 people"
    },
    {
      id: "create-google-doc-alerts",
      title: "Create Google Doc Alerts",
      url: "https://www.youtube.com/watch?v=x51EPaZXGUE&list=PLP7Bvyb3ap45bHL3Twz8-x2cUAzTZtF6T&index=26",
      duration: "10 mins",
      description: "Set up notification systems for collaborative work",
      tags: ["alerts", "notifications", "automation"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "engineering-sketches",
      title: "Engineering Sketches",
      url: "https://www.youtube.com/watch?v=1Hm5Zyjmjac",
      duration: "15 mins",
      description: "Technical sketching for engineering solutions",
      tags: ["engineering", "technical", "sketching"],
      difficulty: "medium",
      groupSize: "1-3 people"
    },
    {
      id: "plan-an-event",
      title: "Plan an Event",
      url: "https://www.youtube.com/watch?v=AuGF_X7gsa8&list=PLk4OiJAs3NjE4hVbyq-OgRSl5glOucJFH",
      duration: "18 mins",
      description: "Prototype experiences through event planning",
      tags: ["event-planning", "experience", "logistics"],
      difficulty: "medium",
      groupSize: "3-8 people"
    },
    {
      id: "live-stream",
      title: "Live-Stream",
      url: "https://www.youtube.com/watch?v=kIOA7UDcXos",
      duration: "16 mins",
      description: "Prototype real-time experiences through live streaming",
      tags: ["live-stream", "real-time", "broadcast"],
      difficulty: "advanced",
      groupSize: "2-5 people"
    }
  ],

  // Testing Section
  "test": [
    {
      id: "why-empathy",
      title: "Why Empathy?",
      url: "https://youtu.be/XcYrvvu2ElM?t=27",
      duration: "8 mins",
      description: "Understanding the importance of empathy in user testing",
      tags: ["empathy", "fundamentals", "user-centered"],
      difficulty: "beginner",
      groupSize: "any"
    },
    {
      id: "interviews",
      title: "Interviews",
      url: "https://youtu.be/-0st77RLsks?t=2583",
      duration: "15 mins",
      description: "Comprehensive guide to conducting user interviews",
      tags: ["interviews", "research", "questioning"],
      difficulty: "medium",
      groupSize: "interviewer + user"
    },
    {
      id: "dogfooding",
      title: "Dogfooding",
      url: "https://www.youtube.com/watch?v=sDCDja1GJ5o",
      duration: "8 mins",
      description: "Testing your own product as a user would",
      tags: ["dogfooding", "self-testing", "experience"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "how-to-interview",
      title: "How to Interview",
      url: "https://www.youtube.com/watch?v=C4QgLOr-3LM",
      duration: "15 mins",
      description: "Conducting effective user interviews",
      tags: ["interviews", "research", "questioning"],
      difficulty: "medium",
      groupSize: "interviewer + user"
    },
    {
      id: "interview-the-community",
      title: "Interview the community",
      url: "https://youtu.be/cJQh9dTp1OE?t=51",
      duration: "12 mins",
      description: "Engaging broader communities in research",
      tags: ["community", "interviews", "stakeholders"],
      difficulty: "medium",
      groupSize: "researcher + community"
    },
    {
      id: "rapid-fire-voting",
      title: "Rapid-Fire Voting",
      url: "https://youtu.be/jrM8Dr32_rc?t=2530",
      duration: "6 mins",
      description: "Quick preference testing with multiple users",
      tags: ["voting", "preferences", "rapid"],
      difficulty: "easy",
      groupSize: "facilitator + 5-20 users"
    },
    {
      id: "end-user-word-storm",
      title: "End-User Word Storm",
      url: "https://youtu.be/rjrTO_LYE7Q?t=49",
      duration: "8 mins",
      description: "Gather user language and terminology",
      tags: ["language", "terminology", "users"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "cultural-probes",
      title: "Cultural Probes",
      url: "https://youtu.be/UMxFC3T40aE?t=8",
      duration: "12 mins",
      description: "Understanding users through cultural probe techniques",
      tags: ["cultural", "probes", "ethnographic"],
      difficulty: "advanced",
      groupSize: "researchers + participants"
    },
    {
      id: "workshops",
      title: "Workshops",
      url: "https://youtu.be/w_7CpFhiPT0?t=9",
      duration: "20 mins",
      description: "Facilitating user research workshops",
      tags: ["workshops", "facilitation", "group-research"],
      difficulty: "advanced",
      groupSize: "facilitator + 6-12 participants"
    },
    {
      id: "eat-your-own-dogfood",
      title: "Eat your own Dogfood",
      url: "https://youtu.be/gQNCDaawsWE",
      duration: "10 mins",
      description: "Advanced self-testing methodologies",
      tags: ["dogfooding", "self-testing", "internal"],
      difficulty: "medium",
      groupSize: "team"
    },
    {
      id: "generative-sessions",
      title: "Generative Sessions",
      url: "https://youtu.be/O9_UDy6Xchc?t=9",
      duration: "18 mins",
      description: "User sessions that generate new ideas and insights",
      tags: ["generative", "co-creation", "insights"],
      difficulty: "advanced",
      groupSize: "facilitator + 4-8 participants"
    },
    {
      id: "crossing-the-line",
      title: "Crossing the Line",
      url: "https://youtu.be/gFUQV5aWTxk?t=62",
      duration: "8 mins",
      description: "Testing boundaries and edge cases",
      tags: ["boundaries", "edge-cases", "limits"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "ux-heuristics",
      title: "UX Heuristics",
      url: "https://www.youtube.com/watch?v=_RxfU6dPZuU",
      duration: "22 mins",
      description: "Systematic evaluation using usability heuristics",
      tags: ["heuristics", "evaluation", "systematic"],
      difficulty: "advanced",
      groupSize: "1-3 evaluators"
    },
    {
      id: "field-observations",
      title: "Field Observations",
      url: "https://www.youtube.com/watch?v=XrpAveg7ZIg",
      duration: "10 mins",
      description: "Observing users in their natural environment",
      tags: ["observation", "field-work", "ethnographic"],
      difficulty: "medium",
      groupSize: "1-3 observers"
    },
    {
      id: "user-camera-study",
      title: "User Camera Study",
      url: "https://www.youtube.com/watch?v=EbpQ_UCPH9E",
      duration: "14 mins",
      description: "Using cameras to capture user behavior",
      tags: ["camera", "behavior", "documentation"],
      difficulty: "medium",
      groupSize: "researcher + users"
    },
    {
      id: "speed-dating",
      title: "Speed Dating",
      url: "https://www.youtube.com/watch?v=F--E_C-ua44",
      duration: "8 mins",
      description: "Rapid concept testing with multiple users",
      tags: ["rapid", "concept-testing", "feedback"],
      difficulty: "medium",
      groupSize: "facilitator + 5-10 users"
    }
  ],

  // Reflection Section
  "reflect": [
    {
      id: "i-like-i-wish",
      title: "I Like, I Wish, I Wonder...",
      url: "https://youtu.be/QkWM2--3TQo?t=1445",
      duration: "5 mins",
      description: "Structured feedback collection method",
      tags: ["feedback", "structured", "reflection"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "feedback-capture-grid",
      title: "Feedback Capture Grid",
      url: "https://youtu.be/5XC4JqXUJbw?t=98",
      duration: "8 mins",
      description: "Organize feedback into actionable categories",
      tags: ["feedback", "organization", "grid"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "empathy-map-v1",
      title: "Empathy Map v1",
      url: "https://youtu.be/kAdbbsZolOw?t=58",
      duration: "10 mins",
      description: "Map user thoughts, feelings, and behaviors",
      tags: ["empathy", "mapping", "user-understanding"],
      difficulty: "medium",
      groupSize: "2-6 people"
    },
    {
      id: "2x2-matrix",
      title: "2x2 Matrix",
      url: "https://youtu.be/S03wEpSWuBE?t=190",
      duration: "8 mins",
      description: "Organize insights using two-dimensional frameworks",
      tags: ["matrix", "framework", "organization"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "personas-analysis-v1",
      title: "Personas Analysis v1",
      url: "https://youtu.be/tCAeHfvsjoM?t=144",
      duration: "15 mins",
      description: "Create and analyze user personas from research",
      tags: ["personas", "analysis", "user-types"],
      difficulty: "medium",
      groupSize: "3-6 people"
    },
    {
      id: "personas-analysis-v2",
      title: "Personas Analysis v2",
      url: "https://youtu.be/B23iWg0koi8?t=19",
      duration: "12 mins",
      description: "Advanced persona development techniques",
      tags: ["personas", "advanced", "detailed"],
      difficulty: "medium",
      groupSize: "3-6 people"
    },
    {
      id: "empathy-map-v2",
      title: "Empathy Map v2",
      url: "https://youtu.be/P4peaTRJu7Y?t=52",
      duration: "12 mins",
      description: "Advanced empathy mapping techniques",
      tags: ["empathy", "advanced", "detailed"],
      difficulty: "medium",
      groupSize: "2-6 people"
    },
    {
      id: "day-in-the-life",
      title: "Day in the Life",
      url: "https://www.youtube.com/watch?v=gPoNLohZnnw",
      duration: "18 mins",
      description: "Map complete user journeys through daily activities",
      tags: ["journey", "daily-life", "comprehensive"],
      difficulty: "medium",
      groupSize: "2-5 people"
    },
    {
      id: "journey-map",
      title: "Journey Map",
      url: "https://youtu.be/A2LFJF1SUBg?t=116",
      duration: "15 mins",
      description: "Map the user's entire experience journey",
      tags: ["journey", "experience", "mapping"],
      difficulty: "medium",
      groupSize: "3-6 people"
    },
    {
      id: "powers-of-ten",
      title: "Powers of Ten",
      url: "https://www.youtube.com/watch?v=0fKBhvDjuy0",
      duration: "10 mins",
      description: "Analyze problems at different scales and perspectives",
      tags: ["scale", "perspective", "zoom"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "360deg-tool",
      title: "360deg Tool",
      url: "https://youtu.be/aGn_DCzGvro?t=1450",
      duration: "12 mins",
      description: "Comprehensive perspective analysis tool",
      tags: ["360-degree", "comprehensive", "perspectives"],
      difficulty: "advanced",
      groupSize: "4-8 people"
    },
    {
      id: "stakeholder-mapping",
      title: "Stakeholder Mapping",
      url: "https://youtu.be/eqZfiTp1HZw?t=40",
      duration: "12 mins",
      description: "Identify and map all project stakeholders",
      tags: ["stakeholders", "mapping", "ecosystem"],
      difficulty: "medium",
      groupSize: "3-8 people"
    },
    {
      id: "actors-map",
      title: "Actors Map",
      url: "https://youtu.be/KETAUaiYIsU?t=16",
      duration: "10 mins",
      description: "Map all people involved in the system",
      tags: ["actors", "people", "system"],
      difficulty: "medium",
      groupSize: "3-6 people"
    },
    {
      id: "extreme-users-v1",
      title: "Extreme Users v1",
      url: "https://youtu.be/G4wC2GGINWI?t=6",
      duration: "8 mins",
      description: "Analyze insights from edge case users",
      tags: ["extreme-users", "edge-cases", "insights"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "extreme-users-v2",
      title: "Extreme Users v2",
      url: "https://youtu.be/tLpucd0DFcQ?t=53",
      duration: "10 mins",
      description: "Advanced extreme user analysis techniques",
      tags: ["extreme-users", "advanced", "analysis"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "12-exercises",
      title: "12 Exercises",
      url: "https://www.youtube.com/watch?v=zXI5eOsyJJk&list=PLsiOqo2nblWRTnJoiCjPRlt5K_Uac6XdP",
      duration: "25 mins",
      description: "Comprehensive reflection exercise collection",
      tags: ["comprehensive", "exercises", "collection"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "venn-diagrams",
      title: "Venn Diagrams",
      url: "https://youtu.be/CkV_uRErIqk?t=147",
      duration: "8 mins",
      description: "Use overlapping circles to find intersections and insights",
      tags: ["venn-diagrams", "intersections", "relationships"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "why-why",
      title: "Why? Why?",
      url: "https://youtu.be/dUp0P8HimDA?t=193",
      duration: "10 mins",
      description: "Deep root cause analysis through repeated questioning",
      tags: ["root-cause", "questioning", "deep-analysis"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "5w1h",
      title: "What? Why? When? How? Where? Who?",
      url: "https://youtu.be/dUp0P8HimDA?t=477",
      duration: "12 mins",
      description: "Comprehensive analysis using 5W1H framework",
      tags: ["5w1h", "framework", "comprehensive"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "advanced-google-search",
      title: "Advanced Google Search",
      url: "https://www.youtube.com/watch?v=ASLs4W2cP-U&list=PLP7Bvyb3ap45bHL3Twz8-x2cUAzTZtF6T&index=17",
      duration: "15 mins",
      description: "Research techniques for deeper insight gathering",
      tags: ["research", "google", "search-techniques"],
      difficulty: "medium",
      groupSize: "any"
    },
    {
      id: "bias-testing",
      title: "Bias Testing",
      url: "https://www.youtube.com/watch?v=wEwGBIr_RIw&t=352s",
      duration: "18 mins",
      description: "Identify and address biases in research and analysis",
      tags: ["bias", "testing", "objectivity"],
      difficulty: "advanced",
      groupSize: "any"
    }
  ],

  // Next Steps Section
  "next-steps": [
    {
      id: "roles-responsibilities",
      title: "Roles and Responsibilities",
      url: "https://youtu.be/ijtudIQjVg8?t=96",
      duration: "10 mins",
      description: "Define clear roles and responsibilities for next steps",
      tags: ["roles", "responsibilities", "planning"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "pow-wow",
      title: "Pow Wow",
      url: "https://youtu.be/2mlvvSwFkAQ?t=2589",
      duration: "8 mins",
      description: "Team gathering to align on next steps and decisions",
      tags: ["team-meeting", "alignment", "decisions"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "set-deadlines",
      title: "Set Deadlines",
      url: "https://youtu.be/ijtudIQjVg8?t=156",
      duration: "5 mins",
      description: "Create realistic timelines and deadlines",
      tags: ["deadlines", "timeline", "planning"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "record-progress",
      title: "Record your progress",
      url: "https://youtu.be/ijtudIQjVg8?t=174",
      duration: "6 mins",
      description: "Document and track project progress",
      tags: ["documentation", "tracking", "progress"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "set-alerts-triggers",
      title: "Set Alerts and Triggers",
      url: "https://youtu.be/ijtudIQjVg8?t=209",
      duration: "8 mins",
      description: "Create automated reminders and milestone triggers",
      tags: ["alerts", "automation", "reminders"],
      difficulty: "medium",
      groupSize: "team"
    },
    {
      id: "record-research-notes",
      title: "Record your Research Notes",
      url: "https://www.youtube.com/watch?v=ZNx5k6OuMtA&list=PLP7Bvyb3ap45bHL3Twz8-x2cUAzTZtF6T&index=18",
      duration: "12 mins",
      description: "Systematically document research findings and insights",
      tags: ["research", "documentation", "notes"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "google-sheet-pm",
      title: "Google Sheet Project Management",
      url: "https://www.youtube.com/watch?v=kK5QAcc02F8&index=10&list=PLk4OiJAs3NjE1P9gXNf1rON4iSOdEMDrs",
      duration: "15 mins",
      description: "Organize projects using Google Sheets",
      tags: ["project-management", "google-sheets", "organization"],
      difficulty: "medium",
      groupSize: "team"
    },
    {
      id: "shared-calendar",
      title: "Shared Google Calendar",
      url: "https://www.youtube.com/watch?v=uC8LwtxpWDA&list=PLP7Bvyb3ap45bHL3Twz8-x2cUAzTZtF6T&index=42",
      duration: "8 mins",
      description: "Coordinate team schedules with shared calendars",
      tags: ["calendar", "scheduling", "coordination"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "schedule-meetings",
      title: "Schedule Meetings",
      url: "https://www.youtube.com/watch?v=GJjv_KTNpY8&list=PLk4OiJAs3NjEs7KgIaydyeMRSOVRj0TM-&index=1",
      duration: "10 mins",
      description: "Effectively schedule and coordinate team meetings",
      tags: ["meetings", "scheduling", "coordination"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "add-email-signature",
      title: "Add Email Signature",
      url: "https://www.youtube.com/watch?v=r2tYJ2eT200&index=44&list=PLP7Bvyb3ap45bHL3Twz8-x2cUAzTZtF6T",
      duration: "5 mins",
      description: "Professional email setup for project communication",
      tags: ["email", "professional", "communication"],
      difficulty: "easy",
      groupSize: "individual"
    },
    {
      id: "setup-budget",
      title: "Setup a Budget",
      url: "https://www.youtube.com/watch?v=5xQ69wae8Is&list=PLk4OiJAs3NjE1P9gXNf1rON4iSOdEMDrs&index=17",
      duration: "18 mins",
      description: "Create and manage project budgets",
      tags: ["budget", "finance", "planning"],
      difficulty: "medium",
      groupSize: "team"
    },
    {
      id: "google-hangouts",
      title: "Google Hangouts",
      url: "https://www.youtube.com/watch?v=QoQD2N9u68k&list=PLk4OiJAs3NjEs7KgIaydyeMRSOVRj0TM-&index=2",
      duration: "12 mins",
      description: "Set up virtual meetings and collaboration",
      tags: ["virtual-meetings", "collaboration", "remote"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "create-meeting-agenda",
      title: "Create Meeting Agenda",
      url: "https://www.youtube.com/watch?v=Ern-H96S4oM&list=PLk4OiJAs3NjEs7KgIaydyeMRSOVRj0TM-&index=3",
      duration: "8 mins",
      description: "Structure effective meeting agendas",
      tags: ["agenda", "meetings", "structure"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "meeting-feedback-forms",
      title: "Meeting Feedback Forms",
      url: "https://www.youtube.com/watch?v=bKvBDSHFg2M&list=PLk4OiJAs3NjEs7KgIaydyeMRSOVRj0TM-&index=5",
      duration: "10 mins",
      description: "Collect feedback to improve future meetings",
      tags: ["feedback", "meetings", "improvement"],
      difficulty: "medium",
      groupSize: "team"
    },
    {
      id: "animated-meetings",
      title: "Animated Meetings",
      url: "https://www.youtube.com/watch?v=ghIwry98fEk&list=PLk4OiJAs3NjEs7KgIaydyeMRSOVRj0TM-&index=6",
      duration: "12 mins",
      description: "Make meetings more engaging and dynamic",
      tags: ["engagement", "animation", "dynamic"],
      difficulty: "medium",
      groupSize: "team"
    },
    {
      id: "treasure-island",
      title: "Treasure Island",
      url: "https://youtu.be/k3yJdvTG4n8?t=15",
      duration: "20 mins",
      description: "Team retrospective exercise using treasure island metaphor",
      tags: ["retrospective", "metaphor", "team-reflection"],
      difficulty: "medium",
      groupSize: "4-12 people"
    },
    {
      id: "one-word",
      title: "One Word",
      url: "https://youtu.be/DR3J8G_GkD0?t=9",
      duration: "5 mins",
      description: "Simple retrospective using single word reflection",
      tags: ["retrospective", "simple", "reflection"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "speedboat",
      title: "Speedboat",
      url: "https://youtu.be/xwVbcioYvdM?t=78",
      duration: "15 mins",
      description: "Identify what's driving progress and what's holding back",
      tags: ["retrospective", "progress", "obstacles"],
      difficulty: "medium",
      groupSize: "4-10 people"
    },
    {
      id: "darts",
      title: "Darts",
      url: "https://www.youtube.com/watch?v=SK3_HG6WmQA&list=PLkxjgDhepV4WF9ekM1mcp5jpZWujbLOeu&index=7",
      duration: "8 mins",
      description: "Target-based planning and goal setting",
      tags: ["planning", "goals", "targets"],
      difficulty: "easy",
      groupSize: "any"
    },
    {
      id: "groupmap",
      title: "Groupmap",
      url: "https://youtu.be/OTFZC4hJRl4?t=226",
      duration: "12 mins",
      description: "Collaborative online mapping and planning tool",
      tags: ["mapping", "collaboration", "online"],
      difficulty: "medium",
      groupSize: "team"
    },
    {
      id: "starfish",
      title: "Starfish",
      url: "https://www.youtube.com/watch?v=0EibzNWzUc8",
      duration: "25 mins",
      description: "Five-category retrospective for continuous improvement",
      tags: ["retrospective", "improvement", "starfish"],
      difficulty: "medium",
      groupSize: "4-10 people"
    },
    {
      id: "sailboat",
      title: "Sailboat",
      url: "https://www.youtube.com/watch?v=n9B0Wki_HNE&list=PLAKnT53VwNBj8MQHWiU90kp3K-__FTEmf&index=1",
      duration: "18 mins",
      description: "Navigate toward goals while identifying winds and anchors",
      tags: ["retrospective", "navigation", "goals"],
      difficulty: "medium",
      groupSize: "4-12 people"
    },
    {
      id: "constellation",
      title: "Constellation",
      url: "https://www.youtube.com/watch?v=3iS5YIlnxq0&list=PLAKnT53VwNBj8MQHWiU90kp3K-__FTEmf&index=3",
      duration: "15 mins",
      description: "Map relationships and connections in team dynamics",
      tags: ["relationships", "connections", "team-dynamics"],
      difficulty: "medium",
      groupSize: "6-15 people"
    },
    {
      id: "happiness-index",
      title: "Happiness Index",
      url: "https://www.youtube.com/watch?v=hgrBo5mOF0k&list=PLAKnT53VwNBj8MQHWiU90kp3K-__FTEmf&index=8",
      duration: "10 mins",
      description: "Measure and track team satisfaction and morale",
      tags: ["happiness", "satisfaction", "measurement"],
      difficulty: "easy",
      groupSize: "team"
    },
    {
      id: "return-on-time",
      title: "Return on Time",
      url: "https://www.youtube.com/watch?v=HlKwed3_BaU&list=PLAKnT53VwNBj8MQHWiU90kp3K-__FTEmf&index=9",
      duration: "12 mins",
      description: "Evaluate time investment and productivity",
      tags: ["time", "productivity", "evaluation"],
      difficulty: "medium",
      groupSize: "team"
    },
    {
      id: "kudo-cards",
      title: "Kudo Cards",
      url: "https://www.youtube.com/watch?v=KxBv84SP0rY&list=PLAKnT53VwNBj8MQHWiU90kp3K-__FTEmf&index=6",
      duration: "8 mins",
      description: "Celebrate achievements and positive contributions",
      tags: ["celebration", "recognition", "positive"],
      difficulty: "easy",
      groupSize: "team"
    }
  ]

// Helper functions
function getVideosByPhase(phase) {
  return videoDatabase[phase] || [];
}

function getVideoById(id) {
  for (const phase in videoDatabase) {
    const video = videoDatabase[phase].find(v => v.id === id);
    if (video) {
      return { ...video, phase };
    }
  }
  return null;
}

function getRelatedVideos(currentVideoId, phase, limit = 4) {
  const phaseVideos = videoDatabase[phase] || [];
  return phaseVideos
    .filter(video => video.id !== currentVideoId)
    .slice(0, limit);
}

function searchVideos(query) {
  const results = [];
  const searchTerm = query.toLowerCase();
  
  for (const phase in videoDatabase) {
    videoDatabase[phase].forEach(video => {
      const matchesTitle = video.title.toLowerCase().includes(searchTerm);
      const matchesDescription = video.description.toLowerCase().includes(searchTerm);
      const matchesTags = video.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      
      if (matchesTitle || matchesDescription || matchesTags) {
        results.push({ ...video, phase });
      }
    });
  }
  
  return results;
}

function getAllVideos() {
  const allVideos = [];
  for (const phase in videoDatabase) {
    videoDatabase[phase].forEach(video => {
      allVideos.push({ ...video, phase });
    });
  }
  return allVideos;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    videoDatabase,
    getVideosByPhase,
    getVideoById,
    getRelatedVideos,
    searchVideos,
    getAllVideos
  };
}
