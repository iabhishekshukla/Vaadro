"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Phone, Mail, User, ShieldCheck, MapPin, Sparkles, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    quantity: "",
    productType: "500ml Premium",
    address: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          mobile: "",
          quantity: "",
          productType: "500ml Premium",
          address: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020813] via-[#030f26] to-[#020813] py-20 px-4 md:px-8">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-water-aqua/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-water-fresh/15 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-water-aqua/10 border border-water-fresh/25 mb-4"
          >
            <Sparkles className="h-4 w-4 text-water-fresh animate-pulse-slow" />
            <span className="text-xs text-water-fresh font-semibold uppercase tracking-wider">Order & Inquiry</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white mb-6"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Have bulk order requirements or questions about water supplies? Submit the form below or contact us directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Details Card */}
            <div className="glass-panel p-8 rounded-3xl border border-water-fresh/10 space-y-6 bg-gradient-to-b from-water-blue/20 to-water-dark/60">
              <h2 className="font-heading text-2xl font-bold text-white">Contact Info</h2>
              
              <div className="space-y-4">
                {/* Owner */}
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-water-aqua/15 flex items-center justify-center text-water-aqua shrink-0">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Owner Name</span>
                    <p className="text-sm font-semibold text-slate-200">Gaurav Dubey</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-water-aqua/15 flex items-center justify-center text-water-aqua shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Phone Number</span>
                    <p className="text-sm font-semibold text-slate-200">
                      <a href="tel:+919988676742" className="hover:text-water-fresh transition-colors">
                        +91 99886 76742
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-water-aqua/15 flex items-center justify-center text-water-aqua shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Email Address</span>
                    <p className="text-sm font-semibold text-slate-200">
                      <a href="mailto:gauravsadanand2002@gmail.com" className="hover:text-water-fresh transition-colors">
                        gauravsadanand2002@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-water-aqua/15 flex items-center justify-center text-water-aqua shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Head Office</span>
                    <p className="text-sm font-semibold text-slate-200">
                      Corporate Tower, Sector 62, Noida, UP - 201301
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="glass-panel rounded-3xl border border-water-fresh/10 overflow-hidden h-64 relative shadow-lg">
              <iframe
                title="VAADRO Location Map"
                src="https://www.google.com/maps?q=26.286515,83.523096&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-3xl border border-water-fresh/20 bg-gradient-to-tr from-water-blue/20 to-water-dark/60 shadow-xl relative overflow-hidden">
              
              {/* Discount Notice Banner */}
              <div className="mb-6 p-4 rounded-2xl bg-water-aqua/10 border border-water-fresh/20 flex items-center space-x-3 relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse-slow" />
                <Sparkles className="h-5 w-5 text-water-fresh animate-spin shrink-0" />
                <p className="text-xs text-water-fresh font-semibold tracking-wide">
                  Submit this form to receive an additional discount on your order.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <ShieldCheck className="h-10 w-10" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-white">Inquiry Received!</h2>
                    <p className="text-sm text-slate-300 max-w-md">
                      Thank you! Our team will contact you shortly with a special discount offer.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full bg-water-aqua hover:bg-water-fresh text-[#020813] font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] uppercase text-slate-400 font-bold mb-1.5" htmlFor="name">
                        Customer Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm focus:ring-1 focus:ring-water-aqua"
                        placeholder="e.g. Abhishek Gupta"
                      />
                    </div>

                    {/* Mobile & Quantity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] uppercase text-slate-400 font-bold mb-1.5" htmlFor="mobile">
                          Mobile Number *
                        </label>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl glass-input text-sm focus:ring-1 focus:ring-water-aqua"
                          placeholder="e.g. +91 9988776655"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase text-slate-400 font-bold mb-1.5" htmlFor="quantity">
                          Quantity Required *
                        </label>
                        <input
                          id="quantity"
                          name="quantity"
                          type="text"
                          required
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl glass-input text-sm focus:ring-1 focus:ring-water-aqua"
                          placeholder="e.g. 50 Cases or 10 Cans"
                        />
                      </div>
                    </div>

                    {/* Product Type select */}
                    <div>
                      <label className="block text-[10px] uppercase text-slate-400 font-bold mb-1.5" htmlFor="productType">
                        Product Type *
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm focus:ring-1 focus:ring-water-aqua bg-slate-900 border-water-fresh/20"
                      >
                        <option value="250ml Elite">250ml Elite Bottle</option>
                        <option value="500ml Premium">500ml Premium Bottle</option>
                        <option value="1L Standard">1L Standard Bottle</option>
                        <option value="2L Family">2L Family Bottle</option>
                        <option value="5L Compact Dispenser">5L Compact Dispenser Jug</option>
                        <option value="20L Bubble Can">20L Bubble Dispenser Can</option>
                      </select>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-[10px] uppercase text-slate-400 font-bold mb-1.5" htmlFor="address">
                        Delivery Address *
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm focus:ring-1 focus:ring-water-aqua"
                        placeholder="e.g. Sector 62, Noida, Block B"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] uppercase text-slate-400 font-bold mb-1.5" htmlFor="message">
                        Message / Special Request
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm focus:ring-1 focus:ring-water-aqua resize-none"
                        placeholder="Describe any recurring delivery cycles or instructions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-water-aqua to-water-primary hover:from-water-fresh hover:to-water-aqua text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-water-aqua/20 transition-all flex items-center justify-center gap-2 disabled:opacity-55 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send Inquiry
                        </>
                      )}
                    </button>
                    
                    {status === "error" && (
                      <p className="text-xs text-red-400 font-semibold text-center mt-2">
                        Something went wrong. Please check details or connect on WhatsApp.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
