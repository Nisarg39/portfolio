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

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glare = card.querySelector('.glare-effect');
    if (glare) {
      glare.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, rgba(145, 94, 255, 0.15) 0%, rgba(145, 94, 255, 0.05) 40%, transparent 80%)`;
      glare.style.opacity = '1';
    }
  };

  const handleMouseLeave = (e) => {
    const glare = e.currentTarget.querySelector('.glare-effect');
    if (glare) glare.style.opacity = '0';
  };

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer group relative ${className}`}
      onClick={() => navigate(service.link)}
    >
      <div className="bg-[#1d1836]/40 h-full rounded-[32px] border border-white/10 p-8 flex flex-col justify-between overflow-hidden backdrop-blur-md hover:border-purple-500/30 transition-all duration-500">
        {/* Interactive Glare Overlay */}
        <div
          className="glare-effect absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none z-10"
        />

        <div className="relative z-20">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              {service.icon && <service.icon className="w-6 h-6 text-purple-400" />}
            </div>
            <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono text-gray-400">
              {service.deliveryTime}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
          <p className="text-secondary text-[14px] leading-relaxed opacity-80">{service.description}</p>
        </div>

        <div className="pt-8 flex justify-between items-center relative z-20">
          <div className="flex gap-2 flex-wrap">
            {service.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[9px] font-mono text-purple-300/80">{tech}</span>
            ))}
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/5 group-hover:bg-purple-500 transition-colors">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
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
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

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
    <section ref={containerRef} id="services" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <span className='hash-span'>&nbsp;</span>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start relative w-full">
        <div className="lg:w-[40%] lg:sticky lg:top-1/2 lg:-translate-y-1/2 h-fit z-30">
          <motion.div style={{ opacity, scale, y }}>
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
