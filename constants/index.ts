export const introStrings = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "MongoDB Developer",
  "TypeScript Developer",
];

export const projectCategories = [
  "E-commerce",
  "Social Media",
  "Blog",
  "Portfolio",
  "Education",
  "Healthcare",
  "Travel",
  "Finance",
  "Real Estate",
  "Other",
];
export const Status = ["draft", "published"] as const;
export const skills = [
  {
    skill: "HTML",
    icon: "/assets/icons/skills/html.svg",
    backgroundColor: "bg-white",
  },
  {
    skill: "CSS",
    icon: "/assets/icons/skills/css.svg",
  },
  {
    skill: "JavaScript",
    icon: "/assets/icons/skills/javascript.svg",
  },
  {
    skill: "TypeScript",
    icon: "/assets/icons/skills/typescript.svg",
  },
  {
    skill: "React",
    icon: "/assets/icons/skills/react.svg",
  },
  {
    skill: "Next.js",
    icon: "/assets/icons/skills/nextjs.svg",
    backgroundColor: "bg-white",
  },
  {
    skill: "Redux",
    icon: "/assets/icons/skills/redux.svg",
  },
  {
    skill: "Tailwind CSS",
    icon: "/assets/icons/skills/tailwindcss.svg",
  },
  {
    skill: "Node.js",
    icon: "/assets/icons/skills/nodejs.svg",
  },
  {
    skill: "Express",
    icon: "/assets/icons/skills/express.svg",
    backgroundColor: "bg-white",
  },
  {
    skill: "MongoDB",
    icon: "/assets/icons/skills/mongodb.svg",
  },
  {
    skill: "Git",
    icon: "/assets/icons/skills/git.svg",
  },
  {
    skill: "GitHub",
    icon: "/assets/icons/skills/github.svg",
    backgroundColor: "bg-white",
  },
  {
    skill: "npm",
    icon: "/assets/icons/skills/npm.svg",
  },
];

export const projects = [
  {
    title: "Project 1",
    description: "This is a project description",
    image: "/assets/images/project1.png",
    technologies: ["React", "Node.js", "MongoDB"],
    frontendGithub: "https://github.com",
    backendGithub: "https://github.com",
    liveLink: "https://demo.com",
  },
  {
    title: "Project 2",
    description: "This is a project description",
    image: "/assets/images/project2.png",
    technologies: ["React", "Node.js", "MongoDB"],
    frontendGithub: "https://github.com",
    backendGithub: "https://github.com",
    liveLink: "https://demo.com",
  },
  {
    title: "Project 3",
    description: "This is a project description",
    image: "/assets/images/project3.png",
    technologies: ["React", "Node.js", "MongoDB"],
    frontendGithub: "https://github.com",
    backendGithub: "https://github.com",
    liveLink: "https://demo.com",
  },
  {
    title: "Project 4",
    description: "This is a project description",
    image: "/assets/images/project4.png",
    technologies: ["React", "Node.js", "MongoDB"],
    frontendGithub: "https://github.com",
    backendGithub: "https://github.com",
    liveLink: "https://demo.com",
  },
];

export const projectDefaultValues = {
  title: "",
  description: "",
  thumbnail: [],
  tags: "",
  technologies: "",
  publishedAt: new Date(Date.now()),
  liveLink: "",
  clientCode: "",
  serverCode: "",
  videoLink: "",
  category: "",
  status: "draft" as Status,
};
