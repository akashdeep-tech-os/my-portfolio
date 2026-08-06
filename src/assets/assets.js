import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaNodeJs, FaDatabase, FaCloud, FaRobot, FaPython, FaMicrophone, FaStripe } from 'react-icons/fa';

import projectPathology from '../assets/project-pathology.webp';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['FastAPI', 'Django', 'Node.js', 'Express.js']
  },
  {
    title: 'API & Authentication',
    icon: FaNodeJs,
    description: 'Securing applications with robust authentication and well-documented APIs.',
    tags: ['RESTful APIs', 'JWT Authentication', 'Swagger/OpenAPI']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['PostgreSQL', 'MongoDB']
  },
  {
    title: 'Programming Languages',
    icon: FaCode,
    description: 'Strong foundation across general-purpose and web programming languages.',
    tags: ['Java', 'Python', 'JavaScript', 'SQL', 'C']
  },
  {
    title: 'Developer Tools',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Docker', 'Nginx', 'Postman', 'Vite', 'ESLint', 'VS Code', 'npm']
  }
];



export const projects = [
 {
  slug: "django-blogging-system",
  title: "Blogging System",
  tagline: "Full-stack blogging platform built with Django",
  description: "A full-stack blogging platform built with Django that enables users to create, edit, publish, and manage blog posts with secure authentication and role-based access.",
  longDescription: "A complete full-stack blogging platform built with Django and PostgreSQL that enables authors to create, edit, publish, and manage blog posts from an intuitive admin panel. The system implements secure user authentication, role-based access control, and a clean, responsive reading experience. It was built to demonstrate production-grade Django patterns including the ORM, form handling, and admin customisation.",
  image: projectImg2,
  alt: "Screenshot of the Django blogging system web application",
  tech: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
  icons: [FaPython, FaDatabase, FaServer, FaCloud],
  demo: "#",
  code: "#",
  datePublished: "2024-05-01",
},

  {
    slug: "pathology-management-system",
    title: "Pathology Management System",
    tagline: "Web-based pathology lab management with automated reports",
    description: "A web-based pathology management system that automates patient records, test processing, report generation, and result notifications with secure, role-based access control.",
    longDescription: "A web-based pathology lab management system that automates the entire diagnostic workflow: patient registration, test processing, report generation, and automated result notifications via the Twilio API. Built with React, Node.js, and MongoDB, the platform uses secure role-based access control so labs, technicians, and admins only see what they are authorised to. It reduces manual paperwork and turnaround time for diagnostic reports.",
    image: projectPathology,
    alt: "Dashboard of the pathology lab management system built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Bootstrap",'Twilio API'],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "https://github.com/akashdeep-tech-os/Lab-Management-system",
    datePublished: "2024-03-01",
  },
  
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    tagline: "Mobile fitness app for workouts and health metrics",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    longDescription: "A mobile application for tracking workouts, nutrition, and daily health metrics in one place. The app uses React Native for a smooth cross-platform experience, GraphQL for efficient data fetching, and MySQL for reliable storage. Chart.js visualisations help users monitor progress over time and stay motivated toward their fitness goals.",
    image: projectImg3,
    alt: "Fitness tracker mobile app interface showing workout and health metrics",
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
    datePublished: "2024-08-01",
  },
  {
  slug: "python-voice-assistant",
  title: "Voice Assistant",
  tagline: "AI-powered Python voice assistant",
  description: "A Python-based voice assistant capable of recognizing speech commands, performing tasks such as web searches, application control, time and weather queries, and responding with text-to-speech.",
  longDescription: "An AI-powered voice assistant written in Python that recognises natural speech commands and responds using text-to-speech. It can perform web searches, control applications, answer time and weather queries, and automate everyday tasks hands-free. Built with SpeechRecognition, pyttsx3, and public APIs, this project demonstrates practical AI, natural language processing, and audio integration skills.",
  image: projectImg4,
  alt: "Python voice assistant AI application in action",
  tech: ["Python", "SpeechRecognition", "pyttsx3", "APIs"],
  icons: [FaPython, FaMicrophone],
  demo: "#",
  code: "https://github.com/akashdeep-tech-os/AI-Assistant-Using-OpenAI-s-GPT-3-and-Python",
  datePublished: "2024-01-01",
},
  {
    slug: "real-time-chat-app",
    title: "Chat App",
    tagline: "Real-time messaging with group chats and file sharing",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    longDescription: "A real-time chat application with group messaging, emoji reactions, and file sharing built on Socket.IO. The React frontend pairs with a Node.js backend and MongoDB persistence so conversations stay synchronised across every connected client in real time. It showcases WebSocket architecture, event-driven design, and responsive UI development.",
    image: projectImg5,
    alt: "Real-time chat application with group messaging interface",
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
    datePublished: "2024-06-01",
  },
  {
    slug: "ai-image-generator",
    title: "AI Image Generator",
    tagline: "Generate images from text prompts with OpenAI DALL·E",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    longDescription: "An AI image generator that turns text prompts into stunning artwork using OpenAI's DALL·E model, with Cloudinary handling storage, optimisation, and delivery. The React and Tailwind CSS frontend gives users a clean, fast interface to create, preview, and download AI-generated images. This project combines generative AI APIs, cloud media pipelines, and modern frontend engineering.",
    image: projectImg6,
    alt: "AI image generator app powered by OpenAI DALL-E, showing generated artwork",
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
    datePublished: "2024-10-01",
  }
];


export const workData = [
  {
  role: "Software Developer",
  company: "E-Vision India Pvt. Ltd.",
  duration: "Sept 2024 - Mar 2026",
  description:
    "Developed enterprise-grade Video Management System (VMS) applications using React.js, Tailwind CSS, and modern JavaScript (ES6+) for real-time surveillance solutions. Built core modules including Live View, Playback, Dashboard, Device Management, and AI Analytics, delivering responsive and scalable user interfaces. Integrated the React.js frontend with Spring Boot REST APIs for live streaming, device management, event monitoring, and alert notifications. Developed reusable React components, optimized application performance, and collaborated with backend and QA teams to deliver production-ready features.",
  color: "purple"
}
,
  {
    role: "Python Backend Developer Intern",
    company: "Brightcode Software Services Pvt. Ltd.",
    duration: "May 2023 - June 2023",
    description:
      "Developed and maintained backend features using Python, Django, and PostgreSQL. Implemented Django ORM, authentication, form handling, and admin panel functionality. Gained hands-on experience in full-stack development and worked closely with senior developers to understand project architecture and backend workflows.",
    color: "pink"
  }
];
