"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplet } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Owner", href: "/owner" },
  { name: "Certifications", href: "/certifications" },
  { name: "Delivery Areas", href: "/delivery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-navbar py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Droplet className="h-9 w-9 text-water-aqua animate-pulse-slow fill-water-aqua/20" />
              <motion.div
                className="absolute inset-0 bg-water-aqua/30 rounded-full filter blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-wider text-gradient">
                VAADRO
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-water-fresh">
                Pure Hydration • Pure Life
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-water-fresh duration-200"
                  style={{ color: isActive ? "#90e0ef" : "#cbd5e1" }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-water-aqua to-water-fresh rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="https://wa.me/919988676742"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-water-aqua to-water-primary hover:from-water-fresh hover:to-water-aqua text-white text-xs font-semibold tracking-wider uppercase shadow-md transition-all duration-300 hover:scale-105 border border-water-fresh/20 flex items-center gap-1.5"
            >
              <Droplet className="h-3.5 w-3.5 fill-current" /> Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-water-light hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-navbar overflow-hidden border-b border-water-fresh/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "bg-water-primary/40 text-water-fresh border-l-2 border-water-aqua"
                          : "text-slate-300 hover:bg-slate-900/50 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 px-3"
              >
                <Link
                  href="https://wa.me/919988676742"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center px-6 py-3 rounded-full bg-gradient-to-r from-water-aqua to-water-primary text-white text-sm font-semibold tracking-wider uppercase shadow-md flex items-center gap-2"
                >
                  <Droplet className="h-4 w-4 fill-current" /> Order via WhatsApp
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
