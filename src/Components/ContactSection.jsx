import MailBox from "../Cards/MailBox"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Globe, Send, MapPin, MessageCircleMore, User, Mail } from 'lucide-react'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { WEB3FORMS_KEY, GITHUB_URL, LINKEDIN_URL, GMAIL_URL, WHATSAPP_URL } from "../config"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const ContactSection = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  const [error, seterror] = useState(null)
  const [succ_message, setsucc_message] = useState(null)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    if (!error && !succ_message) return

    const timer = setTimeout(() => {
      seterror(null)
      setsucc_message(null)
    }, 3000)

    return () => clearTimeout(timer)
  }, [succ_message, error])

  const handlesubmit = async (e) => {
    seterror(null)
    setsucc_message(null)
    e.preventDefault()
    setloading(true)

    const data = {
      "name": name,
      "email": email,
      "message": message,
      "access_key": WEB3FORMS_KEY
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })

      const resp_data = await response.json()

      if (resp_data.success) {
        setsucc_message("Success! Your email has been sent.")
        setname("")
        setemail("")
        setmessage("")
      } else {
        throw new Error(
          resp_data.message || "Something went wrong"
        )
      }
    } catch (error) {
      seterror(error.message)
    } finally {
      setloading(false)
    }
  }

  return (
    <div id="Contact" className='flex flex-col justify-center items-center flex-1 w-full'>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className='flex flex-col md:flex-row md:gap-10 md:ml-20 w-85 md:w-230 p-6 md:pt-15 mb-10 justify-center items-start'
      >

        {/* MailBox */}
        <div className='md:mt-25 w-65 h-60'>
          <MailBox />
          </div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className='flex-1 min-w-0 flex flex-col items-start md:pt-0 pt-5'
        >

          <motion.h1
            variants={item}
            className="font-hero tracking-widest text-2xl md:text-4xl text-white"
          >
            Let's <span className="text-purple-400">Connect!</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xs md:text-xl font-hero pt-2 tracking-wider text-purple-200/60"
          >
            Got a Project in mind? Looking to hire? Or just want to say hi? My inbox is always open
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex min-w-0 flex-row gap-2 flex-wrap md:gap-5 pt-4 md:pt-6"
          >

            <motion.a
              variants={item}
              whileHover={{ scale: 1.05, y: -3 }}
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 flex items-center justify-center h-8 w-22 md:h-9 md:gap-2 gap-1 cursor-pointer md:w-30 rounded-2xl shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]"
            >
              <FaGithub className="text-purple-200/90 font-hero md:text-lg text-sm" />
              <p className="text-purple-200/90 font-hero md:text-lg text-xs">GitHub</p>
            </motion.a>

            <motion.a
              variants={item}
              whileHover={{ scale: 1.05, y: -3 }}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 cursor-pointer flex items-center justify-center h-8 w-22 md:h-9 md:gap-2 gap-1 md:w-31 rounded-2xl shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]"
            >
              <FaLinkedin className="text-purple-200/90 font-hero md:text-lg text-sm" />
              <p className="text-purple-200/90 font-hero md:text-lg text-xs">LinkedIn</p>
            </motion.a>

            <motion.a
              variants={item}
              whileHover={{ scale: 1.05, y: -3 }}
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 flex cursor-pointer items-center justify-center h-8 w-22 md:h-9 md:gap-2 gap-1 md:w-30 rounded-2xl shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]"
            >
              <MdEmail size={18} className="text-purple-200/90 font-hero md:text-lg text-sm" />
              <p className="text-purple-200/90 font-hero md:text-lg text-xs">Email</p>
            </motion.a>

            <motion.a
              variants={item}
              whileHover={{ scale: 1.05, y: -3 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 flex items-center cursor-pointer justify-center h-8 w-22 md:h-9 md:gap-2 gap-1 md:w-30 rounded-2xl shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]"
            >
              <FaWhatsapp size={18} className="text-purple-200/90 font-hero md:text-lg text-sm" />
              <p className="text-purple-200/90 font-hero md:text-lg text-xs">WhatsApp</p>
            </motion.a>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={item}
            onSubmit={handlesubmit}
            className="border hover:border-purple-200/20 border-purple-200/30 mt-3 p-2 md:mt-5 w-full rounded-xl"
          >

            <div className="grid md:grid-cols-2 gap-2 grid-cols-1 w-full">

              <div className="inline-flex text-sm md:text-xl font-hero h-7 text-purple-200 md:h-10 border rounded-xl border-purple-200/30 pl-2 items-center gap-1 md:gap-2">
                <User className="w-4 h-4 md:w-6 md:h-6" />
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className="outline-none"
                  placeholder="Enter your Name"
                />
              </div>

              <div className="inline-flex md:text-xl text-sm font-hero h-7 text-purple-200 md:h-10 border rounded-xl border-purple-200/30 pl-2 items-center gap-1 md:gap-2">
                <Mail className="w-4 h-4 md:w-6 md:h-6" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="outline-none"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="inline-flex md:text-xl text-sm font-hero w-full md:mt-2 text-purple-200 h-15 md:h-20 mt-2 border rounded-xl border-purple-200/30 md:p-2 items-start p-1 pl-2 gap-1 md:gap-2">
              <MessageCircleMore className="w-4 h-4 md:w-6 md:h-6 mt-0.5" />
              <textarea
                required
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                className="w-full bg-transparent outline-none resize-none placeholder:text-purple-200/40"
                placeholder="Your message..."
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex md:text-lg md:mt-3 md:mb-3 md:p-2 md:pl-3 md:pr-3 font-hero text-white mt-2 bg-purple-600 text-sm p-2 ml-1 gap-1 rounded-xl hover:bg-purple-700"
            >
              <Send className="pt-1 w-4 h-4 md:w-6 md:h-6" />
              <button
                disabled={loading}
                className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending...." : "Send Message "}
              </button>
            </motion.div>

            {succ_message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-xs md:text-base font-hero mt-2"
              >
                {succ_message}
              </motion.p>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs md:text-base font-hero mt-2"
              >
                {error}
              </motion.p>
            )}

          </motion.form>

        </motion.div>
      </motion.div>

      {/* Location and Languages */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col items-center justify-center gap-2 md:gap-4 sm:gap-8 mb-10 w-full text-purple-200/80 text-xs font-hero sm:text-base"
      >

        <motion.div variants={item} className="flex items-center md:gap-3 gap-1">
          <MapPin className="md:w-5 h-4 w-4 md:h-5 shrink-0 text-purple-400" />
          <span>Karachi, Pakistan</span>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-1 md:gap-3">
          <Globe className="md:w-5 md:h-5 h-4 w-4 shrink-0 text-purple-400" />
          <span>Languages: English, Urdu</span>
        </motion.div>

      </motion.div>

    </div>
  )
}

export default ContactSection