import { IProject } from './types';

export const PROJECTS: IProject[] = [
  {
    title: 'Brutalyze Web',
    slug: 'brutalyze-web',
    sourceCode: 'https://github.com/ubiiii/brutalyze-web',
    year: 2025,
    description: `
      <div class="space-y-6">
        <p><strong>🛡️ Overview.</strong> Brutalyze Web is a lightweight, privacy‑focused SSH log analysis web app. Upload an <code>auth.log</code> and instantly detect 🔴 failed logins, 🚨 brute‑force patterns, 🌍 IP geolocation (country/region/city), and 📊 full classification: <em>Failed</em>, <em>Successful</em>, <em>Suspicious</em>, <em>Other</em>. All analysis is done <em>in‑memory</em>; nothing is stored on the server. One‑click secure report downloads.</p>

        <p><em>🌐 Live Demo:</em> Coming soon — deployable on Replit, Render, Fly.io, or your own server.</p>

        <h4>✅ Features</h4>
        <ul>
          <li>📄 Full classification: 🔴 Failed, 🟢 Successful, ⚠️ Suspicious, 📁 Other</li>
          <li>🌍 Auto‑fetches IP geolocation</li>
          <li>🛠️ Config‑free setup</li>
          <li>🧠 In‑memory processing (no user data retained)</li>
          <li>⬇️ On‑demand CSV / JSON / Alerts downloads</li>
        </ul>

        <h4>🛡️ Privacy First</h4>
        <p>Brutalyze does <strong>not store</strong> or track uploaded files or results. Reports are generated on‑demand and never saved on the server.</p>
      </div>
    `,
    role: 'Developer',
    techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    thumbnail: '/projects/thumbnail/brutalyze-web.png',
    longThumbnail: '/projects/long/brutalyze-web.png',
    images: [
      '/projects/images/brutalyze-web-1.png',
      '/projects/images/brutalyze-web-1-2.png',
      '/projects/images/brutalyze-web-1-3.png',
    ],
  },
  {
    title: 'MTI Electronics',
    slug: 'mti-electronics',
    liveUrl: 'https://mti-electronics.vercel.app/',
    year: 2025,
    description: `A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings.`,
    role: `Full-Stack Developer`,
    techStack: [
      'Next.js',
      'Payload CMS',
      'Tailwind CSS',
      'shadcn',
      'Swiper.js',
      'React Hook Form',
      'Vercel',
    ],
    thumbnail: '/projects/thumbnail/mti-electronics.webp',
    longThumbnail: '/projects/long/mti-electronics.webp',
    images: [
      '/projects/images/mti-electronics-1.webp',
      '/projects/images/mti-electronics-2.webp',
    ],
  },
  {
    title: 'Epikcart',
    slug: 'epikcart',
    techStack: ['React', 'Redux', 'React i18n', 'Tailwind CSS', 'Framer Motion', 'API Integration'],
    thumbnail: '/projects/thumbnail/epikcart.jpg',
    longThumbnail: '/projects/long/epikcart.jpg',
    images: [
      '/projects/images/epikcart-1.png',
      '/projects/images/epikcart-2.png',
      '/projects/images/epikcart-3.png',
      '/projects/images/epikcart-4.png',
      '/projects/images/epikcart-5.png',
    ],
    liveUrl: 'https://demo.epikcart.siphertech.com/',
    year: 2023,
    description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses.`,
    role: `Frontend Developer`,
  },
  {
    title: 'Resume Roaster',
    slug: 'resume-roaster',
    techStack: ['GPT-4', 'Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    thumbnail: '/projects/thumbnail/resume-roaster.jpg',
    longThumbnail: '/projects/long/resume-roaster.jpg',
    images: [
      '/projects/images/resume-roaster-1.png',
      '/projects/images/resume-roaster-2.png',
      '/projects/images/resume-roaster-3.png',
    ],
    liveUrl: 'https://resume-roaster.vercel.app/',
    year: 2023,
    description: 'Resume Roaster provides tailored resume feedback and writing services.',
    role: `Owner & Developer`,
  },
  {
    title: 'Real Estate',
    slug: 'property-pro',
    techStack: ['React.js', 'Redux', 'Tailwind CSS', 'React i18n', 'Framer Motion'],
    thumbnail: '/projects/thumbnail/property-pro.jpg',
    longThumbnail: '/projects/long/property-pro.jpg',
    images: [
      '/projects/images/property-pro-1.png',
      '/projects/images/property-pro-2.png',
      '/projects/images/property-pro-3.png',
    ],
    liveUrl: 'https://demo.propertypro.siphertech.com/',
    year: 2023,
    description: 'PropertyPro is a real estate management platform to explore and manage listings.',
    role: `Frontend Developer`,
  },
  {
    title: 'Consulting Finance',
    slug: 'crenotive',
    techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    longThumbnail: '/projects/long/consulting-finance.jpg',
    images: [
      '/projects/images/consulting-finance-1.png',
      '/projects/images/consulting-finance-2.png',
      '/projects/images/consulting-finance-3.png',
    ],
    sourceCode: 'https://github.com/Tajmirul/crenotive',
    liveUrl: 'https://crenotive.netlify.app/',
    year: 2023,
    description: 'Crenotive is a portfolio website to showcase services and expertise.',
    role: '',
  },
  {
    title: 'devLinks',
    slug: 'devLinks',
    techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    thumbnail: '/projects/thumbnail/devLinks.jpg',
    longThumbnail: '/projects/long/devLinks.jpg',
    images: [
      '/projects/images/devLinks-1.png',
      '/projects/images/devLinks-2.png',
      '/projects/images/devLinks-3.png',
    ],
    sourceCode: 'https://github.com/Tajmirul/devsLink',
    liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    year: 2023,
    description: 'A link sharing app from Frontend Mentor challenge.',
    role: '',
  },
];



