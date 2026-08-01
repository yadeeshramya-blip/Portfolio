import { Mail } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { profile } from "@/lib/data";

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Contact({ id }: { id?: string }) {
  return (
    <section id={id} className="py-10">
      <SectionLabel>Contact</SectionLabel>
      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm font-medium hover:text-accent"
          >
            <Mail size={16} />
            Send me an email
          </a>
        </div>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted transition-colors hover:text-accent"
        >
          <LinkedInIcon size={20} />
        </a>
      </div>
    </section>
  );
}
