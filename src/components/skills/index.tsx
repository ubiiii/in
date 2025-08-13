import { motion } from "framer-motion";
import { skillsData } from "./data";
import { SkillBadge } from "./SkillBadge";

interface SkillsProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export function Skills({ 
  title = "The Secret Sauce",
  subtitle = "MY SKILLS",
  backgroundImage = "https://cdn.builder.io/api/v1/image/assets%2Fe741fd8932634bfea17ccb951c432943%2Fa0af54b6d8c946b3ac3f8dbf17807db9?format=webp&width=800",
  className = ""
}: SkillsProps) {
  return (
    <div className={`min-h-auto bg-transparent flex items-center justify-center pt-20 pb-8 px-8 ${className}`}>
      <div className="max-w-6xl w-full text-center space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative space-y-4"
        >
          {/* Background Image */}
          {backgroundImage && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-20">
              <img
                src={backgroundImage}
                alt=""
                className="w-96 h-96 md:w-[500px] md:h-[500px] object-contain opacity-100 rotate-continuous"
              />
            </div>
          )}
          
          <p className="text-white/70 text-lg font-medium tracking-widest uppercase relative z-10">
            {subtitle}
          </p>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white relative z-10">
            {title.includes("Sauce") ? (
              <>
                The Secret{" "}
                <span className="animated-gradient  bg-clip-text text-transparent" style={{ fontFamily: 'Arno Pro, serif' }}>
                  Sauce
                </span>
              </>
            ) : (
              title
            )}
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          {skillsData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {row.map((skill, skillIndex) => (
                <SkillBadge
                  key={skill.name}
                  skill={skill}
                  index={rowIndex * 10 + skillIndex}
                />
              ))}
            </div>
          ))}
        </motion.div>

        {/* Floating elements for visual enhancement */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
