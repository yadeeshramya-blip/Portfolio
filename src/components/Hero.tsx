import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-start gap-10 py-16 sm:flex-row sm:items-center sm:justify-between">
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {profile.tagline}
        </h1>
        <p className="mt-5 text-base leading-7 text-muted">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border bg-black/[.03] sm:h-40 sm:w-40">
        <Image
          src="/headshot.jpg"
          alt={profile.name}
          width={160}
          height={160}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
