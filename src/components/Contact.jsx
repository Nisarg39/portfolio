import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MessageCircle, Linkedin, Github } from "lucide-react";

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
    const { target } = e;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
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
    <section id="contact" className={`${styles.padding} max-w-7xl mx-auto flex xl:flex-row flex-col-reverse gap-10 xl:gap-20 items-center overflow-hidden`}>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="xl:flex-[0.45] bg-[#1d1836]/60 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md relative z-10 w-full"
      >
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-[#915eff] font-medium text-[14px] uppercase tracking-widest">
            GET IN TOUCH
          </span>
          <h2 className="text-white font-black lg:text-[42px] md:text-[35px] text-[30px] leading-tight text-balance">
            Let's build something extraordinary.
          </h2>

          <div className="flex gap-4 mt-2">
            {[
              { Icon: MessageCircle, href: "https://wa.me/+918888215802", color: "hover:text-green-400", label: "WhatsApp" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/nisarg-shah-413b731ba/", color: "hover:text-blue-400", label: "LinkedIn" },
              { Icon: Github, href: "https://github.com/Nisarg39", color: "hover:text-purple-400", label: "GitHub" }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-tertiary/50 p-2.5 rounded-xl border border-white/5 ${social.color} transition-all duration-300 shadow-xl group`}
                whileHover={{ y: -3 }}
              >
                <social.Icon size={20} className="transition-transform group-hover:scale-110" />
              </motion.a>
            ))}
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold text-[14px]">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ex. John Doe"
              className="bg-black-200 py-3.5 px-6 text-white rounded-2xl outline-none border border-white/5 focus:border-[#915eff]/50 transition-all font-medium placeholder:text-secondary/50 text-sm"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold text-[14px]">Email Address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ex. john@agency.com"
              className="bg-black-200 py-3.5 px-6 text-white rounded-2xl outline-none border border-white/5 focus:border-[#915eff]/50 transition-all font-medium placeholder:text-secondary/50 text-sm"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold text-[14px]">Project Details</span>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly describe your vision..."
              className="bg-black-200 py-3.5 px-6 text-white rounded-2xl outline-none border border-white/5 focus:border-[#915eff]/50 transition-all font-medium resize-none placeholder:text-secondary/50 text-sm"
            />
          </label>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#915eff] py-3.5 px-10 outline-none w-fit text-white font-bold shadow-2xl shadow-[#915eff]/20 rounded-2xl hover:bg-[#804dee] transition-all flex items-center gap-3 text-[16px] group"
          >
            {loading ? 'Sending Request...' : (
              <>
                Schedule a Consultation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 w-full h-[350px] md:h-[500px] xl:h-[550px]"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Contact, "contact")