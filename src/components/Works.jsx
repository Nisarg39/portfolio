import React, { useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, deployed_link }) => {
  const [title, category] = name.split(" | ");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glare = card.querySelector('.glare-effect');
    if (glare) {
      glare.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, rgba(145, 94, 255, 0.2) 0%, rgba(145, 94, 255, 0.05) 40%, transparent 80%)`;
      glare.style.opacity = '1';
    }
  };

  const handleMouseLeave = (e) => {
    const glare = e.currentTarget.querySelector('.glare-effect');
    if (glare) glare.style.opacity = '0';
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='bg-[#1d1836]/40 p-5 rounded-[32px] sm:w-[360px] w-full relative group overflow-hidden border border-white/10 backdrop-blur-md hover:border-purple-500/30 transition-all duration-500'
    >
      {/* Interactive Glare Overlay */}
      <div
        className="glare-effect absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none z-10"
      />

      <div className='relative w-full h-[230px] rounded-[24px] overflow-hidden'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000'
        />

        <div className='absolute inset-0 flex justify-end m-4 card-img_hover gap-2 z-20'>
          <div
            onClick={() => window.open(deployed_link, "_blank")}
            className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-500 transition-colors bg-black/40 backdrop-blur-md border border-white/10'
          >
            <ArrowUpRight className='w-5 h-5 text-white' />
          </div>
        </div>
      </div>

      <div className='mt-6 relative z-20'>
        <div className='flex justify-between items-start mb-2'>
          <div>
            <h3 className='text-white font-bold text-[22px] tracking-tight'>{title}</h3>
            <p className='text-[#915eff] font-mono text-[9px] uppercase tracking-[0.3em] mt-1'>{category || "Digital Product"}</p>
          </div>
        </div>

        <p className='mt-3 text-secondary text-[14px] leading-relaxed line-clamp-2 opacity-80'>
          {description.split("Impact:")[0].replace("Problem: ", "").replace("Solution: ", "")}
        </p>

        {description.includes("Impact:") && (
          <div className='mt-5 pl-4 border-l-2 border-purple-500/50 py-1'>
            <p className='text-white/40 text-[10px] uppercase tracking-widest font-bold'>Impact</p>
            <p className='text-white/90 text-[13px] leading-snug mt-1 italic font-medium'>
              "{description.split("Impact:")[1].trim()}"
            </p>
          </div>
        )}
      </div>

      <div className='mt-6 flex flex-wrap gap-2 relative z-20'>
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className='px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-white/60'
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="work" className="relative z-0">
      {/* Aurora Background - Replicating Experience.jsx DNA */}
      <div className="aurora-background" style={{ top: '0', height: '100%', opacity: 0.4 }}>
        <div className="aurora-layer aurora-layer-1"></div>
        <div className="aurora-layer aurora-layer-2"></div>
        <div className="aurora-layer aurora-layer-3"></div>
        <div className="aurora-layer aurora-layer-4"></div>
        <div className="aurora-overlay"></div>
      </div>

      <div className='relative z-10'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>

      <style>
        {`
          .white-gradient {
            background: rgba(255, 255, 255, 0.1);
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </section>
  );
};

export default SectionWrapper(Works, "");