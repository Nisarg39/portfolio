import React from 'react';
import { styles } from '../../styles';
import { SeoHead } from '../../components';

const CustomSoftwarePage = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Enterprise Custom Software Development",
        "provider": {
            "@type": "Organization",
            "name": "NashTech",
            "url": "https://www.nashtech.dev"
        },
        "description": "We build secure, high-performance custom software and SaaS platforms.",
        "serviceType": "Software Development",
        "areaServed": "Worldwide"
    };

    return (
        <>
            <SeoHead
                title="Enterprise Custom Software Development"
                description="Scalable SaaS development and enterprise web applications. We build secure, high-performance custom software tailored to your specific business logic."
                keywords="custom software development, SaaS development, enterprise web apps, scalable architecture, secure web applications"
                url="https://www.nashtech.dev/services/custom-software"
                schema={schema}
            />
            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <div className="flex flex-col gap-10 mt-20">
                    <h1 className={`${styles.heroHeadText}`}>
                        Enterprise-Grade <span className="text-[#915EFF]">Web Applications</span>
                    </h1>

                    <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-3xl`}>
                        Off-the-shelf software doesn't fit your unique workflow. We build tailor-made SaaS platforms designed for your specific business logic and **infinite horizontal scale**.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">SaaS Platforms</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                Multi-tenant architecture that scales from 100 to 1,000,000 users. Complete with subscription management, RBAC, and multi-region deployment.
                            </p>
                        </div>

                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">Legacy Modernization</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                Transform your outdated internal tools into modern, fast, and secure web applications without losing historical data or business continuity.
                            </p>
                        </div>

                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">Cloud Infrastructure</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                Serverless and microservices architectures built on AWS/Azure to ensure 99.99% uptime and auto-scaling capabilities for traffic spikes.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-black-200 p-10 rounded-3xl border border-secondary/10">
                        <h2 className="text-white text-[32px] font-bold mb-6">Future-Proof Your Technology Stack</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Technical Debt Reduction:** We write maintainable, clean code that developers love to work with.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Absolute Security:** Implementing SOC2 standards, end-to-end encryption, and robust auth systems.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Interoperability:** Seamlessly connect with your existing toolset via custom API ecosystems.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Data-Driven Logic:** Build dashboard and reporting systems that turn raw data into board-ready insights.</p>
                            </li>
                        </ul>

                        <div className="mt-10">
                            <a
                                href="/contact"
                                className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:shadow-purple-500/50 transition-all inline-block"
                            >
                                Request a SaaS Architecture Audit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomSoftwarePage;
