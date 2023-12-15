import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  dgp,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  newgram,
  movie,
  blog,
  ecom,
  dashboard,
  me,
  DS,
  CV_Duncan,
} from "../assets";

export const CVDuncan = CV_Duncan;

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id:"skill",
    title:"Skills"

  },
  {
    id: "work",
    title: "Work || Projects",
  },
  {
    id: "cv",
    title: "My CV/Resume",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title:"Data Science",
    icon: DS,

  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "College-Project",
    icon: dgp,
    iconBg: "#383E56",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const myWords = [
  {
    text: "Here you can download my СV by clicking on Download button. I will be glad to our cooperation.",
    name: "Apurba Debnath",
    designation: "Student",
    company: "NIT DGP",
    image: me,
  },
];

const testimonials = [
  {
    testimonial:
      // "I thought it was impossible to make a website as beautiful as our product, but Apurba proved me wrong.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sara Lee",
    designation: "Prof",
    company: "NIT DGP",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Chris Brown",
    designation: "Pro",
    company: "NIT DGP",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lisa Wang",
    designation: "Prof",
    company: "NIT DGP",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Search",
    description:
      "A web app where anyone can search for latest movies and Tv shows that are trending or highest rated show and movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://search-movie-nine.vercel.app/",
  },
  {
    name: "Mern Dashboard",
    description:
      "A comprehensive platform where user can add property for sale once they login and to show property sales,loss and profit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongo",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://apddashboard.netlify.app/",
  },
  {
    name: "E-Commerce",
    description:
      "This is a web app where user can see clothes and add products to their cart and will have to fill up a form to make payment through stripe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "materialUi",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/ApurbaApd/Ecommerce",
  },
  {
    name: "Search Job",
    description:
      "Mobile application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ApurbaApd/JobSearch/",
  },
  {
    name: "Social Media App",
    description:
      "A Social media web based application,Newgram where user can share their memorable moments once they log in",
    tags: [
      {
        name: "ReactJS",
        color: "black-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Redux toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: newgram,
    source_code_link: "https://github.com/ApurbaApd/Newgram",
  },
  {
    name: "Blogging",
    description:
      "A comprehensive Blogging platform where anyone can read posted blogs and they can also post blog once they log in.",
    tags: [
      {
        name: "mongo",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "sky-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/ApurbaApd/Blogging",
  },
];

export { services, technologies, experiences, myWords, testimonials, projects };
