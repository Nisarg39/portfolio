import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import {
  Code,
  Smartphone,
  ShoppingCart,
  Database,
  Globe,
  Settings,
  Zap,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  LayoutGrid,
  Cpu,
  Layers
} from 'lucide-react';

const ServiceCard = ({ service, index, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Reduced rotation sensitivity due to user feedback
    const rotateX = (y - centerY) / 40;
    const rotateY = (centerX - x) / 40;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, transparent 70%)`;
      glareRef.current.style.opacity = "1";
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
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
      className={`cursor-pointer group relative ${className}`}
      style={{
        perspective: '1000px',
        zIndex: isHovered ? 50 : 1 // Elevate hovered card
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-gradient-to-br from-black-100 to-black-200 h-full rounded-[28px] shadow-2xl border border-gray-800/50 hover:border-purple-500/60 transition-all duration-500 relative overflow-hidden flex flex-col"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out', // Faster transition for smoother follow
        }}
      >
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />

        {/* Glare Overlay */}
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-0"
        />

        <div className="p-7 flex flex-col h-full relative z-20 justify-between" style={{ transformStyle: 'preserve-3d' }}>
          {/* Header */}
          <div className="flex justify-between items-start mb-4" style={{ transform: 'translateZ(30px)' }}>
            <motion.div
              className="p-3.5 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/5"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <service.icon className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
            </motion.div>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-gray-400 backdrop-blur-sm">
              {service.deliveryTime}
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow flex flex-col mb-4" style={{ transform: 'translateZ(40px)' }}>
            <h3 className="text-xl font-bold text-white mb-2.5 leading-tight group-hover:text-purple-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Tech Stack & Action */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3" style={{ transform: 'translateZ(35px)' }}>
            <div className="flex flex-wrap gap-1.5">
              {service.technologies.slice(0, 3).map((tech, i) => (
                <motion.div
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  title={tech}
                >
                  {tech}
                </motion.div>
              ))}
              {service.technologies.length > 3 && (
                <div className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-gray-400">
                  +{service.technologies.length - 3}
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-1.5 text-purple-400 text-xs font-bold group/btn whitespace-nowrap"
              onClick={(e) => {
                e.stopPropagation();
                if (service.path) {
                  navigate(service.path);
                  window.scrollTo(0, 0);
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Details <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
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

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const services = [
    {
      icon: Cpu,
      title: "AI & Neural Integration",
      description: "Custom LLM deployments and neural automation engines. We build intelligent systems that autonomously solve complex business workflows and slash operational costs.",
      technologies: ["OpenAI", "LangChain", "Vector DBs", "Python"],
      deliveryTime: "4-6 weeks",
      className: "md:col-span-3 md:row-span-1",
      path: "/services/ai-solutions"
    },
    {
      icon: Layers,
      title: "Enterprise SaaS Architecture",
      description: "High-performance, multi-tenant digital infrastructure. Scalable platforms optimized for security, sub-second latency, and global expansion.",
      technologies: ["Next.js-14", "AWS-Infra", "Microservices", "PostgreSQL"],
      deliveryTime: "6-8 weeks",
      className: "md:col-span-3 md:row-span-1",
      path: "/services/custom-software"
    },
    {
      icon: Smartphone,
      title: "Neural Mobile Interfaces",
      description: "AI-driven cross-platform applications with predictive UI. Native performance for iOS and Android with integrated machine learning models.",
      technologies: ["React Native", "On-Device-AI", "Cloud-Sync", "Tamagui"],
      deliveryTime: "4-6 weeks",
      className: "md:col-span-3 md:row-span-1"
    },
    {
      icon: Database,
      title: "High-Frequency Data Hubs",
      description: "Robust real-time data ingestion engines and sub-second APIs capable of handling millions of concurrent requests with 100% data integrity.",
      technologies: ["Node.js", "Redis-Cache", "GraphQL", "Docker"],
      deliveryTime: "2-4 weeks",
      className: "md:col-span-3 md:row-span-1"
    },
    {
      icon: Zap,
      title: "Legacy Modernization",
      description: "Deep refactoring and performance overhauls. We modernize outdated systems into high-speed architectures that meet modern Core Web Vital standards.",
      technologies: ["Lighthouse", "Code-Refactor", "CDN-Opt", "Edge-Auth"],
      deliveryTime: "2-3 weeks",
      className: "md:col-span-3 md:row-span-1"
    },
    {
      icon: Globe,
      title: "Strategic Digital Transformation",
      description: "End-to-end technology consulting for business growth. We map business goals to technical architecture to drive measurable ROI and market dominance.",
      technologies: ["Tech-Audit", "Architecture-Lead", "Strategic-Planning"],
      deliveryTime: "Consultation",
      className: "md:col-span-3 md:row-span-1",
      path: "/services/mvp-development"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full min-h-screen mx-auto perspective-1000">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

        {/* Sticky Left Panel with Scroll Animations */}
        <motion.div
          style={{ opacity, scale }}
          className="lg:w-[38%] lg:sticky lg:top-24 lg:h-fit"
        >
          <div>
            <p className={styles.sectionSubText}>Our Ecosystem</p>
            <h2 className={`${styles.sectionHeadText} mb-6 leading-tight`}>
              Engineering Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-blue-600 inline-block">
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Architectures
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-secondary text-lg leading-relaxed mb-10 max-w-md"
          >
            We transform business pain-points into elegant, enterprise-grade solutions.
            Our approach combines deep technical expertise with strategic vision to build
            software that dominates markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-transparent"></div>
              <span className="text-sm uppercase tracking-widest font-medium">Accepting Enterprise Partners</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-fit px-10 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-purple-50 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Start a Project →
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scrollable Right Panel - Bento Grid with Staggered Entrance */}
        <div className="lg:w-[62%]">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(250px,auto)]"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
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

export default SectionWrapper(Services, "services");

