import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <div className="glass px-4 py-2 rounded-full w-fit">
              <span className="text-sm font-semibold gradient-text flex items-center gap-2">
                ✨ AI-Powered Navigation
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Find Your Way
            <br />
            <span className="gradient-text">Inside Hospitals</span>
            <br />
            <span className="text-blue-400">Instantly</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            Transform patient experience with AI-assisted indoor navigation. Get step-by-step directions in seconds. No GPS, no AR, no complexity—just clear instructions that work.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(10, 165, 233, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 justify-center"
            >
              Get Started Free
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 justify-center"
            >
              <Play size={20} />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10"
          >
            <div>
              <p className="text-3xl font-bold text-blue-400">99%</p>
              <p className="text-sm text-slate-400 mt-1">Navigation Accuracy</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">&lt;30s</p>
              <p className="text-sm text-slate-400 mt-1">Time to Directions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">24/7</p>
              <p className="text-sm text-slate-400 mt-1">Availability</p>
            </div>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          variants={itemVariants}
          className="relative h-96 md:h-full min-h-96 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Animated gradient orb */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
            />
            
            {/* Central element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 glass p-8 rounded-2xl border border-white/20 backdrop-blur-md"
            >
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🏥</span>
                </div>
                <div>
                  <p className="text-xl font-bold text-white">Ward B-3</p>
                  <p className="text-sm text-slate-400 mt-1">3 minutes walk</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
