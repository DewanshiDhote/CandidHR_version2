import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  
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
    title: "Benefits",
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
    title: "Features",
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

export const companyLogos = [];

export const brainwaveServices = [
  "Automated Screening",
  "Enhanced Interviews",
  "Data-Driven Insights",
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
    title: "Enhanced Employer Experience",
    text: "With minimum human efforts and user-friendly interface makes applying, tracking, and engaging with the recruitment process effortless.​",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./src/assests1/about_logo.png",
  },
  {
    id: "1",
    title: "One Stop Solution​",
    text: "CV Scanning, AI Screening, Ranking, Prebuilt Test, Audio interview, video interviews till final round – Everything within few clicks​",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: "./src/assests1/about_logo.png",
    light: true,
  },
  {
    id: "2",
    title: "Reduction in Resume Noise ",
    text: "Minimize resume clutter and ensure no top candidate gets overlooked in the pool of applications.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: "./src/assests1/about_logo.png",
  },
  {
    id: "3",
    title: "Cost Saving (Credit Basis)​",
    text: "Predictable costs with a flexible credit system for hiring needs.​",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: "./src/assests1/about_logo.png",
    light: true,
  },
  {
    id: "4",
    title: "Ease of communication​",
    text: "Minimal manual interaction with ease of communication to candidates using automated emails​",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./src/assests1/about_logo.png",
  },
  {
    id: "5",
    title: "Time-Saving Automation",
    text: "Auto set emails and pre built automated tests saves time of continues interaction and allows candidates to complete the process as per their convivence​",
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
