import SectionHeader from "./SectionHeader";
import AnimateIn from "./AnimateIn";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "HTML/CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Fastify", "Next.js API Routes", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "Prisma", "Supabase", "MongoDB", "Redis"],
  },
  {
    category: "Dev Tools",
    skills: ["Git", "Docker", "Vite", "Turborepo", "Vercel", "Nginx"],
  },
  {
    category: "AI / Automation",
    skills: [
      "OpenAI API",
      "Anthropic API",
      "Google Gemini",
      "AI-Assisted Dev",
    ],
  },
  {
    category: "Libraries",
    skills: [
      "shadcn/ui",
      "Recharts",
      "React Hook Form",
      "Zod",
      "Stripe",
      "BullMQ",
      "NextAuth",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <SectionHeader
            label="Tech Stack"
            title="Skills & Technologies"
            description="The tools and technologies I use to build modern applications."
          />
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <AnimateIn key={group.category} delay={i * 0.05}>
              <div className="p-6 rounded-xl bg-surface-900/50 border border-surface-800/50 hover:border-surface-700/50 transition-colors h-full">
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-surface-800/80 text-surface-300 rounded-lg border border-surface-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
