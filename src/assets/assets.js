import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot,FaPython,FaMicrophone} from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import profileImg_1 from "../assets/profile_1.jpg"
import projectImg1 from '../assets/profile1new.png';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
    profileImg_1,
}


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
    tags: ['React', 'Vue.js', 'TypeScript',"HTML","CSS","JavaScript"]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Django', 'Flask','FastAPI','Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
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
  role: "Full-Stack Developer",
  company: "E-VISION India Pvt. Ltd.",
  duration: "Sept 2024 - Present",
  description:
    "At E-Vision India, I contribute to backend development, API integrations, and system automation for internal platforms and CCTV-related applications. My role focuses on building reliable REST APIs, managing device workflows, and designing efficient database structures using PostgreSQL. I work across system modules that involve user authentication, device management, and activity logging, ensuring seamless data exchange between backend systems and frontend dashboards. I also collaborate with product teams to implement secure access controls, optimize backend logic, and automate repetitive tasks to improve operational efficiency.",
  color: "purple"
}
,
  {
    role: "Python Backend Developer Intern",
    company: "Brightcode Software Services Pvt. Ltd.",
    duration: " May 2023 - June 2023",
    description:
      "During my internship at Brightcode, I assisted in developing web application features using Django, gaining hands-on experience in full-stack development. I contributed to building user authentication, form handling, and admin interfaces, and worked closely with senior developers to understand project architecture and backend workflows. I wrote clean, modular Python code using Django's ORM, views, and templates, and participated in debugging and testing application features. My work strengthened my foundations in web development and improved my proficiency with technologies like HTML, CSS, JavaScript, Bootstrap, Django, and PostgreSQL.",
    color: "pink"
  }
];
