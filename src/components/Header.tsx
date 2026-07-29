import { profile } from "@/lib/data";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <span className="font-medium tracking-tight">{profile.name}</span>
      <span className="text-sm text-muted">{profile.location}</span>
    </header>
  );
}
