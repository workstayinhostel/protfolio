import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Hero({ onWorkWithMe }) {
  return (
    <section id="about" className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 md:pt-44">
      {/* soft ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-amber-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="glass-chip">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for remote work
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Full-Stack Developer <span className="italic text-zinc-500">&amp;</span> System Architect
          </h1>

          <div className="glass mt-6 max-w-xl overflow-hidden rounded-2xl border border-zinc-700/10 bg-[#1e1e1e] p-4 shadow-xl">
            <div className="mb-3 flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 text-sm leading-7 sm:text-base">
              <span className="select-none text-right text-zinc-500" aria-hidden="true">01</span>
              <code className="break-words text-[#d4d4d4]">
                <span className="text-[#569cd6]">const </span>
                <span className="text-[#9cdcfe]">whatIBuild </span>
                <span className="text-[#d4d4d4]">= </span>
                <span className="text-[#ce9178]">
                  "I build landing pages, simple web apps, secure admin panels and scalable end-to-end systems, from the first wireframe to a deployed product you can keep growing."
                </span>
                <span className="text-[#d4d4d4]">;</span>
              </code>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-ghost">
              View My Work <ArrowRight size={16} />
            </a>
            <button onClick={onWorkWithMe} className="btn-primary">
              Work With Me
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} className="glass-chip">
              Email
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="glass-chip">
              Instagram <ArrowUpRight size={14} />
            </a>
            {profile.facebook && (
              <a href={profile.facebook} target="_blank" rel="noreferrer" className="glass-chip">
                Facebook <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        <ProfileFrame />
      </div>
    </section>
  );
}

function ProfileFrame() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] p-3">
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white to-stone-100">
          {/* Placeholder shown until a photo is added */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-zinc-500">
            <p className="font-serif text-2xl text-zinc-800">Your photo here</p>
            <p className="mt-3 text-sm">
              Save your photo as <code className="rounded bg-white px-1.5 py-0.5">public/images/profile.jpg</code> and refresh.
            </p>
          </div>
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      <div className="glass absolute -bottom-5 -left-3 rounded-2xl px-4 py-3 sm:-left-8">
        <p className="text-sm font-medium">Self-founded startup</p>
        <p className="text-xs text-zinc-500">Founder of StayInHostel</p>
      </div>
    </div>
  );
}
