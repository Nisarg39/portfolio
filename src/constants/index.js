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
    {
      title: "Freelance Web Developer",
      company_name: "Takalkar Academy",
      icon: takalkar,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Till Date",
      points: [
        "Co-ordinating with Marketing Team and work accordingly with their vision",
        "Designing (FrontEnd, BackEnd), SEO optimization and providing utilities to Staff and Students",
        "Handling deployment on Vercel , Mantaining Database from Mongodb Atlas, Currently working on LMS",
        "Impact - Website is the most visited Digital Platform, Website appears First before any social account",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Employee Review System",
      description:
        "Web application that enables employer to know their employees point of view using review system for getting feedback of the employees. Use of Passport Local Strategy to maintain security. Lot of control over data given to administrator for better maintainance of data",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: employeereviewsystem,
      source_code_link: "https://github.com/Nisarg39/Employee_Review_System",
      deployed_link: "https://employee-review-56zp.onrender.com/"
    },
    // {
    //   name: "IMDB Clone",
    //   description:
    //     "Search for a Movie or Web Series , get reviews and ratings before watching the content. Save Movie in favourites to keep a reminder for later. Get summary and more details once you select the movie you want to watch. Built on pure VanillaJS without any 3rd party library",
    //   tags: [
    //     {
    //       name: "vanillaJS",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "omdb api",
    //       color: "green-text-gradient",
    //     },
    //     // {
    //     //   name: "css",
    //     //   color: "pink-text-gradient",
    //     // },
    //   ],
    //   image: imdbClone,
    //   source_code_link: "https://github.com/Nisarg39/imdbClone",
    //   deployed_link: "https://employee-review-56zp.onrender.com/users/signin"
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };