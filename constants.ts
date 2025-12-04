
import { Stat, Skill, Experience, Project, FunnelData, EventStat, Testimonial, Certification, Affiliation, BlogPost } from './types';

export const HERO_STATS: Stat[] = [
  { label: "Years Experience", value: "9+", subtext: "Leadership" },
  { label: "Users Acquired", value: "1.5K+", subtext: "In 90 Days" },
  { label: "Growth Achieved", value: "3.5x", subtext: "MQL Uplift" },
];

export const CORE_COMPETENCIES = [
  "GTM Strategy & Product Marketing",
  "Event Marketing & Webinars",
  "Brand Positioning & Messaging",
  "MQL Generation & Demand Campaigns",
  "Microsoft & Google Ecosystem Marketing",
  "LinkedIn & Email Campaign Execution"
];

export const SKILLS: Skill[] = [
  { name: "Demand Generation", category: "Marketing", level: "Expert", percentage: 95 },
  { name: "GTM Strategy", category: "Strategy", level: "Expert", percentage: 92 },
  { name: "Content Marketing", category: "Marketing", level: "Expert", percentage: 90 },
  { name: "LinkedIn Campaigns", category: "Marketing", level: "Expert", percentage: 94 },
  { name: "Product Roadmapping", category: "Product", level: "Expert", percentage: 92 },
  { name: "MVP Definition", category: "Product", level: "Expert", percentage: 90 },
  { name: "AI Tools Integration", category: "AI & Tech", level: "Expert", percentage: 90 },
  { name: "HubSpot", category: "Tools", level: "Expert", percentage: 92 },
  { name: "Google Analytics", category: "Analytics", level: "Expert", percentage: 94 },
  { name: "Team Leadership", category: "Leadership", level: "Expert", percentage: 92 },
  { name: "Sales Enablement", category: "Sales", level: "Expert", percentage: 90 },
  { name: "Workflow Automation", category: "AI & Tech", level: "Expert", percentage: 94 },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "ivennbee",
    role: "Marketing Consultant",
    period: "Apr 2025 - Present",
    location: "Remote",
    logo: "https://logo.clearbit.com/ivennbee.com",
    description: "Support multiple SaaS and technology companies with growth consulting, campaign execution, and GTM optimization.",
    achievements: [
      "Unified brand guidelines & design systems",
      "Built 'Campaign Tracker' for multi-brand sync",
      "Driving growth for multiple SaaS clients"
    ],
    skills: ["Growth Consulting", "GTM Optimization", "Analytics"]
  },
  {
    company: "Microgreen Technologies",
    role: "AVP",
    period: "Oct 2024 - Apr 2025",
    location: "Hyderabad, India",
    logo: "https://ui-avatars.com/api/?name=Microgreen&background=0f172a&color=fff&size=128&bold=true", 
    description: "Spearheaded business development and go-to-market strategies for AI-powered SaaS solutions. Led the rollout of TalentFlow.",
    achievements: [
      "Acquired 1,500+ users in 90 days",
      "Reduced churn by 25%",
      "Boosted renewals by 30%"
    ],
    skills: ["Strategic Leadership", "SaaS Sales", "MVP Definition"]
  },
  {
    company: "CAYS Inc.",
    role: "AVP",
    period: "Oct 2023 - Oct 2024",
    location: "Hyderabad, India",
    logo: "https://ui-avatars.com/api/?name=CAYS+Inc&background=2563eb&color=fff&size=128&bold=true",
    description: "Drove product-led growth for AI and cloud-based SaaS solutions. Repositioned an underperforming SaaS product.",
    achievements: [
      "Tripled average deal size",
      "Secured 3 anchor clients in Q1",
      "Optimized pricing strategy"
    ],
    skills: ["Product-Led Growth", "Salesforce Marketing Cloud", "Pricing Strategy"]
  },
  {
    company: "IT America Inc",
    role: "Product Marketing Manager",
    period: "Apr 2019 - Oct 2023",
    location: "Hyderabad, India",
    logo: "https://logo.clearbit.com/itamerica.com",
    description: "Owned the product roadmap for Meta Meetings, an AI and VR training platform.",
    achievements: [
      "Improved training efficiency by 30%",
      "Reduced costs by 25%",
      "Drove enterprise adoption"
    ],
    skills: ["Product Roadmap", "VR/AI", "Stakeholder Management"]
  },
  {
    company: "Vied Technologies, Inc.",
    role: "Marketing Manager",
    period: "Jan 2016 - Apr 2019",
    location: "Chantilly, VA, USA",
    logo: "https://ui-avatars.com/api/?name=Vied&background=475569&color=fff&size=128&bold=true",
    description: "Shaped the product vision for Quantum ATS applicant tracking system.",
    achievements: [
      "40% recruitment efficiency boost",
      "Led client onboarding and user testing",
      "Automated resume parsing"
    ],
    skills: ["Business Development", "Digital Marketing", "HR Tech"]
  }
];

export const FUNNEL_DATA: FunnelData[] = [
  { stage: "Leads", value: 12000, label: "Total Contacts", conversion: "100%", fill: "#3b82f6" },
  { stage: "MQL", value: 1240, label: "Qualified Leads", conversion: "10.3%", fill: "#6366f1" },
  { stage: "SQL", value: 480, label: "Sales Qualified", conversion: "38.7%", fill: "#8b5cf6" },
  { stage: "Won", value: 72, label: "Closed Deals", conversion: "15%", fill: "#10b981" },
];

export const PROJECTS: Project[] = [
  {
    title: "TalentFlow AI",
    category: "SaaS Product",
    description: "AI-powered recruitment platform streamlining hiring workflows.",
    metrics: "1,500+ Users in 90 Days"
  },
  {
    title: "QMigrator AI",
    category: "SaaS Product",
    description: "AI-powered cloud migration and optimization platform.",
    metrics: "3.5x MQL Growth"
  },
  {
    title: "FURA Nonprofit",
    category: "Nonprofit",
    description: "Community-driven nonprofit organization platform focusing on youth.",
    metrics: "+254% Volunteer Growth"
  },
  {
    title: "VerifiedMe AI",
    category: "AI Platform",
    description: "AI-based identity verification and authentication solution.",
    metrics: "Traffic ↑ 312%"
  }
];

export const EVENTS: EventStat[] = [
  { 
    name: "Fabcon", 
    type: "Manufacturing & Tech", 
    role: "Event Marketing Lead", 
    impact: "500+ qualified leads",
    date: "Jun 2024",
    location: "Las Vegas, NV",
    logo: "https://ui-avatars.com/api/?name=Fabcon&background=ef4444&color=fff&size=64&font-size=0.4"
  },
  { 
    name: "GITEX Global", 
    type: "Global Tech Conf", 
    role: "Brand Strategy", 
    impact: "1000+ engaged",
    date: "Oct 2024",
    location: "Dubai, UAE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Gitex_logo.png"
  },
  { 
    name: "Microsoft Ignite", 
    type: "Cloud & AI Summit", 
    role: "Ecosystem Partner", 
    impact: "300+ sessions",
    date: "Nov 2024",
    location: "Seattle, WA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  { 
    name: "Power Platform", 
    type: "Microsoft Conf", 
    role: "Product Marketing", 
    impact: "250+ showcases",
    date: "Dec 2024",
    location: "Las Vegas, NV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
  },
];

export const TESTIMONIALS: Testimonial[] = [];

// Logos
const LOGOS = {
  LINKEDIN: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  GOOGLE: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  MICROSOFT: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  IBM: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  CANVA: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
  HUBSPOT: "https://logo.clearbit.com/hubspot.com",
  TWITTER: "https://logo.clearbit.com/twitter.com",
  YANDEX: "https://logo.clearbit.com/yandex.com",
  SEMRUSH: "https://logo.clearbit.com/semrush.com",
  CERTIPROF: "https://logo.clearbit.com/certiprof.com",
  GREAT_LEARNING: "https://logo.clearbit.com/greatlearning.in"
};

export const CERTIFICATIONS: Certification[] = [
  // AI & ML
  { name: "Artificial Intelligence and Business Strategy", issuer: "LinkedIn Learning", level: "Premium", category: "AI & ML", logo: LOGOS.LINKEDIN, skills: ["Business Transformation", "AI Strategy"] },
  { name: "Microsoft Azure AI Essentials", issuer: "LinkedIn Learning", level: "Premium", category: "AI & ML", logo: LOGOS.LINKEDIN, skills: ["Machine Learning", "Azure"] },
  { name: "AI in the Classroom", issuer: "Canva", level: "Premium", category: "AI & ML", logo: LOGOS.CANVA, id: "031d19" },
  { name: "Introduction to Generative AI", issuer: "Google", level: "Gold", category: "AI & ML", logo: LOGOS.GOOGLE },
  { name: "Introduction to Large Language Models", issuer: "Google", level: "Gold", category: "AI & ML", logo: LOGOS.GOOGLE },
  { name: "Attention Mechanism", issuer: "Google", level: "Gold", category: "AI & ML", logo: LOGOS.GOOGLE },
  { name: "Transformer Models and BERT Model", issuer: "Google", level: "Gold", category: "AI & ML", logo: LOGOS.GOOGLE },
  { name: "Create Image Captioning Models", issuer: "Google", level: "Gold", category: "AI & ML", logo: LOGOS.GOOGLE },
  { name: "Introduction to Responsible AI", issuer: "Google", level: "Gold", category: "AI & ML", logo: LOGOS.GOOGLE },
  { name: "The Art of Prompt Engineering", issuer: "IBM", level: "Premium", category: "AI & ML", logo: LOGOS.IBM },

  // Product Management
  { name: "Product Management First Steps", issuer: "LinkedIn Learning", level: "Premium", category: "Product", logo: LOGOS.LINKEDIN },
  { name: "Project Management Skills for Leaders", issuer: "LinkedIn Learning", level: "Premium", category: "Product", logo: LOGOS.LINKEDIN },
  { name: "Be the Manager People Won't Leave", issuer: "LinkedIn Learning", level: "Premium", category: "Product", logo: LOGOS.LINKEDIN },
  { name: "Certified Product Manager (CPM)", issuer: "Great Learning", level: "Premium", category: "Product", logo: LOGOS.GREAT_LEARNING },
  { name: "Agile Product Lifecycle Management", issuer: "Great Learning", level: "Premium", category: "Product", logo: LOGOS.GREAT_LEARNING },
  { name: "Scrum Foundation Professional", issuer: "CertiProf", level: "Gold", category: "Product", logo: LOGOS.CERTIPROF },
  { name: "Scrum Foundation Basic", issuer: "CertiProf", level: "Gold", category: "Product", logo: LOGOS.CERTIPROF },
  { name: "Remote Work & Virtual Collaboration", issuer: "CertiProf", level: "Standard", category: "Product", logo: LOGOS.CERTIPROF },

  // Digital Marketing
  { name: "Google Analytics Certification", issuer: "Google", level: "Gold", category: "Marketing", logo: LOGOS.GOOGLE },
  { name: "Google Digital Marketing Professional", issuer: "Google", level: "Premium", category: "Marketing", logo: LOGOS.GOOGLE },
  { name: "Campaign Manager 360", issuer: "Google", level: "Gold", category: "Marketing", logo: LOGOS.GOOGLE },
  { name: "Google Ads Search", issuer: "Google", level: "Gold", category: "Marketing", logo: LOGOS.GOOGLE },
  { name: "Display & Video 360", issuer: "Google", level: "Gold", category: "Marketing", logo: LOGOS.GOOGLE },
  { name: "Yandex Metrica Expert", issuer: "Yandex", level: "Premium", category: "Marketing", logo: LOGOS.YANDEX },
  { name: "Microsoft Advertising Professional", issuer: "Microsoft", level: "Premium", category: "Marketing", logo: LOGOS.MICROSOFT },

  // Creative & Tools
  { name: "Canva Essentials", issuer: "Canva", level: "Standard", category: "Tools", logo: LOGOS.CANVA, id: "f087af" },
  { name: "Canva for Work", issuer: "Canva", level: "Standard", category: "Tools", logo: LOGOS.CANVA, id: "39dcdf" },
  { name: "Marketing with Canva", issuer: "Canva", level: "Standard", category: "Tools", logo: LOGOS.CANVA, id: "41a3ce" },
  { name: "Human-Centered Design", issuer: "Canva", level: "Premium", category: "Tools", logo: LOGOS.CANVA, id: "f7b790" },
  { name: "Email Marketing Certified", issuer: "HubSpot", level: "Gold", category: "Tools", logo: LOGOS.HUBSPOT },
  { name: "Social Media Marketing", issuer: "HubSpot", level: "Gold", category: "Tools", logo: LOGOS.HUBSPOT },
  { name: "Twitter for Creatives Badge", issuer: "Twitter", level: "Standard", category: "Tools", logo: LOGOS.TWITTER },

  // Specialized Tech
  { name: "ChatGPT for HR", issuer: "Great Learning", level: "Premium", category: "Specialized", logo: LOGOS.GREAT_LEARNING },
  { name: "Sales Certified - Service", issuer: "HubSpot", level: "Gold", category: "Specialized", logo: LOGOS.HUBSPOT },
  { name: "Amazon - Semrush Certification", issuer: "Semrush", level: "Premium", category: "Specialized", logo: LOGOS.SEMRUSH },
  { name: "Lifelong Learning Professional", issuer: "CertiProf", level: "Standard", category: "Specialized", logo: LOGOS.CERTIPROF },
];

export const AFFILIATIONS: Affiliation[] = [
  { role: "Active Member", organization: "Product Management Association of India (PMAI)", type: "Member", description: "Contributing to discussions on AI-driven product strategies and SaaS growth." },
  { role: "Speaker", organization: "HRTech India Summit 2024", type: "Speaker", description: "Keynote on 'Leveraging AI for Talent Acquisition: Lessons from TalentFlow' to 500+ professionals." },
  { role: "Top 50 Product Leaders in SaaS", organization: "SaaS Innovators Magazine", type: "Award", description: "Recognized for driving innovation and growth in HRTech and EdTech solutions (2023)." },
  { role: "Contributor", organization: "EdTech Review Community", type: "Contributor", description: "Published articles on immersive learning technologies and knowledge sharing." }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Future of GTM: AI-Driven Strategies for 2025",
    excerpt: "How generative AI is reshaping go-to-market motions, from automated personalization to predictive lead scoring.",
    category: "Strategy",
    date: "May 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Scaling from $1M to $10M ARR: The 'Messy Middle'",
    excerpt: "Lessons learned from the trenches of scaling SaaS startups. Why what got you here won't get you there.",
    category: "Growth",
    date: "Apr 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Building High-Performing Marketing Pods",
    excerpt: "A blueprint for structuring agile marketing teams that can execute fast without breaking things.",
    category: "Leadership",
    date: "Mar 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];
