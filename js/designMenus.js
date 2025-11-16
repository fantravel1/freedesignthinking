// Design Menus - Curated pathways through the design thinking process
// Each menu provides one activity at each step to create a complete journey

const designMenus = [
  {
    id: "beginners-journey",
    name: "Beginner's Journey",
    description: "Perfect for your first design thinking experience. Start with accessible, fun activities that build confidence and creativity.",
    targetAudience: "First-time learners, students, workshop newcomers",
    timeEstimate: "90 minutes",
    difficulty: "beginner",
    icon: "🌱",
    color: "#4ecdc4",
    activities: {
      warmUp: "mirror-game",
      brainstorm: "brainstorm-rules",
      prototype: "paper-prototyping",
      test: "user-interview-basics",
      reflect: "empathy-map"
    }
  },
  {
    id: "rapid-sprint",
    name: "Rapid Innovation Sprint",
    description: "Move fast and generate breakthrough ideas. Perfect for time-constrained projects and hackathons.",
    targetAudience: "Hackathons, rapid prototyping, time-limited projects",
    timeEstimate: "60 minutes",
    difficulty: "medium",
    icon: "⚡",
    color: "#ff6b6b",
    activities: {
      warmUp: "crazy-8s-v1",
      brainstorm: "divergent-thinking",
      prototype: "cardboard-intro",
      test: "quick-user-feedback",
      reflect: "point-of-view"
    }
  },
  {
    id: "deep-empathy",
    name: "Deep Empathy Path",
    description: "Put users at the center. Build profound understanding through empathy-focused methods perfect for human-centered design.",
    targetAudience: "Social impact projects, user research, service design",
    timeEstimate: "2 hours",
    difficulty: "medium",
    icon: "❤️",
    color: "#667eea",
    activities: {
      warmUp: "mirror-game",
      brainstorm: "how-might-we",
      prototype: "experience-prototype",
      test: "user-interview-basics",
      reflect: "empathy-map"
    }
  },
  {
    id: "physical-products",
    name: "Physical Product Design",
    description: "Design tangible products people can touch and use. Focus on hands-on prototyping and physical testing.",
    targetAudience: "Product designers, inventors, hardware projects",
    timeEstimate: "2.5 hours",
    difficulty: "advanced",
    icon: "🔧",
    color: "#44a08d",
    activities: {
      warmUp: "noodle-run",
      brainstorm: "bodystorm",
      prototype: "cardboard-intro",
      test: "observe-users",
      reflect: "design-criteria"
    }
  },
  {
    id: "digital-solutions",
    name: "Digital Solutions Path",
    description: "Create apps, websites, and digital experiences. Perfect for UX/UI designers and software teams.",
    targetAudience: "UX designers, developers, digital product teams",
    timeEstimate: "2 hours",
    difficulty: "medium",
    icon: "💻",
    color: "#764ba2",
    activities: {
      warmUp: "voice-mirror",
      brainstorm: "divergent-thinking",
      prototype: "paper-prototyping",
      test: "user-interview-basics",
      reflect: "point-of-view"
    }
  },
  {
    id: "service-design",
    name: "Service Design Journey",
    description: "Design memorable experiences and services. Map customer journeys and touchpoints with this comprehensive approach.",
    targetAudience: "Service designers, experience designers, hospitality",
    timeEstimate: "2.5 hours",
    difficulty: "advanced",
    icon: "🎭",
    color: "#2ebf91",
    activities: {
      warmUp: "i-am-a-tree",
      brainstorm: "bodystorm",
      prototype: "experience-prototype",
      test: "observe-users",
      reflect: "empathy-map"
    }
  },
  {
    id: "social-innovation",
    name: "Social Innovation Path",
    description: "Tackle community challenges and create positive change. Designed for social entrepreneurs and changemakers.",
    targetAudience: "Nonprofits, social entrepreneurs, community organizers",
    timeEstimate: "2 hours",
    difficulty: "medium",
    icon: "🌍",
    color: "#ff9a9e",
    activities: {
      warmUp: "across-the-pond",
      brainstorm: "how-might-we",
      prototype: "experience-prototype",
      test: "user-interview-basics",
      reflect: "empathy-map"
    }
  },
  {
    id: "education-classroom",
    name: "Classroom Learning Path",
    description: "Perfect for teachers and students. Engaging activities that work in classroom settings with built-in learning moments.",
    targetAudience: "Teachers, students, educational workshops",
    timeEstimate: "90 minutes",
    difficulty: "beginner",
    icon: "📚",
    color: "#ffa726",
    activities: {
      warmUp: "knee-tag",
      brainstorm: "brainstorm-rules",
      prototype: "paper-prototyping",
      test: "user-interview-basics",
      reflect: "point-of-view"
    }
  },
  {
    id: "corporate-innovation",
    name: "Corporate Innovation Track",
    description: "Drive innovation in established organizations. Professional activities for business teams and corporate innovators.",
    targetAudience: "Corporate teams, business innovators, consultants",
    timeEstimate: "2.5 hours",
    difficulty: "advanced",
    icon: "💼",
    color: "#667eea",
    activities: {
      warmUp: "voice-mirror",
      brainstorm: "challenge-assumptions",
      prototype: "cardboard-intro",
      test: "observe-users",
      reflect: "design-criteria"
    }
  },
  {
    id: "creative-breakthrough",
    name: "Creative Breakthrough",
    description: "Break through creative blocks and discover radical ideas. Improv-focused activities that unlock imagination.",
    targetAudience: "Creative professionals, artists, stuck teams",
    timeEstimate: "90 minutes",
    difficulty: "medium",
    icon: "✨",
    color: "#ff6b6b",
    activities: {
      warmUp: "i-am-a-tree",
      brainstorm: "move-past-first-answer",
      prototype: "experience-prototype",
      test: "quick-user-feedback",
      reflect: "point-of-view"
    }
  },
  {
    id: "youth-workshop",
    name: "Youth Empowerment Workshop",
    description: "Energetic, engaging activities perfect for teens and young adults. Build confidence and creative thinking skills.",
    targetAudience: "Teens, young adults, youth programs",
    timeEstimate: "2 hours",
    difficulty: "beginner",
    icon: "🌟",
    color: "#fecfef",
    activities: {
      warmUp: "knee-tag",
      brainstorm: "brainstorm-rules",
      prototype: "cardboard-intro",
      test: "quick-user-feedback",
      reflect: "empathy-map"
    }
  },
  {
    id: "research-intensive",
    name: "Research-Intensive Path",
    description: "Deep dive into user research and evidence-based design. For teams that need rigorous insights.",
    targetAudience: "Researchers, academic projects, evidence-based design",
    timeEstimate: "3 hours",
    difficulty: "advanced",
    icon: "🔬",
    color: "#88d8c0",
    activities: {
      warmUp: "mirror-game",
      brainstorm: "challenge-assumptions",
      prototype: "experience-prototype",
      test: "observe-users",
      reflect: "empathy-map"
    }
  }
];

// Helper function to get a menu by ID
function getMenuById(menuId) {
  return designMenus.find(menu => menu.id === menuId);
}

// Helper function to get all menus by difficulty
function getMenusByDifficulty(difficulty) {
  return designMenus.filter(menu => menu.difficulty === difficulty);
}

// Helper function to get menu activities with full video details
function getMenuWithVideoDetails(menuId, videoDatabase) {
  const menu = getMenuById(menuId);
  if (!menu) return null;

  const menuWithDetails = { ...menu };
  const activityDetails = {};

  // Get video details for each activity
  for (const [phase, videoId] of Object.entries(menu.activities)) {
    const phaseKey = phase === 'warmUp' ? 'warm-up' :
                     phase.toLowerCase().replace(/([A-Z])/g, '-$1').toLowerCase();

    const phaseVideos = videoDatabase[phaseKey] || [];
    const video = phaseVideos.find(v => v.id === videoId);

    activityDetails[phase] = {
      videoId: videoId,
      phase: phaseKey,
      ...(video || { title: 'Video not found', description: '', url: '' })
    };
  }

  menuWithDetails.activityDetails = activityDetails;
  return menuWithDetails;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { designMenus, getMenuById, getMenusByDifficulty, getMenuWithVideoDetails };
}
