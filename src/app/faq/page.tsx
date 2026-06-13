"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Droplet } from "lucide-react";

const faqData = [
  {
    category: "Purity & Quality",
    qas: [
      {
        q: "What is the average TDS level of VAADRO drinking water?",
        a: "Our water is purified to maintain an optimal Total Dissolved Solids (TDS) level of 80 to 110 ppm (parts per million). This is the perfect range recommended by nutritionists and WHO, keeping the water light, pure, and rich in natural taste.",
      },
      {
        q: "How many stages of purification do you use?",
        a: "We implement an 8-stage purification cycle: Sand Filtration, Active Carbon treatment, Micro Filtration, Double-pass Reverse Osmosis (RO), UV sterilization columns, Active Ozonization oxygen charging, Mineral Enrichment (Calcium/Magnesium), and final Zero-contact Packaging batch checks.",
      },
      {
        q: "Are the mineral levels added artificially?",
        a: "We add natural, food-grade mineral compounds (Magnesium and Calcium) back into the water after reverse osmosis. RO naturally removes all dissolved solids, which makes the water 'flat'. Restoring these minerals stabilizes the water pH and provides metabolic electrolytes.",
      },
    ],
  },
  {
    category: "Ordering & Delivery",
    qas: [
      {
        q: "How do I place an order for home or office delivery?",
        a: "You can place orders instantly by clicking the WhatsApp floating button on our website or calling Gaurav Dubey directly at +91 99886 76742. Alternatively, submit the contact form, and our delivery team will schedule a delivery window.",
      },
      {
        q: "What is the turnaround time for bulk delivery?",
        a: "For standard orders within Noida and surrounding sectors, we deliver within 2 to 4 hours of order confirmation. Large bulk orders for corporate offices or institutional events are scheduled based on mutual convenience.",
      },
      {
        q: "Do you offer recurring daily or weekly delivery?",
        a: "Yes! We specialize in corporate subscription schedules. We can configure a dedicated route vehicle to deliver fresh 20L cans or cases of 1L/500ml bottles to your office or home at set times every week.",
      },
    ],
  },
  {
    category: "Refills & Packaging",
    qas: [
      {
        q: "Are VAADRO plastic bottles BPA-free and safe?",
        a: "Absolutely. We bottle exclusively in 100% food-grade, virgin PET containers that are completely BPA-free and non-toxic. Our bottles are recyclable, and we actively participate in polymer recovery programs.",
      },
      {
        q: "How are the 20L canisters sanitized prior to refilling?",
        a: "Our 20L canisters undergo a rigorous 4-step sanitization cycle inside automated conveyor lines: high-pressure interior wash with hot sterilizing solutions, chemical disinfection wash, pure RO water rinse, and UV disinfection before filling. Capping is sealed with shrink-wrapped security seals.",
      },
      {
        q: "Is there a security deposit for the 20L water cans?",
        a: "We require a nominal one-time refundable shell deposit for the 20L dispenser cans. Corporate accounts with recurring subscriptions may request deposit waivers depending on ordering volumes.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020813] via-[#030f26] to-[#020813] py-20 px-4 md:px-8">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-water-aqua/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-water-fresh/10 filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-water-aqua/10 border border-water-fresh/25 mb-4"
          >
            <HelpCircle className="h-4 w-4 text-water-fresh" />
            <span className="text-xs text-water-fresh font-semibold uppercase tracking-wider">Frequently Asked</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white mb-6"
          >
            Support & <span className="text-gradient">FAQs</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Find quick answers to quality inquiries, logistical areas, bottle sizes, and custom packaging systems.
          </motion.p>
        </div>

        {/* FAQ Categories & Accordions */}
        <div className="space-y-12">
          {faqData.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-4">
              <h2 className="font-heading text-xl font-bold text-water-fresh px-2 tracking-wide border-l-2 border-water-aqua">
                {cat.category}
              </h2>
              
              <div className="space-y-3">
                {cat.qas.map((qa, qaIdx) => {
                  const uniqueId = `${catIdx}-${qaIdx}`;
                  const isOpen = openIndex === uniqueId;

                  return (
                    <div
                      key={uniqueId}
                      className="glass-panel rounded-2xl border border-water-fresh/10 overflow-hidden transition-all duration-300 hover:border-water-aqua/30 bg-gradient-to-b from-water-blue/10 to-water-dark/60"
                    >
                      {/* Accordion trigger */}
                      <button
                        onClick={() => toggleAccordion(uniqueId)}
                        className="w-full flex items-center justify-between p-5 text-left text-white font-semibold text-sm md:text-base focus:outline-none"
                      >
                        <span className="pr-4">{qa.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-water-aqua shrink-0"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </button>

                      {/* Content Panel */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-5 pt-0 border-t border-water-primary/10 text-slate-400 text-xs md:text-sm leading-relaxed space-y-2">
                              <p>{qa.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Help footer */}
        <div className="mt-16 text-center space-y-4 glass-panel p-8 rounded-3xl border border-water-fresh/10 bg-slate-900/30">
          <h3 className="font-heading text-lg font-bold text-white">Still have questions?</h3>
          <p className="text-slate-400 text-xs">
            Connect directly with Gaurav Dubey via WhatsApp or phone call. We're happy to guide you!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/919988676742"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-450 text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-transform hover:scale-105"
            >
              WhatsApp Support
            </a>
            <a
              href="tel:+919988676742"
              className="px-6 py-2.5 rounded-full glass-panel hover:bg-slate-900/50 text-white font-semibold text-xs tracking-wider uppercase border border-water-fresh/25 transition-transform hover:scale-105"
            >
              Call +91 99886 76742
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
