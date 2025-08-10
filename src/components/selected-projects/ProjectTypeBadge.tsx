'use client';

interface ProjectTypeBadgeProps {
  type: 'Live Project' | 'Project' | 'Publication' | 'Certification';
  className?: string;
}

export default function ProjectTypeBadge({ type, className }: ProjectTypeBadgeProps) {
  const getGradientClass = () => {
    switch (type) {
      case 'Live Project':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent';
      case 'Project':
        return 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent';
      case 'Publication':
        return 'bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent';
      case 'Certification':
        return 'bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent';
    }
  };

  return (
    <span
      className={`inline-block text-sm font-medium ${getGradientClass()} ${className || ''}`}
    >
      {type}
    </span>
  );
}
