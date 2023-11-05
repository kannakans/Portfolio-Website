import {
  CSS3,
  Express,
  HTML5,
  Javascript,
  Mongodb,
  Nodejs,
  Python,
  Reactjs,
  food,
  todo1,
  le_commerce,
  portfolio,
  food_ordering,
  // de_commerce,
} from "./assets";

export const projectStats = [];

export const tools = [
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "React",
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    icon: Nodejs,
  },
];

export const skills = [
  {
    name: "ReactJs",
    value: 75,
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    value: 96,
    icon: Nodejs,
  },
  {
    name: "MongoDB",
    value: 98,
    icon: Mongodb,
  },
  {
    name: "CSS3",
    value: 90,
    icon: CSS3,
  },
  {
    name: "HTML5",
    value: 90,
    icon: HTML5,
  },
  {
    name: "JavaScript",
    value: 88,
    icon: Javascript,
  },
  {
    name: "Python",
    value: 75,
    icon: Python,
  },
];

export const projects = [
  {
    id: 1,
    title: "To Do App",
    cat: "Web Design",
    url: "https://github.com/kannakans/React-ToDo-App",
    img: todo1,
  },
  {
    id: 2,
    title: "Social Media App",
    cat: "Web Design",
    url: "https://github.com/kannakans/social-media",
    img: le_commerce,
  },
  {
    id: 3,
    title: "Portfolio Website",
    cat: "Web Design",
    url: "https://portofolio-website-puce.vercel.app/",
    img: portfolio,
  },
  {
    id: 4,
    title: "Food Ordering App",
    cat: "Web Design",
    url: "https://food-ordering-app-rust-phi.vercel.app/",
    img: food_ordering,
  },
];

export const softskills = [
  "Time management",
  "Communication",
  "Empathy",
  "Teamwork",
  "Helpfulness",
  "Creativity",
  "Self-learning",
  "Accountability",
  "Problem solving",
  "Open-mindedness",
];
