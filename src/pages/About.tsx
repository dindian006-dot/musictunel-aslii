import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about-us" className="pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
              Solo Developer Project
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-zinc-900 dark:text-white">Behind the Tunel</h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                MusicTunel is a passion project born from a simple desire: to create the most seamless and beautiful music experience on Android. 
              </p>
              <p>
                As a solo developer, I've dedicated countless hours to crafting every detail of this app, from its Material You interface to its high-performance streaming engine. My goal is to provide a powerful, open-source alternative that respects user privacy and delivers pure musical joy without the clutter of modern streaming services.
              </p>
              <p>
                This project is built on the foundation of open-source collaboration, drawing inspiration and technology from the community to create something unique for music lovers everywhere.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/20">
                <img 
                  src={import.meta.env.BASE_URL + "saya.png"} 
                  alt="dindian" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <div className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider">dindian</div>
                <div className="text-sm text-zinc-500">Lead Developer & Designer</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 rounded-full" />
            <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-zinc-950/50 p-4 rounded-2xl border border-zinc-200 dark:border-white/5">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">100%</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Open Source</div>
                </div>
                <div className="bg-white dark:bg-zinc-950/50 p-4 rounded-2xl border border-zinc-200 dark:border-white/5">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">0</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Ads Included</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
