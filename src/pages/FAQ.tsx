import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 dark:border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-indigo-500 transition-colors group"
      >
        <span className="text-lg font-medium pr-8 text-zinc-900 dark:text-white">{question}</span>
        <div className={`p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 group-hover:bg-indigo-500/10 transition-colors ${isOpen ? 'bg-indigo-500/10 text-indigo-400' : 'text-zinc-500'}`}>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "What is MusicTunel?",
      answer: "MusicTunel is a free, open-source music player for Android. It allows you to stream music from YouTube Music without ads and provides a beautiful Material You interface."
    },
    {
      question: "Is MusicTunel free to use?",
      answer: "Yes, MusicTunel is completely free and open-source. There are no subscriptions, no hidden fees, and absolutely no ads."
    },
    {
      question: "Can I download music for offline listening?",
      answer: "Absolutely! MusicTunel supports downloading tracks, albums, and playlists directly to your device so you can enjoy your music even without an internet connection."
    },
    {
      question: "Where does the music come from?",
      answer: "The music is streamed directly from YouTube Music's vast library. This ensures you have access to millions of tracks, official releases, and high-quality audio."
    },
    {
      question: "Does it support synchronized lyrics?",
      answer: "Yes, MusicTunel automatically fetches and displays synchronized lyrics for most songs, allowing you to sing along in real-time."
    },
    {
      question: "Is my data private?",
      answer: "Privacy is a core value of MusicTunel. We do not track your listening habits, and since the app is open-source, you can verify how your data is handled by checking our source code on GitHub."
    },
    {
      question: "How do I install MusicTunel?",
      answer: "Since MusicTunel is not on the Google Play Store due to its nature, you can download the APK directly from our website or our GitHub releases page and install it manually on your Android device."
    },
    {
      question: "Will it work on my device?",
      answer: "MusicTunel requires Android 8.0 (Oreo) or higher. It is optimized for the latest versions of Android, including full support for dynamic theming on Android 12 and above."
    }
  ];

  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/20">
            <HelpCircle className="w-4 h-4" />
            Support Center
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Everything you need to know about MusicTunel and how it works.</p>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 rounded-[2rem] p-8 md:p-12">
          <div className="divide-y divide-zinc-200 dark:divide-white/5">
            {faqs.map((faq, index) => (
              <div key={index}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500">
            Still have questions? <a href="https://github.com" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">Ask on GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
}
