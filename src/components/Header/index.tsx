import Image from "next/image";
import React from "react";
import logoHellen from "../../assets/logos/logo-hellen.svg";

export function Header() {
  return (
    <div className="flex justify-center py-3 w-full bg-[#F2F2F2]">
      <div className="w-[1140px]">
        <div className="flex w-full items-center font-semibold text-[#67595E] justify-between">
          <Image quality={100} src={logoHellen} alt="Logo Psicóloga Hellen" />
          <div className="flex gap-7">
          <button className="hover:text-[#7a7272] transition duration-300">INICIO</button>
          <button className="hover:text-[#7a7272] transition duration-300">TERAPIA COGNITIVA</button>
          <button className="hover:text-[#7a7272] transition duration-300">ABA</button>
          <button className="hover:text-[#7a7272] transition duration-300">FALE CONOSCO</button>
          <button className="px-6 py-2 rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500">Agendar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
