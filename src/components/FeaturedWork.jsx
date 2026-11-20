import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { categoryLabels, projects } from '../data/projects.js';
import SectionHeading from './SectionHeading.jsx';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'startup', label: 'Startup' },
  { key: 'client', label: 'Client Projects' },
  { key: 'personal', label: 'Personal Projects' },
];

export default function FeaturedWork() {
  const [active, setActive] = useState('all');

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const startups = visible.filter((p) => p.category === 'startup');
  const others = visible.filter((p) => p.category !== 'startup');

  return (
    <section id="work" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="Things I've built"
          subtitle="Some are for startups I've founded, some are for clients, and some are just for fun."
        />

        {/* Filter tabs */}
        <div role="tablist" className="glass mt-10 inline-flex flex-wrap gap-1 rounded-full p-1">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ease-spring ${
                active === f.key ? 'bg-zinc-900 text-white shadow' : 'text-zinc-600 hover:bg-white/70'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          <AnimatePresence mode="popLayout">
            {startups.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <StartupSpotlight project={p} />
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {others.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-zinc-500">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}

/* ---------- Startup spotlight (distinct featured layout) ---------- */
function StartupSpotlight({ project }) {
  const { title, description, image, tags, liveUrl, repoUrl } = project;
  return (
    <article className="glass-strong card-lift group grid overflow-hidden rounded-[2rem] md:grid-cols-2">
      <ProjectImage src={image} title={title} className="aspect-[4/3] md:aspect-auto md:min-h-[320px]" />
      <div className="flex flex-col justify-center p-7 sm:p-10">
        <span className="glass mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
          ★ Startup Spotlight
        </span>
        <h3 className="font-serif text-4xl sm:text-5xl">{title}</h3>
        <p className="mt-4 leading-relaxed text-zinc-600">{description}</p>
        <TagList tags={tags} />
        <LinkRow liveUrl={liveUrl} repoUrl={repoUrl} />
      </div>
    </article>
  );
}

/* ---------- Standard project card ---------- */
function ProjectCard({ project }) {
  const { title, description, image, tags, liveUrl, repoUrl, category } = project;
  return (
    <article className="glass card-lift group flex h-full flex-col overflow-hidden rounded-3xl">
      <ProjectImage src={image} title={title} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-6">
        <span className="glass mb-3 w-fit rounded-full px-2.5 py-0.5 text-xs font-medium">
          {categoryLabels[category]}
        </span>
        <h3 className="font-serif text-2xl">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{description}</p>
        <TagList tags={tags} />
        <LinkRow liveUrl={liveUrl} repoUrl={repoUrl} />
      </div>
    </article>
  );
}

/* ---------- Shared bits ---------- */
function ProjectImage({ src, title, className = '' }) {
  return (
    <div className={`relative w-full overflow-hidden bg-gradient-to-br from-stone-200 to-amber-100 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center font-serif text-3xl text-zinc-500/70">
        {title}
      </div>
      {src && (
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => e.currentTarget.remove()}
        />
      )}
    </div>
  );
}

function TagList({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-stone-200 bg-white/80 px-2.5 py-0.5 text-xs text-zinc-700">
          {t}
        </li>
      ))}
    </ul>
  );
}

function LinkRow({ liveUrl, repoUrl }) {
  if (!liveUrl && !repoUrl) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 !text-xs">
          <ExternalLink size={14} /> Live
        </a>
      )}
      {repoUrl && (
        <a href={repoUrl} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 !text-xs">
          <Code2 size={14} /> Repo
        </a>
      )}
    </div>
  );
}
