import { LucideIcon } from 'lucide-react';

export interface SocialLinkData {
  id: string;
  platform: string;
  url: string;
  icon: LucideIcon;
  color: string;
  hoverColor: string;
}

export interface SkillData {
  id: number;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Mobile';
  proficiency: number; // 0-100
}
