import SectionHeading from './SectionHeading.jsx';

const groups = [
  { title: 'Frontend', items: ['React', 'Vite', 'HTML5', 'CSS3'] },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Database Design',
      'API Development',
      'Authentication',
      'Authorization',
      'Rate limiting and security',
    ],
  },
  { title: 'Databases (SQL & NoSQL)', items: ['MongoDB', 'Supabase'] },
  {
    title: 'Architecture & Solutions',
    items: ['Overall System Design', 'Simple Web Apps', 'Secure Admin Panels', 'Interactive landing pages'],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack & Core Capabilities"
          title="The tools I reach for"
          subtitle="Organized by layer, from the interface users see to the systems behind it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="glass card-lift rounded-3xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-zinc-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
