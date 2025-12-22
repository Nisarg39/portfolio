import { motion, useScroll, useTransform } from 'framer-motion';
import { styles } from '../styles';
import { Code, Server, Database, Layers, Smartphone, Network } from 'lucide-react';
import Robot from './Robot';


const Hero = () => {
  const { scrollYProgress } = useScroll();

  const mainContentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-50%']);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  const techStack = [
    { name: 'AI Agent Integration', icon: Network, iconColor: 'text-blue-400' },
    { name: 'Enterprise Custom SaaS', icon: Layers, iconColor: 'text-purple-400' },
    { name: 'Fintech MVP Development', icon: Server, iconColor: 'text-green-400' },
    { name: 'Process Automation', icon: Database, iconColor: 'text-orange-400' },
    { name: 'Scalable Cloud Architecture', icon: Database, iconColor: 'text-cyan-400' },
    { name: 'Legacy System Modernization', icon: Code, iconColor: 'text-yellow-400' }
  ];

  return (
    <section id='home' className='relative w-full h-screen mx-auto overflow-hidden'
      style={{ perspective: '1000px' }}>
      {/* Background Micro-Stars/Particles */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: `${el.initialX}%`,
            top: `${el.initialY}%`,
            width: '2px',
            height: '2px',
            background: '#915eff',
            borderRadius: '50%',
            filter: 'blur(1px)',
            zIndex: 0
          }}
          animate={{
            y: [0, 100, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Hero Content Layer */}
      <motion.div
        style={{
          y: mainContentY,
          opacity: opacityTransform,
        }}
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5 z-20`}
      >
        <div className='hidden lg:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='w-full lg:max-w-md xl:max-w-lg relative'>
          <h1 className={`${styles.heroHeadText} text-white lg:text-6xl xl:text-7xl`}>
            Step Into <span className='text-[#915eff]'>NashTech</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We build scalable digital infrastructure and
            <br className='sm:block hidden' />AI-powered solutions that drive business growth.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='mt-6 lg:mt-8 flex flex-wrap gap-2 lg:gap-3'
          >
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#915eff' }}
                  className='px-2 py-1 lg:px-3 lg:py-1 bg-tertiary rounded-full text-white text-xs lg:text-sm border border-[#915eff]/30 hover:border-[#915eff] transition-all duration-300 cursor-pointer flex items-center gap-1 lg:gap-2'
                >
                  <IconComponent size={12} className={`lg:w-4 lg:h-4 ${tech.iconColor}`} />
                  {tech.name}
                </motion.span>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='mt-4 lg:mt-6 flex gap-4 lg:gap-6 text-white'
          >
            <div className='text-center'>
              <motion.div className='text-lg lg:text-2xl font-bold text-[#915eff]'>24/7</motion.div>
              <div className='text-xs lg:text-sm text-secondary'>Availability</div>
            </div>
            <div className='text-center'>
              <motion.div className='text-lg lg:text-2xl font-bold text-[#915eff]'>3x</motion.div>
              <div className='text-xs lg:text-sm text-secondary'>Faster Delivery</div>
            </div>
            <div className='text-center'>
              <motion.div className='text-lg lg:text-2xl font-bold text-[#915eff]'>100%</motion.div>
              <div className='text-xs lg:text-sm text-secondary'>Client Success</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(145, 94, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-2 w-fit transition-all duration-300"
            >
              Start a Project <span>→</span>
            </motion.a>
          </motion.div>
        </div>
        <div className='flex-1 w-full h-[300px] sm:h-[400px] lg:h-full relative flex justify-center items-center'>
          <Robot />
        </div>

      </motion.div>

      {/* Scroll Transition Effects */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '70vh',
          background: `linear-gradient(to top, rgba(16, 13, 37, 1) 25%, rgba(16, 13, 37, 0.9) 50%, rgba(16, 13, 37, 0.5) 75%, rgba(16, 13, 37, 0) 100%)`,
          opacity: useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0.5, 1]),
          translateY: useTransform(scrollYProgress, [0, 1], ['100%', '0%']),
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '12vh',
          backgroundColor: 'rgb(16, 13, 37)',
          opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
          zIndex: 4,
          pointerEvents: 'none'
        }}
      />

      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className='absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center z-30 mt-[650px] lg:mt-0'
      >
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero
