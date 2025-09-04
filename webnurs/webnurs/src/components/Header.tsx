import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Header() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-extrabold tracking-tight text-[color:var(--color-accent)]">ohnequatsch</span>
        <span className="text-lg font-extrabold tracking-tight text-[color:var(--color-premium)]/95">deals</span>
      </Link>
      <nav className="flex items-center gap-5 text-sm text-white/80">
        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="/login" className="hover:text-white">Login</Link>
        <Link href="/register" className="hover:text-white">Register</Link>
        <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        <Link href="/admin" className="hover:text-white">Admin</Link>
        <LanguageSwitcher />
      </nav>
    </div>
  );
}
