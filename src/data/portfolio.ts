import type { Experience, ProfileCard, SocialLink, TechCategory ,Project} from '@/types';

export const techStack: TechCategory[] = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C' },
    ],
  },
  {
    title: 'Backend Frameworks',
    items: [
      { name: 'Node.js' },
      { name: 'Express.js' },      
      { name: 'Django' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js' },
      { name: 'Redux' },
      { name: 'Micro Frontends' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Databases & Messaging',
    items: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'SQL Server' },
      { name: 'MongoDB' },
      { name: 'Elasticsearch' },
    ],
  },
  {
    title: 'Engineering & Practices',
    items: [
      { name: 'Git & GitHub' },
      { name: 'Microservices Architecture' },
      { name: 'Unit & Integration Testing' },
      { name: 'AI / ML Fundamentals' },
      { name: 'Postman' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'Machine Learning Fundamentals' },
      { name: 'Pandas & NumPy' },
      { name: 'Large Language Models (LLMs)' },
      { name: 'Prompt Engineering' },
      { name: 'Retrieval-Augmented Generation (RAG)' },
      { name: 'Text Generation & Summarization' },
      { name: 'OpenAI / Hugging Face APIs' },
      { name: 'LangChain(Basics)' },
      { name: 'Vector Databases ' },
      { name: 'AI Model Integration via REST APIs' },
    ],
  }
  
];


export const experiences: Experience[] = [
  {
    company: 'St. Fox Consultancy',
    role: 'AI + Full-Stack Engineer Intern',
    type: 'Internship',
    duration: 'Sep 2025 — Jan 2026',
    current: true,
    achievements: [
      'Developed full-stack features using React.js and Node.js for data-driven web applications, focusing on clean UI, reusable components, and scalable frontend architecture.',
      'Built and integrated RESTful APIs using Node.js and Express.js to support dynamic dashboards and real-time data rendering.',
      'Worked on AI-integrated features, including basic recommendation logic and data processing workflows using Python.',
      'Collaborated with senior engineers on system design discussions, performance optimization, and best practices for full-stack development.',
      'Assisted in implementing real-time functionality and improving application responsiveness through efficient state management and API optimization.',
    ],
    skills: [
      'Gen AI',
      'LLM',
      'TensorFlow',
      'REST APIs',
      'PyTorch',
      'React.js',
      'Node.js',
      'Express.js',
      'JavaScript',
      'Python',
      
    ],
  },
  {
    company: 'Mulsan Information Technology Pvt. Ltd.',
    role: 'Software Engineer Intern',
    type: 'Internship',
    duration: 'Feb 2025 — Jul 2025',
    achievements: [
      'Developed frontend components using React.js and backend services using Node.js for internal and client-facing applications.',
      'Integrated REST APIs and handled database operations to support core business logic.',
      'Worked closely with the development team to debug issues, refactor existing code, and improve overall application stability.',
      'Participated in Agile sprints, stand-ups, and code reviews, gaining hands-on experience with real-world software development workflows.',
    ],
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'JavaScript',
      'MySQL',
      'Git',
      'Agile / Scrum',
    ],
  },

];


export const profiles: ProfileCard[] = [
  {
    platform: 'GitHub',
    username: 'chaitanya-92',
    link: 'https://github.com/chaitanya-92',
    description: 'Code enthusiast',
  },
  {
    platform: 'LeetCode',
    username: 'BIbYAqKocA',
    link: 'https://leetcode.com/u/chaitanyaiku/',
    description: '40+ problems solved focusing on Data Structures & Algorithms, and System Design.',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/chaitanya-92',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chaitanya-shinde-21a978246',
    icon: 'linkedin',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/chaitanyaiku/',
    icon: 'leetcode',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Chaitanya_21c',
    icon: 'twitter', 
  },
];




const TEMP_LINK = 'https://github.com/chaitanya-92';

export const projects: Project[] = [
  {
    title: 'KnowTastic',
    subtitle: 'AI-powered Learning Management System',
    description:
      'An intelligent LMS platform designed to improve student engagement using adaptive learning, AI-powered assistance, and emotional feedback.',
    highlights: [
      'Real-time emotion detection using webcam-based facial analysis',
      'AI-powered Q&A assistant using LLM APIs',
      'Voice-to-PDF learning support with speech recognition',
      'Live group chat with gamified learning elements',
      'Mental wellness support using AI-driven insights',
      'Real-time notifications for learning activities',
    ],
    tech: [
      'React.js',
      'Django',
      'Python',
      'OpenCV',
      'TensorFlow ',
      'OpenAI API',
      'WebSockets',
      'Speech-to-Text APIs',
      'PostgreSQL',
      'REST APIs',
    ],
    github: TEMP_LINK,
    live: TEMP_LINK,
    category: 'personal',
  },  
  {
    title: 'Collaborative Cadence',
    subtitle: 'Music Collaboration Platform',
    
    description:
      'A collaborative platform that enables artists to work together in real time, securely share media, and manage creative workflows.',
    highlights: [
      'Real-time chat and collaboration using WebSockets',
      'Secure media upload and file sharing',
      'Role-based access control for collaborators',
      'Project-based collaboration spaces',
      'Content moderation and reporting system',
      'Versioned file management for creative assets',
      'Notification system for collaboration updates',
    ],
    tech: [
      'React.js',
      'Node.js',
      'WebSockets',
      'JWT Authentication',
      'Media Storage & Handling',
      'REST APIs',
    ],
    github: TEMP_LINK,
    live: 'https://github.com/chaitanya-92/collborativecadence',
    category: 'personal',
  },
  {
    title: 'Beyond Limit',
    subtitle: 'Inclusive Job Portal',
    description:
      'An inclusive job platform designed to connect specially-abled job seekers with employers through accessible, personalized, and secure hiring experiences.',
    highlights: [
      'Accessible resume builder with guided onboarding flows',
      'Personalized job discovery with dynamic filters and search',
      'Admin dashboard with real-time analytics and moderation tools',
      'Secure authentication and role-based access control',
      'WCAG-compliant UI with accessibility-first design',
      'Employer verification and job approval workflows',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL / SQL',
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'Recharts',
      'REST APIs',
    ],
    github: 'https://github.com/chaitanya-92/collborativecadence',
    live: TEMP_LINK,
    category: 'personal',
  },
  {
    title: 'Pathology Lab Management System',
    subtitle: 'Healthcare Management System',
    description:
      'A healthcare management system built for diagnostic labs to handle appointments, reports, billing, and secure payments efficiently.',
    highlights: [
      'Online appointment scheduling and patient management',
      'Automated test report generation and digital delivery',
      'Billing and invoicing with integrated payment gateway',
      'Secure online payments and transaction tracking',
      'Admin dashboard for lab operations and report approvals',
      'Improved operational efficiency by approximately 40%',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'SQL / MySQL',
      'REST APIs',
      'Payment Gateway Integration (Razorpay)',
    ],
    github: TEMP_LINK,
    live: 'http://relativepathlab.site/',
    category: 'client',
  }
  
];
