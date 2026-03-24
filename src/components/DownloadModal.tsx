import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Smartphone, LayoutGrid } from 'lucide-react';
import { useDownloadModal } from '../context/DownloadModalContext';

export default function DownloadModal() {
  const { isDownloadModalOpen, closeDownloadModal } = useDownloadModal();

  const handleDownload = (filename: string) => {
    // Menggunakan GitHub Releases karena file APK > 100MB
    const GITHUB_RELEASE_URL = `https://github.com/dindian006-dot/musictunel/releases/latest/download/${filename}`;
    
    const link = document.createElement('a');
    link.href = GITHUB_RELEASE_URL;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeDownloadModal();
  };

  return (
    <AnimatePresence>
      {isDownloadModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDownloadModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto border border-zinc-200 dark:border-white/10"
            >
              {/* Header */}
              <div className="relative p-8 pb-4 text-center">
                <button
                  onClick={closeDownloadModal}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Pilih Versi Aplikasi</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Silakan pilih versi MusicTunel yang sesuai untuk perangkat Android Anda.</p>
              </div>

              {/* Options */}
              <div className="p-8 pt-4 space-y-4">
                {/* Regular Version */}
                <button
                  onClick={() => handleDownload('musictunel.apk')}
                  className="w-full group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 border border-zinc-200 dark:border-white/5 hover:border-indigo-200 dark:hover:border-indigo-500/20 transition-all text-left"
                >
                  <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-zinc-900 dark:text-white">Versi Biasa</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Direkomendasikan (v8.0+)</div>
                  </div>
                  <Download className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-500 group-hover:translate-y-px transition-all" />
                </button>

                {/* Universal Version */}
                <button
                  onClick={() => handleDownload('musictunel.universal.apk')}
                  className="w-full group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-purple-50 dark:hover:bg-purple-500/10 border border-zinc-200 dark:border-white/5 hover:border-purple-200 dark:hover:border-purple-500/20 transition-all text-left"
                >
                  <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <LayoutGrid className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-zinc-900 dark:text-white">Versi Universal</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Mendukung semua versi Android</div>
                  </div>
                  <Download className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-purple-500 group-hover:translate-y-px transition-all" />
                </button>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-white/5 text-center">
                <p className="text-xs text-zinc-400">MusicTunel adalah aplikasi sumber terbuka (Open Source).</p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
