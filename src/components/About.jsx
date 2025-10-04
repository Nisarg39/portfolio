import React, { useState, useEffect, useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import {styles } from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { 
  LayoutGrid as ReactIcon, 
  Database, 
  Server, 
  Code2, 
  FileJson, 
  Blocks,
  Smartphone,
  Layout,
  Boxes,
  FileCode2,
  GitBranch,
  Container,
  Wrench,
  Palette
} from 'lucide-react';

const TechMarquee = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const technologies = [
    { name: 'React.js', icon: ReactIcon, iconColor: 'text-blue-400' },
    { name: 'Node.js', icon: Server, iconColor: 'text-green-400' },
    { name: 'MongoDB', icon: Database, iconColor: 'text-emerald-400' },
    { name: 'Express.js', icon: Code2, iconColor: 'text-yellow-400' },
    { name: 'TypeScript', icon: FileJson, iconColor: 'text-blue-500' },
    { name: 'React Native', icon: Smartphone, iconColor: 'text-purple-400' },
    { name: 'Next.js', icon: Layout, iconColor: 'text-gray-200' },
    { name: 'Redux', icon: Boxes, iconColor: 'text-purple-500' },
    { name: 'REST APIs', icon: FileCode2, iconColor: 'text-orange-400' },
    { name: 'Git', icon: GitBranch, iconColor: 'text-red-400' },
    { name: 'Docker', icon: Container, iconColor: 'text-cyan-400' },
    { name: 'VS Code', icon: Wrench, iconColor: 'text-blue-300' },
    { name: 'Figma', icon: Palette, iconColor: 'text-pink-400' },
  ];

  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];
  
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -10 * technologies.length * 3]
  );

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden relative min-w-full mx-auto py-12 sm:py-8"
      style={{
        background: '#050816'
      }}
    >
      {/* Left side reveal effect */}
      <div className="absolute left-0 top-0 h-full z-10 flex pointer-events-none">
        {/* Solid edge */}
        <div 
          className="w-[40px] sm:w-[80px] h-full"
          style={{
            background: '#050816'
          }}
        />
        {/* Fade out effect */}
        <div className="relative w-[100px] sm:w-[180px] h-full">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, 
                #050816 0%,
                rgba(5, 8, 22, 0.95) 20%,
                rgba(5, 8, 22, 0.8) 40%,
                rgba(5, 8, 22, 0.4) 60%,
                rgba(5, 8, 22, 0.2) 80%,
                transparent 100%)`,
            }}
          />
        </div>
      </div>

      {/* Right side reveal effect */}
      <div className="absolute right-0 top-0 h-full z-10 flex pointer-events-none">
        {/* Fade out effect */}
        <div className="relative w-[100px] sm:w-[180px] h-full">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to left, 
                #050816 0%,
                rgba(5, 8, 22, 0.95) 20%,
                rgba(5, 8, 22, 0.8) 40%,
                rgba(5, 8, 22, 0.4) 60%,
                rgba(5, 8, 22, 0.2) 80%,
                transparent 100%)`,
            }}
          />
        </div>
        {/* Solid edge */}
        <div 
          className="w-[40px] sm:w-[80px] h-full"
          style={{
            background: '#050816'
          }}
        />
      </div>

      {/* Marquee content */}
      <motion.div
        className="flex whitespace-nowrap relative z-5 px-[50px] sm:px-[100px]"
        style={{ x }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <motion.span
            key={index}
            className="mx-2 sm:mx-3 text-white text-base sm:text-lg font-medium flex-shrink-0 flex items-center gap-1 sm:gap-2"
          >
            <tech.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.iconColor}`} />
            <span className="hidden sm:inline">{tech.name}</span>
            <span className="text-[#915EFF] opacity-80">•</span>
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const NeonButton = ({ children, onClick, isExpanded }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        animation: "none",
        boxShadow: "0 0 2px #915EFF, 0 0 4px #915EFF, 0 0 8px #915EFF",
        border: "1px solid #915EFF"
      }}
      whileTap={{ scale: 0.95 }}
      className='mt-6 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold relative group'
      style={{
        animation: "neonPulse 2s infinite",
        animationPlayState: "running",
        textShadow: "0 0 2px rgba(145, 94, 255, 0.3)",
      }}
    >
      <div className="relative z-10 flex items-center gap-2">
        {children}
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{
          background: "rgba(145, 94, 255, 0.05)",
          backdropFilter: "blur(4px)",
          boxShadow: "inset 0 0 2px rgba(145, 94, 255, 0.5)"
        }}
      />
      <style jsx>{`
        @keyframes neonPulse {
          0% {
            box-shadow: 0 0 2px #915EFF,
                        0 0 4px #915EFF,
                        0 0 6px rgba(145, 94, 255, 0.8);
            border: 1px solid rgba(145, 94, 255, 0.6);
            text-shadow: 0 0 1px rgba(145, 94, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 4px #915EFF,
                        0 0 8px #915EFF,
                        0 0 12px rgba(145, 94, 255, 0.8),
                        0 0 16px rgba(145, 94, 255, 0.6);
            border: 1px solid rgba(145, 94, 255, 0.9);
            text-shadow: 0 0 2px rgba(145, 94, 255, 0.7);
          }
          100% {
            box-shadow: 0 0 2px #915EFF,
                        0 0 4px #915EFF,
                        0 0 6px rgba(145, 94, 255, 0.8);
            border: 1px solid rgba(145, 94, 255, 0.6);
            text-shadow: 0 0 1px rgba(145, 94, 255, 0.5);
          }
        }
        button:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.button>
  );
};

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const firstParagraph = "Looking to hire a professional web developer? I'm Nisarg Shah, a Full Stack Developer specializing in custom website development, mobile app creation, and modern web solutions. With expertise in React.js, Node.js, MongoDB, and the MERN stack, I help businesses and entrepreneurs build high-performance, scalable applications that drive growth and deliver exceptional user experiences.";

  const fullText = `Looking to hire a professional web developer? I'm Nisarg Shah, a Full Stack Developer specializing in custom website development, mobile app creation, and modern web solutions. With expertise in React.js, Node.js, MongoDB, and the MERN stack, I help businesses and entrepreneurs build high-performance, scalable applications that drive growth and deliver exceptional user experiences.

## Why Choose Me for Your Web Development Project?

✅ **Full-Stack Expertise**: Complete solutions from frontend design to backend development
✅ **Modern Technologies**: React.js, Node.js, MongoDB, and cutting-edge frameworks
✅ **Mobile-First Approach**: Responsive websites that work perfectly on all devices
✅ **Fast Delivery**: 3x faster project completion without compromising quality
✅ **Ongoing Support**: 24/7 availability for maintenance and updates
✅ **Proven Results**: 100% client satisfaction with delivered projects

## Services I Offer:
• Custom Website Development
• E-commerce Solutions
• Mobile App Development (React Native)
• API Development & Integration
• Website Maintenance & Support
• Performance Optimization

Ready to transform your ideas into powerful digital solutions? Let's discuss your project requirements and bring your vision to life.`;

  return (
    <section id='about'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Your Web Developer</p>
        <h2 className={styles.sectionHeadText}>Professional Web Development Services</h2>
      </motion.div>
      <motion.div 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p className='whitespace-pre-line'>
          {showMore ? fullText : firstParagraph}
        </p>
        
        <NeonButton onClick={() => setShowMore(!showMore)} isExpanded={showMore}>
          {showMore ? (
            <>
              Show Less <span className="rotate-180">↓</span>
            </>
          ) : (
            <>
              Show More <span>↓</span>
            </>
          )}
        </NeonButton>
      </motion.div>
      
      <div className='mt-20'>
        <TechMarquee />
      </div>
    </section>
  )
}

export default SectionWrapper(About, 'about')