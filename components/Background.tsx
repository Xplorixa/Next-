import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden bg-[#030014]">
      {/* Deep Space Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-violet-900/20 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/20 blur-[120px]" />
      
      {/* 3D Perspective Grid Floor */}
      <div className="absolute inset-0 top-1/3 h-[150%] w-full grid-background origin-top pointer-events-none opacity-40"></div>

      {/* Floating Particles/Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Noise Overlay for texture */}
      <div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"
        style={{ filter: 'contrast(150%) brightness(100%)' }}
      ></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient-vignette pointer-events-none"></div>
    </div>
  );
};