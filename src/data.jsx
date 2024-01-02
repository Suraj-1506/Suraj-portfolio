import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/Suraj-portfolio/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/Suraj-portfolio/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/Suraj-portfolio/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/Suraj-portfolio/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Suraj",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Upadhayay",
  },

  {
    id: 3,
    title: "Age : ",
    description: "27 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  // {
  //   id: 5,
  //   title: "Freelance : ",
  //   description: "Available",
  // },

  {
    id: 6,
    title: "Address : ",
    description:
      "Flat No 603, Morning Glory, Gulmohar City, Kharadi, 411014, Pune.",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8085807751",
  },

  {
    id: 8,
    title: "Email : ",
    description: "anshupadhyay703@mail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "surajupadhyay15@outlook.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Hindi",
  },
];

export const stats = [
  {
    id: 1,
    no: "4",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "3+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "3+",
    title: "Happy <br /> Customers",
  },

  // {
  //   id: 4,
  //   no: "53+",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 Nov - PRESENT",
    title:
      "Frontend Developer <span> Sensiple Software Solutions Pvt. Ltd. </span>",
    desc: "• <span>Played a pivotal role in the <strong>ETAQ</strong> project, utilizing expertise in ReactJS, JavaScript, Redux, Bootstrap, and API integration. </span>  <br /> • <span>Led UI/UX development as a core team member, developing HTML5 pages based on ReactJS, JavaScript, and Bootstrap. </span> <br /> • <span>Actively contributed to the design and development of various components and models, enhancing the application's functionality and user experience. </span> <br /> • <span>Collaborated effectively with the Production Support team to identify, analyze, and address production issues, demonstrating a proactive approach to problem-solving. </span><br /> • <span>Engaged in a short-term project to fix issues promptly, showcasing adaptability and the ability to address challenges even without formal knowledge transfer. </span>",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 Jan - 2022 Nov",
    title:
      "Frontend Developer <span> Larsen & toubro Technology Services </span>",
    desc: "• <span>Significantly contributed to the <strong>Intelsat Inflight Services</strong> project, employing ReactJs, JavaScript, Redux, Jenkins, Spinnaker, Spring Boot, and various collaborative tools. </span>  <br /> • <span>Played a pivotal role in enhancing the air-to-ground (ATG) network, comprising over 200 towers, optimizing communication between aircraft and ground stations. </span> <br /> • <span>Implemented innovative directional signal technology for ATG ground stations, projecting signals upward to aircraft, improving traditional terrestrial cell site approaches. </span> <br /> • <span>Orchestrated the development of an efficient communication system, enabling seamless interaction between aircraft and ground stations using proprietary Gogo protocols and standard WiFi. </span><br /> • <span>Led the UI/UX development, ensuring a user-friendly interface for effective user interaction within the Inflight Services system. </span>",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 Jan - 2021 Oct",
    title: "Frontend Developer <span> DGPRO Technology Pvt. Ltd. </span>",
    desc: "• <span> Extensive experience in front-end development, translating client requirements into visually appealing and functional web applications. </span>  <br /> • <span>Played a pivotal role in enhancing the air-to-ground (ATG) network, comprising over 200 towers, optimizing communication between aircraft and ground stations. </span> <br /> • <span>Implemented innovative directional signal technology for ATG ground stations, projecting signals upward to aircraft, improving traditional terrestrial cell site approaches. </span> <br /> • <span> Orchestrated the development of an efficient communication system, enabling seamless interaction between aircraft and ground stations using proprietary Gogo protocols and standard WiFi. </span> <br /> • <span> Led the UI/UX development, ensuring a user-friendly interface for effective user interaction within the Inflight Services system. </span>",
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 Aug - 20219 Sep",
    title: "Mathematics Faculty <span> Aeducare Academy </span>",
    desc: "• <span> Taught mathematics courses, delivering engaging lectures and providing individualized support to students. </span>  <br /> • <span>Contributed to a positive learning environment and collaborated with colleagues to enhance teaching strategies. </span> <br /> • <span>Worked as personal tutor. </span> ",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title:
      "Engineering Degree <span> Guru Ramdas Khalsa Institute of Science and Technology </span>",
    desc: "Percentage : 7.4 CGPA",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title:
      "Intermediate <span> Guru Gobind Singh Khalsa Higher Secondry School </span>",
    desc: "Percentage : 74.6%",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2011",
    title:
      "Matriculation <span> Guru Gobind Singh Khalsa Higher Secondry School </span>",
    desc: "Percentage : 79.5%",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "50",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 3,
    title: "Css",
    percentage: "60",
  },

  {
    id: 4,
    title: "React Js",
    percentage: "70",
  },

  {
    id: 5,
    title: "Redux",
    percentage: "60",
  },

  {
    id: 6,
    title: "Bootstrap",
    percentage: "70",
  },

  {
    id: 7,
    title: "Angular",
    percentage: "30",
  },

  {
    id: 8,
    title: "Python",
    percentage: "30",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
