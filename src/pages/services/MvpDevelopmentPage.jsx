import React from 'react';
import { styles } from '../../styles';
import { SeoHead } from '../../components';

const MvpDevelopmentPage = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "MVP Development for Startups",
        "provider": {
            "@type": "Organization",
            "name": "NashTech",
            "url": "https://www.nashtech.dev"
        },
        "description": "Fast-track your startup launch with our MVP development services.",
        "serviceType": "MVP Development",
        "areaServed": "Worldwide"
    };

    return (
        <>
            <SeoHead
                title="MVP Development for Startups"
                description="Fast-track your startup launch with our MVP development services. We build scalable Minimum Viable Products for Fintech, Healthtech, and Edtech startups."
                keywords="MVP development, startup software, rapid prototyping, fintech MVP, healthtech app, react native developer"
                url="https://www.nashtech.dev/services/mvp-development"
                schema={schema}
            />
            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <div className="flex flex-col gap-10 mt-20">
                    <h1 className={`${styles.heroHeadText}`}>
                        Launch Your Startup <span className="text-[#915EFF]">In Weeks, Not Months</span>
                    </h1>

                    <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-3xl`}>
                        Speed to market is everything. We build scalable Minimum Viable Products (MVPs) that help you **validate your idea and raise funding faster**.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">Rapid Prototyping</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                Move from concept to interactive prototype in days. Test your UX/UI with real users before writing a single line of backend code.
                            </p>
                        </div>

                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">Cross-Platform Apps</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                Build once, deploy everywhere. We use React Native to deliver iOS and Android apps with a single codebase, saving you 50% in development costs.
                            </p>
                        </div>

                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">Scalable Foundation</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                We write code that doesn't need to be rewritten when you scale. Built on best-practices that investors and CTOs look for.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-black-200 p-10 rounded-3xl border border-secondary/10">
                        <h2 className="text-white text-[32px] font-bold mb-6">The NashTech Startup Framework</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Lean Methodology:** We focus on the core "Must-Have" features that drive initial user traction.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Investor-Ready Code:** We deliver documented, modular codebases that pass due diligence with ease.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Analytics Integrated:** Track user behavior from Day 1 with built-in event tracking and heatmaps.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Cloud Agnostic:** Deploy on AWS, Vercel, or Google Cloud depending on your startup credits and budget.</p>
                            </li>
                        </ul>

                        <div className="mt-10">
                            <a
                                href="/contact"
                                className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:shadow-purple-500/50 transition-all inline-block"
                            >
                                Get a Fixed-Price MVP Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MvpDevelopmentPage;
