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
    nisarg_portal,
    smartbuy,
    takalkar,
    vichar,
    vicharwebsite
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
      title: "Full Stack Developer",
      company_name: "Vichar Group",
      icon: vichar,
      iconBg: "#E6DEDD",
      date: "October 2024 - Till Date",
      points: [
        "Created Full Stack Web App with NextJS, MongoDB, ExpressJS and Tailwind CSS",
        "Designing (FrontEnd, BackEnd), SEO optimization and providing utilities to Staff and Students",
        "Developed Vichar App with React Native Expo for Android and IOS platforms",
        "Created an exam portal that simulates competitive exams with real-time analytics using AWS and React Vite",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Takalkar Academy",
      icon: takalkar,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Sept 2024",
      points: [
        "Co-ordinating with Marketing Team and work accordingly with their vision",
        "Designing (FrontEnd, BackEnd), SEO optimization and providing utilities to Staff and Students",
        "Handling deployment on Vercel , Mantaining Database from Mongodb Atlas, Currently working on LMS",
        "Impact - Website is the most visited Digital Platform, Website appears First before any social account",
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
      name: "SmartBuy - E-commerce Price Tracker",
      description:
        "A custom web application for price tracking and e-commerce optimization. Built with Next.js and MongoDB, this project demonstrates advanced web development skills including API integration, data scraping with Puppeteer, and real-time price monitoring. Features include automated price alerts, product comparison, and user dashboard management. Perfect example of full-stack development for e-commerce solutions.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "puppetier",
          color: "pink-text-gradient",
        },
      ],
      image: smartbuy,
      source_code_link: "https://github.com/Nisarg39/habit-tracker-mern",
      deployed_link: "https://bestbuy-psi.vercel.app/"
    },
    {
      name: "Client Management Portal",
      description:
        "A professional client management system built with Next.js and modern UI components. This custom web application showcases advanced React development skills including session management, dashboard analytics, and user authentication. Features include real-time session tracking, client communication tools, and comprehensive project management. Demonstrates expertise in building scalable business applications and custom CRM solutions.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "shadcn",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nisarg_portal,
      source_code_link: "https://github.com/Nisarg39/nisarg_client",
      deployed_link: "https://nisarg-client.vercel.app/"
    },
    {
      name: "Vichar Group - Educational Platform",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };