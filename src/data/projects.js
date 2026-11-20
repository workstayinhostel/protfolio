// ============================================================
// PROJECTS — edit this file to add, change or remove work.
//
// category : 'startup' | 'client' | 'personal'
// image    : path inside /public, e.g. '/images/projects/cafe.jpg'
//            (leave '' to show a styled placeholder instead)
// tags     : array of tech names shown as chips
// liveUrl / repoUrl : leave '' to hide that button
//
// Entries marked PLACEHOLDER are examples. Replace them with your real work.
// ============================================================

export const categoryLabels = {
  startup: 'Startup',
  client: 'Client Project',
  personal: 'Personal Project',
};

export const projects = [
  {
    id: 'stayinhostel',
    title: 'Stay In Hostel',
    category: 'startup',
    image: '/images/projects/sih.png',
    description:
      'A student accommodation discovery and management platform. Students can find and compare hostels, while owners manage their listings in one place.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'], // PLACEHOLDER — confirm your stack
    liveUrl: 'https://stayinhostel.com', // paste your live URL here
    repoUrl: '',
  },
  {
    id: 'client-cafe',
    title: 'Café Website & Menu Management',
    category: 'personal',
    image: '/images/projects/cafe.png',
    description: 'A responsive business website with menu, gallery, contact section and admin panel that lets owners edit the menu and edit deliveries.',
    tags: ['React', 'Tailwind CSS'],
    liveUrl: 'https://prototypeindex.netlify.app/',
    repoUrl: '',
  },
  {
    id: 'cafewebsite',
    title: 'A simple cafe frontend',
    category: 'project',
    image: '/images/projects/aonecafe.png',
    description: 'A Simple low cost cafe website backed by google sheets for menu management.',
    tags: ['React', 'Express', 'Supabase'],
    liveUrl: 'https://aonecafe.netlify.app/',
    repoUrl: '',
  },
  {
    id: 'personal-tool',
    title: 'Metufy- A personal WebChat',
    category: 'personal',
    image: '/images/projects/metufy.png',
    description: 'Metufy is a personal webchat application that needs google login only and allows texts notificaitons and calls as well',
    tags: ['React', 'Vite'],
    liveUrl: 'https://metufy.vercel.app',
    repoUrl: '',
  },
  {
    id: 'gym-website',
    title: 'Standard fitness club gym website',
    category: 'client',
    image: '/images/projects/standardfitness.png',
    description: 'A digital face to gym with member login and portal features',
    tags: ['Node.js', 'Express','React'],
    liveUrl: 'https://standardfitnessclub.com',
    repoUrl: '',
  },
   {
    id: 'gym-website',
    title: 'A gym project website',
    category: 'personal',
    image: '/images/projects/gym.png',
    description: 'A gym hobby project with customer login and portal features',
    tags: ['Node.js', 'Express'],
    liveUrl: 'https://standardgym.netlify.app',
    repoUrl: '',
  },
];
