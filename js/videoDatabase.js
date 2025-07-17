// Design Thinking Video Database
// All videos organized by phase and category

const videoDatabase = {
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
    }
  ],

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
      id: "scamper-method",
      title: "S.C.A.M.P.E.R. Method",
      url: "https://youtu.be/f1XDD1vd0E4?t=43",
      duration: "20 mins",
      description: "Systematic creative thinking using the SCAMPER framework",
      tags: ["framework", "systematic", "creative"],
      difficulty: "medium",
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
    }
  ],

  "prototype": [
    {
      id: "lego-prototyping",
      title: "LEGO Small Scale Prototyping",
      url: "https://www.youtube.com/watch?v=x2TEU5jHz5s",
      duration: "10 mins",
      description: "Build quick concept models using LEGO blocks",
      tags: ["lego", "small-scale", "tangible"],
      difficulty: "easy",
      groupSize: "1-4 people"
    },
    {
      id: "cardboard-real-size-v1",
      title: "Cardboard Real-Size v1",
      url: "https://youtu.be/k_9Q-KDSb9o?t=3",
      duration: "15 mins",
      description: "Create life-size prototypes using cardboard",
      tags: ["cardboard", "real-size", "physical"],
      difficulty: "medium",
      groupSize: "2-6 people"
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
      id: "digital-prototypes",
      title: "Digital Prototypes",
      url: "https://www.youtube.com/watch?v=KWGBGTGryFk",
      duration: "18 mins",
      description: "Creating interactive digital prototypes",
      tags: ["digital", "interactive", "software"],
      difficulty: "advanced",
      groupSize: "1-3 people"
    }
  ],

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

  "reflect": [
    {
      id: "i-like-i-wish",
      title: "I Like, I Wish, I Wonder",
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
      id: "stakeholder-mapping",
      title: "Stakeholder Mapping",
      url: "https://youtu.be/eqZfiTp1HZw?t=40",
      duration: "12 mins",
      description: "Identify and map all project stakeholders",
      tags: ["stakeholders", "mapping", "ecosystem"],
      difficulty: "medium",
      groupSize: "3-8 people"
    }
  ],

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
      id: "starfish",
      title: "Starfish Retrospective",
      url: "https://www.youtube.com/watch?v=0EibzNWzUc8",
      duration: "25 mins",
      description: "Five-category retrospective for continuous improvement",
      tags: ["retrospective", "improvement", "starfish"],
      difficulty: "medium",
      groupSize: "4-10 people"
    }
  ]
};

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