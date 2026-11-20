import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
];

export default function Navbar({ onWorkWithMe }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5 sm:px-5">
        <a href="#about" className="font-serif text-xl">
          {profile.brand}
        </a>

        <ul className="hidden items-center gap-7 text-sm text-zinc-600 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-zinc-900">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={onWorkWithMe} className="btn-primary hidden sm:inline-flex">
            Work With Me
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="glass grid h-10 w-10 place-items-center rounded-full md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong mx-auto mt-2 max-w-5xl rounded-3xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base hover:bg-white/70"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setOpen(false);
              onWorkWithMe();
            }}
            className="btn-primary mt-3 w-full"
          >
            Work With Me
          </button>
        </div>
      )}
    </header>
  );
}
