"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplet, ShieldCheck, Heart, Users, Check } from "lucide-react";

const timelineSteps = [
  {
    step: "01",
    title: "Raw Water Collection",
    desc: "Sourced from pristine groundwater reserves and thoroughly pre-tested for natural TDS levels.",
  },
  {
    step: "02",
    title: "Sand & Carbon Filtration",
    desc: "Passes through pressurized silica sand bed and active carbon beds to remove suspended particles, odor, chlorine, and organic matter.",
  },
  {
    step: "03",
    title: "RO (Reverse Osmosis) Purification",
    desc: "Forced through semi-permeable membranes under high pressure to remove 99% of dissolved solids, heavy metals, and micro-salts.",
  },
  {
    step: "04",
    title: "UV (Ultraviolet) Treatment",
    desc: "Exposed to high-intensity germicidal UV rays to neutralize any remaining microscopic bacterial cultures, viruses, or pathogens.",
  },
  {
    step: "05",
    title: "Active Ozonization",
    desc: "Enriched with active oxygen (O3) to oxidize micro-impurities and naturally preserve long-term freshness and crisp water taste.",
  },
  {
    step: "06",
    title: "Mineral Infusion & pH Tuning",
    desc: "Infused with precise amounts of essential Magnesium and Calcium, stabilizing the water pH to a healthy alkaline range of 7.2-7.8.",
  },
  {
    step: "07",
    title: "Automated Clean Packaging",
    desc: "Filled, capped, and sealed in clean-room enclosures using automated non-contact robotic dispensers to ensure zero human contamination.",
  },
  {
    step: "08",
    title: "Final Laboratory Batch Inspection",
    desc: "Every batch is sealed and chemically verified by on-site technicians before loading onto delivery fleets.",
  },
];

const values = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-water-aqua" />,
    title: "Absolute Purity",
    desc: "We make no compromises. Our multi-stage purification ensures you get water that exceeds WHO guidelines.",
  },
  {
    icon: <Heart className="h-6 w-6 text-water-aqua" />,
    title: "Mineral Integrity",
    desc: "We don't sell dead water. We retain essential minerals to support your daily metabolism and bone strength.",
  },
  {
    icon: <Users className="h-6 w-6 text-water-aqua" />,
    title: "Client Centeredness",
    desc: "Under Gaurav Dubey's guidance, our customer support is active 24/7. Your health and trust are our assets.",
  },
];

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020813] via-[#030f26] to-[#020813] py-20 px-4 md:px-8">
      {/* Glow Effects */}
      <div className="absolute top-40 left-10 h-72 w-72 rounded-full bg-water-aqua/10 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 h-72 w-72 rounded-full bg-water-fresh/10 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-water-aqua/10 border border-water-fresh/25 mb-4"
          >
            <Droplet className="h-4 w-4 text-water-fresh" />
            <span className="text-xs text-water-fresh font-semibold uppercase tracking-wider">Our Brand Story</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white mb-6"
          >
            Pioneering Pure <span className="text-gradient">Hydration</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Learn about VAADRO's journey, our commitment to purity, and the rigorous processes we implement to safeguard your health.
          </motion.p>
        </div>

        {/* Narrative / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-heading text-3xl font-bold text-white">
              The Journey of VAADRO
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Founded with a single mission to provide world-class, premium quality drinking water, VAADRO has established itself as a benchmark of purity and client satisfaction. We understand that drinking water is the foundation of long-term health and vitality.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our state-of-the-art facility uses the latest reverse osmosis membranes, high-density UV disinfection channels, and oxygen-enriching ozonizers to deliver crisp, fresh water that tastes as clean as natural mountain springs. Under the leadership of <strong>Gaurav Dubey</strong>, VAADRO remains committed to transparency, eco-friendly standards, and punctual doorstep logistics.
            </p>

            {/* Mission/Vision Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="glass-panel p-6 rounded-2xl border border-water-fresh/10">
                <h3 className="font-heading text-lg font-bold text-water-fresh mb-2">Our Mission</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  To provide absolute purity in every drop, assuring reliable health support, premium taste, and unmatched mineral consistency for households and corporate communities.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-water-fresh/10">
                <h3 className="font-heading text-lg font-bold text-water-fresh mb-2">Our Vision</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  To be India's most trusted packaged water brand, expanding logistics with eco-friendly bottling materials and advanced health-rich purification technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative h-[380px] w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl border border-water-fresh/20 glass-panel">
              <Image
                src="/images/factory-purification.png"
                alt="VAADRO Automated Purification Facility"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 400px"
              />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-white mb-3">Our Core Values</h2>
            <p className="text-slate-400 text-sm">We operate on a set of core principles centered around customer health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-panel p-6 rounded-2xl border border-water-fresh/10 flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 rounded-full bg-water-aqua/10 flex items-center justify-center mb-4 border border-water-aqua/20">
                  {v.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Purification Timeline */}
        <div>
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-4">
              8-Stage <span className="text-gradient">Purification Process</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              We employ a meticulous multi-tier purification system to extract all physical and organic contaminants while locking in optimal minerals.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-water-aqua via-water-primary to-water-aqua/10 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-water-aqua via-water-primary to-water-aqua/10 md:hidden" />

            {/* Steps Container */}
            <div className="space-y-12">
              {timelineSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Circle Node indicator */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                      <div className="h-8 w-8 rounded-full bg-[#020813] border-2 border-water-aqua flex items-center justify-center text-xs font-bold text-water-fresh shadow-[0_0_15px_rgba(0,180,216,0.5)]">
                        {step.step}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className="glass-panel p-6 rounded-2xl border border-water-fresh/10 relative hover:border-water-aqua/40 transition-colors bg-gradient-to-b from-water-blue/10 to-water-dark/60">
                        <span className="text-xs font-bold text-water-aqua uppercase tracking-widest mb-1.5 block">
                          Stage {step.step}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Spacing holder for large screen layouts */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
