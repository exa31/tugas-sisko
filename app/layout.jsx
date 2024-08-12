"use client";

import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import NavbarScroll from "@/components/NavbarScroll";

export default function RootLayout({ children }) {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
        console.log(window.scrollY);
      } else {
        setScroll(false);
        console.log(window.scrollY);
      }
    })
  });

  console.log(scroll);

  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 z-50 w-full md:static">
          <div className="">
            <Navbar />
          </div>
          <div className={scroll ? "fixed hidden lg:block w-full top-0 h-max duration-75 z-40 bg-white" : "hidden duration-75 h-0"}>
            <NavbarScroll />
          </div>
        </nav>
        <div className="w-full">
          {children}
        </div>
        <Footer />

      </body>
    </html >
  );
}
