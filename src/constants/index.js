import {
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
  telegram,
  twitter,
 
} from "../assets";


export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How It Works",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Benefits",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "about us",
    url: "#collaboration",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
  
  
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [];

export const brainwaveServices = [
  "Bulk or Individual Resume Uploads",
  "Resume Parsing",
  "Searchable Repository",
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
    title: "Scalable Solution",
    text: "Whether you're hiring for one role or thousands, candidhr scales to meet your needs.",
    date: "",
   
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Enhanced Collaboration",
    text: "Share ranked candidates with your team and maek collaborative decisions effortlessly",
    date: "",
   
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Time-Saving Automation",
    text: "Reduce manual effort by up to 90% – from resume screening to final interviews.",
    date: "",
   
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Improved Candidate Quality",
    text: "AI-powered insights ensure you interview only the top candidates.",
    date: "",
   
    imageUrl: roadmap4,
  },
];
export const collabText =
  "At Diacto, we believe in using technology to simplify and improve workflows. CandidHR is our latest innovation in streamlining the hiring process, making it faster, smarter, and more effective.";
  export const collabText1 ="To empower companies to hire the right talent efficiently, leveraging AI and automation.";

export const collabContent = [
  {
    id: "0",
    text1: collabText,
    title: "Our Vision",
    text2: collabText1,
    
  },
  
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Choose the Plan that Fits Your Hiring Needs and Budget",
    price: "0",
    features: [
      "10 Interviews + 14 Day Free Trial",
      "Candidate Analytics and reporting",
      "Customizable job application forms",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Choose the Plan that Fits Your Hiring Needs and Budget",
    price: "9.99",
    features: [
      "100 interviews per month",
      "Unlimited Job Posts",
      "Customizable job application forms",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Choose the Plan that Fits Your Hiring Needs and Budget",
    price: null,
    features: [
      "Everything in Plus",
      "500 interviews per month",
      "Integrated applicant tracking system",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Resume Screening & Matching",
    text: "AI-driven matching that aligns resumes with job descriptions, ensuring the right candidates rise to the top.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./src/assests1/about_logo.png",
  },
  {
    id: "1",
    title: "Centralized Resume Repository",
    text: "Store and search resumes in an intuitive, organized system for future use.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: "./src/assests1/about_logo.png",
    light: true,
  },
  {
    id: "2",
    title: "AI-Powered Candidate Ranking",
    text: "Analyze and rank candidates based on key skills, experience, and job relevance.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: "./src/assests1/about_logo.png",
  },
  {
    id: "3",
    title: "Personality Screening",
    text: "Conduct automated video and audio interviews to assess candidate personalities, reducing bias and manual effort.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: "./src/assests1/about_logo.png",
    light: true,
  },
  {
    id: "4",
    title: "Technical Test Integration",
    text: "Built-in technical test capabilities to ensure candidates meet the required skill levels.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./src/assests1/about_logo.png",
  },
  {
    id: "5",
    title: "Seamless Integration",
    text: "Integrate easily with your existing HR systems and workflows.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: "./src/assests1/about_logo.png",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
