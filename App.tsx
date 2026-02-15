import React from 'react';
import { Background } from './components/Background';
import { ProfileCard } from './components/ProfileCard';

function App() {
  return (
    <main className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden antialiased">
      <Background />
      <ProfileCard />
    </main>
  );
}

export default App;
