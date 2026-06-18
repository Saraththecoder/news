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
  },
  { id: "ART-AP1", title: "Amaravati Capital Works to Resume Swiftly", excerpt: "Government sanctions funds to restart capital development projects.", content: "Full content...", category: "ap", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800", date: "11 hours ago", author: "Staff" },
  { id: "ART-AP2", title: "Polavaram Project Reaches Crucial Milestone", excerpt: "The spillway concrete work completes, pushing the project closer to realization.", content: "Full content...", category: "ap", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800", date: "12 hours ago", author: "Staff" },
  { id: "ART-AP3", title: "New Coastal Corridor Proposed for State", excerpt: "A massive industrial corridor along the coast to boost employment.", content: "Full content...", category: "ap", image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800", date: "13 hours ago", author: "Staff" },

  { id: "ART-TS1", title: "Hyderabad IT Exports Cross New Record", excerpt: "Telangana reports a 20% surge in IT exports this financial year.", content: "Full content...", category: "ts", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800", date: "2 hours ago", author: "Staff" },
  { id: "ART-TS2", title: "Musam River Rejuvenation Project Announced", excerpt: "State government to allocate 500 crores to clean and revitalize the river.", content: "Full content...", category: "ts", image: "https://images.unsplash.com/photo-1542314831-c6a4d14d237b?auto=format&fit=crop&w=800", date: "3 hours ago", author: "Staff" },
  { id: "ART-TS3", title: "New Flyover Inaugurated in Secunderabad", excerpt: "Traffic woes expected to ease with the opening of the 3km flyover.", content: "Full content...", category: "ts", image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800", date: "4 hours ago", author: "Staff" },

  { id: "ART-NAT1", title: "Elections: Historic Voter Turnout Recorded", excerpt: "Citizens cast their votes in record numbers across 15 states.", content: "Full content...", category: "national", image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800", date: "1 hour ago", author: "Staff" },
  { id: "ART-NAT2", title: "Union Budget Focuses on Infrastructure", excerpt: "Finance Minister outlines massive spending on roads, railways, and ports.", content: "Full content...", category: "national", image: "https://images.unsplash.com/photo-1580519542036-ed47f3e42214?auto=format&fit=crop&w=800", date: "2 hours ago", author: "Staff" },
  { id: "ART-NAT3", title: "ISRO Plans New Lunar Mission Launch", excerpt: "The space agency is gearing up for its next ambitious moon landing attempt.", content: "Full content...", category: "national", image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800", date: "3 hours ago", author: "Staff" },

  { id: "ART-INT1", title: "Global Climate Summit Concludes with Pledge", excerpt: "190 nations agree to phase down fossil fuels by 2040.", content: "Full content...", category: "international", image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800", date: "4 hours ago", author: "Staff" },
  { id: "ART-INT2", title: "Major Breakthrough in Quantum Computing", excerpt: "Researchers achieve new stability record in quantum state manipulation.", content: "Full content...", category: "international", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800", date: "5 hours ago", author: "Staff" },
  { id: "ART-INT3", title: "European Markets Rally on Positive Data", excerpt: "Inflation cools faster than expected across the Eurozone.", content: "Full content...", category: "international", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800", date: "6 hours ago", author: "Staff" },

  { id: "ART-CIN1", title: "Top Director's Pan-India Film Teaser Drops", excerpt: "Fans go wild as the first glimpse of the historical epic hits YouTube.", content: "Full content...", category: "cinema", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800", date: "7 hours ago", author: "Staff" },
  { id: "ART-CIN2", title: "Veteran Actor Honored with Lifetime Award", excerpt: "A legendary career celebrated at the prestigious national film awards.", content: "Full content...", category: "cinema", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800", date: "8 hours ago", author: "Staff" },
  { id: "ART-CIN3", title: "Box Office: Small Budget Indie Film is a Hit", excerpt: "The emotional drama continues to draw massive crowds in its third week.", content: "Full content...", category: "cinema", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800", date: "9 hours ago", author: "Staff" },

  { id: "ART-SPT1", title: "Olympians Return Home to Grand Welcome", excerpt: "Medalists receive hero's welcome at the national airport.", content: "Full content...", category: "sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800", date: "10 hours ago", author: "Staff" },
  { id: "ART-SPT2", title: "Tennis: Young Sensation Wins Grand Slam", excerpt: "A stunning upset in straight sets crowns a new champion.", content: "Full content...", category: "sports", image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=800", date: "11 hours ago", author: "Staff" },
  { id: "ART-SPT3", title: "Football League Finale Ends in Penalty Shootout", excerpt: "The championship decided in a nail-biting finish under the lights.", content: "Full content...", category: "sports", image: "https://images.unsplash.com/photo-1518605368461-1e12dbfcdb0c?auto=format&fit=crop&w=800", date: "12 hours ago", author: "Staff" },

  { id: "ART-BUS1", title: "Tech Startup Reaches Unicorn Status", excerpt: "The AI-driven local logistics firm secures massive Series C funding.", content: "Full content...", category: "business", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800", date: "1 hour ago", author: "Staff" },
  { id: "ART-BUS2", title: "Auto Industry Sees EV Sales Surge", excerpt: "Electric vehicles account for 30% of new car sales this quarter.", content: "Full content...", category: "business", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&w=800", date: "2 hours ago", author: "Staff" },
  { id: "ART-BUS3", title: "Gold Prices Hit New All-Time High", excerpt: "Investors flock to safe-haven assets amid global economic uncertainty.", content: "Full content...", category: "business", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800", date: "3 hours ago", author: "Staff" }
];

export const getArticlesByCategory = (categoryId: string) => {
  if (categoryId === "home") return mockArticles;
  return mockArticles.filter(article => article.category === categoryId);
};

export const getArticleById = (articleId: string) => {
  return mockArticles.find(article => article.id === articleId);
};
