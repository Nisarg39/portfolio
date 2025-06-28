import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { useEffect, useState } from 'react';

const ExperienceCard = ({experience, isActive}) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'transparent',
      color: '#fff',
      border: 'none',
      boxShadow: 'none',
      padding: '0'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      zIndex: '100' // Ensure icons are above timeline effects
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden' style={{ zIndex: '100' }}>
        <img src={experience.icon}
        alt={experience.company_name}
        className='w-full h-full object-cover rounded-full'
        />
      </div>
    }
  >
    <div 
      className="bg-black-100 highlight-card"
      style={{
        position: 'relative',
        borderRadius: '8px',
        padding: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update glare position
        const glare = card.querySelector('.glare-effect');
        if (glare) {
          glare.style.background = `radial-gradient(circle 300px at ${x}px ${y}px, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, rgba(255, 255, 255, 0.03) 60%, transparent 100%)`;
          glare.style.opacity = '1';
        }
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        
        const glare = card.querySelector('.glare-effect');
        if (glare) {
          glare.style.opacity = '0';
        }
      }}
    >
      {/* Glare Effect Overlay - Covers entire card */}
      <div 
        className="glare-effect"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'transparent',
          opacity: '0',
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: '5',
          borderRadius: '8px'
        }}
      ></div>

      {/* Card Content */}
      <div style={{ position: 'relative', zIndex: '10' }}>
        <div>
          <h3 className='text-white text-[24px] font-bold'> {experience.title}</h3>
          <p className='text-secondary text-[16px] font-semibold'
            style={{margin: 0}}
          >{experience.company_name}</p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            > 
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        const scrolled = Math.max(0, windowHeight - sectionTop);
        const progress = Math.min(scrolled / (sectionHeight + windowHeight), 1);
        
        setScrollProgress(progress);

        // Calculate which card should be active based on scroll progress
        const cardIndex = Math.floor(progress * experiences.length);
        setActiveCardIndex(Math.min(cardIndex, experiences.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='experience' style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Aurora Background */}
      <div className="aurora-background">
        <div className="aurora-layer aurora-layer-1"></div>
        <div className="aurora-layer aurora-layer-2"></div>
        <div className="aurora-layer aurora-layer-3"></div>
        <div className="aurora-layer aurora-layer-4"></div>
        <div className="aurora-overlay"></div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: '10' }}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>what i have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
        </motion.div>
        
        <div 
          className='mt-20 flex flex-col timeline-container' 
          style={{ position: 'relative' }}
        >
          {/* Animated Timeline Line Overlay */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '40px',
            transform: 'translateX(-50%)',
            width: '4px',
            height: 'calc(100% - 80px)',
            zIndex: '1',
            pointerEvents: 'none',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.05)'
          }}>
            {/* Animated Progress Line */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              // Subtract half of dot height (6px) to align with dot center
              height: `calc(${scrollProgress * 100}% - 6px)`,
              background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, #06b6d4)',
              borderRadius: '2px',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
              zIndex: '2'
            }}>
              {/* Moved dot inside progress line for perfect sync */}
              <div style={{
                position: 'absolute',
                bottom: '-6px', // Half of dot height
                left: '50%',
                transform: 'translate(-50%, 50%)',
                width: '12px',
                height: '12px',
                background: 'radial-gradient(circle, #06b6d4, #3b82f6)',
                borderRadius: '50%',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
                animation: 'scrollPulse 2s infinite',
                opacity: scrollProgress > 0 ? 1 : 0,
                zIndex: '2'
              }}></div>
            </div>
          </div>

          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                experience={experience}
                isActive={index === activeCardIndex}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          .aurora-background {
            position: absolute;
            top: 15%;
            left: 15%;
            width: 70%;
            height: 70%;
            overflow: hidden;
            z-index: 1;
            background: radial-gradient(circle at center, transparent 0%, #050816 70%);
            border-radius: 20px;
          }

          .aurora-layer {
            position: absolute;
            width: 120%;
            height: 120%;
            border-radius: 50%;
            filter: blur(50px);
            opacity: 0.5;
            mix-blend-mode: screen;
            animation: aurora-move 15s ease-in-out infinite alternate;
          }

          .aurora-layer-1 {
            background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%);
            top: -20%;
            left: -10%;
            animation-delay: -5s;
          }

          .aurora-layer-2 {
            background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 60%);
            top: -15%;
            right: -10%;
            animation-delay: -10s;
          }

          .aurora-layer-3 {
            background: radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 60%);
            bottom: -15%;
            left: -5%;
            animation-delay: -15s;
          }

          .aurora-layer-4 {
            background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 60%);
            bottom: -10%;
            right: -10%;
            animation-delay: -20s;
          }

          @keyframes aurora-move {
            0% {
              transform: rotate(0deg) scale(1);
            }
            100% {
              transform: rotate(360deg) scale(1.2);
            }
          }

          .aurora-overlay {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, transparent 0%, rgba(5, 8, 22, 0.95) 70%);
            z-index: 2;
            border-radius: 20px;
          }

          /* Override default timeline line styles */
          .vertical-timeline::before {
            display: none !important;
          }

          /* Ensure timeline icons have higher z-index */
          .vertical-timeline-element-icon {
            z-index: 100 !important;
          }

          /* Responsive aurora effects */
          @media (max-width: 768px) {
            .aurora-layer {
              filter: blur(40px);
              opacity: 0.4;
              animation-duration: 20s;
            }
            
            .aurora-background {
              width: 90%;
              left: 5%;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .aurora-layer {
              animation: none;
            }
          }

          /* Highlight Card Effect */
          .highlight-card::before {
            content: '';
            position: absolute;
            inset: -1px;
            background: linear-gradient(
              45deg,
              rgba(145, 94, 255, 0.5),
              rgba(59, 130, 246, 0.5)
            );
            z-index: -1;
            filter: blur(8px);
            opacity: 0;
            transition: opacity 0.3s ease-out;
          }

          .highlight-card.active::before {
            opacity: 1;
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(145, 94, 255, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(145, 94, 255, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(145, 94, 255, 0);
            }
          }
        `}
      </style>
    </section>
  )
}

export default SectionWrapper(Experience, "work")