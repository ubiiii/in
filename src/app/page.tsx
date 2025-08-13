'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import TypingEffect from '@/components/typing-effect';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { selectedProjects } from "@/components/selected-projects/data";
import { ProjectModal } from "@/components/selected-projects/ProjectModal";
import { useFluidCursor } from "@/hooks/use-FluidCursor";

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

// Confetti Component
const Confetti = ({ isActive }: { isActive: boolean }) => {
  const confettiColors = [
    "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", 
    "#ff9ff3", "#54a0ff", "#5f27cd", "#00d2d3", "#ff9f43"
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {isActive && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            backgroundColor: confettiColors[i % confettiColors.length],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotate: 0,
            y: 0,
            x: 0
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 360, 720],
            y: [0, -100, -200],
            x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 0.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        />
      ))}
    </div>
  );
};

// Emoji Floating Components for each card
const FloatingEmojis2008 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🖥️", "💻", "❌", "⚠️", "😬", "🤦‍♂️", "💥", "🔴", "📵"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2010 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🎮", "🎧", "🎶", "🕹️", "😊"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2012 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🤔", "💻", "🔍", "💡", "🧠", "✨"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2015 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🔧", "🛠️", "🖥️", "💡", "🧰"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2017 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🖥️", "🔧", "🏘️", "🤝", "🔩"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2018 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🎓", "🏫", "💻", "🔢", "🌟"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2019 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🤖", "✨", "🧑‍💻", "🚀"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2021 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["💻", "💰", "🔗", "🤹‍♂️", "🔍"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2022 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🎓", "💼", "🌍", "🏢", "🚀"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2023 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["📄", "🔗", "📚", "🌟", "📝"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

const FloatingEmojis2024 = ({ isActive }: { isActive: boolean }) => {
  const emojis = ["🏆", "📈", "💼", "🎯", "🎓"];
  return <FloatingEmojisBase isActive={isActive} emojis={emojis} />;
};

// Base component for floating emojis
const FloatingEmojisBase = ({ isActive, emojis }: { isActive: boolean; emojis: string[] }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {isActive && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotate: 0,
            y: 0,
            x: 0
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
            y: [0, -80, -160],
            x: [0, Math.random() * 60 - 30, Math.random() * 120 - 60]
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 0.8,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 0.8
          }}
        >
          {emojis[i % emojis.length]}
        </motion.div>
      ))}
    </div>
  );
};



// Timeline Card Component with Entry/Exit Animations (Mobile)
const TimelineCard = ({ 
  year, 
  image, 
  alt, 
  description, 
  position = 'left', // 'left', 'center', 'right'
  delay = 0 
}: { 
  year: string; 
  image: string; 
  alt: string;
  description: string; 
  position?: 'left' | 'center' | 'right';
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity for exit animation
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Define animations based on position
  const getAnimations = () => {
    switch (position) {
      case 'left':
        return {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -50 }
        };
      case 'right':
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 50 }
        };
      case 'center':
      default:
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.9 }
        };
    }
  };

  const animations = getAnimations();

  return (
    <motion.div
      ref={ref}
      initial={animations.initial}
      animate={isInView ? animations.animate : animations.initial}
      exit={animations.exit}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut" 
      }}
      style={{ opacity }}
      className="w-full"
    >
      <div className="timeline-card rounded-2xl w-full flex flex-col gap-6 p-6 relative z-50">
        <h3 className="text-4xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">
          {year}
        </h3>
        <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
          <div className="mb-4">
            <Image
              src={image}
              alt={alt}
              width={600}
              height={450}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <p className="text-lg text-neutral-900 dark:text-white leading-relaxed m-0">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Desktop Timeline Card Component with Entry/Exit Animations
const DesktopTimelineCard = ({ 
  year, 
  image, 
  alt, 
  description, 
  position = 'left', // 'left', 'center', 'right'
  delay = 0,
  className = "",
  children
}: { 
  year: string; 
  image: string; 
  alt: string; 
  description: string; 
  position?: 'left' | 'center' | 'right';
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity for exit animation
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Define animations based on position
  const getAnimations = () => {
    switch (position) {
      case 'left':
        return {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -50 }
        };
      case 'right':
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 50 }
        };
      case 'center':
      default:
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.9 }
        };
    }
  };

  const animations = getAnimations();

  return (
    <motion.div
      ref={ref}
      initial={animations.initial}
      animate={isInView ? animations.animate : animations.initial}
      exit={animations.exit}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut" 
      }}
      style={{ opacity }}
      className={className}
    >
      {children}
    </motion.div>
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
    { image: '/I\'m Utkarsh.jpg', caption: 'I\'m Utkarsh B Lubal' },
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
             Au revoir!!
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
              onClick={() => window.open('https://github.com/ubiiii', '_blank')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 dark:bg-black/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                <Layers size={44} strokeWidth={2} color="#856ED9" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Github</span>
              </div>
            </Button>
            <Button
              onClick={() => scrollToSection('hobbies')}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 dark:bg-black/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:py-10 lg:py-12"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                <PartyPopper size={44} strokeWidth={2} color="#B95F9D" />
                <span className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Journey</span>
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
                  <div className="hidden lg:grid lg:grid-cols-20 lg:gap-8 lg:items-stretch lg:min-h-[900px] -mt-20 group/all-containers">
                                                                      {/* Column 1 - My Weekend To-Do List */}
                <div className="lg:col-span-4">
                  <motion.div
                    className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center w-full hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] transition-all duration-300"
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
                className="space-y-6 bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] transition-all duration-300"
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
                className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] transition-all duration-300"
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
                    className="relative bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] transition-all duration-300"
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
                    className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center lg:min-h-[1000px] h-1000px w-full hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] transition-all duration-300"
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
              className="hidden bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center lg:min-h-[900px] w-full"
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
              className="flex justify-center bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] transition-all duration-300"
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
              className="hidden bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center lg:min-h-[900px] w-full hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] transition-all duration-300"
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
                       {selectedProject?.slug !== 'skills' && (
                         <div className="mb-4">
                           <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                             {selectedProject?.slug === 'blockchain-cloudguard' ? 'Research details' : 
                              selectedProject?.slug === 'python-ethical-hacking' || selectedProject?.slug === 'cyber-security' ? 'Certification details' : 'Project details'}
                           </h3>
                         </div>
                       )}
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
                        {project.slug === 'python-ethical-hacking' && 
                          "Comprehensive certification covering Python programming fundamentals and ethical hacking methodologies for cybersecurity professionals."
                        }
                        {project.slug === 'cyber-security' && 
                          "Comprehensive understanding of key cybersecurity concepts, tools, and attack strategies through practical labs and guided instruction."
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



             {/* My Journey Section - Desktop Only */}
       <section id="hobbies" className="relative py-16 hidden lg:block">
         {/* Title centered */}
         <div className="mb-8 text-center relative z-30 pointer-events-none">
           <div className="text-s md:text-m tracking-[0.25em] uppercase text-muted-foreground dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">LIFE TIMELINE</div>
           <h2 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
             <span className="text-foreground drop-shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">My</span>
              <span className="animated-gradient font-black drop-shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">&nbsp;Journey</span>
           </h2>
         </div>

         {/* Grid of Cards */}
         <div className="w-full md:w-4/5 max-w-8xl mx-auto px-0 relative z-40">
           {/* First Row - 3 cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -gap-8 mb-8 pl-8">
             {/* 2000 Card */}
             <DesktopTimelineCard
               year="2000"
               image="/2000.png"
               alt="Born on a warm summer evening in India"
               description="Born on a warm summer evening in India, little did the world know, a future tech geek had arrived!"
               position="left"
               delay={0}
               className="group flex justify-end"
             >
               {(() => {
                 const [isConfettiActive, setIsConfettiActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl w-full flex flex-col gap-6 max-w-3xl h-[40rem] p-8 relative z-50"
                     onMouseEnter={() => setIsConfettiActive(true)}
                     onMouseLeave={() => setIsConfettiActive(false)}
                   >
                     <Confetti isActive={isConfettiActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2000</h3>
                     <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2000.png"
                       alt="Born on a warm summer evening in India"
                       width={600}
                       height={450}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                       <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Born on a warm summer evening in India, little did the world know, a future tech geek had arrived!
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>

             {/* 2008 Card */}
             <DesktopTimelineCard
               year="2008"
               image="/2008.png"
               alt="Met a computer for the first time"
               description="Met a computer for the first time. Accidentally deleted a random file on my dad's work PC... and yes, the computer never woke up again. I also got a legendary scolding!"
               position="right"
               delay={0.1}
               className="group flex justify-start"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl w-full flex flex-col gap-6 max-w-4xl pt-32 pb-8 px-8 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2008 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2008</h3>
                     <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2008.png"
                       alt="Met a computer for the first time"
                       width={400}
                       height={300}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                       <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Met a computer for the first time. Accidentally deleted a random file on my dad's work PC... and yes, the computer never woke up again. I also got a legendary scolding!
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>

             {/* 2010 Card */}
             <DesktopTimelineCard
               year="2010"
               image="/2010.png"
               alt="Discovered video games and music"
               description="Discovered video games and music —my two favorite ways to procrastinate productively."
               position="center"
               delay={0.2}
               className="group flex justify-center"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl w-full flex flex-col gap-6 max-w-md h-96 pt-0 pr-2 pb-8 pl-4 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2010 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2010</h3>
                     <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2010.png"
                       alt="Discovered video games and music"
                       width={400}
                       height={300}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                       <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Discovered video games and music —my two favorite ways to procrastinate productively.
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>
           </div>

           {/* Second Row - 3 cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-12">
             {/* 2012 Card */}
             <DesktopTimelineCard
               year="2012"
               image="/2012.png"
               alt="Got curious about how those mysterious programs worked"
               description="Got curious about how those mysterious programs worked and started poking around the computer like a tiny hacker."
               position="left"
               delay={0.3}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-0 pr-8 pb-8 pl-8 w-full max-w-xl h-[35rem] flex flex-col gap-6 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2012 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2012</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2012.png"
                       alt="Got curious about how those mysterious programs worked"
                       width={600}
                       height={450}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Got curious about how those mysterious programs worked and started poking around the computer like a tiny hacker.
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>

             {/* 2015 Card */}
             <DesktopTimelineCard
               year="2015"
               image="/2015.png"
               alt="Became a regular at the local repair shop"
               description="Became a regular at the local repair shop, fixing computers and pretending I was a tech wizard."
               position="center"
               delay={0.4}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-20 pr-8 pb-8 pl-4 w-full max-w-full h-[35rem] flex flex-col gap-6 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2015 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2015</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2015.png"
                       alt="Became a regular at the local repair shop"
                       width={1400}
                       height={1050}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Became a regular at the local repair shop, fixing computers and pretending I was a tech wizard.
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>

             {/* 2017 Card */}
             <DesktopTimelineCard
               year="2017"
               image="/2017.png"
               alt="Started repairing computers for neighbors and friends"
               description="Started repairing computers for neighbors and friends, building trust and skills in the local community."
               position="right"
               delay={0.5}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-16 pr-8 pb-8 pl-8 w-full max-w-xl h-[35rem] flex flex-col gap-6 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2017 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2017</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2017.png"
                       alt="Started repairing computers for neighbors and friends"
                       width={600}
                       height={450}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Started repairing computers for neighbors and friends, building trust and skills in the local community.
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>
           </div>

           {/* Third Row - 3 cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 -mb-20 -mx-8">
             {/* 2019 Card */}
             <DesktopTimelineCard
               year="2019"
               image="/2019.png"
               alt="Built my first AI assistant"
               description="Built my first AI assistant —felt like Iron Man."
               position="left"
               delay={0.6}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-95 pr-8 pb-8 pl-8 w-full max-w-[3000px] h-[60rem] flex flex-col gap-6 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2019 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2019</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2019.png"
                       alt="Built my first AI assistant"
                       width={9600}
                       height={7200}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                         Built my first AI assistant —felt like Iron Man.
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>

             {/* 2018 Card */}
             <DesktopTimelineCard
               year="2018"
               image="/2018.png"
               alt="To explore the binary world further"
               description="To explore the binary world further, enrolled in Computer Science and Engineering."
               position="center"
               delay={0.7}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-32 pr-8 pb-0 pl-8 w-full max-w-full h-[20rem] flex flex-col gap-6 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2018 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2018</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2018.png"
                       alt="To explore the binary world further"
                       width={4000}
                       height={3000}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     To explore the binary world further, enrolled in Computer Science and Engineering.
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>

             {/* 2021 Card */}
             <DesktopTimelineCard
               year="2021"
               image="/2021.png"
               alt="Juggled freelance projects while diving into blockchain research"
               description="Juggled freelance projects while diving into blockchain research —because why not?"
               position="right"
               delay={0.8}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-95 pr-8 pb-8 pl-8 w-full max-w-4xl h-[30rem] flex flex-col gap-6 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2021 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2021</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2021.png"
                       alt="Juggled freelance projects while diving into blockchain research"
                       width={1800}
                       height={1350}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Juggled freelance projects while diving into blockchain research —because why not?
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>
           </div>

           {/* Fourth Row - 3 cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 -mt-20 -mx-8">
             {/* 2023 Card */}
             <DesktopTimelineCard
               year="2023"
               image="/2023.png"
               alt="Published my first blockchain research paper"
               description="Published my first blockchain research paper —proof that I can talk tech AND write!"
               position="left"
               delay={0.9}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-80 pr-4 pb-4 pl-4 w-full max-w-2xl h-[80rem] flex flex-col gap-6 relative z-50 -mt-15"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2023 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2023</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2023.png"
                       alt="Published my first blockchain research paper"
                       width={2000}
                       height={1500}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Published my first blockchain research paper —proof that I can talk tech AND write!
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>

             {/* 2022 Card */}
             <DesktopTimelineCard
               year="2022"
               image="/2022.png"
               alt="Graduated and landed a job at Capgemini"
               description="Graduated and landed a job at Capgemini, one of the world's biggest tech giants."
               position="center"
               delay={1.0}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-0 pr-0 pb-0 pl-0 w-full max-w-6xl h-[60rem] flex flex-col gap-6 relative z-50 -mt-8 -mb-8"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2022 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2022</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2022.png"
                       alt="Graduated and landed a job at Capgemini"
                       width={30000}
                       height={22500}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Graduated and landed a job at Capgemini, one of the world's biggest tech giants.
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>

             {/* 2024 Card */}
             <DesktopTimelineCard
               year="2024"
               image="/2024.png"
               alt="Fueled by success and a recent promotion"
               description="Fueled by success and a recent promotion, I stepped into a vibrant tech community, exchanging ideas and inspiration. Yet, my passion for learning pushed me to pursue a Master's degree in Computer Science to reach even greater heights."
               position="right"
               delay={1.1}
               className="group"
             >
               {(() => {
                 const [isEmojisActive, setIsEmojisActive] = useState(false);
                 
                 return (
                   <div 
                     className="timeline-card rounded-2xl pt-40 pr-8 pb-8 pl-8 w-full max-w-3xl h-[25rem] flex flex-col gap-6 relative z-50"
                     onMouseEnter={() => setIsEmojisActive(true)}
                     onMouseLeave={() => setIsEmojisActive(false)}
                   >
                     <FloatingEmojis2024 isActive={isEmojisActive} />
                 <h3 className="text-5xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0">2024</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2024.png"
                       alt="Fueled by success and a recent promotion"
                       width={400}
                       height={300}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Fueled by success and a recent promotion, I stepped into a vibrant tech community, exchanging ideas and inspiration. Yet, my passion for learning pushed me to pursue a Master's degree in Computer Science to reach even greater heights.
                   </p>
                 </div>
               </div>
                 );
               })()}
             </DesktopTimelineCard>
           </div>

           {/* Fifth Row - 1 card centered (2025) */}
           <div className="grid grid-cols-1 gap-0 justify-items-center">
             {/* 2025 Card */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
               viewport={{ once: true }}
               className="group"
             >
               <div className="timeline-card rounded-2xl pt-0 pr-12 pb-12 pl-12 w-full max-w-6xl flex flex-col gap-8 relative z-50 -mt-20">
                 <h3 className="text-8xl font-bold font-mono text-neutral-900 dark:text-white tracking-wider m-0 text-center">2025</h3>
                 <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg">
                   <div className="mb-4">
                     <Image
                       src="/2025.png"
                       alt="Took a big leap across the globe to the USA"
                       width={800}
                       height={400}
                       className="w-full rounded-lg object-cover"
                     />
                   </div>
                   <p className="text-2xl text-neutral-900 dark:text-white leading-relaxed m-0">
                     Took a big leap across the globe to the USA, enrolling at California State University to dive deeper into research and master the ever-evolving world of technology.
                   </p>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>

       {/* Mobile Journey Section - Only visible on mobile */}
       <section className="lg:hidden py-16 px-4">
         <div className="max-w-4xl mx-auto">
           {/* Title centered */}
           <div className="mb-8 text-center relative z-30 pointer-events-none">
             <div className="text-s tracking-[0.25em] uppercase text-muted-foreground dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">LIFE TIMELINE</div>
             <h2 className="mt-2 text-4xl font-extrabold leading-none">
               <span className="text-foreground drop-shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">My</span>
                <span className="animated-gradient font-black drop-shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">&nbsp;Journey</span>
             </h2>
           </div>

           {/* Mobile Cards - Single Column */}
           <div className="space-y-8">
             {/* 2000 Card */}
             <TimelineCard
               year="2000"
               image="/2000.png"
               alt="Born on a warm summer evening in India"
               description="Born on a warm summer evening in India, little did the world know, a future tech geek had arrived!"
               position="left"
               delay={0}
             />

             {/* 2008 Card */}
             <TimelineCard
               year="2008"
               image="/2008.png"
               alt="Met a computer for the first time"
               description="Met a computer for the first time. Accidentally deleted a random file on my dad's work PC... and yes, the computer never woke up again. I also got a legendary scolding!"
               position="right"
               delay={0.1}
             />

             {/* 2010 Card */}
             <TimelineCard
               year="2010"
               image="/2010.png"
               alt="Discovered video games and music"
               description="Discovered video games and music —my two favorite ways to procrastinate productively."
               position="center"
               delay={0.2}
             />

             {/* 2012 Card */}
             <TimelineCard
               year="2012"
               image="/2012.png"
               alt="Got curious about how those mysterious programs worked"
               description="Got curious about how those mysterious programs worked and started poking around the computer like a tiny hacker."
               position="left"
               delay={0.3}
             />

             {/* 2015 Card */}
             <TimelineCard
               year="2015"
               image="/2015.png"
               alt="Became a regular at the local repair shop"
               description="Became a regular at the local repair shop, fixing computers and pretending I was a tech wizard."
               position="right"
               delay={0.4}
             />

             {/* 2017 Card */}
             <TimelineCard
               year="2017"
               image="/2017.png"
               alt="Started repairing computers for neighbors and friends"
               description="Started repairing computers for neighbors and friends, building trust and skills in the local community."
               position="left"
               delay={0.5}
             />

             {/* 2018 Card */}
             <TimelineCard
               year="2018"
               image="/2018.png"
               alt="To explore the binary world further"
               description="To explore the binary world further, enrolled in Computer Science and Engineering."
               position="center"
               delay={0.6}
             />

             {/* 2019 Card */}
             <TimelineCard
               year="2019"
               image="/2019.png"
               alt="Built my first AI assistant"
               description="Built my first AI assistant —felt like Iron Man."
               position="right"
               delay={0.7}
             />

             {/* 2021 Card */}
             <TimelineCard
               year="2021"
               image="/2021.png"
               alt="Juggled freelance projects while diving into blockchain research"
               description="Juggled freelance projects while diving into blockchain research —because why not?"
               position="left"
               delay={0.8}
             />

             {/* 2022 Card */}
             <TimelineCard
               year="2022"
               image="/2022.png"
               alt="Graduated and landed a job at Capgemini"
               description="Graduated and landed a job at Capgemini, one of the world's biggest tech giants."
               position="center"
               delay={0.9}
             />

             {/* 2023 Card */}
             <TimelineCard
               year="2023"
               image="/2023.png"
               alt="Published my first blockchain research paper"
               description="Published my first blockchain research paper —proof that I can talk tech AND write!"
               position="right"
               delay={1.0}
             />

             {/* 2024 Card */}
             <TimelineCard
               year="2024"
               image="/2024.png"
               alt="Fueled by success and a recent promotion"
               description="Fueled by success and a recent promotion, I stepped into a vibrant tech community, exchanging ideas and inspiration. Yet, my passion for learning pushed me to pursue a Master's degree in Computer Science to reach even greater heights."
               position="left"
               delay={1.1}
             />

             {/* 2025 Card */}
             <TimelineCard
               year="2025"
               image="/2025.png"
               alt="Took a big leap across the globe to the USA"
               description="Took a big leap across the globe to the USA, enrolling at California State University to dive deeper into research and master the ever-evolving world of technology."
               position="center"
               delay={1.2}
             />
           </div>
         </div>
       </section>

             {/* Contact Section */}
       <section id="contact" className="px-4 py-12 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute inset-0 "></div>
         <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
         
         <div className="max-w-4xl mx-auto w-full relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-center mb-8"
           >
             <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
               Ready to collaborate on something amazing?
             </h2>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex flex-col sm:flex-row justify-center items-center gap-6"
           >
             <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.2 }}>
               <Button 
                 onClick={() => window.open('mailto:utkarshbalulubal@gmail.com', '_blank')}
                 className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-4 text-lg font-medium cursor-pointer"
               >
                 <Mail size={22} className="mr-3" />
                 Email
               </Button>
             </motion.div>
             
             <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.2 }}>
               <Button 
                 onClick={() => window.open('https://github.com/ubiiii', '_blank')}
                 className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-4 text-lg font-medium cursor-pointer"
               >
                 <Github size={22} className="mr-3" />
                 GitHub
               </Button>
             </motion.div>
             
             <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.2 }}>
               <Button 
                 onClick={() => window.open('https://www.linkedin.com/in/utkarsh-lubal/', '_blank')}
                 className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-4 text-lg font-medium cursor-pointer"
               >
                 <Linkedin size={22} className="mr-3" />
                 LinkedIn
               </Button>
             </motion.div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="text-center mt-6"
           >
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-full border border-neutral-200 dark:border-neutral-700">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-m text-gray-600 dark:text-gray-300">
                 Available for new opportunities
               </span>
             </div>
           </motion.div>
         </div>
       </section>

      <FluidCursor />
    </div>
  );
}
