export type Skill = {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
  short: string;
  detail: string;
  example: string;
  projectsUsed: string[];
  applications: string[];
};

export type SkillCategory = {
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Development",
    subtitle: "Building responsive web applications, interactive user interfaces, and full-stack systems",
    skills: [
      { name: "HTML", icon: "🌐", level: "Advanced", progress: 90, short: "Semantic markup & structure", detail: "Clean, accessible HTML5 used for portfolios, dashboards and enterprise applications.", example: "Used semantic HTML across ACMES CORE, this portfolio and the SpringAthlete landing page.", projectsUsed: ["ACMES CORE", "SpringAthlete Fitness Gym"], applications: ["Web development", "UI structure", "Email templates"] },
      { name: "CSS", icon: "🎨", level: "Advanced", progress: 85, short: "Responsive styling & layouts", detail: "Flexbox, Grid, animations, responsive design and CSS custom properties.", example: "Designed the responsive layout you're looking at right now.", projectsUsed: ["ACMES CORE", "SpringAthlete Fitness Gym"], applications: ["UI styling", "Responsive design", "Animations"] },
      { name: "JavaScript", icon: "✨", level: "Intermediate", progress: 70, short: "Interactive & dynamic web apps", detail: "DOM manipulation, ES6+, async/await, event handling and API integration.", example: "Built interactive features, form validation and real-time updates for ACMES CORE.", projectsUsed: ["ACMES CORE", "SpringAthlete Fitness Gym"], applications: ["Interactivity", "API integration", "Form validation"] },
      { name: "TypeScript", icon: "🔷", level: "Intermediate", progress: 60, short: "Typed JavaScript development", detail: "Static typing, interfaces, generics and type-safe React components.", example: "Used TypeScript throughout the ACMES CORE capstone project for type safety.", projectsUsed: ["ACMES CORE"], applications: ["Type safety", "Component props", "API contracts"] },
      { name: "React JS", icon: "⚛️", level: "Intermediate", progress: 65, short: "Component-based UI development", detail: "Hooks, state management, component architecture and SPA routing.", example: "Built the entire front-end dashboard and modules of ACMES CORE with React.", projectsUsed: ["ACMES CORE"], applications: ["Web apps", "Dashboards", "SPAs"] },
      { name: "Node JS", icon: "🟩", level: "Intermediate", progress: 55, short: "Server-side JavaScript runtime", detail: "Express servers, REST API creation, middleware and database connections.", example: "Created back-end APIs, authentication and server logic for ACMES CORE.", projectsUsed: ["ACMES CORE"], applications: ["Back-end APIs", "Server logic", "Full-stack"] },
      { name: "Java", icon: "☕", level: "Intermediate", progress: 65, short: "OOP & desktop application development", detail: "Object-oriented design, Swing GUI, file handling and logic implementation.", example: "Built Tic Tac Toe, Snake Game and the Water Billing desktop application in Java.", projectsUsed: ["Tic Tac Toe", "Snake Game", "Water Billing System"], applications: ["Desktop apps", "Game logic", "OOP"] },
      { name: "Python", icon: "🐍", level: "Beginner", progress: 45, short: "Data scripts & automation", detail: "Basic syntax, data structures and introductory data analysis libraries.", example: "Exploring Python for data manipulation, automation and analysis tasks.", projectsUsed: [], applications: ["Data scripts", "Automation", "Learning"] },
    ],
  },
  {
    title: "Database & Data Management",
    subtitle: "Working with structured data, database management, and maintaining accurate information",
    skills: [
      { name: "MySQL", icon: "🗄️", level: "Intermediate", progress: 65, short: "Relational database management", detail: "Schema design, joins, indexes, stored procedures and complex queries.", example: "Designed and managed the full database for the ACMES CORE capstone project.", projectsUsed: ["ACMES CORE", "Water Billing System"], applications: ["Database design", "Data storage", "Reporting"] },
      { name: "Database Design", icon: "📐", level: "Intermediate", progress: 60, short: "Structured data architecture", detail: "ER diagrams, normalization, relationships and query optimization.", example: "Created relational schemas and ER diagrams for ACMES CORE and academic projects.", projectsUsed: ["ACMES CORE"], applications: ["Schema planning", "Data modeling", "System design"] },
      { name: "Data Organization", icon: "📂", level: "Intermediate", progress: 70, short: "Structuring & managing information", detail: "Categorizing data, maintaining consistency and logical storage patterns.", example: "Organized consumer records, project data and document structures across multiple systems.", projectsUsed: ["Water Billing System", "ACMES CORE"], applications: ["Data entry", "Record keeping", "Information systems"] },
      { name: "Data Validation", icon: "✅", level: "Intermediate", progress: 60, short: "Ensuring data accuracy & integrity", detail: "Input validation, constraint checking and error handling for data quality.", example: "Implemented form validation and database constraints in ACMES CORE.", projectsUsed: ["ACMES CORE"], applications: ["Quality assurance", "Form validation", "Error handling"] },
      { name: "CRUD Operations", icon: "🔄", level: "Intermediate", progress: 65, short: "Create, Read, Update, Delete", detail: "Full database lifecycle operations through APIs and direct queries.", example: "Built CRUD functionality for employee, project and document management in ACMES CORE.", projectsUsed: ["ACMES CORE", "Water Billing System"], applications: ["API development", "Database access", "Record management"] },
    ],
  },
  {
    title: "Design & System Planning",
    subtitle: "Designing user interfaces, planning system workflows, and creating visual documentation",
    skills: [
      { name: "Figma", icon: "🖌️", level: "Intermediate", progress: 70, short: "UI/UX design & prototyping", detail: "Component libraries, auto-layout, prototyping and design system creation.", example: "Designed dashboard mockups, UI components and user flows for multiple projects.", projectsUsed: ["Agricultural Monitoring Analytics", "Business Performance Dashboard"], applications: ["UI design", "Prototyping", "Wireframing"] },
      { name: "Canva", icon: "🎨", level: "Intermediate", progress: 75, short: "Visual content & graphics", detail: "Social media graphics, presentations and marketing materials.", example: "Created visual assets, presentation slides and marketing materials for academic work.", projectsUsed: [], applications: ["Graphics", "Presentations", "Marketing"] },
      { name: "Draw.io", icon: "📊", level: "Advanced", progress: 80, short: "Diagrams & flowcharts", detail: "System architecture, ER diagrams, flowcharts and process mapping.", example: "Created ER diagrams, system flows and architecture plans for ACMES CORE.", projectsUsed: ["ACMES CORE"], applications: ["System design", "Diagramming", "Documentation"] },
      { name: "Wireframing", icon: "📐", level: "Intermediate", progress: 65, short: "Low & high fidelity layouts", detail: "Sketching page structures, navigation flows and responsive breakpoints.", example: "Created wireframes for ACMES CORE interface before development began.", projectsUsed: ["ACMES CORE", "Agricultural Monitoring Analytics"], applications: ["UI planning", "Layout design", "User flows"] },
      { name: "System Analysis", icon: "🔍", level: "Intermediate", progress: 60, short: "Requirements & process modeling", detail: "Gathering requirements, process flows and system architecture planning.", example: "Analyzed construction management workflows for ACMES CORE system design.", projectsUsed: ["ACMES CORE"], applications: ["Requirements", "Process modeling", "Planning"] },
      { name: "Documentation", icon: "📝", level: "Advanced", progress: 80, short: "Technical & project docs", detail: "Writing system documentation, user guides and technical specifications.", example: "Prepared complete technical documentation for ACMES CORE capstone project.", projectsUsed: ["ACMES CORE"], applications: ["Technical writing", "User guides", "Specifications"] },
    ],
  },
  {
    title: "Business & Productivity Tools",
    subtitle: "Using productivity tools for reporting, documentation, data organization, and project management",
    skills: [
      { name: "Microsoft Excel", icon: "📗", level: "Advanced", progress: 85, short: "Spreadsheets, formulas & data analysis", detail: "Formulas, pivot tables, charts, lookups, conditional formatting and lightweight dashboards.", example: "Built grade trackers, data summaries and basic KPI dashboards for academic reporting.", projectsUsed: [], applications: ["Reporting", "Data analysis", "Budgeting"] },
      { name: "Microsoft Word", icon: "📄", level: "Advanced", progress: 80, short: "Documentation & formatting", detail: "Professional document creation, formatting and template design.", example: "Created project proposals, reports and system documentation.", projectsUsed: [], applications: ["Documentation", "Reports", "Proposals"] },
      { name: "Google Workspace", icon: "📑", level: "Intermediate", progress: 75, short: "Collaboration & cloud productivity", detail: "Docs, Sheets, Slides and collaborative project management.", example: "Used for group collaboration and cloud-based document sharing in academic projects.", projectsUsed: [], applications: ["Collaboration", "Cloud docs", "Teamwork"] },
    ],
  },
];

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";
import project7 from "@/assets/ACMES_CORE.png";

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  role: string;
  year: string;
  gradient: string;
  emoji: string;
  image: string;
  objective: string;
  dataset: string;
  insights: string[];
  outcome: string;
  roleDetails?: string[];
  learningOutcomes?: string[];
  impact?: string;
  challenges?: string[];
};

export const projects: Project[] = [
  {
    title: "ACMES CORE – Capstone Project",
    category: "Integrated Project Management System",
    description:
      "ACMES CORE is an Integrated Project Management System developed as a capstone project for AC Margallo Engineering Services & Allied Services. The system streamlines project planning, workforce management, document tracking, and project monitoring within construction operations.",
    tech: ["HTML", "CSS", "TypeScript", "React JS", "Node JS", "MySQL", "REST API"],
    features: [
      "Employee Management",
      "Project Management",
      "Project Tracking",
      "Project Scheduling",
      "Critical Path Method (CPM) Analysis",
      "Client Timeline Monitoring",
      "Document Management",
      "Progress Monitoring",
      "User Authentication & Role Management",
      "Database Management",
      "Real-Time Project Updates",
      "Compliance & Expiration Tracking",
      "Workforce Allocation Monitoring",
      "Project Analytics Dashboard",
    ],
    role: "Primary Developer & System Designer",
    year: "2026 - Present",
    gradient: "from-sky-500/30 to-cyan-500/20",
    emoji: "🏗️",
    image: project7,
    objective:
      "Build an integrated project management system that streamlines construction operations through CPM analysis, real-time tracking and centralized workforce management.",
    dataset: "Construction project records, employee data and document archives",
    insights: [
      "Learned full-stack web development with React and Node",
      "Implemented Critical Path Method logic for project scheduling",
      "Designed scalable MySQL schemas for complex relationships",
      "Practiced software architecture and system design patterns",
    ],
    outcome:
      "ACMES CORE provides a centralized platform that improves project visibility, workforce coordination, schedule monitoring, and document management.",
    roleDetails: [
      "System Analysis and Planning",
      "UI/UX Design",
      "Front-End Development",
      "Back-End Development",
      "Database Design and Management",
      "REST API Integration",
      "CPM Logic Implementation",
      "Dashboard Development",
      "Testing and Debugging",
      "Technical Documentation",
      "System Deployment Preparation",
    ],
    learningOutcomes: [
      "Full-Stack Web Development",
      "React JS and Node JS Development",
      "REST API Integration",
      "MySQL Database Design",
      "Critical Path Method (CPM) Implementation",
      "Construction Project Management Workflows",
      "Software Architecture and System Design",
      "Data Management and Reporting",
      "Problem Solving and System Optimization",
      "End-to-End Software Development Lifecycle",
    ],
    impact:
      "By integrating CPM analysis and project tracking tools, the system helps project managers make informed decisions and monitor project progress more efficiently.",
    challenges: [
      "Designing a scalable database schema for multi-project construction data",
      "Implementing Critical Path Method logic for real-time schedule analysis",
      "Building responsive dashboards that display complex project metrics",
    ],
  },
  {
    title: "Tic Tac Toe Game",
    category: "Java Desktop Game",
    description: "A classic Tic Tac Toe game built entirely in Java with a clean two-player interface.",
    tech: ["Java"],
    features: ["Two-player mode", "Win/draw detection", "Reset functionality"],
    role: "Developer",
    year: "2025",
    gradient: "from-emerald-500/30 to-lime-500/20",
    emoji: "❌⭕",
    image: project1,
    objective: "Practice Java fundamentals and game logic by building a complete Tic Tac Toe game.",
    dataset: "N/A — game state managed in memory",
    insights: ["Reinforced 2D array handling", "Strengthened condition logic", "Improved UI event handling in Java"],
    outcome: "A fully working Tic Tac Toe game built purely with Java.",
  },
  {
    title: "Snake Game",
    category: "Java Desktop Game",
    description: "A classic Snake game implemented in Java featuring smooth controls and score tracking.",
    tech: ["Java"],
    features: ["Real-time movement", "Score tracking", "Game over detection"],
    role: "Developer",
    year: "2025",
    gradient: "from-green-500/30 to-teal-500/20",
    emoji: "🐍",
    image: project2,
    objective: "Build a real-time Snake game to practice Java graphics and game loops.",
    dataset: "N/A — runtime game state only",
    insights: ["Practiced Java Swing rendering", "Learned game loop timing", "Handled collision detection"],
    outcome: "A complete, playable Snake game built entirely in Java.",
  },
  {
    title: "Water Billing Consumption — Bongbong, Panacan, Davao City",
    category: "Java Desktop Application",
    description: "A water billing consumption system for Bongbong, Panacan, Davao City, built fully in Java.",
    tech: ["Java"],
    features: ["Consumer records", "Monthly billing computation", "Consumption tracking"],
    role: "Developer",
    year: "2025",
    gradient: "from-cyan-500/30 to-emerald-500/20",
    emoji: "💧",
    image: project3,
    objective: "Provide a simple way to record and compute water billing for a local community.",
    dataset: "Local consumer & meter reading records",
    insights: ["Modeled billing rules in Java", "Practiced OOP for real-world data", "Improved input validation"],
    outcome: "A working water billing app tailored to the Bongbong community in Panacan, Davao City.",
  },
  {
    title: "Agricultural Monitoring Analytics",
    category: "UI/UX Design",
    description: "A Figma-designed concept for monitoring agricultural training and farmer engagement.",
    tech: ["Figma"],
    features: ["Dashboard mockups", "User flow", "Visual hierarchy"],
    role: "UI/UX Designer",
    year: "2025",
    gradient: "from-lime-500/30 to-green-600/20",
    emoji: "🌾",
    image: project5,
    objective: "Design a clean monitoring interface concept in Figma for agricultural data.",
    dataset: "Conceptual — design-only project",
    insights: ["Practiced layout & spacing", "Refined design tokens", "Built reusable components"],
    outcome: "A polished Figma design prototype ready for handoff.",
  },
  {
    title: "Business Performance Dashboard",
    category: "UI/UX Design",
    description: "A Figma-only design concept for a clean, executive-style business performance dashboard.",
    tech: ["Figma"],
    features: ["KPI card layouts", "Chart placements", "Responsive structure"],
    role: "UI/UX Designer",
    year: "2026",
    gradient: "from-orange-500/30 to-amber-500/20",
    emoji: "📊",
    image: project4,
    objective: "Explore a modern, minimal dashboard layout in Figma.",
    dataset: "Conceptual — design-only project",
    insights: ["Iterated on KPI hierarchy", "Refined typography scale", "Improved visual balance"],
    outcome: "A clean Figma dashboard concept ready for development.",
  },
  {
    title: "SpringAthlete Fitness Gym",
    category: "Web Project",
    description: "A fitness gym landing site for SpringAthlete, built with HTML, CSS and JavaScript only.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive layout", "Interactive sections", "Modern landing design"],
    role: "Front-End Developer",
    year: "2026",
    gradient: "from-rose-500/30 to-red-500/20",
    emoji: "🏋️",
    image: project6,
    objective: "Build a clean, responsive gym website using only HTML, CSS and JavaScript.",
    dataset: "N/A — static content site",
    insights: ["Practiced responsive design", "Improved CSS structure", "Added lightweight JS interactions"],
    outcome: "A polished SpringAthlete Fitness Gym landing site built fully with HTML, CSS and JavaScript.",
  },
];
