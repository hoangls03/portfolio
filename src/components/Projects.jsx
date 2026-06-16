import React from "react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS, CONTACT, GITHUB_PROFILE_URL } from "../constants";
import { motion } from "framer-motion";

function requestAccessMailto(email, projectTitle) {
  const subject = `Request to view private project: ${projectTitle}`;
  const body = `Hi,\n\nI'd like to request access to learn more about your project "${projectTitle}" (from your portfolio).\n\nThanks!`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const Projects = () => {
  const notifyEmail = CONTACT.email;

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => {
          const isPrivate = Boolean(project.isPrivate);
          const hasRepo = Boolean(project.githubUrl);

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-black/30 transition-colors hover:border-neutral-700"
            >
              <div className="relative h-32 w-full shrink-0 overflow-hidden bg-neutral-950 sm:h-36">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                {isPrivate && (
                  <span className="absolute right-3 top-3 rounded-full bg-neutral-950/90 px-2.5 py-1 text-xs font-medium text-amber-200/95 ring-1 ring-amber-500/40">
                    Private
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold text-neutral-100">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-neutral-950 px-2.5 py-1 text-xs font-medium text-purple-300 ring-1 ring-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-1 border-t border-neutral-800 pt-4">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-500">
                    GitHub
                  </p>
                  {hasRepo && !isPrivate ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
                    >
                      <FaGithub className="text-lg" />
                      View repository
                    </a>
                  ) : isPrivate ? (
                    <div className="flex flex-col gap-3">
                      <p className="text-xs text-neutral-500">
                        This repository is private. Request access by email, or reach
                        out on GitHub.
                      </p>
                      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                        <a
                          href={requestAccessMailto(notifyEmail, project.title)}
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-900/60 bg-cyan-950/30 px-3 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-600/60 hover:bg-cyan-950/50"
                        >
                          Request access (email)
                        </a>
                        <a
                          href={GITHUB_PROFILE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
                        >
                          <FaGithub className="text-lg" />
                          GitHub profile
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-neutral-500">
                      No public repository link yet.
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
