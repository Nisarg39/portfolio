import React from 'react';
import { styles } from '../../styles';
import { SeoHead } from '../../components';

const AiSolutionsPage = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Integration & Automation Services",
        "provider": {
            "@type": "Organization",
            "name": "NashTech",
            "url": "https://www.nashtech.dev"
        },
        "description": "Automate your business with custom AI agents, Chatbots, and LLM integration.",
        "serviceType": "AI Development",
        "areaServed": "Worldwide"
    };

    return (
        <>
            <SeoHead
                title="AI Integration & Automation Services"
                description="Automate your business with custom AI agents, Chatbots, and LLM integration. We help businesses reduce operational costs by 40% with smart automation."
                keywords="AI development, custom chatbots, OpenAI integration, business automation, LLM integration, AI agents"
                url="https://www.nashtech.dev/services/ai-solutions"
                schema={schema}
            />
            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <div className="flex flex-col gap-10 mt-20">
                    <h1 className={`${styles.heroHeadText}`}>
                        Automate Your Business with <span className="text-[#915EFF]">Custom AI Agents</span>
                    </h1>

                    <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-3xl`}>
                        Stop wasting hours on manual customer support and data entry. We integrate OpenAI and custom LLMs into your existing workflows to **slash operational costs by up to 40%**.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">Custom Chatbots (LLM)</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                Intelligent 24/7 customer support agents that understand context and resolve queries instantly, not just rigid decision trees.
                            </p>
                        </div>

                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">Workflow Automation</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                Connect your CRM, Email, and internal databases with AI to automate data entry, report generation, and lead qualification.
                            </p>
                        </div>

                        <div className="bg-tertiary p-8 rounded-2xl hover:bg-tertiary/80 transition-all">
                            <h3 className="text-white text-[24px] font-bold">Predictive Analytics</h3>
                            <p className="mt-4 text-secondary text-[16px]">
                                Leverage your historical data to predict trends, customer churn, and sales opportunities with custom Machine Learning models.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-black-200 p-10 rounded-3xl border border-secondary/10">
                        <h2 className="text-white text-[32px] font-bold mb-6">Why AI Automation?</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Reduce Human Error:** AI doesn't get tired or miss details in complex data entry.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Scalability:** Process 10,000 requests as easily as 10 without hiring more staff.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**Insights:** Uncover hidden patterns in your customer behavior that humans overlook.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#915EFF] text-xl">✅</span>
                                <p className="text-secondary text-[16px]">**24/7 Response:** Never lose a lead due to delayed response times outside business hours.</p>
                            </li>
                        </ul>

                        <div className="mt-10">
                            <a
                                href="/contact"
                                className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:shadow-purple-500/50 transition-all inline-block"
                            >
                                Get a Free AI Audit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AiSolutionsPage;
