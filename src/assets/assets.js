import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaNodeJs, FaDatabase, FaCloud, FaRobot, FaPython, FaMicrophone, FaStripe } from 'react-icons/fa';

import projectImg1 from '../assets/profile1new.png';
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
  title: "Blogging System",
  description: "A full-stack blogging platform built with Django that enables users to create, edit, publish, and manage blog posts with secure authentication and role-based access.",
  image: projectImg2,
  tech: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
  icons: [FaPython, FaDatabase, FaServer, FaCloud],
  demo: "#",
  code: "#",
},

  {
    title: "Pathology Management System",
    description: "A web-based pathology management system that automates patient records, test processing, report generation, and result notifications with secure, role-based access control.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Bootstrap",'Twilio API'],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "https://github.com/akashdeep-tech-os/Lab-Management-system",
  },
  
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
  title: "Voice Assistant",
  description: "A Python-based voice assistant capable of recognizing speech commands, performing tasks such as web searches, application control, time and weather queries, and responding with text-to-speech.",
  image: projectImg4,
  tech: ["Python", "SpeechRecognition", "pyttsx3", "APIs"],
  icons: [FaPython, FaMicrophone],
  demo: "#",
  code: "https://github.com/akashdeep-tech-os/AI-Assistant-Using-OpenAI-s-GPT-3-and-Python",
},
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
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
