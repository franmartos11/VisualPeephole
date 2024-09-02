import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { NavbarDemo } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KZFPM2ML'); ` }}
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="Visual Peephole"></meta>
        <meta name="description" content="At Visual Peephole, we specialize in transforming your concepts into stunning visual realities. Whether you're an architect, real estate developer, or designer, our expert team offers a comprehensive range of services to bring your projects to life with exceptional clarity and detail."></meta>
        <meta name="keywords" content="3D Rendering Services,Exterior Renderings,Interior Renderings,3D Animations,BIM Solutions,3D Modeling Services,SolidWorks Rendering,Architectural Visualization,3D Visualization,High-Quality Renderings,Professional 3D Renders,3D Animation Production,BIM Modeling Solutions,3D Architectural Renderings,Realistic 3D Models,3D Rendering for Architects,3D Rendering for Real Estate,Advanced 3D Visualization,Virtual Reality Renders,Product Rendering Services,"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
      </head>
      <body className={inter.className}><NavbarDemo></NavbarDemo>
        {children}<Footer></Footer>
        </body>
    </html>
  );
}
