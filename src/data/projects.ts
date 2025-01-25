export interface Project {
  id: string;
  title: string;
  date: string;
  company?: string;
  techStack: string[];
  url?: string;
  description?: string;
  overview?: string;
  features?: {
    title: string;
    description: string;
  }[];
  media?: {
    video?: string;
    screenshots?: string[];
  };
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Content Generator',
    date: '2024-01-15',
    company: 'TechCorp',
    techStack: ['Python', 'OpenAI API', 'FastAPI', 'React', 'TypeScript'],
    url: 'https://github.com/techcorp/ai-content',
    overview: 'An innovative AI-powered content generation platform that leverages the latest in machine learning and natural language processing to create high-quality, contextually relevant content for various use cases.',
    description: 'The platform combines advanced language models with custom-trained algorithms to generate content that maintains brand voice and meets specific content guidelines. Built with scalability in mind, it can handle multiple concurrent requests while maintaining consistent quality.',
    features: [
      {
        title: 'Smart Content Generation',
        description: 'Utilizes OpenAI GPT models with custom fine-tuning for specialized content generation'
      },
      {
        title: 'Real-time Collaboration',
        description: 'Multiple users can collaborate on content projects with live updates and version control'
      },
      {
        title: 'Advanced Analytics',
        description: 'Comprehensive analytics dashboard for tracking content performance and usage metrics'
      },
      {
        title: 'API Integration',
        description: 'RESTful API endpoints for seamless integration with existing content management systems'
      }
    ],
    media: {
      video: 'https://example.com/demo.mp4',
      screenshots: [
        'https://example.com/screenshot1.jpg',
        'https://example.com/screenshot2.jpg',
        'https://example.com/screenshot3.jpg',
        'https://example.com/screenshot4.jpg'
      ]
    }
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    date: '2023-12-20',
    company: 'Digital Solutions Inc',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
    url: 'https://ecommerce-platform.com',
    media: {
      screenshots: [
        'https://example.com/ecommerce1.jpg',
        'https://example.com/ecommerce2.jpg',
        'https://example.com/ecommerce3.jpg'
      ]
    }
  },
  {
    id: '3',
    title: 'Real-time Analytics Dashboard',
    date: '2023-11-05',
    company: 'DataViz Pro',
    techStack: ['Vue.js', 'D3.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    url: 'https://analytics-dashboard.io',
    media: {
      video: 'https://example.com/analytics.mp4'
    }
  },
  {
    id: '4',
    title: 'Mobile Fitness App',
    date: '2023-10-15',
    company: 'HealthTech Startup',
    techStack: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    url: 'https://fitnessapp.mobile',
    media: {
      screenshots: [
        'https://example.com/fitness1.jpg',
        'https://example.com/fitness2.jpg',
        'https://example.com/fitness3.jpg'
      ]
    }
  },
  {
    id: '5',
    title: 'Smart Home IoT Platform',
    date: '2023-09-01',
    company: 'IoT Solutions',
    techStack: ['Python', 'MQTT', 'React', 'MongoDB', 'Raspberry Pi'],
    url: 'https://smarthome-iot.com',
    media: {
      video: 'https://example.com/smarthome.mp4'
    }
  },
  {
    id: '6',
    title: 'Social Media Management Tool',
    date: '2023-08-10',
    company: 'SocialFlow',
    techStack: ['Angular', 'Node.js', 'Redis', 'AWS Lambda'],
    url: 'https://socialflow-tool.com',
    media: {
      screenshots: [
        'https://example.com/social1.jpg',
        'https://example.com/social2.jpg',
        'https://example.com/social3.jpg'
      ]
    }
  },
  {
    id: '7',
    title: 'Blockchain Voting System',
    date: '2023-07-20',
    company: 'BlockTech',
    techStack: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js'],
    url: 'https://blockchain-voting.eth',
    media: {
      video: 'https://example.com/blockchain.mp4'
    }
  },
  {
    id: '8',
    title: 'AI Image Recognition API',
    date: '2023-06-15',
    company: 'AI Vision Corp',
    techStack: ['TensorFlow', 'Python', 'FastAPI', 'Docker', 'AWS'],
    url: 'https://ai-vision-api.dev',
    media: {
      screenshots: [
        'https://example.com/ai1.jpg',
        'https://example.com/ai2.jpg',
        'https://example.com/ai3.jpg'
      ]
    }
  },
  {
    id: '9',
    title: 'Project Management System',
    date: '2023-05-01',
    company: 'Agile Solutions',
    techStack: ['React', 'GraphQL', 'PostgreSQL', 'TypeScript'],
    url: 'https://agile-pm.com',
    media: {
      video: 'https://example.com/project.mp4'
    }
  },
  {
    id: '10',
    title: 'Cryptocurrency Trading Bot',
    date: '2023-04-10',
    company: 'CryptoTech',
    techStack: ['Python', 'Machine Learning', 'MongoDB', 'Docker'],
    url: 'https://crypto-trading-bot.io',
    media: {
      screenshots: [
        'https://example.com/crypto1.jpg',
        'https://example.com/crypto2.jpg',
        'https://example.com/crypto3.jpg'
      ]
    }
  },
  {
    id: '11',
    title: 'Virtual Reality Education Platform',
    date: '2023-03-15',
    company: 'EduTech Innovations',
    techStack: ['Unity', 'C#', 'WebGL', 'Node.js', 'MongoDB'],
    url: 'https://vr-education.com',
    media: {
      video: 'https://example.com/vr.mp4'
    }
  },
  {
    id: '12',
    title: 'Weather Forecasting App',
    date: '2023-02-20',
    company: 'Weather Tech',
    techStack: ['React Native', 'Node.js', 'Redis', 'Python'],
    url: 'https://weather-forecast-pro.com',
    media: {
      screenshots: [
        'https://example.com/weather1.jpg',
        'https://example.com/weather2.jpg',
        'https://example.com/weather3.jpg'
      ]
    }
  },
  {
    id: '13',
    title: 'Music Streaming Service',
    date: '2023-01-05',
    company: 'AudioStream',
    techStack: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    url: 'https://audiostream.fm',
    media: {
      video: 'https://example.com/music.mp4'
    }
  },
  {
    id: '14',
    title: 'Real Estate Management System',
    date: '2022-12-10',
    company: 'PropTech Solutions',
    techStack: ['Angular', 'Java Spring', 'MySQL', 'Docker'],
    url: 'https://proptech-solutions.com',
    media: {
      screenshots: [
        'https://example.com/realestate1.jpg',
        'https://example.com/realestate2.jpg',
        'https://example.com/realestate3.jpg'
      ]
    }
  },
  {
    id: '15',
    title: 'Supply Chain Tracking Platform',
    date: '2022-11-15',
    company: 'LogisticsPro',
    techStack: ['React', 'Node.js', 'MongoDB', 'Blockchain'],
    url: 'https://supply-chain-track.com',
    media: {
      video: 'https://example.com/supplychain.mp4'
    }
  },
  {
    id: '16',
    title: 'Online Learning Platform',
    date: '2022-10-01',
    company: 'EduLearn',
    techStack: ['Next.js', 'Django', 'PostgreSQL', 'AWS'],
    url: 'https://edulearn-platform.com',
    media: {
      screenshots: [
        'https://example.com/onlinelearning1.jpg',
        'https://example.com/onlinelearning2.jpg',
        'https://example.com/onlinelearning3.jpg'
      ]
    }
  },
  {
    id: '17',
    title: 'Healthcare Management System',
    date: '2022-09-15',
    company: 'HealthCare Solutions',
    techStack: ['React', 'Node.js', 'MongoDB', 'Docker'],
    url: 'https://healthcare-ms.com',
    media: {
      video: 'https://example.com/healthcare.mp4'
    }
  },
  {
    id: '18',
    title: 'Game Development Engine',
    date: '2022-08-20',
    company: 'GameTech',
    techStack: ['C++', 'OpenGL', 'Python', 'JavaScript'],
    url: 'https://gametech-engine.dev',
    media: {
      screenshots: [
        'https://example.com/gamedev1.jpg',
        'https://example.com/gamedev2.jpg',
        'https://example.com/gamedev3.jpg'
      ]
    }
  },
  {
    id: '19',
    title: 'Restaurant Ordering System',
    date: '2022-07-10',
    company: 'FoodTech',
    techStack: ['React', 'Firebase', 'Node.js', 'Stripe'],
    url: 'https://foodtech-order.com',
    media: {
      video: 'https://example.com/restaurant.mp4'
    }
  },
  {
    id: '20',
    title: 'HR Management Platform',
    date: '2022-06-15',
    company: 'HR Solutions',
    techStack: ['Angular', 'Java', 'PostgreSQL', 'Docker'],
    url: 'https://hr-solutions-pro.com',
    media: {
      screenshots: [
        'https://example.com/hr1.jpg',
        'https://example.com/hr2.jpg',
        'https://example.com/hr3.jpg'
      ]
    }
  },
  {
    id: '21',
    title: 'Smart City Management System',
    date: '2022-05-01',
    company: 'CityTech',
    techStack: ['React', 'Python', 'IoT', 'TensorFlow', 'MongoDB'],
    url: 'https://smartcity-ms.com',
    media: {
      video: 'https://example.com/smartcity.mp4'
    }
  },
  {
    id: '22',
    title: 'Video Conferencing Platform',
    date: '2022-04-10',
    company: 'ConnectPro',
    techStack: ['WebRTC', 'React', 'Node.js', 'Redis', 'Docker'],
    url: 'https://connectpro-meet.com',
    media: {
      screenshots: [
        'https://example.com/videoconf1.jpg',
        'https://example.com/videoconf2.jpg',
        'https://example.com/videoconf3.jpg'
      ]
    }
  },
  {
    id: '23',
    title: 'Inventory Management System',
    date: '2022-03-15',
    company: 'InventoryPro',
    techStack: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
    url: 'https://inventory-pro-ms.com',
    media: {
      video: 'https://example.com/inventory.mp4'
    }
  }
];
