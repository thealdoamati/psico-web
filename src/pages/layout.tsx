import React from "react";
import { Header } from "../components/Header/index";
import { Footer } from "@/components/Footer";
import { MobileHeader } from "@/components/MobileHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <div className="hidden md:block">
      <Header />
    </div>
    <div className="block md:hidden">
      <MobileHeader />
    </div>
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
