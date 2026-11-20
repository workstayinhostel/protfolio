import SectionHeading from './SectionHeading.jsx';

const offerings = [
  {
    icon: '🤖',
    title: 'AI-Powered Websites',
    description: 'Custom websites with AI integration, detailed PRD documentation, and intelligent features.',
  },
  {
    icon: '⚡',
    title: 'SaaS Solutions',
    description: 'Build scalable SaaS platforms for small businesses to manage operations digitally.',
  },
  {
    icon: '🏗️',
    title: 'Full Stack Development',
    description: 'End-to-end creation and implementation of web applications and business solutions.',
  },
  {
    icon: '👥',
    title: 'Business Websites',
    description: 'Professional websites for cafes, gyms, retail, and other business verticals.',
  },
];

export default function WhatIBuild() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What I Build"
          subtitle="Comprehensive solutions tailored to your business needs"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {offerings.map((offering) => (
            <article key={offering.title} className="glass card-lift rounded-3xl p-6 sm:p-8">
              <span className="text-3xl" aria-hidden="true">{offering.icon}</span>
              <h3 className="mt-5 text-lg font-semibold">{offering.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{offering.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
