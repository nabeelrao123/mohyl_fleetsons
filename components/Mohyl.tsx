

// // // "use client";

// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import {
// // //   Menu,
// // //   X,
// // //   ArrowRight,
// // //   CheckCircle2,
// // //   Globe2,
// // //   Ship,
// // //   Factory,
// // //   Recycle,
// // //   Handshake,
// // //   ShieldCheck,
// // //   BadgeDollarSign,
// // //   Truck,
// // //   Mail,
// // //   Phone,
// // //   MapPin,
// // //   Send,
// // // } from "lucide-react";
// // // import steelturing from '../public/assets/steel tuning.jpg'
// // // import bluesteel from '../public/assets/blue steel.jpg'

// // // import shreddedsteel from '../public/assets/shredded steel.jpg'

// // // import rebarendcut from '../public/assets/rebarendcut.jpg'

// // // import railwheel from '../public/assets/rail wheel.jpg'
// // // import compressorscrap from '../public/assets/compressor scrap.jpeg'
// // // import gibundles from '../public/assets/g.i bundles.jpeg'
// // // import fabricationscrap from '../public/assets/fabrication scrap.jpeg'
// // // import loosebushling from '../public/assets/loose bushling.jpeg'
// // // import lmsbundle from '../public/assets/lms bundle.jpeg'
// // // import motorscrap from '../public/assets/motor scrap.jpeg'



// // // import Image from "next/image";
// // // export default function Newmohyl() {
 
// // //   const products = [
// // //     {
// // //       title: "Steel turning",
// // //       description:
// // //         "Reliable sourcing and trading of quality iron and steel scrap for industrial and commercial requirements.",
// // //       icon: Recycle,
// // //       number: "01",
// // //       slug: "Steel Turning",
// // //       image: steelturing,
// // //     },
// // //     {
// // //       title: "Rail Wheels",
// // //       description:
// // //         "Supplying essential ferro alloy materials through trusted sourcing networks and professional trade operations.",
// // //       icon: Factory,
// // //       number: "02",
// // //       slug: "Rail Wheel",
// // //       image: railwheel,
// // //     },
// // //     {
// // //       title: "Shredded Steel",
// // //       description:
// // //         "Professional handling and supply solutions for specialized industrial material requirements.",
// // //       icon: ShieldCheck,
// // //       number: "03",
// // //       slug: "Shredded Steel",
// // //  image: shreddedsteel,
// // //     },
// // //     {
// // //       title: "Rebar-Endcut",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: rebarendcut,
// // //     },
// // //      {
// // //       title: "Compressor Scrap",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: compressorscrap,
// // //     },
// // //       {
// // //       title: "Fabrication Scrap",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: fabricationscrap,
// // //     },
// // //       {
// // //       title: "Loose Bushling",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: loosebushling,
// // //     },
// // //       {
// // //       title: "G.I Bundles",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: gibundles,
// // //     },
// // //       {
// // //       title: "Lms Bundle",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: lmsbundle,
// // //     },
// // //       {
// // //       title: "Blue Steel ",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: bluesteel,
// // //     },
// // //       {
// // //       title: "Loose Bushling",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: loosebushling,
// // //     },
// // //       {
// // //       title: "Motor Scrap",
// // //       description:
// // //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// // //       icon: Ship,
// // //       number: "04",
// // //       slug: "international-trade-indenting",
// // //     image: motorscrap,
// // //     },
// // //   ] as any ;

// // //   const strengths = [
// // //     {
// // //       title: "Industry Experience",
// // //       description:
// // //         "Professional knowledge and practical experience in industrial materials and international trade.",
// // //       icon: Factory,
// // //     },
// // //     {
// // //       title: "Global Network",
// // //       description:
// // //         "Strong relationships with suppliers, buyers, and business partners across international markets.",
// // //       icon: Globe2,
// // //     },
// // //     {
// // //       title: "Quality Assurance",
// // //       description:
// // //         "Focused on reliable sourcing and maintaining quality standards throughout the trading process.",
// // //       icon: ShieldCheck,
// // //     },
// // //     {
// // //       title: "Competitive Pricing",
// // //       description:
// // //         "Market-focused solutions designed to deliver value and competitive commercial opportunities.",
// // //       icon: BadgeDollarSign,
// // //     },
// // //     {
// // //       title: "Efficient Logistics",
// // //       description:
// // //         "Professional coordination and handling to support smooth and efficient trade operations.",
// // //       icon: Truck,
// // //     },
// // //     {
// // //       title: "Long-Term Partnerships",
// // //       description:
// // //         "Building trusted and sustainable business relationships with clients and suppliers.",
// // //       icon: Handshake,
// // //     },
// // //   ];

// // //   return (
// // //     <>
     
// // //       {/* ================= HERO ================= */}

// // //       <section
// // //         id="home"
// // //         className="relative min-h-screen overflow-hidden bg-[#123d30] pt-20"
// // //       >
// // //         <div
// // //           className="absolute inset-0 opacity-20"
// // //           style={{
// // //             backgroundImage:
// // //               "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80')",
// // //             backgroundSize: "cover",
// // //             backgroundPosition: "center",
// // //           }}
// // //         />

// // //         <div className="absolute inset-0 bg-gradient-to-r from-[#123d30] via-[#174d3c]/95 to-[#174d3c]/60" />

// // //         <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#f58220]/30" />
// // //         <div className="absolute -right-10 top-36 h-72 w-72 rounded-full border border-[#f58220]/20" />

// // //         <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
// // //           <div className="max-w-3xl">
// // //             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f58220]/40 bg-[#f58220]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff9d48]">
// // //               <span className="h-2 w-2 rounded-full bg-[#f58220]" />
// // //               Trusted Industrial Trading Partner
// // //             </div>

// // //             <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
// // //               Moving Industry.
// // //               <span className="block text-[#f58220]">
// // //                 Connecting Markets.
// // //               </span>
// // //               Building Trust.
// // //             </h1>

// // //             <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
// // //               M. HOLLYFEET & SONS specializes in Iron & Steel Scrap, Ferro
// // //               Alloys, Skull Breaker (JAM), and International Trade and
// // //               Indenting solutions.
// // //             </p>

// // //             <div className="mt-9 flex flex-col gap-4 sm:flex-row">
// // //               <a
// // //                 href="#products"
// // //                 className="group flex items-center justify-center gap-3 rounded-lg bg-[#f58220] px-7 py-4 font-bold text-white transition hover:bg-[#e87312]"
// // //               >
// // //                 Explore Our Products

// // //                 <ArrowRight
// // //                   size={19}
// // //                   className="transition duration-300 group-hover:translate-x-1"
// // //                 />
// // //               </a>

// // //               <a
// // //                 href="#contact"
// // //                 className="flex items-center justify-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#174d3c]"
// // //               >
// // //                 Contact Us
// // //               </a>
// // //             </div>

// // //             <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-7">
// // //               <div>
// // //                 <p className="text-2xl font-black text-[#f58220]">Global</p>
// // //                 <p className="mt-1 text-xs text-slate-300">Trade Network</p>
// // //               </div>

// // //               <div>
// // //                 <p className="text-2xl font-black text-[#f58220]">Quality</p>
// // //                 <p className="mt-1 text-xs text-slate-300">
// // //                   Focused Solutions
// // //                 </p>
// // //               </div>

// // //               <div>
// // //                 <p className="text-2xl font-black text-[#f58220]">Trusted</p>
// // //                 <p className="mt-1 text-xs text-slate-300">
// // //                   Business Relations
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Card */}

// // //           <div className="relative hidden lg:block">
// // //             <div className="relative ml-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
// // //               <div className="absolute -left-5 top-10 h-10 w-10 rounded-full bg-[#f58220]" />

// // //               <div className="mb-8 flex items-center justify-between">
// // //                 <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f58220]">
// // //                   Our Business
// // //                 </p>

// // //                 <Globe2 className="text-white" />
// // //               </div>

// // //               <div className="space-y-4">
// // //                 {products.map((product :any,index:any) => (
                  
// // // index<=3 ? <>

// // //                   <Link
// // //                     key={product.title}
// // //                     href={`/products/${product.slug}`}
// // //                     className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#f58220]/60 hover:bg-white/10"
// // //                   >
// // //                     <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f58220] text-xs font-black text-white">
// // //                       {product.number}
// // //                     </span>

// // //                     <p className="font-semibold text-white">{product.title}</p>

// // //                     <ArrowRight
// // //                       size={17}
// // //                       className="ml-auto text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#f58220]"
// // //                     />
// // //                   </Link>
// // // </> : <></>


// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= TRUST BAR ================= */}

// // //       <section className="border-y border-slate-200 bg-slate-50">
// // //         <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
// // //           {[
// // //             "Reliable Sourcing",
// // //             "Global Trading",
// // //             "Quality Focused",
// // //             "Professional Service",
// // //           ].map((item) => (
// // //             <div
// // //               key={item}
// // //               className="flex items-center justify-center gap-3 px-5 py-7"
// // //             >
// // //               <CheckCircle2 size={19} className="text-[#f58220]" />

// // //               <span className="text-sm font-bold text-[#174d3c]">
// // //                 {item}
// // //               </span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* ================= ABOUT ================= */}

// // //       <section id="about" className="bg-white py-24 lg:py-32">
// // //         <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
// // //           <div className="relative">
// // //             <div className="overflow-hidden rounded-2xl">
// // //               <img
// // //                 src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80"
// // //                 alt="Industrial operations"
// // //                 className="h-[500px] w-full object-cover"
// // //               />
// // //             </div>

// // //             <div className="absolute -bottom-8 -right-2 max-w-xs rounded-2xl bg-[#174d3c] p-7 text-white shadow-2xl sm:-right-8">
// // //               <Globe2 className="mb-4 text-[#f58220]" size={35} />

// // //               <h3 className="text-xl font-black">
// // //                 Connecting Local & Global Markets
// // //               </h3>

// // //               <p className="mt-3 text-sm leading-6 text-slate-300">
// // //                 Building strong trade relationships through professionalism,
// // //                 reliability, and market expertise.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div>
// // //             <div className="mb-5 flex items-center gap-3">
// // //               <span className="h-[2px] w-10 bg-[#f58220]" />

// // //               <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// // //                 About Our Company
// // //               </p>
// // //             </div>

// // //             <h2 className="text-4xl font-black leading-tight text-[#174d3c] sm:text-5xl">
// // //               Built on Trust.
// // //               <br />
// // //               Driven by Trade.
// // //             </h2>

// // //             <p className="mt-7 text-base leading-8 text-slate-600">
// // //               M. HOLLYFEET & SONS is focused on providing reliable trading,
// // //               sourcing, and indenting solutions for industrial materials. We
// // //               understand the importance of trust, quality, market knowledge,
// // //               and professional coordination in every business transaction.
// // //             </p>

// // //             <p className="mt-5 text-base leading-8 text-slate-600">
// // //               Through strong relationships and a professional approach, we aim
// // //               to connect suppliers and buyers while creating long-term value
// // //               for our business partners.
// // //             </p>

// // //             <div className="mt-9 grid gap-5 sm:grid-cols-2">
// // //               {[
// // //                 "Reliable Business Relationships",
// // //                 "Professional Trade Handling",
// // //                 "International Market Focus",
// // //                 "Customer-Centered Approach",
// // //               ].map((item) => (
// // //                 <div key={item} className="flex items-center gap-3">
// // //                   <CheckCircle2
// // //                     className="shrink-0 text-[#f58220]"
// // //                     size={20}
// // //                   />

// // //                   <span className="font-bold text-slate-700">{item}</span>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <a
// // //               href="#contact"
// // //               className="mt-10 inline-flex items-center gap-3 font-bold text-[#174d3c] transition hover:text-[#f58220]"
// // //             >
// // //               Start a Conversation
// // //               <ArrowRight size={19} />
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= PRODUCTS ================= */}

// // //       <section id="products" className="bg-slate-50 py-24 lg:py-32">
// // //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// // //           <div className="mx-auto mb-16 max-w-3xl text-center">
// // //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// // //               What We Deal In
// // //             </p>

// // //             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
// // //               Our Products & Services
// // //             </h2>

// // //             <p className="mt-5 leading-8 text-slate-600">
// // //               Professional trading and sourcing solutions designed to meet the
// // //               evolving requirements of industrial and international markets.
// // //             </p>
// // //           </div>

// // //           {/* Product Cards */}

// // //           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// // //             {products.map((product :any ) => {
// // //               const Icon = product.icon;

// // //               return (
// // //                 <div
// // //                   key={product.title}
// // //                   className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-[#f58220] hover:shadow-2xl"
// // //                 >
// // //                   {/* Product Image */}

// // //                   <div className="relative h-52 w-full overflow-hidden">
// // //                     <Image
// // //                       src={product.image}
// // //                       alt={product.title}
// // //                       loading="lazy"
// // //                       className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
// // //                     />

// // //                     {/* Image Overlay */}

// // //                     {/* <div className="absolute inset-0 bg-gradient-to-t from-[#123d30]/90 via-[#174d3c]/20 to-transparent" /> */}
// // //                     <div className="absolute inset-0 " />

// // //                     {/* Product Number */}

// // //                     <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#174d3c] shadow-lg backdrop-blur-sm">
// // //                       {product.number}
// // //                     </div>

// // //                     {/* Icon */}

// // //                     {/* <div className="absolute bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f58220] text-white shadow-lg">
// // //                       <Icon size={24} />
// // //                     </div> */}
// // //                   </div>

// // //                   {/* Product Content */}

// // //                   <div className="p-7">
// // //                     <h3 className="text-xl font-black text-[#174d3c]">
// // //                       {product.title}
// // //                     </h3>

// // //                     <p className="mt-4 text-sm leading-7 text-slate-600">
// // //                       {product.description}
// // //                     </p>

// // //                     <Link
// // //                       href={`/products/${product.slug}`}
// // //                       className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f58220]"
// // //                       aria-label={`Learn more about ${product.title}`}
// // //                     >
// // //                       Learn More

// // //                       <ArrowRight
// // //                         size={17}
// // //                         className="transition duration-300 group-hover:translate-x-1"
// // //                       />
// // //                     </Link>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= GLOBAL REACH ================= */}

// // //       <section
// // //         id="global"
// // //         className="relative overflow-hidden bg-[#174d3c] py-24 lg:py-32"
// // //       >
// // //         <div className="absolute inset-0 opacity-10">
// // //           <div
// // //             className="h-full w-full"
// // //             style={{
// // //               backgroundImage:
// // //                 "url('https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=2000&q=80')",
// // //               backgroundSize: "cover",
// // //               backgroundPosition: "center",
// // //             }}
// // //           />
// // //         </div>

// // //         <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
// // //           <div>
// // //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// // //               International Trading
// // //             </p>

// // //             <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
// // //               Connecting Businesses
// // //               <span className="block text-[#f58220]">Across Borders.</span>
// // //             </h2>

// // //             <p className="mt-7 max-w-xl leading-8 text-slate-300">
// // //               Our international trade and indenting operations are designed to
// // //               create strong connections between suppliers, manufacturers,
// // //               buyers, and industrial markets.
// // //             </p>

// // //             <div className="mt-10 space-y-5">
// // //               {[
// // //                 "International Sourcing",
// // //                 "Supplier & Buyer Coordination",
// // //                 "Trade & Indenting Solutions",
// // //                 "Professional Business Support",
// // //               ].map((item) => (
// // //                 <div key={item} className="flex items-center gap-4">
// // //                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f58220]">
// // //                     <CheckCircle2 size={18} className="text-white" />
// // //                   </span>

// // //                   <span className="font-semibold text-white">{item}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="relative">
// // //             <div className="relative aspect-square max-w-lg rounded-full border border-white/10 p-8">
// // //               <div className="flex h-full w-full items-center justify-center rounded-full border border-[#f58220]/30">
// // //                 <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#f58220] shadow-[0_0_100px_rgba(245,130,32,0.3)]">
// // //                   <Globe2 size={80} className="text-white" />
// // //                 </div>
// // //               </div>

// // //               <div className="absolute left-[5%] top-[20%] h-3 w-3 rounded-full bg-[#f58220] shadow-[0_0_25px_#f58220]" />
// // //               <div className="absolute right-[12%] top-[15%] h-3 w-3 rounded-full bg-[#f58220]" />
// // //               <div className="absolute bottom-[20%] left-[10%] h-3 w-3 rounded-full bg-[#f58220]" />
// // //               <div className="absolute bottom-[10%] right-[20%] h-3 w-3 rounded-full bg-[#f58220]" />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= WHY CHOOSE US ================= */}

// // //       <section id="why-us" className="bg-white py-24 lg:py-32">
// // //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// // //           <div className="mb-16 max-w-3xl">
// // //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// // //               Why M. HOLLYFEET & SONS
// // //             </p>

// // //             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
// // //               A Reliable Partner for Your Business.
// // //             </h2>
// // //           </div>

// // //           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// // //             {strengths.map((strength) => {
// // //               const Icon = strength.icon;

// // //               return (
// // //                 <div
// // //                   key={strength.title}
// // //                   className="rounded-2xl border border-slate-200 p-7 transition hover:border-[#f58220]/50 hover:shadow-xl"
// // //                 >
// // //                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f58220]/10 text-[#f58220]">
// // //                     <Icon size={24} />
// // //                   </div>

// // //                   <h3 className="mt-6 text-xl font-black text-[#174d3c]">
// // //                     {strength.title}
// // //                   </h3>

// // //                   <p className="mt-3 text-sm leading-7 text-slate-600">
// // //                     {strength.description}
// // //                   </p>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= CTA ================= */}

// // //       <section className="bg-[#f58220] py-20">
// // //         <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
// // //           <div>
// // //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
// // //               Let's Work Together
// // //             </p>

// // //             <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
// // //               Looking for a Reliable Trading Partner?
// // //             </h2>
// // //           </div>

// // //           <a
// // //             href="#contact"
// // //             className="flex items-center gap-3 rounded-lg bg-[#174d3c] px-7 py-4 font-bold text-white transition hover:bg-[#123d30]"
// // //           >
// // //             Contact Our Team
// // //             <ArrowRight size={19} />
// // //           </a>
// // //         </div>
// // //       </section>

// // //       {/* ================= CONTACT ================= */}

// // //       <section id="contact" className="bg-slate-50 py-24 lg:py-32">
// // //         <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
// // //           <div>
// // //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// // //               Contact Us
// // //             </p>

// // //             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
// // //               Let's Start a Conversation.
// // //             </h2>

// // //             <p className="mt-6 max-w-xl leading-8 text-slate-600">
// // //               Whether you are looking for sourcing, trading, industrial
// // //               materials, or international indenting solutions, our team is
// // //               ready to discuss your business requirements.
// // //             </p>

// // //             <div className="mt-10 space-y-7">
// // //               <div className="flex gap-5">
// // //                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
// // //                   <MapPin size={22} />
// // //                 </div>

// // //                 <div>
// // //                   <h4 className="font-black text-[#174d3c]">Head Office</h4>

// // //                   <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
// // //                     181/C, Block # B, Lane # 6, P.A.F. Colony, Zarar Shaheed
// // //                     Road, Lahore Cantt.
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               <div className="flex gap-5">
// // //                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
// // //                   <Phone size={21} />
// // //                 </div>

// // //                 <div>
// // //                   <h4 className="font-black text-[#174d3c]">Phone</h4>

// // //                   <a
// // //                     href="tel:+92427600454"
// // //                     className="mt-2 block text-sm text-slate-600 transition hover:text-[#f58220]"
// // //                   >
// // //                     +92-42-7600454
// // //                   </a>
// // //                 </div>
// // //               </div>

// // //               <div className="flex gap-5">
// // //                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
// // //                   <Mail size={21} />
// // //                 </div>

// // //                 <div>
// // //                   <h4 className="font-black text-[#174d3c]">Email</h4>

// // //                   <a
// // //                     href="mailto:mholyfeet1@yahoo.com"
// // //                     className="mt-2 block text-sm text-slate-600 transition hover:text-[#f58220]"
// // //                   >
// // //                     mholyfeet1@yahoo.com
// // //                   </a>

// // //                   <a
// // //                     href="mailto:abdullahimtiaz40@gmail.com"
// // //                     className="mt-1 block text-sm text-slate-600 transition hover:text-[#f58220]"
// // //                   >
// // //                     abdullahimtiaz40@gmail.com
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Contact Form */}

// // //           <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
// // //             <h3 className="text-2xl font-black text-[#174d3c]">
// // //               Send Us a Message
// // //             </h3>

// // //             <p className="mt-2 text-sm text-slate-500">
// // //               Fill in your details and we will get back to you.
// // //             </p>

// // //             <form
// // //               onSubmit={(e) => {
// // //                 e.preventDefault();
// // //                 alert("Thank you! Your message has been submitted.");
// // //               }}
// // //               className="mt-8 space-y-5"
// // //             >
// // //               <div className="grid gap-5 sm:grid-cols-2">
// // //                 <div>
// // //                   <label className="mb-2 block text-sm font-bold text-slate-700">
// // //                     Full Name
// // //                   </label>

// // //                   <input
// // //                     type="text"
// // //                     placeholder="Your name"
// // //                     className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="mb-2 block text-sm font-bold text-slate-700">
// // //                     Company
// // //                   </label>

// // //                   <input
// // //                     type="text"
// // //                     placeholder="Company name"
// // //                     className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <label className="mb-2 block text-sm font-bold text-slate-700">
// // //                   Email Address
// // //                 </label>

// // //                 <input
// // //                   type="email"
// // //                   placeholder="you@company.com"
// // //                   className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="mb-2 block text-sm font-bold text-slate-700">
// // //                   Business Requirement
// // //                 </label>

// // //                 <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#f58220]">
// // //                   <option>Select an option</option>
// // //                   <option>Iron & Steel Scrap</option>
// // //                   <option>Ferro Alloys</option>
// // //                   <option>Skull Breaker (JAM)</option>
// // //                   <option>International Trade & Indenting</option>
// // //                   <option>Other</option>
// // //                 </select>
// // //               </div>

// // //               <div>
// // //                 <label className="mb-2 block text-sm font-bold text-slate-700">
// // //                   Message
// // //                 </label>

// // //                 <textarea
// // //                   rows={5}
// // //                   placeholder="Tell us about your requirement..."
// // //                   className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
// // //                 />
// // //               </div>

// // //               <button
// // //                 type="submit"
// // //                 className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#174d3c] px-6 py-4 font-bold text-white transition hover:bg-[#123d30]"
// // //               >
// // //                 Send Message
// // //                 <Send size={18} />
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= FOOTER ================= */}

   
// // //     </>
// // //   );
// // // }


// // "use client";

// // import { useState, useEffect, useRef, useCallback } from "react";
// // import Link from "next/link";
// // import {
// //   Menu,
// //   X,
// //   ArrowRight,
// //   ChevronLeft,
// //   ChevronRight,
// //   CheckCircle2,
// //   Globe2,
// //   Ship,
// //   Factory,
// //   Recycle,
// //   Handshake,
// //   ShieldCheck,
// //   BadgeDollarSign,
// //   Truck,
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Send,
// // } from "lucide-react";
// // import steelturing from '../public/assets/steel tuning.jpg'
// // import bluesteel from '../public/assets/blue steel.jpg'

// // import shreddedsteel from '../public/assets/shredded steel.jpg'

// // import rebarendcut from '../public/assets/rebarendcut.jpg'

// // import railwheel from '../public/assets/rail wheel.jpg'
// // import compressorscrap from '../public/assets/compressor scrap.jpeg'
// // import gibundles from '../public/assets/g.i bundles.jpeg'
// // import fabricationscrap from '../public/assets/fabrication scrap.jpeg'
// // import loosebushling from '../public/assets/loose bushling.jpeg'
// // import lmsbundle from '../public/assets/lms bundle.jpeg'
// // import motorscrap from '../public/assets/motor scrap.jpeg'



// // import Image from "next/image";
// // export default function Newmohyl() {
 
// //   const products = [
// //     {
// //       title: "Steel turning",
// //       description:
// //         "Reliable sourcing and trading of quality iron and steel scrap for industrial and commercial requirements.",
// //       icon: Recycle,
// //       number: "01",
// //       slug: "Steel Turning",
// //       image: steelturing,
// //     },
// //     {
// //       title: "Rail Wheels",
// //       description:
// //         "Supplying essential ferro alloy materials through trusted sourcing networks and professional trade operations.",
// //       icon: Factory,
// //       number: "02",
// //       slug: "Rail Wheel",
// //       image: railwheel,
// //     },
// //     {
// //       title: "Shredded Steel",
// //       description:
// //         "Professional handling and supply solutions for specialized industrial material requirements.",
// //       icon: ShieldCheck,
// //       number: "03",
// //  image: shreddedsteel,
// //     },
// //     {
// //       title: "Rebar-Endcut",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: rebarendcut,
// //     },
// //      {
// //       title: "Compressor Scrap",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: compressorscrap,
// //     },
// //       {
// //       title: "Fabrication Scrap",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: fabricationscrap,
// //     },
// //       {
// //       title: "Loose Bushling",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: loosebushling,
// //     },
// //       {
// //       title: "G.I Bundles",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: gibundles,
// //     },
// //       {
// //       title: "Lms Bundle",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: lmsbundle,
// //     },
// //       {
// //       title: "Blue Steel ",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: bluesteel,
// //     },
// //       {
// //       title: "Loose Bushling",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: loosebushling,
// //     },
// //       {
// //       title: "Motor Scrap",
// //       description:
// //         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
// //       icon: Ship,
// //       number: "04",
// //       slug: "international-trade-indenting",
// //     image: motorscrap,
// //     },
// //   ] as any ;

// //   const strengths = [
// //     {
// //       title: "Industry Experience",
// //       description:
// //         "Professional knowledge and practical experience in industrial materials and international trade.",
// //       icon: Factory,
// //     },
// //     {
// //       title: "Global Network",
// //       description:
// //         "Strong relationships with suppliers, buyers, and business partners across international markets.",
// //       icon: Globe2,
// //     },
// //     {
// //       title: "Quality Assurance",
// //       description:
// //         "Focused on reliable sourcing and maintaining quality standards throughout the trading process.",
// //       icon: ShieldCheck,
// //     },
// //     {
// //       title: "Competitive Pricing",
// //       description:
// //         "Market-focused solutions designed to deliver value and competitive commercial opportunities.",
// //       icon: BadgeDollarSign,
// //     },
// //     {
// //       title: "Efficient Logistics",
// //       description:
// //         "Professional coordination and handling to support smooth and efficient trade operations.",
// //       icon: Truck,
// //     },
// //     {
// //       title: "Long-Term Partnerships",
// //       description:
// //         "Building trusted and sustainable business relationships with clients and suppliers.",
// //       icon: Handshake,
// //     },
// //   ];

// //   // // ---------- Products carousel state/logic ----------
// //   // const carouselTrackRef = useRef<HTMLDivElement>(null);
// //   // const [isCarouselPaused, setIsCarouselPaused] = useState(false);

// //   // const scrollCarousel = useCallback((direction: "prev" | "next") => {
// //   //   const track = carouselTrackRef.current;
// //   //   if (!track) return;

// //   //   const firstCard = track.querySelector<HTMLElement>("[data-carousel-card]");
// //   //   const gap = 24; // matches gap-6 (1.5rem)
// //   //   const cardWidth = firstCard ? firstCard.offsetWidth + gap : track.clientWidth;

// //   //   const maxScrollLeft = track.scrollWidth - track.clientWidth;
// //   //   const atEnd = track.scrollLeft >= maxScrollLeft - 5;
// //   //   const atStart = track.scrollLeft <= 5;

// //   //   if (direction === "next") {
// //   //     if (atEnd) {
// //   //       track.scrollTo({ left: 0, behavior: "smooth" });
// //   //     } else {
// //   //       track.scrollBy({ left: cardWidth, behavior: "smooth" });
// //   //     }
// //   //   } else {
// //   //     if (atStart) {
// //   //       track.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
// //   //     } else {
// //   //       track.scrollBy({ left: -cardWidth, behavior: "smooth" });
// //   //     }
// //   //   }
// //   // }, []);

// //   // useEffect(() => {
// //   //   if (isCarouselPaused) return;

// //   //   const interval = setInterval(() => {
// //   //     scrollCarousel("next");
// //   //   }, 4000);

// //   //   return () => clearInterval(interval);
// //   // }, [isCarouselPaused, scrollCarousel]);


// //   // ---------- Products carousel state/logic ----------
// // const carouselTrackRef = useRef<HTMLDivElement>(null);
// // const animationRef = useRef<number | null>(null);
// // const [isCarouselPaused, setIsCarouselPaused] = useState(false);

// // useEffect(() => {
// //   const track = carouselTrackRef.current;
// //   if (!track || isCarouselPaused) return;

// //   const speed = 0.5; // Lower = slower, Higher = faster

// //   const animate = () => {
// //     if (!track) return;

// //     track.scrollLeft += speed;

// //     // When reaching the end, smoothly restart from the beginning
// //     if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
// //       track.scrollLeft = 0;
// //     }

// //     animationRef.current = requestAnimationFrame(animate);
// //   };

// //   animationRef.current = requestAnimationFrame(animate);

// //   return () => {
// //     if (animationRef.current) {
// //       cancelAnimationFrame(animationRef.current);
// //     }
// //   };
// // }, [isCarouselPaused]);

// // const scrollCarousel = useCallback((direction: "prev" | "next") => {
// //   const track = carouselTrackRef.current;
// //   if (!track) return;

// //   const firstCard = track.querySelector<HTMLElement>(
// //     "[data-carousel-card]"
// //   );

// //   const gap = 24;
// //   const cardWidth = firstCard
// //     ? firstCard.offsetWidth + gap
// //     : track.clientWidth;

// //   track.scrollBy({
// //     left: direction === "next" ? cardWidth : -cardWidth,
// //     behavior: "smooth",
// //   });
// // }, []);












// //   return (
// //     <>
     
// //       {/* ================= HERO ================= */}

// //       <section
// //         id="home"
// //         className="relative min-h-screen overflow-hidden bg-[#123d30] pt-20"
// //       >
// //         <div
// //           className="absolute inset-0 opacity-20"
// //           style={{
// //             backgroundImage:
// //               "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80')",
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //           }}
// //         />

// //         <div className="absolute inset-0 bg-gradient-to-r from-[#123d30] via-[#174d3c]/95 to-[#174d3c]/60" />

// //         <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#f58220]/30" />
// //         <div className="absolute -right-10 top-36 h-72 w-72 rounded-full border border-[#f58220]/20" />

// //         <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
// //           <div className="max-w-3xl">
// //             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f58220]/40 bg-[#f58220]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff9d48]">
// //               <span className="h-2 w-2 rounded-full bg-[#f58220]" />
// //               Trusted Industrial Trading Partner
// //             </div>

// //             <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
// //               Moving Industry.
// //               <span className="block text-[#f58220]">
// //                 Connecting Markets.
// //               </span>
// //               Building Trust.
// //             </h1>

// //             <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
// //               M. HOLLYFEET & SONS specializes in Iron & Steel Scrap, Ferro
// //               Alloys, Skull Breaker (JAM), and International Trade and
// //               Indenting solutions.
// //             </p>

// //             <div className="mt-9 flex flex-col gap-4 sm:flex-row">
// //               <a
// //                 href="#products"
// //                 className="group flex items-center justify-center gap-3 rounded-lg bg-[#f58220] px-7 py-4 font-bold text-white transition hover:bg-[#e87312]"
// //               >
// //                 Explore Our Products

// //                 <ArrowRight
// //                   size={19}
// //                   className="transition duration-300 group-hover:translate-x-1"
// //                 />
// //               </a>

// //               <a
// //                 href="#contact"
// //                 className="flex items-center justify-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#174d3c]"
// //               >
// //                 Contact Us
// //               </a>
// //             </div>

// //             <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-7">
// //               <div>
// //                 <p className="text-2xl font-black text-[#f58220]">Global</p>
// //                 <p className="mt-1 text-xs text-slate-300">Trade Network</p>
// //               </div>

// //               <div>
// //                 <p className="text-2xl font-black text-[#f58220]">Quality</p>
// //                 <p className="mt-1 text-xs text-slate-300">
// //                   Focused Solutions
// //                 </p>
// //               </div>

// //               <div>
// //                 <p className="text-2xl font-black text-[#f58220]">Trusted</p>
// //                 <p className="mt-1 text-xs text-slate-300">
// //                   Business Relations
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Card */}

// //           <div className="relative hidden lg:block">
// //             <div className="relative ml-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
// //               <div className="absolute -left-5 top-10 h-10 w-10 rounded-full bg-[#f58220]" />

// //               <div className="mb-8 flex items-center justify-between">
// //                 <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f58220]">
// //                   Our Business
// //                 </p>

// //                 <Globe2 className="text-white" />
// //               </div>

// //               <div className="space-y-4">
// //                 {products.map((product :any,index:any) => (
                  
// // index<=3 ? <>

// //                   <Link
// //                     key={product.title}
// //                     href={`/products/${product.slug}`}
// //                     className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#f58220]/60 hover:bg-white/10"
// //                   >
// //                     <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f58220] text-xs font-black text-white">
// //                       {product.number}
// //                     </span>

// //                     <p className="font-semibold text-white">{product.title}</p>

// //                     <ArrowRight
// //                       size={17}
// //                       className="ml-auto text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#f58220]"
// //                     />
// //                   </Link>
// // </> : <></>


// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= TRUST BAR ================= */}

// //       <section className="border-y border-slate-200 bg-slate-50">
// //         <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
// //           {[
// //             "Reliable Sourcing",
// //             "Global Trading",
// //             "Quality Focused",
// //             "Professional Service",
// //           ].map((item) => (
// //             <div
// //               key={item}
// //               className="flex items-center justify-center gap-3 px-5 py-7"
// //             >
// //               <CheckCircle2 size={19} className="text-[#f58220]" />

// //               <span className="text-sm font-bold text-[#174d3c]">
// //                 {item}
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ================= ABOUT ================= */}

// //       <section id="about" className="bg-white py-24 lg:py-32">
// //         <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
// //           <div className="relative">
// //             <div className="overflow-hidden rounded-2xl">
// //               <img
// //                 src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80"
// //                 alt="Industrial operations"
// //                 className="h-[500px] w-full object-cover"
// //               />
// //             </div>

// //             <div className="absolute -bottom-8 -right-2 max-w-xs rounded-2xl bg-[#174d3c] p-7 text-white shadow-2xl sm:-right-8">
// //               <Globe2 className="mb-4 text-[#f58220]" size={35} />

// //               <h3 className="text-xl font-black">
// //                 Connecting Local & Global Markets
// //               </h3>

// //               <p className="mt-3 text-sm leading-6 text-slate-300">
// //                 Building strong trade relationships through professionalism,
// //                 reliability, and market expertise.
// //               </p>
// //             </div>
// //           </div>

// //           <div>
// //             <div className="mb-5 flex items-center gap-3">
// //               <span className="h-[2px] w-10 bg-[#f58220]" />

// //               <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// //                 About Our Company
// //               </p>
// //             </div>

// //             <h2 className="text-4xl font-black leading-tight text-[#174d3c] sm:text-5xl">
// //               Built on Trust.
// //               <br />
// //               Driven by Trade.
// //             </h2>

// //             <p className="mt-7 text-base leading-8 text-slate-600">
// //               M. HOLLYFEET & SONS is focused on providing reliable trading,
// //               sourcing, and indenting solutions for industrial materials. We
// //               understand the importance of trust, quality, market knowledge,
// //               and professional coordination in every business transaction.
// //             </p>

// //             <p className="mt-5 text-base leading-8 text-slate-600">
// //               Through strong relationships and a professional approach, we aim
// //               to connect suppliers and buyers while creating long-term value
// //               for our business partners.
// //             </p>

// //             <div className="mt-9 grid gap-5 sm:grid-cols-2">
// //               {[
// //                 "Reliable Business Relationships",
// //                 "Professional Trade Handling",
// //                 "International Market Focus",
// //                 "Customer-Centered Approach",
// //               ].map((item) => (
// //                 <div key={item} className="flex items-center gap-3">
// //                   <CheckCircle2
// //                     className="shrink-0 text-[#f58220]"
// //                     size={20}
// //                   />

// //                   <span className="font-bold text-slate-700">{item}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             <a
// //               href="#contact"
// //               className="mt-10 inline-flex items-center gap-3 font-bold text-[#174d3c] transition hover:text-[#f58220]"
// //             >
// //               Start a Conversation
// //               <ArrowRight size={19} />
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= PRODUCTS (CAROUSEL) ================= */}

// //       <section id="products" className="bg-slate-50 py-24 lg:py-32">
// //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// //           <div className="mx-auto mb-16 max-w-3xl text-center">
// //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// //               What We Deal In
// //             </p>

// //             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
// //               Our Products & Services
// //             </h2>

// //             <p className="mt-5 leading-8 text-slate-600">
// //               Professional trading and sourcing solutions designed to meet the
// //               evolving requirements of industrial and international markets.
// //             </p>
// //           </div>

// //           {/* Carousel Wrapper */}
// //           <div
// //             className="relative"
// //             onMouseEnter={() => setIsCarouselPaused(true)}
// //             onMouseLeave={() => setIsCarouselPaused(false)}
// //           >
// //             {/* Prev Button */}
// //             <button
// //               type="button"
// //               onClick={() => scrollCarousel("prev")}
// //               aria-label="Previous products"
// //               className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition hover:bg-[#f58220] hover:text-white sm:flex"
// //             >
// //               <ChevronLeft size={22} />
// //             </button>

// //             {/* Next Button */}
// //             <button
// //               type="button"
// //               onClick={() => scrollCarousel("next")}
// //               aria-label="Next products"
// //               className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition hover:bg-[#f58220] hover:text-white sm:flex"
// //             >
// //               <ChevronRight size={22} />
// //             </button>

// //             {/* Scrollable Track */}
// //             <div
// //               ref={carouselTrackRef}
// //               className="carousel-track flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
// //               style={{ scrollbarWidth: "none" }}
// //             >
// //               {products.map((product: any) => {
// //                 return (
// //                   <div
// //                     key={product.title}
// //                     data-carousel-card
// //                     className="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-[#f58220] hover:shadow-2xl sm:w-[48%] lg:w-[calc(25%-18px)]"
// //                   >
// //                     {/* Product Image */}

// //                     <div className="relative h-52 w-full overflow-hidden">
// //                       <Image
// //                         src={product.image}
// //                         alt={product.title}
// //                         loading="lazy"
// //                         className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
// //                       />

// //                       {/* Image Overlay */}

// //                       <div className="absolute inset-0 " />

// //                       {/* Product Number */}

// //                       <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#174d3c] shadow-lg backdrop-blur-sm">
// //                         {product.number}
// //                       </div>
// //                     </div>

// //                     {/* Product Content */}

// //                     <div className="p-7">
// //                       <h3 className="text-xl font-black text-[#174d3c]">
// //                         {product.title}
// //                       </h3>

// //                       <p className="mt-4 text-sm leading-7 text-slate-600">
// //                         {product.description}
// //                       </p>

// //                       <Link
// //                         href={`/products/${product.slug}`}
// //                         className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f58220]"
// //                         aria-label={`Learn more about ${product.title}`}
// //                       >
// //                         Learn More

// //                         <ArrowRight
// //                           size={17}
// //                           className="transition duration-300 group-hover:translate-x-1"
// //                         />
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Hide scrollbar for the carousel track across browsers */}
// //         <style jsx>{`
// //           .carousel-track::-webkit-scrollbar {
// //             display: none;
// //           }
// //         `}</style>
// //       </section>

// //       {/* ================= GLOBAL REACH ================= */}

// //       <section
// //         id="global"
// //         className="relative overflow-hidden bg-[#174d3c] py-24 lg:py-32"
// //       >
// //         <div className="absolute inset-0 opacity-10">
// //           <div
// //             className="h-full w-full"
// //             style={{
// //               backgroundImage:
// //                 "url('https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=2000&q=80')",
// //               backgroundSize: "cover",
// //               backgroundPosition: "center",
// //             }}
// //           />
// //         </div>

// //         <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
// //           <div>
// //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// //               International Trading
// //             </p>

// //             <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
// //               Connecting Businesses
// //               <span className="block text-[#f58220]">Across Borders.</span>
// //             </h2>

// //             <p className="mt-7 max-w-xl leading-8 text-slate-300">
// //               Our international trade and indenting operations are designed to
// //               create strong connections between suppliers, manufacturers,
// //               buyers, and industrial markets.
// //             </p>

// //             <div className="mt-10 space-y-5">
// //               {[
// //                 "International Sourcing",
// //                 "Supplier & Buyer Coordination",
// //                 "Trade & Indenting Solutions",
// //                 "Professional Business Support",
// //               ].map((item) => (
// //                 <div key={item} className="flex items-center gap-4">
// //                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f58220]">
// //                     <CheckCircle2 size={18} className="text-white" />
// //                   </span>

// //                   <span className="font-semibold text-white">{item}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="relative">
// //             <div className="relative aspect-square max-w-lg rounded-full border border-white/10 p-8">
// //               <div className="flex h-full w-full items-center justify-center rounded-full border border-[#f58220]/30">
// //                 <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#f58220] shadow-[0_0_100px_rgba(245,130,32,0.3)]">
// //                   <Globe2 size={80} className="text-white" />
// //                 </div>
// //               </div>

// //               <div className="absolute left-[5%] top-[20%] h-3 w-3 rounded-full bg-[#f58220] shadow-[0_0_25px_#f58220]" />
// //               <div className="absolute right-[12%] top-[15%] h-3 w-3 rounded-full bg-[#f58220]" />
// //               <div className="absolute bottom-[20%] left-[10%] h-3 w-3 rounded-full bg-[#f58220]" />
// //               <div className="absolute bottom-[10%] right-[20%] h-3 w-3 rounded-full bg-[#f58220]" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= WHY CHOOSE US ================= */}

// //       <section id="why-us" className="bg-white py-24 lg:py-32">
// //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// //           <div className="mb-16 max-w-3xl">
// //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// //               Why M. HOLLYFEET & SONS
// //             </p>

// //             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
// //               A Reliable Partner for Your Business.
// //             </h2>
// //           </div>

// //           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //             {strengths.map((strength) => {
// //               const Icon = strength.icon;

// //               return (
// //                 <div
// //                   key={strength.title}
// //                   className="rounded-2xl border border-slate-200 p-7 transition hover:border-[#f58220]/50 hover:shadow-xl"
// //                 >
// //                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f58220]/10 text-[#f58220]">
// //                     <Icon size={24} />
// //                   </div>

// //                   <h3 className="mt-6 text-xl font-black text-[#174d3c]">
// //                     {strength.title}
// //                   </h3>

// //                   <p className="mt-3 text-sm leading-7 text-slate-600">
// //                     {strength.description}
// //                   </p>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= CTA ================= */}

// //       <section className="bg-[#f58220] py-20">
// //         <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
// //           <div>
// //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
// //               Let's Work Together
// //             </p>

// //             <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
// //               Looking for a Reliable Trading Partner?
// //             </h2>
// //           </div>

// //           <a
// //             href="#contact"
// //             className="flex items-center gap-3 rounded-lg bg-[#174d3c] px-7 py-4 font-bold text-white transition hover:bg-[#123d30]"
// //           >
// //             Contact Our Team
// //             <ArrowRight size={19} />
// //           </a>
// //         </div>
// //       </section>

// //       {/* ================= CONTACT ================= */}

// //       <section id="contact" className="bg-slate-50 py-24 lg:py-32">
// //         <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
// //           <div>
// //             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
// //               Contact Us
// //             </p>

// //             <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
// //               Let's Start a Conversation.
// //             </h2>

// //             <p className="mt-6 max-w-xl leading-8 text-slate-600">
// //               Whether you are looking for sourcing, trading, industrial
// //               materials, or international indenting solutions, our team is
// //               ready to discuss your business requirements.
// //             </p>

// //             <div className="mt-10 space-y-7">
// //               <div className="flex gap-5">
// //                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
// //                   <MapPin size={22} />
// //                 </div>

// //                 <div>
// //                   <h4 className="font-black text-[#174d3c]">Head Office</h4>

// //                   <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
// //                     181/C, Block # B, Lane # 6, P.A.F. Colony, Zarar Shaheed
// //                     Road, Lahore Cantt.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="flex gap-5">
// //                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
// //                   <Phone size={21} />
// //                 </div>

// //                 <div>
// //                   <h4 className="font-black text-[#174d3c]">Phone</h4>

// //                   <a
// //                     href="tel:+92427600454"
// //                     className="mt-2 block text-sm text-slate-600 transition hover:text-[#f58220]"
// //                   >
// //                     +92-42-7600454
// //                   </a>
// //                 </div>
// //               </div>

// //               <div className="flex gap-5">
// //                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
// //                   <Mail size={21} />
// //                 </div>

// //                 <div>
// //                   <h4 className="font-black text-[#174d3c]">Email</h4>

// //                   <a
// //                     href="mailto:mholyfeet1@yahoo.com"
// //                     className="mt-2 block text-sm text-slate-600 transition hover:text-[#f58220]"
// //                   >
// //                     mholyfeet1@yahoo.com
// //                   </a>

// //                   <a
// //                     href="mailto:abdullahimtiaz40@gmail.com"
// //                     className="mt-1 block text-sm text-slate-600 transition hover:text-[#f58220]"
// //                   >
// //                     abdullahimtiaz40@gmail.com
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact Form */}

// //           <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
// //             <h3 className="text-2xl font-black text-[#174d3c]">
// //               Send Us a Message
// //             </h3>

// //             <p className="mt-2 text-sm text-slate-500">
// //               Fill in your details and we will get back to you.
// //             </p>

// //             <form
// //               onSubmit={(e) => {
// //                 e.preventDefault();
// //                 alert("Thank you! Your message has been submitted.");
// //               }}
// //               className="mt-8 space-y-5"
// //             >
// //               <div className="grid gap-5 sm:grid-cols-2">
// //                 <div>
// //                   <label className="mb-2 block text-sm font-bold text-slate-700">
// //                     Full Name
// //                   </label>

// //                   <input
// //                     type="text"
// //                     placeholder="Your name"
// //                     className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="mb-2 block text-sm font-bold text-slate-700">
// //                     Company
// //                   </label>

// //                   <input
// //                     type="text"
// //                     placeholder="Company name"
// //                     className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <label className="mb-2 block text-sm font-bold text-slate-700">
// //                   Email Address
// //                 </label>

// //                 <input
// //                   type="email"
// //                   placeholder="you@company.com"
// //                   className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="mb-2 block text-sm font-bold text-slate-700">
// //                   Business Requirement
// //                 </label>

// //                 <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#f58220]">
// //                   <option>Select an option</option>
// //                   <option>Iron & Steel Scrap</option>
// //                   <option>Ferro Alloys</option>
// //                   <option>Skull Breaker (JAM)</option>
// //                   <option>International Trade & Indenting</option>
// //                   <option>Other</option>
// //                 </select>
// //               </div>

// //               <div>
// //                 <label className="mb-2 block text-sm font-bold text-slate-700">
// //                   Message
// //                 </label>

// //                 <textarea
// //                   rows={5}
// //                   placeholder="Tell us about your requirement..."
// //                   className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#174d3c] px-6 py-4 font-bold text-white transition hover:bg-[#123d30]"
// //               >
// //                 Send Message
// //                 <Send size={18} />
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= FOOTER ================= */}

   
// //     </>
// //   );
// // }



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
// import steelturing from '../public/assets/steel tuning.jpg'
// import bluesteel from '../public/assets/blue steel.jpg'

// import shreddedsteel from '../public/assets/shredded steel.jpg'

// import rebarendcut from '../public/assets/rebarendcut.jpg'

// import railwheel from '../public/assets/rail wheel.jpg'
// import compressorscrap from '../public/assets/compressor scrap.jpeg'
// import gibundles from '../public/assets/g.i bundles.jpeg'
// import fabricationscrap from '../public/assets/fabrication scrap.jpeg'
// import loosebushling from '../public/assets/loose bushling.jpeg'
// import lmsbundle from '../public/assets/lms bundle.jpeg'
// import motorscrap from '../public/assets/motor scrap.jpeg'



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
//  image: shreddedsteel,
//     },
//     {
//       title: "Rebar-Endcut",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: rebarendcut,
//     },
//      {
//       title: "Compressor Scrap",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: compressorscrap,
//     },
//       {
//       title: "Fabrication Scrap",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: fabricationscrap,
//     },
//       {
//       title: "Loose Bushling",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: loosebushling,
//     },
//       {
//       title: "G.I Bundles",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: gibundles,
//     },
//       {
//       title: "Lms Bundle",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: lmsbundle,
//     },
//       {
//       title: "Blue Steel ",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: bluesteel,
//     },
//       {
//       title: "Loose Bushling",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: loosebushling,
//     },
//       {
//       title: "Motor Scrap",
//       description:
//         "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
//       icon: Ship,
//       number: "04",
//       slug: "international-trade-indenting",
//     image: motorscrap,
//     },
//   ] as any ;

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

//     const speed = 0.5; // Lower = slower, Higher = faster

//     const animate = () => {
//       if (!track) return;

//       track.scrollLeft += speed;

//       // When reaching the end, smoothly restart from the beginning
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

//   return (
//     <>
     
//       {/* ================= HERO ================= */}

//       <section
//         id="home"
//         className="relative min-h-screen overflow-hidden bg-[#123d30] pt-20"
//       >
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#123d30] via-[#174d3c]/95 to-[#174d3c]/60" />

//         <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#f58220]/30" />
//         <div className="absolute -right-10 top-36 h-72 w-72 rounded-full border border-[#f58220]/20" />

//         <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
//           <div className="max-w-3xl">
//             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f58220]/40 bg-[#f58220]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff9d48]">
//               <span className="h-2 w-2 rounded-full bg-[#f58220]" />
//               Trusted Industrial Trading Partner
//             </div>

//             <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Moving Industry.
//               <span className="block text-[#f58220]">
//                 Connecting Markets.
//               </span>
//               Building Trust.
//             </h1>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
//               M. HOLLYFEET & SONS specializes in Iron & Steel Scrap, Ferro
//               Alloys, Skull Breaker (JAM), and International Trade and
//               Indenting solutions.
//             </p>
    
//             <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href="#products"
//                 className="group flex items-center justify-center gap-3 rounded-lg bg-[#f58220] px-7 py-4 font-bold text-white transition hover:bg-[#e87312]"
//               >
//                 Explore Our Products

//                 <ArrowRight
//                   size={19}
//                   className="transition duration-300 group-hover:translate-x-1"
//                 />
//               </a>

//               <a
//                 href="#contact"
//                 className="flex items-center justify-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#174d3c]"
//               >
//                 Contact Us
//               </a>
//             </div>

//             <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-7">
//               <div>
//                 <p className="text-2xl font-black text-[#f58220]">Global</p>
//                 <p className="mt-1 text-xs text-slate-300">Trade Network</p>
//               </div>

//               <div>
//                 <p className="text-2xl font-black text-[#f58220]">Quality</p>
//                 <p className="mt-1 text-xs text-slate-300">
//                   Focused Solutions
//                 </p>
//               </div>

//               <div>
//                 <p className="text-2xl font-black text-[#f58220]">Trusted</p>
//                 <p className="mt-1 text-xs text-slate-300">
//                   Business Relations
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Card */}

//           <div className="relative hidden lg:block">
//             <div className="relative ml-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
//               <div className="absolute -left-5 top-10 h-10 w-10 rounded-full bg-[#f58220]" />

//               <div className="mb-8 flex items-center justify-between">
//                 <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f58220]">
//                   Our Business
//                 </p>

//                 <Globe2 className="text-white" />
//               </div>

//               <div className="space-y-4">
//                 {products.map((product :any,index:any) => (
                  
// index<=3 ? <>

//                   <Link
//                     key={product.title}
//                     href={`/products/${product.slug}`}
//                     className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#f58220]/60 hover:bg-white/10"
//                   >
//                     <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f58220] text-xs font-black text-white">
//                       {product.number}
//                     </span>

//                     <p className="font-semibold text-white">{product.title}</p>

//                     <ArrowRight
//                       size={17}
//                       className="ml-auto text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#f58220]"
//                     />
//                   </Link>
// </> : <></>


//                 ))}
//               </div>
//             </div>
//           </div>
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
//                 src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80"
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
//               M. HOLLYFEET & SONS is focused on providing reliable trading,
//               sourcing, and indenting solutions for industrial materials. We
//               understand the importance of trust, quality, market knowledge,
//               and professional coordination in every business transaction.
//             </p>

//             <p className="mt-5 text-base leading-8 text-slate-600">
//               Through strong relationships and a professional approach, we aim
//               to connect suppliers and buyers while creating long-term value
//               for our business partners.
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
//             {/* Prev Button */}
//             <button
//               type="button"
//               onClick={() => scrollCarousel("prev")}
//               aria-label="Previous products"
//               className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition hover:bg-[#f58220] hover:text-white sm:flex"
//             >
//               <ChevronLeft size={22} />
//             </button>

//             {/* Next Button */}
//             <button
//               type="button"
//               onClick={() => scrollCarousel("next")}
//               aria-label="Next products"
//               className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition hover:bg-[#f58220] hover:text-white sm:flex"
//             >
//               <ChevronRight size={22} />
//             </button>

//             {/* Scrollable Track */}
//             <div
//               ref={carouselTrackRef}
//               className="carousel-track flex gap-6 overflow-x-auto pb-4"
//               style={{ scrollbarWidth: "none" }}
//             >
//               {products.map((product: any) => {
//                 return (
//                   <div
//                     key={product.title}
//                     data-carousel-card
//                     className="group relative w-[85%] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-[#f58220] hover:shadow-2xl sm:w-[48%] lg:w-[calc(25%-18px)]"
//                   >
//                     {/* Product Image */}

//                     <div className="relative h-52 w-full overflow-hidden">
//                       <Image
//                         src={product.image}
//                         alt={product.title}
//                         loading="lazy"
//                         className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                       />

//                       {/* Image Overlay */}

//                       <div className="absolute inset-0 " />

//                       {/* Product Number */}

//                       <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#174d3c] shadow-lg backdrop-blur-sm">
//                         {product.number}
//                       </div>
//                     </div>

//                     {/* Product Content */}

//                     <div className="p-7">
//                       <h3 className="text-xl font-black text-[#174d3c]">
//                         {product.title}
//                       </h3>

//                       <p className="mt-4 text-sm leading-7 text-slate-600">
//                         {product.description}
//                       </p>

//                       <Link
//                         href={`/products/${product.slug}`}
//                         className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f58220]"
//                         aria-label={`Learn more about ${product.title}`}
//                       >
//                         Learn More

//                         <ArrowRight
//                           size={17}
//                           className="transition duration-300 group-hover:translate-x-1"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Hide scrollbar for the carousel track across browsers */}
//         <style jsx>{`
//           .carousel-track::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//       </section>

//       {/* ================= GLOBAL REACH ================= */}

//       <section
//         id="global"
//         className="relative overflow-hidden bg-[#174d3c] py-24 lg:py-32"
//       >
//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="h-full w-full"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=2000&q=80')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//         </div>

//         <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
//           <div>
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
//               International Trading
//             </p>

//             <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
//               Connecting Businesses
//               <span className="block text-[#f58220]">Across Borders.</span>
//             </h2>

//             <p className="mt-7 max-w-xl leading-8 text-slate-300">
//               Our international trade and indenting operations are designed to
//               create strong connections between suppliers, manufacturers,
//               buyers, and industrial markets.
//             </p>

//             <div className="mt-10 space-y-5">
//               {[
//                 "International Sourcing",
//                 "Supplier & Buyer Coordination",
//                 "Trade & Indenting Solutions",
//                 "Professional Business Support",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-4">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f58220]">
//                     <CheckCircle2 size={18} className="text-white" />
//                   </span>

//                   <span className="font-semibold text-white">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative aspect-square max-w-lg rounded-full border border-white/10 p-8">
//               <div className="flex h-full w-full items-center justify-center rounded-full border border-[#f58220]/30">
//                 <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#f58220] shadow-[0_0_100px_rgba(245,130,32,0.3)]">
//                   <Globe2 size={80} className="text-white" />
//                 </div>
//               </div>

//               <div className="absolute left-[5%] top-[20%] h-3 w-3 rounded-full bg-[#f58220] shadow-[0_0_25px_#f58220]" />
//               <div className="absolute right-[12%] top-[15%] h-3 w-3 rounded-full bg-[#f58220]" />
//               <div className="absolute bottom-[20%] left-[10%] h-3 w-3 rounded-full bg-[#f58220]" />
//               <div className="absolute bottom-[10%] right-[20%] h-3 w-3 rounded-full bg-[#f58220]" />
//             </div>
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

//       {/* ================= FOOTER ================= */}

   
//     </>
//   );
// }
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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
import steelturing from '../public/assets/steel tuning.jpg'
import bluesteel from '../public/assets/blue steel.jpg'

import shreddedsteel from '../public/assets/shredded steel.jpg'

import rebarendcut from '../public/assets/rebarendcut.jpg'

import railwheel from '../public/assets/rail wheel.jpg'
import compressorscrap from '../public/assets/compressor scrap.jpeg'
import gibundles from '../public/assets/g.i bundles.jpeg'
import fabricationscrap from '../public/assets/fabrication scrap.jpeg'
import loosebushling from '../public/assets/loose bushling.jpeg'
import lmsbundle from '../public/assets/lms bundle.jpeg'
import motorscrap from '../public/assets/motor scrap.jpeg'



import Image from "next/image";
export default function Newmohyl() {
 
  const products = [
    {
      title: "Steel turning",
      description:
        "Reliable sourcing and trading of quality iron and steel scrap for industrial and commercial requirements.",
      icon: Recycle,
      number: "01",
      slug: "Steel Turning",
      image: steelturing,
    },
    {
      title: "Rail Wheels",
      description:
        "Supplying essential ferro alloy materials through trusted sourcing networks and professional trade operations.",
      icon: Factory,
      number: "02",
      slug: "Rail Wheel",
      image: railwheel,
    },
    {
      title: "Shredded Steel",
      description:
        "Professional handling and supply solutions for specialized industrial material requirements.",
      icon: ShieldCheck,
      number: "03",
 image: shreddedsteel,
    },
    {
      title: "Rebar-Endcut",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: rebarendcut,
    },
     {
      title: "Compressor Scrap",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: compressorscrap,
    },
      {
      title: "Fabrication Scrap",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: fabricationscrap,
    },
      {
      title: "Loose Bushling",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: loosebushling,
    },
      {
      title: "G.I Bundles",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: gibundles,
    },
      {
      title: "Lms Bundle",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: lmsbundle,
    },
      {
      title: "Blue Steel ",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: bluesteel,
    },
      {
      title: "Loose Bushling",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: loosebushling,
    },
      {
      title: "Motor Scrap",
      description:
        "Connecting buyers and suppliers through efficient international trade, sourcing, and indenting services.",
      icon: Ship,
      number: "04",
      slug: "international-trade-indenting",
    image: motorscrap,
    },
  ] as any ;

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

  // ---------- Products carousel state/logic ----------
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track || isCarouselPaused) return;

    const speed = 0.5; // Lower = slower, Higher = faster

    const animate = () => {
      if (!track) return;

      track.scrollLeft += speed;

      // When reaching the end, smoothly restart from the beginning
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
        track.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isCarouselPaused]);

  const scrollCarousel = useCallback((direction: "prev" | "next") => {
    const track = carouselTrackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>(
      "[data-carousel-card]"
    );

    const gap = 24;
    const cardWidth = firstCard
      ? firstCard.offsetWidth + gap
      : track.clientWidth;

    track.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
     
      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#123d30] pt-20"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#123d30] via-[#174d3c]/95 to-[#174d3c]/60" />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#f58220]/30" />
        <div className="absolute -right-10 top-36 h-72 w-72 rounded-full border border-[#f58220]/20" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f58220]/40 bg-[#f58220]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff9d48]">
              <span className="h-2 w-2 rounded-full bg-[#f58220]" />
              Trusted Industrial Trading Partner
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Moving Industry.
              <span className="block text-[#f58220]">
                Connecting Markets.
              </span>
              Building Trust.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              M. HOLLYFEET & SONS specializes in Iron & Steel Scrap, Ferro
              Alloys, Skull Breaker (JAM), and International Trade and
              Indenting solutions.
            </p>
    
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="group flex items-center justify-center gap-3 rounded-lg bg-[#f58220] px-7 py-4 font-bold text-white transition hover:bg-[#e87312]"
              >
                Explore Our Products

                <ArrowRight
                  size={19}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#174d3c]"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-7">
              <div>
                <p className="text-2xl font-black text-[#f58220]">Global</p>
                <p className="mt-1 text-xs text-slate-300">Trade Network</p>
              </div>

              <div>
                <p className="text-2xl font-black text-[#f58220]">Quality</p>
                <p className="mt-1 text-xs text-slate-300">
                  Focused Solutions
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-[#f58220]">Trusted</p>
                <p className="mt-1 text-xs text-slate-300">
                  Business Relations
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}

          <div className="relative hidden lg:block">
            <div className="relative ml-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
              <div className="absolute -left-5 top-10 h-10 w-10 rounded-full bg-[#f58220]" />

              <div className="mb-8 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f58220]">
                  Our Business
                </p>

                <Globe2 className="text-white" />
              </div>

              <div className="space-y-4">
                {products.map((product :any,index:any) => (
                  
index<=3 ? <>

                  <Link
                    key={product.title}
                    href={`/products/${product.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#f58220]/60 hover:bg-white/10"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f58220] text-xs font-black text-white">
                      {product.number}
                    </span>

                    <p className="font-semibold text-white">{product.title}</p>

                    <ArrowRight
                      size={17}
                      className="ml-auto text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#f58220]"
                    />
                  </Link>
</> : <></>


                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
          {[
            "Reliable Sourcing",
            "Global Trading",
            "Quality Focused",
            "Professional Service",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 px-5 py-7"
            >
              <CheckCircle2 size={19} className="text-[#f58220]" />

              <span className="text-sm font-bold text-[#174d3c]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial operations"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-2 max-w-xs rounded-2xl bg-[#174d3c] p-7 text-white shadow-2xl sm:-right-8">
              <Globe2 className="mb-4 text-[#f58220]" size={35} />

              <h3 className="text-xl font-black">
                Connecting Local & Global Markets
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Building strong trade relationships through professionalism,
                reliability, and market expertise.
              </p>
            </div>
          </div>

          <div>
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
              Founded in 2007, M. HOLLYFEET & SONS (Pvt.) Ltd. is a Lahore-based
              trading company specializing in ferrous and non-ferrous scrap. We
              source materials from established markets across the UK, Europe,
              Africa, South America, Canada, and the USA.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We supply large volumes of high-quality materials to buyers across
              Pakistan, with a strong focus on reliable sourcing, consistent
              quality, professional trade coordination, and long-term business
              relationships.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {[
                "Reliable Business Relationships",
                "Professional Trade Handling",
                "International Market Focus",
                "Customer-Centered Approach",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="shrink-0 text-[#f58220]"
                    size={20}
                  />

                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 font-bold text-[#174d3c] transition hover:text-[#f58220]"
            >
              Start a Conversation
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS (CAROUSEL) ================= */}

      <section id="products" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              What We Deal In
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
              Our Products & Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Professional trading and sourcing solutions designed to meet the
              evolving requirements of industrial and international markets.
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div
            className="relative"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              aria-label="Previous products"
              className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition hover:bg-[#f58220] hover:text-white sm:flex"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              aria-label="Next products"
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white p-3 text-[#174d3c] shadow-xl transition hover:bg-[#f58220] hover:text-white sm:flex"
            >
              <ChevronRight size={22} />
            </button>

            {/* Scrollable Track */}
            <div
              ref={carouselTrackRef}
              className="carousel-track flex gap-6 overflow-x-auto pb-4"
              style={{ scrollbarWidth: "none" }}
            >
              {products.map((product: any) => {
                return (
                  <div
                    key={product.title}
                    data-carousel-card
                    className="group relative w-[85%] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-[#f58220] hover:shadow-2xl sm:w-[48%] lg:w-[calc(25%-18px)]"
                  >
                    {/* Product Image */}

                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* Image Overlay */}

                      <div className="absolute inset-0 " />

                      {/* Product Number */}

                      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#174d3c] shadow-lg backdrop-blur-sm">
                        {product.number}
                      </div>
                    </div>

                    {/* Product Content */}

                    <div className="p-7">
                      <h3 className="text-xl font-black text-[#174d3c]">
                        {product.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {product.description}
                      </p>

                      <Link
                        href={`/products/${product.slug}`}
                        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f58220]"
                        aria-label={`Learn more about ${product.title}`}
                      >
                        Learn More

                        <ArrowRight
                          size={17}
                          className="transition duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hide scrollbar for the carousel track across browsers */}
        <style jsx>{`
          .carousel-track::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* ================= GLOBAL REACH ================= */}

      <section
        id="global"
        className="relative overflow-hidden bg-[#174d3c] py-24 lg:py-32"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              International Trading
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Connecting Businesses
              <span className="block text-[#f58220]">Across Borders.</span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-slate-300">
              Our international trade and indenting operations are designed to
              create strong connections between suppliers, manufacturers,
              buyers, and industrial markets.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "International Sourcing",
                "Supplier & Buyer Coordination",
                "Trade & Indenting Solutions",
                "Professional Business Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f58220]">
                    <CheckCircle2 size={18} className="text-white" />
                  </span>

                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-lg rounded-full border border-white/10 p-8">
              <div className="flex h-full w-full items-center justify-center rounded-full border border-[#f58220]/30">
                <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#f58220] shadow-[0_0_100px_rgba(245,130,32,0.3)]">
                  <Globe2 size={80} className="text-white" />
                </div>
              </div>

              <div className="absolute left-[5%] top-[20%] h-3 w-3 rounded-full bg-[#f58220] shadow-[0_0_25px_#f58220]" />
              <div className="absolute right-[12%] top-[15%] h-3 w-3 rounded-full bg-[#f58220]" />
              <div className="absolute bottom-[20%] left-[10%] h-3 w-3 rounded-full bg-[#f58220]" />
              <div className="absolute bottom-[10%] right-[20%] h-3 w-3 rounded-full bg-[#f58220]" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section id="why-us" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              Why M. HOLLYFEET & SONS
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
              A Reliable Partner for Your Business.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <div
                  key={strength.title}
                  className="rounded-2xl border border-slate-200 p-7 transition hover:border-[#f58220]/50 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f58220]/10 text-[#f58220]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#174d3c]">
                    {strength.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#f58220] py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Let's Work Together
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Looking for a Reliable Trading Partner?
            </h2>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-3 rounded-lg bg-[#174d3c] px-7 py-4 font-bold text-white transition hover:bg-[#123d30]"
          >
            Contact Our Team
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
              Let's Start a Conversation.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Whether you are looking for sourcing, trading, industrial
              materials, or international indenting solutions, our team is
              ready to discuss your business requirements.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174d3c] text-[#f58220]">
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
          </div>

          {/* Contact Form */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
            <h3 className="text-2xl font-black text-[#174d3c]">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Fill in your details and we will get back to you.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been submitted.");
              }}
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Business Requirement
                </label>

                <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#f58220]">
                  <option>Select an option</option>
                  <option>Iron & Steel Scrap</option>
                  <option>Ferro Alloys</option>
                  <option>Skull Breaker (JAM)</option>
                  <option>International Trade & Indenting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#f58220] focus:ring-4 focus:ring-[#f58220]/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#174d3c] px-6 py-4 font-bold text-white transition hover:bg-[#123d30]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

   
    </>
  );
}
