import { motion, useScroll, useTransform } from 'framer-motion';
import { styles } from '../styles';
import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import Robot from './Robot';
import HeroBackground3D from './canvas/HeroBackground3D';


const Hero = () => {
  const { scrollYProgress } = useScroll();

  const mainContentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-50%']);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id='home' className='relative w-full min-h-screen mx-auto overflow-hidden bg-primary'
      style={{ perspective: '1000px' }}>

      {/* Premium Background Layer */}
      <div className='absolute inset-0 z-0'>
        {/* Animated Gradient Mesh Blobs */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30'
          style={{
            background: 'radial-gradient(circle, rgba(145, 94, 255, 0.4) 0%, rgba(145, 94, 255, 0.1) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-20'
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -20, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-15'
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Subtle Grid Pattern */}
        <div className='absolute inset-0 opacity-40'
          style={{
            backgroundImage: `
              linear-gradient(rgba(145, 94, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(145, 94, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial Gradient Overlay */}
        <div className='absolute inset-0'
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(145, 94, 255, 0.15) 0%, transparent 60%)',
          }}
        />

        {/* Bottom Fade */}
        <div className='absolute bottom-0 left-0 right-0 h-40'
          style={{
            background: 'linear-gradient(to top, #050816 0%, transparent 100%)',
          }}
        />

        {/* Grain Texture Overlay */}
        <div className='absolute inset-0 grain-texture-overlay' />
      </div>

      {/* 3D Animated Background - Mouse Reactive */}
      <HeroBackground3D />

      {/* Hero Content Layer */}
      <motion.div
        style={{
          y: mainContentY,
          opacity: opacityTransform,
        }}
        className={`${styles.paddingX} relative lg:absolute inset-0 pt-[100px] sm:pt-[120px] lg:pt-0 lg:top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5 z-20`}
      >
        <div className='hidden lg:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='w-full lg:max-w-md xl:max-w-lg relative z-20'
        >
          <h1 className={`${styles.heroHeadText} text-white lg:text-6xl xl:text-7xl`} style={{
            textShadow: '2px 2px 10px rgba(145, 94, 255, 0.3), 0 0 20px rgba(0,0,0,0.5)'
          }}>
            Step Into <span className='text-[#915eff]'>NashTech</span>
          </h1>
          <p className='text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] lg:leading-[30px] mt-4 text-white-100 opacity-90'>
            We build scalable digital infrastructure and
            <br className='sm:block hidden' />AI-powered solutions that drive business growth.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            {[
              { label: 'Availability', value: '24/7' },
              { label: 'Faster Delivery', value: '3x' },
              { label: 'Client Success', value: '100%' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className='glassmorphism p-4 rounded-2xl flex flex-col items-center justify-center min-w-[120px] border border-white/10'
                style={{
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                }}
              >
                <div className='text-xl lg:text-3xl font-extrabold text-[#915eff] mb-1'>{stat.value}</div>
                <div className='text-[10px] lg:text-xs text-secondary uppercase tracking-widest font-semibold opacity-70'>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(145, 94, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-full font-bold text-base flex items-center gap-2 w-fit transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
            >
              Start a Project <span>→</span>
            </motion.a>
          </motion.div>
        </motion.div>
        <div className='flex-1 w-full h-[500px] sm:h-[550px] lg:h-full relative flex justify-center items-center'>
          <Robot />
        </div>
      </motion.div>




      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className='absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center z-30 lg:mt-0'
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
