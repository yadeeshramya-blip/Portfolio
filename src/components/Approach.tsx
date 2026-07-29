import SectionLabel from "./SectionLabel";
import { approach } from "@/lib/data";

export default function Approach() {
  return (
    <section className="py-10">
      <SectionLabel>Approach</SectionLabel>
      <div className="divide-y divide-border border-t border-border">
        {approach.map((item) => (
          <div key={item.number} className="flex gap-6 py-6">
            <span className="font-mono text-sm text-muted">{item.number}</span>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
