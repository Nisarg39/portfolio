import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Terminal } from 'lucide-react';
import { styles } from '../../styles';
import { SeoHead } from '../../components';

const AiSolutionsPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Integration & Automation Services",
        "provider": { "@type": "Organization", "name": "NashTech", "url": "https://www.nashtech.dev" },
        "description": "Automate your business with custom AI agents, Chatbots, and LLM integration.",
        "serviceType": "AI Development",
        "areaServed": "Worldwide"
    };

    return (
        <div ref={containerRef} className="relative bg-[#020617] overflow-x-hidden min-h-screen selection:bg-[#915eff]/30 selection:text-white">
            <SeoHead
                title="AI Integration & Automation Services"
                description="Automate your business with custom AI agents, Chatbots, and LLM integration. We help businesses reduce operational costs by 40% with smart automation."
                keywords="AI development, custom chatbots, OpenAI integration, business automation, LLM integration, AI agents"
                url="https://www.nashtech.dev/services/ai-solutions"
                schema={schema}
            />

            {/* Neural Matrix Background */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
                    className="absolute top-0 left-0 w-full font-mono text-[10px] text-[#915eff] whitespace-pre p-10 opacity-10"
                >
                    {`RUNNING NEURAL_NET_V2.0...\nLOADING LLM_WEIGHTS...\nINITIALIZING AGENT_ORCHESTRATOR...\nSCANNING DATA_PIPELINES...\nENCRYPTING VECTOR_DB...\nPROCESSING...`.repeat(20)}
                </motion.div>
            </div>

            <div className={`max-w-7xl mx-auto relative z-10 ${styles.paddingX} text-white`}>
                {/* HERO: SYSTEM INITIALIZATION */}
                <section className="min-h-screen flex flex-col justify-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className={styles.sectionSubText}>/ System Core / Neural Network</p>
                        <h1 className={`${styles.heroHeadText} leading-none tracking-tighter uppercase mt-2`}>
                            Neural <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-blue-400">Archon</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-12 max-w-2xl font-light leading-relaxed`}>
                            Autonomous agents that don't just process data—they <span className="text-white font-medium italic underline decoration-[#915eff] decoration-2 underline-offset-4 font-sans">reason</span> through complexity.
                        </p>
                    </motion.div>
                </section>

                {/* 01 / AGENTS: VERTICAL TIMELINE FLOW */}
                <section className="py-24 relative">
                    <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#915eff]/30 to-transparent ml-[2px]" />

                    <div className="space-y-40 pl-12 lg:pl-20">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <div className="absolute -left-[54px] top-2 w-3 h-3 rounded-full bg-[#915eff] shadow-[0_0_15px_#915eff]" />
                            <span className="text-[#915eff] font-mono text-xs tracking-widest uppercase mb-4 block">Deployment / Phase 01</span>
                            <h2 className={`${styles.sectionHeadText} uppercase mb-6`}>Autonomous <br /> LLM Swarms</h2>
                            <p className="text-secondary text-xl max-w-3xl leading-relaxed">
                                Deploy specialized agents that handle customer support, internal knowledge management, and automated outreach. Built on <strong className="text-white">private vector databases</strong> for zero hallucinations and maximum security.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <div className="absolute -left-[54px] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
                            <span className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-4 block">Orchestration / Phase 02</span>
                            <h2 className={`${styles.sectionHeadText} uppercase mb-6`}>Neural Data <br /> Pipelines</h2>
                            <p className="text-secondary text-xl max-w-3xl leading-relaxed">
                                Connect your CRM, Email, and Slack directly to an LLM core. Automate classification, summary generation, and action-triggering <strong className="text-white">without human intervention.</strong>
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 02 / STATS: TYPOGRAPHIC IMPACT */}
                <section className="py-24 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-t border-b border-white/5 py-20">
                        <div className="text-white lg:text-[140px] md:text-[80px] text-[60px] font-black tracking-tighter opacity-10 leading-none select-none">AI ROI</div>
                        <div className="flex flex-col items-end text-right">
                            <div className="text-[#915eff] lg:text-[120px] md:text-[80px] text-[60px] font-black leading-none tracking-tighter">40%</div>
                            <div className="text-secondary text-sm uppercase tracking-widest mt-4">Operational Cost Reduction</div>
                        </div>
                    </div>
                </section>

                {/* 03 / SECURITY: MINIMALIST GRID */}
                <section className="py-24">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <Shield className="text-[#915eff] mb-6" size={48} />
                            <h2 className={`${styles.sectionHeadText} uppercase leading-none`}>Guardrails <br /> By Design</h2>
                        </div>
                        <div className="space-y-12">
                            {[
                                { t: "Private Data Control", d: "Your LLM weights stay in your VPC. We never train on client data." },
                                { t: "Agentic Compliance", d: "Hardened filters that prevent prompt injection and unauthorized actions." },
                                { t: "Output Validation", d: "Multi-step verification processes to ensure accuracy in every response." }
                            ].map((item) => (
                                <div key={item.t} className="border-l-2 border-[#915eff]/20 pl-8 transition-colors hover:border-[#915eff] group">
                                    <h4 className="text-white font-bold text-xl mb-2 tracking-tight group-hover:text-[#915eff] transition-colors">{item.t}</h4>
                                    <p className="text-secondary text-lg leading-relaxed font-light">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 04 / CTA: IMMERSIVE FINISH */}
                <section className="py-40 flex flex-col items-center">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-white lg:text-[120px] md:text-[80px] text-[50px] font-black uppercase tracking-tighter leading-none mb-10">
                            Initialize <br /> <span className="text-[#915eff]">Archon</span>
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block px-12 py-6 sm:px-16 sm:py-7 border border-[#915eff] text-[#915eff] text-lg font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] hover:bg-[#915eff] hover:text-white transition-all shadow-[0_0_30px_rgba(145,94,255,0.2)]"
                        >
                            Request Audit <span>→</span>
                        </a>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default AiSolutionsPage;
