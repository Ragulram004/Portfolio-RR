import {
  mongo,
  node,
  react,
  express,
  backend,
  frontend,
  uiux,
  mern,

  expresslogo,
  gitlogo,
  htmllogo,
  mongologo,
  nodelogo,
  reactlogo,
  tailwindlogo,
  javascriptlogo,
  figmalogo,
  csslogo,
  clogo,
  javalogo,
  pythonlogo,
  muilogo,
  numpylogo,
  pandaslogo,
  postmanlogo,
  reactrouterlogo,
  streamlitlogo,

  instagram,
  github,
  twitter,
  linkedin,

  invoice,
  progresspulse,
  rolex,
  school,
  InfraAudits,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  }
];


export const heroIcons = [mongo, express,react, node,];


export const collabText =
  "As a frontend developer, I’m passionate about crafting intuitive and engaging user interfaces that enhance the overall experience.";
export const collabText2 =
  "As a backend developer, I’m dedicated to building robust and scalable infrastructures that power seamless and efficient user interactions.";

export const collabContent = [
  {
    id: "0",
    title: "Frontend Developer",
    text: collabText,
  },
  {
    id: "1",
    title: "Backend Developer",
    text: collabText2
  },
  
];

export const collabAppsBasic = [
  {
    id: "0",
    title: "C",
    icon: clogo,
    width: 25,
    height: 36,
  },
  {
    id: "1",
    title: "Java",
    icon: javalogo,
    width: 24,
    height: 36,
  },
  {
    id: "2",
    title: "Python",
    icon: pythonlogo,
    width: 26,
    height: 28,
  },
  {
    id: "3",
    title: "Stream-lit",
    icon: streamlitlogo,
    width: 30,
    height: 35,
  },
  {
    id: "4",
    title: "Pandas",
    icon: pandaslogo,
    width: 18,
    height: 34,
  },
  {
    id: "5",
    title: "Numpy",
    icon: numpylogo,
    width: 30,
    height: 34,
  },
  {
    id: "6",
    title: "Mui",
    icon: muilogo,
    width: 28,
    height: 34,
  },
  {
    id: "7",
    title: "Postman",
    icon: postmanlogo,
    width: 30,
    height: 32,
  },
  {
    id:"8",
    title :"Figma",
    icon: figmalogo,
    width: 17,
    height: 34,
  },
];
export const collabApps = [
  {
    id: "0",
    title: "React-Router",
    icon: reactrouterlogo,
    width: 30,
    height: 36,
  },
  {
    id: "1",
    title: "ReactJS",
    icon: reactlogo,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "ExpressJS",
    icon: expresslogo,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "HTML",
    icon: htmllogo,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Javascript",
    icon: javascriptlogo,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "MongoDB",
    icon: mongologo,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Tailwind",
    icon: tailwindlogo,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "NodeJS",
    icon: nodelogo,
    width: 30,
    height: 32,
  },
  {
    id:"8",
    title :"CSS",
    icon: csslogo,
    width: 30,
    height: 34,
  },
  {
    id: "9",
    title: "Git",
    icon: gitlogo,
    width: 30,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "School Website",
    text: "A robust school website, significantly enhancing its overall functionality and providing an improved user experience.  #HTML #Bootstrap",
    iconUrl: github,
    img : school,
    url: "https://github.com/Ragulram004/School_Website.git",
    url2: "https://ragulram004.github.io/School_Website/index.html",
  },
  {
    id: "1",
    title: "Rolex Landingpage",
    text: "A Rolex landing page using #React and #Tailwind CSS. This project showcased my ability to develop sleek and responsive web pages with modern design aesthetics.",
    iconUrl: github,
    light: true,
    img:rolex,
    url: "https://github.com/Ragulram004/Rolex_Landingpage_Tailwindcss.git",
    url2: "https://ragulram004.github.io/Rolex_Landingpage_Tailwindcss/",
  },
  {
    id: "2",
    title: "Infra Audits",
    text: "Infra Audits, a dynamic system that facilitates interaction between auditors, handymen, and admins to manage and maintain infrastructure, utilizing #React #CSS #MongoDB #Express.js.",    iconUrl: github,
    light: true,
    img:InfraAudits,
    url: "https://github.com/Ragulram004/Infra_Management_System.git",
    url2: "https://github.com/Ragulram004/Infra_Management_System.git",

  },
  {
    id: "3",
    title: "Dayscholar Recognition",
    text: "Detect day scholars inside a hostel. This project utilized #Python, #opencv, #dlib, and #Streamlit to accurately identify and monitor individuals.",
    iconUrl: github,
    url: "https://github.com/Ragulram004/Intelligate_Dayscholar_Recognition_System.git",
    url2: "https://github.com/Ragulram004/Intelligate_Dayscholar_Recognition_System.git",

  },
  {
    id: "4",
    title: "Progress Pulse",
    text: "Progress Pulse, a comprehensive platform that allows users to effectively maintain, track, and visualize their progress over time, utilizing #React #CSS #MongoDB #Express.js.",
    iconUrl: github,
    img: progresspulse,
    url: "https://github.com/Ragulram004/Progress_Pulse.git",
    url2: "https://github.com/Ragulram004/Progress_Pulse.git",
    
  },
  {
    id: "5",
    title: "Invoice Portal",
    text: "A communication system between faculty and students for project reviews, feedback and allocations. This project was built using #React #CSS  #MongoDB #Express.",
    iconUrl: github,
    light: true,
    img: invoice,
    url: "https://github.com/Ragulram004/invoice_portal.git",
    url2: "https://invoice-portal-frontend.vercel.app",

  },
];

export const socials = [
  {
    id: "0",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/Ragulram004",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/ragulram-b-455387253/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/rxgulrxm/",
  },
  {
    id: "3",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/_Ragulram_",
  }
  
];

export const services = [
  {
    title: "MERN Stack Developer",
    icon: mern,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
];
