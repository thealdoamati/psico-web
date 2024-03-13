import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/index";
import { Footer } from "@/components/Footer";
import { MobileHeader } from "@/components/MobileHeader";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className={`hidden md:block fixed top-0 z-30 w-full transition-all duration-500 ${scrolled ? 'shadow-md opacity-95 bg-white' : ''}`}>
        <Header />
      </div>
      <div className={`block md:hidden fixed top-0 z-30 w-full transition-all duration-500 ${scrolled ? 'shadow-md opacity-95 bg-white' : ''}`}>
        <MobileHeader />
      </div>
      <main className="flex-grow mt-14">
        {children}
      </main>
      <Footer />
    </div>
  )
}

