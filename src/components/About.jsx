import React, { useState } from 'react'
import {motion} from 'framer-motion';
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

  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Carbon Fiber Strips Background */}
      <div className="absolute inset-0 z-0">
        {/* Horizontal Carbon Fiber Strips */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#0a0a0a',
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                #000000 0px,
                #1a1a1a 2px,
                #000000 4px,
                #0d0d0d 6px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                rgba(255,255,255,0.03) 1px,
                transparent 2px
              )
            `,
            backgroundSize: '100% 8px, 4px 100%',
            opacity: 0.6
          }}
        />
        
        {/* Diagonal Carbon Weave Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255,255,255,0.02) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.02) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.02) 75%)
            `,
            backgroundSize: '6px 6px',
            backgroundPosition: '0 0, 0 3px, 3px -3px, -3px 0px',
            opacity: 0.3
          }}
        />

        {/* Animated Carbon Fiber Shine Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(145,94,255,0.1) 50%, transparent 100%)',
            width: '200%',
          }}
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Gradient overlays for smooth fade */}
      <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-[#050816] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-[#050816] to-transparent z-10"></div>
      
      <motion.div
        className="flex whitespace-nowrap relative z-20"
        animate={{
          x: [0, -80 * technologies.length]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 6,
            ease: "linear",
          },
        }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <motion.span
            key={index}
            className="mx-4 text-white text-lg font-medium flex-shrink-0 cursor-pointer flex items-center gap-2 relative"
            style={{
              textShadow: '0 0 10px rgba(0,0,0,0.8)'
            }}
            whileHover={{ 
              scale: 1.4,
              color: '#915EFF',
              transition: { 
                duration: 2,
                ease: "easeOut"
              }
            }}
          >
            {/* Individual tech item carbon fiber backing */}
            <div 
              className="absolute inset-0 rounded-lg -z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(26,26,26,0.4) 100%)',
                backdropFilter: 'blur(2px)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            />
            
            <tech.icon className={`w-5 h-5 ${tech.iconColor} drop-shadow-lg`} />
            {tech.name}
            <span className="text-[#915EFF]">•</span>
          </motion.span>
        ))}
      </motion.div>
    </div>
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
        
        <motion.button
          onClick={() => setShowMore(!showMore)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='mt-6 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#151030] transition-all duration-300 border border-transparent hover:border-[#915EFF] hover:shadow-lg hover:shadow-[#915EFF]/20'
        >
          {showMore ? 'Show Less' : 'Show More'}
        </motion.button>
      </motion.div>
      
      <div className='mt-20'>
        <TechMarquee />
      </div>
    </section>
  )
}

export default SectionWrapper(About, 'about')