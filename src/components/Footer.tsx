import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 py-12 border-t border-zinc-200 dark:border-white/5 text-center text-zinc-500 dark:text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={import.meta.env.BASE_URL + "logo.png"} alt="MusicTunel Logo" className="w-6 h-6 object-contain" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-300">MusicTunel</span>
        </div>
        <p>
          Not affiliated with YouTube or Google.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
