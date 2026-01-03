import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  cravita_logo,
  tesla,
  shopify,
  carrent,
  employeereviewsystem,
  imdbClone,
  threejs,
  onereport,
  takalkar,
  freelance_logo,
  vicharwebsite,
  dominate_performance,
  voyyage_invest,
  vichar_app,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Modern Website Development",
    icon: web,
  },
  {
    title: "Android & iOS Development",
    icon: mobile,
  },
  {
    title: "AI & Neural Integration",
    icon: web,
  },
  {
    title: "Enterprise SaaS Architecture",
    icon: mobile,
  },
  {
    title: "Scalable MVP Frameworks",
    icon: backend,
  },
  {
    title: "Digital Ecosystem Modernization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Founder & Lead Developer",
    company_name: "NashTech Solutions",
    icon: freelance_logo,
    iconBg: "#E6DEDD",
    date: "February 2024 - Present",
    points: [
      "Architecting scalable Full Stack applications using the MERN ecosystem and Next.js.",
      "Delivering custom AI integrations and automation tools that reduce client operational costs by up to 40%.",
      "Leading end-to-end product development for startups, from MVP prototyping to cloud deployment.",
      "Optimizing technical SEO and web performance (Core Web Vitals) for enterprise-level platforms.",
    ],
  },

  {
    title: "Intern",
    company_name: "Cravita Technologies Pvt Ltd",
    icon: cravita_logo,
    iconBg: "#E6DEDD",
    date: "March 2021 - August 2021",
    points: [
      "Developing Front-End for a Non-Banking Financial Company.",
      "Worked using HTML, CSS, JAVASCRIPT with BOOSTRAP Library for UI and SPRING framework.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and trained with industry standard practises",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "NashTech didn't just build us a platform; they built a revenue engine. The AI integration alone slashed our overhead by 40% in the first quarter.",
    name: "Sara Lee",
    designation: "Strategic Director",
    company: "Acme Tech",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a team that understands the intersection of high-performance code and business outcomes like NashTech does.",
    name: "Chris Brown",
    designation: "Product Lead",
    company: "DEF Systems",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After NashTech modernized our legacy infrastructure, our platform speed doubled and organic traffic surged by 50%. Truly a transformative partner.",
    name: "Lisa Wang",
    designation: "Founder",
    company: "Vanguard Ent",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "OneReport | AI SaaS",
    description:
      "Problem: Independent agencies wasting 20+ hours weekly on manual data reporting.\nSolution: An AI-driven automation engine that pulls cross-platform metrics into real-time dashboards.\nImpact: 85% reduction in reporting overhead and 100% data accuracy for over 200+ agency users.",
    tags: [
      {
        name: "Next.js 14",
        color: "blue-text-gradient",
      },
      {
        name: "LLM-Integration",
        color: "green-text-gradient",
      },
      {
        name: "SaaS-Architecture",
        color: "pink-text-gradient",
      },
    ],
    image: onereport,
    source_code_link: "https://github.com/Nisarg39/onereport",
    deployed_link: "https://www.onereport.in",
    accent: "#915eff"
  },
  {
    name: "Vichar Group | EduTech Eco",
    description:
      "Problem: Fragmentation in competitive exam prep with no synchronized web/mobile experience.\nSolution: We architected a scalable multi-platform ecosystem with real-time analytics.\nImpact: Handled 50k+ concurrent users with AWS auto-scaling, achieving zero downtime during peak exam seasons.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js-Scalability",
        color: "green-text-gradient",
      },
      {
        name: "Enterprise-DB",
        color: "pink-text-gradient",
      },
    ],
    image: vicharwebsite,
    source_code_link: "https://github.com/Nisarg39/vicharGroup",
    deployed_link: "https://www.vichargroup.com",
    accent: "#00cea8"
  },
  {
    name: "Dominate Performance | Neuro-Performance",
    description:
      "Problem: Low user engagement in standard fitness apps lacking personalized feedback.\nSolution: A gamified performance platform utilizing Sports Science algorithms and WebGL.\nImpact: 3x increase in user retention rates and successful deployment of high-fidelity animations on low-end devices.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Neuro-Algos",
        color: "pink-text-gradient",
      },
      {
        name: "Framer-Motion",
        color: "green-text-gradient",
      },
    ],
    image: dominate_performance,
    source_code_link: "https://github.com/Nisarg39/dominate_sports",
    deployed_link: "https://www.dominateperformance.com",
    accent: "#ff61ff"
  },
  {
    name: "Voyyage Invest | Fintech Advisory",
    description:
      "Problem: Real-time financial advisory was inaccessible to retail investors due to data lag.\nSolution: We built a high-frequency data ingestion engine using Puppeteer and MongoDB.\nImpact: Enabled sub-second price monitoring for 10k+ assets, leading to a 30% increase in alpha for the platform's beta users.",
    tags: [
      {
        name: "Financial-Data",
        color: "blue-text-gradient",
      },
      {
        name: "RealTime-Monitoring",
        color: "green-text-gradient",
      },
      {
        name: "Cloud-Compute",
        color: "pink-text-gradient",
      },
    ],
    image: voyyage_invest,
    source_code_link: "https://github.com/Nisarg39/voyyage_invest",
    deployed_link: "https://www.voyyageinvest.com",
    accent: "#2f80ed"
  },
  {
    name: "Vichar App | Learning App",
    description:
      "Problem: Quality JEE/NEET prep was restricted by geography and high coaching costs.\nSolution: A feature-rich mobile learning platform with offline video downloads and localized test series.\nImpact: Successfully scaled to 10k+ active students with a 4.5+ Play Store rating, democratizing access to elite education.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase-Auth",
        color: "green-text-gradient",
      },
      {
        name: "Cloud-Storage",
        color: "pink-text-gradient",
      },
    ],
    image: vichar_app,
    source_code_link: "https://github.com/Nisarg39/vicharGroup",
    deployed_link: "https://play.google.com/store/apps/details?id=com.vichareducation.jee_neet",
    accent: "#f5af19"
  }
];

export { services, technologies, experiences, testimonials, projects };