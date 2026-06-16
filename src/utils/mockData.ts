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
