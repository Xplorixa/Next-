import { Github, Instagram, MessageCircle, Twitter, Youtube } from 'lucide-react';
import { SocialLinkData, SkillData } from './types';

export const PROFILE_DATA = {
  name: "Bharat",
  username: "@FireBharat",
  avatarUrl: "https://yt3.ggpht.com/PlkxShodaJsAvnqOMJpDShpbo_WiSgW_y0ba6S73PUIBW52mTuWc78GZ_2FGh62qCM3p3vIkEQ=s160-c-k-c0x00ffffff-no-rj",
  tagline: "Building digital experiences with passion & code.",
  location: "India",
  bio: "Full-stack developer passionate about React ecosystem and modern web performance. Creator of awesome things."
};

export const SOCIAL_LINKS: SocialLinkData[] = [
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/Bharat99978',
    icon: Github,
    color: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-700',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    url: 'https://youtube.com/@bharat_official3775',
    icon: Youtube,
    color: 'bg-red-600',
    hoverColor: 'hover:bg-red-500',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://www.instagram.com/mrk_official_php',
    icon: Instagram,
    color: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-500',
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    url: 'https://wa.me/+919322461670',
    icon: MessageCircle,
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-500',
  },
  {
    id: 'twitter',
    platform: 'Twitter',
    url: 'https://x.com/FireBharat',
    icon: Twitter,
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-400',
  },
];

// Generating a larger list to demonstrate react-window virtualization
export const SKILLS_LIST: SkillData[] = [
  { id: 1, name: "React", category: "Frontend", proficiency: 95 },
  { id: 2, name: "TypeScript", category: "Frontend", proficiency: 90 },
  { id: 3, name: "Tailwind CSS", category: "Frontend", proficiency: 98 },
  { id: 4, name: "Node.js", category: "Backend", proficiency: 85 },
  { id: 5, name: "Vite", category: "Tools", proficiency: 92 },
  { id: 6, name: "Next.js", category: "Frontend", proficiency: 88 },
  { id: 7, name: "PostgreSQL", category: "Backend", proficiency: 80 },
  { id: 8, name: "GraphQL", category: "Backend", proficiency: 75 },
  { id: 9, name: "Docker", category: "Tools", proficiency: 70 },
  { id: 10, name: "Git", category: "Tools", proficiency: 90 },
  { id: 11, name: "PHP", category: "Backend", proficiency: 60 },
  { id: 12, name: "Figma", category: "Tools", proficiency: 65 },
  { id: 13, name: "Redux", category: "Frontend", proficiency: 85 },
  { id: 14, name: "Webpack", category: "Tools", proficiency: 70 },
  { id: 15, name: "Python", category: "Backend", proficiency: 50 },
  { id: 16, name: "AWS", category: "Tools", proficiency: 60 },
  { id: 17, name: "React Native", category: "Mobile", proficiency: 80 },
  { id: 18, name: "Jest", category: "Tools", proficiency: 75 },
  { id: 19, name: "Prisma", category: "Backend", proficiency: 82 },
  { id: 20, name: "Three.js", category: "Frontend", proficiency: 65 },
];
