import { profile } from "@/lib/data";

const navLinks = [
  { href: "#work-life", label: "Work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#global-engagement", label: "Global" },
  { href: "#approach", label: "Approach" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 -mx-6 bg-background/90 px-6 backdrop-blur-sm">
      <div className="flex items-center justify-between py-6">
        <span className="font-medium tracking-tight">{profile.name}</span>
        <span className="text-sm text-muted">{profile.location}</span>
      </div>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border py-3 text-sm text-muted">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
