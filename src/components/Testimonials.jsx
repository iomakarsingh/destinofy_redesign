import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Destinofy has transformed how our patients navigate our 12-floor hospital. The reduction in missed appointments is remarkable.',
      author: 'Dr. Priya Sharma',
      role: 'Chief Medical Officer',
      company: 'Metro General Hospital',
      rating: 5,
      image: '👩‍⚕️',
    },
    {
      quote: 'The WhatsApp integration is brilliant. Our elderly patients love that they don\'t need to download any app.',
      author: 'Rajesh Kumar',
      role: 'Hospital Administrator',
      company: 'City Care Medical Center',
      rating: 5,
      image: '👨‍💼',
    },
    {
      quote: 'Setup was incredibly simple. We had our entire hospital mapped and running within a week.',
      author: 'Anita Desai',
      role: 'IT Director',
      company: 'Regional Health Complex',
      rating: 5,
      image: '👩‍💻',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold gradient-text">Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Trusted by <span className="gradient-text">Healthcare Leaders</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See what healthcare professionals say about transforming their patient experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass p-8 rounded-2xl h-full border border-white/10 group-hover:border-blue-500/50 smooth-transition relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-10"
                />

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-slate-200 mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                      <p className="text-xs text-slate-500 mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { number: '500+', label: 'Healthcare Facilities' },
            { number: '2M+', label: 'Patients Guided' },
            { number: '99%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl border border-white/10"
            >
              <p className="text-3xl font-bold gradient-text">{stat.number}</p>
              <p className="text-sm text-slate-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
