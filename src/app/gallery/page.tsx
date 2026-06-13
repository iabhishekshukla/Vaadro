"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery Items
const galleryItems = [
  {
    id: 1,
    title: "VAADRO Premium Waterfall",
    category: "products",
    img: "/images/product-500ml-waterfall.jpg",
    sizeClass: "masonry-item-tall",
  },
  {
    id: 2,
    title: "Eco-Fleet Logistics Van",
    category: "delivery",
    img: "/images/delivery-truck.png",
    sizeClass: "masonry-item-wide",
  },
  {
    id: 3,
    title: "Pantry Size Catalog Comparison",
    category: "products",
    img: "/images/product-sizes.jpg",
    sizeClass: "",
  },
  {
    id: 4,
    title: "Founder Gaurav Dubey",
    category: "team",
    img: "/images/owner-standing.jpg",
    sizeClass: "masonry-item-tall",
  },
  {
    id: 5,
    title: "RO Filtration Facility tanks",
    category: "manufacturing",
    img: "/images/factory-purification.png",
    sizeClass: "masonry-item-wide",
  },
  {
    id: 6,
    title: "5L Dispenser Jug Production",
    category: "products",
    img: "/images/product-5l.png",
    sizeClass: "",
  },
  {
    id: 7,
    title: "Founder Gaurav Dubey Desk",
    category: "team",
    img: "/images/owner-desk.jpg",
    sizeClass: "",
  },
  {
    id: 8,
    title: "20L Canisters Storage",
    category: "manufacturing",
    img: "/images/product-20l.png",
    sizeClass: "",
  },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Products", value: "products" },
  { name: "Manufacturing", value: "manufacturing" },
  { name: "Delivery Fleet", value: "delivery" },
  { name: "Team & Leadership", value: "team" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const openLightbox = (id: number) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020813] via-[#030f26] to-[#020813] py-20 px-4 md:px-8">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-water-aqua/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-water-fresh/10 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-water-aqua/10 border border-water-fresh/25 mb-4"
          >
            <Droplet className="h-4 w-4 text-water-fresh" />
            <span className="text-xs text-water-fresh font-semibold uppercase tracking-wider">Visual Media</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white mb-6"
          >
            VAADRO <span className="text-gradient">Gallery</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            A visual documentation of our bottled water range, modern RO packaging units, and delivery fleets.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-water-aqua text-[#020813] border-water-fresh shadow-lg scale-105"
                  : "glass-panel text-slate-300 border-water-fresh/10 hover:border-water-fresh/35"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <motion.div
          layout
          className="masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-3xl overflow-hidden glass-panel border border-water-fresh/10 shadow-lg group cursor-pointer ${item.sizeClass}`}
                onClick={() => openLightbox(item.id)}
              >
                {/* Image Wrap */}
                <div className="relative h-72 w-full md:h-full md:min-h-[260px] aspect-video md:aspect-auto">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-w-768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-water-dark/95 via-water-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] text-water-fresh uppercase tracking-widest font-bold mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs text-slate-300">
                      <ZoomIn className="h-4.5 w-4.5 text-water-aqua" />
                      <span>Click to view larger</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-40"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-40"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] flex flex-col justify-center items-center"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={galleryItems[lightboxIndex].img}
                    alt={galleryItems[lightboxIndex].title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                
                {/* Description details at bottom */}
                <div className="mt-4 text-center">
                  <span className="text-xs uppercase text-water-fresh tracking-widest font-semibold">
                    {galleryItems[lightboxIndex].category}
                  </span>
                  <h2 className="font-heading text-lg font-bold text-white mt-1">
                    {galleryItems[lightboxIndex].title}
                  </h2>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
