"use client";

import React, { useRef, useState, MouseEvent } from 'react';
import { FixedSizeList } from 'react-window';
import { PROFILE_DATA, SOCIAL_LINKS, SKILLS_LIST } from '../constants';
import { ExternalLink, MapPin, Code2 } from 'lucide-react';
import { SkillRow } from './SkillRow';
import Image from 'next/image';

export const ProfileCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on cursor position relative to center
    // Max rotation 15 degrees
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Invert X for natural tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="perspective-1000 relative z-10 w-full max-w-md mx-auto p-4">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          relative w-full flex flex-col overflow-hidden
          rounded-[2rem] border border-white/10
          bg-slate-900/40 backdrop-blur-2xl
          shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]
          transition-all duration-200 ease-out
          preserve-3d
        `}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
          boxShadow: isHovering 
            ? '0 25px 50px -12px rgba(124, 58, 237, 0.25)' // Purple glow on hover
            : '0 0 50px -12px rgba(0,0,0,0.5)'
        }}
      >
        
        {/* Dynamic Holographic Gradient Layer */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${50 + rotation.y * 2}% ${50 - rotation.x * 2}%, rgba(255,255,255,0.15), transparent 60%)`
          }}
        />

        {/* Header Banner - 3D Layer 1 */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-r from-violet-600/30 via-fuchsia-600/30 to-cyan-600/30 blur-xl translate-z-10"></div>

        {/* Profile Content - 3D Layer 2 */}
        <div className="relative px-6 pt-12 pb-6 text-center shrink-0 translate-z-20 preserve-3d">
          
          {/* Avatar Container */}
          <div className="relative inline-block mx-auto mb-6 preserve-3d">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-fuchsia-500 rounded-full blur-[20px] opacity-60 animate-pulse translate-z-10"></div>
            <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 via-violet-400 to-fuchsia-400 translate-z-20">
              <div className="rounded-full overflow-hidden bg-slate-950 p-1">
                <Image 
                  src={PROFILE_DATA.avatarUrl} 
                  alt={PROFILE_DATA.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover"
                  unoptimized={true}
                />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-400 border-[3px] border-slate-900 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)] translate-z-30"></div>
          </div>

          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 tracking-tight mb-1 drop-shadow-lg translate-z-20">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-3 translate-z-10 shadow-cyan-500/50">
            {PROFILE_DATA.username}
          </p>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-[90%] mx-auto font-light tracking-wide translate-z-10">
            {PROFILE_DATA.bio}
          </p>

          {/* Badges */}
          <div className="flex items-center justify-center gap-4 mb-8 translate-z-20">
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-1.5 text-xs text-slate-300 shadow-lg">
              <MapPin size={12} className="text-fuchsia-400" />
              <span>{PROFILE_DATA.location}</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-1.5 text-xs text-slate-300 shadow-lg">
              <Code2 size={12} className="text-cyan-400" />
              <span>Full Stack</span>
            </div>
          </div>

          {/* Social Links - 3D Buttons */}
          <div className="flex justify-center gap-4 mb-2 translate-z-30 px-2">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    relative group flex items-center justify-center w-12 h-12 rounded-2xl
                    bg-slate-800/80 border border-white/10
                    transition-all duration-300
                    hover:scale-110 hover:-translate-y-1 hover:border-white/30
                  `}
                  style={{
                    boxShadow: '0 10px 20px -5px rgba(0,0,0,0.3)',
                  }}
                  aria-label={link.platform}
                >
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${link.color}`}></div>
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors relative z-10" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Section - Glass Pane */}
        <div className="flex flex-col flex-1 min-h-0 bg-slate-950/30 border-t border-white/5 backdrop-blur-xl translate-z-10">
          <div className="flex items-center justify-between px-6 py-4 shrink-0 border-b border-white/5">
            <h3 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 uppercase tracking-widest">
              Tech Arsenal
            </h3>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-2 py-0.5 rounded">
              SYSTEM_READY
            </span>
          </div>
          
          <div className="flex-1 px-4 py-4">
            <FixedSizeList
              height={200}
              itemCount={SKILLS_LIST.length}
              itemSize={54}
              width="100%"
              itemData={SKILLS_LIST}
              className="scrollbar-hide"
            >
              {SkillRow}
            </FixedSizeList>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-gradient-to-b from-slate-900/80 to-slate-950/90 border-t border-white/5 shrink-0 translate-z-20">
          <a 
            href={SOCIAL_LINKS.find(l => l.id === 'github')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl overflow-hidden font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <div className="absolute inset-0 bg-white group-hover:bg-slate-200 transition-colors"></div>
            <span className="relative z-10 text-slate-900 group-hover:scale-105 transition-transform">Initialize Portfolio</span>
            <ExternalLink size={16} className="relative z-10 text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};