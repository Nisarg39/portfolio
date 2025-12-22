import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useRef } from "react";

const ProjectCard = ({ index, name, description, tags, image, deployed_link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleCardClick = () => {
    window.open(deployed_link, "_blank");
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.002, 1.002, 1.002)`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="cursor-pointer h-full"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        className="bg-black-100 p-5 rounded-3xl sm:w-[340px] w-full h-full shadow-2xl border border-gray-800/30 hover:border-purple-500/50 hover:shadow-purple-500/25 transition-all duration-300 relative flex flex-col"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
          boxShadow: isHovered
            ? '0 0 20px rgba(168, 85, 247, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.1)'
            : '0 0 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Image container with 3D effect */}
        <div
          className="relative w-full h-[220px] group overflow-hidden"
          style={{
            transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease-out'
          }}
        >
          <img
            src={image}
            alt={`${name} - Custom web development project showcasing modern web technologies and responsive design`}
            className="w-full h-full object-contain bg-tertiary/80 rounded-3xl transition-all duration-400 group-hover:shadow-xl"
            loading="lazy"
          />
        </div>

        {/* Content with 3D layering */}
        <div
          className="mt-5"
          style={{
            transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="flex justify-between items-center mb-3 min-h-[64px]">
            <h3
              className="text-white font-bold text-[22px] hover:text-purple-400 transition-colors duration-300 leading-tight"
              style={{
                transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)',
                transition: 'transform 0.3s ease-out'
              }}
            >
              {name}
            </h3>
          </div>

          <p
            className="text-secondary text-[14px] leading-relaxed min-h-[150px] overflow-y-auto max-h-[200px] pr-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800 whitespace-pre-line"
            style={{
              transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out'
            }}
          >
            {description.split(/(\bProblem:|\bSolution:|\bImpact:)/g).map((part, i) => {
              if (part === "Problem:") return <span key={i} className="text-white font-bold">Problem:</span>;
              if (part === "Solution:") return <span key={i} className="text-[#915eff] font-bold">Solution:</span>;
              if (part === "Impact:") return <span key={i} className="text-green-400 font-bold">Impact:</span>;
              return part;
            })}
          </p>
        </div>

        {/* Tags with 3D depth */}
        <div
          className="mt-4 flex flex-wrap gap-2 min-h-[48px]"
          style={{
            transform: isHovered ? 'translateZ(10px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease-out'
          }}
        >
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tagIndex * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              className={`text-[12px] ${tag.color} bg-black/30 px-3 py-1 rounded-full hover:bg-current/10 transition-all duration-300 cursor-default`}
            >
              #{tag.name}
            </motion.span>
          ))}
        </div>

        {/* Progress indicator with 3D depth */}
        <div
          className="mt-4 w-full bg-gray-800 rounded-full h-1"
          style={{
            transform: isHovered ? 'translateZ(5px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-700 ease-out"
            style={{
              width: isHovered ? '100%' : '0%',
              boxShadow: isHovered ? "0 0 10px rgba(168, 85, 247, 0.5)" : "none"
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="work">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Case Studies & Impact</p>
        <h2 className={styles.sectionHeadText}>Engineering Success Stories</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore our gallery of high-impact digital solutions. From AI-powered SaaS platforms to enterprise-grade educational systems, we engineer software that solves complex business challenges and delivers measurable ROI for our global clients.
        </motion.p>
      </div>

      {/* Projects grid */}
      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        layout
      >
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </motion.div>

      {/* Load more button */}
      {visibleProjects < projects.length && (
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={loadMore}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}

export default SectionWrapper(Works, "");