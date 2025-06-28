import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, GraduationCap, FolderOpen, Home } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 72; // Optimized header height
      const elementPosition = element.offsetTop - (sectionId === 'hero' ? 0 : headerHeight);
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-purple-200/50 shadow-xl shadow-purple-100/20' 
          : 'bg-white/80 backdrop-blur-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 shadow-lg border border-purple-300/30'
                        : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50/50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button - Positioned absolutely to the right */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden absolute right-6 p-2 rounded-xl bg-purple-50/50 text-gray-600 hover:text-purple-700 hover:bg-purple-100/50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute top-16 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-purple-200/50 shadow-2xl transition-all duration-500 ${
          isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'
        }`}>
          <div className="p-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 border border-purple-300/30'
                      : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50/50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;