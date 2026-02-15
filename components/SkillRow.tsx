import React from 'react';
import { SkillData } from '../types';

interface SkillRowProps {
  data: SkillData[];
  index: number;
  style: React.CSSProperties;
}

export const SkillRow: React.FC<SkillRowProps> = ({ data, index, style }) => {
  const skill = data[index];
  
  // Gap adjustments
  const rowStyle = {
    ...style,
    top: (parseFloat(style.top as string) || 0) + 6, 
    height: (parseFloat(style.height as string) || 0) - 12,
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]';
      case 'Backend': return 'bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]';
      case 'Mobile': return 'bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.6)]';
      default: return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]';
    }
  };

  return (
    <div style={rowStyle} className="px-1 group">
      <div className="relative flex items-center justify-between w-full h-full px-4 py-2 transition-all duration-300 border rounded-lg bg-slate-800/40 border-white/5 hover:border-white/20 hover:bg-slate-800/60 hover:translate-x-1">
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>

        <div className="flex items-center gap-3 relative z-10">
          <div className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(skill.category)}`} />
          <span className="font-medium text-sm text-slate-300 group-hover:text-white transition-colors tracking-wide">{skill.name}</span>
        </div>
        
        <div className="flex items-center gap-3 relative z-10">
           {/* Futuristic Progress Bar */}
           <div className="w-20 h-1 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
             <div 
               className={`h-full rounded-full relative transition-all duration-1000 ease-out group-hover:brightness-125 ${
                 skill.proficiency > 90 ? 'bg-cyan-500' : 
                 skill.proficiency > 75 ? 'bg-violet-500' : 'bg-fuchsia-500'
               }`}
               style={{ 
                 width: `${skill.proficiency}%`,
                 boxShadow: '0 0 10px currentColor' 
               }}
             />
           </div>
           <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 w-8 text-right tabular-nums">{skill.proficiency}%</span>
        </div>
      </div>
    </div>
  );
};