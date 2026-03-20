import React from 'react';
import { motion } from 'motion/react';
import { Download, Shield, CloudOff, Smartphone, ListMusic, Zap, Radio } from 'lucide-react';
import { FeatureCard } from '../components/Cards';
import MockupFrame from '../components/MockupFrame';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-white dark:via-zinc-950 to-white dark:to-zinc-950 -z-10" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-zinc-900 dark:text-white">
              Your music,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
                without limits.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              MusicTunel is a beautiful, open-source music player for Android. Stream your favorite tracks, download for offline listening, and enjoy an ad-free experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/dindian006-dot/musictunel-aslii/releases/latest/download/musictunel.apk" 
                download="musictunel.apk"
                className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download APK
              </a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* App Experience Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Screen 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <MockupFrame>
                <img src={import.meta.env.BASE_URL + "home.png"} alt="Home Screen" className="w-full h-full object-cover" />
              </MockupFrame>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">Discover New Music</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Jump right into personalized quick picks and curated recommendations based on your listening habits.</p>
              </div>
            </motion.div>

            {/* Screen 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <MockupFrame>
                <img src={import.meta.env.BASE_URL + "library.png"} alt="Library Screen" className="w-full h-full object-cover" />
              </MockupFrame>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">Organized Library</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Easily find your favorites, most played tracks, and downloaded music all categorized neatly in one place.</p>
              </div>
            </motion.div>

            {/* Screen 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <MockupFrame>
                <img src={import.meta.env.BASE_URL + "settings.png"} alt="Settings Screen" className="w-full h-full object-cover" />
              </MockupFrame>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">Deep Customization</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Make it yours with advanced visual tweaks like translucent navigation bars, lyric blurs, and liquid glass modes.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Everything you need</h2>
            <p className="text-zinc-600 dark:text-zinc-400">MusicTunel is packed with features to make your listening experience perfect, without any of the bloat.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-emerald-400" />}
              title="Ad-Free Experience"
              description="Listen to your favorite music without any interruptions. No audio ads, no banner ads, ever."
            />
            <FeatureCard 
              icon={<CloudOff className="w-6 h-6 text-blue-400" />}
              title="Offline Playback"
              description="Download your favorite tracks, albums, and playlists to listen when you don't have an internet connection."
            />
            <FeatureCard 
              icon={<Smartphone className="w-6 h-6 text-purple-400" />}
              title="Material You"
              description="A beautiful, modern interface that adapts to your system colors. Fully supports Android 12+ dynamic theming."
            />
            <FeatureCard 
              icon={<ListMusic className="w-6 h-6 text-pink-400" />}
              title="Synchronized Lyrics"
              description="Sing along with synchronized lyrics for millions of songs, fetched automatically as you listen."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-amber-400" />}
              title="High Quality Audio"
              description="Stream and download music in the highest available quality for the best listening experience."
            />
            <FeatureCard 
              icon={<Radio className="w-6 h-6 text-indigo-400" />}
              title="Smart Playlists"
              description="Automatically generated playlists based on your listening habits, favorites, and most played tracks."
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-500/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">Ready to tune in?</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Download MusicTunel today and take control of your music listening experience. Free and open-source forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/dindian006-dot/musictunel-aslii/releases/latest/download/musictunel.apk" download="musictunel.apk" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors group">
              <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs font-medium text-zinc-400 dark:text-zinc-600">Download for</div>
                <div className="text-lg leading-none mt-0.5">Android (APK)</div>
              </div>
            </a>

          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Requires Android 8.0 or later.
          </p>
        </div>
      </section>
    </>
  );
}
