"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type NavLink = { href: string; label: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-40 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-0.5 w-5 bg-foreground transition-transform duration-300 ease-in-out ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-foreground transition-opacity duration-200 ease-in-out ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-foreground transition-transform duration-300 ease-in-out ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {mounted &&
        createPortal(
          <>
            <div
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className={`fixed inset-0 z-20 bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />

            <nav
              className={`fixed top-0 right-0 z-30 flex h-dvh w-64 flex-col gap-1 border-l border-border bg-background px-6 pt-24 pb-8 shadow-xl transition-transform duration-300 ease-in-out ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                  className={`rounded-md px-2 py-3 text-base text-muted transition-all duration-300 ease-out hover:bg-black/[.03] hover:text-accent ${
                    open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </>,
          document.body,
        )}
    </div>
  );
}
