'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import TypingEffect from '@/components/typing-effect';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
  Mail,
  Github,
  Linkedin,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* ---------- component ---------- */
export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /* hero animations */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    // Preload assets
    const img = new window.Image();
    img.src = '/avatar-landing.png';

    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload';
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
             Utkarsh
        </div>
      </div>


      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-10 md:pb-20">
      {/* header */}
      <motion.div
          className="z-1 mt-20 mb-4 flex flex-col items-center text-center md:mt-6 md:mb-8"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
           <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-[4.5rem]">
               &nbsp;  Hey, I'm ubii👋
           </h1>
                     <h2 className="text-secondary-foreground mt-4 text-xl font-semibold md:text-2xl lg:text-3xl">
             <TypingEffect 
               words={[
                 'A Software Engineer',
                 'A Cybersecurity Enthusiast',
                 'An Ethical Hacker',
                 'A React Native Developer',
                 'A UI/UX Designer',
                 'A Network Security Analyst'
               ]}
             />
        </h2>
      </motion.div>

      {/* centre memoji */}
        <div className="relative z-10 h-80 w-48 overflow-visible sm:h-96 sm:w-72 md:h-[28rem] md:w-80 lg:h-[32rem] lg:w-96">
        <Image
            src="/avatar-landing.png"
          alt="Hero memoji"
            width={4000}
            height={4000}
          priority
            className="translate-y-6 scale-[1.8] object-contain md:translate-y-8 md:scale-[1.6] lg:translate-y-10 lg:scale-[1.8]"
        />
      </div>

        {/* navigation buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
          className="z-10 mt-4 md:mt-8 flex w-full flex-col items-center justify-center md:px-0"
        >
          <div className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4 lg:gap-6">
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700">
                <Laugh size={44} strokeWidth={2} color="#329696" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">About</span>
              </div>
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700">
                <BriefcaseBusiness size={44} strokeWidth={2} color="#3E9858" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Projects</span>
              </div>
            </Button>
            <Button
              onClick={() => scrollToSection('skills')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700">
                <Layers size={44} strokeWidth={2} color="#856ED9" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Skills</span>
              </div>
            </Button>
            <Button
              onClick={() => scrollToSection('hobbies')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700">
                <PartyPopper size={44} strokeWidth={2} color="#B95F9D" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Hobbies</span>
          </div>
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700">
                <UserRoundSearch size={44} strokeWidth={2} color="#C19433" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Contact</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </section>

             {/* About Section */}
       <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
         <div className="max-w-4xl mx-auto w-full">
           <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
             <p className="text-lg leading-relaxed">
               I'm a passionate developer who loves creating innovative solutions. 
               I specialize in modern web technologies and enjoy building user-friendly applications.
             </p>
           </div>
         </div>
       </section>

             {/* Projects Section */}
       <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 bg-neutral-50 dark:bg-neutral-900">
         <div className="max-w-6xl mx-auto w-full">
           <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Project cards would go here */}
             <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
               <h3 className="text-xl font-semibold mb-2">Project 1</h3>
               <p className="text-neutral-600 dark:text-neutral-400">Description of project 1</p>
             </div>
             <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
               <h3 className="text-xl font-semibold mb-2">Project 2</h3>
               <p className="text-neutral-600 dark:text-neutral-400">Description of project 2</p>
             </div>
             <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
               <h3 className="text-xl font-semibold mb-2">Project 3</h3>
               <p className="text-neutral-600 dark:text-neutral-400">Description of project 3</p>
             </div>
           </div>
         </div>
       </section>

             {/* Skills Section */}
       <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
         <div className="max-w-4xl mx-auto w-full">
           <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                 <ul className="space-y-2">
                   <li>• JavaScript/TypeScript</li>
                   <li>• React/Next.js</li>
                   <li>• Node.js</li>
                   <li>• Python</li>
                 </ul>
               </div>
               <div>
                 <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                 <ul className="space-y-2">
                   <li>• Problem Solving</li>
                   <li>• Team Collaboration</li>
                   <li>• Communication</li>
                   <li>• Adaptability</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </section>

             {/* Hobbies Section */}
       <section id="hobbies" className="min-h-screen flex items-center justify-center px-4 py-20 bg-neutral-50 dark:bg-neutral-900">
         <div className="max-w-4xl mx-auto w-full">
           <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
             <p className="text-lg leading-relaxed">
               When I'm not coding, I enjoy exploring new technologies, reading tech blogs, 
               and staying active. I'm always curious about the latest trends in software development.
             </p>
           </div>
         </div>
       </section>

             {/* Contact Section */}
       <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
         <div className="max-w-4xl mx-auto w-full">
           <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
             <div className="flex flex-col md:flex-row justify-center items-center gap-6">
               <Button className="flex items-center gap-2">
                 <Mail size={20} />
                 Contact Me
               </Button>
               <Button variant="outline" className="flex items-center gap-2">
                 <Github size={20} />
                 GitHub
               </Button>
               <Button variant="outline" className="flex items-center gap-2">
                 <Linkedin size={20} />
                 LinkedIn
               </Button>
             </div>
           </div>
         </div>
       </section>

      <FluidCursor />
    </div>
  );
}
