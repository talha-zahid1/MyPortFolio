import Arrow from '../assets/Arrow.svg'
import Picture from '../assets/Picture.png'
import { Mail, BriefcaseBusiness, GraduationCap, Dot } from 'lucide-react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const line = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6 } },
}

const HeroSection = () => {
  return (
    <div
      id="Home"
      className="relative overflow-x-clip text-white flex flex-col items-center flex-1 w-full  px-4 md:px-8 py-15 mt-[10%] md:mt-0 md:py-12"
    >
      <div className="w-full max-w-[860px] mx-auto">
        {/* Personal Info */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-6 md:gap-16 pt-14 md:pt-36">
          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative shrink-0 h-[200px] w-[165px] md:h-[270px] md:w-[220px]"
          >
            
            <div className="absolute bottom-full left-0 w-full  md:mb-2 flex flex-col z-20">
              <h2 className="whitespace-nowrap font-hero -translate-x-[30%] md:translate-x-0 md:mb-0 mb-[28%]  md:ml-[135%] tracking-wide text-xl md:text-3xl">
                Hello! I Am <span className="text-purple-600 pl-2">Muhammad Talha</span>
              </h2>
              <img
                src={Arrow}
                alt="Arrow"
                className="ml-[80%] hidden md:flex mb-[20%]  md:mt-2 h-[25px] w-[45px] md:h-[60px] md:w-[100px]"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[160%] blur-2xl opacity-90 z-0 bg-[radial-gradient(circle,#d9c9f5_0%,#7c4dcc_20%,#3b1280_45%,transparent_70%)]"></div>
            <img src={Picture} className="relative z-10 w-full h-full object-cover" alt="profile" />
          </motion.div>

          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center text-center md:items-start md:text-left justify-center md:mt-0 mt-[15%] gap-1 md:gap-4 flex-1 min-w-0 max-w-[560px] mx-auto md:mx-0"
          >
            <motion.p variants={item} className="font-hero text-xl md:text-4xl">
              A Developer who
            </motion.p>
            <motion.h1 variants={item} className="font-hero text-3xl md:text-5xl lg:text-6xl break-words">
              Codes both sides of the screen...
            </motion.h1>
            <motion.p variants={item} className="font-hero break-words text-xl md:text-4xl">
              Because looks and logic belong together.
              
            </motion.p>

            <motion.div variants={item}  className="grid grid-cols-2 gap-1.5 md:gap-4 pt-2 w-full max-w-[360px] mx-auto md:mx-0">
              <a
                href="#Experience"
                className="md:h-13 h-6 text-xs border hover:bg-purple-600 cursor-pointer flex items-center justify-center whitespace-nowrap rounded-xl border-purple-600 shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)] font-hero md:text-xl bg-purple-500 gap-1 md:gap-2 text-purple-200"
              >
                <BriefcaseBusiness className="h-3 w-4 md:h-6 md:w-7" />
                View Work
              </a>
              <a
                href="#Contact"
                className="md:h-13 h-6 text-xs border hover:bg-purple-200/10 cursor-pointer flex items-center justify-center whitespace-nowrap rounded-xl border-purple-600 shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)] font-hero md:text-xl gap-1 md:gap-2 text-purple-200"
              >
                <Mail className="h-3 w-4 md:h-6 md:w-7" />
                Contact
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Intro */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-start md:p-0 p-10 mt-2 md:mt-24 gap-2 md:gap-4 mx-auto max-w-3xl"
        >
          <motion.h1 variants={item} className="font-hero md:text-5xl text-2xl tracking-wider">
            A Full-Stack Developer !
          </motion.h1>
          <motion.p variants={item} className="font-hero md:text-2xl text-sm">
            With a strong foundation in Python backend development, I build scalable, high-performance systems. I'm expanding into React and Tailwind CSS to create seamless, user-friendly experiences that bring powerful engineering and modern design together.
          </motion.p>
          <motion.div
            variants={line}
            className="h-px w-full md:mt-3 my-2 md:opacity-35 opacity-30 bg-purple-400 origin-left"
          ></motion.div>
          <motion.div variants={item} className="flex gap-2 md:gap-3 md:items-center">
            <GraduationCap className="text-purple-400  shrink-0 w-5 h-5 md:w-8 md:h-8" />
            <p className="font-hero text-purple-400 text-sm md:text-2xl">
              A 3rd-year Software Engineering Student
              <span className="inline-flex items-center align-middle whitespace-nowrap">
                <Dot className="md:w-8 md:h-8 w-6 h-6 shrink-0 -mx-2" />
                University of Karachi
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection