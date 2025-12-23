import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import {
  ArrowRight,
  Cpu,
  Layers,
  Smartphone,
  Database,
  Zap,
  Globe
} from 'lucide-react';

const ServiceCard = ({ service, index, className }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 100
          }
        }
      }}
      className={`cursor-pointer group relative ${className}`}
      onClick={() => navigate(service.link)}
    >
      <div className="bg-gradient-to-br from-black-100 to-black-200 h-full rounded-[28px] shadow-2xl border border-gray-800/50 p-7 flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          {service.icon && <service.icon className="w-6 h-6 text-purple-400" />}
          <div className="px-3 py-1 rounded-full bg-white/5 text-[11px] text-gray-400">
            {service.deliveryTime}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-400 text-[13px]">{service.description}</p>
        </div>
        <div className="pt-4 flex justify-between items-center">
          <div className="flex gap-1.5 flex-wrap">
            {service.technologies.slice(0, 2).map((tech, i) => (
              <span key={i} className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-300">{tech}</span>
            ))}
          </div>
          <button className="text-purple-400 text-xs font-bold flex items-center gap-1">
            Details <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);

  const services = [
    {
      icon: Globe,
      title: "Modern Website Development",
      description: "Next-gen web platforms built for speed, SEO, and conversion.",
      technologies: ["React.js", "Next.js 14"],
      deliveryTime: "2-4 weeks",
      className: "md:col-span-3",
      link: "/services/website-development"
    },
    {
      icon: Smartphone,
      title: "Android & iOS Development",
      description: "Premium cross-platform mobile solutions for iOS & Android.",
      technologies: ["React Native", "Expo"],
      deliveryTime: "6-10 weeks",
      className: "md:col-span-3",
      link: "/services/app-development"
    },
    {
      icon: Cpu,
      title: "AI & Neural Integration",
      description: "Custom LLM deployments and neural automation engines.",
      technologies: ["OpenAI", "LangChain"],
      deliveryTime: "4-6 weeks",
      className: "md:col-span-3",
      link: "/services/ai-solutions"
    },
    {
      icon: Layers,
      title: "Enterprise SaaS Architecture",
      description: "High-performance, multi-tenant digital infrastructure.",
      technologies: ["Next.js-14", "AWS"],
      deliveryTime: "6-8 weeks",
      className: "md:col-span-3",
      link: "/services/custom-software"
    },
    {
      icon: Zap,
      title: "Neural Mobile Interfaces",
      description: "AI-driven cross-platform applications.",
      technologies: ["React Native", "AI"],
      deliveryTime: "4-6 weeks",
      className: "md:col-span-3",
      link: "/services/mvp-development"
    },
    {
      icon: Database,
      title: "High-Frequency Data Hubs",
      description: "Robust real-time data ingestion engines.",
      technologies: ["Node.js", "Redis"],
      deliveryTime: "2-4 weeks",
      className: "md:col-span-3",
      link: "/services/custom-software"
    }
  ];

  return (
    <section id="services" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <span className='hash-span'>&nbsp;</span>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start relative w-full">
        <div className="lg:w-[40%] lg:sticky lg:top-32 h-fit z-30">
          <motion.div style={{ opacity, scale }}>
            <p className={styles.sectionSubText}>Our Ecosystem</p>
            <h2 className={styles.sectionHeadText}>Engineering Future Architectures</h2>
            <p className="text-secondary text-lg mt-4">We transform business pain-points into elegant solutions.</p>
          </motion.div>
        </div>

        <div className="lg:w-[60%]">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-6 gap-4"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                className={service.className}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
