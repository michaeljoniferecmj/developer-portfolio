import type { Project } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export default function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
    >
      {/* Screenshot / Preview */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative aspect-video bg-surface-800/50 rounded-xl border border-surface-700/50 overflow-hidden">
            {project.screenshots[0] ? (
              <img
                src={project.screenshots[0]}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-surface-600 mb-2">
                    {project.title.charAt(0)}
                  </div>
                  <span className="text-sm text-surface-600">Preview</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-surface-400 leading-relaxed">
          {project.summary}
        </p>

        {/* Problem & Solution */}
        <div className="mt-6 space-y-4">
          <div>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
              The Problem
            </span>
            <p className="mt-1 text-sm text-surface-400">{project.problem}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
              The Solution
            </span>
            <p className="mt-1 text-sm text-surface-400">{project.solution}</p>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs bg-primary-500/10 text-primary-300 rounded-md border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key features */}
        <ul className="mt-6 space-y-2">
          {project.features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-surface-300"
            >
              <svg
                className="w-4 h-4 text-primary-400 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-8 flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-800 hover:bg-surface-700 text-white text-sm rounded-lg border border-surface-700/50 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-sm rounded-lg transition-colors"
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
    </div>
  );
}
