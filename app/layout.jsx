"use client";

import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import NavbarScroll from "@/components/NavbarScroll";
import Search from "@/components/Search";
import SideCart from "@/components/SideCart";

export default function RootLayout({ children }) {

  const [scroll, setScroll] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleOpenSearch() {
    setIsOpenSearch(!isOpenSearch)
  }

  return (
    <html lang="en">
      <body>
        <nav onClick={() => setIsOpenCart(false)} className="sticky top-0 z-40 w-full md:static">
          {isOpenSearch &&
            <div className="fixed z-50">
              <Search handleOpenSearch={handleOpenSearch} />
            </div>
          }
          <Navbar isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} handleOpenSearch={handleOpenSearch} />
          <div className={scroll ? "fixed hidden lg:block w-full top-0 h-max duration-75 z-20 bg-white" : "hidden duration-75 h-0"}>
            <NavbarScroll isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} handleOpenSearch={handleOpenSearch} />
          </div>
        </nav>
        <div onClick={() => {
          setIsOpenCart(false)
        }} className="w-full">
          {children}
        </div>
        <div className='z-50'>
          <SideCart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
        </div>
        <Footer />

      </body>
    </html >
  );
}
