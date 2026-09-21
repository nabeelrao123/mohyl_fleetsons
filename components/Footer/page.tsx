"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    ArrowRight,
    CheckCircle2,
    Globe2,
    Ship,
    Factory,
    Recycle,
    Handshake,
    ShieldCheck,
    BadgeDollarSign,
    Truck,
    Mail,
    Phone,
    MapPin,
    Send,
} from "lucide-react";

export default function Footer() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Global Reach", href: "#global" },
        { name: "Why Choose Us", href: "#why-us" },
        { name: "Contact", href: "#contact" },
    ];

 
    return (<>

        <footer className="bg-[#102f25] text-white">
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#174d3c]">
                                <Ship className="text-[#f58220]" />
                            </div>

                            <div>
                                <h2 className="text-xl font-black tracking-[0.1em]">
                                    M. HOLLYFEET
                                </h2>

                                <p className="text-xs font-bold tracking-[0.25em] text-[#f58220]">
                                    & SONS
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                            Professional trading, sourcing, and international indenting
                            solutions for industrial markets and business partners.
                        </p>

                        <div className="mt-6 flex gap-3" />
                    </div>

                    {/* Links */}

                    <div>
                        <h4 className="font-black">Quick Links</h4>

                        <div className="mt-6 flex flex-col gap-3">
                            {navItems.slice(0, 5).map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-slate-400 transition hover:text-[#f58220]"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}

                    <div>
                        <h4 className="font-black">Contact</h4>

                        <div className="mt-6 space-y-4 text-sm text-slate-400">
                            <div className="flex gap-3">
                                <Phone size={17} className="shrink-0 text-[#f58220]" />
                                <span>+92-42-7600454</span>
                            </div>

                            <div className="flex gap-3">
                                <Mail size={17} className="shrink-0 text-[#f58220]" />
                                <span>mholyfeet1@yahoo.com</span>
                            </div>

                            <div className="flex gap-3">
                                <MapPin size={17} className="shrink-0 text-[#f58220]" />
                                <span>Lahore Cantt, Pakistan</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} M. HOLLYFEET & SONS. All Rights
                        Reserved.
                    </p>

                    <p>
                        International Trade • Industrial Solutions • Global Network
                    </p>
                </div>
            </div>
        </footer>
    </>)
}