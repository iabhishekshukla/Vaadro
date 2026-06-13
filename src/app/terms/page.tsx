import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#020813] text-slate-300 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="inline-flex items-center space-x-2 text-water-aqua hover:text-water-fresh transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" /> <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 text-white">
          <FileText className="h-8 w-8 text-water-aqua" />
          <h1 className="font-heading text-3xl font-bold">Terms & Conditions</h1>
        </div>
        <div className="h-[1px] w-full bg-water-primary/20" />

        <div className="space-y-6 text-sm leading-relaxed">
          <p><strong>Last Updated: June 13, 2026</strong></p>

          <p>
            Welcome to VAADRO. These terms and conditions outline the rules and regulations for the use of VAADRO's Website and delivery services.
          </p>

          <h2 className="font-heading text-lg font-bold text-white mt-6">1. Delivery Service</h2>
          <p>
            Delivery schedules are set upon order confirmation. We attempt to deliver Noida orders within 2 to 4 hours. Deliveries are dependent on logistical feasibility, weather, and localized zone compliance rules.
          </p>

          <h2 className="font-heading text-lg font-bold text-white mt-6">2. Shell Deposit for 20L Canisters</h2>
          <p>
            Refill canister orders require a refundable security deposit per plastic shell. The shell remains the property of VAADRO and must be returned in good condition for deposit refunds.
          </p>

          <h2 className="font-heading text-lg font-bold text-white mt-6">3. Pricing and Invoicing</h2>
          <p>
            All prices listed on the website are guide prices. Final wholesale and corporate rates will be negotiated directly and confirmed via invoice.
          </p>

          <h2 className="font-heading text-lg font-bold text-white mt-6">4. Contact Information</h2>
          <p>
            For any queries regarding terms or billing disputes, please contact owner Gaurav Dubey at <a href="tel:+919988676742" className="text-water-aqua hover:underline">+91 99886 76742</a> or email <a href="mailto:gauravsadanand2002@gmail.com" className="text-water-aqua hover:underline">gauravsadanand2002@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
