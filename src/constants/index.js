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

  instagram,
  github,
  twitter,
  linkedin,

  invoice,
  progresspulse,
  rolex,
  school,

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
  " As a frontend developer, I’m grateful for the opportunity to directly enhance user experiences through my work.";
export const collabText2 =
  " I'm grateful for the chance to create the solid infrastructure that ensures smooth and efficient user interactions.";

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

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figmalogo,
    width: 20,
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
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: github,
    img : school,
    url: "https://github.com/Ragulram004/School_Website.git",
    url2: "https://ragulram004.github.io/School_Website/index.html",
  },
  {
    id: "1",
    title: "Rolex Landingpage",
    text: "A Rolex landing page using #React and #Tailwind CSS. This project showcased my ability to develop sleek and responsive web pages with modern design aesthetics.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: github,
    light: true,
    img:rolex,
    url: "https://github.com/Ragulram004/Rolex_Landingpage_Tailwindcss.git",
    url2: "https://ragulram004.github.io/Rolex_Landingpage_Tailwindcss/",
  },
  {
    id: "2",
    title: "Dayscholar Recognition",
    text: "Detect day scholars inside a hostel. This project utilized #Python, #opencv, #dlib, and #Streamlit to accurately identify and monitor individuals.",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: github,
    // url: "https://github.com",
    // url2: "https://github.com",

  },
  {
    id: "3",
    title: "Invoice Portal",
    text: "A communication system between faculty and students for project reviews, feedback and allocations. This project was built using #React #CSS  #MongoDB #Express.",
    backgroundUrl: "src/assets/benefits/card-3.svg",
    iconUrl: github,
    light: true,
    img: invoice,
    url: "https://github.com/Ragulram004/invoice_portal.git",
    url2: "https://invoice-portal-frontend.vercel.app",

  },
  {
    id: "4",
    title: "Progress Pulse",
    text: "Progress Pulse, a comprehensive platform that allows users to effectively maintain, track, and visualize their progress over time, utilizing #React #CSS #MongoDB #Express.js.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: github,
    img: progresspulse,
    url: "https://github.com/Ragulram004/Progress_Pulse.git",
    url2: "https://github.com/Ragulram004/Progress_Pulse.git",

  },
  {
    id: "5",
    title: "Infra Audits",
    text: "Infra Audits, a dynamic system that facilitates interaction between auditors, handymen, and admins to manage and maintain infrastructure, utilizing #React #CSS #MongoDB #Express.js.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: github,
    light: true,
    // url: "https://github.com",
    // url2: "https://github.com",

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
    url: "https://www.instagram.com/ragulram_004/",
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
