export interface Experience {
    id: string;
    company: string;
    title: string;
    location: string;
    dateRange: string;
    bullets: string[];
}

export interface Education {
    school: string;
    degree: string;
    major: string;
    dates: string;
    coursework: string[];
    honors: string[];
}

export interface Project {
    id: string;
    name: string;
    shortDescription: string;
    techStack: string[];
    impact: string;
    links: {
        github?: string;
        live?: string;
    };
}

export interface About {
    bio: string;
    email?: string;
    github?: string;
    focusAreas: string[];
    technologies: {
        [category: string]: string[];
    };
    stats: { label: string; value: number }[];
}

export const profileData = {
    experience: [
        {
            id: 'exp0',
            company: 'Uber',
            title: 'Incoming Software Engineer Intern',
            location: 'TBD',
            dateRange: 'Present',
            bullets: [
                'Excited to develop infrastructure for car automation and transportation technology, real-time data processing, and working on distributed systems and scalable microservices architectures to support autonomous vehicle platforms',
            ],
        },
        {
            id: 'exp1',
            company: 'Microsoft',
            title: 'Software Engineer Intern',
            location: 'Redmond, WA',
            dateRange: 'May 2025 - August 2025',
            bullets: [
                'Built an interactive outage dashboard with trained LLM analyst using React, C#, Typescript, KQL, and Azure APIs—featuring real-time geographic visualization, automated incident analysis, and insights generation for enhanced operational monitoring',
            ],
        },
        {
            id: 'exp2',
            company: 'Kashaya Language Lab, University of Pennsylvania',
            title: 'Software Engineer',
            location: 'Philadelphia, PA',
            dateRange: 'October 2024 - June 2025',
            bullets: [
                'Contributed to front-end development and HTML/CSS language data integration for UPenn\'s Kashaya tribal dictionary site, enhancing accessibility and user experience to support Indigenous language preservation',
            ],
        },
        {
            id: 'exp3',
            company: 'ROBLOX',
            title: 'Game Developer & UI Designer',
            location: 'Broomfield, CO',
            dateRange: 'August 2014 - May 2022',
            bullets: [
                'Developed 20+ online games with cumulative 4M+ plays and generated approximately $15,000 in earnings using Lua, MySQL, and object-oriented programming to deliver engaging experiences',
            ],
        },
    ] as Experience[],
    education: {
        school: 'STANFORD UNIVERSITY',
        degree: 'Bachelor of Science',
        major: 'Computer Science',
        dates: 'Anticipated Graduation: 06/2027',
        coursework: [
            'Artificial Intelligence',
            'ML',
            'VR',
            'Continuous Mathematics for ML',
            'Design & Analysis of Algorithms',
            'Probability',
            'Discrete Mathematics',
            'Linear Algebra & Multivariable Calculus',
        ],
        honors: [
            '1st Place Technical Award 2025 Microsoft M365 Intern Copilot Agentic AI Hackathon',
            '2nd Place Coinbase Agent Payments YC Hackathon',
            '2nd Place AISES-Chevron 2024 National Hackathon',
            '3rd Place AISES-Chevron 2023 National AI Hackathon',
            'Jane Street UNBOXED Scholar',
        ],
    } as Education,
    projects: [
        {
            id: 'proj0',
            name: 'Sonus - Voice Payment Interface',
            shortDescription: '2nd Place Coinbase Agentic Payments YC Hackathon - AI-powered Web3 payment platform.',
            techStack: ['TypeScript', 'Next.js', 'Coinbase CDP', 'Claude AI', 'Vapi'],
            impact: 'Features autonomous transaction orchestration, HTTP 402 payment protocol, phone-based approval workflows, and gas-abstracted on-chain payments.',
            links: {
                github: 'https://github.com/tonywangs/locus-agentic-hackathon',
            },
        },
        {
            id: 'proj1',
            name: 'xBeat - AI-Powered Voice DJ Panel',
            shortDescription: 'xAI Hackathon Grok Voice Track - AI-powered DJ system with real-time audio processing.',
            techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Grok/X API', 'Web Audio API', 'Three.js', 'React Three Fiber', 'shadcn/ui', 'Tailwind CSS v4'],
            impact: 'Engineered dual-deck audio engine with BPM detection, automated transitions, 3-band EQ, and bass/voice/melody isolation. Built real-time 3D visualizer, voice control with speech recognition and TTS, AI copilot music automation, and REST APIs.',
            links: {
                github: 'https://github.com/awd-i/xBeat',
            },
        },
        {
            id: 'proj2',
            name: 'GIODE SDR - AI-Powered Human Sales Dashboard',
            shortDescription: 'AI-powered SDR system with automated lead scoring and pipeline management.',
            techStack: ['Next.js', 'TypeScript', 'Prisma ORM', 'Grok API', 'Docker', 'shadcn/ui', 'Tailwind CSS'],
            impact: 'Built automated lead scoring, email generation, and pipeline management with REST APIs, multi-model evaluation, error handling with retries, and production-ready architecture.',
            links: {
                github: 'https://github.com/awd-i/GIODESDR/tree/main',
            },
        },
        {
            id: 'proj3',
            name: 'LlamaQuechua OS - Quantifying LLM Endangered Language Hallucination',
            shortDescription: 'Translation hallucination detector for endangered Quechua language.',
            techStack: ['JavaScript', 'OpenAI GPT-4o', 'Google Cloud Translation API'],
            impact: 'Built smoothed multinomial models to compute entropy, cross-entropy, and KL divergence with CLT confidence intervals, featuring dual-mode interface for sentence analysis and automated experiments—detecting 2.054-bit KL divergence and 6.7% token accuracy revealing Spanish contamination.',
            links: {
                github: 'https://github.com/awd-i/llamaquechua',
            },
        },
        {
            id: 'proj4',
            name: 'GrokLock - High Impact Recruiting',
            shortDescription: '3D global talent intelligence platform with real-time, priority-based filters.',
            techStack: ['React', 'react-globe.gl', 'Express.js', 'xAI API'],
            impact: 'Built high-FPS globe navigation and holographic markers for an immersive experience that speeds up candidate discovery.',
            links: {
                github: 'https://github.com/aidanwhitedeer/groklock',
            },
        },
        {
            id: 'proj5',
            name: 'Jiwere Elder Intelligence',
            shortDescription: 'Endangered Language Learning - AI-driven Indigenous language platform.',
            techStack: ['React', 'Node.js', 'GPT/Gemini', 'Webonary APIs', 'SQLite', 'BERT'],
            impact: 'Features authenticated dictionary search across 7k+ entries, AI conversation practice, voice-based pronunciation scoring, and gamified progress tracking.',
            links: {},
        },
        {
            id: 'proj6',
            name: 'Sync\'d - Intern Social Networking App',
            shortDescription: 'Full-stack social platform for Microsoft interns.',
            techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'Graph API', 'OAuth 2.0'],
            impact: 'Features Teams-integrated event management, real-time chat, and mobile-first PWA design.',
            links: {
                github: 'https://github.com/RemleyGHooker/Sync-d/tree/main',
            },
        },
        {
            id: 'proj7',
            name: 'Roblox Simulator Game',
            shortDescription: 'User-saving cloud storage with SQL and Lua-based game mechanics.',
            techStack: ['Lua', 'SQL', 'Roblox Studio', 'Roblox APIs'],
            impact: 'Engineered cloud storage with SQL, scripted Lua-based mechanics, and integrated Roblox APIs to enable in-game catalog, persistent user data, and UI/UX elements.',
            links: {
                live: 'https://www.roblox.com/games/11947761094/1-Weight-Every-Second',
            },
        },
    ] as Project[],
    about: {
        bio: "Welcome to my interactive portfolio, my name is Aidan Whitedeer. I'm a Stanford CS student with an interest in XR/VR, Robotics, Machine Perception, and NLP",
        email: 'whitedeer@stanford.edu',
        github: 'https://github.com/awd-i',
        focusAreas: ['XR/VR', 'AI/ML', 'Machine Perception', 'Natural Language Processing', 'Robotics', 'Dynamic Systems'],
        technologies: {
            'Frameworks & Libraries': ['React', 'PyTorch', 'Next.js', 'Express.js', 'Node.js', 'Framer Motion', 'Three.js', 'react-globe.gl', 'Tailwind CSS', 'BERT', 'Hugging Face', 'Prisma ORM', 'shadcn/ui'],
            'Tools & Technologies': ['Git', 'Fork', 'IntelliJ IDEA', 'Visual Studio Code', 'MATLAB', 'Kusto Explorer', 'Azure', 'Roblox Studio', 'TypeScript', 'Vite', 'WebSockets', 'C#', 'KQL', 'Docker', 'JavaScript'],
            'APIs & Services': ['xAI API', 'Coinbase CDP', 'Claude AI', 'GPT/Gemini', 'Webonary APIs', 'Graph API', 'OAuth 2.0', 'Roblox APIs', 'Azure APIs', 'Vapi', 'Grok API', 'OpenAI GPT-4o', 'Google Cloud Translation API'],
            'Databases': ['MySQL', 'SQL Server', 'Azure Data Explorer', 'PostgreSQL', 'SQLite'],
        },
        stats: [
            { label: 'Python/Lua', value: 95 },
            { label: 'Java/SQL', value: 90 },
            { label: 'React/HTML/CSS', value: 85 },
            { label: 'C++/C#', value: 80 },
        ],
    } as About,
};
