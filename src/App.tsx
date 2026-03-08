import React, { useState } from 'react';
import Navigation, { TabType } from './components/Navigation';
import Worldview from './components/Worldview';
import F1Page from './components/F1Page';
import MainCharacter from './components/MainCharacter';
import SupportingCharacters from './components/SupportingCharacters';
import Commands from './components/Commands';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('main');
  const isF1 = activeTab === 'f1';

  return (
    <div className={`min-h-screen font-sans pb-20 transition-colors duration-300 ${isF1 ? 'bg-zinc-950 text-zinc-100' : 'bg-[#fdfbf7] text-slate-800'}`}>
      <div className="max-w-md mx-auto relative">
        <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-4 py-4 transition-colors duration-300 ${isF1 ? 'bg-zinc-950/80 border-zinc-800' : 'bg-[#fdfbf7]/80 border-amber-200/50'}`}>
          <h1 className={`text-lg font-bold text-center tracking-tight ${isF1 ? 'text-zinc-100' : 'text-indigo-950'}`}>이 백마는 보통 미친 말이 아니다</h1>
        </header>
        
        <main className="px-4 py-6">
          {activeTab === 'worldview' && <Worldview />}
          {activeTab === 'f1' && <F1Page />}
          {activeTab === 'main' && <MainCharacter />}
          {activeTab === 'support' && <SupportingCharacters />}
          {activeTab === 'commands' && <Commands />}
        </main>
      </div>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
