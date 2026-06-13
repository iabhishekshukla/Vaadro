"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Droplet } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#030f26] to-[#01050d] border-t border-water-primary/30 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Droplet className="h-8 w-8 text-water-aqua fill-water-aqua/20" />
              <span className="font-heading text-2xl font-bold tracking-wider text-gradient">
                VAADRO
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium packaged drinking water loaded with essential minerals, purified using advanced 8-stage processing. Trust in every drop.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-900/50 border border-water-primary/30 text-water-light hover:text-water-aqua hover:border-water-aqua transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-900/50 border border-water-primary/30 text-water-light hover:text-water-aqua hover:border-water-aqua transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-900/50 border border-water-primary/30 text-water-light hover:text-water-aqua hover:border-water-aqua transition-colors"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4 tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-water-fresh transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-water-fresh transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-water-fresh transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-water-fresh transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-water-fresh transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-water-fresh transition-colors">
                  Delivery Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4 tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-water-aqua shrink-0 mt-0.5" />
                <span>Head Office: Corporate Tower, Sector 62, Noida, UP - 201301</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-water-aqua shrink-0" />
                <a href="tel:+919988676742" className="hover:text-white transition-colors">
                  +91 99886 76742
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-water-aqua shrink-0" />
                <a href="mailto:gauravsadanand2002@gmail.com" className="hover:text-white transition-colors">
                  gauravsadanand2002@gmail.com
                </a>
              </li>
              <li className="text-xs text-slate-400">
                <strong>Owner:</strong> Gaurav Dubey
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4 tracking-wider">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get latest offers, health hydration tips, and updates from VAADRO.
            </p>
            {subscribed ? (
              <p className="text-sm text-water-fresh font-medium">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm focus:ring-1 focus:ring-water-aqua pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 p-1.5 rounded-md bg-water-aqua hover:bg-water-fresh text-[#020813] transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-water-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VAADRO Pure Water. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
