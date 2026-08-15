/**
 * Centralized Skills Data
 * Categorized technical skill sets without misleading percentage bars.
 */

export const skillCategories = [
  {
    category: "Frontend Development",
    id: "frontend",
    description: "Building responsive, modern, user-centric web interfaces.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode2" },
      { name: "HTML5", level: "Advanced", icon: "Layout" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "Bootstrap", level: "Intermediate", icon: "Layers" }
    ]
  },
  {
    category: "Backend & Databases",
    id: "backend-db",
    description: "Architecting RESTful APIs and managing database schemas.",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "Server" },
      { name: "Express.js", level: "Intermediate", icon: "Cpu" },
      { name: "REST APIs", level: "Advanced", icon: "Globe" },
      { name: "MongoDB", level: "Intermediate", icon: "Database" }
    ]
  },
  {
    category: "Programming & CS Fundamentals",
    id: "programming",
    description: "Core algorithms, data structures, and object-oriented programming.",
    skills: [
      { name: "Python", level: "Advanced", icon: "Terminal" },
      { name: "C++", level: "Intermediate", icon: "Binary" },
      { name: "C", level: "Intermediate", icon: "Code" },
      { name: "Data Structures & Algorithms", level: "Intermediate", icon: "GitFork" }
    ]
  },
  {
    category: "Data Science & AI",
    id: "data-ai",
    description: "Extracting insights from data and applying machine learning models.",
    skills: [
      { name: "Data Analysis", level: "Intermediate", icon: "BarChart3" },
      { name: "Machine Learning", level: "Intermediate", icon: "Brain" },
      { name: "AI Integration", level: "Intermediate", icon: "Sparkles" }
    ]
  },
  {
    category: "Developer Tools",
    id: "tools",
    description: "Version control, workflow efficiency, and API testing.",
    skills: [
      { name: "Git", level: "Proficient", icon: "GitBranch" },
      { name: "GitHub", level: "Proficient", icon: "Github" },
      { name: "Postman", level: "Proficient", icon: "Send" }
    ]
  }
];
