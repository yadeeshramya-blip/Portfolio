import SectionLabel from "./SectionLabel";
import { skills } from "@/lib/data";

const groups = [
  { heading: "Methods", items: skills.methods },
  { heading: "Tools", items: skills.tools },
  { heading: "Certifications", items: skills.certifications },
];

export default function Skills({ id }: { id?: string }) {
  return (
    <section id={id} className="py-10">
      <SectionLabel>Skills and certifications</SectionLabel>
      <div className="border-t border-border pt-6">
        {groups.map((group, index) => (
          <div key={group.heading} className={index > 0 ? "mt-6" : undefined}>
            <h3 className="text-sm font-medium">{group.heading}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
