import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I'm a passionate software engineer skilled in crafting robust web applications with React, Next.js, Node.js, and MySQL. My aim is to create innovative solutions that drive business growth and enhance user experiences. Eager to work on diverse projects with the latest technologies in an established IT company, I'm a fast learner committed to perpetual skill improvement and technological innovation.`;

export const ABOUT_TEXT = `I am Hoang Le, a third-year Computer Science student at Dalhousie University. As a member of the Dalhousie ICPC team, I am proud to represent our university in the ICPC 2026. With a strong passion for technology, algorithms and AI/machine learning, I am committed to becoming a full-stack Software Engineer and aiming for the world finals of the International Collegiate Programming Contest (ICPC).`;

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Dec 2024",
    role: "Student Software Developer",
    company: "CarteNav Solutions",
    description: `Algorithm design for and assessment of assigned features.
    Development of software features including coding, test and documentation.
    Tracking and reporting of assigned features.`,
    technologies: ["Java", "TypeScript", "SpringBoot", "SQL", "AWS", "Angular", "Kubernetes", "Docker","DBeaver", "HTML", "CSS"],
  },
  {
    year: "Aug 2023 - May 2024",
    role: "Teaching Assistant/Marker for Introduction to Computer Systems course",
    company: "Dalhousie University",
    description: `Set up, and test lab environments or systems such as GitLab to ensure that students can use to submit and run
    their labs. Mentor students to understand the theoretical concepts underlying the lab exercises. Assist students with technical issues they encounter during their labs. Provide effective feedback to help students improve their work.`,
    technologies: ["Javascript", "C", "Assembly"],
  },
  {
    year: "2020 - 2021",
    role: "Teaching Assistant for information technology course",
    company: "Specialized High School of Vinh University",
    description: `Prepared materials and facilitated activities for an average of 30 students per class session. Increased student engagement and participation in the classroom by implementing interactive learning activities,
    resulting in a 20% improvement in student test scores. Provided constructive feedback to an average of 20 students per week to help them improve their work.`,
    technologies: ["HTML", "CSS", "C++"],
  },
  {
    year: "2019 - 2020",
    role: "Head of Expertise STEM",
    company: "Specialized High School of Vinh University",
    description: `Led a team of 15 members to organize STEM-related events for the school. Conducted workshops and seminars for over 100 students to enhance their skills and knowledge in STEM fields. Developed and executed a project to create a robotics program that resulted in a 30 % increase in club membership.`,
    technologies: ["C", "C++", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Daltweets",
    image: project4,
    description: 
      "Develop a social media website for Dalhousie University students using Vite ReactJS, Tailwind CSS, engineered the backend using Spring Boot and MySQL.",
    technologies: ["HTML","CSS","React","Java","JavaScript","SpringBoot","SQL","MySQL",],
  },
  {
    title: "Vet Med Math website",
    image: project1,
    description:
      "Developed a web-based platform utilizing React within a university course project, aimed at enhancing users’ comprehension of veterinarian calculations and fundamental concepts. The platform features a series of quiz questions for each topic, meticulously crafted to simulate real-world treatment scenarios and foster a robust understanding of key concepts",
    technologies: ["HTML", "CSS", "React", "Node.js", "FireBase"],
  },
  {
    title: "ARAD website",
    image: project2,
    description:
      "Collaborated with a team during a university course project to design and develop a user-friendly web page using React. The platform serves as a repository for research articles, allowing users to access and read articles without the need for specialized knowledge. The page aims to provide accessible information to a broad audience interested in research topics.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    title: "A2K52 Website",
    image: project3,
    description:
      "The page was developed using HTML and CSS to provide visitors with a deeper understanding of our class dynamics and accomplishments.",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Halifax, Nova Scotia, Canada ",
  phoneNo: "",
  email: "hoang@dal.ca",
};
