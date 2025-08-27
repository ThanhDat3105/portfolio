// Sample companies data for portfolio display
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  projects: Project[];
}

export const companies: Company[] = [
  {
    id: "1",
    name: "Tech Solutions Inc.",
    logo: "/images/company1.png", // Placeholder - will use a default if image doesn't exist
    role: "Frontend Developer",
    startDate: "2023-01",
    endDate: "Present",
    description: "Developed and maintained responsive web applications using React.js and TypeScript. Collaborated with design teams to implement user-friendly interfaces and worked on multiple client projects.",
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a modern e-commerce platform with advanced filtering and search capabilities.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
        url: "https://example-ecommerce.com"
      },
      {
        name: "Admin Dashboard",
        description: "Developed comprehensive admin dashboard for inventory management.",
        technologies: ["React", "Ant Design", "Charts.js"]
      }
    ]
  },
  {
    id: "2", 
    name: "Digital Agency Pro",
    logo: "/images/company2.png",
    role: "Junior Frontend Developer",
    startDate: "2022-06",
    endDate: "2022-12",
    description: "Worked on various client projects, focusing on creating responsive websites and web applications. Gained experience in modern frontend technologies and agile development practices.",
    projects: [
      {
        name: "Corporate Website",
        description: "Built responsive corporate website with modern design and animations.",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        url: "https://example-corporate.com"
      },
      {
        name: "Portfolio Gallery",
        description: "Created interactive portfolio gallery for photography clients.",
        technologies: ["React", "Framer Motion", "CSS Grid"]
      }
    ]
  },
  {
    id: "3",
    name: "StartUp Innovation Lab",
    logo: "/images/company3.png", 
    role: "React Developer Intern",
    startDate: "2022-01",
    endDate: "2022-05",
    description: "Participated in developing innovative web solutions for startup clients. Learned best practices in React development and gained hands-on experience with modern development workflows.",
    projects: [
      {
        name: "Task Management App",
        description: "Developed features for collaborative task management application.",
        technologies: ["React", "Redux", "Material-UI"]
      },
      {
        name: "Landing Page Generator",
        description: "Built components for automated landing page generation tool.",
        technologies: ["React", "TypeScript", "Styled Components"]
      }
    ]
  }
];