// "use client";

// import Link from "next/link";
// import {
//   ArrowDown,
//   ArrowRight,
//   Check,
//   CheckCircle2,
//   ChevronLeft,
//   ChevronRight,
//   Globe2,
//   Mail,
//   MapPin,
//   Menu,
//   Phone,
//   Send,
//   ShieldCheck,
//   Sparkles,
//   Truck,
//   X,
// } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import type { FormEvent } from "react";



// const BRAND = {
//   green: "#174d3c",
//   darkGreen: "#123d30",
//   orange: "#f58220",
//   orangeDark: "#e87312",
// };

// const heroImages = [
//   "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=88",
//   "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=2200&q=88",
//   "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=2200&q=88",
// ];

// type Product = {
//   number: string;
//   title: string;
//   slug: string;
//   description: string;
//   image: string;
//   features: string[];
// };

// const products: Product[] = [
//   {
//     number: "01",
//     title: "Iron & Steel Scrap",
//     slug: "iron-steel-scrap",
//     description:
//       "Ferrous scrap sourcing and trading solutions for industrial buyers, with a focus on reliable supply and consistent trade coordination.",
//     image:
//       "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
//     features: [
//       "International sourcing network",
//       "Industrial-grade material focus",
//       "Professional trade coordination",
//     ],
//   },
//   {
//     number: "02",
//     title: "Ferro Alloys",
//     slug: "ferro-alloys",
//     description:
//       "Sourcing and trading support for ferro alloy requirements across industrial and manufacturing markets.",
//     image:
//       "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
//     features: [
//       "International supplier relationships",
//       "Requirement-focused sourcing",
//       "Long-term trading approach",
//     ],
//   },
//   {
//     number: "03",
//     title: "Skull Breaker (JAM)",
//     slug: "skull-breaker-jam",
//     description:
//       "Specialized trading support for Skull Breaker (JAM), connecting sourcing opportunities with buyers across Pakistan.",
//     image:
//       "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85",
//     features: [
//       "Established sourcing relationships",
//       "Professional coordination",
//       "Pakistan-wide buyer focus",
//     ],
//   },
//   {
//     number: "04",
//     title: "International Trade & Indenting",
//     slug: "international-trade-indenting",
//     description:
//       "International sourcing, trade coordination, and indenting solutions designed around industrial business requirements.",
//     image:
//       "https://images.unsplash.com/photo-1494412574643-ff11b0a1f676?auto=format&fit=crop&w=1200&q=85",
//     features: [
//       "Cross-border sourcing",
//       "Trade coordination",
//       "Market-to-buyer connectivity",
//     ],
//   },
// ];

// const strengths = [
//   {
//     title: "Reliable Sourcing",
//     description:
//       "Established international sourcing relationships help connect suitable materials with industrial requirements.",
//     icon: Globe2,
//   },
//   {
//     title: "Quality Focus",
//     description:
//       "A consistent focus on material requirements, trade coordination, and dependable business relationships.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Professional Service",
//     description:
//       "Clear communication and practical coordination from sourcing discussions through commercial requirements.",
//     icon: Sparkles,
//   },
//   {
//     title: "International Network",
//     description:
//       "Supplier networks across the UK, Europe, Africa, South America, Canada, and the USA.",
//     icon: Truck,
//   },
//   {
//     title: "Long-Term Relationships",
//     description:
//       "A customer-centered approach built around professionalism, reliability, and sustainable trade relationships.",
//     icon: CheckCircle2,
//   },
//   {
//     title: "Market Connectivity",
//     description:
//       "Connecting international sourcing opportunities with buyers and industrial markets across Pakistan.",
//     icon: ArrowRight,
//   },
// ];

// const regions = ["South America", "Europe", "Africa", "UK", "Canada", "USA"];

// function useReveal<T extends HTMLElement>(threshold = 0.12) {
//   const ref = useRef<T | null>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     if (
//       typeof window !== "undefined" &&
//       !("IntersectionObserver" in window)
//     ) {
//       setVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold, rootMargin: "0px 0px -60px 0px" }
//     );

//     observer.observe(element);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return {
//     ref,
//     className: `transition-all duration-700 ease-out ${
//       visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//     }`,
//   };
// }

// function SectionHeading({
//   eyebrow,
//   title,
//   description,
//   centered = false,
// }: {
//   eyebrow: string;
//   title: string;
//   description?: string;
//   centered?: boolean;
// }) {
//   return (
//     <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
//       <div
//         className={`mb-5 flex items-center gap-3 ${
//           centered ? "justify-center" : ""
//         }`}
//       >
//         <span className="h-[2px] w-10 bg-[#f58220]" />
//         <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f58220]">
//           {eyebrow}
//         </p>
//         {centered && <span className="h-[2px] w-10 bg-[#f58220]" />}
//       </div>

//       <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-[#174d3c] sm:text-5xl">
//         {title}
//       </h2>

//       {description && (
//         <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// export default function Home() {
//   const [heroImage, setHeroImage] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isCarouselPaused, setIsCarouselPaused] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const carouselTrackRef = useRef<HTMLDivElement | null>(null);

//   const aboutReveal = useReveal<HTMLDivElement>();
//   const productReveal = useReveal<HTMLDivElement>();
//   const globalReveal = useReveal<HTMLDivElement>();
//   const whyReveal = useReveal<HTMLDivElement>();
//   const processReveal = useReveal<HTMLDivElement>();
//   const contactReveal = useReveal<HTMLDivElement>();

//   useEffect(() => {
//     const timer = window.setInterval(() => {
//       if (!isCarouselPaused) {
//         setHeroImage((current) => (current + 1) % heroImages.length);
//       }
//     }, 6500);

//     return () => window.clearInterval(timer);
//   }, [isCarouselPaused]);

//   const scrollCarousel = (direction: "prev" | "next") => {
//     const track = carouselTrackRef.current;
//     if (!track) return;

//     const card = track.querySelector<HTMLElement>("[data-carousel-card]");
//     const distance = card ? card.offsetWidth + 24 : 380;

//     track.scrollBy({
//       left: direction === "next" ? distance : -distance,
//       behavior: "smooth",
//     });
//   };

//   // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();
//   //   setSubmitted(true);
//   // };
//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   setSubmitted(true);
// };

//   const navItems = [
//     ["Home", "#home"],
//     ["About Us", "#about"],
//     ["Products", "#products"],
//     ["Global Reach", "#global"],
//     ["Why Choose Us", "#why-us"],
//     ["Contact", "#contact"],
//   ];

//   return (
//     <main className="min-h-screen bg-white text-slate-900 selection:bg-[#f58220] selection:text-white">
//       {/* ================= HEADER ================= */}
//       <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0d0c]/90 backdrop-blur-xl">
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
//           <a
//             href="#home"
//             className="group flex items-center gap-3"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <span className="flex h-10 w-10 items-center justify-center border border-[#f58220]/50 bg-[#174d3c] text-sm font-black text-[#f58220] transition-transform duration-300 group-hover:rotate-3">
//               MH
//             </span>
//             <span className="hidden sm:block">
//               <span className="block text-sm font-black tracking-wide text-white">
//                 M. HOLLYFEET & SONS
//               </span>
//               <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
//                 Industrial Trading
//               </span>
//             </span>
//           </a>

//           <nav className="hidden items-center gap-7 lg:flex">
//             {navItems.map(([label, href]) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="relative py-2 text-sm font-semibold text-white/75 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#f58220] after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {label}
//               </a>
//             ))}
//           </nav>

//           <a
//             href="#contact"
//             className="hidden items-center gap-2 bg-[#f58220] px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e87312] hover:shadow-lg hover:shadow-[#f58220]/20 sm:flex"
//           >
//             Get in Touch
//             <ArrowRight size={16} />
//           </a>

//           <button
//             type="button"
//             aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={mobileMenuOpen}
//             onClick={() => setMobileMenuOpen((open) => !open)}
//             className="flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
//           >
//             {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>

//         <div
//           className={`overflow-hidden border-t border-white/10 bg-[#0b0d0c] transition-all duration-300 lg:hidden ${
//             mobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
//             {navItems.map(([label, href]) => (
//               <a
//                 key={href}
//                 href={href}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="border-b border-white/5 py-4 text-sm font-bold text-white/80 transition hover:text-[#f58220]"
//               >
//                 {label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* ================= HERO ================= */}
//       <section
//         id="home"
//         className="relative min-h-[760px] overflow-hidden bg-black pt-20 lg:min-h-screen"
//       >
//         <div className="absolute inset-0">
//           {heroImages.map((image, index) => (
//             <div
//               key={image}
//               className={`absolute inset-0 bg-cover bg-center transition-all duration-[1400ms] ease-out ${
//                 heroImage === index
//                   ? "scale-105 opacity-100"
//                   : "scale-100 opacity-0"
//               }`}
//               style={{ backgroundImage: `url("${image}")` }}
//               aria-hidden="true"
//             />
//           ))}
//         </div>

//         <div className="absolute inset-0 bg-black/55" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
//         <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent" />

//         <div className="pointer-events-none absolute -right-40 top-24 h-[480px] w-[480px] rounded-full border border-[#f58220]/20 animate-[spin_30s_linear_infinite]" />
//         <div className="pointer-events-none absolute -right-10 top-40 h-[350px] w-[350px] rounded-full border border-[#f58220]/15" />
//         <div className="pointer-events-none absolute bottom-20 left-10 h-24 w-24 rounded-full border border-white/10" />

//         <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-24 lg:px-8">
//           <div className="max-w-4xl">
//             <div className="mb-7 inline-flex items-center gap-2 border border-[#f58220]/50 bg-black/35 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#ff9d48] backdrop-blur-sm animate-[fadeInUp_700ms_ease-out_both]">
//               <span className="h-2 w-2 animate-pulse bg-[#f58220]" />
//               Trusted Industrial Trading Partner
//             </div>

//             <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-[84px] animate-[fadeInUp_850ms_120ms_ease-out_both]">
//               Moving Industry.
//               <span className="block text-[#f58220]">
//                 Connecting Markets.
//               </span>
//               <span className="block">Building Trust.</span>
//             </h1>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 drop-shadow-lg sm:text-lg animate-[fadeInUp_850ms_220ms_ease-out_both]">
//               M. HOLLYFEET &amp; SONS specializes in Iron &amp; Steel Scrap,
//               Ferro Alloys, Skull Breaker (JAM), and International Trade and
//               Indenting solutions.
//             </p>

//             <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-[fadeInUp_850ms_320ms_ease-out_both]">
//               <a
//                 href="#products"
//                 className="group inline-flex items-center justify-center gap-3 bg-[#f58220] px-7 py-4 font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#e87312] hover:shadow-2xl hover:shadow-[#f58220]/20"
//               >
//                 Explore Our Products
//                 <ArrowRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </a>

//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center gap-3 border border-white/40 bg-white/5 px-7 py-4 font-black text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
//               >
//                 Contact Us
//               </a>
//             </div>

//             <div className="mt-12 grid max-w-2xl grid-cols-3 border-t border-white/20 pt-7 animate-[fadeInUp_850ms_420ms_ease-out_both]">
//               {[
//                 ["2007", "Founded"],
//                 ["6+", "Sourcing Regions"],
//                 ["Pakistan", "Buyer Network"],
//               ].map(([value, label]) => (
//                 <div key={label} className="border-r border-white/10 px-4 first:pl-0 last:border-0">
//                   <p className="text-2xl font-black text-[#f58220] sm:text-3xl">
//                     {value}
//                   </p>
//                   <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/65">
//                     {label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <a
//           href="#about"
//           aria-label="Scroll to company overview"
//           className="absolute bottom-7 left-5 z-20 hidden items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 transition hover:text-white sm:flex lg:left-8"
//         >
//           <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
//             <ArrowDown size={14} className="animate-bounce" />
//           </span>
//           Explore
//         </a>

//         <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setHeroImage(index)}
//               aria-label={`Show hero image ${index + 1}`}
//               className={`h-1.5 rounded-full transition-all duration-500 ${
//                 heroImage === index
//                   ? "w-10 bg-[#f58220]"
//                   : "w-2 bg-white/45 hover:bg-white"
//               }`}
//             />
//           ))}
//         </div>

//         <div className="absolute bottom-7 right-5 z-20 hidden text-xs font-black tracking-[0.2em] text-white/60 sm:block lg:right-8">
//           0{heroImage + 1} / 0{heroImages.length}
//         </div>
//       </section>

//       {/* ================= TRUST BAR ================= */}
//       <section className="border-y border-slate-200 bg-slate-50">
//         <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
//           {[
//             "Reliable Sourcing",
//             "Global Trading",
//             "Quality Focused",
//             "Professional Service",
//           ].map((item, index) => (
//             <div
//               key={item}
//               className={`flex items-center justify-center gap-3 px-5 py-6 ${
//                 index > 1 ? "border-t md:border-t-0" : ""
//               } ${index % 2 === 1 ? "border-l" : ""} border-slate-200`}
//             >
//               <CheckCircle2 size={18} className="shrink-0 text-[#f58220]" />
//               <span className="text-xs font-black uppercase tracking-wide text-[#174d3c] sm:text-sm">
//                 {item}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section id="about" className="bg-white py-24 lg:py-32">
//         <div
//           ref={aboutReveal.ref}
//           className={`mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8 ${aboutReveal.className}`}
//         >
//           <div className="relative">
//             <div className="group relative overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=88"
//                 alt="Industrial logistics and operations"
//                 className="h-[440px] w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-[520px]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#174d3c]/55 via-transparent to-transparent" />
//               <div className="absolute left-5 top-5 border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
//                 Since 2007
//               </div>
//             </div>

//             <div className="absolute -bottom-8 -right-2 max-w-xs bg-[#174d3c] p-7 text-white shadow-2xl sm:-right-8">
//               <Globe2 className="mb-4 text-[#f58220]" size={35} />
//               <h3 className="text-xl font-black">
//                 Connecting Local &amp; Global Markets
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-300">
//                 Building strong trade relationships through professionalism,
//                 reliability, and market expertise.
//               </p>
//             </div>
//           </div>

//           <div>
//             <SectionHeading
//               eyebrow="About Our Company"
//               title="Built on Trust. Driven by Trade."
//               description="Founded in 2007, M. HOLLYFEET & SONS (Pvt.) Ltd. is a Lahore-based trading company specializing in ferrous and non-ferrous scrap. We source materials from established markets across the UK, Europe, Africa, South America, Canada, and the USA."
//             />

//             <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
//               We supply large volumes of high-quality materials to buyers
//               across Pakistan, with a strong focus on reliable sourcing,
//               consistent quality, professional trade coordination, and
//               long-term business relationships.
//             </p>

//             <div className="mt-9 grid gap-4 sm:grid-cols-2">
//               {[
//                 "Reliable Business Relationships",
//                 "Professional Trade Handling",
//                 "International Market Focus",
//                 "Customer-Centered Approach",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f58220]/10 text-[#f58220]">
//                     <Check size={15} strokeWidth={3} />
//                   </span>
//                   <span className="text-sm font-bold text-slate-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <a
//               href="#contact"
//               className="group mt-10 inline-flex items-center gap-3 font-black text-[#174d3c] transition-colors hover:text-[#f58220]"
//             >
//               Start a Conversation
//               <ArrowRight
//                 size={19}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ================= BUSINESS PROCESS ================= */}
//       <section className="border-y border-slate-200 bg-[#f7f8f7] py-20 lg:py-24">
//         <div
//           ref={processReveal.ref}
//           className={`mx-auto max-w-7xl px-5 lg:px-8 ${processReveal.className}`}
//         >
//           <SectionHeading
//             centered
//             eyebrow="How We Work"
//             title="From Requirement to Reliable Trade"
//             description="A straightforward approach focused on understanding requirements, connecting sourcing opportunities, and coordinating professional trade relationships."
//           />

//           <div className="mt-14 grid gap-5 md:grid-cols-3">
//             {[
//               {
//                 number: "01",
//                 title: "Understand",
//                 text: "We begin by understanding the material, quantity, market, and commercial requirements.",
//               },
//               {
//                 number: "02",
//                 title: "Source",
//                 text: "We connect requirements with established international sourcing relationships and market opportunities.",
//               },
//               {
//                 number: "03",
//                 title: "Coordinate",
//                 text: "We support professional trade coordination with a focus on communication, reliability, and long-term relationships.",
//               },
//             ].map((step) => (
//               <div
//                 key={step.number}
//                 className="group relative border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#f58220]/50 hover:shadow-xl"
//               >
//                 <span className="text-5xl font-black text-[#174d3c]/10 transition-colors duration-500 group-hover:text-[#f58220]/20">
//                   {step.number}
//                 </span>
//                 <h3 className="mt-5 text-xl font-black text-[#174d3c]">
//                   {step.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-7 text-slate-600">
//                   {step.text}
//                 </p>
//                 <div className="mt-6 h-[2px] w-10 bg-[#f58220] transition-all duration-500 group-hover:w-20" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= PRODUCTS ================= */}
//       <section id="products" className="bg-slate-50 py-24 lg:py-32">
//         <div
//           ref={productReveal.ref}
//           className={`mx-auto max-w-7xl px-5 lg:px-8 ${productReveal.className}`}
//         >
//           <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
//             <SectionHeading
//               eyebrow="What We Deal In"
//               title="Our Products & Services"
//               description="Professional trading and sourcing solutions designed to meet the evolving requirements of industrial and international markets."
//             />

//             <div className="flex shrink-0 gap-2">
//               <button
//                 type="button"
//                 onClick={() => scrollCarousel("prev")}
//                 aria-label="Previous products"
//                 className="flex h-11 w-11 items-center justify-center border border-slate-300 bg-white text-[#174d3c] transition duration-300 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => scrollCarousel("next")}
//                 aria-label="Next products"
//                 className="flex h-11 w-11 items-center justify-center border border-slate-300 bg-white text-[#174d3c] transition duration-300 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>

//           <div
//             className="relative mt-14"
//             onMouseEnter={() => setIsCarouselPaused(true)}
//             onMouseLeave={() => setIsCarouselPaused(false)}
//           >
//             <div
//               ref={carouselTrackRef}
//               className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5"
//               style={{
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               {products.map((product) => (
//                 <Link
//                   key={product.slug}
//                   href={`/products/${product.slug}`}
//                   data-carousel-card
//                   aria-label={`Learn more about ${product.title}`}
//                   className="group relative flex min-h-[545px] w-[88%] shrink-0 snap-start flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#f58220]/60 hover:shadow-2xl sm:w-[48%] lg:w-[calc(33.333%-16px)]"
//                 >
//                   <div className="relative h-60 w-full shrink-0 overflow-hidden bg-slate-100">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
//                     <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-white text-sm font-black text-[#174d3c] shadow-lg">
//                       {product.number}
//                     </div>
//                     <span className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
//                       Industrial Trading
//                     </span>
//                   </div>

//                   <div className="flex flex-1 flex-col p-6">
//                     <h3 className="text-xl font-black leading-tight text-[#174d3c] lg:text-2xl">
//                       {product.title}
//                     </h3>

//                     <p className="mt-4 text-sm leading-6 text-slate-600">
//                       {product.description}
//                     </p>

//                     <ul className="mt-5 space-y-2.5">
//                       {product.features.map((feature) => (
//                         <li
//                           key={feature}
//                           className="flex items-start gap-3 text-sm leading-5 text-slate-600"
//                         >
//                           <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f58220]" />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     <div className="mt-auto pt-7">
//                       <span className="inline-flex items-center gap-2 text-sm font-black text-[#f58220]">
//                         Learn More
//                         <ArrowRight
//                           size={17}
//                           className="transition-transform duration-300 group-hover:translate-x-1"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           div::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//       </section>

//       {/* ================= GLOBAL REACH ================= */}
//       <section
//         id="global"
//         className="relative overflow-hidden bg-[#174d3c] py-24 lg:py-32"
//       >
//         <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#f58220]/10" />
//         <div className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full border border-[#f58220]/10" />
//         <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full border border-white/5" />

//         <div
//           ref={globalReveal.ref}
//           className={`relative mx-auto max-w-7xl px-5 lg:px-8 ${globalReveal.className}`}
//         >
//           <div className="mx-auto mb-14 max-w-4xl text-center">
//             <div className="mb-5 flex items-center justify-center gap-3">
//               <span className="h-[2px] w-10 bg-[#f58220]" />
//               <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f58220]">
//                 International Trading
//               </p>
//               <span className="h-[2px] w-10 bg-[#f58220]" />
//             </div>

//             <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
//               Global Reach
//             </h2>

//             <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
//               Backed by established supplier networks across the UK, Europe,
//               Africa, South America, Canada, and the USA, M. HOLLYFEET &amp;
//               SONS connects reliable international sourcing with buyers across
//               Pakistan.
//             </p>
//           </div>

//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {regions.map((region, index) => (
//               <div
//                 key={region}
//                 className="group flex min-h-[82px] items-center gap-4 border border-white/10 bg-[#123d30] px-6 py-5 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#f58220]/60 hover:bg-[#0f3328] hover:shadow-2xl"
//                 style={{ transitionDelay: `${index * 50}ms` }}
//               >
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f58220]/30 bg-[#f58220]/10">
//                   <Globe2
//                     size={21}
//                     className="text-[#f58220] transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </span>
//                 <span className="text-lg font-black text-white sm:text-xl">
//                   {region}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-center">
//             <span className="h-px flex-1 bg-white/10" />
//             <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
//               Connecting Markets • Building Long-Term Trade Relationships
//             </p>
//             <span className="h-px flex-1 bg-white/10" />
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section id="why-us" className="bg-white py-24 lg:py-32">
//         <div
//           ref={whyReveal.ref}
//           className={`mx-auto max-w-7xl px-5 lg:px-8 ${whyReveal.className}`}
//         >
//           <div className="mb-16 max-w-3xl">
//             <SectionHeading
//               eyebrow="Why M. HOLLYFEET & SONS"
//               title="A Reliable Partner for Your Business."
//               description="Our approach combines international sourcing, quality focus, professional trade handling, and long-term relationship building."
//             />
//           </div>

//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {strengths.map((strength, index) => {
//               const Icon = strength.icon;

//               return (
//                 <div
//                   key={strength.title}
//                   className="group border border-slate-200 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#f58220]/50 hover:shadow-xl"
//                   style={{ transitionDelay: `${index * 60}ms` }}
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center bg-[#f58220]/10 text-[#f58220] transition-all duration-300 group-hover:bg-[#f58220] group-hover:text-white">
//                     <Icon size={23} />
//                   </div>

//                   <h3 className="mt-6 text-xl font-black text-[#174d3c]">
//                     {strength.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {strength.description}
//                   </p>

//                   <div className="mt-6 h-[2px] w-8 bg-[#f58220] transition-all duration-500 group-hover:w-16" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="relative overflow-hidden bg-[#f58220] py-20">
//         <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/15" />
//         <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full border border-white/10" />

//         <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
//           <div>
//             <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">
//               Let&apos;s Work Together
//             </p>
//             <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
//               Looking for a Reliable Trading Partner?
//             </h2>
//             <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
//               Tell us about your material or sourcing requirement and let&apos;s
//               discuss how we can support your business.
//             </p>
//           </div>

//           <a
//             href="#contact"
//             className="group flex shrink-0 items-center gap-3 bg-[#174d3c] px-7 py-4 font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#123d30] hover:shadow-2xl"
//           >
//             Contact Our Team
//             <ArrowRight
//               size={19}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </a>
//         </div>
//       </section>

//       {/* ================= CONTACT ================= */}
//       <section id="contact" className="bg-slate-50 py-24 lg:py-32">
//         <div
//           ref={contactReveal.ref}
//           className={`mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8 ${contactReveal.className}`}
//         >
//           <div>
//             <SectionHeading
//               eyebrow="Contact Us"
//               title="Let's Start a Conversation."
//               description="Whether you are looking for sourcing, trading, industrial materials, or international indenting solutions, our team is ready to discuss your business requirements."
//             />

//             <div className="mt-10 space-y-7">
//               <div className="flex gap-5">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#174d3c] text-[#f58220]">
//                   <MapPin size={22} />
//                 </div>
//                 <div>
//                   <h4 className="font-black text-[#174d3c]">Head Office</h4>
//                   <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
//                     181/C, Block # B, Lane # 6, P.A.F. Colony, Zarar Shaheed
//                     Road, Lahore Cantt.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-5">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#174d3c] text-[#f58220]">
//                   <Phone size={21} />
//                 </div>
//                 <div>
//                   <h4 className="font-black text-[#174d3c]">Phone</h4>
//                   <a
//                     href="tel:+92427600454"
//                     className="mt-2 block text-sm text-slate-600 transition hover:text-[#f58220]"
//                   >
//                     +92-42-7600454
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-5">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#174d3c] text-[#f58220]">
//                   <Mail size={21} />
//                 </div>
//                 <div>
//                   <h4 className="font-black text-[#174d3c]">Email</h4>
//                   <a
//                     href="mailto:mholyfeet1@yahoo.com"
//                     className="mt-2 block text-sm text-slate-600 transition hover:text-[#f58220]"
//                   >
//                     mholyfeet1@yahoo.com
//                   </a>
//                   <a
//                     href="mailto:abdullahimtiaz40@gmail.com"
//                     className="mt-1 block text-sm text-slate-600 transition hover:text-[#f58220]"
//                   >
//                     abdullahimtiaz40@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10 border-l-2 border-[#f58220] bg-white p-5">
//               <p className="text-xs font-black uppercase tracking-[0.16em] text-[#174d3c]">
//                 Business Focus
//               </p>
//               <p className="mt-2 text-sm leading-7 text-slate-600">
//                 Ferrous &amp; non-ferrous scrap • Ferro alloys • Skull Breaker
//                 (JAM) • International Trade &amp; Indenting
//               </p>
//             </div>
//           </div>

//           <div className="border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
//             <div className="flex items-start justify-between gap-5">
//               <div>
//                 <h3 className="text-2xl font-black text-[#174d3c]">
//                   Send Us a Message
//                 </h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Fill in your details and we will get back to you.
//                 </p>
//               </div>
//               <div className="hidden h-11 w-11 items-center justify-center bg-[#f58220]/10 text-[#f58220] sm:flex">
//                 <Send size={19} />
//               </div>
//             </div>

//             {submitted ? (
//               <div className="mt-8 border border-[#174d3c]/15 bg-[#174d3c]/5 p-7">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-white">
//                   <Check size={22} strokeWidth={3} />
//                 </div>
//                 <h4 className="mt-5 text-xl font-black text-[#174d3c]">
//                   Thank you for contacting us.
//                 </h4>
//                 <p className="mt-2 text-sm leading-7 text-slate-600">
//                   Your message has been prepared successfully. Connect with
//                   the office using the contact details provided on this page
//                   for the next step.
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => setSubmitted(false)}
//                   className="mt-5 text-sm font-black text-[#f58220] hover:underline"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="full-name"
//                       className="mb-2 block text-sm font-bold text-slate-700"
//                     >
//                       Full Name
//                     </label>
//                     <input
//                       id="full-name"
//                       name="name"
//                       required
//                       type="text"
//                       placeholder="Your name"
//                       className="w-full border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="company"
//                       className="mb-2 block text-sm font-bold text-slate-700"
//                     >
//                       Company
//                     </label>
//                     <input
//                       id="company"
//                       name="company"
//                       type="text"
//                       placeholder="Company name"
//                       className="w-full border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-bold text-slate-700"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     required
//                     type="email"
//                     placeholder="you@company.com"
//                     className="w-full border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="requirement"
//                     className="mb-2 block text-sm font-bold text-slate-700"
//                   >
//                     Business Requirement
//                   </label>
//                   <select
//                     id="requirement"
//                     name="requirement"
//                     required
//                     defaultValue=""
//                     className="w-full border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                   >
//                     <option value="" disabled>
//                       Select an option
//                     </option>
//                     <option>Iron &amp; Steel Scrap</option>
//                     <option>Ferro Alloys</option>
//                     <option>Skull Breaker (JAM)</option>
//                     <option>International Trade &amp; Indenting</option>
//                     <option>Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="mb-2 block text-sm font-bold text-slate-700"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={5}
//                     placeholder="Tell us about your requirement..."
//                     className="w-full resize-none border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="group flex w-full items-center justify-center gap-3 bg-[#174d3c] px-6 py-4 font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123d30] hover:shadow-xl"
//                 >
//                   Send Message
//                   <Send
//                     size={18}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </button>

//                 <p className="text-center text-[11px] leading-5 text-slate-400">
//                   This front-end form currently provides an on-page submission
//                   state. Connect it to your preferred email/API endpoint before
//                   using it for production lead delivery.
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-[#0b0d0c] text-white">
//         <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
//           <div>
//             <div className="flex items-center gap-3">
//               <span className="flex h-10 w-10 items-center justify-center border border-[#f58220]/50 bg-[#174d3c] text-sm font-black text-[#f58220]">
//                 MH
//               </span>
//               <div>
//                 <p className="text-sm font-black">M. HOLLYFEET &amp; SONS</p>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
//                   Industrial Trading
//                 </p>
//               </div>
//             </div>

//             <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
//               Lahore-based trading company specializing in ferrous and
//               non-ferrous scrap, ferro alloys, Skull Breaker (JAM), and
//               international trade and indenting solutions.
//             </p>
//           </div>

//           <div>
//             <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
//               Navigation
//             </p>
//             <div className="mt-5 grid gap-3">
//               {navItems.map(([label, href]) => (
//                 <a
//                   key={href}
//                   href={href}
//                   className="w-fit text-sm text-white/55 transition hover:text-white"
//                 >
//                   {label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
//               Contact
//             </p>
//             <div className="mt-5 space-y-4 text-sm text-white/55">
//               <a
//                 href="tel:+92427600454"
//                 className="flex items-start gap-3 transition hover:text-white"
//               >
//                 <Phone size={17} className="mt-0.5 shrink-0 text-[#f58220]" />
//                 +92-42-7600454
//               </a>
//               <a
//                 href="mailto:mholyfeet1@yahoo.com"
//                 className="flex items-start gap-3 transition hover:text-white"
//               >
//                 <Mail size={17} className="mt-0.5 shrink-0 text-[#f58220]" />
//                 mholyfeet1@yahoo.com
//               </a>
//               <div className="flex items-start gap-3">
//                 <MapPin size={17} className="mt-0.5 shrink-0 text-[#f58220]" />
//                 <span>
//                   181/C, Block # B, Lane # 6, P.A.F. Colony,
//                   <br />
//                   Zarar Shaheed Road, Lahore Cantt.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/10">
//           <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
//             <p>
//               © {new Date().getFullYear()} M. HOLLYFEET &amp; SONS. All rights
//               reserved.
//             </p>
//             <p>Connecting Markets • Building Trust</p>
//           </div>
//         </div>
//       </footer>

//       <style jsx global>{`
//         html {
//           scroll-behavior: smooth;
//         }

//         body {
//           overflow-x: hidden;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           html {
//             scroll-behavior: auto;
//           }

//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }



"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=88",
  "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=2200&q=88",
  "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=2200&q=88",
];

type Product = {
  number: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
};

const products: Product[] = [
  {
    number: "01",
    title: "Iron & Steel Scrap",
    slug: "iron-steel-scrap",
    description:
      "Ferrous scrap sourcing and trading solutions for industrial buyers, with a focus on reliable supply and consistent trade coordination.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    features: [
      "International sourcing network",
      "Industrial-grade material focus",
      "Professional trade coordination",
    ],
  },
  {
    number: "02",
    title: "Ferro Alloys",
    slug: "ferro-alloys",
    description:
      "Sourcing and trading support for ferro alloy requirements across industrial and manufacturing markets.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
    features: [
      "International supplier relationships",
      "Requirement-focused sourcing",
      "Long-term trading approach",
    ],
  },
  {
    number: "03",
    title: "Skull Breaker (JAM)",
    slug: "skull-breaker-jam",
    description:
      "Specialized trading support for Skull Breaker (JAM), connecting sourcing opportunities with buyers across Pakistan.",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Established sourcing relationships",
      "Professional coordination",
      "Pakistan-wide buyer focus",
    ],
  },
  {
    number: "04",
    title: "International Trade & Indenting",
    slug: "international-trade-indenting",
    description:
      "International sourcing, trade coordination, and indenting solutions designed around industrial business requirements.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a1f676?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Cross-border sourcing",
      "Trade coordination",
      "Market-to-buyer connectivity",
    ],
  },
];

const strengths = [
  {
    title: "Reliable Sourcing",
    description:
      "Established international sourcing relationships help connect suitable materials with industrial requirements.",
    icon: Globe2,
  },
  {
    title: "Quality Focus",
    description:
      "A consistent focus on material requirements, trade coordination, and dependable business relationships.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Service",
    description:
      "Clear communication and practical coordination from sourcing discussions through commercial requirements.",
    icon: Sparkles,
  },
  {
    title: "International Network",
    description:
      "Supplier networks across the UK, Europe, Africa, South America, Canada, and the USA.",
    icon: Truck,
  },
  {
    title: "Long-Term Relationships",
    description:
      "A customer-centered approach built around professionalism, reliability, and sustainable trade relationships.",
    icon: CheckCircle2,
  },
  {
    title: "Market Connectivity",
    description:
      "Connecting international sourcing opportunities with buyers and industrial markets across Pakistan.",
    icon: ArrowRight,
  },
];

const regions = ["South America", "Europe", "Africa", "UK", "Canada", "USA"];

const globalCss = `
html { scroll-behavior: smooth; }
body { overflow-x: hidden; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      typeof window !== "undefined" &&
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return {
    ref,
    className: `transition-all duration-700 ease-out ${
      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`,
  };
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`mb-5 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-[2px] w-10 bg-[#f58220]" />
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f58220]">
          {eyebrow}
        </p>
        {centered && <span className="h-[2px] w-10 bg-[#f58220]" />}
      </div>

      <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-[#174d3c] sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [heroImage, setHeroImage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const carouselTrackRef = useRef<HTMLDivElement | null>(null);

  const aboutReveal = useReveal<HTMLDivElement>();
  const productReveal = useReveal<HTMLDivElement>();
  const globalReveal = useReveal<HTMLDivElement>();
  const whyReveal = useReveal<HTMLDivElement>();
  const processReveal = useReveal<HTMLDivElement>();
  const contactReveal = useReveal<HTMLDivElement>();

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!isCarouselPaused) {
        setHeroImage((current) => (current + 1) % heroImages.length);
      }
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isCarouselPaused]);

  const scrollCarousel = (direction: "prev" | "next") => {
    const track = carouselTrackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const distance = card ? card.offsetWidth + 24 : 380;

    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const navItems = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Products", "#products"],
    ["Global Reach", "#global"],
    ["Why Choose Us", "#why-us"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#f58220] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: globalCss }} />

      {/* ================= HEADER ================= */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0d0c]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center border border-[#f58220]/50 bg-[#174d3c] text-sm font-black text-[#f58220] transition-transform duration-300 group-hover:rotate-3">
              MH
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-black tracking-wide text-white">
                M. HOLLYFEET & SONS
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Industrial Trading
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative py-2 text-sm font-semibold text-white/75 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#f58220] after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 bg-[#f58220] px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e87312] hover:shadow-lg hover:shadow-[#f58220]/20 sm:flex"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-[#0b0d0c] transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/5 py-4 text-sm font-bold text-white/80 transition hover:text-[#f58220]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-[760px] overflow-hidden bg-black pt-20 lg:min-h-screen"
      >
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[1400ms] ease-out ${
                heroImage === index
                  ? "scale-105 opacity-100"
                  : "scale-100 opacity-0"
              }`}
              style={{ backgroundImage: `url("${image}")` }}
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="pointer-events-none absolute -right-40 top-24 h-[480px] w-[480px] rounded-full border border-[#f58220]/20 animate-[spin_30s_linear_infinite]" />
        <div className="pointer-events-none absolute -right-10 top-40 h-[350px] w-[350px] rounded-full border border-[#f58220]/15" />
        <div className="pointer-events-none absolute bottom-20 left-10 h-24 w-24 rounded-full border border-white/10" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-[#f58220]/50 bg-black/35 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#ff9d48] backdrop-blur-sm animate-[fadeInUp_700ms_ease-out_both]">
              <span className="h-2 w-2 animate-pulse bg-[#f58220]" />
              Trusted Industrial Trading Partner
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-[84px] animate-[fadeInUp_850ms_120ms_ease-out_both]">
              Moving Industry.
              <span className="block text-[#f58220]">
                Connecting Markets.
              </span>
              <span className="block">Building Trust.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 drop-shadow-lg sm:text-lg animate-[fadeInUp_850ms_220ms_ease-out_both]">
              M. HOLLYFEET &amp; SONS specializes in Iron &amp; Steel Scrap,
              Ferro Alloys, Skull Breaker (JAM), and International Trade and
              Indenting solutions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-[fadeInUp_850ms_320ms_ease-out_both]">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-3 bg-[#f58220] px-7 py-4 font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#e87312] hover:shadow-2xl hover:shadow-[#f58220]/20"
              >
                Explore Our Products
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border border-white/40 bg-white/5 px-7 py-4 font-black text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border-t border-white/20 pt-7 animate-[fadeInUp_850ms_420ms_ease-out_both]">
              {[
                ["2007", "Founded"],
                ["6+", "Sourcing Regions"],
                ["Pakistan", "Buyer Network"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-white/10 px-4 first:pl-0 last:border-0"
                >
                  <p className="text-2xl font-black text-[#f58220] sm:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/65">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to company overview"
          className="absolute bottom-7 left-5 z-20 hidden items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 transition hover:text-white sm:flex lg:left-8"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
            <ArrowDown size={14} className="animate-bounce" />
          </span>
          Explore
        </a>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setHeroImage(index)}
              aria-label={`Show hero image ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                heroImage === index
                  ? "w-10 bg-[#f58220]"
                  : "w-2 bg-white/45 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-7 right-5 z-20 hidden text-xs font-black tracking-[0.2em] text-white/60 sm:block lg:right-8">
          0{heroImage + 1} / 0{heroImages.length}
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            "Reliable Sourcing",
            "Global Trading",
            "Quality Focused",
            "Professional Service",
          ].map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-center gap-3 px-5 py-6 ${
                index > 1 ? "border-t md:border-t-0" : ""
              } ${index % 2 === 1 ? "border-l" : ""} border-slate-200`}
            >
              <CheckCircle2 size={18} className="shrink-0 text-[#f58220]" />
              <span className="text-xs font-black uppercase tracking-wide text-[#174d3c] sm:text-sm">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div
          ref={aboutReveal.ref}
          className={`mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8 ${aboutReveal.className}`}
        >
          <div className="relative">
            <div className="group relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=88"
                alt="Industrial logistics and operations"
                className="h-[440px] w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#174d3c]/55 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                Since 2007
              </div>
            </div>

            <div className="absolute -bottom-8 -right-2 max-w-xs bg-[#174d3c] p-7 text-white shadow-2xl sm:-right-8">
              <Globe2 className="mb-4 text-[#f58220]" size={35} />
              <h3 className="text-xl font-black">
                Connecting Local &amp; Global Markets
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Building strong trade relationships through professionalism,
                reliability, and market expertise.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Our Company"
              title="Built on Trust. Driven by Trade."
              description="Founded in 2007, M. HOLLYFEET & SONS (Pvt.) Ltd. is a Lahore-based trading company specializing in ferrous and non-ferrous scrap. We source materials from established markets across the UK, Europe, Africa, South America, Canada, and the USA."
            />

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              We supply large volumes of high-quality materials to buyers
              across Pakistan, with a strong focus on reliable sourcing,
              consistent quality, professional trade coordination, and
              long-term business relationships.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Reliable Business Relationships",
                "Professional Trade Handling",
                "International Market Focus",
                "Customer-Centered Approach",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f58220]/10 text-[#f58220]">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 font-black text-[#174d3c] transition-colors hover:text-[#f58220]"
            >
              Start a Conversation
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS PROCESS ================= */}
      <section className="border-y border-slate-200 bg-[#f7f8f7] py-20 lg:py-24">
        <div
          ref={processReveal.ref}
          className={`mx-auto max-w-7xl px-5 lg:px-8 ${processReveal.className}`}
        >
          <SectionHeading
            centered
            eyebrow="How We Work"
            title="From Requirement to Reliable Trade"
            description="A straightforward approach focused on understanding requirements, connecting sourcing opportunities, and coordinating professional trade relationships."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We begin by understanding the material, quantity, market, and commercial requirements.",
              },
              {
                number: "02",
                title: "Source",
                text: "We connect requirements with established international sourcing relationships and market opportunities.",
              },
              {
                number: "03",
                title: "Coordinate",
                text: "We support professional trade coordination with a focus on communication, reliability, and long-term relationships.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#f58220]/50 hover:shadow-xl"
              >
                <span className="text-5xl font-black text-[#174d3c]/10 transition-colors duration-500 group-hover:text-[#f58220]/20">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-black text-[#174d3c]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
                <div className="mt-6 h-[2px] w-10 bg-[#f58220] transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="bg-slate-50 py-24 lg:py-32">
        <div
          ref={productReveal.ref}
          className={`mx-auto max-w-7xl px-5 lg:px-8 ${productReveal.className}`}
        >
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What We Deal In"
              title="Our Products & Services"
              description="Professional trading and sourcing solutions designed to meet the evolving requirements of industrial and international markets."
            />

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("prev")}
                aria-label="Previous products"
                className="flex h-11 w-11 items-center justify-center border border-slate-300 bg-white text-[#174d3c] transition duration-300 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("next")}
                aria-label="Next products"
                className="flex h-11 w-11 items-center justify-center border border-slate-300 bg-white text-[#174d3c] transition duration-300 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            className="relative mt-14"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <div
              ref={carouselTrackRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  data-carousel-card
                  aria-label={`Learn more about ${product.title}`}
                  className="group relative flex min-h-[545px] w-[88%] shrink-0 snap-start flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#f58220]/60 hover:shadow-2xl sm:w-[48%] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="relative h-60 w-full shrink-0 overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-white text-sm font-black text-[#174d3c] shadow-lg">
                      {product.number}
                    </div>
                    <span className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      Industrial Trading
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-black leading-tight text-[#174d3c] lg:text-2xl">
                      {product.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-5 text-slate-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f58220]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <span className="inline-flex items-center gap-2 text-sm font-black text-[#f58220]">
                        Learn More
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL REACH ================= */}
      <section
        id="global"
        className="relative overflow-hidden bg-[#174d3c] py-24 lg:py-32"
      >
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#f58220]/10" />
        <div className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full border border-[#f58220]/10" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full border border-white/5" />

        <div
          ref={globalReveal.ref}
          className={`relative mx-auto max-w-7xl px-5 lg:px-8 ${globalReveal.className}`}
        >
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#f58220]" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f58220]">
                International Trading
              </p>
              <span className="h-[2px] w-10 bg-[#f58220]" />
            </div>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Global Reach
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Backed by established supplier networks across the UK, Europe,
              Africa, South America, Canada, and the USA, M. HOLLYFEET &amp;
              SONS connects reliable international sourcing with buyers across
              Pakistan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <div
                key={region}
                className="group flex min-h-[82px] items-center gap-4 border border-white/10 bg-[#123d30] px-6 py-5 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#f58220]/60 hover:bg-[#0f3328] hover:shadow-2xl"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f58220]/30 bg-[#f58220]/10">
                  <Globe2
                    size={21}
                    className="text-[#f58220] transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
                <span className="text-lg font-black text-white sm:text-xl">
                  {region}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-center">
            <span className="h-px flex-1 bg-white/10" />
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
              Connecting Markets • Building Long-Term Trade Relationships
            </p>
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section id="why-us" className="bg-white py-24 lg:py-32">
        <div
          ref={whyReveal.ref}
          className={`mx-auto max-w-7xl px-5 lg:px-8 ${whyReveal.className}`}
        >
          <div className="mb-16 max-w-3xl">
            <SectionHeading
              eyebrow="Why M. HOLLYFEET & SONS"
              title="A Reliable Partner for Your Business."
              description="Our approach combines international sourcing, quality focus, professional trade handling, and long-term relationship building."
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <div
                  key={strength.title}
                  className="group border border-slate-200 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#f58220]/50 hover:shadow-xl"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#f58220]/10 text-[#f58220] transition-all duration-300 group-hover:bg-[#f58220] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#174d3c]">
                    {strength.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {strength.description}
                  </p>

                  <div className="mt-6 h-[2px] w-8 bg-[#f58220] transition-all duration-500 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#f58220] py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/15" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">
              Let&apos;s Work Together
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Looking for a Reliable Trading Partner?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
              Tell us about your material or sourcing requirement and let&apos;s
              discuss how we can support your business.
            </p>
          </div>

          <a
            href="#contact"
            className="group flex shrink-0 items-center gap-3 bg-[#174d3c] px-7 py-4 font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#123d30] hover:shadow-2xl"
          >
            Contact Our Team
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-slate-50 py-24 lg:py-32">
        <div
          ref={contactReveal.ref}
          className={`mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8 ${contactReveal.className}`}
        >
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title="Let's Start a Conversation."
              description="Whether you are looking for sourcing, trading, industrial materials, or international indenting solutions, our team is ready to discuss your business requirements."
            />

            <div className="mt-10 space-y-7">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#174d3c] text-[#f58220]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-black text-[#174d3c]">Head Office</h4>
                  <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
                    181/C, Block # B, Lane # 6, P.A.F. Colony, Zarar Shaheed
                    Road, Lahore Cantt.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#174d3c] text-[#f58220]">
                  <Phone size={21} />
                </div>
                <div>
                  <h4 className="font-black text-[#174d3c]">Phone</h4>
                  <a
                    href="tel:+92427600454"
                    className="mt-2 block text-sm text-slate-600 transition hover:text-[#f58220]"
                  >
                    +92-42-7600454
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#174d3c] text-[#f58220]">
                  <Mail size={21} />
                </div>
                <div>
                  <h4 className="font-black text-[#174d3c]">Email</h4>
                  <a
                    href="mailto:mholyfeet1@yahoo.com"
                    className="mt-2 block text-sm text-slate-600 transition hover:text-[#f58220]"
                  >
                    mholyfeet1@yahoo.com
                  </a>
                  <a
                    href="mailto:abdullahimtiaz40@gmail.com"
                    className="mt-1 block text-sm text-slate-600 transition hover:text-[#f58220]"
                  >
                    abdullahimtiaz40@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-l-2 border-[#f58220] bg-white p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#174d3c]">
                Business Focus
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ferrous &amp; non-ferrous scrap • Ferro alloys • Skull Breaker
                (JAM) • International Trade &amp; Indenting
              </p>
            </div>
          </div>

          <div className="border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h3 className="text-2xl font-black text-[#174d3c]">
                  Send Us a Message
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in your details and we will get back to you.
                </p>
              </div>
              <div className="hidden h-11 w-11 items-center justify-center bg-[#f58220]/10 text-[#f58220] sm:flex">
                <Send size={19} />
              </div>
            </div>

            {submitted ? (
              <div className="mt-8 border border-[#174d3c]/15 bg-[#174d3c]/5 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-white">
                  <Check size={22} strokeWidth={3} />
                </div>
                <h4 className="mt-5 text-xl font-black text-[#174d3c]">
                  Thank you for contacting us.
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Your message has been prepared successfully. Connect with
                  the office using the contact details provided on this page
                  for the next step.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-black text-[#f58220] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      name="name"
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="w-full border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Business Requirement
                  </label>
                  <select
                    id="requirement"
                    name="requirement"
                    required
                    defaultValue=""
                    className="w-full border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Iron &amp; Steel Scrap</option>
                    <option>Ferro Alloys</option>
                    <option>Skull Breaker (JAM)</option>
                    <option>International Trade &amp; Indenting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="w-full resize-none border border-slate-200 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 bg-[#174d3c] px-6 py-4 font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123d30] hover:shadow-xl"
                >
                  Send Message
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-[11px] leading-5 text-slate-400">
                  This front-end form currently provides an on-page submission
                  state. Connect it to your preferred email/API endpoint before
                  using it for production lead delivery.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b0d0c] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-[#f58220]/50 bg-[#174d3c] text-sm font-black text-[#f58220]">
                MH
              </span>
              <div>
                <p className="text-sm font-black">M. HOLLYFEET &amp; SONS</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Industrial Trading
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Lahore-based trading company specializing in ferrous and
              non-ferrous scrap, ferro alloys, Skull Breaker (JAM), and
              international trade and indenting solutions.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Navigation
            </p>
            <div className="mt-5 grid gap-3">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-white/55 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f58220]">
              Contact
            </p>
            <div className="mt-5 space-y-4 text-sm text-white/55">
              <a
                href="tel:+92427600454"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={17} className="mt-0.5 shrink-0 text-[#f58220]" />
                +92-42-7600454
              </a>
              <a
                href="mailto:mholyfeet1@yahoo.com"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-[#f58220]" />
                mholyfeet1@yahoo.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#f58220]" />
                <span>
                  181/C, Block # B, Lane # 6, P.A.F. Colony,
                  <br />
                  Zarar Shaheed Road, Lahore Cantt.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>
              © {new Date().getFullYear()} M. HOLLYFEET &amp; SONS. All rights
              reserved.
            </p>
            <p>Connecting Markets • Building Trust</p>
          </div>
        </div>
      </footer>
    </main>
  );
}