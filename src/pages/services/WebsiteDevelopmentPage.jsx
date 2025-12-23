import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import { styles } from '../../styles';
import { SeoHead } from '../../components';

const WebsiteDevelopmentPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Modern Website Development & SEO Optimization",
        "provider": { "@type": "Organization", "name": "NashTech", "url": "https://www.nashtech.dev" },
        "description": "High-performance web platforms built for speed, SEO, and maximum conversion rates.",
        "serviceType": "Web Development",
        "areaServed": "Worldwide"
    };

    return (
        <div ref={containerRef} className="relative bg-primary overflow-x-hidden min-h-screen selection:bg-[#915eff]/30 selection:text-white">
            <SeoHead
                title="Modern Website Development | Performance & SEO Specialists"
                description="Next-gen web platforms built for speed, SEO, and conversion. We fix Core Web Vitals and architect high-performance React/Next.js architectures."
                keywords="website development, Next.js developer, React development, Core Web Vitals fix, technical SEO, high-performance websites"
                url="https://www.nashtech.dev/services/website-development"
                schema={schema}
            />

            {/* Background Texture & Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 blueprint-grid opacity-[0.03]" />
                <div className="absolute inset-0 grain-texture-overlay" />

                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0.1]),
                        scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#915eff]/5 blur-[120px] mesh-blob"
                />
            </div>

            <div className={`max-w-7xl mx-auto relative z-10 ${styles.paddingX}`}>
                {/* 01 / HERO: TYPOGRAPHIC FOCUS */}
                <section className="min-h-screen flex flex-col justify-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <p className={styles.sectionSubText}>/ System Path / Web Architecture</p>
                        <h1 className={`${styles.heroHeadText} lg:text-[110px] sm:text-[90px] text-[50px] leading-[0.9] tracking-tighter uppercase mt-4 mb-8`}>
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#dfd9ff]">Superiority</span>
                        </h1>
                        <p className={`${styles.heroSubText} max-w-2xl leading-relaxed`}>
                            We don't build sites. We architect <span className="text-white font-medium italic">high-velocity digital engines</span> engineered for sub-second speeds and search engine dominance.
                        </p>
                    </motion.div>
                </section>

                {/* 02 / NARRATIVE: PERFORMANCE */}
                <section className="py-24 relative">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        <div className="lg:w-1/2 sticky top-32">
                            <h2 className={`${styles.sectionHeadText} uppercase tracking-tight leading-none`}>
                                01 / <br /> The <br /> <span className="text-[#915eff]">Velocity</span> <br /> Loop
                            </h2>
                            <div className="mt-8 h-[3px] w-24 bg-gradient-to-r from-[#915eff] to-transparent" />
                        </div>
                        <div className="lg:w-1/2 space-y-32">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="relative group"
                            >
                                <div className="absolute -left-12 top-0 text-[#915eff]/10 text-9xl font-black hidden sm:block pointer-events-none group-hover:text-[#915eff]/20 transition-colors">LCP</div>
                                <h3 className="text-white text-3xl font-bold mb-6 tracking-tight">Core Web Vitals Supremacy</h3>
                                <p className="text-secondary text-lg leading-relaxed font-light">
                                    Largest Contentful Paint (LCP) is the foundation of user perception. We optimize every byte to ensure your main content renders in <strong className="text-white">under 1.2 seconds</strong>, securing absolute ranking advantage.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="relative group"
                            >
                                <div className="absolute -left-12 top-0 text-[#915eff]/10 text-9xl font-black hidden sm:block pointer-events-none group-hover:text-[#915eff]/20 transition-colors">FID</div>
                                <h3 className="text-white text-3xl font-bold mb-6 tracking-tight">Edge-Native Rendering</h3>
                                <p className="text-secondary text-lg leading-relaxed font-light">
                                    By leveraging Next.js 14 Server Components and global edge middleware, we eliminate server latency. Your site reacts instantly, reducing First Input Delay (FID) to <strong className="text-white">near-zero</strong>.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 03 / METRICS: TYPOGRAPHIC GRID */}
                <section className="py-24 border-y border-[#915eff]/10">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-20">
                        <div className="flex-1">
                            <h2 className={`${styles.sectionHeadText} uppercase tracking-tighter leading-none italic opacity-90`}>
                                Pure <br /> <span className="text-[#915eff]">Power</span>
                            </h2>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                { val: "99+", lab: "Lighthouse Performance" },
                                { val: "<1.2s", lab: "Average Load Time" },
                                { val: "100%", lab: "SEO Structure" },
                                { val: "0.0", lab: "Layout Shift (CLS)" }
                            ].map((s) => (
                                <div key={s.lab} className="relative group">
                                    <div className="text-[#915eff] text-5xl sm:text-6xl font-black font-mono tracking-tighter group-hover:scale-105 transition-transform origin-left">{s.val}</div>
                                    <div className="text-secondary text-[10px] uppercase tracking-[0.4em] font-bold mt-3 opacity-80 group-hover:opacity-100 transition-opacity">{s.lab}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 04 / FINAL FLOW: TECHNICAL SEO */}
                <section className="py-24 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <h2 className={`${styles.sectionHeadText} uppercase tracking-tight leading-[1.1]`}>Technical DOM <br /> Influence</h2>
                        <p className="text-secondary text-xl leading-relaxed font-light max-w-3xl mx-auto">
                            Semantic HTML5, automated JSON-LD breadcrumbs, and sub-second indexing. We don't just optimize for users; we build for the <strong className="text-white">crawlers that control your revenue.</strong>
                        </p>

                        <div className="pt-16 flex flex-wrap justify-center gap-10">
                            {[
                                "Technical SEO Mastery", "Next.js 14 Architecture", "Edge-Native Rendering", "Atomic Design Systems"
                            ].map((t) => (
                                <div key={t} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full border border-[#915eff]/40 flex items-center justify-center text-[#915eff] group-hover:bg-[#915eff] group-hover:text-white transition-all shadow-lg group-hover:shadow-[#915eff]/20">
                                        <Check size={14} />
                                    </div>
                                    <span className="text-white font-bold tracking-tight text-xs uppercase group-hover:text-[#915eff] transition-colors">{t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 05 / CTA: THE FINAL LOOP */}
                <section className="py-40 flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="text-center relative"
                    >
                        <h2 className="text-white lg:text-[120px] md:text-[100px] text-[60px] font-black uppercase tracking-tighter leading-none mb-12 opacity-90 italic">
                            Launch <br /> <span className="text-[#915eff]">Audit</span>
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block relative overflow-hidden px-12 py-6 sm:px-24 sm:py-10 group bg-transparent border border-[#915eff]/50 rounded-none"
                        >
                            <div className="absolute inset-0 bg-[#915eff] translate-y-[101%] transition-transform duration-500 group-hover:translate-y-0" />
                            <span className="relative z-10 text-[#915eff] group-hover:text-white font-black uppercase tracking-[0.3em] sm:tracking-[0.6em] text-lg sm:text-xl transition-colors">
                                Start Now
                            </span>
                        </a>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default WebsiteDevelopmentPage;
