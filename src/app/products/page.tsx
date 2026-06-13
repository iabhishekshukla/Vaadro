"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplet, Check, ShieldCheck, ShoppingCart, HelpCircle } from "lucide-react";

const productsList = [
  {
    size: "250ml Elite",
    tagline: "Ultra-compact boardroom refreshment",
    desc: "Specially designed for corporate events, seminars, and catering services. Easy to serve, clean layout, and minimal waste.",
    img: "/images/product-sizes.jpg",
    price: "₹10",
    tds: "80 - 120 ppm",
    ph: "7.2 - 7.5",
    features: [
      "Compact ergonomic build",
      "Food-grade BPA free cap",
      "Box packaging of 48 bottles",
      "Eco-friendly weight optimization",
    ],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 250ml bottles. Please share bulk delivery options.",
  },
  {
    size: "500ml Premium",
    tagline: "Our flagship personal hydration bottle",
    desc: "The perfect companion for your active daily lifestyle. Sized fits easily into backpacks, cup-holders, and laptop sleeves.",
    img: "/images/product-500ml-waterfall.jpg",
    price: "₹20",
    tds: "90 - 110 ppm",
    ph: "7.4 - 7.6",
    features: [
      "Optimal electrolyte balance",
      "Added Magnesium & Calcium",
      "Box packaging of 24 bottles",
      "Extended crisp freshness",
    ],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 500ml bottles. Please share bulk delivery options.",
  },
  {
    size: "1L Standard",
    tagline: "Daily hydration benchmark",
    desc: "The universal benchmark for keeping hydrated. Widely preferred for dining rooms, road travel, and intensive workout recovery.",
    img: "/images/product-sizes.jpg",
    price: "₹30",
    tds: "90 - 115 ppm",
    ph: "7.4 - 7.6",
    features: [
      "Complete daily minerals mix",
      "Double-walled tamper seal",
      "Box packaging of 12 bottles",
      "Ergonomic structural ridges",
    ],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 1L bottles. Please share bulk delivery options.",
  },
  {
    size: "2L Family",
    tagline: "Sharing purity with the family",
    desc: "Ideal for picnic drives, corporate conference desks, and weekend family get-togethers. Convenient handle design for pouring.",
    img: "/images/product-sizes.jpg",
    price: "₹50",
    tds: "90 - 120 ppm",
    ph: "7.3 - 7.5",
    features: [
      "Ergonomic handle mould",
      "Ideal for table service",
      "Box packaging of 9 bottles",
      "Reinforced heavy-duty PET",
    ],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 2L bottles. Please share delivery options.",
  },
  {
    size: "5L Compact Dispenser",
    tagline: "Convenience for cabins & pantries",
    desc: "Medium-sized water jug fitted with an easy-pour screw faucet. Ideal for executive offices, cabins, and weekend camping trips.",
    img: "/images/product-5l.png",
    price: "₹90",
    tds: "85 - 110 ppm",
    ph: "7.4 - 7.6",
    features: [
      "Built-in carry handle",
      "Easy tap dispenser ready",
      "Fits pantry shelves perfectly",
      "Eco-conscious material saver",
    ],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 5L jugs. Please share delivery options.",
  },
  {
    size: "20L Bubble Can",
    tagline: "Corporate & home pantry benchmark",
    desc: "Our heavy-duty water solution. Perfect for standard water dispensers and cooling systems. Sanitized and sterilized prior to refill.",
    img: "/images/product-20l.png",
    price: "₹150",
    tds: "80 - 100 ppm",
    ph: "7.3 - 7.6",
    features: [
      "Dispenser neck compatible",
      "Multi-stage can sterilization",
      "Prompt corporate delivery cycles",
      "Zero-deposit options available",
    ],
    waMsg: "Hi Gaurav, I would like to order the VAADRO 20L water cans. Please share delivery options.",
  },
];

export default function Products() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020813] via-[#030f26] to-[#020813] py-20 px-4 md:px-8">
      {/* Glow Ambient Lights */}
      <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-water-aqua/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-water-fresh/10 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-water-aqua/10 border border-water-fresh/25 mb-4"
          >
            <Droplet className="h-4 w-4 text-water-fresh" />
            <span className="text-xs text-water-fresh font-semibold uppercase tracking-wider">Premium Catalog</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white mb-6"
          >
            VAADRO <span className="text-gradient">Products</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Choose the perfect size for your hydration requirements. From small boardroom settings to heavy-duty corporate dispenser canisters, we have you covered.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((product, idx) => (
            <motion.div
              key={product.size}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-3xl border border-water-fresh/10 overflow-hidden flex flex-col justify-between hover:border-water-aqua/40 transition-all duration-300 bg-gradient-to-b from-water-blue/15 to-water-dark/60 shadow-xl group"
            >
              {/* Product Thumbnail Banner */}
              <div className="relative h-64 w-full bg-gradient-to-b from-water-blue/20 to-water-dark/40 p-6 flex items-center justify-center overflow-hidden border-b border-water-fresh/10">
                {/* Aqua Aura Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-36 rounded-full bg-water-aqua/10 filter blur-xl group-hover:scale-155 transition-transform duration-500" />
                
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={product.img}
                    alt={`VAADRO ${product.size}`}
                    fill
                    className="object-contain"
                    sizes="(max-w-768px) 100vw, 300px"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h2 className="font-heading text-xl font-bold text-white group-hover:text-water-fresh transition-colors">
                      {product.size}
                    </h2>
                    <span className="text-xl font-extrabold text-water-aqua">
                      {product.price}
                    </span>
                  </div>
                  <span className="text-xs text-water-light block mb-4 italic">
                    {product.tagline}
                  </span>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  {/* Technical purity stats */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-water-primary/10 mb-6 bg-slate-950/20 rounded-xl px-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-slate-500 font-bold">Avg TDS</span>
                      <span className="text-xs font-semibold text-slate-300">{product.tds}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-slate-500 font-bold">pH Level</span>
                      <span className="text-xs font-semibold text-slate-300">{product.ph}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center space-x-2 text-xs text-slate-300">
                        <Check className="h-4 w-4 text-water-aqua shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Call to Order */}
                <a
                  href={`https://wa.me/919988676742?text=${encodeURIComponent(product.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-water-aqua hover:bg-water-fresh text-[#020813] font-bold text-xs tracking-wider uppercase text-center transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,180,216,0.3)]"
                >
                  <ShoppingCart className="h-4 w-4 fill-current" /> Order via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Commitment Section */}
        <div className="mt-28 glass-panel p-8 md:p-12 rounded-3xl border border-water-fresh/25 bg-gradient-to-r from-water-blue/40 to-slate-900/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-emerald-400" />
              <h2 className="font-heading text-2xl font-bold text-white">Our Quality Assurance</h2>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Every VAADRO bottle is sealed inside sterile enclosures under positive air pressure. Labels feature a batch barcode showing packaging date and chemical log values, giving our corporate partners complete tracking safety.
            </p>
          </div>
          <a
            href="https://wa.me/919988676742?text=Hello%20VAADRO!%20I'm%20interested%20in%20setting%20up%20a%20regular%20drinking%20water%20supply%20for%20my%20office/home."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-water-aqua to-water-primary hover:from-water-fresh hover:to-water-aqua text-white text-xs font-bold uppercase tracking-wider shadow-lg shrink-0 flex items-center justify-center gap-2"
          >
            Setup Monthly Supply
          </a>
        </div>

      </div>
    </div>
  );
}
