import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, MapPin, Phone, Ship } from "lucide-react";
import type { Metadata } from "next";
// import steelturing from "../public/assets/steel tuning.jpg";
import steelturing from "../../../public/assets/steel tuning.jpg"
import bluesteel from "../../../public/assets/blue steel.jpg";
import shreddedsteel from "../../../public/assets/shredded steel.jpg";
import rebarendcut from "../../../public/assets/rebarendcut.jpg";
import railwheel from "../../../public/assets/rail wheel.jpg";
import compressorscrap from "../../../public/assets/steel tuning.jpg";
import gibundles from "../../../public/assets/steel tuning.jpg";
import fabricationscrap from "../../../public/assets/steel tuning.jpg";
import loosebushling from "../../../public/assets/steel tuning.jpg";
import lmsbundle from "../../../public/assets/steel tuning.jpg";
import motorscrap from "../../../public/assets/steel tuning.jpg";


import Image from "next/image";



type ProductDetail = {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  relatedImages: { src: string; alt: string; title: string }[] | any;
  highlights: string[];
};

const products: Record<string, ProductDetail> = {
  "iron-steel-scrap": {
    title: "Iron & Steel Scrap",
    subtitle: "Reliable sourcing for industrial material requirements",
    description:
      "M. HOLLYFEET & SONS provides sourcing and trading solutions for iron and steel scrap, connecting industrial requirements with dependable market and supplier networks.",
    heroImage:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=88",
    relatedImages: [
      {
        src: steelturing,
        alt: "Steel Turing",
        title: "Steel Turing",
      },
      {
        src: railwheel,
        alt: "Rail Wheels",
        title: "Rail Wheels",
      },
      {
        src: rebarendcut,
        alt: "Rebar-Endcut",
        title: "Rebar-Endcut",
      },
      {
        src: shreddedsteel,
        alt: "Industrial material handling",
        title: "Shredded Steel",
      },
          {
        src: bluesteel,
        alt: "Blue Steel",
        title: "Blue Steel",
      },
  
    ],
    highlights: [
      "Reliable sourcing and supplier coordination",
      "Industrial and commercial material requirements",
      "Professional trade handling",
      "Quality-focused sourcing approach",
      "Efficient coordination across the supply process",
      "Long-term business relationship focus",
    ],
  },
  "ferro-alloys": {
    title: "Ferro Alloys",
    subtitle: "Essential alloy materials through trusted sourcing networks",
    description:
      "Professional sourcing and trade support for ferro alloy material requirements through established supplier and market relationships.",
    heroImage:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=2200&q=88",
    relatedImages: [],
    highlights: [],
  },
  "skull-breaker-jam": {
    title: "Skull Breaker (JAM)",
    subtitle: "Specialized industrial material supply solutions",
    description:
      "Professional handling and supply solutions for specialized industrial material requirements.",
    heroImage:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2200&q=88",
    relatedImages: [],
    highlights: [],
  },
  "international-trade-indenting": {
    title: "International Trade & Indenting",
    subtitle: "Connecting buyers and suppliers across international markets",
    description:
      "International sourcing, trade coordination, and indenting support designed to connect suppliers, manufacturers, buyers, and industrial markets.",
    heroImage:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=88",
    relatedImages: [],
    highlights: [],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  console.log('kokoko',slug)
  const product = products[slug];

  return {
    title: product ? `${product.title} | M. HOLLYFEET & SONS` : "Product | M. HOLLYFEET & SONS",
    description: product?.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product :any = products[slug]; 
console.log( 'ppppppppp', products[slug].subtitle as any )
  if (!product) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              Product Not Found
            </p>
            <h1 className="mt-4 text-4xl font-black text-[#174d3c]">
              This product page does not exist.
            </h1>
            <Link
              href="/#products"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#174d3c] px-6 py-4 font-bold text-white transition hover:bg-[#123d30]"
            >
              <ArrowLeft size={18} />
              Back to Products
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const isIronSteelScrap = slug === "iron-steel-scrap";

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/#home" className="flex items-center gap-3">
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
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["Home", "/#home"],
              ["About Us", "/#about"],
              ["Products", "/#products"],
              ["Global Reach", "/#global"],
              ["Why Choose Us", "/#why-us"],
              ["Contact", "/#contact"],
            ].map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#f58220]"
              >
                {name}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="hidden items-center gap-2 rounded-lg bg-[#174d3c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123d30] lg:flex"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      {/* ================= PRODUCT HERO ================= */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#123d30] pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${product.heroImage}")` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#123d30]/65" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#123d30] via-[#174d3c]/75 to-[#174d3c]/35" /> */}
        
        
        
        {/* opacity ki waja say upr wali line band ki hai aur nechay wali line chali hai  */}
        
        
        
        
        
        
        
        <div className="absolute inset-0 " />
        <div className="absolute -right-32 top-28 h-96 w-96 rounded-full border border-[#f58220]/30" />
        <div className="absolute -right-8 top-44 h-72 w-72 rounded-full border border-[#f58220]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
          <div className="max-w-4xl">
            <Link
               href="/#products"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/80 transition hover:text-[#f58220]"
            >
              <ArrowLeft size={17} />
              Back to Products
            </Link>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f58220]/40 bg-[#f58220]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffb36f]">
              <span className="h-2 w-2 rounded-full bg-[#f58220]" />
              Product & Service
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              {product.title}
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[#ff9d48] sm:text-2xl">
              {product.subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {product.description}
            </p>
          </div>
        </div>
      </section>

     

      {/* ================= RELATED IMAGES ================= */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58220]">
              Product Gallery
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#174d3c] sm:text-5xl">
              Related Industrial Images
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A visual overview related to {product.title.toLowerCase()} and
              the industrial environments in which these materials are sourced,
              handled, and traded.
            </p>
          </div>

          {product.relatedImages.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {product.relatedImages.map((image : any, index:any) => (
                <div
                  key={image.src}
                  className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#f58220] hover:shadow-2xl ${
                    index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                            >
                  <div className={`${index === 0 ? "h-80" : "h-64"} overflow-hidden`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <h3 className="font-black text-[#174d3c]">{image.title}</h3>
                    <ArrowRight
                      size={18}
                      className="text-[#f58220] transition duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) 
          
          
          
          : (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <p className="text-slate-600">
                Product gallery content can be added here using the same reusable
                image-card structure.
              </p>
            </div>
          )}
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
              Looking for {product.title} solutions?
            </h2>
          </div>

          <Link
            href="/#contact"
            className="flex items-center gap-3 rounded-lg bg-[#174d3c] px-7 py-4 font-bold text-white transition hover:bg-[#123d30]"
          >
            Contact Our Team
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* ================= CONTACT STRIP ================= */}
     

      {/* <footer className="bg-[#0b211a] py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} M. HOLLYFEET & SONS. All Rights Reserved.
      </footer> */}
    </main>
  );
}
