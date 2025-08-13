# Skills Component

A beautiful, animated skills showcase component with rotating background image and gradient skill badges.

## Usage

### Basic Usage
```tsx
import { Skills } from "@/components/skills";

function MyPage() {
  return <Skills />;
}
```

### Custom Props
```tsx
import { Skills } from "@/components/skills";

function MyPage() {
  return (
    <Skills 
      title="My Expertise"
      subtitle="WHAT I DO"
      backgroundImage="path/to/your/image.png"
      className="custom-class"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"The Secret Sauce"` | Main heading text |
| `subtitle` | `string` | `"MY SKILLS"` | Subtitle text above main heading |
| `backgroundImage` | `string` | Default rotating image | URL to background image |
| `className` | `string` | `""` | Additional CSS classes |

## Customizing Skills

To modify the skills displayed, edit the `data.ts` file:

```tsx
// client/components/skills/data.ts
export const skillsData: SkillsData = [
  [
    { name: "Your Skill", icon: YourIcon, color: "from-blue-500 to-cyan-400" },
    // ... more skills
  ],
  // ... more rows
];
```

## File Structure

```
client/components/skills/
├── index.tsx          # Main component
├── SkillBadge.tsx     # Individual skill badge
├── data.ts            # Skills configuration
├── types.ts           # TypeScript types
└── README.md          # This file
```

## Dependencies

- `framer-motion` - For animations
- `lucide-react` - For icons
- `tailwindcss` - For styling

## Features

- ✨ Smooth entrance animations
- 🎯 Hover effects on skill badges
- 🔄 Rotating background image
- 📱 Fully responsive
- 🎨 Customizable colors and content
- ⚡ TypeScript support
