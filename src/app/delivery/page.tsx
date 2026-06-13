"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Calendar, CheckCircle2, AlertCircle, Sparkles, Navigation } from "lucide-react";

const deliveryLocations = [
  { region: "Noida", areas: "Sectors 15, 18, 50, 62, 74, 75, 76, 137, 150", schedule: "Daily Deliveries (8 AM - 8 PM)" },
  { region: "Greater Noida", areas: "Alpha, Beta, Gamma, Delta, Knowledge Park, Pari Chowk", schedule: "Daily Deliveries (9 AM - 6 PM)" },
  { region: "Delhi NCR", areas: "Mayur Vihar, Vasundhara Enclave, Indirapuram, Vaishali", schedule: "Alternate Days (Mon, Wed, Fri)" },
];

const eligiblePincodes = [
  { pin: "201301", area: "Noida Sector 62 / Fortis area" },
  { pin: "201304", area: "Noida Sector 50 / 51" },
  { pin: "201307", area: "Noida Sector 15 / 16" },
  { pin: "201310", area: "Greater Noida / Knowledge Park" },
  { pin: "110096", area: "Delhi Mayur Vihar Phase 3" },
  { pin: "201012", area: "Indirapuram Ghaziabad" },
];

export default function DeliveryAreas() {
  const [searchPin, setSearchPin] = useState("");
  const [checkResult, setCheckResult] = useState<"eligible" | "not-eligible" | null>(null);
  const [matchedArea, setMatchedArea] = useState("");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const pin = searchPin.trim();
    if (!pin) return;

    const match = eligiblePincodes.find((p) => p.pin === pin);
    if (match) {
      setCheckResult("eligible");
      setMatchedArea(match.area);
    } else {
      setCheckResult("not-eligible");
      setMatchedArea("");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020813] via-[#030f26] to-[#020813] py-20 px-4 md:px-8">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-water-aqua/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-water-fresh/15 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-water-aqua/10 border border-water-fresh/25 mb-4"
          >
            <Navigation className="h-4 w-4 text-water-fresh" />
            <span className="text-xs text-water-fresh font-semibold uppercase tracking-wider">Service Coverage</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white mb-6"
          >
            Delivery <span className="text-gradient">Areas</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            We deliver premium mineral water right to your kitchen or office cabins across Noida, Greater Noida, and selected Delhi NCR zones.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Service Locations List */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Our Distribution Zones</h2>
            
            <div className="space-y-4">
              {deliveryLocations.map((loc) => (
                <div
                  key={loc.region}
                  className="glass-panel p-6 rounded-2xl border border-water-fresh/10 bg-gradient-to-r from-water-blue/15 to-water-dark/60"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-water-primary/10 pb-4 mb-4 gap-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-water-aqua" />
                      <h3 className="font-heading text-lg font-bold text-white">{loc.region}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-1.5 text-xs text-water-fresh font-semibold bg-water-aqua/5 px-3 py-1 rounded-full border border-water-fresh/10">
                      <Calendar className="h-4 w-4" />
                      <span>{loc.schedule}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    <strong>Sectors Served:</strong> {loc.areas}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Postal Code Checker */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-3xl border border-water-fresh/20 bg-gradient-to-tr from-water-blue/20 to-water-dark/60 shadow-xl relative overflow-hidden">
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-water-aqua/10 filter blur-xl" />
              
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-5 w-5 text-water-fresh animate-pulse-slow" />
                <h3 className="font-heading text-xl font-bold text-white">Check Delivery Eligibility</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Type your local 6-digit postal code (PIN code) below to instantly check delivery availability for VAADRO water.
              </p>

              <form onSubmit={handleCheck} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    placeholder="Enter 6-digit PIN code (e.g. 201301)"
                    value={searchPin}
                    onChange={(e) => setSearchPin(e.target.value.replace(/\D/g, ""))}
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm focus:ring-1 focus:ring-water-aqua pr-12"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 p-1.5 rounded-lg bg-water-aqua hover:bg-water-fresh text-[#020813] transition-colors"
                    aria-label="Search PIN Code"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {checkResult === "eligible" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-start space-x-2"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Yes! VAADRO delivers here.</p>
                        <p className="text-[10px] text-slate-300 mt-1">
                          Coverage confirmed for: <strong>{matchedArea}</strong>. Place order via WhatsApp!
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {checkResult === "not-eligible" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start space-x-2"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Out of delivery zone.</p>
                        <p className="text-[10px] text-slate-300 mt-1">
                          We don't support automated routes here yet. Contact Gaurav Dubey directly for bulk/special requirements.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>

        {/* Map card or vehicle display banner */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-water-fresh/10 overflow-hidden relative shadow-lg bg-gradient-to-r from-water-blue/20 to-water-dark/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-white">Daily Office Route Supply</h2>
              <p className="text-slate-300 text-xs leading-relaxed">
                Our eco-friendly delivery vehicles run daily routes between 8:00 AM and 8:00 PM. We supply tech parks, corporate offices, gyms, schools, and apartment complexes. Secure water supply contracts with Gaurav Dubey today.
              </p>
              <a
                href="https://wa.me/919988676742?text=Hello!%20I'd%20like%20to%20set%20up%20daily%20delivery%20for%20our%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-full bg-water-aqua hover:bg-water-fresh text-[#020813] font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
              >
                Inquire Bulk Route Delivery
              </a>
            </div>
            
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden border border-water-fresh/10">
              <Image
                src="/images/delivery-truck.png"
                alt="VAADRO Premium Logistics Delivery Van"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
