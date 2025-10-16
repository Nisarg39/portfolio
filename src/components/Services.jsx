import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Globe, 
  Settings,
  Zap,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react';

const ServiceCard = ({ service, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-black-100 p-6 rounded-3xl shadow-2xl border border-gray-800/30 hover:border-purple-500/50 hover:shadow-purple-500/25 transition-all duration-300 group"
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
        <service.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">
        {service.title}
      </h3>
    </div>
    
    <p className="text-secondary text-sm leading-relaxed mb-4">
      {service.description}
    </p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {service.technologies.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="px-3 py-1 bg-gray-800/50 text-xs text-white rounded-full border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
        >
          {tech}
        </span>
      ))}
    </div>
    
    <div className="flex items-center justify-between">
      <span className="text-purple-400 font-semibold text-sm">
        {service.deliveryTime}
      </span>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300"
      >
        Get Quote
      </motion.button>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Website Development",
      description: "Professional, responsive websites built with modern technologies. From simple landing pages to complex web applications, I deliver fast, secure, and SEO-optimized solutions that drive business growth.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
      deliveryTime: "1-3 weeks"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Expo. Build once, deploy everywhere - iOS and Android apps with native performance and modern UI/UX design.",
      technologies: ["React Native", "Expo", "JavaScript", "Firebase"],
      deliveryTime: "2-4 weeks"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and admin dashboards. Scalable e-commerce platforms that handle high traffic and secure transactions.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Node.js"],
      deliveryTime: "3-6 weeks"
    },
    {
      icon: Database,
      title: "API Development",
      description: "RESTful APIs and backend services for web and mobile applications. Secure, scalable server-side solutions with proper authentication and database optimization.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
      deliveryTime: "1-2 weeks"
    },
    {
      icon: Globe,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance for existing websites. Regular updates, security patches, performance optimization, and feature enhancements to keep your site running smoothly.",
      technologies: ["Performance", "Security", "Updates", "Monitoring"],
      deliveryTime: "Ongoing"
    },
    {
      icon: Settings,
      title: "Technical Consulting",
      description: "Expert guidance on technology choices, architecture decisions, and development strategies. Help you make informed decisions for your digital projects and business goals.",
      technologies: ["Strategy", "Architecture", "Code Review", "Planning"],
      deliveryTime: "As needed"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "3x faster project completion without compromising quality"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-level security and 99.9% uptime guarantee"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock availability for maintenance and updates"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "100% client satisfaction with measurable business impact"
    }
  ];

  return (
    <section>
      <motion.div variants={textVariant()} initial="show" viewport={{ once: false, amount: 0.1 }}>
        <p className={styles.sectionSubText}>What I Offer</p>
        <h2 className={styles.sectionHeadText}>Web Development Services</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} initial="show" viewport={{ once: false, amount: 0.1 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Professional web development services tailored to your business needs. From custom websites to mobile apps, I deliver high-quality solutions that drive growth and exceed expectations.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* Benefits Section */}
      <div className="mt-20">
        <motion.div variants={textVariant()} initial="show">
          <h3 className="text-white text-2xl font-bold text-center mb-12">
            Why Choose My Web Development Services?
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)} viewport={{ once: false, amount: 0.1 }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl mb-4 mx-auto w-fit">
                <benefit.icon className="w-8 h-8 text-purple-400 mx-auto" />
              </div>
              <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
              <p className="text-secondary text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn("up", "spring", 0.8, 0.75)}
        className="mt-16 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Your Project Today
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Services, "services");
