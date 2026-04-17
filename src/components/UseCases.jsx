import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, BookOpen, ShoppingCart } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: Building2,
      title: 'Hospitals',
      description: 'Guide patients through complex medical campuses with multiple buildings and departments.',
      feature: '50+ Departments',
      gradient: 'from-red-500 to-rose-500',
      color: 'text-red-400',
    },
    {
      icon: Stethoscope,
      title: 'Medical Clinics',
      description: 'Help visitors find specific specialists, labs, and diagnostic centers quickly.',
      feature: 'Multi-specialty',
      gradient: 'from-blue-500 to-blue-600',
      color: 'text-blue-400',
    },
    {
      icon: BookOpen,
      title: 'Medical Colleges',
      description: 'Navigate large campus buildings with classrooms, labs, and administrative offices.',
      feature: 'Campus-wide',
      gradient: 'from-purple-500 to-indigo-500',
      color: 'text-purple-400',
    },
    {
      icon: ShoppingCart,
      title: 'Healthcare Malls',
      description: 'Direct visitors to pharmacies, health stores, and wellness centers in one location.',
      feature: 'Retail + Medical',
      gradient: 'from-emerald-500 to-teal-500',
      color: 'text-emerald-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold gradient-text">Versatile Solution</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Perfect <span className="gradient-text">For Any</span> Healthcare Facility
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Designed for any healthcare facility with complex indoor navigation needs
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 10 }}
                className="group"
              >
                <div className="glass p-8 rounded-2xl h-full border border-white/10 group-hover:border-white/30 smooth-transition relative overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${useCase.gradient} rounded-full blur-3xl opacity-10`}
                  />

                  <div className="relative z-10 flex items-start gap-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                        <span className={`inline-block text-sm font-semibold ${useCase.color}`}>
                          {useCase.feature}
                        </span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{useCase.description}</p>

                      {/* Hover arrow */}
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        className="mt-6 text-blue-400 font-semibold flex items-center gap-2"
                      >
                        Learn more →
                      </motion.div>
                    </div>
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
