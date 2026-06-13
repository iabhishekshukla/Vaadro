"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppFloating() {
  const phoneNumber = "919988676742";
  const message = "Hello VAADRO! I want to inquire about ordering premium drinking water.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Ripple Rings */}
      <div className="absolute inset-0 -m-2">
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping [animation-delay:0.5s]" />
      </div>

      {/* Main Button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl transition-colors duration-300 border border-emerald-400/20"
        aria-label="Order on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.407 1.46 5.539 0 10.045-4.51 10.049-10.05.002-2.684-1.04-5.207-2.936-7.104C17.275 1.564 14.75 1.52 12.008 1.52c-5.543 0-10.05 4.507-10.055 10.05-.002 1.902.493 3.763 1.433 5.37L2.4 21.574l4.247-1.127zM17.65 14.73c-.3-.15-1.785-.88-2.067-.98-.28-.1-.487-.15-.69.15-.2.3-.78 1-.96 1.2-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.89-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.69-1.66-.94-2.27-.25-.6-.52-.52-.69-.53-.18-.01-.38-.01-.58-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.07 2.91 1.22 3.11.15.2 2.11 3.23 5.12 4.53.71.3 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.28-.2-.58-.35z" />
        </svg>
      </motion.a>
    </div>
  );
}
