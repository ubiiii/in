'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import TypingEffect from '@/components/typing-effect';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
  Twitter,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectList from '@/components/selected-projects/ProjectList';
import ProjectDetails from '@/components/selected-projects/ProjectDetails';
import { PROJECTS } from '@/components/selected-projects/data';

// Typing Effect Component for Recap
const TypingRecapItem = ({ text, delay, value, valueColor }: { 
  text: string; 
  delay: number; 
  value: string; 
  valueColor: string; 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setShowValue(true);
        }
      }, 50); // Typing speed

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-500 text-lg">•</span>
      <span className="flex-1">
        {displayText}
        {isTyping && <span className="animate-pulse">|</span>}
      </span>
      {showValue && (
        <span className={`font-semibold ${valueColor} transition-opacity duration-500`}>
          {value}
        </span>
      )}
    </div>
  );
};

// Todo Item Component with Typing and Check Animation
const TodoItem = ({ text, delay, shouldCheck, checkDelay }: { 
  text: string; 
  delay: number; 
  shouldCheck: boolean; 
  checkDelay: number; 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 50); // Typing speed

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  useEffect(() => {
    const checkTimer = setTimeout(() => {
      setShowCheck(true);
    }, checkDelay);

    return () => clearTimeout(checkTimer);
  }, [checkDelay]);

  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 mt-1 flex items-center justify-center">
        {showCheck && shouldCheck ? (
          <Image
            src="/checkmark.png"
            alt="checkmark"
            width={32}
            height={32}
            className="transition-all duration-500"
          />
        ) : (
          <span className="text-gray-400 text-xl">O</span>
        )}
      </div>
      <span className="flex-1">
        {displayText}
        {isTyping && <span className="animate-pulse">|</span>}
      </span>
    </div>
  );
};

// Google Search Item Component with Typing Effect
const GoogleSearchItem = ({ text, delay }: { 
  text: string; 
  delay: number; 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBullet, setShowBullet] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      setShowBullet(true);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 50); // Typing speed

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className="flex items-start gap-2 min-h-[2rem]">
      <span className={`text-blue-500 mt-1 transition-opacity duration-300 ${showBullet ? 'opacity-100' : 'opacity-0'}`}>•</span>
      <span className="flex-1">
        {displayText}
        {isTyping && <span className="animate-pulse">|</span>}
      </span>
    </div>
  );
};

/* ---------- component ---------- */
export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showProductivityRecap, setShowProductivityRecap] = useState(false);

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

  // About section animations
  const aboutTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const aboutGalleryVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const },
    },
  };

  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  
  // About gallery data
  const galleryItems = [
    { image: '/I\'m Utkarsh.jpg', caption: 'I\'m Utkarsh' },
    { image: '/I Build.jpg', caption: 'I Build' },
    { image: '/I Lift.jpg', caption: 'I Lift' },
    { image: '/I Explore.jpg', caption: 'I Explore' },
    { image: '/I Contribute.png', caption: 'I Contribute' },
    { image: '/I Solve Problems.jpg', caption: 'I Hustle' },
,
  ];

  // Swiper Carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Show productivity recap after all to-do items are checked
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProductivityRecap(true);
    }, 28000); // After all to-do items are checked

    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAboutInView || !isAutoPlaying) return;

    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % galleryItems.length;
      setCurrentSlide(nextSlide);
      
      // Move the actual Swiper
      if (desktopSwiperRef.current) {
        desktopSwiperRef.current.swiper.slideTo(nextSlide);
      }
      if (mobileSwiperRef.current) {
        mobileSwiperRef.current.swiper.slideTo(nextSlide);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isAboutInView, isAutoPlaying, currentSlide, galleryItems.length]);

  // Swiper refs for auto-scroll
  const desktopSwiperRef = useRef<any>(null);
  const mobileSwiperRef = useRef<any>(null);

  // Pause auto-scroll on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Resume after 3 seconds
  };

  // Right-panel selected project state
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const selectedProject = selectedProjectSlug ? PROJECTS.find(p => p.slug === selectedProjectSlug) ?? null : null;

  // Inject selected project details into right panel when event fires
  useEffect(() => {
    const handler = (e: any) => {
      const slug = e?.detail?.slug as string | undefined;
      if (!slug) return;
      const root = document.getElementById('projects-details-root');
      if (!root) return;
      // Lazy import to avoid SSR issues
      import('@/components/selected-projects/data').then(({ PROJECTS }) => {
        const project = PROJECTS.find((p) => p.slug === slug) ?? null;
        // Simple client-side render via string; for richer content we already styled the root with prose
        if (!project) return;
        const html = `
          <h3 class="text-2xl md:text-3xl font-bold">${project.title}</h3>
          ${project.description ?? ''}
        `;
        root.innerHTML = html;
      });
    };
    window.addEventListener('project:selected', handler as any);
    return () => window.removeEventListener('project:selected', handler as any);
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
            <h2 className="text-secondary-foreground mt-4 text-xl font-semibold md:text-2xl lg:text-3xl"> A
             <TypingEffect 
               words={[
                 ' Software Engineer',
                 ' Cybersecurity Enthusiast',
                 'n Ethical Hacker',
                 ' React Native Developer',
                 ' UI/UX Designer',
                 ' Network Security Analyst'
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
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 dark:bg-black/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                <Laugh size={44} strokeWidth={2} color="#329696" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">About</span>
              </div>
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 dark:bg-black/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                <BriefcaseBusiness size={44} strokeWidth={2} color="#3E9858" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Projects</span>
              </div>
            </Button>
            <Button
              onClick={() => scrollToSection('skills')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 dark:bg-black/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                <Layers size={44} strokeWidth={2} color="#856ED9" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Skills</span>
              </div>
            </Button>
            <Button
              onClick={() => scrollToSection('hobbies')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 dark:bg-black/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                <PartyPopper size={44} strokeWidth={2} color="#B95F9D" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Hobbies</span>
              </div>
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 dark:bg-black/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                <UserRoundSearch size={44} strokeWidth={2} color="#C19433" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Contact</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <div className="max-w-9xl mx-auto w-full h-full">
          {/* Section Heading */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-black dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Who is{" "}
              </motion.span>
              <motion.span 
                className="animated-gradient"
                initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                ubii
              </motion.span>
              <motion.span 
                className="text-white dark:text-gray-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {" "}?
              </motion.span>
            </motion.h1>
          </motion.div>
          

          
                                              {/* Desktop Layout - Four Columns (Wireframe Structure) */}
                  <div className="hidden lg:grid lg:grid-cols-20 lg:gap-8 lg:items-stretch lg:min-h-[900px] -mt-20">
                                                                      {/* Column 1 - My Weekend To-Do List */}
                <div className="lg:col-span-4">
                  <motion.div
                    className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center w-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Weekend To-Do List
                </h3>
                <div className="space-y-3 text-2xl text-gray-700 dark:text-gray-300">
                  <TodoItem 
                    text="9hr Sleep 😴" 
                    delay={0} 
                    shouldCheck={false} 
                    checkDelay={14000}
                  />
                  <TodoItem 
                    text="Buy Coffee and milk ☕" 
                    delay={1000} 
                    shouldCheck={true} 
                    checkDelay={15000}
                  />
                  <TodoItem 
                    text="Don't Drink Coffee 😬" 
                    delay={2000} 
                    shouldCheck={false} 
                    checkDelay={16000}
                  />
                  <TodoItem 
                    text="Laundry 🧺" 
                    delay={3000} 
                    shouldCheck={true} 
                    checkDelay={17000}
                  />
                  <TodoItem 
                    text="Check Mailbox 📬" 
                    delay={4000} 
                    shouldCheck={true} 
                    checkDelay={18000}
                  />
                  <TodoItem 
                    text="Make slides of a fake TED Talk" 
                    delay={5000} 
                    shouldCheck={true} 
                    checkDelay={19000}
                  />
                  <TodoItem 
                    text="Touch Grass 🍃" 
                    delay={6000} 
                    shouldCheck={true} 
                    checkDelay={20000}
                  />
                  <TodoItem 
                    text="Doodle on a sticky note ✏️" 
                    delay={7000} 
                    shouldCheck={true} 
                    checkDelay={21000}
                  />
                  <TodoItem 
                    text="Rearrange Furniture 🪑" 
                    delay={8000} 
                    shouldCheck={false} 
                    checkDelay={22000}
                  />
                  <TodoItem 
                    text="Watch a movie 🎬" 
                    delay={9000} 
                    shouldCheck={true} 
                    checkDelay={23000}
                  />
                  <TodoItem 
                    text="Scroll Regretfully for 4hrs📱" 
                    delay={10000} 
                    shouldCheck={false} 
                    checkDelay={24000}
                  />
                  <TodoItem 
                    text="Overthink Future 🧠" 
                    delay={11000} 
                    shouldCheck={true} 
                    checkDelay={25000}
                  />
                  <TodoItem 
                    text="Eat 3 meals 🥗" 
                    delay={12000} 
                    shouldCheck={false} 
                    checkDelay={26000}
                  />
                  <TodoItem 
                    text="Ignore Notifications 🔕" 
                    delay={13000} 
                    shouldCheck={true} 
                    checkDelay={27000}
                  />
                </div>
                
                {/* Weekend Productivity Recap */}
                {showProductivityRecap && (
                  <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    Weekend Productivity Recap
                  </h4>
                  <div className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                    <TypingRecapItem 
                      text="Things I Did:" 
                      delay={0} 
                      value="9" 
                      valueColor="text-green-600" 
                    />
                    <TypingRecapItem 
                      text="Things I Missed:" 
                      delay={1000} 
                      value="5" 
                      valueColor="text-orange-600" 
                    />
                    <TypingRecapItem 
                      text="Things I Ignored on Purpose:" 
                      delay={2000} 
                      value="4" 
                      valueColor="text-red-600" 
                    />
                    <TypingRecapItem 
                      text="Most Fun part of the Day:" 
                      delay={3000} 
                      value="Lying on the floor" 
                      valueColor="text-blue-600" 
                    />
                    <TypingRecapItem 
                      text="Productive Weekend?:" 
                      delay={4000} 
                      value="Yepp!" 
                      valueColor="text-purple-600" 
                    />
                    <TypingRecapItem 
                      text="Readiness for Monday?:" 
                      delay={5000} 
                      value="none" 
                      valueColor="text-gray-600" 
                    />
                  </div>
                </div>
                )}
              </motion.div>
            </div>

                                              {/* Column 2 - About Me Para + Testimonials Stacked */}
              <div className="lg:col-span-6 space-y-6 lg:px-5 lg:pt-45 self-start">
              {/* About Me Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-6 bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  I'm Utkarsh, {" "}
                  <span className="animated-gradient">I build for the thrill..</span>
                </h2>
                
                <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300" style={{ fontSize: '21.5px' }}>
                <p>
                    A curious human with a stubborn laptop. I write <strong>code that works</strong> (eventually), chase 
                    <strong> side projects</strong> like they owe me money, and treat debugging like a sport. I believe in 
                    <strong> fun commits</strong>, <strong>dumb ideas that might work</strong>, and the sacred ritual of yelling at my screen 
                    before it magically fixes itself.
                  </p>


                  <p>
                    This whole journey started when I deleted one file… and my dad's new work computer  
                    <strong> rebooted... into darkness</strong>.
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                    onClick={() => window.open('https://github.com/ubiiii', '_blank')}
                  >
                    <Github size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                    onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/', '_blank')}
                  >
                    <Linkedin size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                    onClick={() => window.open('https://www.instagram.com/heyy_ub/', '_blank')}
                  >
                    <Instagram size={20} />
                  </Button>
                </div>
              </motion.div>

              {/* Testimonials Section */}
              <motion.div 
                className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    Hear it from the people
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-tight">
                    What others say about working with me
                  </p>
                </div>
                <Swiper
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Autoplay, EffectFade, Pagination]}
                  className="w-full"
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  effect="fade"
                  fadeEffect={{
                    crossFade: true
                  }}
                  pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                  }}
                >
                  {/* Slide 1 - Testimonial #1 */}
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center justify-center gap-6 w-full px-4 py-2">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src="/testimonials/shruti.jpg"
                            alt="Shruti Tayade"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 space-y-3 max-w-lg">
                        <div className="space-y-0.5">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                            Shruti Tayade
                          </h4>
                          <p className="text-base text-gray-500 dark:text-gray-400 leading-tight">
                            Senior Software Analyst @ Capgemini
                          </p>
                        </div>
                        <p className="text-lg italic text-gray-700 dark:text-gray-200 leading-relaxed">
                          "Utkarsh consistently delivered high-quality results, combining technical excellence with strong teamwork and professionalism"
                        </p>
                        <div className="pt-2">
                          <Button 
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/details/recommendations/?detailScreenTabIndex=0', '_blank')}
                          >
                            View Full Testimonial
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 2 - Testimonial #2 */}
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center justify-center gap-6 w-full px-4 py-2">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src="/testimonials/inshal.jpg"
                            alt="Inshal"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 space-y-3 max-w-lg">
                        <div className="space-y-0.5">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                            Inshal
                          </h4>
                          <p className="text-base text-gray-500 dark:text-gray-400 leading-tight">
                          Software Developer Associate @LRN Technologies
                          </p>
                        </div>
                        <p className="text-lg italic text-gray-700 dark:text-gray-200 leading-relaxed">
                          "Utkarsh blends technical brilliance with proactive problem solving and consistently delivers scalable, high impact solutions."
                        </p>
                        <div className="pt-2">
                          <Button 
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/details/recommendations/?detailScreenTabIndex=0', '_blank')}
                          >
                            View Full Testimonial
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 3 - Testimonial #3 */}
                  <SwiperSlide className="flex items-center justify-center w-full">
                    <div className="flex items-center justify-center gap-6 w-full px-4 py-2">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src="/testimonials/zoheb.jpg"
                            alt="Zoheb"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 space-y-3 max-w-lg">
                        <div className="space-y-0.5">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                            Zoheb
                          </h4>
                          <p className="text-base text-gray-500 dark:text-gray-400 leading-tight">
                            Senior Software Engineer @ Ex-Capgemini
                          </p>
                        </div>
                        <p className="text-lg italic text-gray-700 dark:text-gray-200 leading-relaxed">
                          "Utkarsh brings integrity, clarity, and collaboration to every project, a truly dependable and results-driven professional."
                        </p>
                        <div className="pt-2">
                          <Button 
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/details/recommendations/?detailScreenTabIndex=0', '_blank')}
                          >
                            View Full Testimonial
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                
                {/* Pagination Dots */}
                <div className="swiper-pagination flex justify-center mt-4"></div>
              </motion.div>
            </div>

                                              {/* Column 3 - Image Carousel */}
                <div className="lg:col-span-6 lg:pt-45 self-start">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg"
                  >
                    <Swiper
                      ref={desktopSwiperRef}
                      grabCursor={true}
                      centeredSlides={true}
                      slidesPerView="auto"
                      spaceBetween={20}
                      modules={[]}
                      className="w-full"
                      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                      onTouchStart={handleUserInteraction}
                      onMouseEnter={handleUserInteraction}
                      loop={true}
                    >
                  {galleryItems.map((item, index) => item && (
                    <SwiperSlide key={index} className="w-[80%] max-w-[400px] pb-2">
                      <div className="flex flex-col items-center h-full">
                        <div className="relative w-full h-[730px] rounded-2xl overflow-hidden transition-all duration-500 bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={item.image}
                            alt={item.caption}
                            fill
                            className="object-cover"
                            quality={100}
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                          {item.caption}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

            </div>

                                                              {/* Column 4 - Me to ChatGPT */}
                <div className="lg:col-span-4">
                  <motion.div
                    className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center lg:min-h-[1000px] h-1000px w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Me to ChatGPT
                </h3>
                <div className="space-y-3 text-2xl text-gray-700 dark:text-gray-300 flex-1 flex flex-col justify-center">
                  <GoogleSearchItem 
                    text="how to recover spoiled milk?" 
                    delay={0} 
                  />
                  <GoogleSearchItem 
                    text="how much coffee is too much?" 
                    delay={1000} 
                  />
                  <GoogleSearchItem 
                    text="how i suppose to know that I'm God?" 
                    delay={2000} 
                  />
                  <GoogleSearchItem 
                    text="how to undo git push?" 
                    delay={3000} 
                  />
                  <GoogleSearchItem 
                    text="does touching grass really reduce my stress?" 
                    delay={4000} 
                  />
                  <GoogleSearchItem 
                    text="is it impostor syndrome or am I actually bad?" 
                    delay={5000} 
                  />
                  <GoogleSearchItem 
                    text="can your laptop judge you?" 
                    delay={6000} 
                  />
                  <GoogleSearchItem 
                    text="am I the Ted or the side character in my own story?" 
                    delay={7000} 
                  />
                  <GoogleSearchItem 
                    text="how to stop judging people?" 
                    delay={8000} 
                  />
                  <GoogleSearchItem 
                    text="how to make friends?? and why should I make friends?" 
                    delay={9000} 
                  />
                  <GoogleSearchItem 
                    text="were Ross and Rachel really on a break?" 
                    delay={10000} 
                  />
                  <GoogleSearchItem 
                    text="how to manipulate roomate to leave the apartment?" 
                    delay={11000} 
                  />
                  <GoogleSearchItem 
                    text="how do I know if I'm dead or alive?" 
                    delay={12000} 
                  />
                  <GoogleSearchItem 
                    text="how to become Dwight Schrute?" 
                    delay={13000} 
                  />
                  <GoogleSearchItem 
                    text="why people consider bullying is bad thing?" 
                    delay={14000} 
                  />
                  <GoogleSearchItem 
                    text="what's that song that goes tu tu tu tu… max wes…" 
                    delay={15000} 
                  />
                </div>
              </motion.div>
            </div>
          </div>



          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden space-y-8">
            {/* Weekend To-Do List */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center lg:min-h-[900px] w-full"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                My Weekend To-Do List
              </h3>
              <div className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                <TodoItem 
                  text="9hr Sleep 😴" 
                  delay={0} 
                  shouldCheck={false} 
                  checkDelay={14000}
                />
                <TodoItem 
                  text="Buy Coffee and milk ☕" 
                  delay={1000} 
                  shouldCheck={true} 
                  checkDelay={15000}
                />
                <TodoItem 
                  text="Don't Drink Coffee 😬" 
                  delay={2000} 
                  shouldCheck={false} 
                  checkDelay={16000}
                />
                <TodoItem 
                  text="Laundry 🧺" 
                  delay={3000} 
                  shouldCheck={true} 
                  checkDelay={17000}
                />
                <TodoItem 
                  text="Check Mailbox 📬" 
                  delay={4000} 
                  shouldCheck={true} 
                  checkDelay={18000}
                />
                <TodoItem 
                  text="Make slides of a fake TED Talk 🌌" 
                  delay={5000} 
                  shouldCheck={true} 
                  checkDelay={19000}
                />
                <TodoItem 
                  text="Touch Grass 🍃" 
                  delay={6000} 
                  shouldCheck={true} 
                  checkDelay={20000}
                />
                <TodoItem 
                  text="Doodle on a sticky note ✏️" 
                  delay={7000} 
                  shouldCheck={true} 
                  checkDelay={21000}
                />
                <TodoItem 
                  text="Rearrange Furniture 🪑" 
                  delay={8000} 
                  shouldCheck={false} 
                  checkDelay={22000}
                />
                <TodoItem 
                  text="Watch a movie 🎬" 
                  delay={9000} 
                  shouldCheck={true} 
                  checkDelay={23000}
                />
                <TodoItem 
                  text="Scroll Regretfully for 4hrs📱" 
                  delay={10000} 
                  shouldCheck={false} 
                  checkDelay={24000}
                />
                <TodoItem 
                  text="Overthink Future 🧠" 
                  delay={11000} 
                  shouldCheck={true} 
                  checkDelay={25000}
                />
                <TodoItem 
                  text="Eat 3 meals 🥗" 
                  delay={12000} 
                  shouldCheck={false} 
                  checkDelay={26000}
                />
                <TodoItem 
                  text="Ignore Notifications 🔕" 
                  delay={13000} 
                  shouldCheck={true} 
                  checkDelay={27000}
                />
              </div>
              
              {/* Weekend Productivity Recap */}
              {showProductivityRecap && (
                <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                  Weekend Productivity Recap
                </h4>
                <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                  <TypingRecapItem 
                    text="Things I Did:" 
                    delay={0} 
                    value="9" 
                    valueColor="text-green-600" 
                  />
                  <TypingRecapItem 
                    text="Things I Missed:" 
                    delay={1000} 
                    value="5" 
                    valueColor="text-orange-600" 
                  />
                  <TypingRecapItem 
                    text="Things I Ignored on Purpose:" 
                    delay={2000} 
                    value="4" 
                    valueColor="text-red-600" 
                  />
                  <TypingRecapItem 
                    text="Fun part of the Day:" 
                    delay={3000} 
                    value="Lying on the floor" 
                    valueColor="text-blue-600" 
                  />
                  <TypingRecapItem 
                    text="Productive Weekend?:" 
                    delay={4000} 
                    value="Yepp!" 
                    valueColor="text-purple-600" 
                  />
                  <TypingRecapItem 
                    text="Readiness for Monday?:" 
                    delay={5000} 
                    value="none" 
                    valueColor="text-gray-600" 
                  />
                </div>
              </div>
              )}
            </motion.div>

            {/* About Me Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center space-y-6 bg-white dark:bg-black/20 rounded-2xl p-8 border border-gray-200 dark:border-neutral-700 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                I'm Utkarsh, {" "}
                <span className="animated-gradient">I build for the thrill..</span>
              </h2>
              
              <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300" style={{ fontSize: '18px' }}>
                <p>
                  A curious human with a stubborn laptop. I write <strong>code that works</strong> (eventually), chase 
                  <strong> side projects</strong> like they owe me money, and treat debugging like a sport. I believe in 
                  <strong> fun commits</strong>, <strong>dumb ideas that might work</strong>, and the sacred ritual of yelling at my screen 
                  before it magically fixes itself.
                </p>
                <p>
                  This whole journey started when I deleted one file… and my dad's new work computer  
                  <strong> rebooted... into darkness</strong>.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                  onClick={() => window.open('https://github.com/ubiiii', '_blank')}
                >
                  <Github size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                  onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/', '_blank')}
                >
                  <Linkedin size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                  onClick={() => window.open('https://www.instagram.com/heyy_ub/', '_blank')}
                >
                  <Instagram size={20} />
                </Button>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-lg"
            >
              <Swiper
                ref={mobileSwiperRef}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={16}
                modules={[]}
                className="w-full"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                onTouchStart={handleUserInteraction}
                onMouseEnter={handleUserInteraction}
                loop={true}
              >
                {galleryItems.map((item, index) => item && (
                  <SwiperSlide key={index} className="w-[70%] max-w-[300px] pb-6">
                    <div className="flex flex-col items-center h-full">
                      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={item.image}
                          alt={item.caption}
                          fill
                          className="object-cover"
                          quality={100}
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                        {item.caption}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Me to ChatGPT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center lg:min-h-[900px] w-full"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Me to ChatGPT
              </h3>
              <div className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                <GoogleSearchItem 
                  text="how to recover spoiled milk?" 
                  delay={0} 
                />
                <GoogleSearchItem 
                  text="how much coffee is too much?" 
                  delay={1000} 
                />
                <GoogleSearchItem 
                  text="how i suppose to know that I'm God?" 
                  delay={2000} 
                />
                <GoogleSearchItem 
                  text="how to undo git push?" 
                  delay={3000} 
                />
                <GoogleSearchItem 
                  text="does touching grass really reduce my stress?" 
                  delay={4000} 
                />
                <GoogleSearchItem 
                  text="is it impostor syndrome or am I actually bad?" 
                  delay={5000} 
                />
                <GoogleSearchItem 
                  text="can your laptop judge you?" 
                  delay={6000} 
                />
                <GoogleSearchItem 
                  text="am I the Ted or the side character in my own story?" 
                  delay={7000} 
                />
                <GoogleSearchItem 
                  text="how to stop judging people?" 
                  delay={8000} 
                />
                <GoogleSearchItem 
                  text="how to make friends?? and why should I make friends?" 
                  delay={9000} 
                />
                <GoogleSearchItem 
                  text="were Ross and Rachel really on a break?" 
                  delay={10000} 
                />
                <GoogleSearchItem 
                  text="how to manipulate roomate to leave the apartment?" 
                  delay={11000} 
                />
                <GoogleSearchItem 
                  text="how do I know if I'm dead or alive?" 
                  delay={12000} 
                />
                <GoogleSearchItem 
                  text="how to become Dwight Schrute?" 
                  delay={13000} 
                />
                <GoogleSearchItem 
                  text="why people consider bullying is bad thing?" 
                  delay={14000} 
                />
                <GoogleSearchItem 
                  text="what's that song that goes tu tu tu tu… max wes…" 
                  delay={15000} 
                />
              </div>
            </motion.div>

            {/* Mobile Carousel Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
                            <div className="w-full max-w-2xl bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl px-4 py-2 border border-neutral-200 dark:border-neutral-700 shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                    Hear it from the people
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-tight">
                    What others say about working with me
                  </p>
                </div>
                <Swiper
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={1}
                  spaceBetween={20}
                  modules={[Autoplay, Pagination]}
                  className="w-full"
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  pagination={{
                    clickable: true,
                    el: '.swiper-pagination-mobile',
                  }}
                >


                {/* Slide 2 - Testimonial #1 */}
                <SwiperSlide className="flex items-center justify-center">
                  <div className="flex flex-col items-center space-y-4 w-full">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/testimonials/shruti.jpg"
                        alt="Shruti Tayade"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Shruti Tayade
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Senior Software Analyst @ Capgemini
                      </p>
                      <p className="text-base italic text-gray-700 dark:text-gray-200">
                        "Utkarsh consistently delivered high-quality results, combining technical excellence with strong teamwork and professionalism"
                      </p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/details/recommendations/?detailScreenTabIndex=0', '_blank')}
                    >
                      View Full Testimonial
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </SwiperSlide>

                {/* Slide 3 - Testimonial #2 */}
                <SwiperSlide className="flex items-center justify-center">
                  <div className="flex flex-col items-center space-y-4 w-full">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/testimonials/inshal.jpg"
                        alt="Inshal"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Mohammad Inshal P.
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Software Developer Associate @ LRN Technologies
                      </p>
                      <p className="text-base italic text-gray-700 dark:text-gray-200">
                        "Utkarsh blends technical brilliance with proactive problem-solving and consistently delivers scalable, high-impact solutions."
                      </p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/details/recommendations/?detailScreenTabIndex=0', '_blank')}
                    >
                      View Full Testimonial
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </SwiperSlide>

                {/* Slide 4 - Testimonial #3 */}
                <SwiperSlide className="flex items-center justify-center">
                  <div className="flex flex-col items-center space-y-4 w-full">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/testimonials/zoheb.jpg"
                        alt="Zoheb"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Zoheb Waghu
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Senior Software Engineer @ Capgemini
                      </p>
                      <p className="text-base italic text-gray-700 dark:text-gray-200">
                        "Utkarsh brings integrity, clarity, and collaboration to every project — a truly dependable and results-driven professional."
                      </p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/details/recommendations/?detailScreenTabIndex=0', '_blank')}
                    >
                      View Full Testimonial
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </SwiperSlide>
              </Swiper>
              
              {/* Pagination Dots - Mobile */}
              <div className="swiper-pagination-mobile flex justify-center mt-4"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section (Selected Projects) */}
       <section id="projects" className="relative z-20 px-4 md:px-12 lg:px-20 xl:px-32 py-20">
         <div className="max-w-9xl mx-auto justify-center">
           {/* Title centered */}
           <div className="mb-8 text-center relative z-30 pointer-events-none">
             <div className="text-s md:text-m tracking-[0.25em] uppercase text-muted-foreground dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">FEATURED CASE STUDIES</div>
             <h2 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
               <span className="text-foreground drop-shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">Curated</span>
                <span className="animated-gradient font-black drop-shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">&nbsp;Work</span>
             </h2>
           </div>

           {/* Desktop Layout */}
           <div className="hidden md:flex w-full gap-6">
             <div
               id="projects-left-col"
               className={`h-full transition-all duration-500 ease-out ${selectedProject ? 'w-[30%] ml-0 mr-auto' : 'w-[50%] mx-auto'}`}
             >
               <ProjectList onSelect={(slug) => {
                 setSelectedProjectSlug(slug);
               }} />
             </div>
             {selectedProject && (
               <div className="flex-1 transition-all duration-500 ease-out">
                 {/* Outer gradient border */}
                 <div className="relative overflow-hidden rounded-3xl p-[6px] bg-gradient-to-br from-neutral-200/60 via-neutral-300/60 to-neutral-200/60 dark:from-neutral-700/60 dark:via-neutral-600/60 dark:to-neutral-700/60 shadow-[0_0_28px_rgba(0,0,0,0.25)]">
                   {/* Inner neutral border to create double-border effect */}
                   <div id="projects-right-col" className="rounded-[1.3rem] p-[4px] border-2 border-white/60 dark:border-white/30 bg-white/30 dark:bg-black/25 backdrop-blur-md">
                     {/* Content container with its own subtle border */}
                     <div className="rounded-2xl p-6 md:p-8 shadow-lg h-[78vh] overflow-y-auto scrollbar-hide">
                       <div className="mb-4">
                         <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                           {selectedProject?.slug === 'blockchain-cloudguard' ? 'Research details' : 'Project details'}
                         </h3>
                       </div>
                       {/* React-rendered details */}
                       <AnimatePresence mode="wait">
                         {selectedProject && (
                           <motion.div
                             key={selectedProject.slug}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             transition={{ duration: 0.25 }}
                           >
                             <ProjectDetails project={selectedProject} />
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </div>
                   </div>
                 </div>
               </div>
             )}
           </div>

           {/* Mobile Layout - Simple Cards */}
           <div className="md:hidden space-y-6">
             {PROJECTS.map((project) => (
               <motion.div
                 key={project.slug}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 className="bg-white/30 dark:bg-black/25 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/30 overflow-hidden shadow-lg"
               >
                 {/* Project Image */}
                 <div className="relative h-48 overflow-hidden">
                   <Image
                     src={project.thumbnail}
                     alt={project.title}
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                   <div className="absolute bottom-4 left-4 right-4">
                     <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                     <div className="flex items-center gap-2 text-white/80 text-sm">
                       <span>{project.year}</span>
                       <span>•</span>
                       <span>{project.role}</span>
                     </div>
                   </div>
                 </div>

                                   {/* Project Content */}
                  <div className="p-6">
                    {/* Project Description */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.slug === 'awesome-react-native' && 
                          "A meticulously curated collection of the best React Native tools, UI components, tutorials, libraries, and analytics — all in one sleek directory."
                        }
                        {project.slug === 'brutalyze-web' && 
                          "A lightweight, privacy-focused SSH log analysis web app. Upload an auth.log and instantly detect failed logins, brute-force patterns, and IP geolocation."
                        }
                        {project.slug === 'silencium' && 
                          "A real-time, end-to-end encrypted chat app with self-destructing rooms and encrypted image sharing. No accounts, no storage, privacy-first."
                        }
                        {project.slug === 'shadowkey' && 
                          "A hacker-styled password security toolkit that checks password strength, estimates crack time, and generates strong passwords with customizable options."
                        }
                        {project.slug === 'blockchain-cloudguard' && 
                          "A decentralized cloud security platform leveraging blockchain technology for enhanced data protection and access control."
                        }
                      </p>
                    </div>

                    {/* Tech Stack */}
                    {project.techStack?.length && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-3 py-1 bg-gray-600/10 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Project Button */}
                    <div className="flex gap-3">
                     {project.liveUrl && (
                       <a
                         href={project.liveUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300"
                       >
                         <ExternalLink className="w-4 h-4" />
                         Live
                       </a>
                     )}
                     {project.sourceCode && (
                       <a
                         href={project.sourceCode}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300"
                       >
                         <Github className="w-4 h-4" />
                         GitHub
                       </a>
                     )}
                     {project.slug === 'blockchain-cloudguard' && (
                       <a
                         href="https://www.jetir.org/papers/JETIR2307677.pdf"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-300"
                       >
                         <ExternalLink className="w-4 h-4" />
                         Research
                       </a>
                     )}
                   </div>
                 </div>
               </motion.div>
             ))}
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
