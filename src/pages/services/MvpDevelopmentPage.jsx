import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Zap, Smartphone, Check } from 'lucide-react';
import { styles } from '../../styles';
import { SeoHead } from '../../components';

const MvpDevelopmentPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "MVP Development for Startups",
        "provider": { "@type": "Organization", "name": "NashTech", "url": "https://www.nashtech.dev" },
        "description": "Fast-track your startup launch with our MVP development services.",
        "serviceType": "MVP Development",
        "areaServed": "Worldwide"
    };

    return (
        <div ref={containerRef} className="relative bg-[#050816] overflow-x-hidden min-h-screen text-white selection:bg-orange-500/30 selection:text-white">
            <SeoHead
                title="MVP Development for Startups"
                description="Fast-track your startup launch with our MVP development services. We build scalable Minimum Viable Products for Fintech, Healthtech, and Edtech startups."
                keywords="MVP development, startup software, rapid prototyping, fintech MVP, healthtech app, react native developer"
                url="https://www.nashtech.dev/services/mvp-development"
                schema={schema}
            />

            {/* Kinetic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full animate-pulse" />
                <motion.div
                    style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]), rotate: useTransform(scrollYProgress, [0, 1], [0, 15]) }}
                    className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] border border-white/5 rounded-3xl"
                />
            </div>

            <div className={`max-w-7xl mx-auto relative z-10 ${styles.paddingX}`}>
                {/* 01 / HERO: VELOCITY FIRST */}
                <section className="min-h-screen flex flex-col justify-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className={`${styles.sectionSubText} text-orange-400`}>/ Engine / Venture Lab</p>
                        <h1 className={`${styles.heroHeadText} leading-[0.8] tracking-tighter uppercase mt-4 mb-6`}>
                            Fast <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#915eff]">Venture</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-12 text-secondary max-w-2xl font-light leading-relaxed`}>
                            Stop waiting for "perfect." We build <span className="text-white font-medium">high-fidelity MVPs</span> that allow you to iterate on real user feedback and raise funding in weeks.
                        </p>
                    </motion.div>
                </section>

                {/* 02 / PROCESS: MINIMALIST TIMELINE */}
                <section className="py-24">
                    <div className="space-y-40">
                        <motion.div
                            className="flex flex-col lg:flex-row gap-10 items-baseline border-l border-white/5 pl-10"
                            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                        >
                            <div className="text-orange-400 font-black text-9xl leading-none opacity-20 select-none">T+14</div>
                            <div className="flex-1">
                                <h3 className={`${styles.sectionHeadText} uppercase mb-6 flex items-center gap-4`}>
                                    <Zap className="text-orange-400" size={48} /> Rapid Prototype
                                </h3>
                                <p className="text-secondary text-xl leading-relaxed max-w-2xl">
                                    From vision to interactive prototype in <strong className="text-white">14 days</strong>. We strip away the noise to validate your core value proposition with real stakeholders immediately.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col lg:flex-row gap-10 items-baseline border-l border-white/5 pl-10"
                            whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                        >
                            <div className="text-[#915eff] font-black text-9xl leading-none opacity-20 select-none">V+01</div>
                            <div className="flex-1">
                                <h3 className={`${styles.sectionHeadText} uppercase mb-6 flex items-center gap-4`}>
                                    <Smartphone className="text-[#915eff]" size={48} /> Build Once, Scale
                                </h3>
                                <p className="text-secondary text-xl leading-relaxed max-w-2xl">
                                    Using React Native & Expo, we deliver a production-ready iOS and Android app from a <strong className="text-white">single codebase</strong>. Native speed, startup agility.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 03 / FOCUS: GRID-LESS ADVANTAGES */}
                <section className="py-24 border-y border-white/5">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-4">
                            <h2 className={`${styles.sectionHeadText} uppercase leading-tight`}>The Startup <br /> Playbook</h2>
                        </div>
                        <div className="grid gap-12">
                            {[
                                { t: "Lean Methodology", d: "Highly focused development on 'Must-Have' features only." },
                                { t: "Investor-Ready Code", d: "Documented foundations that pass technical due diligence." },
                                { t: "Growth-Ready Stack", d: "Embedded analytics and scalable cloud infrastructure." }
                            ].map(i => (
                                <div key={i.t} className="flex gap-6 group">
                                    <div className="w-6 h-6 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 group-hover:bg-orange-400 group-hover:text-black transition-colors flex-shrink-0 mt-1">
                                        <Check size={12} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl uppercase mb-2 text-white">{i.t}</h4>
                                        <p className="text-secondary leading-relaxed font-light">{i.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 04 / CTA: THE LAUNCH FINISH */}
                <section className="py-40 flex flex-col items-center">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-white lg:text-[120px] md:text-[80px] text-[60px] font-black uppercase tracking-tighter leading-none mb-10">
                            Ignite your <br /> <span className="text-[#915eff]">Vision</span>
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block px-12 py-5 bg-orange-400 text-black font-black uppercase tracking-[0.5em] hover:bg-[#915eff] hover:text-white transition-all shadow-[0_0_40px_rgba(251,146,60,0.2)] hover:shadow-[0_0_40px_rgba(145,94,255,0.2)]"
                        >
                            Fixed Quote <span>→</span>
                        </a>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default MvpDevelopmentPage;
