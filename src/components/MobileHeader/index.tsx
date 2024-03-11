import Image from "next/image";
import React, { useState } from "react";
import logoHellen from "../../assets/logos/logo-hellen.svg";
import Link from "next/link";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center py-3 w-full bg-[#F2F2F2]">
      <div className="max-w-[1140px] w-full px-4">
        <div className="flex items-center justify-between">
          <Image quality={100} src={logoHellen} alt="Logo Psicóloga Hellen" width={100} height={50} />
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#67595E] hover:text-[#7a7272] md:hidden">
            <span className="text-2xl">☰</span>
          </button>
          <div className={`flex-col md:flex md:flex-row md:items-center md:justify-center gap-7 ${isOpen ? "flex" : "hidden"}`}>
            <Link href="/"><div className="hover:text-[#7a7272] transition duration-300 block text-center">INICIO</div></Link>
            <Link href="/terapia-cognitiva"><div className="hover:text-[#7a7272] transition duration-300 block text-center">TERAPIA COGNITIVA</div></Link>
            <Link href="/aba"><div className="hover:text-[#7a7272] transition duration-300 block text-center">ABA</div></Link>
            <Link href="/fale-conosco"><div className="hover:text-[#7a7272] transition duration-300 block text-center">FALE CONOSCO</div></Link>
            <Link href="/agendar"><div className="px-6 py-2 rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500 block text-center">Agendar</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
