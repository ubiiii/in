export interface IProject {
  title: string;
  year: number;
  description: string;
  role: string;
  techStack: string[];
  thumbnail: string;
  longThumbnail: string;
  images: string[];
  slug: string;
  liveUrl?: string;
  sourceCode?: string;
  type: 'Live Project' | 'Project' | 'Publication' | 'Certification';
}



