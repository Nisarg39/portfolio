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
      className="w-full overflow-hidden relative min-w-full mx-auto py-8"
      style={{
        background: '#050816'
      }}
    >
      {/* Left side reveal effect */}
      <div className="absolute left-0 top-0 h-full z-10 flex pointer-events-none">
        {/* Solid edge */}
        <div 
          className="w-[80px] h-full"
          style={{
            background: '#050816'
          }}
        />
        {/* Fade out effect */}
        <div className="relative w-[180px] h-full">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, 
                #050816 0%,
                rgba(5, 8, 22, 1) 10%,
                rgba(5, 8, 22, 0.9) 30%,
                rgba(5, 8, 22, 0.7) 50%,
                rgba(5, 8, 22, 0.3) 70%,
                rgba(5, 8, 22, 0.1) 85%,
                transparent 100%)`,
            }}
          />
        </div>
      </div>

      {/* Right side reveal effect */}
      <div className="absolute right-0 top-0 h-full z-10 flex pointer-events-none">
        {/* Fade out effect */}
        <div className="relative w-[180px] h-full">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to left, 
                #050816 0%,
                rgba(5, 8, 22, 1) 10%,
                rgba(5, 8, 22, 0.9) 30%,
                rgba(5, 8, 22, 0.7) 50%,
                rgba(5, 8, 22, 0.3) 70%,
                rgba(5, 8, 22, 0.1) 85%,
                transparent 100%)`,
            }}
          />
        </div>
        {/* Solid edge */}
        <div 
          className="w-[80px] h-full"
          style={{
            background: '#050816'
          }}
        />
      </div>

      {/* Marquee content */}
      <motion.div
        className="flex whitespace-nowrap relative z-5 px-[100px]"
        style={{ x }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <motion.span
            key={index}
            className="mx-3 text-white text-lg font-medium flex-shrink-0 flex items-center gap-2"
          >
            <tech.icon className={`w-5 h-5 ${tech.iconColor}`} />
            {tech.name}
            <span className="text-[#915EFF]">•</span>
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

  const firstParagraph = "I'm a passionate Full Stack Developer specializing in modern web technologies including React.js, Node.js, MongoDB, and Express.js. With expertise in the MERN stack and mobile app development using React Native and Expo, I create high-performance, scalable applications that deliver exceptional user experiences across web and mobile platforms.";

  const fullText = `I'm a passionate Full Stack Developer specializing in modern web technologies including React.js, Node.js, MongoDB, and Express.js. With expertise in the MERN stack and mobile app development using React Native and Expo, I create high-performance, scalable applications that deliver exceptional user experiences across web and mobile platforms.

My approach focuses on clean code architecture, responsive design principles, and implementing industry best practices to build robust digital solutions. I excel at transforming complex business requirements into intuitive, user-friendly interfaces while ensuring optimal performance and accessibility across all devices.

As a dedicated problem-solver and continuous learner, I stay current with emerging technologies and development trends. From building dynamic web applications to creating cross-platform mobile apps, I'm committed to delivering projects that not only meet technical specifications but also drive business growth and user engagement.

Ready to collaborate and bring your vision to life with cutting-edge web and mobile solutions.`;

  return (
    <section id='About'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
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