"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Globe2,
  Ship,
  Factory,
  Recycle,
  Handshake,
  ShieldCheck,
  BadgeDollarSign,
  Truck,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Global Reach", href: "#global" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    {
      title: "Iron & Steel Scrap",
      description:
        "Reliable sourcing and trading of quality iron and steel scrap for industrial and commercial requirements.",
      icon: Recycle,
      number: "01",
      slug: "iron-steel-scrap",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Ferro Alloys",
      description:
        "Supplying essential ferro alloy materials through trusted sourcing networks and professional trade operations.",
      icon: Factory,
      number: "02",
      slug: "ferro-alloys",
      image:
        "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Skull Breaker (JAM)",
      description:
        "Professional handling and supply solutions for specialized industrial material requirements.",
      icon: ShieldCheck,
      number: "03",
      slug: "skull-breaker-jam",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "International Trade & Indenting",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const strengths = [
    {
      title: "Industry Experience",
      description:
        "Professional knowledge and practical experience in industrial materials and international trade.",
      icon: Factory,
    },
    {
      title: "Global Network",
      description:
        "Strong relationships with suppliers, buyers, and business partners across international markets.",
      icon: Globe2,
    },
    {
      title: "Quality Assurance",
      description:
        "Focused on reliable sourcing and maintaining quality standards throughout the trading process.",
      icon: ShieldCheck,
    },
    {
      title: "Competitive Pricing",
      description:
        "Market-focused solutions designed to deliver value and competitive commercial opportunities.",
      icon: BadgeDollarSign,
    },
    {
      title: "Efficient Logistics",
      description:
        "Professional coordination and handling to support smooth and efficient trade operations.",
      icon: Truck,
    },
    {
      title: "Long-Term Partnerships",
      description:
        "Building trusted and sustainable business relationships with clients and suppliers.",
      icon: Handshake,
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#174d3c] shadow-lg">
              <Ship className="h-6 w-6 text-[#f58220]" />

              <div className="absolute bottom-0 h-1.5 w-full bg-[#f58220]" />
            </div>

            <div className="leading-tight">
              <h2 className="text-lg font-black tracking-[0.12em] text-[#174d3c] sm:text-xl">
                M. HOLLYFEET
              </h2>

              <p className="text-[10px] font-bold tracking-[0.25em] text-[#f58220] sm:text-xs">
                & SONS
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#f58220]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg bg-[#174d3c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123d30] lg:flex"
          >
            Get In Touch
            <ArrowRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="flex flex-col px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 transition hover:text-[#f58220]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#174d3c] px-5 py-3 font-bold text-white transition hover:bg-[#123d30]"
              >
                Contact Us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
