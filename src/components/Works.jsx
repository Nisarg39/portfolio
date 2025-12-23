import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useRef } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const ProjectStrip = ({ index, name, description, tags, image, deployed_link, source_code_link }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  // Parse description content
  const content = description.split(/(\bProblem:|\bSolution:|\bImpact:)/g).reduce((acc, curr, i, arr) => {
    if (curr === "Problem:") acc.problem = arr[i + 1];
    if (curr === "Solution:") acc.solution = arr[i + 1];
    if (curr === "Impact:") acc.impact = arr[i + 1];
    return acc;
  }, { problem: "", solution: "", impact: "" });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="w-full py-32 border-t border-white/10 first:border-none relative"
    >
      <div className="flex flex-col gap-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-[#915eff] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Case Study 0{index + 1}</span>
            <h3 className="text-white font-black text-[40px] md:text-[80px] leading-[0.9] uppercase tracking-tighter">
              {name.split("|")[0]}
            </h3>
            <p className="text-secondary text-lg md:text-2xl mt-2 font-light tracking-wide">
              {name.split("|")[1] || "Engineering"}
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={deployed_link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center w-16 h-16 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500"
              title="View Live Site"
            >
              <ArrowUpRight strokeWidth={1.5} className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            {/* Source code link hidden */}
          </div>
        </div>

        {/* Cinematic Image - Full Width */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2px]">
          <motion.div
            style={{ y: imgY }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1]"
            />
          </motion.div>
          {/* Scanline overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,19,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" />
        </div>

        {/* Editorial Grids Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 border-b border-white/5 pb-10">
          {/* Tech Stack */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-[#915eff] pb-2 inline-block">Architecture</h4>
            <div className="flex flex-col gap-3">
              {tags.map((tag) => (
                <span key={tag.name} className={`text-secondary text-sm font-mono hover:text-white transition-colors cursor-default`}>
                      // {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm text-opacity-50">Challenge</h4>
            <p className="text-[#dfd9ff] text-base leading-relaxed font-light opacity-80">
              {content.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm text-opacity-50">Solution</h4>
            <p className="text-[#dfd9ff] text-base leading-relaxed font-light opacity-80">
              {content.solution}
            </p>
          </div>

          {/* Impact */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm text-opacity-50">Impact</h4>
            <p className="text-[#dfd9ff] text-base leading-relaxed font-light opacity-80">
              {content.impact}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="work" className="relative z-0 py-20">
      <div className="border-b border-white/10 pb-10 mb-20">
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-[1px] bg-[#915eff]" />
            <p className={`${styles.sectionSubText} !m-0`}>Selected Works</p>
          </div>
          <h2 className={`${styles.sectionHeadText} !leading-tight`}>
            Engineering  <br />
            <span className="text-[#915eff]">Excellence.</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-8 text-secondary text-xl max-w-2xl leading-relaxed font-light"
        >
          A curated archive of high-performance digital systems. We architect solutions that do more than function—they outperform.
        </motion.p>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectStrip
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

      <div className="flex flex-col items-center mt-32 space-y-8">
        <p className="text-white text-lg font-mono">Ready to build the next success story?</p>
        <a href="/contact" className="group relative px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#915eff] hover:text-white transition-colors duration-500 overflow-hidden">
          <span className="relative z-10">Start Project</span>
          <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </a>
      </div>
    </section>
  );
}

export default SectionWrapper(Works, "");