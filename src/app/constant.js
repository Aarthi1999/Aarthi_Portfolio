export const PROJECTS = [
  {
    id: 0,
    title: "IdeaRX",
    subTitle: "Cross-Platform Mobile App",
    domain: "Automobile",
    type: "Mobile",
    skills: ["Ionic", "SpringBoot", "Postgresql"],
    description: `Developed a cross-platform app for officials to monitor 
            real-time business metrics such as sales, service performance, and P&L. 
            Built the frontend with Ionic React and backend with Spring Boot, 
            integrating APIs and optimizing performance. Managed end-to-end deployment 
            to App Store and PlayStore, performed QA fixes, and maintained version control 
            using Git.`,
  },
  {
    id: 1,
    title: "Sequence Builder",
    subTitle: "Recruitment Automation Tool",
    domain: "Recruitment",
    type: "Web",
    skills: ["React", "TypeScript", "Redux", "TailwindCSS"],
    description: `Built a candidate outreach tool automating LinkedIn connect 
            requests and personalized email sequences. Implemented the frontend with 
            React + TypeScript, state management with Redux, and optimized UI using 
            TailwindCSS. Collaborated on RESTful API integration, resolved QA issues, and
            maintained Git-based version control.`,
  },
  {
    id: 2,
    title: "ChatBot",
    subTitle: "Employee Management Portal",
    domain: "HRMS",
    type: "Web",
    skills: ["React", "TailwindCSS", "SpringBoot", "PostgreSQL"],
    description: `Worked on employee management portal handling leave requests, 
            loans, tickets, attendance, announcements, and Docker points. Built backend 
            APIs with Spring Boot and a responsive frontend with React. Designed modules 
            for announcements and Docker points tracking, ensuring seamless UX and data integrity`,
  },
  {
    id: 3,
    title: "RehabConnect",
    subTitle: "Clinical Documentation System",
    domain: "Healthcare",
    type: "Web",
    skills: ["React", "TailwindCSS", "SpringBoot", "PostgreSQL"],
    description: `Developed a clinical documentation system to track patient 
            progress across 60+ templates in compliance with IRF-PAI standards. Implemented 
            CRUD functionalities and a notification feature for Physician approvals/rejections. 
            Handled backend logic and database integration, tracked tasks via JIRA, and followed 
            Agile methodologies with active participation in sprint ceremonies and QA deployments.`,
  },
  {
    id: 4,
    title: "Self Learning Project",
    subTitle: "PaisaMind",
    domain: "",
    type: "Web",
    skills: ["React", "TailwindCSS", "SpringBoot", "PostgreSQL"],
    description: `Conceptualized and engineered a collaborative family shopping 
            and wishlist app enabling users to categorize items (“Do It”, “Maybe”, “Wish”) 
            and receive automated SMS birthday reminders via Twilio. Built with React 18 + 
            TypeScript and Spring Boot 3, integrated secure REST APIs, and followed an 
            AI-driven development workflow using Cursor AI, .cursor rules, and structured 
            documentation (PRD, API, DB, Notification specs). Deployed with Docker and Render 
            for a scalable and maintainable setup`,
  },
];

export const SKILLS = [
  { id: 1, name: "HTML", img: "/skills/html.png" },
  { id: 2, name: "CSS", img: "/skills/css.png" },
  { id: 3, name: "JavaScript", img: "/skills/js.png" },
  { id: 4, name: "TypeScript", img: "/skills/ts.png" },
  { id: 5, name: "React", img: "/skills/react.png" },
  { id: 6, name: "Redux", img: "/skills/redux.svg" },
  { id: 7, name: "Ionic", img: "/skills/ionicPic.png" },
  { id: 8, name: "Git", img: "/skills/git.png" },
  { id: 9, name: "SpringBoot", img: "/skills/springBoot.png" },
  { id: 10, name: "PostgreSQL", img: "/skills/postgresqlPic.png" },
];

export const SKILLS_MAP = {
  ai: "/skills/ai.png",
  html: "/skills/html.png",
  css: "/skills/css.png",
  javascript: "/skills/js.png",
  typescript: "/skills/ts.png",
  react: "/skills/react.png",
  redux: "/skills/redux.svg",
  ionic: "/skills/ionicPic.png",
  git: "/skills/git.png",
  springboot: "/skills/springBoot.png",
  postgresql: "/skills/postgresqlPic.png",
  tailwindcss: "/skills/tailwind.png",
};

  export const PERSONAL_DETAILS = [
    { label: "Date of Birth", value: "April 22, 1999" },
    {
      label: "Address",
      value:
        "G-5, VGN Park West Apartments, Devadoss Street, Mogappair West, Chennai – 37",
    },
    { label: "Email", value: "taarthisri99@gmail.com", type: "email" },
    { label: "Phone", value: "9790807924", type: "phone" },
  ];
