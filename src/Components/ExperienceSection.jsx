import Projects from '../Cards/Projects'
import { motion } from 'framer-motion'

const ExperienceSection = () => {
  return (
    <div id="Experience" className="flex-1 w-full">
      
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.9 }}
        className="flex items-center md:gap-3 gap-2 flex-col justify-center md:mt-10"
      >
        <div className="inline-flex items-center gap-2 text-sm uppercase font-hero text-purple-600 md:text-lg tracking-wider">
          <div className="h-px md:w-18 w-9 shadow-[inset_0_0_30px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)] bg-purple-600"></div>
          My Projects
          <div className="h-px md:w-18 w-9 shadow-[inset_0_0_30px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)] bg-purple-600"></div>
        </div>

        <h1 className="md:text-6xl text-white text-4xl font-hero">
          Featured <span className="text-purple-600">Work</span>
        </h1>

        <p className="text-purple-200/50 tracking-wider font-hero md:text-lg text-center text-sm px-4">
          Here are some of the projects I've built to learn, solve problems and improve my skills.
        </p>
      </motion.div>

      
      <Projects />
    </div>
  )
}

export default ExperienceSection