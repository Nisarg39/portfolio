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
      glare.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, rgba(145, 94, 255, 0.15) 0%, rgba(145, 94, 255, 0.05) 40%, transparent 80%)`;
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
      className='bg-black-100 p-5 rounded-3xl sm:w-[360px] w-full relative group overflow-hidden border border-white/5 backdrop-blur-sm'
    >
      {/* Interactive Glare Overlay */}
      <div
        className="glare-effect absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none z-10"
      />

      <div className='relative w-full h-[230px] rounded-2xl overflow-hidden'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2 z-20'>
          <div
            onClick={() => window.open(deployed_link, "_blank")}
            className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform bg-white/10 backdrop-blur-sm'
          >
            <ArrowUpRight className='w-1/2 h-1/2 object-contain text-white' />
          </div>
        </div>
      </div>

      <div className='mt-5 relative z-20'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <span className='text-secondary font-mono text-[10px] uppercase tracking-widest'>{category || "Build"}</span>
        </div>
        <p className='mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3'>
          {description.split("Impact:")[0]}
        </p>

        {description.includes("Impact:") && (
          <div className='mt-4 p-3 bg-white/5 rounded-xl border border-white/5'>
            <p className='text-[#915eff] text-[12px] font-bold'>Impact:</p>
            <p className='text-white text-[12px] leading-tight mt-1'>{description.split("Impact:")[1]}</p>
          </div>
        )}
      </div>

      <div className='mt-6 flex flex-wrap gap-2 relative z-20'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[12px] opacity-60 font-mono`}
            style={{ color: tag.color || "#fff" }}
          >
            #{tag.name}
          </p>
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