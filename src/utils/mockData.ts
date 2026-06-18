// src/utils/mockData.ts

export const mockUser = {
  id: "USR-001",
  name: "Alex Rivera",
  role: "Civic Leader",
  level: "Level 12 Contributor",
  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  impactPoints: 14200,
  email: "alex@socialnews.org"
};

export const mockCampaigns = [
  {
    id: "CAMP-001",
    title: "Reforest the Amazon 2024",
    description: "Supporting local indigenous communities in large-scale reforestation and biodiversity conservation.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800",
    collected: 75000,
    goal: 100000,
    progress: 75,
    tag: "URGENT",
    participants: 1240
  },
  {
    id: "CAMP-002",
    title: "Tech Literacy for All",
    description: "Distributing 5,000 refurbished laptops to underprivileged students and providing basic tech education.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    collected: 250000,
    goal: 550000,
    progress: 45,
    tag: "",
    participants: 3420
  },
  {
    id: "CAMP-003",
    title: "Clean Energy Initiative",
    description: "Funding the installation of solar micro-grids in off-grid rural communities to power schools and clinics.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    collected: 1840000,
    goal: 2100000,
    progress: 88,
    tag: "",
    participants: 8100
  }
];

export const mockTasks = [
  {
    id: "TASK-001",
    title: "Impact Report Writing",
    description: "Draft the quarterly environmental impact report.",
    status: "PENDING",
    priority: "High",
    points: 150
  },
  {
    id: "TASK-002",
    title: "Local News Interview",
    description: "Interview with the local community leader about the food drive.",
    status: "IN_PROGRESS",
    priority: "Medium",
    points: 300
  },
  {
    id: "TASK-003",
    title: "Donation Drive Video",
    description: "Edit the promotional video for the upcoming donation drive.",
    status: "SUBMITTED",
    priority: "High",
    points: 450
  },
  {
    id: "TASK-004",
    title: "Youth Mentorship",
    description: "Mentor 5 students in the weekend tech camp.",
    status: "APPROVED",
    priority: "Low",
    points: 600,
    earned: true
  }
];

export const mockProducts = [
  {
    id: "PROD-001",
    name: "Artisan Linen Tote",
    price: 35.00,
    description: "Support women's cooperatives",
    image: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "PROD-002",
    name: "Sustainable Hydration Flask",
    price: 28.00,
    description: "1 Flask = 100L Clean Water",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "PROD-003",
    name: "Direct Trade Coffee",
    price: 18.00,
    description: "Directly Sourced from Ethiopia",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "PROD-004",
    name: "Solar Task Lamp",
    price: 55.00,
    description: "Off-grid Power Solution",
    image: "https://images.unsplash.com/photo-1507494924047-9d48240560ec?auto=format&fit=crop&q=80&w=500"
  }
];

export const mockCertificates = [
  {
    id: "CERT-001",
    title: "Digital Advocacy Foundations",
    verifiedDate: "2024-05-12",
    verified: true
  },
  {
    id: "CERT-002",
    title: "Civic Journalism Certificate",
    verifiedDate: "2024-03-28",
    verified: true
  }
];

export const mockAdminUsers = [
  {
    id: "1",
    initials: "JD",
    name: "Jane Doe",
    email: "jane@socialnews.org",
    role: "Civic Leader",
    status: "Active",
    impactPoints: 14200
  },
  {
    id: "2",
    initials: "MK",
    name: "Marcus Knight",
    email: "m.knight@global.com",
    role: "Moderator",
    status: "Review Pending",
    impactPoints: 8920
  },
  {
    id: "3",
    initials: "SC",
    name: "Sarah Chen",
    email: "sarah@impact.io",
    role: "Volunteer",
    status: "Active",
    impactPoints: 2450
  }
];

export const mockEvents = [
  {
    id: "EVT-001",
    date: "JUN 15, 2024",
    title: "Global Civic Summit",
    description: "A 24-hour virtual marathon of workshops and keynote speeches from global leaders.",
    type: "VIRTUAL"
  },
  {
    id: "EVT-002",
    date: "JULY 22, 2024",
    title: "Social News Forum: Europe",
    description: "In-person networking event focusing on policy changes and corporate accountability in the EU.",
    type: "LONDON, UK"
  },
  {
    id: "EVT-003",
    date: "AUGUST 10, 2024",
    title: "Youth Leadership Day",
    description: "Concurrent local meetups organized by our student chapters across 400 universities worldwide.",
    type: "GLOBAL"
  }
];

export const mockStats = {
  registeredMembers: "1,248,500",
  campaignsCompleted: "42,310",
  donationsOutward: "$5.4M+",
  certificatesIssued: "15,800",
  productsSold: "32,140"
};

export const mockQuizzes = [
  {
    id: "QZ-001",
    title: "Environmental Advocacy 101",
    description: "Learn the basics of community organizing and environmental protection.",
    questions: 15,
    score: 95,
    status: "COMPLETED"
  },
  {
    id: "QZ-002",
    title: "Digital Literacy & Misinformation",
    description: "How to spot fake news and protect your digital identity.",
    questions: 20,
    score: null,
    status: "IN_PROGRESS"
  },
  {
    id: "QZ-003",
    title: "Sustainable Urban Planning",
    description: "An introduction to green cities and sustainable infrastructure.",
    questions: 10,
    score: null,
    status: "LOCKED"
  }
];

export const mockDonations = [
  {
    id: "DON-001",
    campaign: "Reforest the Amazon 2024",
    amount: 150.00,
    date: "2024-06-10",
    status: "COMPLETED"
  },
  {
    id: "DON-002",
    campaign: "Clean Energy Initiative",
    amount: 50.00,
    date: "2024-05-22",
    status: "COMPLETED"
  },
  {
    id: "DON-003",
    campaign: "Tech Literacy for All",
    amount: 25.00,
    date: "2024-04-15",
    status: "COMPLETED"
  }
];

export const mockCategories = [
  { id: "home", label: "Home", path: "/" },
  { id: "ap", label: "Andhra Pradesh", path: "/category/ap" },
  { id: "ts", label: "Telangana", path: "/category/ts" },
  { id: "national", label: "National", path: "/category/national" },
  { id: "international", label: "International", path: "/category/international" },
  { id: "cinema", label: "Cinema", path: "/category/cinema" },
  { id: "sports", label: "Sports", path: "/category/sports" },
  { id: "business", label: "Business", path: "/category/business" },
];

export const mockBreakingNews = [
  "Heavy rains alert issued for coastal districts in Andhra Pradesh.",
  "Sensex drops 500 points amid global market sell-off.",
  "New updates on the highly anticipated pan-India movie release date.",
  "Tech giant announces setting up a new campus in Hyderabad."
];

export const mockArticles = [
  {
    id: "ART-001",
    title: "Major Investment Announced for New IT Hub in Visakhapatnam",
    excerpt: "The state government today announced a massive investment package to develop Visakhapatnam as a premier IT destination, promising thousands of new jobs.",
    content: "Full details of the IT hub investment in Visakhapatnam...",
    category: "ap",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    date: "2 hours ago",
    author: "Special Correspondent"
  },
  {
    id: "ART-002",
    title: "Hyderabad Metro Phase 3 Detailed Project Report Submitted",
    excerpt: "The detailed project report for the Phase 3 expansion of the Hyderabad Metro has been officially submitted to the central government for approval.",
    content: "Details regarding Hyderabad Metro Phase 3...",
    category: "ts",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    date: "4 hours ago",
    author: "City Bureau"
  },
  {
    id: "ART-003",
    title: "Parliament Session Begins Amid High Expectations on Budget",
    excerpt: "The monsoon session of the Parliament has commenced today with the opposition demanding a discussion on inflation and employment generation.",
    content: "National news coverage on parliament...",
    category: "national",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800",
    date: "5 hours ago",
    author: "National Desk"
  },
  {
    id: "ART-004",
    title: "Global Tech Leaders Gather at AI Summit in Geneva",
    excerpt: "Experts from around the world convene to discuss the ethical implications and future trajectory of artificial intelligence.",
    content: "International AI summit details...",
    category: "international",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    date: "6 hours ago",
    author: "World News"
  },
  {
    id: "ART-005",
    title: "Star Actor's Latest Action Thriller Crosses ₹100 Crore Mark",
    excerpt: "The recently released action thriller has been declared a blockbuster, crossing the coveted 100 crore mark in its opening weekend.",
    content: "Cinema box office details...",
    category: "cinema",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    date: "7 hours ago",
    author: "Entertainment Desk"
  },
  {
    id: "ART-006",
    title: "National Team Secures Thrilling Victory in Final Over",
    excerpt: "In a nail-biting finish, the national cricket team secured a brilliant victory against their rivals in the T20 series decider.",
    content: "Sports match summary...",
    category: "sports",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
    date: "8 hours ago",
    author: "Sports Correspondent"
  },
  {
    id: "ART-007",
    title: "Inflation Drops Marginally, RBI Holds Repo Rate",
    excerpt: "The Reserve Bank of India has decided to keep the repo rate unchanged for the third consecutive time as retail inflation shows signs of cooling.",
    content: "Business economy details...",
    category: "business",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    date: "9 hours ago",
    author: "Business Bureau"
  },
  {
    id: "ART-008",
    title: "Tirupati Brahmotsavam Preparations in Full Swing",
    excerpt: "The TTD has commenced massive arrangements for the upcoming annual Brahmotsavam, expecting millions of devotees.",
    content: "Devotional news from AP...",
    category: "ap",
    image: "https://images.unsplash.com/photo-1623062366113-1fcd68407cd2?auto=format&fit=crop&q=80&w=800",
    date: "10 hours ago",
    author: "Local Reporter"
  }
];

export const getArticlesByCategory = (categoryId: string) => {
  if (categoryId === "home") return mockArticles;
  return mockArticles.filter(article => article.category === categoryId);
};

export const getArticleById = (articleId: string) => {
  return mockArticles.find(article => article.id === articleId);
};
