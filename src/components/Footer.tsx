export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} Ohne Quatsch Deals – Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">Impressum</a>
            <a className="hover:text-white" href="#">Datenschutz</a>
            <a className="hover:text-white" href="#">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
