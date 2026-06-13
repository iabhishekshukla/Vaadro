"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, Award, Quote, Shield } from "lucide-react";

export default function Owner() {
  const whatsappUrl = "https://wa.me/919988676742?text=Hello%20Gaurav!%20I'm%20visiting%20the%20VAADRO%20website%20and%20would%20like%20to%20connect%20with%20you.";

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020813] via-[#030f26] to-[#020813] py-20 px-4 md:px-8">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-water-aqua/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-water-fresh/10 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-water-aqua/10 border border-water-fresh/25 mb-4"
          >
            <Award className="h-4 w-4 text-water-fresh" />
            <span className="text-xs text-water-fresh font-semibold uppercase tracking-wider">Leadership Profile</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white"
          >
            Meet Our <span className="text-gradient">Founder</span>
          </motion.h1>
        </div>

        {/* Founder details card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Images Frame */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-center">
            
            {/* Primary Image - Desk Profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full max-w-[340px] rounded-3xl overflow-hidden glass-panel border border-water-fresh/25 p-3"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/owner-desk.jpg"
                  alt="Gaurav Dubey at desk - VAADRO Founder"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 340px"
                  priority
                />
              </div>
            </motion.div>

            {/* Quote Seal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel py-4 px-6 rounded-2xl border border-water-fresh/20 max-w-[340px] flex items-start space-x-3 bg-gradient-to-r from-water-blue/20 to-water-dark/60"
            >
              <Quote className="h-6 w-6 text-water-aqua shrink-0 rotate-180" />
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Customer trust is our biggest achievement."
              </p>
            </motion.div>
          </div>

          {/* Founder Text & Message details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-sm font-bold text-water-fresh uppercase tracking-widest block mb-1">Founder & CEO</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-2">Gaurav Dubey</h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-water-aqua to-transparent rounded-full" />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Welcome to VAADRO. Our journey started with a simple belief: clean and premium-quality drinking water is a fundamental right. Having seen the rising issues of waterborne health complications, my goal was to engineer a packaged water brand that people can trust without reservation.
            </p>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              At VAADRO, we don't just filter water; we purify it to clinical perfection while restoring crucial wellness elements. Every batch of water leaving our conveyors undergoes strict laboratory tests to secure safety, taste, and consistency. We are here to partner in your health journeys, and your continued trust drives our team's daily efforts.
            </p>

            {/* Details and Action Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              {/* Vision Card */}
              <div className="glass-panel p-6 rounded-2xl border border-water-fresh/10">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-5 w-5 text-water-aqua" />
                  <h3 className="font-heading text-base font-bold text-white">Our Assurance</h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We use advanced double-pass RO, ultraviolet light columns, and rich food-grade packaging. Quality is locked in from source to door.
                </p>
              </div>

              {/* Standing Profile Overlay link */}
              <div className="glass-panel p-3 rounded-2xl border border-water-fresh/10 flex items-center space-x-3 bg-gradient-to-r from-water-blue/10 to-water-dark/60">
                <div className="relative h-20 w-16 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/images/owner-standing.jpg"
                    alt="Gaurav Dubey holding VAADRO bottle"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Pure Commitment</span>
                  <span className="text-xs font-bold text-slate-300">Trust In Every Drop</span>
                </div>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="pt-6 space-y-4">
              <h3 className="font-heading text-lg font-bold text-white">Connect with Gaurav Dubey</h3>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp Chat
                </a>
                <a
                  href="tel:+919988676742"
                  className="px-6 py-3 rounded-full glass-panel hover:bg-slate-900/50 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 border border-water-fresh/20 transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4 text-water-aqua" /> +91 99886 76742
                </a>
                <a
                  href="mailto:gauravsadanand2002@gmail.com"
                  className="px-6 py-3 rounded-full glass-panel hover:bg-slate-900/50 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 border border-water-fresh/20 transition-transform hover:scale-105"
                >
                  <Mail className="h-4 w-4 text-water-aqua" /> Email Inquiry
                </a>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}
