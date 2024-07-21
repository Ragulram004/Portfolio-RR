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

  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  github,
  twitter,
  yourlogo,
  linkedin,
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

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

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

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: github,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: github,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "src/assets/benefits/card-3.svg",
    iconUrl: github,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: github,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: github,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: github,
    imageUrl: benefitImage2,
    light: true,
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
