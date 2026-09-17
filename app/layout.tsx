// import type { Metadata } from "next";
// import "./globals.css";
// // import Footer from "./components/Footer";
// import Footer from "@/components/Footer/page";
// import Navbar from "@/components/Navbar.tsx/page";


// export const metadata: Metadata = {
//   title: "M. Hollyfeet & Sons | Industrial Trading Partner",
//   description:
//     "M. HOLLYFEET & SONS specializes in Iron & Steel Scrap, Ferro Alloys, Skull Breaker (JAM), and International Trade and Indenting solutions.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">    
//      <main className="overflow-hidden bg-white text-slate-900">        
//       <Navbar/>
//       <body>

//         {children}
     
//         <Footer/>
//       </body>
//       </main>
//     </html>
//   );
// }



import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar.tsx/page";

export const metadata: Metadata = {
  title: "M. Hollyfeet & Sons | Industrial Trading Partner",
  description:
    "M. HOLLYFEET & SONS specializes in Iron & Steel Scrap, Ferro Alloys, Skull Breaker (JAM), and International Trade and Indenting solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-white text-slate-900">
        <Navbar />
        <main className="overflow-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}