
export const projects = [
    {
      id: 'vsv-shop',
      title: 'VSV SHOP',
      subtitle: 'An e-commerce multi-vendor website',
      role: 'Fullstack developer',
      description: [
        "Developed a scalable multi-vendor marketplace allowing merchants to manage stores, inventory, and orders independently.",
        "Engineered RESTful APIs using Spring Boot and PostgreSQL, implementing JWT for secure Authentication & Authorization (RBAC).",
        "Integrated Redis for caching frequently accessed data to improve system performance and reduce database load.",
        "Built a responsive and interactive User Interface using ReactJS, MUI, and Tailwind CSS; enhanced UX with Framer Motion animations.",
        "Containerized the application services using Docker for consistent development and deployment environments."
      ],
      tags: [
        "Spring Boot",
        "PostgreSQL",
        "Redis",
        "Docker",
        "JWT",
        "ReactJS",
        "MUI",
        "Tailwind CSS"
      ],
      source_code: [
        { label: 'Backend', url: 'https://github.com/Bangyugi/vsv-shop-backend' },
        { label: 'Frontend', url: 'https://github.com/Bangyugi/vsv-shop-frontend' }
      ],
    },
    {
      id: 'e-fyp',
      title: 'E-FYP',
      subtitle: 'A Graduation Thesis Management System',
      role: 'Backend developer',
      description: [
        "Developed a comprehensive backend system to manage the full lifecycle of graduation theses for students and lecturers.",
        "Engineered RESTful APIs using Spring Boot and PostgreSQL for core data management.",
        "Utilized Neo4j to efficiently model and query complex relationships between students, topics, and supervisors.",
        "Implemented secure authentication and Role-Based Access Control using JWT to protect sensitive academic data.",
        "Integrated Redis for caching frequently accessed data, optimizing system performance and reducing database load.",
        "Containerized the application services using Docker for consistent development and deployment workflows."
      ],
      tags: [
        "Spring Boot",
        "PostgreSQL",
        "Neo4j",
        "Redis",
        "Docker",
        "JWT"
      ],
      source_code: 'https://github.com/Bangyugi/E-FYP',
    },
  ];
