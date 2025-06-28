import React from 'react';
import { Linkedin, Mail, Github, User, Briefcase, GraduationCap, FolderOpen } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'connect', label: 'Connect With Me', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900/20 backdrop-blur-xl border-r border-purple-500/20 z-50">
      <div className="p-6">
        {/* Tamil Greeting */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            வணக்கம்!
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400/30 border ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50 text-purple-300'
                    : 'border-transparent text-gray-300 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs text-gray-500">© 2025 Prasath Murugesan</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;