import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div className="relative mx-auto max-w-3xl">
        {/* Timeline bar */}
        <div
          className="pointer-events-none absolute bottom-0 left-[1.125rem] top-2 w-px bg-gradient-to-b from-purple-500/90 via-cyan-500/50 to-neutral-700 md:left-1/2 md:-translate-x-px"
          aria-hidden
        />

        <ul className="relative space-y-0">
          {EXPERIENCES.map((experience, index) => {
            const isCurrent = experience.year
              .toLowerCase()
              .includes("present");

            return (
              <motion.li
                key={`${experience.company}-${experience.year}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative pb-14 last:pb-2 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-0 md:pb-16"
              >
                {/* Mobile / md+: node on the bar */}
                <div className="absolute left-0 top-1 flex md:left-1/2 md:top-2 md:-translate-x-1/2">
                  <span
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-neutral-950 bg-neutral-950 ${
                      isCurrent
                        ? "ring-2 ring-purple-400/80 ring-offset-2 ring-offset-neutral-950"
                        : ""
                    }`}
                  >
                    <span
                      className={`h-3 w-3 rounded-full ${
                        isCurrent
                          ? "bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.7)]"
                          : "bg-cyan-500/80"
                      }`}
                    />
                  </span>
                </div>

                {/* Alternating: odd = left column text, even = right (desktop) */}
                <div
                  className={`flex flex-col gap-3 pl-14 md:pl-0 ${
                    index % 2 === 0
                      ? "md:col-start-1 md:row-start-1 md:items-end md:text-right md:pr-10"
                      : "md:col-start-3 md:row-start-1 md:items-start md:pl-10"
                  }`}
                >
                  <img
                    src={experience.image}
                    alt={`${experience.company} logo`}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-xl border border-neutral-800 bg-white object-contain p-1.5 shadow-md shadow-black/30"
                  />
                  <p className="mb-0 text-xs font-medium uppercase tracking-wide text-neutral-500">
                    {experience.year}
                  </p>
                  <h3 className="text-base font-semibold text-neutral-100">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-purple-200/90">{experience.company}</p>
                  {isCurrent && (
                    <span className="mt-2 inline-block rounded-full bg-purple-950/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-300 ring-1 ring-purple-500/30">
                      Current
                    </span>
                  )}
                </div>

                {/* Spacer column for the bar on md+ */}
                <div
                  className="hidden md:col-start-2 md:row-start-1 md:block md:w-px"
                  aria-hidden
                />

                <div
                  className={`mt-4 pl-14 md:mt-0 md:pl-0 ${
                    index % 2 === 0
                      ? "md:col-start-3 md:row-start-1 md:pl-10"
                      : "md:col-start-1 md:row-start-1 md:pr-10"
                  }`}
                >
                  <p className="mb-4 text-left text-sm leading-relaxed text-neutral-400">
                    {experience.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
