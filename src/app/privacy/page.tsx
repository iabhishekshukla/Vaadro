import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#020813] text-slate-300 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="inline-flex items-center space-x-2 text-water-aqua hover:text-water-fresh transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" /> <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 text-white">
          <Shield className="h-8 w-8 text-water-aqua" />
          <h1 className="font-heading text-3xl font-bold">Privacy Policy</h1>
        </div>
        <div className="h-[1px] w-full bg-water-primary/20" />

        <div className="space-y-6 text-sm leading-relaxed">
          <p><strong>Last Updated: June 13, 2026</strong></p>
          
          <p>
            At VAADRO, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by VAADRO and how we use it.
          </p>

          <h2 className="font-heading text-lg font-bold text-white mt-6">1. Information We Collect</h2>
          <p>
            When you submit our Inquiry Form or get in touch via WhatsApp, we collect information including your name, mobile number, requested product type, purchase quantities, and shipping address.
          </p>

          <h2 className="font-heading text-lg font-bold text-white mt-6">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>To process your orders and arrange shipping dispatch schedules.</li>
            <li>To contact you regarding discount offers, billing details, or service changes.</li>
            <li>To analyze and optimize website performance and user experience.</li>
          </ul>

          <h2 className="font-heading text-lg font-bold text-white mt-6">3. Cookies</h2>
          <p>
            Like any other website, VAADRO uses cookies. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
          </p>

          <h2 className="font-heading text-lg font-bold text-white mt-6">4. Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:gauravsadanand2002@gmail.com" className="text-water-aqua hover:underline">gauravsadanand2002@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
