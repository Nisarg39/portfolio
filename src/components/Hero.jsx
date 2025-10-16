import { motion, useScroll, useTransform } from 'framer-motion';
import {styles} from '../styles';
import { Code, Server, Database, Layers, Smartphone, Network } from 'lucide-react';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for parallax effects
  const mainContentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-50%']);
  const computerY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Floating elements animation variants
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  const techStack = [
    { name: 'Custom Websites', icon: Code, iconColor: 'text-blue-400' },
    { name: 'React Development', icon: Server, iconColor: 'text-green-400' },
    { name: 'Mobile Apps', icon: Smartphone, iconColor: 'text-purple-400' },
    { name: 'API Development', icon: Network, iconColor: 'text-orange-400' },
    { name: 'E-commerce Solutions', icon: Layers, iconColor: 'text-yellow-400' },
    { name: 'Full Stack Services', icon: Database, iconColor: 'text-emerald-400' }
  ];

  return (
    <section id='home' className='relative w-full h-screen mx-auto overflow-hidden'
             style={{ perspective: '1000px' }}>
      {/* Parallax Background Elements */}
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

      {/* Main Content with Parallax */}
      <motion.div 
        style={{ 
          y: mainContentY,
          opacity: opacityTransform,
        }}
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5 z-20`}
      >
        
        {/* Left side - Decorative line (hidden on mobile) */}
        <div className='hidden lg:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
 

        {/* Main content */}
        <div className='w-full lg:max-w-md xl:max-w-lg relative'>
          <h1 className={`${styles.heroHeadText} text-white whitespace-nowrap overflow-hidden lg:text-6xl xl:text-7xl`}>
            Hi, I'm <span className='text-[#915eff]'>Nisarg</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Web Apps,
            <br className='sm:block hidden' />From FrontEnd to BackEnd
          </p>

          {/* Tech Stack Pills - Responsive */}
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

          {/* Animated Stats - Responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='mt-4 lg:mt-6 flex gap-4 lg:gap-6 text-white'
          >
            <div className='text-center'>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className='text-lg lg:text-2xl font-bold text-[#915eff]'
              >
                24/7
              </motion.div>
              <div className='text-xs lg:text-sm text-secondary'>Availability</div>
            </div>
            <div className='text-center'>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className='text-lg lg:text-2xl font-bold text-[#915eff]'
              >
                3x
              </motion.div>
              <div className='text-xs lg:text-sm text-secondary'>Faster Delivery</div>
            </div>
            <div className='text-center'>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className='text-lg lg:text-2xl font-bold text-[#915eff]'
              >
                100%
              </motion.div>
              <div className='text-xs lg:text-sm text-secondary'>Client Success</div>
            </div>
          </motion.div>

        </div>      
      </motion.div>
      {/* Computer Illustration with Enhanced Parallax */}
      <motion.div
        style={{ 
          y: computerY,
          opacity: opacityTransform,
          rotateX: useTransform(scrollYProgress, [0, 0.5], [0, 15]),
          scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
        }}
        className='absolute inset-0 flex justify-center items-center lg:justify-end lg:items-center pointer-events-none px-4 lg:px-8 xl:px-16 z-10'
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg lg:mr-8 xl:mr-16 mt-[300px] lg:mt-0'
        >
          {/* RGB Gaming Case */}
          <div className='relative'>
            {/* RGB Ambient Glow */}
            <motion.div 
              className='absolute -inset-4 bg-gradient-to-r from-[#915eff]/20 via-[#915eff]/10 to-[#915eff]/20 rounded-2xl blur-lg'
              animate={{ 
                background: [
                  'linear-gradient(45deg, rgba(145,94,255,0.2), rgba(145,94,255,0.1), rgba(145,94,255,0.2))',
                  'linear-gradient(45deg, rgba(145,94,255,0.1), rgba(145,94,255,0.2), rgba(145,94,255,0.1))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Gaming Case Frame */}
            <div className='w-full aspect-[16/9] bg-black rounded-lg border-2 border-gray-800 shadow-2xl relative overflow-hidden'>
              {/* RGB Strip Top */}
              <motion.div 
                className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500'
                animate={{
                  backgroundPosition: ['0% 0%', '100% 0%'],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              {/* Gaming Screen Content */}
              <div className='absolute inset-2 bg-black rounded overflow-hidden'>
                {/* Matrix Rain with RGB Effects */}
                <div className='relative h-full'>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className='absolute top-0 text-center'
                      style={{ left: `${i * 5}%`, width: '5%' }}
                      initial={{ y: -100 }}
                      animate={{ y: '100%' }}
                      transition={{
                        duration: Math.random() * 2 + 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2
                      }}
                    >
                      {[...Array(10)].map((_, j) => (
                        <motion.span
                          key={j}
                          className='block text-xs'
                          animate={{
                            color: ['#915eff', '#00ffff', '#915eff'],
                            textShadow: ['0 0 5px #915eff', '0 0 5px #00ffff', '0 0 5px #915eff']
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {Math.random() > 0.5 ? '1' : '0'}
                        </motion.span>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ROG Logo */}
              <motion.div 
                className='absolute bottom-2 right-2 text-sm font-bold'
                animate={{
                  color: ['#915eff', '#00ffff', '#915eff'],
                  textShadow: ['0 0 5px #915eff', '0 0 5px #00ffff', '0 0 5px #915eff']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                NASH
              </motion.div>
            </div>

            {/* RGB Gaming Stand */}
            <div className='mt-2 flex flex-col items-center'>
              <motion.div 
                className='w-3 h-8 bg-black rounded'
                animate={{
                  boxShadow: [
                    '0 0 10px #915eff',
                    '0 0 10px #00ffff',
                    '0 0 10px #915eff'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className='w-16 h-2 bg-black rounded-full mt-1'
                animate={{
                  boxShadow: [
                    '0 0 10px #915eff',
                    '0 0 10px #00ffff',
                    '0 0 10px #915eff'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>

          {/* RGB Gaming Keyboard */}
          <div className='mt-4 w-full h-12 bg-black rounded-lg relative overflow-hidden'>
            <motion.div 
              className='absolute inset-0 opacity-50'
              animate={{
                background: [
                  'linear-gradient(90deg, #915eff, #00ffff, #915eff)',
                  'linear-gradient(90deg, #00ffff, #915eff, #00ffff)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className='absolute inset-1 bg-black rounded grid grid-cols-12 gap-1 p-1'>
              {[...Array(36)].map((_, i) => (
                <motion.div
                  key={i}
                  className='bg-gray-800 rounded-sm'
                  animate={{
                    boxShadow: [
                      '0 0 2px #915eff',
                      '0 0 2px #00ffff',
                      '0 0 2px #915eff'
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: Math.random() * 2 
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Transition Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '70vh',
          background: `linear-gradient(
            to top,
            rgba(16, 13, 37, 1) 25%,
            rgba(16, 13, 37, 0.9) 50%,
            rgba(16, 13, 37, 0.5) 75%,
            rgba(16, 13, 37, 0) 100%
          )`,
          opacity: useTransform(
            scrollYProgress,
            [0, 0.25, 0.5],
            [0, 0.5, 1]
          ),
          translateY: useTransform(
            scrollYProgress,
            [0, 1],
            ['100%', '0%']
          ),
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* Solid Background Color Layer */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '12vh',
          backgroundColor: 'rgb(16, 13, 37)',
          opacity: useTransform(
            scrollYProgress,
            [0.3, 0.5],
            [0, 1]
          ),
          zIndex: 4,
          pointerEvents: 'none'
        }}
      />

      {/* Bottom Scroll Indicator */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className='absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center z-30 mt-[650px] lg:mt-0'
      >
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 
          border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero
