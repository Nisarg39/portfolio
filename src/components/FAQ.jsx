import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.1, 0.75)}
    className="bg-black-100 p-6 rounded-2xl border border-gray-800/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-white text-lg font-semibold pr-4">
        {question}
      </h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-purple-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-400" />
        )}
      </motion.div>
    </div>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 mt-4 border-t border-gray-700/50">
            <p className="text-secondary text-sm leading-relaxed">
              {answer}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do custom AI Agents drive business ROI and automation?",
      answer: "We specialize in autonomous AI agents and neural integration that go beyond simple chatbots. By deploying custom LLM automation engines and OpenAI-powered workflows, we help enterprises slash operational costs and autonomously solve complex business tasks."
    },
    {
      question: "What is your process for MVP development for Fintech and SaaS startups?",
      answer: "Our product engineering approach is designed for speed and scalability. Strategic discovery for simple architectures starts from $10, while complex enterprise-grade SaaS platforms are engineered for sub-second latency and global expansion within 6-12 weeks."
    },
    {
      question: "Do you specialize in legacy system modernization and infrastructure overhauls?",
      answer: "Yes. We transform outdated, slow legacy code into high-performance architectures. Our modernization service focuses on performance optimization, Core Web Vitals fixes, and scalable cloud migration to ensure your infrastructure meets modern enterprise standards."
    },
    {
      question: "How do you ensure scalable React frontend architecture for high-traffic apps?",
      answer: "We utilize multi-tenant, enterprise-ready stacks including Next.js 14, TypeScript, and AWS. Our architecture is built to handle millions of concurrent requests with 100% data integrity, optimized for both user experience and technical SEO."
    },
    {
      question: "Do you offer digital transformation consulting for growing businesses?",
      answer: "Beyond coding, we provide end-to-end technology auditing and strategic planning. We map your business goals to a technical roadmap that ensures long-term market dominance and measurable ROI through digital transformation."
    },
    {
      question: "How do you manage cross-platform mobile development with AI integration?",
      answer: "We build AI-driven mobile interfaces using React Native that offer native performance with on-device machine learning models. This provides your users with predictive UIs and seamless cloud-sync capabilities across iOS and Android."
    },
    {
      question: "What is included in your software development partnership?",
      answer: "Our partnership covers the full product lifecycle: Custom solution design, security-first engineering, SEO and performance optimization, and 24/7 technical support. We act as your extended engineering team to ensure your digital ecosystem stays ahead of the curve."
    },
    {
      question: "How do you ensure enterprise-level security for custom applications?",
      answer: "Security is baked into our 'Software Development Partner' DNA. We implement HTTPS encryption, secure authentication (Edge Auth), input validation, and regular security patches, following OWASP guidelines and utilizing trusted cloud providers."
    }
  ];

  return (
    <section id="faq">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Got Questions?</p>
        <h2 className={styles.sectionHeadText}>Frequently Asked Questions</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Find answers to common questions about my web development services, pricing, and process. If you don't see your question here, feel free to contact me directly.
        </motion.p>
      </div>

      {/* FAQ Items */}
      <div className="mt-20 space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        variants={fadeIn("up", "spring", 0.8, 0.75)}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-3xl border border-purple-500/20">
          <h3 className="text-white text-xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-secondary mb-6">
            I'm here to help! Contact me for a free consultation and let's discuss your project requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Free Consultation
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(FAQ, "faq");
