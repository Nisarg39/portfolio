import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { styles } from '../styles';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax for Text (Slower)
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Parallax for Image (Faster)
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Mouse Parallax State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      className='relative w-full h-screen mx-auto overflow-hidden bg-primary flex flex-col justify-center'
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Background Ambience - Subtle Grain & Glow */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        <div className='absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#915eff]/20 rounded-full blur-[120px]' />
        <div className='absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]' />
      </div>

      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full relative z-10 h-full flex flex-col justify-center`}>

        {/* Massive Typography Layer */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className='relative z-10 pointer-events-none'
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='font-black text-white text-[50px] sm:text-[80px] lg:text-[100px] xl:text-[110px] leading-[0.8] tracking-tighter mix-blend-difference'
          >
            STEP <span className='text-stroke-white text-transparent opacity-50'>INTO</span>
          </motion.h1>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className='font-black text-[#915eff] text-[60px] sm:text-[90px] lg:text-[110px] xl:text-[120px] leading-[0.8] tracking-tighter'
          >
            NASHTECH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${styles.heroSubText} mt-8 text-white-100 max-w-xl font-light tracking-wide leading-relaxed pl-2 border-l-2 border-[#915eff]/50`}
          >
            We architect scalable digital infrastructure and <br className='hidden sm:block' /> AI-powered solutions that redefine business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 pointer-events-auto w-fit"
          >
            <a href="#contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(145,94,255,0.4)]">
              <span className="relative z-10 transition-colors group-hover:text-white uppercase tracking-wider text-sm">Start Project</span>
              <div className="absolute inset-0 bg-[#050816] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 group-hover:stroke-white stroke-black transition-colors duration-300 transform group-hover:translate-x-1">
                <path d="M1 17L17 1M17 1H5M17 1V13" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Character Layer - Overlapping */}
        <motion.div
          style={{
            y: imageY,
            perspective: '1200px',
            transformStyle: 'preserve-3d',
            rotateX,
            rotateY
          }}
          className='absolute right-0 top-0 bottom-0 w-full lg:w-[60%] z-20 flex items-center justify-end pointer-events-none'
        >
          {/* Depth Layer: Back Glow */}
          <div className='absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-b from-[#915eff]/20 to-transparent rounded-full blur-[100px] -z-10 mix-blend-screen' />

          {/* Character */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className='relative w-full max-w-[700px] mr-[-30px] lg:mr-[-40px]'
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Character Image */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className='relative z-20'
            >
              <img
                src="/coder.png"
                alt="Coder"
                className='w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] mask-image-gradient'
              />
            </motion.div>

            {/* Technical Annotations */}
            <motion.div
              className="absolute top-[20%] left-[10%] z-30 flex items-center gap-3"
              style={{ transform: 'translateZ(100px)' }}
            >
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
              <div className='h-[1px] w-12 bg-white/20' />
              <div className="text-left backdrop-blur-sm bg-black/20 p-2 rounded border border-white/5">
                <div className="text-lg font-bold text-white leading-none">24/7</div>
                <div className="text-[9px] text-white/60 tracking-[0.2em] uppercase mt-1">System Active</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[15%] right-[10%] z-30 flex items-center gap-3 flex-row-reverse"
              style={{ transform: 'translateZ(140px)' }}
            >
              <div className='w-2 h-2 bg-[#915eff] rounded-full' />
              <div className='h-[1px] w-12 bg-white/20' />
              <div className="text-right backdrop-blur-sm bg-black/20 p-2 rounded border border-white/5">
                <div className="text-lg font-bold text-white leading-none">100%</div>
                <div className="text-[9px] text-white/60 tracking-[0.2em] uppercase mt-1">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        style={{ opacity: textOpacity }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference z-20'
      >
        <span className='text-[10px] uppercase tracking-[0.3em] text-white'>Scroll</span>
        <div className='w-[1px] h-12 bg-white/20 overflow-hidden'>
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className='w-full h-1/2 bg-white'
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
