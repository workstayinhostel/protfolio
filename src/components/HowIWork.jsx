import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Compass, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Planning',
    text: 'Understand your needs, create detailed PRD, and plan the solution.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Design & Architecture with Prototype',
    text: 'Build wireframes, design UI/UX, architect the system, estimate costs, and agree on the initial payment.',
    icon: PenTool,
  },
  {
    num: '03',
    title: 'Development',
    text: 'Code, implement features, and integrate AI where applicable.',
    icon: Code2,
  },
  {
    num: '04',
    title: 'Launch & Support',
    text: 'Deploy, test, and provide ongoing support and paid maintenance.',
    icon: Rocket,
  },
];

export default function HowIWork() {
  const ref = useRef(null);

  // Progress line draws itself as the user scrolls through the steps
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          How I Work <span className="text-zinc-400">—</span> A proven process from discovery to deployment
        </h2>

        <div ref={ref} className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Scroll-linked connector line (desktop) */}
          <div className="pointer-events-none absolute left-6 right-6 top-10 hidden h-px bg-stone-200 lg:block">
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: 'left' }}
              className="h-px w-full bg-zinc-900"
            />
          </div>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                className={`glass card-lift relative rounded-3xl p-6 ${i % 2 === 1 ? 'md:mt-10 lg:mt-0' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span className="glass grid h-11 w-11 place-items-center rounded-full">
                    <Icon size={18} />
                  </span>
                  <span className="font-serif text-4xl text-zinc-300">{s.num}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl leading-snug">
                  <span className="mr-2 text-zinc-400">{s.num} |</span>
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
