import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Footer({ onWorkWithMe }) {
  return (
    <footer id="contact" className="px-5 pb-10 pt-24 sm:px-8">
      <div className="glass-strong mx-auto max-w-6xl rounded-[2rem] p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Let's build something people use.</h2>
            <p className="mt-4 max-w-md text-zinc-600">
              Have a landing page, web app, admin panel or full system in mind? Tell me about it.
            </p>
            <button onClick={onWorkWithMe} className="btn-primary mt-8">
              Work With Me
            </button>
          </div>

          <ul className="space-y-2">
            <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value={`+${profile.whatsappNumber}`}
              href={`https://wa.me/${profile.whatsappNumber}`}
            />
            <ContactRow label="Instagram" value={profile.instagramHandle} href={profile.instagram} />
            <ContactRow
              label="Facebook"
              value={profile.facebook ? 'Facebook profile' : 'Add your URL in src/data/profile.js'}
              href={profile.facebook || undefined}
            />
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-stone-200/80 pt-6 text-sm text-zinc-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Freelance Full-Stack Developer · AI-Powered Solutions · SaaS Development</p>
        </div>
      </div>
    </footer>
  );
}

function ContactRow({ icon: Icon = ArrowUpRight, label, value, href }) {
  const inner = (
    <>
      <span className="glass grid h-10 w-10 shrink-0 place-items-center rounded-full">
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-zinc-500">{label}</span>
        <span className="block break-all font-medium">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-white/60"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4 rounded-2xl p-3 opacity-70">{inner}</div>
      )}
    </li>
  );
}
