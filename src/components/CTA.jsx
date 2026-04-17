import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass p-12 md:p-16 rounded-3xl border border-white/10 overflow-hidden group"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-10"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-10"
          />

          <div className="relative z-10 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block glass px-4 py-2 rounded-full mx-auto"
            >
              <span className="text-sm font-semibold gradient-text">Ready to Transform?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Start Helping Patients
              <br />
              <span className="gradient-text">Find Their Way</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 max-w-2xl mx-auto"
            >
              Join healthcare facilities that have already transformed their visitor experience with AI-powered indoor navigation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
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
                Schedule Demo
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm text-slate-400 pt-4"
            >
              ✓ No credit card required • Setup in minutes • Free tier available
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
