import project1 from "../assets/projects/project-1.jpg";
import project4 from "../assets/projects/project-4.jpg";
import workplaceHuawei from "../assets/experiences/huawei.png";
import workplaceCarteNav from "../assets/experiences/cartenav.png";
import workplaceDalhousie from "../assets/experiences/dalhousie.png";


export const HERO_CONTENT = `I'm a passionate software engineer skilled in crafting robust web applications with React, Next.js, Node.js, and MySQL. My aim is to create innovative solutions that drive business growth and enhance user experiences. Eager to work on diverse projects with the latest technologies in an established IT company, I'm a fast learner committed to perpetual skill improvement and technological innovation.`;

export const ABOUT_TEXT = `I am Hoang Le, a third-year Computer Science student at Dalhousie University. As a member of the Dalhousie ICPC team, I am proud to represent our university in the ICPC 2026. With a strong passion for technology, algorithms and AI/machine learning, I am committed to becoming a full-stack Software Engineer and aiming for the world finals of the International Collegiate Programming Contest (ICPC).`;

export const FOCUS_AREAS = [
  {
    title: "Competitive Programming",
    description:
      "Algorithms and data structures under time pressure—training with Dalhousie ICPC and sharpening problem-solving for contests.",
  },
  {
    title: "Meta-learning",
    description:
      "Research on learning to learn: models that adapt from few examples and transfer knowledge across related tasks.",
  },
  {
    title: "Quantization",
    description:
      "Compressing and accelerating neural networks for deployment while keeping accuracy and stability in check.",
  },
  {
    title: "Reinforcement Learning",
    description:
      "Policies and agents that improve through trial, reward signals, and interaction with simulated or real environments.",
  },
  {
    title: "Software Engineering",
    description:
      "Designing and shipping reliable systems—APIs, full-stack apps, testing, and maintainable architecture.",
  },
];

export const EXPERIENCES = [
  {
    year: "Jan 2026 - Present",
    role: "AI Research Intern",
    company: "Huawei",
    image: workplaceHuawei,
    description: `Work on quantization models: research and development to compress and optimize neural networks
    while preserving accuracy for efficient deployment.`,
    technologies: ["Python", "PyTorch"],
  },
  {
    year: "May 2025 - Aug 2025",
    role: "Software Developer Intern",
    company: "CarteNav Solutions",
    image: workplaceCarteNav,
    description: `Algorithm design for and assessment of assigned features.
    Development of software features including coding, test and documentation.
    Tracking and reporting of assigned features.`,
    technologies: ["Java", "TypeScript", "SpringBoot", "SQL", "AWS", "Angular", "Kubernetes", "Docker","DBeaver", "HTML", "CSS"],
  },
  {
    year: "Sep 2024 - Dec 2024",
    role: "Software Developer Intern",
    company: "CarteNav Solutions",
    image: workplaceCarteNav,
    description: `Algorithm design for and assessment of assigned features.
    Development of software features including coding, test and documentation.
    Tracking and reporting of assigned features.`,
    technologies: ["Java", "TypeScript", "SpringBoot", "SQL", "AWS", "Angular", "Kubernetes", "Docker","DBeaver", "HTML", "CSS"],
  },
  {
    year: "Aug 2023 - May 2024",
    role: "Teaching Assistant/Marker for Introduction to Computer Systems course",
    company: "Dalhousie University",
    image: workplaceDalhousie,
    description: `Set up, and test lab environments or systems such as GitLab to ensure that students can use to submit and run
    their labs. Mentor students to understand the theoretical concepts underlying the lab exercises. Assist students with technical issues they encounter during their labs. Provide effective feedback to help students improve their work.`,
    technologies: ["Javascript", "C", "Assembly"],
  },
];

/** Public repo URL when the code is shareable; omit or null for private / no link yet. */
export const PROJECTS = [
  {
    title: "GPT from scratch",
    image: project1,
    description:
      "Private implementation and training experiments building a GPT-style transformer language model from the ground up—architecture, optimization, and evaluation.",
    technologies: ["Python", "PyTorch", "CUDA", "NumPy"],
    isPrivate: true,
    githubUrl: null,
  },
  {
    title: "Daltweets",
    image: project4,
    description:
      "Develop a social media website for Dalhousie University students using Vite ReactJS, Tailwind CSS, engineered the backend using Spring Boot and MySQL.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Java",
      "JavaScript",
      "SpringBoot",
      "SQL",
      "MySQL",
    ],
    isPrivate: false,
    githubUrl: "https://github.com/hoangls03/Daltweets",
  },
];

/** Used for “ping me on GitHub” when a repo link isn’t public. */
export const GITHUB_PROFILE_URL = "https://github.com/hoangls03";

export const CONTACT = {
  address: "Halifax, Nova Scotia, Canada ",
  phoneNo: "",
  email: "hoang@dal.ca",
};
