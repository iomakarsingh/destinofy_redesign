import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Users, Zap, Shield, Wifi } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Users,
      title: 'Text-Based Navigation',
      description: 'Clear, simple directions in plain language that anyone can follow, regardless of tech expertise.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Admin-Verified Accuracy',
      description: 'Every path and location is verified by hospital staff to ensure patients never get lost.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Clock,
      title: 'Multi-Floor Support',
      description: 'Seamlessly navigate between floors with elevator and staircase guidance built-in.',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Integration',
      description: 'Users can get directions through WhatsApp - no app download or new interface to learn.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get directions in seconds. No loading, no complex setup - just scan and go.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Wifi,
      title: '24/7 Availability',
      description: 'Navigation assistance available round the clock, even when information desks are closed.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold gradient-text">Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You <span className="gradient-text">Need</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            All the tools to provide seamless indoor navigation for your visitors
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                onClick={() => alert(`✨ ${feature.title}\n\n${feature.description}`)}
                className="group cursor-pointer"
              >
                <div className="glass p-8 rounded-2xl h-full border border-white/10 group-hover:border-white/30 smooth-transition relative overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-20`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: 48 }}
                      className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-6"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
