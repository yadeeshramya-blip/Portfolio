import SectionLabel from "./SectionLabel";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="py-10">
      <SectionLabel>Skills & Certifications</SectionLabel>
      <div className="border-t border-border pt-6">
        <h3 className="text-sm font-medium">Technical Skills</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.technical.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
        <h3 className="mt-6 text-sm font-medium">Certifications</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
