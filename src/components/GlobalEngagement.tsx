import SectionLabel from "./SectionLabel";
import { globalEngagement } from "@/lib/data";

export default function GlobalEngagement() {
  return (
    <section className="py-10">
      <SectionLabel>Global & Policy Engagement</SectionLabel>
      <div className="divide-y divide-border border-t border-border">
        {globalEngagement.map((entry) => (
          <div key={entry.org + entry.role} className="py-6">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-medium">{entry.role}</h3>
                <p className="text-sm text-muted">{entry.org}</p>
              </div>
              <span className="shrink-0 text-sm text-muted">{entry.period}</span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
