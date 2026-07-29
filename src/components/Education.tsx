import SectionLabel from "./SectionLabel";
import { education } from "@/lib/data";

export default function Education({ id }: { id?: string }) {
  return (
    <section id={id} className="py-10">
      <SectionLabel>Education</SectionLabel>
      <div className="divide-y divide-border border-t border-border">
        {education.map((item) => (
          <div key={item.school} className="py-6">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-medium">{item.school}</h3>
                <p className="text-sm text-muted">{item.degree}</p>
              </div>
              {item.period && (
                <span className="shrink-0 text-sm text-muted">{item.period}</span>
              )}
            </div>
            {item.description && (
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
