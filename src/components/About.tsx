import SectionHeader from "./SectionHeader";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <SectionHeader
            label="About"
            title="Building Real Solutions"
            description="A practical builder who turns ideas into working products."
          />
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="max-w-3xl mx-auto space-y-6 text-surface-300 text-lg leading-relaxed">
            <p>
              I&apos;m a full-stack developer focused on building web
              applications and business tools that deliver real value. I work
              across the entire stack — from responsive frontends with React and
              Next.js to backend APIs, databases, and deployment infrastructure.
            </p>
            <p>
              I leverage AI tools throughout my development workflow, not as a
              gimmick but as a practical multiplier for shipping better products
              faster. From AI-powered features in my applications to AI-assisted
              development processes, I embrace modern tools that make engineering
              more effective.
            </p>
            <p>
              My work spans SaaS platforms, business operations systems,
              e-commerce stores, and client websites. I care about clean
              architecture, maintainable code, and solving problems that matter.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "10+", label: "Projects Built" },
              { value: "5+", label: "Live Deployments" },
              { value: "Full", label: "Stack Coverage" },
              { value: "AI", label: "Enhanced Workflow" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-surface-900/50 border border-surface-800/50"
              >
                <div className="text-2xl font-bold text-primary-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-surface-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
