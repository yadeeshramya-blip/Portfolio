import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-xs text-muted">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
