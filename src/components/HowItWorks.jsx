import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, Navigation2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload Floor Plans',
      description: 'Hospital admins upload their building floor plans to our secure platform. Our system processes multiple floors and buildings instantly.',
      icon: Upload,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      title: 'AI Analyzes & Assists',
      description: 'Our AI analyzes floor plans, identifies key locations, and suggests optimal navigation paths. Admins verify for accuracy.',
      icon: Brain,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      number: '03',
      title: 'Users Navigate Easily',
      description: 'Patients and visitors get clear, step-by-step directions via web or WhatsApp. No app download needed.',
      icon: Navigation2,
      gradient: 'from-blue-400 to-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold gradient-text">Simple Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Three simple steps to transform your hospital's navigation experience
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="glass p-8 rounded-2xl h-full border border-white/10 group-hover:border-blue-500/50 smooth-transition relative overflow-hidden">
                  {/* Animated background on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10`}
                  />

                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="mb-6">
                      <div className={`inline-block text-4xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>

                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                        className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-transparent origin-left"
                      />
                    )}
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
