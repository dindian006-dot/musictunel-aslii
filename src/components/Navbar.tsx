import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDownloadModal } from '../context/DownloadModalContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { openDownloadModal } = useDownloadModal();

  const navLinks = [
    { name: 'Features', path: '/#features' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Provider', path: '/providers' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleThemeWithLog = () => {
    console.log('Toggling theme from:', theme);
    toggleTheme();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={import.meta.env.BASE_URL + "logo.png"} alt="MusicTunel Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">MusicTunel</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-zinc-900 dark:hover:text-white transition-colors ${isActive(link.path) ? 'text-zinc-900 dark:text-white' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleThemeWithLog}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>


          <button 
            onClick={openDownloadModal}
            className="hidden md:flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`hover:text-zinc-900 dark:hover:text-white transition-colors py-2 ${isActive(link.path) ? 'text-zinc-900 dark:text-white' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="h-px bg-zinc-200 dark:bg-white/5 my-2" />
              
              <button
                onClick={() => {
                  toggleThemeWithLog();
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between py-2 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <span>Appearance</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs opacity-60 capitalize">{theme}</span>
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </div>
              </button>

              <button 
                onClick={() => {
                  openDownloadModal();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-3 rounded-xl text-center justify-center font-semibold mt-2"
              >
                <Download className="w-4 h-4" />
                Download APK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
