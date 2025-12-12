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
    threejs,
    onereport,
    takalkar,
    freelance_logo,
    vicharwebsite,
    dominate_performance,
    voyyage_invest,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Api Services",
      icon: backend,
    },
    {
      title: "Hosting Services",
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
      title: "Freelance Developer",
      company_name: "Full Stack Developer",
      icon: freelance_logo,
      iconBg: "#E6DEDD",
      date: "February 2024 - Till Date",
      points: [
        "Created Full Stack Web App with NextJS, MongoDB, ExpressJS, Tailwind CSS",
        "Designing (FrontEnd, BackEnd), SEO optimization and providing utilities to Staff and Students",
        "Developed Cross Platform Mobile Apps with React Native Expo for Android and IOS platforms",
        "Handled critical and complex implimentations of advanced features based on custom alogrithms",
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "OneReport",
      description:
        "An AI-powered client reporting software designed for freelance marketers and small agencies. Built with modern web technologies, OneReport enables users to generate professional, branded client reports in just 5 minutes. Features include automated data integration, AI-generated insights, customizable templates, and scheduled report delivery. This project demonstrates expertise in building SaaS platforms with focus on user experience, automation, and scalability. Offers 50-80% cost savings compared to traditional reporting platforms.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "ai-powered",
          color: "green-text-gradient",
        },
        {
          name: "saas",
          color: "pink-text-gradient",
        },
      ],
      image: onereport,
      source_code_link: "https://github.com/Nisarg39/onereport",
      deployed_link: "https://www.onereport.in"
    },
    {
      name: "Vichar Group ",
      description:
        "A comprehensive educational platform for competitive exam preparation, featuring both web and mobile applications. This full-stack project demonstrates expertise in building scalable educational solutions with Next.js, MongoDB, and Express.js. Includes student management systems, exam portals, real-time analytics, and mobile app development with React Native. Showcases ability to handle complex business requirements and deliver enterprise-level applications with AWS integration.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react-native",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: vicharwebsite,
      source_code_link: "https://github.com/Nisarg39/vicharGroup",
      deployed_link: "https://www.vichargroup.com"
    },
    {
      name: "Dominate Performance",
      description:
        "A Fitness Website specially focused on Athelete for their training and nutrition. Various Fitness Services are provided to the users based on fusion of Technology and Sports Science. Built with Next.js, Three.js, Framer Motion, Gsap, Tailwind CSS. Built with advance animations and responsive design. Packed with high performance and fast response time. Blended with gamification and glassmorphism design.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
        {
          name: "framer motion",
          color: "green-text-gradient",
        },
      ],
      image: dominate_performance,
      source_code_link: "https://github.com/Nisarg39/dominate_sports",
      deployed_link: "https://www.dominateperformance.com"
    },
    {
      name: "Voyyage Invest",
      description:
        "Voyyage Invest is an Advisory platform for individuals and businesses. It provides the best example of a complex financial advisory platform. Built with Next.js, Tailwind CSS, and MongoDB, this project demonstrates advanced web development skills including API integration, data scraping with Puppeteer, and real-time price monitoring. Features include automated price alerts, product comparison, and user dashboard management. Perfect example of full-stack development for investment solutions.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "materialUI",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: voyyage_invest,
      source_code_link: "https://github.com/Nisarg39/voyyage_invest",
      deployed_link: "https://www.voyyageinvest.com"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };