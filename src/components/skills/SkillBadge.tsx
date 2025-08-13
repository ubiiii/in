import { motion } from "framer-motion";
import { Skill } from "./types";
import TechIcon from "./TechIcon";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`
        relative overflow-hidden rounded-xl px-6 py-3 text-2xl font-semibold
        bg-white/90 dark:bg-black/90 backdrop-blur-md
        text-black dark:text-white
        shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300
        border border-black/30 dark:border-white/30 hover:bg-white dark:hover:bg-black
      `}
    >
              <div className="flex items-center gap-3">
        <TechIcon name={skill.name} className="w-6 h-6" />
        <span>{skill.name}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />
    </motion.div>
  );
}
