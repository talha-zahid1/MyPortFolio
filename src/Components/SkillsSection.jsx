import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import pythonlogo from '../assets/pythonlogo.svg'
import javalogo from '../assets/javalogo.svg'
import mysqllogo from '../assets/mysqllogo.svg'
import nodejslogo from '../assets/nodejslogo.svg'
import cpluspluslogo from '../assets/cpluspluslogo.svg'
import reactlogo from '../assets/reactlogo.svg'
import javascriptlogo from '../assets/javascriptlogo.svg'
import SkillsOrbit from '../Cards/SkillsOrbit'

import Specialization from '../Cards/Specialization'

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

const SkillsSection = () => {
  
  const [spining, setspining] = useState(null)
  const timerRef = useRef(null)
  const handlespin=(name)=>{
    clearTimeout(timerRef.current)
  setspining(name)
  timerRef.current = setTimeout(() => setspining(null), 2000)
  }

  return (
    <motion.div
      id='skills'
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className='flex  flex-col justify-center items-center flex-1  w-full mt-10 md:mt-20'
    >
      <motion.h1 variants={item} className='md:text-6xl text-3xl tracking-wider text-white font-hero'>
        Skills <span className='text-purple-400'>&</span> Technologies
      </motion.h1>
      <motion.div variants={item} style={{ perspective: '800px'}} className='md:mt-15 m-7 gap-7 md:gap-10  flex items-center flex-wrap justify-center'>
        <img src={pythonlogo} alt="pythonlogo"  className={`md:w-20 md:h-20 w-10 h-10 cursor-pointer ${spining === 'python' ? 'spin-3d' : ''}`} onClick={()=>handlespin('python')} onMouseEnter={()=>handlespin('python')} />
        <img src={reactlogo} alt="reactlogo"  className={`md:w-20 md:h-20 w-10 h-10 cursor-pointer ${spining === 'react' ? 'spin-3d' : ''}`} onClick={()=>handlespin('react')} onMouseEnter={()=>handlespin('react')} />
        <img src={javalogo} alt="javalogo"  className={`md:w-20 md:h-20 w-10 h-10 cursor-pointer ${spining === 'java' ? 'spin-3d' : ''}`} onClick={()=>handlespin('java')} onMouseEnter={()=>handlespin('java')}/>
        <img src={cpluspluslogo} alt="cpluspluslogo"  className={`md:w-20 md:h-20 w-10 h-10 cursor-pointer ${spining === 'cpp' ? 'spin-3d' : ''}`} onClick={()=>handlespin('cpp')} onMouseEnter={()=>handlespin('cpp')} />
        <img src={mysqllogo} alt="mysqllogo"  className={`md:w-20 md:h-20 w-10 h-10 cursor-pointer ${spining === 'mysql' ? 'spin-3d' : ''}`} onClick={()=>handlespin('mysql')} onMouseEnter={()=>handlespin('mysql')} />
        <img src={nodejslogo} alt="nodejslogo"  className={`md:w-20 md:h-20 w-10 h-10 cursor-pointer ${spining === 'node' ? 'spin-3d' : ''}`} onClick={()=>handlespin('node')} onMouseEnter={()=>handlespin('node')} />
        <img src={javascriptlogo} alt="javascriptlogo"  className={`md:w-20 md:h-20 w-10 h-10 cursor-pointer ${spining === 'js' ? 'spin-3d' : ''}`} onClick={()=>handlespin('js')} onMouseEnter={()=>handlespin('js')}/>
      </motion.div>
      <SkillsOrbit></SkillsOrbit>
      {/* Specialization */}
      <Specialization></Specialization>
        
    </motion.div>
  )
}

export default SkillsSection