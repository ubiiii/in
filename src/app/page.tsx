'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import TypingEffect from '@/components/typing-effect';
import { motion, useInView } from 'framer-motion';
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
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      <section id="about" ref={aboutRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Heading */}
          <motion.div 
            className="text-center mb-16"
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
                className="text-black"
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
                className="text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {" "}?
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Desktop Layout - Two Columns */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left Column - Stacked Content */}
            <div className="space-y-8">
              {/* About Me Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-6 bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-lg"
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
                    This whole journey started when I deleted one file… and my dad’s new work computer  
                    <strong> rebooted... into darkness</strong>.
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                  >
                    <Github size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                  >
                    <Linkedin size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                  >
                    <Twitter size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                  >
                    <Instagram size={20} />
                  </Button>
                </div>
              </motion.div>

              {/* Testimonials Section */}
              <motion.div 
                className="bg-white/30 backdrop-blur-lg rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl p-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
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

            {/* Right Column - Large Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-lg h-full"
            >
              <Swiper
                ref={desktopSwiperRef}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={20}
                modules={[]}
                className="w-full h-full"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                onTouchStart={handleUserInteraction}
                onMouseEnter={handleUserInteraction}
                loop={true}
              >
                {galleryItems.map((item, index) => item && (
                  <SwiperSlide key={index} className="w-[80%] max-w-[500px] pb-2">
                    <div className="flex flex-col items-center h-full">
                      <div className="relative w-full h-[800px] rounded-2xl overflow-hidden transition-all duration-500 bg-gray-100 dark:bg-gray-800">
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



          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden space-y-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center space-y-6 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                I'm Utkarsh, a passionate engineer
              </h2>
              
              <div className="space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  I'm a software engineer with a deep passion for creating innovative solutions 
                  that make a real impact. With expertise in modern web technologies and a keen 
                  eye for user experience, I love turning complex problems into elegant, 
                  user-friendly applications.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  contributing to open-source projects, or sharing knowledge with the developer 
                  community. 
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                >
                  <Github size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                >
                  <Linkedin size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
                >
                  <Twitter size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full p-3 hover:bg-gray-100 transition-colors border-gray-300 bg-white"
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
              className="flex justify-center bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-lg"
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

            {/* Mobile Carousel Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
                            <div className="w-full max-w-2xl bg-white/30 backdrop-blur-lg rounded-2xl px-4 py-2 border border-neutral-200 dark:border-neutral-700 shadow-lg">
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
