"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Droplet,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  TrendingUp,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Flame,
  Zap,
  Activity,
  Heart,
  Quote,
  Star,
  ArrowRight
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

// Product Data
const products = [
  {
    size: "250ml",
    desc: "Compact refreshment, perfect for events, board meetings, and quick on-the-go hydration.",
    img: "/images/product-sizes.jpg", // Uses size comparison image
    price: "₹10",
    features: ["Pocket Friendly", "Eco-Capped", "Zero Waste Size"],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 250ml water bottles."
  },
  {
    size: "500ml",
    desc: "Our most popular size. Ideal for daily commutes, workout sessions, and office tables.",
    img: "/images/product-500ml-waterfall.jpg", // Waterfall product shot
    price: "₹20",
    features: ["Balanced minerals", "Ergonomic Grip", "100% Recyclable"],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 500ml water bottles."
  },
  {
    size: "1L",
    desc: "The standard hydration benchmark. Perfect for travel, dining, and daily workout needs.",
    img: "/images/product-sizes.jpg",
    price: "₹30",
    features: ["All-day hydration", "BPA Free", "Added Minerals"],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 1L water bottles."
  },
  {
    size: "2L",
    desc: "Perfect for family lunches, picnic outings, or keep-at-desk hydration goals.",
    img: "/images/product-sizes.jpg",
    price: "₹50",
    features: ["Family Size", "Sturdy Handle", "Value Pack"],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 2L water bottles."
  },
  {
    size: "5L",
    desc: "A medium dispenser jug. Excellent for corporate cabins, small households, and road trips.",
    img: "/images/product-5l.png", // Generated 5L image
    price: "₹90",
    features: ["Easy-pour Spout", "Eco Friendly", "Convenient Handle"],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 5L water jugs."
  },
  {
    size: "20L",
    desc: "The heavy-duty hydration champ. Standard bubble-top dispenser for home and office usage.",
    img: "/images/product-20l.png", // Generated 20L image
    price: "₹150",
    features: ["Dispenser Ready", "Ultra Clean Sanitized", "Free Home Delivery"],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 20L water cans."
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Dr. Alok Sharma",
    role: "Nutritionist & Dietitian",
    quote: "Hydration is the cornerstone of metabolism. I recommend VAADRO to my clients because of its perfect pH balance and rich alkaline mineral content. Pure water makes a massive difference.",
    stars: 5,
    avatar: "/images/owner-standing.jpg" // fallback avatar
  },
  {
    id: 2,
    name: "Pooja Hegde",
    role: "Fitness Enthusiast",
    quote: "Switched to VAADRO 1L bottles for my workout routine. The water tastes extremely refreshing and helps me recover minerals lost during heavy cardio sessions. Excellent service!",
    stars: 5,
    avatar: "/images/owner-desk.jpg"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "CEO, TechSphere Solutions",
    quote: "We get 20L VAADRO cans delivered daily for our offices. The delivery is highly punctual, and the quality is absolutely top-notch. Our employee satisfaction speaks for itself.",
    stars: 5,
    avatar: "/images/owner-standing.jpg"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProdIndex, setActiveProdIndex] = useState(0);
  const [activeTestIndex, setActiveTestIndex] = useState(0);
  
  // Achievement Counter Stats
  const [customers, setCustomers] = useState(0);
  const [deliveries, setDeliveries] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [qualityChecks, setQualityChecks] = useState(0);

  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const bottleY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);
  const bottleRotate = useTransform(scrollYProgress, [0, 0.3], [0, 15]);

  useEffect(() => {
    // Stat counters animation trigger
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCustomers(Math.min(Math.floor((10000 / steps) * step), 10000));
      setDeliveries(Math.min(Math.floor((15000 / steps) * step), 15000));
      setSatisfaction(Number(Math.min((99.8 / steps) * step, 99.8).toFixed(1)));
      setQualityChecks(Math.min(Math.floor((50 / steps) * step), 50));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const nextProduct = () => {
    setActiveProdIndex((prev) => (prev + 1) % products.length);
  };
  const prevProduct = () => {
    setActiveProdIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextTestimonial = () => {
    setActiveTestIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveTestIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020813] via-[#04112c] to-[#020813] px-4 md:px-8 py-20">
        <ParticleBackground />

        {/* Ambient Lights */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-water-aqua/10 filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-water-fresh/15 filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-water-aqua/10 border border-water-fresh/20 w-fit">
              <Sparkles className="h-4 w-4 text-water-fresh animate-spin" />
              <span className="text-xs font-semibold tracking-wider text-water-fresh uppercase">
                Premium Mineral Drinking Water
              </span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
              Pure Water. <br />
              <span className="text-gradient">Pure Life.</span> <br />
              Pure Trust.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              VAADRO brings you nature’s pristine hydration. Enriched with optimal minerals and processed through an advanced 8-stage purification system to assure safety, absolute purity, and premium refreshing taste.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/products"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-water-aqua to-water-primary hover:from-water-fresh hover:to-water-aqua text-[#020813] font-bold text-sm tracking-wider uppercase shadow-xl transition-all duration-300 hover:scale-105 border border-water-fresh/30 flex items-center justify-center gap-2"
              >
                Order Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full glass-panel hover:bg-water-primary/30 text-white font-bold text-sm tracking-wider uppercase border border-water-fresh/20 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual (Bottle & Splash) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Water Splash Background Shape */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-72 w-72 md:h-96 md:w-96 rounded-full bg-gradient-to-tr from-water-aqua/20 to-water-fresh/5 filter blur-3xl" />
            </div>

            {/* Glowing Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-water-aqua/30 pointer-events-none"
            />

            {/* Floating Bottle Image */}
            <motion.div
              style={{ y: bottleY, rotate: bottleRotate }}
              className="relative z-10 animate-float"
            >
              <div className="relative h-[420px] w-[260px] md:h-[500px] md:w-[320px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,180,216,0.3)] border border-water-fresh/25 glass-panel">
                <Image
                  src="/images/product-500ml-waterfall.jpg"
                  alt="VAADRO Premium Water Bottle Waterfall"
                  fill
                  sizes="(max-w-768px) 100vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Badges on Bottle */}
              <div className="absolute -left-6 bottom-16 glass-panel py-2.5 px-4 rounded-xl border border-water-fresh/20 flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400">Purity</span>
                  <span className="text-xs font-bold text-white">100% Certified</span>
                </div>
              </div>

              <div className="absolute -right-6 top-16 glass-panel py-2.5 px-4 rounded-xl border border-water-fresh/20 flex items-center space-x-2">
                <Droplet className="h-5 w-5 text-water-aqua fill-water-aqua" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400">Minerals</span>
                  <span className="text-xs font-bold text-white">Added Health</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE VAADRO SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#020813] to-[#030f26] px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-white">
              Why Choose <span className="text-gradient">VAADRO</span>
            </h2>
            <p className="text-slate-400">
              Not all water is created equal. We adhere to the highest international quality standards to deliver an unmatched hydration experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-2xl border border-water-fresh/10 hover:border-water-aqua/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-water-aqua/10 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-water-aqua" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Advanced Purification
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Purified via a state-of-the-art 8-stage filtration process including RO, UV sterilization, and active ozonization.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-2xl border border-water-fresh/10 hover:border-water-aqua/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-water-aqua/10 flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-water-aqua" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Mineral-Rich Water
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Infused with natural vital minerals like Magnesium and Calcium to support electrolyte balance and bone strength.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-2xl border border-water-fresh/10 hover:border-water-aqua/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-water-aqua/10 flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-water-aqua" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                100+ Quality Checks
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every batch undergoes rigorous chemical and biological laboratory tests before packaging to guarantee absolute safety.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-2xl border border-water-fresh/10 hover:border-water-aqua/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-water-aqua/10 flex items-center justify-center mb-6">
                <Droplet className="h-6 w-6 text-water-aqua" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Safe Packaging
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bottled in a clean-room facility in 100% BPA-free, food-grade PET containers with temper-evident child seals.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-2xl border border-water-fresh/10 hover:border-water-aqua/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-water-aqua/10 flex items-center justify-center mb-6">
                <Flame className="h-6 w-6 text-water-aqua" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Glacier Freshness
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimized filling technology that preserves natural dissolved oxygen, keeping the water tasting crisp and fresh.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-2xl border border-water-fresh/10 hover:border-water-aqua/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-water-aqua/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-water-aqua" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Customer Trust
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Led by Gaurav Dubey, we prioritize trust above all. Punctual doorstep delivery and transparent pricing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CAROUSEL SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#030f26] to-[#020813] px-4 md:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-white">
                Our Premium <span className="text-gradient">Range</span>
              </h2>
              <p className="text-slate-400 max-w-xl">
                Explore our catalog of custom-sized bottled water products designed to fit every occasion, lifestyle, and household.
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-3">
              <button
                onClick={prevProduct}
                className="p-3 rounded-full glass-panel hover:bg-water-aqua hover:text-[#020813] border border-water-fresh/20 text-white transition-all duration-200"
                aria-label="Previous product"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextProduct}
                className="p-3 rounded-full glass-panel hover:bg-water-aqua hover:text-[#020813] border border-water-fresh/20 text-white transition-all duration-200"
                aria-label="Next product"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Carousel Body */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProdIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Product Card Details */}
                <div className="lg:col-span-5 flex flex-col space-y-6">
                  <span className="text-xs font-bold text-water-aqua uppercase tracking-[0.2em]">
                    Featured Size • {products[activeProdIndex].size}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
                    VAADRO {products[activeProdIndex].size}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base">
                    {products[activeProdIndex].desc}
                  </p>
                  
                  <div className="text-2xl font-extrabold text-white flex items-baseline gap-2">
                    <span className="text-xs text-slate-400 font-normal">Starting at</span>
                    <span className="text-water-fresh">{products[activeProdIndex].price}</span>
                  </div>

                  <div className="space-y-2">
                    {products[activeProdIndex].features.map((feat) => (
                      <div key={feat} className="flex items-center space-x-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-4.5 w-4.5 text-water-aqua" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-4">
                    <a
                      href={`https://wa.me/919988676742?text=${encodeURIComponent(products[activeProdIndex].waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-full bg-[#00b4d8] hover:bg-[#90e0ef] text-[#020813] font-bold text-xs tracking-wider uppercase shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                    >
                      <Droplet className="h-4 w-4 fill-current" /> Order via WhatsApp
                    </a>
                    <Link
                      href="/products"
                      className="px-6 py-3.5 rounded-full glass-panel hover:bg-slate-900/50 text-white font-bold text-xs tracking-wider uppercase border border-water-fresh/20 transition-transform hover:scale-105 flex items-center"
                    >
                      View All Products
                    </Link>
                  </div>
                </div>

                {/* Product Image Frame */}
                <div className="lg:col-span-7 flex justify-center relative">
                  <div className="relative h-[300px] w-[260px] sm:h-[400px] sm:w-[350px] rounded-3xl overflow-hidden glass-panel border border-water-fresh/15 p-4 flex items-center justify-center bg-gradient-to-b from-water-blue/20 to-water-dark/60">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={products[activeProdIndex].img}
                        alt={`VAADRO ${products[activeProdIndex].size}`}
                        fill
                        className="object-contain"
                        sizes="(max-w-768px) 100vw, 400px"
                      />
                    </div>
                  </div>
                  {/* Floating Aqua Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-water-aqua/10 filter blur-[80px] pointer-events-none z-0" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#020813] to-[#030f26] px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-white">
              The VAADRO <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-slate-400">
              See how VAADRO premium packaged water stacks up against standard household and tap water.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-water-fresh/10 glass-panel">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-water-primary/30 border-b border-water-fresh/20 text-white">
                  <th className="p-5 font-heading font-bold text-sm tracking-wider uppercase">Features</th>
                  <th className="p-5 font-heading font-bold text-sm tracking-wider uppercase text-water-fresh">VAADRO Premium Water</th>
                  <th className="p-5 font-heading font-bold text-sm tracking-wider uppercase text-slate-400">Ordinary Drinking Water</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-water-primary/10 text-sm text-slate-300">
                <tr>
                  <td className="p-5 font-semibold text-white">Purification System</td>
                  <td className="p-5 flex items-center space-x-2 text-emerald-400">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                    <span>8-stage RO + UV + Active Ozone + UF</span>
                  </td>
                  <td className="p-5 text-slate-400 flex items-center space-x-2">
                    <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                    <span>Basic mechanical sand/carbon filtration</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-white">Mineral Composition</td>
                  <td className="p-5 text-emerald-400 flex items-center space-x-2">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                    <span>Enriched with Magnesium, Calcium & Zinc</span>
                  </td>
                  <td className="p-5 text-slate-400 flex items-center space-x-2">
                    <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                    <span>Demineralized (flat taste, zero nutrients)</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-white">Water pH Balance</td>
                  <td className="p-5 text-emerald-400 flex items-center space-x-2">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                    <span>Optimized alkaline (7.2 - 7.8 pH)</span>
                  </td>
                  <td className="p-5 text-slate-400 flex items-center space-x-2">
                    <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                    <span>Acidic or fluctuating (unregulated)</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-white">Packaging Standards</td>
                  <td className="p-5 text-emerald-400 flex items-center space-x-2">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                    <span>100% BPA-Free, food-grade PET bottles</span>
                  </td>
                  <td className="p-5 text-slate-400 flex items-center space-x-2">
                    <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                    <span>Generic recycled low-grade plastic</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-white">Quality Control</td>
                  <td className="p-5 text-emerald-400 flex items-center space-x-2">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                    <span>Daily batch testing & lab reports</span>
                  </td>
                  <td className="p-5 text-slate-400 flex items-center space-x-2">
                    <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                    <span>Irregular monthly checks or none</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. HEALTH BENEFITS SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#030f26] to-[#020813] px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-white">
              Health Benefits of <span className="text-gradient">VAADRO</span>
            </h2>
            <p className="text-slate-400">
              Every drop is configured to support healthy organ function, boost digestion, and enhance physical vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="glass-panel p-6 rounded-2xl border border-water-fresh/10 text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-water-aqua/15 text-water-aqua flex items-center justify-center mb-6">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Better Hydration</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Micro-structured water molecules are absorbed faster by cellular walls, delivering rapid systemic hydration.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="glass-panel p-6 rounded-2xl border border-water-fresh/10 text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-water-aqua/15 text-water-aqua flex items-center justify-center mb-6">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Improved Digestion</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Optimized alkalinity neutralizes stomach acids, supporting smooth gastrointestinal motility and nutrition absorption.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="glass-panel p-6 rounded-2xl border border-water-fresh/10 text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-water-aqua/15 text-water-aqua flex items-center justify-center mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Mineral Balance</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Supplies essential daily Magnesium and Calcium to regulate nerve impulses, cardiovascular beats, and muscle flexion.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="glass-panel p-6 rounded-2xl border border-water-fresh/10 text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-water-aqua/15 text-water-aqua flex items-center justify-center mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Energy & Vitality</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Eliminates micro-level toxins and lactic acids from skeletal tissues, helping sustain high energy outputs all day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ACHIEVEMENT COUNTERS SECTION */}
      <section className="py-20 bg-gradient-to-r from-water-blue/40 via-water-dark to-water-blue/40 border-y border-water-primary/20 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div>
            <span className="block font-heading text-4xl md:text-5xl font-extrabold text-gradient-aqua mb-2">
              {customers.toLocaleString()}+
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Happy Customers
            </span>
          </div>
          <div>
            <span className="block font-heading text-4xl md:text-5xl font-extrabold text-gradient-aqua mb-2">
              {deliveries.toLocaleString()}+
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Daily Liters Delivered
            </span>
          </div>
          <div>
            <span className="block font-heading text-4xl md:text-5xl font-extrabold text-gradient-aqua mb-2">
              {satisfaction}%
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Satisfaction Rate
            </span>
          </div>
          <div>
            <span className="block font-heading text-4xl md:text-5xl font-extrabold text-gradient-aqua mb-2">
              {qualityChecks}+
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Daily Quality Checks
            </span>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-b from-[#020813] to-[#030f26] px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-white">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-slate-400">
              Read how VAADRO has redefined drinking water quality for doctor professionals, offices, and sports enthusiasts.
            </p>
          </div>

          <div className="relative glass-panel rounded-3xl border border-water-fresh/15 p-8 md:p-12 bg-gradient-to-tr from-water-blue/20 to-water-dark/60">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-water-aqua/10 fill-current" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="flex space-x-1">
                  {Array.from({ length: testimonials[activeTestIndex].stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-slate-300 italic max-w-3xl leading-relaxed">
                  "{testimonials[activeTestIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-white text-base">
                    {testimonials[activeTestIndex].name}
                  </span>
                  <span className="text-xs text-water-fresh">
                    {testimonials[activeTestIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex justify-center space-x-2 mt-8 z-10 relative">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    idx === activeTestIndex ? "bg-water-aqua w-6" : "bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left/Right Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass-panel hover:bg-water-primary/50 text-white shrink-0 hidden md:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass-panel hover:bg-water-primary/50 text-white shrink-0 hidden md:block"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. WHATSAPP CTA BANNER SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#030f26] to-[#020813] px-4 md:px-8 relative overflow-hidden">
        {/* Decorative Wave Graphics */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-water-aqua to-transparent animate-wave" />
        </div>

        <div className="max-w-5xl mx-auto glass-panel rounded-3xl border border-water-fresh/20 p-10 md:p-16 text-center relative z-10 overflow-hidden bg-gradient-to-br from-water-blue/40 to-slate-900/90 shadow-[0_20px_50px_rgba(0,180,216,0.15)]">
          <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-water-aqua/10 filter blur-2xl" />
          
          <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-400 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.407 1.46 5.539 0 10.045-4.51 10.049-10.05.002-2.684-1.04-5.207-2.936-7.104C17.275 1.564 14.75 1.52 12.008 1.52c-5.543 0-10.05 4.507-10.055 10.05-.002 1.902.493 3.763 1.433 5.37L2.4 21.574l4.247-1.127z" />
              </svg>
            </div>
            
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Order Fresh Water <br />
              Instantly on <span className="text-gradient">WhatsApp</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Why wait? Place your order or schedule recurring water deliveries for your home or office instantly. Click below to chat directly with our owner, Gaurav Dubey.
            </p>
            
            <motion.a
              href="https://wa.me/919988676742?text=Hello%20VAADRO!%20I'd%20like%20to%20order%20premium%20mineral%20water%20bottles."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm tracking-wider uppercase shadow-xl transition-colors duration-200 border border-emerald-400/20 flex items-center justify-center gap-3"
            >
              Order via WhatsApp (+91 99886 76742)
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
