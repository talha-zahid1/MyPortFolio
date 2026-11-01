import {Mail,Leaf,ShieldHalf,Waypoints,Gauge,Atom,Layers,DatabaseZap,CodeXml} from 'lucide-react'
import { motion } from 'framer-motion'

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

const Specialization = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className='md:h-100 md:ml-20 h-50 w-85 md:w-230 mb-10   flex p-5 gap-2 md:gap-3 md:p-15 flex-1 flex-col'
    >
        <motion.h3 variants={item} className='font-hero text-violet-400  uppercase text-xs tracking-widest md:text-2xl'>Specialization</motion.h3>
        <motion.h1 variants={item} className='text-white tracking-widest text-2xl md:text-4xl font-hero'>Full-Stack Developer</motion.h1>
        <motion.p variants={item} className='text-purple-200/60 text-xs md:text-xl font-hero'>Building scalable Python-powered backends and modern React frontends to create high-performance, secure, and user-friendly web applications.</motion.p>
            
        <div className='grid grid-cols-1  items-center justify-center w-fit md:gap-14 md:grid-cols-2 md:mt-5'>
          <motion.div variants={container} className='h-50 grid grid-cols-1  mt-2 md:mt-0 items-start w-90'>
            {/* 1 */}
            <motion.div variants={item} className='md:p-3 pt-2 inline-flex justify-start gap-2 items-center md:gap-3'>
              <div className='border border-purple-600 flex items-center justify-center md:h-9 md:w-9 h-6 w-6 rounded-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]'>
                <CodeXml className='text-purple-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              </div>
              <p className='text-purple-200/80 font-hero md:text-xl text-sm '>Scalable Web Applications</p>
            </motion.div>
            {/* 2 */}
            <motion.div variants={item} className='md:p-3 pt-2 inline-flex justify-start gap-2 items-center md:gap-3'>
              <div className='border border-purple-600 flex items-center justify-center md:h-9 md:w-9 h-6 w-6 rounded-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]'>
                <DatabaseZap className='text-purple-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              </div>
              <p className='text-purple-200/80 font-hero md:text-xl text-sm '>Django & FastAPI Backends</p>
            </motion.div>
            {/* 3 */}
            <motion.div variants={item} className='md:p-3 pt-2 inline-flex justify-start gap-2 items-center md:gap-3'>
              <div className='border border-purple-600 flex items-center justify-center md:h-9 md:w-9 h-6 w-6 rounded-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]'>
                <Layers className='text-purple-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              </div>
              <p className='text-purple-200/80 font-hero md:text-xl text-sm '>PostgreSQL & Database Design</p>
            </motion.div>
            {/* 4 */}
            <motion.div variants={item} className='md:p-3 pt-2 inline-flex justify-start gap-2 items-center md:gap-3'>
              <div className='border border-purple-600 flex items-center justify-center md:h-9 md:w-9 h-6 w-6 rounded-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]'>
                <Gauge className='text-purple-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              </div>
              <p className='text-purple-200/80 font-hero md:text-xl text-sm '>Performance Optimization</p>
            </motion.div>
          </motion.div>

          <motion.div variants={container} className='h-50 grid grid-cols-1  mt-2 md:mt-0 items-start w-95'>
            {/* 1 */}
            <motion.div variants={item} className='md:p-3 pt-2 inline-flex justify-start gap-2 items-center md:gap-3'>
              <div className='border border-purple-600 flex items-center justify-center md:h-9 md:w-9 h-6 w-6 rounded-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]'>
                <Atom className='text-purple-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              </div>
              <p className='text-purple-200/80 font-hero md:text-xl text-sm '>Modern Frontend(React & Tailwind CSS)</p>
            </motion.div>
            {/* 2 */}
            <motion.div variants={item} className='md:p-3 pt-2 inline-flex justify-start gap-2 items-center md:gap-3'>
              <div className='border border-purple-600 flex items-center justify-center md:h-9 md:w-9 h-6 w-6 rounded-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]'>
                <Waypoints className='text-purple-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              </div>
              <p className='text-purple-200/80 font-hero md:text-xl text-sm '>State Management(Redux)</p>
            </motion.div>
            {/* 3 */}
            <motion.div variants={item} className='md:p-3 pt-2 inline-flex justify-start gap-2 items-center md:gap-3'>
              <div className='border border-purple-600 flex items-center justify-center md:h-9 md:w-9 h-6 w-6 rounded-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]'>
                <ShieldHalf className='text-purple-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              </div>
              <p className='text-purple-200/80 font-hero md:text-xl text-sm '>JWT Authentication & RBAC</p>
            </motion.div>
            {/* 4 */}
            <motion.div variants={item} className='md:p-3 pt-2 inline-flex justify-start gap-2 items-center md:gap-3'>
              <div className='border border-purple-600 flex items-center justify-center md:h-9 md:w-9 h-6 w-6 rounded-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.6),0_0_12px_rgba(168,85,247,0.4)]'>
                <Leaf className='text-purple-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              </div>
              <p className='text-purple-200/80 font-hero md:text-xl text-sm '>Clean & Maintainable Code</p>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
  )
}

export default Specialization