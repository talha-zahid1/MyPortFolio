import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaPython, FaJava, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiCplusplus, SiSqlite } from "react-icons/si";

// ---------- Rings (ellipses) ----------
// Sab rings ka center ek hi hai: (CX, CY). Sirf rx (width) aur ry (height) alag hain.
const CX = 500;
const CY = 270;

const rings = [
  { rx: 440, ry: 130 },
  { rx: 380, ry: 110 },
  { rx: 320, ry: 90 },
];

// Ellipse ka path (icon is par chalega)
const ellipsePath = (rx, ry) =>
  `M ${CX - rx} ${CY} a ${rx} ${ry} 0 1 0 ${rx * 2} 0 a ${rx} ${ry} 0 1 0 ${-rx * 2} 0`;

// ---------- Icons ----------
// ring: konsi ring par (0,1,2) | dur: ek chakkar kitne second mein | delay: shuru kahan se
const orbitIcons = [
  { Icon: FaReact, ring: 0, dur: 40, delay: 0 },
  { Icon: FaLinkedin, ring: 0, dur: 40, delay: 10 },
  { Icon: FaPython, ring: 0, dur: 40, delay: 20 },
  { Icon: FaJava, ring: 0, dur: 40, delay: 30 },
  { Icon: FaJs, ring: 1, dur: 32, delay: 0 },
  { Icon: FaGithub, ring: 1, dur: 32, delay: 11 },
  { Icon: SiCplusplus, ring: 1, dur: 32, delay: 22 },
  { Icon: FaNodeJs, ring: 2, dur: 26, delay: 0 },
  { Icon: FaInstagram, ring: 2, dur: 26, delay: 6.5 },
  { Icon: FaFacebook, ring: 2, dur: 26, delay: 13 },
  { Icon: SiSqlite, ring: 2, dur: 26, delay: 19.5 },
];

// ---------- Upar se aati lines ----------
const topLines = [95, 230, 365, 500, 635, 770, 905]; // 7 skills = 7 lines (135px gap)

export default function SkillsOrbit() {
  // Mobile par SVG chhota ho jata hai, is liye icons bade rakhte hain
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const iconSize = isMobile ? 44 : 24;

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="w-full overflow-hidden pb-16"
    >
      <svg
        viewBox="0 0 1000 420"
        className="w-full max-w-[1000px] mx-auto h-auto"
        role="img"
        aria-label="Tech stack orbiting around my logo"
      >
        <defs>
          {/* Glow ke liye radial gradient */}
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>

          {/* Beech ke circle ka gradient */}
          <linearGradient id="orb" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e1065" />
            <stop offset="100%" stopColor="#7e3fb8" />
          </linearGradient>
        </defs>

        {/* 1. Upar ki lines (sirf desktop par) */}
        <g className="hidden md:inline">
        {topLines.map((x) => (
          <path
            key={x}
            d={`M ${x} 0 C ${x} 60, ${CX} 50, ${CX} 125`}
            fill="none"
            stroke="#7c3aed"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />
        ))}
        </g>

        {/* 2. Glow (circle ke peeche) */}
        <ellipse cx={CX} cy={CY - 30} rx="330" ry="190" fill="url(#glow)" />

        {/* 3. Rings */}
        {rings.map((r, i) => (
          <ellipse
            key={i}
            cx={CX}
            cy={CY}
            rx={r.rx}
            ry={r.ry}
            fill="none"
            stroke="#8b5cf6"
            strokeOpacity={0.55 - i * 0.1}
            strokeWidth="1.2"
          />
        ))}

        {/* 4. Beech ka circle */}
        <circle cx={CX} cy={CY - 70} r="85" fill="url(#orb)" />

        <text
          x={CX}
          y={CY - 70}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="46"
          fontWeight="600"
        >
          MT<tspan fill="#a855f7">.</tspan>
        </text>

        {/* 5. Ghoomte hue icons */}
        {orbitIcons.map(({ Icon, ring, dur, delay }, i) => (
          <g key={i}>
            <animateMotion
              dur={`${dur}s`}
              begin={`-${delay}s`}
              repeatCount="indefinite"
              path={ellipsePath(rings[ring].rx, rings[ring].ry)}
            />
            <Icon x={-iconSize / 2} y={-iconSize / 2} size={iconSize} color="#7c3aed" />
          </g>
        ))}
      </svg>
    </motion.section>
  );
}