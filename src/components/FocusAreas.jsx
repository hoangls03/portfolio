import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SiCodeforces } from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import { HiCpuChip } from "react-icons/hi2";
import { MdOutlineSmartToy } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { FOCUS_AREAS } from "../constants";

const ICONS = [SiCodeforces, TbBrain, HiCpuChip, MdOutlineSmartToy, RiStackLine];

const ACCENTS = [
  "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-300",
  "from-violet-500/20 to-violet-500/5 border-violet-500/30 text-violet-300",
  "from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-300",
  "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-300",
  "from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/30 text-fuchsia-300",
];

function FocusCard({ title, description, Icon, accent, index }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -16, y: px * 16 });
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovering(false);
    setGlow({ x: 50, y: 50 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="[perspective:1200px]"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovering ? 1.035 : 1})`,
          transformStyle: "preserve-3d",
          transition: hovering
            ? "transform 0.12s ease-out, box-shadow 0.25s ease"
            : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s ease",
          boxShadow: hovering
            ? "0 20px 40px -12px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)"
            : "0 8px 24px -8px rgba(0,0,0,0.45)",
          "--glow-x": `${glow.x}%`,
          "--glow-y": `${glow.y}%`,
        }}
        className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 ${accent}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: hovering ? 1 : 0,
            background: `radial-gradient(420px circle at var(--glow-x) var(--glow-y), rgba(255,255,255,0.12), transparent 55%)`,
          }}
        />
        <div
          className="relative flex flex-col gap-3"
          style={{ transform: "translateZ(12px)" }}
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={hovering ? { scale: 1.08 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="rounded-xl border border-white/10 bg-black/35 p-2.5 backdrop-blur-sm"
            >
              <Icon className="text-3xl" />
            </motion.span>
            <h3 className="text-lg font-semibold tracking-tight text-neutral-100">
              {title}
            </h3>
          </div>
          <motion.p
            animate={{ color: hovering ? "rgb(212 212 212)" : "rgb(163 163 163)" }}
            transition={{ duration: 0.25 }}
            className="text-sm leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

const FocusAreas = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Focus Areas
      </motion.h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FOCUS_AREAS.map((area, index) => {
          const Icon = ICONS[index];
          return (
            <FocusCard
              key={area.title}
              title={area.title}
              description={area.description}
              Icon={Icon}
              accent={ACCENTS[index]}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FocusAreas;
