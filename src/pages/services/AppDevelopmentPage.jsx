import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, ShieldCheck, Zap, Layers, Check } from 'lucide-react';
import { styles } from '../../styles';
import { SeoHead } from '../../components';

const AppDevelopmentPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "iOS & Android Mobile App Development",
        "provider": { "@type": "Organization", "name": "NashTech", "url": "https://www.nashtech.dev" },
        "description": "Premium cross-platform mobile solutions for iOS and Android using React Native and Expo.",
        "serviceType": "Mobile App Development",
        "areaServed": "Worldwide"
    };

    return (
        <div ref={containerRef} className="relative bg-[#020617] overflow-x-hidden min-h-screen text-white selection:bg-blue-500/30 selection:text-white">
            <SeoHead
                title="iOS & Android App Development | Premium Cross-Platform Solutions"
                description="Custom mobile application development for iOS and Android. High-performance, AI-integrated mobile solutions built with React Native and Expo."
                keywords="mobile app development, iOS developer, Android developer, React Native expert, hybrid apps, Expo development"
                url="https://www.nashtech.dev/services/app-development"
                schema={schema}
            />

            {/* Mobile Horizon Backdrop */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[1px] bg-[#915eff] blur-md opacity-30 rotate-12" />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                    className="absolute top-[20%] right-[20%] border border-[#3b82f6]/20 rounded-full w-[600px] h-[600px] blur-sm"
                />
            </div>

            <div className={`max-w-7xl mx-auto relative z-10 ${styles.paddingX}`}>
                {/* 01 / HERO: NATIVE IMPACT */}
                <section className="min-h-screen flex flex-col justify-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className={`${styles.sectionSubText} text-blue-500`}>/ Platform / Native Engine</p>
                        <h1 className={`${styles.heroHeadText} leading-[0.8] tracking-tighter uppercase mt-4 mb-6`}>
                            Omni <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#915eff]">Mobile</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-12 text-secondary max-w-2xl font-light leading-relaxed`}>
                            Native-grade performance for <span className="text-white font-medium">iOS and Android</span>. We blend fluid 60FPS animations with deep ecosystem integration.
                        </p>
                    </motion.div>
                </section>

                {/* 02 / FEATURES: HORIZONTAL TYPOGRAPHY FLOW */}
                <section className="py-24">
                    <div className="flex flex-col gap-40 lg:gap-60">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex flex-col lg:flex-row gap-20 items-center justify-between"
                        >
                            <div className="flex-1 lg:max-w-xl">
                                <span className="text-xs uppercase tracking-widest text-[#915eff] font-bold">Performance / Codebase</span>
                                <h3 className={`${styles.sectionHeadText} uppercase mt-4 mb-8`}>React Native Efficiency</h3>
                                <p className="text-secondary text-xl leading-relaxed">
                                    One codebase, infinite possibilities. We leverage React Native to deliver apps with <strong className="text-white">95% code sharing</strong>, slashing your maintenance costs while keeping performance native.
                                </p>
                            </div>
                            <div className="text-blue-500 font-black text-[12rem] opacity-5 select-none hidden lg:block">RN</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex flex-col lg:flex-row-reverse gap-20 items-center justify-between"
                        >
                            <div className="flex-1 lg:max-w-xl">
                                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Security / Enterprise</span>
                                <h3 className={`${styles.sectionHeadText} uppercase mt-4 mb-8`}>Biometric Infrastructure</h3>
                                <p className="text-secondary text-xl leading-relaxed">
                                    FaceID, Fingerprint, and OAuth 2.0 integration come standard. We build <strong className="text-white">mobile-first security layers</strong> for internal tools or global consumer apps.
                                </p>
                            </div>
                            <div className="text-emerald-400 font-black text-[12rem] opacity-5 select-none hidden lg:block">SEC</div>
                        </motion.div>
                    </div>
                </section>

                {/* 03 / HIGHLIGHTS: THE MOBILE STACK */}
                <section className="py-24 border-y border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: <Zap size={32} />, lab: "60 FPS UI", val: "Zero Latency" },
                            { icon: <Layers size={32} />, lab: "Expo Hybrid", val: "Rapid Update" },
                            { icon: <Smartphone size={32} />, lab: "Store Ops", val: "Launch Ready" },
                            { icon: <ShieldCheck size={32} />, lab: "Offline First", val: "Reliable" }
                        ].map(s => (
                            <div key={s.lab} className="space-y-4 group">
                                <div className="text-[#915eff] mb-6 transform group-hover:scale-110 transition-transform">{s.icon}</div>
                                <div className="text-white text-3xl font-black tracking-tight">{s.val}</div>
                                <div className="text-secondary text-xs uppercase tracking-widest group-hover:text-blue-400 transition-colors">{s.lab}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04 / FINAL FLOW: STORE STRATEGY */}
                <section className="py-24 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-10">
                        <h2 className={`${styles.sectionHeadText} uppercase tracking-tight leading-none italic`}>Engineering <br /> Global Distribution</h2>
                        <p className="text-secondary text-xl leading-relaxed font-light">
                            We handle everything from UX blueprints to App Store (iOS) and Play Store (Android) approvals. Your global presence begins on the home screen.
                        </p>

                        <div className="pt-20 flex flex-wrap justify-center gap-6 lg:gap-12">
                            {[
                                "Native Modules", "Push Notifications", "In-App Payments", "Real-time Sync"
                            ].map((t) => (
                                <div key={t} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full border border-blue-500/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Check size={14} />
                                    </div>
                                    <span className="text-white font-bold tracking-tight text-sm uppercase group-hover:px-2 transition-all">{t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 05 / CTA: THE MOBILE FINISH */}
                <section className="py-40 flex flex-col items-center">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <h2 className="text-white lg:text-[120px] md:text-[80px] text-[60px] font-black uppercase tracking-tighter leading-none mb-10">
                            Launch <br /> <span className="text-blue-500">Omni</span>
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block px-20 py-8 bg-[#915eff] text-black font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all shadow-[0_4px_40px_rgba(145,94,255,0.4)]"
                        >
                            Mobile Strategy <span>→</span>
                        </a>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default AppDevelopmentPage;
