"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, FileText, CheckCircle2, FlaskConical } from "lucide-react";

const certificationCards = [
  {
    icon: <Award className="h-8 w-8 text-water-aqua" />,
    code: "ISO 9001 : 2015",
    title: "Quality Management System",
    issuer: "International Organization for Standardization",
    desc: "Guarantees that our manufacturing, bottling, purification, and storage operations satisfy global consistency and client safety benchmarks.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-water-aqua" />,
    code: "ISO 22000 : 2018",
    title: "Food Safety Management",
    issuer: "Global Safety Assurances",
    desc: "Certifies that the full processing line, from groundwater source pre-filtering to final cap sealing, eliminates hazard exposures and remains sterile.",
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-water-aqua" />,
    code: "BIS Standards Compliant",
    title: "Bureau of Indian Standards",
    issuer: "Govt of India IS:14543",
    desc: "Adheres to strict government mandates for packaged drinking water, passing physical, chemical, and biological verification parameters.",
  },
];

const chemicalLogs = [
  { parameter: "pH Value", standard: "6.5 - 8.5", vaadro: "7.4 - 7.6", status: "Optimal" },
  { parameter: "Total Dissolved Solids (TDS)", standard: "500 mg/l max", vaadro: "80 - 110 mg/l", status: "Healthy Mix" },
  { parameter: "Magnesium (Mg)", standard: "30 mg/l max", vaadro: "12 - 18 mg/l", status: "Enriched" },
  { parameter: "Calcium (Ca)", standard: "75 mg/l max", vaadro: "20 - 30 mg/l", status: "Enriched" },
  { parameter: "Chloride (Cl)", standard: "250 mg/l max", vaadro: "15 - 25 mg/l", status: "Very Safe" },
  { parameter: "Sulphate (SO4)", standard: "200 mg/l max", vaadro: "5 - 12 mg/l", status: "Very Safe" },
];

export default function Certifications() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020813] via-[#030f26] to-[#020813] py-20 px-4 md:px-8">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-water-aqua/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-water-fresh/15 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-water-aqua/10 border border-water-fresh/25 mb-4"
          >
            <ShieldCheck className="h-4 w-4 text-water-fresh" />
            <span className="text-xs text-water-fresh font-semibold uppercase tracking-wider">Quality Assurance</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white mb-6"
          >
            Safety & <span className="text-gradient">Certifications</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            We submit our water batches to regular independent laboratory assessments. Review our trust credentials and parameter reports.
          </motion.p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {certificationCards.map((card, idx) => (
            <motion.div
              key={card.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl border border-water-fresh/10 bg-gradient-to-b from-water-blue/10 to-water-dark/60 flex flex-col justify-between"
            >
              <div>
                <div className="h-14 w-14 rounded-2xl bg-water-aqua/10 flex items-center justify-center mb-6 border border-water-aqua/20">
                  {card.icon}
                </div>
                <span className="text-xs font-bold text-water-fresh uppercase tracking-widest block mb-1">
                  {card.code}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4 font-semibold italic">
                  Issuer: {card.issuer}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold pt-6 mt-6 border-t border-water-primary/10">
                <CheckCircle2 className="h-4.5 w-4.5" />
                <span>Active Compliance Status</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chemical/Physical Parameter Report */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Laboratory Analysis Report
            </h2>
            <p className="text-slate-400 text-xs">
              Physical and chemical properties of VAADRO mineral water compared to standard BIS parameters.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-water-fresh/15 glass-panel">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-water-primary/30 border-b border-water-fresh/20 text-white">
                  <th className="p-4 font-heading font-bold text-xs uppercase tracking-wider">Test Parameter</th>
                  <th className="p-4 font-heading font-bold text-xs uppercase tracking-wider">BIS IS:14543 Limits</th>
                  <th className="p-4 font-heading font-bold text-xs uppercase tracking-wider text-water-fresh">VAADRO Water Log</th>
                  <th className="p-4 font-heading font-bold text-xs uppercase tracking-wider">Purity Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-water-primary/10 text-xs text-slate-300">
                {chemicalLogs.map((log) => (
                  <tr key={log.parameter} className="hover:bg-slate-900/35 transition-colors">
                    <td className="p-4 font-semibold text-white">{log.parameter}</td>
                    <td className="p-4 text-slate-400">{log.standard}</td>
                    <td className="p-4 text-water-fresh font-bold">{log.vaadro}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PDF Download Action Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-water-fresh/25 bg-gradient-to-r from-water-blue/40 to-slate-900/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-white">
              <FileText className="h-5 w-5 text-water-aqua" />
              <h2 className="font-heading text-xl font-bold">Download Laboratory PDF</h2>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xl">
              Get full chemical trace certificates and biological test details verified by state-licensed laboratories. Essential for food service partners.
            </p>
          </div>
          <button
            onClick={() => alert("Laboratory PDF download triggered. (Simulated)")}
            className="px-6 py-3 rounded-full bg-water-aqua hover:bg-water-fresh text-[#020813] font-bold text-xs uppercase tracking-wider shadow-lg shrink-0 flex items-center justify-center gap-2"
          >
            <FileText className="h-4.5 w-4.5" /> Download Report
          </button>
        </div>

      </div>
    </div>
  );
}
