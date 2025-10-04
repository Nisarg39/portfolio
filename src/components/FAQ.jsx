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
      question: "How much do you charge for web development?",
      answer: "My pricing varies based on project complexity, timeline, and specific requirements. Simple websites start from $500, while complex web applications range from $2,000-$10,000+. I offer competitive rates and provide detailed quotes after understanding your project needs. Contact me for a free consultation and personalized quote."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Project timelines depend on complexity and requirements. Simple landing pages: 1-2 weeks, Custom websites: 2-4 weeks, E-commerce sites: 4-8 weeks, Complex web applications: 6-12 weeks. I work efficiently and deliver projects 3x faster than industry average while maintaining high quality standards."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "I specialize in modern web technologies including React.js, Next.js, Node.js, MongoDB, Express.js, and Tailwind CSS. For mobile apps, I use React Native and Expo. I also work with TypeScript, AWS, Firebase, and various APIs. I choose the best technology stack based on your project requirements and scalability needs."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer comprehensive maintenance packages including regular updates, security patches, performance optimization, and feature enhancements. I'm available 24/7 for urgent issues and provide ongoing support to ensure your website runs smoothly. Maintenance packages start from $100/month."
    },
    {
      question: "Can you help with existing websites?",
      answer: "Absolutely! I provide website redesign, performance optimization, security updates, and feature additions for existing websites. I can work with any technology stack and help modernize older websites with current best practices and technologies."
    },
    {
      question: "Do you work with clients outside your local area?",
      answer: "Yes, I work with clients worldwide. I have experience with remote collaboration and use modern communication tools to ensure smooth project management. I'm available across different time zones and provide regular updates throughout the development process."
    },
    {
      question: "What's included in your web development service?",
      answer: "My services include: Custom design and development, Responsive mobile-friendly websites, SEO optimization, Performance optimization, Security implementation, Testing and quality assurance, Deployment and hosting setup, Documentation and training, 30-day free support after launch."
    },
    {
      question: "How do you ensure website security?",
      answer: "I implement multiple security layers including HTTPS encryption, secure authentication, input validation, SQL injection prevention, XSS protection, and regular security updates. I follow OWASP security guidelines and use trusted hosting platforms with enterprise-level security features."
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
