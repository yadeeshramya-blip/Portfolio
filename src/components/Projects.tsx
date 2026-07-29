import SectionLabel from "./SectionLabel";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="py-10">
      <SectionLabel>Projects</SectionLabel>
      <div className="divide-y divide-border border-t border-border">
        {projects.map((project) => (
          <div key={project.title} className="py-6">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-muted">{project.context}</p>
              </div>
              <span className="shrink-0 text-sm text-muted">{project.period}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {project.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-6 text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
