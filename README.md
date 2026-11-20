# Sumit's Developer Portfolio

A single-page portfolio built with React, Vite, Tailwind CSS and Framer Motion.
It has a liquid-glass UI, filterable project showcase, scroll-animated process section,
and a "Work With Me" lead form that sends details via WhatsApp or Gmail.

---

## 1. Folder structure

```
sumit-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── images/
│       ├── profile.jpg          ← your profile photo
│       └── projects/            ← project screenshots
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                ← liquid-glass utilities
    ├── data/
    │   ├── profile.js           ← email, WhatsApp, Instagram, Facebook
    │   └── projects.js          ← ALL project content lives here
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── WhatIBuild.jsx
        ├── TechStack.jsx
        ├── FeaturedWork.jsx
        ├── HowIWork.jsx
        ├── WorkWithModal.jsx
        ├── Footer.jsx
        └── SectionHeading.jsx
```

---

## 2. Run locally

You need **Node.js 18 or newer**. Check with `node -v`.

```bash
# 1. Go into the project folder
cd sumit-portfolio

# 2. Install dependencies (one time)
npm install

# 3. Start the dev server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the build locally
```

---

## 3. Replace your profile photo

1. Prepare a photo. A vertical (4:5) portrait works best, around 1000 px wide or more.
2. Name it `profile.jpg`.
3. Put it in `public/images/profile.jpg`, replacing the existing file if there is one.
4. Refresh the page.

Until a photo is added, the frame shows a "Your photo here" placeholder.

> Tip: your old site has a photo at `https://devsumit07.netlify.app/assets/1N6A9976.jpg`.
> Open it in your browser, right-click → *Save image as…*, rename it to `profile.jpg`, and move it into `public/images/`.

---

## 4. Add or edit project photos

1. Save each screenshot in `public/images/projects/` (for example `stayinhostel.jpg`).
2. Point the project's `image` field to it: `image: '/images/projects/stayinhostel.jpg'`.
3. If you leave `image: ''`, the card shows a styled placeholder with the project title.

Recommended size: 1600 × 1000 px (16:10) or larger. Keep files under about 500 KB for fast loading.

---

## 5. Add, edit or remove projects

Everything is in **`src/data/projects.js`**.

```js
{
  id: 'my-new-project',          // unique, no spaces
  title: 'My New Project',
  category: 'client',            // 'startup' | 'client' | 'personal'
  image: '/images/projects/my-new-project.jpg',
  description: 'One or two sentences about what it does.',
  tags: ['React', 'Node.js'],
  liveUrl: 'https://example.com',   // '' hides the Live button
  repoUrl: 'https://github.com/you/repo', // '' hides the Repo button
},
```

- **Add:** copy one object, paste it into the `projects` array, and change the values.
- **Edit:** change any field and save. The page reloads automatically.
- **Remove:** delete the whole `{ ... },` block.
- **Startup spotlight:** any project with `category: 'startup'` gets the large featured layout.
- The placeholder entries are marked `PLACEHOLDER`. Replace or delete them.

---

## 6. Update your Facebook URL

Open **`src/data/profile.js`** and change this line:

```js
facebook: 'https://www.facebook.com/sumit.raj.aadhikari',
```

Paste your own profile link between the quotes. It's already filled in from your old site.
If you leave it empty (`''`), the Facebook button and link are hidden on the page.

---

## 7. Other things you can change

| What | Where |
|---|---|
| Name shown in navbar and footer | `src/data/profile.js` → `name`, `brand` |
| Email | `src/data/profile.js` → `email` |
| WhatsApp number | `src/data/profile.js` → `whatsappNumber` (country code + number, no `+`) |
| Instagram | `src/data/profile.js` → `instagram`, `instagramHandle` |
| Project types in the form | `src/components/WorkWithModal.jsx` → `PROJECT_TYPES` |
| Colors, glass strength | `src/index.css` (`.glass`, `#FAF9F6`) and `tailwind.config.js` |
| Fonts | `index.html` (Google Fonts link) and `tailwind.config.js` |

---

## 8. How the "Work With Me" form works

- **Send via WhatsApp** opens `https://wa.me/9779742430841?text=…` in a new tab with all form details pre-filled.
- **Send via Email (Gmail)** opens Gmail compose to `rebelsumit636@gmail.com` with a structured subject and body.
  If the browser blocks the new tab, it falls back to `mailto:` so the default mail app opens.

Required fields are checked before either button sends anything.

---

## 9. Deploy (optional)

- **Netlify:** drag the `dist/` folder onto app.netlify.com/drop, or connect the repo and set
  build command `npm run build` and publish directory `dist`.
- **Vercel:** import the repo. It detects Vite automatically.

Make sure `public/images/profile.jpg` exists before you deploy.
