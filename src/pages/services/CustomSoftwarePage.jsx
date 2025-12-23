import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, ShieldCheck, Code2 } from 'lucide-react';
import { styles } from '../../styles';
import { SeoHead } from '../../components';

const CustomSoftwarePage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Enterprise Custom Software Development",
        "provider": { "@type": "Organization", "name": "NashTech", "url": "https://www.nashtech.dev" },
        "description": "We build secure, high-performance custom software and SaaS platforms.",
        "serviceType": "Software Development",
        "areaServed": "Worldwide"
    };

    return (
        <div ref={containerRef} className="relative bg-[#020617] overflow-x-hidden min-h-screen text-white selection:bg-[#915eff]/30 selection:text-white">
            <SeoHead
                title="Enterprise Custom Software Development"
                description="Scalable SaaS development and enterprise web applications. We build secure, high-performance custom software tailored to your specific business logic."
                keywords="custom software development, SaaS development, enterprise web apps, scalable architecture, secure web applications"
                url="https://www.nashtech.dev/services/custom-software"
                schema={schema}
            />

            {/* Grid & Blueprint Backdrop */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(145,94,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(145,94,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
                <motion.div
                    style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
                    className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] border border-[#915eff]/10 rounded-full"
                />
            </div>

            <div className={`max-w-7xl mx-auto relative z-10 ${styles.paddingX}`}>
                {/* 01 / HERO: MONOLITHIC FOCUS */}
                <section className="min-h-screen flex flex-col justify-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className={styles.sectionSubText}>/ Core / Software Engineering</p>
                        <h1 className={`${styles.heroHeadText} leading-none tracking-tighter uppercase mt-4 mb-6`}>
                            Proprietary <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#915eff]">Systems</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-8 text-secondary max-w-3xl font-light leading-relaxed`}>
                            Generic tools create friction. We engineer <span className="text-white font-medium">exclusive digital infrastructure</span>, purpose-built to align perfectly with your unique business logic and scale.
                        </p>
                    </motion.div>
                </section>

                {/* 02 / ARCHITECTURE: ASYMMETRIC CONTENT */}
                <section className="py-24">
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 items-start">
                        <div className="space-y-32">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="group"
                            >
                                <div className="text-[#915eff] font-mono text-6xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">01</div>
                                <h3 className={`${styles.sectionHeadText} uppercase mb-6`}>Multi-Tenant SaaS</h3>
                                <p className="text-secondary text-xl leading-relaxed">
                                    Multi-region deployment, automated horizontal scaling, and enterprise-grade data sovereignty. We build platforms that handle <strong className="text-white">millions of users</strong> without blinking.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="group"
                            >
                                <div className="text-blue-400 font-mono text-6xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">02</div>
                                <h3 className={`${styles.sectionHeadText} uppercase mb-6`}>Legacy Refactoring</h3>
                                <p className="text-secondary text-xl leading-relaxed">
                                    Zero-downtime migrations. We peel away your technical debt layer by layer, replacing slow legacy cores with <strong className="text-white">high-speed modern architectures.</strong>
                                </p>
                            </motion.div>
                        </div>

                        <div className="sticky top-32 hidden lg:block">
                            <div className="relative aspect-square border-l border-t border-white/10 p-12 lg:p-20 overflow-hidden bg-[#050816]/50 backdrop-blur-sm">
                                <Database className="absolute -bottom-20 -right-20 text-white/5" size={400} />
                                <div className="text-white/40 font-mono text-sm space-y-3">
                                    <div className="flex justify-between border-b border-white/5 pb-1"><span>CPU_HEALTH</span> <span className="text-green-500">OPTIMAL</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-1"><span>DB_LATENCY</span> <span className="text-green-500">~2ms</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-1"><span>UPTIME_SLA</span> <span className="text-green-500">99.99%</span></div>
                                    <div className="pt-10 space-y-2">
                                        <div className="w-full h-1 bg-white/5 overflow-hidden"><motion.div animate={{ width: ["0%", "80%", "85%"] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-[#915eff]" /></div>
                                        <div className="w-full h-1 bg-white/5 overflow-hidden"><motion.div animate={{ width: ["0%", "60%", "65%"] }} transition={{ duration: 2.5, repeat: Infinity }} className="h-full bg-blue-500" /></div>
                                        <div className="w-full h-1 bg-white/5 overflow-hidden"><motion.div animate={{ width: ["0%", "90%", "95%"] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-full bg-emerald-500" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03 / STACK SECTION: WIDE TYPOGRAPHIC GRID */}
                <section className="py-24 border-y border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
                        {[
                            { icon: <ShieldCheck size={40} />, t: "SOC2 Compliance", d: "Hardened security protocols and end-to-end encryption baked into every build." },
                            { icon: <Code2 size={40} />, t: "Clean Code", d: "Maintainable, documented, and modular codebases that your future CTO will love." },
                            { icon: <ShieldCheck size={40} />, t: "Infinite scale", d: "Microservices and serverless logic that grows horizontally with your traffic." }
                        ].map(item => (
                            <div key={item.t} className="space-y-6 group">
                                <div className="text-[#915eff] mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">{item.icon}</div>
                                <h4 className="text-3xl font-black uppercase text-white">{item.t}</h4>
                                <p className="text-secondary text-lg font-light leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04 / CTA: THE BLUEPRINT FINISH */}
                <section className="py-40 flex flex-col items-center">
                    <motion.div
                        className="text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                    >
                        <h2 className="text-white lg:text-[120px] md:text-[80px] text-[50px] font-black uppercase tracking-tighter leading-none mb-12">
                            Build Your <br /> <span className="text-blue-400">Legacy</span>
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block relative overflow-hidden px-20 py-8 bg-white group hover:bg-[#915eff] transition-colors duration-300"
                        >
                            <div className="absolute inset-0 bg-[#915eff] translate-x-[-101%] transition-transform duration-500 group-hover:translate-x-0" />
                            <span className="relative z-10 text-black group-hover:text-white font-black uppercase tracking-[0.5em] text-lg transition-colors">
                                Request Audit <span>→</span>
                            </span>
                        </a>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default CustomSoftwarePage;
