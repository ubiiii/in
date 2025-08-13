import { IProject } from './types';

export const PROJECTS: IProject[] = [
  {
    title: 'Awesome React Native',
    slug: 'awesome-react-native',
    liveUrl: 'https://awesomereactnative.com/',
    year: 2022,
    type: 'Live Project',
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
    type: 'Project',
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
      '/projects/images/brutalyze-web.png',
      '/projects/images/brutalyze-web-2.png',
      '/projects/images/brutalyze-web-3.png',
    ],
  },
  {
    title: 'Silencium',
    slug: 'silencium',
    sourceCode: 'https://github.com/ubiiii/Silencium',
    year: 2025,
    type: 'Project',
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
    type: 'Project',
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
    type: 'Publication',
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
  {
    title: 'Python & Ethical Hacking',
    slug: 'python-ethical-hacking',
    year: 2024,
    type: 'Certification',
    description: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold mb-4">Python & Ethical Hacking Certification</h2>
        <p><strong>🐍 Python & Ethical Hacking</strong> - Intensive hands-on training in offensive and defensive cybersecurity using Python and Kali Linux.</p>
        
        <p>Over the certification of this intensive training, I gained hands-on experience in both offensive and defensive cybersecurity using Python and Kali Linux. From building tools like MAC changers, ARP spoofers, and custom keyloggers, to analyzing real network traffic and executing payloads, this course pushed me to think like an attacker and build like an engineer. I wrote automation scripts, implemented packet sniffers, created backdoors, and explored multiple vectors such as DNS spoofing, HTTP injection, and web crawler-based reconnaissance all within ethical guidelines. Every tool and exploit I built was tested, refined, and run in isolated virtual environments, giving me real-world context for cybersecurity implementation.</p>
        
        <h4>💻 Built Custom Tools in Python</h4>
        <ul>
          <li>MAC address spoofing</li>
          <li>ARP spoofing & table restoration</li>
          <li>Packet sniffing & payload injection</li>
          <li>Backdoor clients with file system access</li>
          <li>Keylogger with email reporting</li>
        </ul>
        
        <h4>🛡️ Performed In-Depth Network Analysis</h4>
        <ul>
          <li>Scapy for sending and analyzing raw packets</li>
          <li>Intercepting DNS, ARP, and HTTP traffic</li>
          <li>DNS and file interception via MITM attacks</li>
        </ul>
        
        <h4>🕵️‍♂️ Worked with Kali Linux & Terminal Operations</h4>
        <ul>
          <li>Ethical exploitation with BeEF</li>
          <li>Automating payload delivery</li>
          <li>Reverse shells and persistence mechanisms</li>
        </ul>
        
        <h4>🔍 Developed Python-Based Vulnerability Scanner</h4>
        <ul>
          <li>Hidden paths discovery</li>
          <li>Subdomain enumeration</li>
          <li>XSS vulnerabilities (forms + parameters)</li>
        </ul>
        
        <h4>⚙️ Advanced Python Skills</h4>
        <ul>
          <li>Regex-based data parsing</li>
          <li>Exception handling, OOP in Python</li>
          <li>Python binary packaging for Windows/Linux/macOS</li>
          <li>Anti-virus evasion techniques (theoretical and practical)</li>
        </ul>
        
        <p>This certification has been instrumental in developing my understanding of cybersecurity principles and has enhanced my ability to build more secure applications and systems.</p>
      </div>
    `,
    role: 'Certified Professional',
    techStack: ['Python', 'Cybersecurity', 'Network Security', 'Penetration Testing', 'Ethical Hacking'],
    thumbnail: '/projects/thumbnail/ethical hacking.jpg',
    longThumbnail: '/projects/thumbnail/ethical hacking.jpg',
    images: [],
  },
  {
    title: 'Cyber Security',
    slug: 'cyber-security',
    year: 2024,
    type: 'Certification',
    description: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold mb-4">Cyber Security and Ethical Hacking Certification</h2>
        <p><strong>🛡️ Cyber Security and Ethical Hacking</strong> - Comprehensive understanding of key cybersecurity concepts, tools, and attack strategies through practical labs and guided instruction.</p>
        
        <p>This certification in Cyber Security and Ethical Hacking provided me with a comprehensive understanding of key cybersecurity concepts, tools, and attack strategies. Through practical labs and guided instruction, I learned how to identify vulnerabilities, analyze threats, and ethically exploit system weaknesses in a controlled environment. Topics covered included network security, penetration testing, password attacks, malware behavior, and digital forensics. This course helped solidify my foundational knowledge and fueled my passion for building and breaking systems — ethically and responsibly.</p>
        
        <h4>🎯 Key Learning Outcomes</h4>
        <ul>
          <li><strong>Ethical Hacking Practices:</strong> Learned responsible disclosure and ethical exploitation techniques</li>
          <li><strong>Hands-on Tool Experience:</strong> Gained practical experience with Wireshark, Nmap, and Kali Linux</li>
          <li><strong>Security Concepts:</strong> Studied spoofing, packet analysis, password cracking, and system hardening</li>
          <li><strong>Real-world Simulations:</strong> Applied attack simulations in isolated environments</li>
          <li><strong>Security Principles:</strong> Strengthened understanding of CIA Triad (Confidentiality, Integrity, Availability)</li>
        </ul>
        
        <h4>🛠️ Practical Skills Acquired</h4>
        <ul>
          <li>Network security analysis and vulnerability assessment</li>
          <li>Penetration testing methodologies and techniques</li>
          <li>Password attack strategies and countermeasures</li>
          <li>Malware behavior analysis and detection</li>
          <li>Digital forensics and incident response</li>
          <li>System hardening and security configuration</li>
        </ul>
        
        <h4>🔍 Tools and Technologies</h4>
        <ul>
          <li><strong>Wireshark:</strong> Network protocol analysis and packet inspection</li>
          <li><strong>Nmap:</strong> Network discovery and security auditing</li>
          <li><strong>Kali Linux:</strong> Penetration testing and security assessment</li>
          <li><strong>Various Security Tools:</strong> For vulnerability scanning and exploitation</li>
        </ul>
        
        <p>This certification has been fundamental in developing my cybersecurity expertise and has provided me with the knowledge and skills to approach security challenges with both technical proficiency and ethical responsibility.</p>
      </div>
    `,
    role: 'Certified Professional',
    techStack: ['Cybersecurity', 'Network Security', 'Penetration Testing', 'Ethical Hacking', 'Digital Forensics'],
    thumbnail: '/projects/thumbnail/Cyber Security.jpg',
    longThumbnail: '/projects/thumbnail/Cyber Security.jpg',
    images: [],
  },
  {
    title: 'Skills',
    slug: 'skills',
    year: 2025,
    type: 'Project',
    description: `
      <div class="space-y-8 bg-transparent">
        <!-- Top Ornament Image with 3D Rotation -->
        <div class="relative flex flex-col items-center text-center">
                     <div class="relative h-[300px] w-[300px] overflow-hidden mb-[-120px] z-0">
                         <img
               src="/skills.png"
               alt="3D Skills Orb"
               class="w-full h-full animate-[spin_30s_linear_infinite] mask-gradient drop-shadow-2xl"
             />
          </div>
          
          
        </div>

        <!-- Tech Stack Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          <!-- Frontend Skills -->
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <span class="text-2xl">⚛️</span>
            <span class="text-white font-medium">React</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <span class="text-2xl">⚡</span>
            <span class="text-white font-medium">Next.js</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <span class="text-2xl">📘</span>
            <span class="text-white font-medium">TypeScript</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <span class="text-2xl">🎨</span>
            <span class="text-white font-medium">Tailwind CSS</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
            <span class="text-2xl">📱</span>
            <span class="text-white font-medium">React Native</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <span class="text-2xl">🎬</span>
            <span class="text-white font-medium">Framer Motion</span>
          </div>

          <!-- Backend Skills -->
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
            <span class="text-2xl">🟢</span>
            <span class="text-white font-medium">Node.js</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
            <span class="text-2xl">🐍</span>
            <span class="text-white font-medium">Python</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <span class="text-2xl">🍃</span>
            <span class="text-white font-medium">Express</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
            <span class="text-2xl">🗄️</span>
            <span class="text-white font-medium">MongoDB</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <span class="text-2xl">🐘</span>
            <span class="text-white font-medium">PostgreSQL</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <span class="text-2xl">🔍</span>
            <span class="text-white font-medium">GraphQL</span>
          </div>

          <!-- Emerging Technologies -->
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
            <span class="text-2xl">⛓️</span>
            <span class="text-white font-medium">Blockchain</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <span class="text-2xl">🤖</span>
            <span class="text-white font-medium">AI/ML</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <span class="text-2xl">☁️</span>
            <span class="text-white font-medium">Cloud Computing</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <span class="text-2xl">🛡️</span>
            <span class="text-white font-medium">Cybersecurity</span>
          </div>

          <!-- Development Tools -->
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
            <span class="text-2xl">📦</span>
            <span class="text-white font-medium">Git</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <span class="text-2xl">🐳</span>
            <span class="text-white font-medium">Docker</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
            <span class="text-2xl">🔄</span>
            <span class="text-white font-medium">CI/CD</span>
          </div>
          
          <div class="flex items-center gap-3 px-4 py-3 rounded-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <span class="text-2xl">🧪</span>
            <span class="text-white font-medium">Testing</span>
          </div>
        </div>
      </div>
    `,
    role: 'Full-Stack Developer',
    techStack: [],
    thumbnail: '/projects/thumbnail/blockchain.jpg',
    longThumbnail: '/projects/thumbnail/blockchain.jpg',
    images: [],
  },
];



