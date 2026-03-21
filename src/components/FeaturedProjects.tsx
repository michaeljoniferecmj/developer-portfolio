import { featuredProjects } from "@/data/projects";
import SectionHeader from "./SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";
import AnimateIn from "./AnimateIn";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <SectionHeader
            label="Featured Work"
            title="Projects That Matter"
            description="Selected projects that showcase full-stack architecture, AI integration, and real-world problem solving."
          />
        </AnimateIn>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <AnimateIn key={project.slug}>
              <FeaturedProjectCard project={project} index={index} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
