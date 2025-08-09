import { IProject } from './types';

export const PROJECTS: IProject[] = [
  {
    title: 'Awesome React Native',
    slug: 'awesome-react-native',
    liveUrl: 'https://awesomereactnative.com/',
    year: 2022,
    description: `
      <div class="space-y-6">
        <p><strong>📱 Awesome React Native</strong> is a meticulously curated collection of the best React Native tools, UI components, tutorials, libraries, and analytics — all in one sleek directory. It's community‑powered and continuously updated, making it a go‑to resource for mobile developers.</p>

        <p>
          🌐 <a href="https://awesomereactnative.com/" target="_blank" rel="noopener">Visit the site</a>
        </p>

        <h4>✨ Features</h4>
        <ul>
          <li><strong>🤝 Community‑Driven Curation:</strong> Includes only top‑quality libraries and tutorials based on popularity and reliability.</li>
          <li><strong>📚 Broad Categories Covered:</strong> UI & Animations, Navigation, Styling, Conferences, How‑to Guides, Developer Tools, Analytics, Storage, and more.</li>
        </ul>

        <h4>🛠️ Tool Highlights You'll Love</h4>
        <ul>
          <li><code>react-native-vector-icons</code> — customizable icons across platforms.</li>
          <li><code>react-native-snap-carousel</code>, <code>lottie-react-native</code> — immersive carousels and motion.</li>
          <li><code>react-native-maps</code>, <code>react-native-calendar</code>, <code>react-native-image-picker</code> — essential UI gems.</li>
        </ul>

        <h4>🎬 Animations At a Glance</h4>
        <p>See entries like <code>react-native-magic-move</code> for fluid scene transitions.</p>
      </div>
    `,
    role: 'Creator & Developer',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MDX', 'Vercel'],
    thumbnail: '/projects/thumbnail/ARN.png',
    longThumbnail: '/projects/long/ARN.png',
    images: [
      '/projects/images/ARN 1.png',
      '/projects/images/ARN 3.png',
      '/projects/images/ARN 4.png',
      '/projects/images/ARN 5.png',
    ],
  },
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
    title: 'Silencium',
    slug: 'silencium',
    sourceCode: 'https://github.com/ubiiii/Silencium',
    year: 2025,
    description: `
      <div class="space-y-6">
        <p><strong>🔒 Silencium – Secure Private Chat.</strong> A real‑time, end‑to‑end encrypted chat app with self‑destructing rooms and encrypted image sharing. No accounts, no storage, privacy‑first.</p>
        <h4>✨ Features</h4>
        <ul>
          <li>🔐 E2E encryption with Libsodium (X25519 + ChaCha20‑Poly1305)</li>
          <li>🚪 Self‑destructing rooms (auto cleanup when a user leaves)</li>
          <li>📸 Encrypted image sharing with compression</li>
          <li>👥 Anonymous chat — no accounts required</li>
          <li>⚡ Realtime via WebSocket/Socket.io</li>
          <li>🎨 Clean, terminal‑inspired UI</li>
        </ul>
        <h4>🛡️ Privacy</h4>
        <p>No messages or images are stored on the server. Data is processed in memory and deleted immediately after delivery.</p>
      </div>
    `,
    role: 'Developer',
    techStack: [
      'React',
      'Socket.io',
      'Libsodium',
      'Tailwind CSS',
      'Vite',
      'Node.js',
      'Express',
      'CORS',
    ],
    thumbnail: '/projects/thumbnail/Silencium.png',
    longThumbnail: '/projects/long/Silencium.png',
    images: [
      '/projects/images/Silencium-1.png',
      '/projects/images/Silencium-2.png',
      '/projects/images/Silencium-3.png',
    ],
  },
  {
    title: 'ShadowKey',
    slug: 'shadowkey',
    sourceCode: 'https://github.com/ubiiii/shadowkey',
    year: 2025,
    description: `
      <div class="space-y-6">
        <p><strong>🔐 ShadowKey.</strong> A hacker‑styled password security toolkit that checks password strength, estimates crack time, and generates strong passwords with customizable options.</p>
        <h4>🚀 Features</h4>
        <ul>
          <li>✅ Strength checker and complexity breakdown</li>
          <li>✅ Estimated time to crack (brute‑force)</li>
          <li>✅ Password generator with length and character options</li>
          <li>✅ Copy to clipboard, responsive UI</li>
        </ul>
        <p><em>Live:</em> <a href="https://shadowkey-yz4y.onrender.com" target="_blank" rel="noopener">shadowkey on Render</a></p>
      </div>
    `,
    role: 'Developer',
    techStack: ['Python', 'Flask', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    thumbnail: '/projects/thumbnail/ShadowKey.png',
    longThumbnail: '/projects/long/ShadowKey.png',
    images: [
      '/projects/images/ShadowKey 1.png',
      '/projects/images/ShadowKey 2.png',
    ],
  },
  {
    title: 'Blockchain CloudGuard',
    slug: 'blockchain-cloudguard',
    year: 2023,
    description: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold mb-4">Blockchain Technology for Cloud Security and Data Integrity</h2>
        <p><strong>🔗 Blockchain CloudGuard</strong> - A decentralized cloud security platform leveraging blockchain technology for enhanced data protection and access control.</p>
        
        <p>I dove into this research knowing that blockchain's most compelling strengths, its decentralization, immutability, transparency and smart contract capabilities, would be the game changer cloud security needs. I designed an integration framework that puts decentralized identity and access management at its core, ensuring users control their credentials without relying on a central authority. From there, I layered in tamper proof data storage with end-to-end fragmentation and provenance tracking so every piece of information is encrypted, split and chained across multiple nodes making unauthorized changes virtually impossible. Finally, I built smart contracts that self-enforce security policies, transforming static rules into dynamic, condition based agreements that grant or deny access in real time.</p>
        
        <p>As for how it all panned out, the detailed results and my full conclusions are kept under wraps for now but trust me, I've crunched every metric, stress tested under peak loads and validated every protocol nuance end-to-end. I've mapped out every performance curve, dissected every consensus mechanism and know exactly where the bottlenecks and optimizations lie. When you're ready for the deep dive into the data, I'll walk you through every figure and chart with all the confidence that comes from having built, broken and rebuilt this entire system myself.</p>
      </div>
    `,
    role: 'Senior Software Engineer',
    techStack: ['React', 'Node.js', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
    thumbnail: '/projects/thumbnail/blockchain.jpg',
    longThumbnail: '/projects/thumbnail/blockchain.jpg',
    images: [],
  },
];



