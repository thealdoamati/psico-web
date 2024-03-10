import React from "react";
import { Header } from "../components/Header/index";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="h-screen">
    <Header />
    {children}
  </div>
);

export default Layout;
