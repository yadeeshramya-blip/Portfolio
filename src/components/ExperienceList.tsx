import SectionLabel from "./SectionLabel";

type Entry = {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
};

export default function ExperienceList({
  id,
  label,
  entries,
}: {
  id?: string;
  label: string;
  entries: Entry[];
}) {
  return (
    <section id={id} className="py-10">
      <SectionLabel>{label}</SectionLabel>
      <div className="divide-y divide-border border-t border-border">
        {entries.map((entry) => (
          <div key={entry.title + entry.subtitle} className="py-6">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-medium">{entry.title}</h3>
                <p className="text-sm text-muted">{entry.subtitle}</p>
              </div>
              <span className="shrink-0 text-sm text-muted">{entry.period}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {entry.points.map((point) => (
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
