import { additionalProjects } from "@/data/projects";
import SectionHeader from "./SectionHeader";
import AnimateIn from "./AnimateIn";

export default function AdditionalProjects() {
  if (additionalProjects.length === 0) return null;

  return (
    <section className="py-24 bg-surface-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <SectionHeader
            label="More Work"
            title="Additional Projects"
            description="Other projects worth checking out."
          />
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {additionalProjects.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 0.1}>
              <div className="group p-6 rounded-xl bg-surface-900/50 border border-surface-800/50 hover:border-surface-700/50 transition-colors h-full">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-surface-400">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-surface-800/80 text-surface-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-surface-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
