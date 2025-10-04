import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MessageCircle, Linkedin } from "lucide-react";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {target} = e;
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_7j0604f
    // service_uocrq8m
    // Myk5D5pBag36G3OER

    emailjs.send(
      'service_uocrq8m',
      'template_7j0604f',
      {

        from_name: form.name,
        to_name: "Nisarg",
        from_email: form.email,
        to_email: "shah.nisarg39@gmail.com",
        message: form.message,

      },
      'Myk5D5pBag36G3OER'
    ).then(() => {
      setLoading(false)
      alert('Message Recieved, I will try to contact you as soon as possible')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error)
      alert('Something went wrong ')
    })


  }

  return (
    <section id="contact" className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className={styles.sectionSubText}>
              Get in touch
            </p>

            <h2 className={styles.sectionHeadText}>
              Contact.
            </h2>
          </div>

          <div className="flex gap-3 mt-2">
            {/* WhatsApp Icon */}
            <motion.a
              href="https://wa.me/+918888215802"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-black-100 p-3 rounded-full border border-secondary/10 hover:border-green-500/30 shadow-inner hover:shadow-green-500/10 transition-all duration-300 cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <MessageCircle 
                size={20} 
                className="text-secondary group-hover:text-green-400 transition-colors duration-300" 
              />
              
              {/* Inner glow effect */}
              <div className="absolute inset-1 rounded-full bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black-200 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-secondary/20">
                WhatsApp
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black-200 rotate-45 border-l border-t border-secondary/20"></div>
              </div>
            </motion.a>
            
            {/* LinkedIn Icon */}
            <motion.a
              href="https://www.linkedin.com/in/nisarg-shah-413b731ba/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-black-100 p-3 rounded-full border border-secondary/10 hover:border-blue-500/30 shadow-inner hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Linkedin 
                size={20} 
                className="text-secondary group-hover:text-blue-400 transition-colors duration-300" 
              />
              
              {/* Inner glow effect */}
              <div className="absolute inset-1 rounded-full bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black-200 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-secondary/20">
                LinkedIn
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black-200 rotate-45 border-l border-t border-secondary/20"></div>
              </div>
            </motion.a>
          </div>
        </div>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-8"
        >
          <label className="flex flex-col">

            <span className="text-white font-medium mb-4">
              Your Name
            </span>

            <input type="text" name="name" value={form.name} 
              onChange={handleChange} placeholder="Whats your name?"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary 
                text-white rounded-lg outlined-none border-none font-medium"
            />

          </label>

          <label className="flex flex-col">

            <span className="text-white font-medium mb-4">
              Your Email
            </span>

            <input type="email" name="email" value={form.email} 
              onChange={handleChange} placeholder="Whats your email?"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary 
                text-white rounded-lg outlined-none border-none font-medium"
            />

          </label>

          <label className="flex flex-col">

            <span className="text-white font-medium mb-4">
              Your Message
            </span>

            <textarea rows="7"  name="message" value={form.message} 
              onChange={handleChange} placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary 
                text-white rounded-lg outlined-none border-none font-medium"
            />

          </label>

          <button type="submit" 
            className="bg-tertiary py-3 px-8 outline-none w-fit 
              text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Contact, "contact")