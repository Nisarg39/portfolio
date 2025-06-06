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
      name: "SmartBuy",
      description:
        "Keep a Track of your favourite Amazon Product and get notified when the product price falls to to its new low price so that you can but the product at the price which you want. We fetch products information daily so that you dont need to take care about the price fall",
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
      name: "NISARG's CLIENT PORTAL",
      description:
        "A web application that helps the client to manage their Sessions done by Me. Also, it helps me to manage my clients and their sessions. You can check the recruiter's view for dashboard demo and contact me if you want to manage your sessions from my portal",
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
      name: "Vichar Group",
      description:
        "Vichar Group is a well known Academic Institute for Competitive Exams in India. I am working with them as a Full Stack Developer and helping them to build their WebApp and Mobile App for Students and Staff. The web app is built using NextJS, MongoDB, ExpressJS and Tailwind CSS",
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