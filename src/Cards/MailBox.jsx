import React from 'react'
import { motion } from 'framer-motion'

const MailBox = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative h-[254px] w-[235px] overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(99,60,200,0.18), transparent 60%)",
      }}
    >
      {/* Sparkles */}
      <motion.svg
        viewBox="0 0 24 24"
        className="absolute right-[58px] top-[30px] h-4 w-4 text-violet-500"
        fill="currentColor"
        variants={{
          hidden: { opacity: 0, scale: 0, rotate: -45 },
          show: {
            opacity: 1,
            scale: [0, 1.3, 1],
            rotate: 0,
            transition: { duration: 0.7, delay: 0.5 },
          },
        }}
        animate={{
          y: [0, -5, 0],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        <path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 24 24"
        className="absolute left-[24px] top-[128px] h-3.5 w-3.5 text-violet-500"
        fill="currentColor"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: {
            opacity: 1,
            scale: [0, 1.3, 1],
            transition: { duration: 0.6, delay: 0.8 },
          },
        }}
        animate={{
          y: [0, 4, 0],
          transition: { duration: 2.5, repeat: Infinity },
        }}
      >
        <path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" />
      </motion.svg>

      {/* Ring: Back */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.7, rotate: -25 },
          show: {
            opacity: 1,
            scale: 1,
            rotate: -16,
            transition: { duration: 0.9, delay: 0.2 },
          },
        }}
        className="absolute left-[12px] top-[56px] h-[100px] w-[212px] -rotate-[16deg] rounded-[50%] border border-violet-500/30"
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          y: [35, -5, 0],
          scale: [0.8, 1.04, 1],
        }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        animate={{
          y: [0, -4, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute left-[50px] top-[30px] flex h-[180px] w-[134px] items-center justify-center rounded-[9px] border border-violet-300/15 bg-gradient-to-br from-violet-400/25 via-violet-600/15 to-violet-950/40 shadow-[0_0_40px_rgba(124,77,255,0.25)] backdrop-blur-sm"
        style={{
  transformPerspective: 500,
  rotateX: 6,
  rotateY: 30,
  rotateZ: -18,
}}
      >
        {/* Envelope Tile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="flex h-[58px] w-[72px] items-center justify-center rounded-lg border border-violet-300/30 bg-gradient-to-br from-violet-400/30 to-violet-700/30 shadow-[0_0_24px_rgba(124,77,255,0.45)]"
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="h-9 w-9"
            fill="none"
            stroke="#d9ccff"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="M3.5 7l8.5 6.5L20.5 7" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Ring: Front Arc */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="pointer-events-none absolute left-[12px] top-[56px] h-[100px] w-[212px] -rotate-[16deg] rounded-[50%] border border-transparent border-b-violet-300/50"
      />
    </motion.div>
  )
}

export default MailBox