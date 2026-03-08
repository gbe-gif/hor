import React from 'react';
import { Globe, Flag, User, Users, Terminal } from 'lucide-react';

export type TabType = 'worldview' | 'f1' | 'main' | 'support' | 'commands';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'worldview', label: '세계관', icon: Globe },
    { id: 'f1', label: 'F1', icon: Flag },
    { id: 'main', label: '레온', icon: User },
    { id: 'support', label: '조연', icon: Users },
    { id: 'commands', label: '명령어', icon: Terminal },
  ] as const;

  const isF1 = activeTab === 'f1';

  return (
    <nav className={`fixed bottom-0 left-0 right-0 border-t pb-safe z-50 transition-colors duration-300 ${isF1 ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-amber-100'}`}>
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          
          let btnClass = '';
          if (isF1) {
            btnClass = isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300';
          } else {
            btnClass = isActive ? 'text-indigo-900' : 'text-slate-400 hover:text-slate-600';
          }

          let iconColor = '';
          if (isActive) {
            iconColor = isF1 ? 'text-red-500' : 'text-amber-600';
          }

          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${btnClass}`}
            >
              <Icon size={20} className={iconColor} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
