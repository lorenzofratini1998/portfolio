export interface SocialConfig {
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
  icon?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  skills?: string[];
  image?: string;
}

export interface ExperienceItem {
  company: string;
  title: string;
  dateRange: string;
  logo?: string;
  url?: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  dateRange: string;
  logo?: string;
  url?: string;
  grade?: string;
  thesis?: string;
  publication?: {
    title: string;
    link?: string;
  };
  coursework?: string[];
  achievements?: string[];
}

export interface SiteConfig {
  name: string;
  surname: string;
  title: string;
  profileImage?: string;
  description: string;
  accentColor: string;
  social: SocialConfig;
  resume?: string;
  aboutMe: string;
  skills: SkillCategory[];
  projects: ProjectItem[];
  minorProjects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const siteConfig: SiteConfig = {
  name: "Lorenzo",
  surname: "Fratini",
  title: "Software Engineer",
  profileImage: "/me.jpg",
  description: "Portfolio personale di Lorenzo Fratini, Software Engineer specializzato in Backend.",
  accentColor: "#1d4ed8",
  
  social: {
    email: "fratini.lorenzo@outlook.it",
    linkedin: "https://www.linkedin.com/in/fratini-lorenzo/",
    github: "https://github.com/lorenzofratini1998",
  },

  resume: "https://ffbaap6oqltycbrd.public.blob.vercel-storage.com/lorenzo_fratini_cv.pdf",

  aboutMe: `
    Hey! I am Lorenzo. I engineer <strong>backend infrastructure</strong> that is fast, resilient, and invisible.
    <br/><br/>
    As a <strong>Software Engineer</strong>, I focus on the hard problems that happen behind the user interface. My core expertise lies within the <strong>Java ecosystem</strong>, where I have extensive experience decoupling legacy systems and migrating them to modern <strong>Serverless</strong> and <strong>Containerized</strong> environments.
    <br/><br/>
    Recently, I have been expanding my focus into building <strong>high-performance analytical platforms</strong> (leveraging ClickHouse and Kafka) and exploring the integration of <strong>Applied AI</strong> into enterprise architectures, using RAG patterns and Vector Databases. 
    <br/><br/>
    My engineering philosophy is simple: build systems that are easy to maintain, cost-effective to run, and ready to scale.
  `,
  skills: [
    {
      name: "Languages & Frameworks",
      items: [
        "Java",
        "Spring Boot",
        "Quarkus",
        "TypeScript",
        "Python",
        "Node.js",
      ],
      icon: "code",
    },
    {
      name: "Distributed Systems & Data",
      items: [
        "Apache Kafka",
        "RabbitMQ",
        "PostgreSQL",
        "ClickHouse",
        "DynamoDB",
        "Redis",
        "MongoDB",
        "gRPC"
      ],
      icon: "database",
    },
    {
      name: "Cloud & DevOps",
      items: [
        "AWS (Lambda, S3, API Gateway)",
        "Kubernetes",
        "Helm",
        "Docker",
        "AWS SAM",
        "GitHub Actions",
        "Jenkins"
      ],
      icon: "cloud",
    },
    {
      name: "Applied AI & Engineering",
      items: [
        "LLM Integration (Gemini)",
        "RAG Architecture",
        "Spring AI",
        "Qdrant (Vector DB)"
      ],
      icon: "cpu",
    }
  ],

  projects: [
    {
      name: "TubeGuardian",
      description:
          "An AI-powered, <strong>polyglot microservices</strong> platform for semantic brand suitability based on the <strong>GARM framework</strong>. Leverages <strong>Retrieval-Augmented Generation (RAG)</strong> with Vector Databases to evaluate video inventory. Features <strong>event-driven AI inference</strong> via RabbitMQ and a deterministic rules engine.",
      link: "https://github.com/lorenzofratini1998/tube-guardian",
      skills: ["Java", "Spring AI", "Google Gemini", "RabbitMQ", "Qdrant"],
      image: '/projects/tubeguardian-architecture.png'
    },
    {
      name: "Moneyverse",
      description:
        "A production-grade, <strong>event-driven microservices</strong> platform. Engineered with a decentralized architecture using Kafka for <strong>asynchronous communication</strong> and ClickHouse for high-performance <strong>real-time analytics</strong>. Fully containerized and orchestrated via Kubernetes.",
      link: "https://github.com/lorenzofratini1998/moneyverse",
      skills: ["Java", "Spring Boot", "Kafka", "ClickHouse", "Kubernetes"],
      image: '/projects/moneyverse-overview.png'
    },
    {
      name: "Shorty",
      description:
        "A high-performance, <strong>serverless</strong> URL shortener architected on AWS. Designed to solve <strong>Java cold-start challenges</strong> using Tiered Compilation and custom runtime tuning. Features <strong>Infrastructure as Code (IaC)</strong> provisioning and single-digit millisecond latency.",
      link: "https://github.com/lorenzofratini1998/shorty",
      skills: ["Java", "Spring Boot", "AWS Lambda", "DynamoDB", "AWS SAM"],
      image: '/projects/shorty_architecture.png'
    }
  ],

  minorProjects: [
  {
    name: "Choreography Enforcer (CHOEN)",
    description: "<i>Master's Thesis Project</i>. A prototype tool that synthesizes <i>Solidity Smart Contracts</i> directly from <i>BPMN 2.0</i> diagrams. Acts as an on-chain enforcer to validate inter-organizational message exchanges and process compliance.",
    link: "https://gitlab.com/fspegni/choen",
    skills: ["Python", "Django", "Solidity", "BPMN 2.0", "Research"],
  },
  {
    name: "Applied Data Science & NLP",
    description: "A collection of advanced analytics prototypes including Stock Market Prediction (SARIMA), a conversational NLP agent via Rasa, and complex graph analysis using NetworkX.",
    link: "https://github.com/lorenzofratini1998/DataScience_Project",
    skills: ["Python", "Scikit-learn", "Rasa (NLP)", "NetworkX", "Pandas"],
  },
  {
    name: "Decentralized Ticketing Network",
    description: "A secure event ticketing platform built on Quorum (private Ethereum network). Leverages Smart Contracts for immutable ticket issuance and validation to prevent secondary market fraud.",
    link: "https://github.com/lorenzofratini1998/SoftwareCybersecurity_Project",
    skills: ["Node.js", "Quorum", "Smart Contracts", "Solidity"],
  }
  ],

  experience: [
    {
      company: "Add Value",
      title: "Software Engineer",
      dateRange: "May 2024 - Present",
      logo: "/addvalue.jpg",
      url: "https://www.addvalue.it/en-GB",
      bullets: [
        "<strong>Achieved 2–5× faster query performance</strong> by migrating analytical workloads from Elasticsearch to ClickHouse, enabling <strong>sub‑second insights on 100M+ procurement records with 95\% analytical accuracy</strong>.",  
        "<strong>Reduced operational costs</strong> by migrating backend workloads from EC2 to Java‑based AWS Lambda, enabling on‑demand compute instead of always‑on servers.",
        "<strong>Improved reliability of high‑volume data pipelines</strong> by designing and optimizing backend features for enterprise clients in Europe and the US.",
      ],
    },
    {
      company: "Blue Reply",
      title: "Software Engineer",
      dateRange: "Nov 2022 - May 2024",
      logo: "/blue_reply.jpg",
      url: "https://www.reply.com/blue-reply-italy/it",
      bullets: [
        "<strong>Delivered 10+ integration microservices</strong> using Apache Camel, Spring Boot, and Quarkus, supporting synchronous and asynchronous workflows across distributed enterprise systems.",
        "<strong>Reduced coupling between legacy and modern systems</strong> by designing API‑first integrations across SOAP/REST, JMS messaging, and relational databases, accelerating delivery for client teams.",
        "<strong>Increased maintainability and performance</strong> by migrating 40+ legacy Camel routes to Camel 4, reducing technical debt and improving runtime behavior in production environments.",
      ],
    },
  ],

  education: [
    {
      school: "Università Politecnica delle Marche",
      degree: "Master’s degree in Computer and Automation Engineering",
      dateRange: "Oct 2020 - Oct 2022",
      logo: "/univpm.jpg",
      grade: "110/110 summa cum laude",
      url: "https://www.univpm.it",
      thesis: "Runtime enforcement of choreography compliance via blockchain",
      publication: {
        title: "ChoEn: A Smart Contract Based Choreography Enforcer",
        link: "https://ieeexplore.ieee.org/abstract/document/10150284",
      },
      coursework: [
        "Advanced Programming",
        "New Generation Databases",
        "Artificial Intelligence",
        "Big Data Analytics",
        "Machine Learning",
        "Data Science",
        "Software Cybersecurity",
      ],
    },
    {
      school: "Università Politecnica delle Marche",
      degree: "Bachelor’s degree in Computer and Automation Engineering",
      dateRange: "Oct 2017 - Jul 2020",
      logo: "/univpm.jpg",
      grade: "110/110 summa cum laude",
      url: "https://www.univpm.it",
      thesis: "Components of an interface for a staff management application based on the Angular framework",
      coursework: [
        "Data Structure & Algorithms",
        "Object-Oriented Programming",
        "Databases",
        "Operating Systems",
        "Probability and Statistics",
        "Linear Algebra"
      ],
    },
  ],
};