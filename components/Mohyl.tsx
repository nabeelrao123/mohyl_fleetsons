// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import Link from "next/link";
// import {
//   Menu,
//   X,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle2,
//   Globe2,
//   Ship,
//   Factory,
//   Recycle,
//   Handshake,
//   ShieldCheck,
//   BadgeDollarSign,
//   Truck,
//   Mail,
//   Phone,
//   MapPin,
//   Send,
// } from "lucide-react";

// import steelturing from "../public/assets/steel tuning.jpg";
// import bluesteel from "../public/assets/blue steel.jpg";
// import shreddedsteel from "../public/assets/shredded steel.jpg";
// import rebarendcut from "../public/assets/rebarendcut.jpg";
// import railwheel from "../public/assets/rail wheel.jpg";
// import compressorscrap from "../public/assets/compressor scrap.jpeg";
// import gibundles from "../public/assets/g.i bundles.jpeg";
// import fabricationscrap from "../public/assets/fabrication scrap.jpeg";
// import loosebushling from "../public/assets/loose bushling.jpeg";
// import lmsbundle from "../public/assets/lms bundle.jpeg";
// import motorscrap from "../public/assets/motor scrap.jpeg";

// import Image from "next/image";

// export default function Newmohyl() {
//   const products = [
//     {
//       title: "Steel turning",
//       description:
//         "Reliable sourcing and trading of quality iron and steel scrap for industrial and commercial requirements.",
//       icon: Recycle,
//       number: "01",
//       slug: "Steel Turning",
//       image: steelturing,
//     },
//     {
//       title: "Rail Wheels",
//       description:
//         "Supplying essential ferro alloy materials through trusted sourcing networks and professional trade operations.",
//       icon: Factory,
//       number: "02",
//       slug: "Rail Wheel",
//       image: railwheel,
//     },
//     {
//       title: "Shredded Steel",
//       description:
//         "Professional handling and supply solutions for specialized industrial material requirements.",
//       icon: ShieldCheck,
//       number: "03",
//       image: shreddedsteel,
//     },
//     {
//       title: "Rebar-Endcut",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: rebarendcut,
//     },
//     {
//       title: "Compressor Scrap",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: compressorscrap,
//     },
//     {
//       title: "Fabrication Scrap",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: fabricationscrap,
//     },
//     {
//       title: "Loose Bushling",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: loosebushling,
//     },
//     {
//       title: "G.I Bundles",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: gibundles,
//     },
//     {
//       title: "Lms Bundle",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: lmsbundle,
//     },
//     {
//       title: "Blue Steel ",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: bluesteel,
//     },
//     {
//       title: "Loose Bushling",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: loosebushling,
//     },
//     {
//       title: "Motor Scrap",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//       image: motorscrap,
//     },
//   ] as any;

//   const strengths = [
//     {
//       title: "Industry Experience",
//       description:
//         "Professional knowledge and practical experience in industrial materials and international trade.",
//       icon: Factory,
//     },
//     {
//       title: "Global Network",
//       description:
//         "Strong relationships with suppliers, buyers, and business partners across international markets.",
//       icon: Globe2,
//     },
//     {
//       title: "Quality Assurance",
//       description:
//         "Focused on reliable sourcing and maintaining quality standards throughout the trading process.",
//       icon: ShieldCheck,
//     },
//     {
//       title: "Competitive Pricing",
//       description:
//         "Market-focused solutions designed to deliver value and competitive commercial opportunities.",
//       icon: BadgeDollarSign,
//     },
//     {
//       title: "Efficient Logistics",
//       description:
//         "Professional coordination and handling to support smooth and efficient trade operations.",
//       icon: Truck,
//     },
//     {
//       title: "Long-Term Partnerships",
//       description:
//         "Building trusted and sustainable business relationships with clients and suppliers.",
//       icon: Handshake,
//     },
//   ];

//   // ---------- Products carousel state/logic ----------
//   const carouselTrackRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number | null>(null);
//   const [isCarouselPaused, setIsCarouselPaused] = useState(false);

//   useEffect(() => {
//     const track = carouselTrackRef.current;
//     if (!track || isCarouselPaused) return;

//     const speed = 0.5;

//     const animate = () => {
//       if (!track) return;

//       track.scrollLeft += speed;

//       if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
//         track.scrollLeft = 0;
//       }

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isCarouselPaused]);

//   const scrollCarousel = useCallback((direction: "prev" | "next") => {
//     const track = carouselTrackRef.current;
//     if (!track) return;

//     const firstCard = track.querySelector<HTMLElement>(
//       "[data-carousel-card]"
//     );

//     const gap = 24;
//     const cardWidth = firstCard
//       ? firstCard.offsetWidth + gap
//       : track.clientWidth;

//     track.scrollBy({
//       left: direction === "next" ? cardWidth : -cardWidth,
//       behavior: "smooth",
//     });
//   }, []);

//   const [heroImage, setHeroImage] = useState(0);
//   const heroImages = [
//     "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef709a7bc239e868c52620b90bf8fd4e778036e47efb24ab7bb2216b4b27b15d73b7ae13cda333b1a658a4aa09dbd85477/thep-8280.jpg",
//     "https://www.glottislogistics.in/assets/img/service/breakbulk.webp",
//     "https://static.vesselfinder.net/images/media/1a02850c51068f15d87b6375183447d8.jpg",
//   ];
//   // const heroImages = [ "/images/scrap-yard.jpg", "/images/steel-export.jpg", "/images/cargo-port.jpg", ];

//   // useEffect(() => { const interval = setInterval(() => { setHeroImage((prev) => (prev + 1) % heroImages.length); }, 5000);

//   useEffect(() => { const interval = setInterval(() => { setHeroImage((prev) => (prev + 1) % heroImages.length); }, 5000); return () => clearInterval(interval); }, [heroImages.length]);



//   return (
//     //   <>
//     //     {/* ================= HERO ================= */}

//     //     <section
//     //       id="home"
//     //       className="relative min-h-screen overflow-hidden bg-[#123d30] pt-20"
//     //     >
//     //       {/* 
//     //         Premium industrial background:
//     //         Iron/steel scrap yard + heavy industrial environment.
//     //         The dark green overlay keeps the left-side typography readable.
//     //       */}
//     //       <div
//     //         className="absolute inset-0 opacity-45"
//     //         style={{
//     //           backgroundImage:
//     //             "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=90')",
//     //           backgroundSize: "cover",
//     //           backgroundPosition: "center center",
//     //         }}
//     //       />

//     //       {/* Stronger left-side brand blend for text readability */}
//     //       <div className="absolute inset-0 bg-gradient-to-r from-[#123d30] via-[#174d3c]/90 to-[#174d3c]/45" />

//     //       {/* Subtle bottom darkening for premium depth */}
//     //       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#123d30]/70 to-transparent" />

//     //       <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#f58220]/30" />
//     //       <div className="absolute -right-10 top-36 h-72 w-72 rounded-full border border-[#f58220]/20" />

//     //       <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
//     //         <div className="max-w-3xl">
//     //           <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f58220]/40 bg-[#f58220]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff9d48]">
//     //             <span className="h-2 w-2 rounded-full bg-[#f58220]" />
//     //             Trusted Industrial Trading Partner
//     //           </div>

//     //           <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
//     //             Moving Industry.
//     //             <span className="block text-[#f58220]">
//     //               Connecting Markets.
//     //             </span>
//     //             Building Trust.
//     //           </h1>

//     //           <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
//     //             M. HOLLYFEET & SONS specializes in Iron & Steel Scrap, Ferro
//     //             Alloys, Skull Breaker (JAM), and International Trade and
//     //             Indenting solutions.
//     //           </p>

//     //           <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//     //             <a
//     //               href="#products"
//     //               className="group flex items-center justify-center gap-3 rounded-lg bg-[#f58220] px-7 py-4 font-bold text-white transition hover:bg-[#e87312]"
//     //             >
//     //               Explore Our Products

//     //               <ArrowRight
//     //                 size={19}
//     //                 className="transition duration-300 group-hover:translate-x-1"
//     //               />
//     //             </a>

//     //             <a
//     //               href="#contact"
//     //               className="flex items-center justify-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#174d3c]"
//     //             >
//     //               Contact Us
//     //             </a>
//     //           </div>

//     //           <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-7">
//     //             <div>
//     //               <p className="text-2xl font-black text-[#f58220]">Global</p>
//     //               <p className="mt-1 text-xs text-slate-300">Trade Network</p>
//     //             </div>

//     //             <div>
//     //               <p className="text-2xl font-black text-[#f58220]">Quality</p>
//     //               <p className="mt-1 text-xs text-slate-300">
//     //                 Focused Solutions
//     //               </p>
//     //             </div>

//     //             <div>
//     //               <p className="text-2xl font-black text-[#f58220]">Trusted</p>
//     //               <p className="mt-1 text-xs text-slate-300">
//     //                 Business Relations
//     //               </p>
//     //             </div>
//     //           </div>
//     //         </div>

//     //         {/* Right Card */}

//     //         <div className="relative hidden lg:block">
//     //           <div className="relative ml-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
//     //             <div className="absolute -left-5 top-10 h-10 w-10 rounded-full bg-[#f58220]" />

//     //             <div className="mb-8 flex items-center justify-between">
//     //               <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f58220]">
//     //                 Our Business
//     //               </p>

//     //               <Globe2 className="text-white" />
//     //             </div>

//     //             <div className="space-y-4">
//     //               {products.map((product: any, index: any) =>
//     //                 index <= 3 ? (
//     //                   <Link
//     //                     key={product.title}
//     //                     href={`/products/${product.slug}`}
//     //                     className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#f58220]/60 hover:bg-white/10"
//     //                   >
//     //                     <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f58220] text-xs font-black text-white">
//     //                       {product.number}
//     //                     </span>

//     //                     <p className="font-semibold text-white">
//     //                       {product.title}
//     //                     </p>

//     //                     <ArrowRight
//     //                       size={17}
//     //                       className="ml-auto text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#f58220]"
//     //                     />
//     //                   </Link>
//     //                 ) : (
//     //                   <></>
//     //                 )
//     //               )}
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </section>






//     <>



//       <section
//         id="home"
//         className="relative min-h-screen overflow-hidden bg-black pt-20"
//       >
//         {/* ====================================
//       HERO BACKGROUND IMAGE SLIDER
//   ===================================== */}
//         <div className="absolute inset-0">
//           {heroImages.map((image, index) => (
//             <div
//               key={image}
//               className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${heroImage === index ? "opacity-100" : "opacity-0"
//                 }`}
//               style={{
//                 backgroundImage: `url("${image}")`,
//               }}
//             />
//           ))}
//         </div>

//         {/* ====================================
//       DARK OVERLAY
//       No green overlay. Only black transparent
//       overlay for text readability.
//   ===================================== */}
//         <div className="absolute inset-0 bg-black/35" />

//         {/* Stronger darkness on the left for heading readability */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" /> */}
//         <div className="absolute inset-0 " />

//         {/* Bottom cinematic darkening */}
//         {/* <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" /> */}
//         <div className="absolute inset-x-0 bottom-0 h-48 " />

//         {/* ====================================
//       DECORATIVE INDUSTRIAL CIRCLES
//   ===================================== */}
//         <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#f58220]/30" />
//         <div className="absolute -right-10 top-36 h-72 w-72 rounded-full border border-[#f58220]/20" />

//         {/* ====================================
//       HERO CONTENT
//   ===================================== */}
//         <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">

//           {/* ====================================
//         LEFT CONTENT
//     ===================================== */}
//           <div className="max-w-3xl">

//             {/* Badge */}
//             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f58220]/50 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff9d48] backdrop-blur-sm">
//               <span className="h-2 w-2 rounded-full bg-[#f58220]" />
//               Trusted Industrial Trading Partner
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
//               Moving Industry.
//               <span className="block text-[#f58220]">
//                 Connecting Markets.
//               </span>
//               Building Trust.
//             </h1>

//             {/* Description */}
//             <p className="mt-7 max-w-2xl text-base leading-8 text-white drop-shadow-lg sm:text-lg">
//               M. HOLLYFEET &amp; SONS specializes in Iron &amp; Steel Scrap,
//               Ferro Alloys, Skull Breaker (JAM), and International Trade and
//               Indenting solutions.
//             </p>

//             {/* Buttons */}
//             <div className="mt-9 flex flex-col gap-4 sm:flex-row">

//               {/* Products */}
//               <a
//                 href="#products"
//                 className="group flex items-center justify-center gap-3 rounded-lg bg-[#f58220] px-7 py-4 font-bold text-white shadow-xl transition duration-300 hover:bg-[#e87312]"
//               >
//                 Explore Our Products

//                 <ArrowRight
//                   size={19}
//                   className="transition duration-300 group-hover:translate-x-1"
//                 />
//               </a>

//               {/* Contact */}
//               <a
//                 href="#contact"
//                 className="flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-black/20 px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
//               >
//                 Contact Us
//               </a>
//             </div>

//             {/* ====================================
//           STATS
//       ===================================== */}
//             <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/25 pt-7">

//               {/* Global */}
//               <div>
//                 <p className="text-2xl font-black text-[#f58220]">
//                   Global
//                 </p>

//                 <p className="mt-1 text-xs text-white/80">
//                   Trade Network
//                 </p>
//               </div>

//               {/* Quality */}
//               <div>
//                 <p className="text-2xl font-black text-[#f58220]">
//                   Quality
//                 </p>

//                 <p className="mt-1 text-xs text-white/80">
//                   Focused Solutions
//                 </p>
//               </div>

//               {/* Trusted */}
//               <div>
//                 <p className="text-2xl font-black text-[#f58220]">
//                   Trusted
//                 </p>

//                 <p className="mt-1 text-xs text-white/80">
//                   Business Relations
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ====================================
//         RIGHT BUSINESS CARD
//     ===================================== */}
//           <div className="relative hidden lg:block">
//             <div className="relative ml-auto max-w-md rounded-3xl border border-white/20 bg-black/35 p-8 shadow-2xl backdrop-blur-md">

//               {/* Orange Decorative Circle */}
//               <div className="absolute -left-5 top-10 h-10 w-10 rounded-full bg-[#f58220] shadow-lg" />

//               {/* Card Header */}
//               <div className="mb-8 flex items-center justify-between">
//                 <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f58220]">
//                   Our Business
//                 </p>

//                 <Globe2 className="text-white" />
//               </div>

//               {/* Product List */}
//               <div className="space-y-4">
//                 {products.map(
//                   (product: any, index: number) =>
//                     index <= 3 && (
//                       <Link
//                         key={product.title}
//                         href={`/products/${product.slug}`}
//                         className="group flex items-center gap-4 rounded-xl border border-white/15 bg-black/30 p-4 transition duration-300 hover:border-[#f58220]/70 hover:bg-black/50"
//                       >
//                         {/* Product Number */}
//                         <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f58220] text-xs font-black text-white">
//                           {product.number}
//                         </span>

//                         {/* Product Title */}
//                         <p className="font-semibold text-white">
//                           {product.title}
//                         </p>

//                         {/* Arrow */}
//                         <ArrowRight
//                           size={17}
//                           className="ml-auto text-white/60 transition duration-300 group-hover:translate-x-1 group-hover:text-[#f58220]"
//                         />
//                       </Link>
//                     )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ====================================
//       SLIDER INDICATORS
//   ===================================== */}
//         <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setHeroImage(index)}
//               aria-label={`Show hero image ${index + 1}`}
//               className={`h-1.5 rounded-full transition-all duration-500 ${heroImage === index
//                   ? "w-10 bg-[#f58220]"
//                   : "w-2 bg-white/50 hover:bg-white"
//                 }`}
//             />
//           ))}
//         </div>

//         {/* ====================================
//       OPTIONAL SLIDE NUMBER
//   ===================================== */}
//         <div className="absolute bottom-7 right-6 z-20 hidden text-xs font-bold tracking-[0.2em] text-white/70 sm:block lg:right-10">
//           0{heroImage + 1} / 03
//         </div>
//       </section>















































//       {/* ================= TRUST BAR ================= */}

//       <section className="border-y border-slate-200 bg-slate-50">
//         <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
//           {[
//             "Reliable Sourcing",
//             "Global Trading",
//             "Quality Focused",
//             "Professional Service",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-center justify-center gap-3 px-5 py-7"
//             >
//               <CheckCircle2 size={19} className="text-[#f58220]" />

//               <span className="text-sm font-bold text-[#174d3c]">
//                 {item}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}

//       <section id="about" className="bg-white py-24 lg:py-32">
//         <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
//           <div className="relative">
//             <div className="overflow-hidden rounded-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=88"
//                 alt="Industrial operations"
//                 className="h-[500px] w-full object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-8 -right-2 max-w-xs rounded-2xl bg-[#174d3c] p-7 text-white shadow-2xl sm:-right-8">
//               <Globe2 className="mb-4 text-[#f58220]" size={35} />

//               <h3 className="text-xl font-black">
//                 Connecting Local & Global Markets
//               </h3>

//               <p className="mt-3 text-sm leading-6 text-slate-300">
//                 Building strong trade relationships through professionalism,
//                 reliability, and market expertise.
//               </p>
//             </div>
//           </div>

//           <div>
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-[2px] w-10 bg-[#f58220]" />

//               <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
//                 About Our Company
//               </p>
//             </div>

//             <h2 className="text-4xl font-black leading-tight text-[#174d3c] sm:text-5xl">
//               Built on Trust.
//               <br />
//               Driven by Trade.
//             </h2>

//             <p className="mt-7 text-base leading-8 text-slate-600">
//               Founded in 2007, M. HOLLYFEET & SONS (Pvt.) Ltd. is a Lahore-based
//               trading company specializing in ferrous and non-ferrous scrap. We
//               source materials from established markets across the UK, Europe,
//               Africa, South America, Canada, and the USA.
//             </p>

//             <p className="mt-5 text-base leading-8 text-slate-600">
//               We supply large volumes of high-quality materials to buyers
//               across Pakistan, with a strong focus on reliable sourcing,
//               consistent quality, professional trade coordination, and
//               long-term business relationships.
//             </p>

//             <div className="mt-9 grid gap-5 sm:grid-cols-2">
//               {[
//                 "Reliable Business Relationships",
//                 "Professional Trade Handling",
//                 "International Market Focus",
//                 "Customer-Centered Approach",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     className="shrink-0 text-[#f58220]"
//                     size={20}
//                   />

//                   <span className="font-bold text-slate-700">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <a
//               href="#contact"
//               className="mt-10 inline-flex items-center gap-3 font-bold text-[#174d3c] transition hover:text-[#f58220]"
//             >
//               Start a Conversation
//               <ArrowRight size={19} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ================= PRODUCTS (CAROUSEL) ================= */}


//       <section id="products" className="bg-slate-50 py-24 lg:py-32">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">
//           {/* Section Header */}
//           <div className="mx-auto mb-16 max-w-3xl text-center">
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
//               What We Deal In
//             </p>

//             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
//               Our Products & Services
//             </h2>

//             <p className="mt-5 leading-8 text-slate-600">
//               Professional trading and sourcing solutions designed to meet the
//               evolving requirements of industrial and international markets.
//             </p>
//           </div>

//           {/* Carousel Wrapper */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsCarouselPaused(true)}
//             onMouseLeave={() => setIsCarouselPaused(false)}
//           >
//             {/* Previous Button */}
//             <button
//               type="button"
//               onClick={() => scrollCarousel("prev")}
//               aria-label="Previous products"
//               className="absolute left-0 top-1/2 z-20 hidden -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition duration-300 hover:bg-[#f58220] hover:text-white sm:flex"
//             >
//               <ChevronLeft size={22} />
//             </button>

//             {/* Next Button */}
//             <button
//               type="button"
//               onClick={() => scrollCarousel("next")}
//               aria-label="Next products"
//               className="absolute right-0 top-1/2 z-20 hidden translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition duration-300 hover:bg-[#f58220] hover:text-white sm:flex"
//             >
//               <ChevronRight size={22} />
//             </button>

//             {/* Scrollable Track */}
//             <div
//               ref={carouselTrackRef}
//               className="carousel-track flex gap-6 overflow-x-auto pb-5"
//               style={{
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               {products.map((product: any) => {
//                 return (
//                   <Link
//                     key={product.title}
//                     href={`/products/${product.slug}`}
//                     data-carousel-card
//                     aria-label={`Learn more about ${product.title}`}
//                     className="
//                 group
//                 relative
//                 flex
//                 min-h-[540px]
//                 w-[88%]
//                 shrink-0
//                 flex-col
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-slate-200
//                 bg-white
//                 transition
//                 duration-300
//                 hover:-translate-y-2
//                 hover:border-[#f58220]
//                 hover:shadow-2xl
//                 sm:w-[48%]
//                 lg:w-[calc(33.333%-16px)]
//               "
//                   >
//                     {/* Product Image */}
//                     <div className="relative h-60 w-full shrink-0 overflow-hidden bg-slate-100">
//                       <Image
//                         src={product.image}
//                         alt={product.title}
//                         loading="lazy"
//                         fill
//                         sizes="(max-width: 640px) 88vw, (max-width: 1024px) 48vw, 33vw"
//                         className="object-cover transition duration-700 group-hover:scale-110"
//                       />

//                       {/* Product Number */}
//                       <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#174d3c] shadow-lg backdrop-blur-sm">
//                         {product.number}
//                       </div>
//                     </div>

//                     {/* Product Content */}
//                     <div className="flex flex-1 flex-col p-6">
//                       {/* Product Title */}
//                       <h3 className="text-xl font-black leading-tight text-[#174d3c] lg:text-2xl">
//                         {product.title}
//                       </h3>

//                       {/* Description */}
//                       <p className="mt-4 text-sm leading-6 text-slate-600">
//                         {product.description}
//                       </p>

//                       {/* Bullet Points */}
//                       {product.features && product.features.length > 0 && (
//                         <ul className="mt-5 space-y-2.5">
//                           {product.features.map(
//                             (feature: string, index: number) => (
//                               <li
//                                 key={`${product.title}-feature-${index}`}
//                                 className="flex items-start gap-3 text-sm leading-5 text-slate-600"
//                               >
//                                 <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f58220]" />

//                                 <span>{feature}</span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       )}

//                       {/* Learn More */}
//                       <div className="mt-auto pt-6">
//                         <div className="inline-flex items-center gap-2 text-sm font-bold text-[#f58220]">
//                           Learn More

//                           <ArrowRight
//                             size={17}
//                             className="transition duration-300 group-hover:translate-x-1"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Hide Scrollbar */}
//         <style jsx>{`
//     .carousel-track::-webkit-scrollbar {
//       display: none;
//     }
//   `}</style>
//       </section>










//       {/* ================= GLOBAL REACH ================= */}

//       <section
//         id="global"
//         className="relative overflow-hidden bg-[#174d3c] py-24 lg:py-32"
//       >
//         {/* Subtle brand-pattern background */}
//         <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#f58220]/10" />
//         <div className="pointer-events-none absolute -right-16 top-26 h-56 w-56 rounded-full border border-[#f58220]/10" />
//         <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full border border-white/5" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           {/* Section Header */}
//           <div className="mx-auto mb-14 max-w-4xl text-center">
//             <div className="mb-5 flex items-center justify-center gap-3">
//               <span className="h-[2px] w-10 bg-[#f58220]" />

//               <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
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

//           {/* Global Regions */}
//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               "North America",
//               "Europe",
//               "Africa",
//               "South America",
//               "Canada",
//               "USA",
//             ].map((region) => (
//               <div
//                 key={region}
//                 className="group flex min-h-[76px] items-center justify-center gap-4 rounded-xl border border-white/10 bg-[#123d30] px-6 py-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#f58220]/70 hover:bg-[#0f3328] hover:shadow-2xl"
//               >
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f58220]/30 bg-[#f58220]/10">
//                   <Globe2
//                     size={22}
//                     className="text-[#f58220] transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </span>

//                 <span className="text-lg font-black text-white sm:text-xl">
//                   {region}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Supporting Statement */}
//           <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-center">
//             <span className="h-px flex-1 bg-white/10" />

//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
//               Connecting Markets • Building Long-Term Trade Relationships
//             </p>

//             <span className="h-px flex-1 bg-white/10" />
//           </div>
//         </div>
//       </section>


//       {/* ================= WHY CHOOSE US ================= */}

//       <section id="why-us" className="bg-white py-24 lg:py-32">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="mb-16 max-w-3xl">
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
//               Why M. HOLLYFEET & SONS
//             </p>

//             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
//               A Reliable Partner for Your Business.
//             </h2>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {strengths.map((strength) => {
//               const Icon = strength.icon;

//               return (
//                 <div
//                   key={strength.title}
//                   className="rounded-2xl border border-slate-200 p-7 transition hover:border-[#f58220]/50 hover:shadow-xl"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f58220]/10 text-[#f58220]">
//                     <Icon size={24} />
//                   </div>

//                   <h3 className="mt-6 text-xl font-black text-[#174d3c]">
//                     {strength.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {strength.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}

//       <section className="bg-[#f58220] py-20">
//         <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
//           <div>
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
//               Let's Work Together
//             </p>

//             <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
//               Looking for a Reliable Trading Partner?
//             </h2>
//           </div>

//           <a
//             href="#contact"
//             className="flex items-center gap-3 rounded-lg bg-[#174d3c] px-7 py-4 font-bold text-white transition hover:bg-[#123d30]"
//           >
//             Contact Our Team
//             <ArrowRight size={19} />
//           </a>
//         </div>
//       </section>

//       {/* ================= CONTACT ================= */}

//       <section id="contact" className="bg-slate-50 py-24 lg:py-32">
//         <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
//           <div>
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
//               Contact Us
//             </p>

//             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
//               Let's Start a Conversation.
//             </h2>

//             <p className="mt-6 max-w-xl leading-8 text-slate-600">
//               Whether you are looking for sourcing, trading, industrial
//               materials, or international indenting solutions, our team is
//               ready to discuss your business requirements.
//             </p>

//             <div className="mt-10 space-y-7">
//               <div className="flex gap-5">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
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
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
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
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
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
//           </div>

//           {/* Contact Form */}

//           <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
//             <h3 className="text-2xl font-black text-[#174d3c]">
//               Send Us a Message
//             </h3>

//             <p className="mt-2 text-sm text-slate-500">
//               Fill in your details and we will get back to you.
//             </p>

//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 alert("Thank you! Your message has been submitted.");
//               }}
//               className="mt-8 space-y-5"
//             >
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-bold text-slate-700">
//                     Full Name
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Your name"
//                     className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-bold text-slate-700">
//                     Company
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Company name"
//                     className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-bold text-slate-700">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="you@company.com"
//                   className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-bold text-slate-700">
//                   Business Requirement
//                 </label>

//                 <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#f58220]">
//                   <option>Select an option</option>
//                   <option>Iron & Steel Scrap</option>
//                   <option>Ferro Alloys</option>
//                   <option>Skull Breaker (JAM)</option>
//                   <option>International Trade & Indenting</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-bold text-slate-700">
//                   Message
//                 </label>

//                 <textarea
//                   rows={5}
//                   placeholder="Tell us about your requirement..."
//                   className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#174d3c] px-6 py-4 font-bold text-white transition hover:bg-[#123d30]"
//               >
//                 Send Message
//                 <Send size={18} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section> 





//         </>
//   );
// }



"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Factory,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Recycle,
  Send,
  ShieldCheck,
  Ship,
  Truck,
  X,
} from "lucide-react";

import steelturing from "../public/assets/steel tuning.jpg";
import bluesteel from "../public/assets/blue steel.jpg";
import shreddedsteel from "../public/assets/shredded steel.jpg";
import rebarendcut from "../public/assets/rebarendcut.jpg";
import railwheel from "../public/assets/rail wheel.jpg";
import compressorscrap from "../public/assets/compressor scrap.jpeg";
import gibundles from "../public/assets/g.i bundles.jpeg";
import fabricationscrap from "../public/assets/fabrication scrap.jpeg";
import loosebushling from "../public/assets/loose bushling.jpeg";
import lmsbundle from "../public/assets/lms bundle.jpeg";
import motorscrap from "../public/assets/motor scrap.jpeg";

type Product = {
  title: string;
  description: string;
  icon: React.ElementType;
  number: string;
  slug: string;
  image: typeof steelturing;
  features?: string[];
};

type Strength = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const heroImages = [
  "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef709a7bc239e868c52620b90bf8fd4e778036e47efb24ab7bb2216b4b27b15d73b7ae13cda333b1a658a4aa09dbd85477/thep-8280.jpg",
  "https://www.glottislogistics.in/assets/img/service/breakbulk.webp",
  "https://static.vesselfinder.net/images/media/1a02850c51068f15d87b6375183447d8.jpg",
];

const products: Product[] = [
  {
    title: "Steel Turning",
    description:
      "Reliable sourcing and trading of quality iron and steel scrap for industrial and commercial requirements.",
    icon: Recycle,
    number: "01",
    slug: "steel-turning",
    image: steelturing,
  },
  {
    title: "Rail Wheels",
    description:
      "Supplying essential ferro alloy materials through trusted sourcing networks and professional trade operations.",
    icon: Factory,
    number: "02",
    slug: "rail-wheel",
    image: railwheel,
  },
  {
    title: "Shredded Steel",
    description:
      "Professional handling and supply solutions for specialized industrial material requirements.",
    icon: ShieldCheck,
    number: "03",
    slug: "shredded-steel",
    image: shreddedsteel,
  },
  {
    title: "Rebar-Endcut",
    description:
      "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
    icon: Ship,
    number: "04",
    slug: "rebar-endcut",
    image: rebarendcut,
  },
  {
    title: "Compressor Scrap",
    description:
      "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
    icon: Ship,
    number: "05",
    slug: "compressor-scrap",
    image: compressorscrap,
  },
  {
    title: "Fabrication Scrap",
    description:
      "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
    icon: Ship,
    number: "06",
    slug: "fabrication-scrap",
    image: fabricationscrap,
  },
  {
    title: "Loose Bushling",
    description:
      "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
    icon: Ship,
    number: "07",
    slug: "loose-bushling",
    image: loosebushling,
  },
  {
    title: "G.I Bundles",
    description:
      "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
    icon: Ship,
    number: "08",
    slug: "gi-bundles",
    image: gibundles,
  },
  {
    title: "LMS Bundle",
    description:
      "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
    icon: Ship,
    number: "09",
    slug: "lms-bundle",
    image: lmsbundle,
  },
  {
    title: "Blue Steel",
    description:
      "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
    icon: Ship,
    number: "10",
    slug: "blue-steel",
    image: bluesteel,
  },
  {
    title: "Motor Scrap",
    description:
      "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
    icon: Ship,
    number: "11",
    slug: "motor-scrap",
    image: motorscrap,
  },
];

const strengths: Strength[] = [
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

const revealBase =
  "transition-all duration-700 ease-out motion-reduce:transition-none";

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
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
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `${revealBase} ${
      visible
        ? "translate-y-0 opacity-100"
        : "translate-y-8 opacity-0"
    }`,
  };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function FloatingOrb({
  className,
}: {
  className: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full border ${className}`}
    />
  );
}

export default function Newmohyl() {
  const [heroImage, setHeroImage] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Global Reach", href: "#global" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  /*
   * Hero slider
   */
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setHeroImage((previous) => (previous + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  /*
   * Product auto-scroll
   */
  useEffect(() => {
    const track = carouselTrackRef.current;

    if (!track || isCarouselPaused) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const speed = 0.35;

    const animate = () => {
      if (!track) return;

      track.scrollLeft += speed;

      const maxScroll = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= maxScroll - 1) {
        track.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isCarouselPaused]);

  const scrollCarousel = useCallback(
    (direction: "prev" | "next") => {
      const track = carouselTrackRef.current;
      if (!track) return;

      const firstCard =
        track.querySelector<HTMLElement>("[data-carousel-card]");

      const gap = 24;
      const cardWidth = firstCard
        ? firstCard.offsetWidth + gap
        : track.clientWidth;

      track.scrollBy({
        left: direction === "next" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    },
    []
  );

  const handleMobileNav = () => {
    setMobileMenuOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your message has been submitted.");
    }, 700);
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =========================================================
          NAVIGATION
      ========================================================== */}
      {/* <header className="fixed inset-x-0 top-0 z-50">
        <div className="border-b border-white/10 bg-black/80 shadow-lg backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
            <Link
              href="#home"
              onClick={handleMobileNav}
              className="group flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f58220] text-sm font-black text-white shadow-lg transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                M
              </div>

              <div>
                <p className="text-sm font-black tracking-wide text-white sm:text-base">
                  M. HOLLYFEET
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#f58220]">
                  & SONS
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-sm font-semibold text-white/80 transition duration-300 hover:text-white"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#f58220] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-lg bg-[#f58220] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#e87312] hover:shadow-xl lg:flex"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              aria-label={
                mobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-[#f58220]/60 hover:text-[#f58220] lg:hidden"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <div
            className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 lg:hidden ${
              mobileMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileNav}
                  className="border-b border-white/10 py-4 text-sm font-semibold text-white/80 transition hover:pl-2 hover:text-[#f58220]"
                  style={{
                    transitionDelay: mobileMenuOpen
                      ? `${index * 35}ms`
                      : "0ms",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header> */}

      {/* =========================================================
          HERO
      ========================================================== */}
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

      {/* =========================================================
          TRUST BAR
      ========================================================== */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
          {[
            "Reliable Sourcing",
            "Global Trading",
            "Quality Focused",
            "Professional Service",
          ].map((item, index) => (
            <Reveal
              key={item}
              delay={index * 70}
              className="group flex items-center justify-center gap-3 px-5 py-7"
            >
              <CheckCircle2
                size={19}
                className="text-[#f58220] transition duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="text-sm font-bold text-[#174d3c]">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative">
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=88"
                alt="Industrial operations"
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#174d3c]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>

            <div className="absolute -bottom-8 -right-2 max-w-xs rounded-2xl bg-[#174d3c] p-7 text-white shadow-2xl transition duration-500 hover:-translate-y-2 sm:-right-8">
              <Globe2
                className="mb-4 text-[#f58220]"
                size={35}
              />

              <h3 className="text-xl font-black">
                Connecting Local &amp; Global Markets
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Building strong trade relationships through professionalism,
                reliability, and market expertise.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#f58220]" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
                About Our Company
              </p>
            </div>

            <h2 className="text-4xl font-black leading-tight text-[#174d3c] sm:text-5xl">
              Built on Trust.
              <br />
              Driven by Trade.
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600">
              Founded in 2007, M. HOLLYFEET &amp; SONS (Pvt.) Ltd. is a
              Lahore-based trading company specializing in ferrous and
              non-ferrous scrap. We source materials from established markets
              across the UK, Europe, Africa, South America, Canada, and the
              USA.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We supply large volumes of high-quality materials to buyers
              across Pakistan, with a strong focus on reliable sourcing,
              consistent quality, professional trade coordination, and
              long-term business relationships.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {[
                "Reliable Business Relationships",
                "Professional Trade Handling",
                "International Market Focus",
                "Customer-Centered Approach",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 transition duration-300 hover:translate-x-1"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <CheckCircle2
                    className="shrink-0 text-[#f58220] transition duration-300 group-hover:scale-110"
                    size={20}
                  />
                  <span className="font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 font-bold text-[#174d3c] transition duration-300 hover:text-[#f58220]"
            >
              Start a Conversation
              <ArrowRight
                size={19}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================== */}
      <section id="products" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              What We Deal In
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
              Our Products &amp; Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Professional trading and sourcing solutions designed to meet the
              evolving requirements of industrial and international markets.
            </p>
          </Reveal>

          <div
            className="relative"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onFocus={() => setIsCarouselPaused(true)}
            onBlur={() => setIsCarouselPaused(false)}
          >
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              aria-label="Previous products"
              className="absolute left-0 top-1/2 z-20 hidden -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition duration-300 hover:-translate-x-6 hover:bg-[#f58220] hover:text-white hover:shadow-2xl sm:flex"
            >
              <ChevronLeft size={22} />
              </button>

            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              aria-label="Next products"
              className="absolute right-0 top-1/2 z-20 hidden translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition duration-300 hover:translate-x-6 hover:bg-[#f58220] hover:text-white hover:shadow-2xl sm:flex"
            >
              <ChevronRight size={22} />
            </button>

            <div
              ref={carouselTrackRef}
              className="carousel-track flex gap-6 overflow-x-auto pb-5"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {products.map((product, index) => (
                <Link
                  key={product.title}
                  href={`/products/${product.slug}`}
                  data-carousel-card
                  aria-label={`Learn more about ${product.title}`}
                  className="group relative flex min-h-[520px] w-[88%] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-500 hover:-translate-y-2 hover:border-[#f58220]/60 hover:shadow-2xl sm:w-[48%] lg:w-[calc(33.333%-16px)]"
                  style={{
                    transitionDelay: `${(index % 3) * 40}ms`,
                  }}
                >
                  <div className="relative h-60 w-full shrink-0 overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      fill
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 48vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-80" />

                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#174d3c] shadow-lg backdrop-blur-sm transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {product.number}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f58220]/10 text-[#f58220] transition duration-300 group-hover:bg-[#f58220] group-hover:text-white">
                        <product.icon size={18} />
                      </div>

                      <h3 className="text-xl font-black leading-tight text-[#174d3c] lg:text-2xl">
                        {product.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-[#f58220]">
                        Learn More
                        <ArrowRight
                          size={17}
                          className="transition duration-300 group-hover:translate-x-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .carousel-track::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* =========================================================
          GLOBAL REACH
      ========================================================== */}
      <section
        id="global"
        className="relative overflow-hidden bg-[#174d3c] py-24 lg:py-32"
      >
        <FloatingOrb className="-right-32 top-10 h-80 w-80 border-[#f58220]/10 animate-[spin_30s_linear_infinite]" />
        <FloatingOrb className="-right-16 top-28 h-56 w-56 border-[#f58220]/10 animate-[spin_22s_linear_infinite_reverse]" />
        <FloatingOrb className="-left-40 bottom-0 h-96 w-96 border-white/5" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#f58220]" />

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
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
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "North America",
              "Europe",
              "Africa",
              "South America",
              "Canada",
              "USA",
            ].map((region, index) => (
              <Reveal key={region} delay={index * 70}>
                <div className="group flex min-h-[76px] items-center justify-center gap-4 rounded-xl border border-white/10 bg-[#123d30] px-6 py-5 shadow-lg transition duration-500 hover:-translate-y-2 hover:border-[#f58220]/70 hover:bg-[#0f3328] hover:shadow-2xl">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f58220]/30 bg-[#f58220]/10 transition duration-500 group-hover:rotate-6 group-hover:bg-[#f58220]/20">
                    <Globe2
                      size={22}
                      className="text-[#f58220] transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>

                  <span className="text-lg font-black text-white sm:text-xl">
                    {region}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250}>
            <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-center">
              <span className="h-px flex-1 bg-white/10" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                Connecting Markets • Building Long-Term Trade Relationships
              </p>

              <span className="h-px flex-1 bg-white/10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}
      <section id="why-us" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              Why M. HOLLYFEET &amp; SONS
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
              A Reliable Partner for Your Business.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <Reveal key={strength.title} delay={index * 70}>
                  <div className="group h-full rounded-2xl border border-slate-200 p-7 transition duration-500 hover:-translate-y-2 hover:border-[#f58220]/50 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f58220]/10 text-[#f58220] transition duration-500 group-hover:rotate-3 group-hover:bg-[#f58220] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-6 text-xl font-black text-[#174d3c]">
                      {strength.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {strength.description}
                    </p>

                    <div className="mt-6 h-0.5 w-8 origin-left bg-[#f58220] transition-all duration-500 group-hover:w-16" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f58220] py-20">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/15"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-10 h-72 w-72 rounded-full border border-white/10"
        />

        <Reveal>
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Looking for a Reliable Trading Partner?
              </h2>
            </div>

            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-lg bg-[#174d3c] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#123d30] hover:shadow-2xl"
            >
              Contact Our Team
              <ArrowRight
                size={19}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}
      <section id="contact" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
              Let&apos;s Start a Conversation.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Whether you are looking for sourcing, trading, industrial
              materials, or international indenting solutions, our team is
              ready to discuss your business requirements.
            </p>

            <div className="mt-10 space-y-7">
              <div className="group flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#f58220] group-hover:text-white">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="font-black text-[#174d3c]">
                    Head Office
                  </h4>

                  <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
                    181/C, Block # B, Lane # 6, P.A.F. Colony, Zarar Shaheed
                    Road, Lahore Cantt.
                  </p>
                </div>
              </div>

              <div className="group flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#f58220] group-hover:text-white">
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

              <div className="group flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#f58220] group-hover:text-white">
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
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition duration-500 hover:shadow-2xl sm:p-9">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-[#174d3c]">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Fill in your details and we will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="full-name"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="full-name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
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
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
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
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition duration-300 focus:-translate-y-0.5 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
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
                    rows={5}
                    required
                    placeholder="Tell us about your requirement..."
                    className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#174d3c] px-6 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#123d30] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  <Send
                    size={18}
                    className={`transition duration-300 ${
                      isSubmitting
                        ? "animate-pulse"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

    
    </main>
  );
}