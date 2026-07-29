import SectionLabel from "./SectionLabel";
import { skills, education } from "@/lib/data";

export default function Skills() {
  return (
    <section className="py-10">
      <SectionLabel>Skills, Certifications & Education</SectionLabel>
      <div className="grid grid-cols-1 gap-8 border-t border-border pt-6 sm:grid-cols-2">
        <div>
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
        <div>
          <h3 className="text-sm font-medium">Education</h3>
          <div className="mt-3 space-y-4">
            {education.map((item) => (
              <div key={item.school}>
                <p className="text-sm font-medium">{item.school}</p>
                <p className="text-sm text-muted">{item.degree}</p>
                <p className="text-xs text-muted">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
