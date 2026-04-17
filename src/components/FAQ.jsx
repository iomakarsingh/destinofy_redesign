import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does Destinofy work without GPS?',
      answer: 'Destinofy uses indoor mapping technology and AI analysis of floor plans to provide turn-by-turn directions without needing GPS. Our system creates a digital map of your facility and provides directions based on the location QR code scanned by users.',
    },
    {
      question: 'What\'s required to set up Destinofy for our hospital?',
      answer: 'You need high-quality floor plans (digital or scanned) of your building. Our AI analyzes them and our team helps you verify the mappings. Most hospitals are up and running within 1-2 weeks. We handle all the technical setup.',
    },
    {
      question: 'Can users get directions via WhatsApp?',
      answer: 'Yes! Users can chat with our WhatsApp bot to get directions without downloading any app. They scan a QR code and chat with the bot, which provides step-by-step directions through WhatsApp itself.',
    },
    {
      question: 'Is Destinofy accessible for elderly or visually impaired users?',
      answer: 'Absolutely. Our platform includes text-based directions (easy to read), audio guidance options, and WhatsApp integration that works on basic phones. We\'re committed to accessibility for all users.',
    },
    {
      question: 'How accurate are the navigation instructions?',
      answer: 'We maintain 99% accuracy because every path is verified by your hospital staff. Our AI suggests paths, but your team confirms them, ensuring directions match your actual layout and current operations.',
    },
    {
      question: 'Can we update paths when construction or renovations occur?',
      answer: 'Yes, very easily. Admins can update floor plans anytime through our dashboard. Our AI re-analyzes the changes, and your team verifies the new paths. Updates go live instantly.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold gradient-text">Questions?</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about Destinofy
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                whileHover={{ x: 8 }}
                className="w-full text-left"
              >
                <div className="glass p-6 rounded-2xl border border-white/10 group-hover:border-blue-500/50 smooth-transition">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  </div>
                </div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="glass p-6 rounded-b-2xl border border-t-0 border-white/10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 mt-2">
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-2xl border border-white/10 text-center"
        >
          <p className="text-slate-300 mb-4">Still have questions?</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:support@destinofy.com"
            className="inline-block btn-primary"
          >
            Contact Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
