import Image from "next/image";
import React from "react";
import logoHellen from "../../assets/logos/logo-hellen.svg";
import whatsappIcon from '../../assets/icons/whatsapp-icon.svg'
import locationIcon from '../../assets/icons/location-icon.svg'

export function Footer() {
  return (
    <div className="flex md:px-0 justify-center py-14 w-full bg-[#F2F2F2]">
      <div className="w-[1140px] px-10 flex flex-col gap-20">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row w-full text-[#67595E] justify-between">
          <div className="flex flex-col md:max-w-[300px] gap-1">
            <Image quality={100} src={logoHellen} alt="Logo Psicóloga Hellen" />
            <p className="text-sm">É formada em Psicologia. Pós graduanda em terapia cognitivo comportamental. Atua em consultório particular na área de Psicologia Clínica.</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="font-semibold">TERAPIA COGNITIVA</span>
            <button className="hover:text-[#5e5555] transition duration-300">Terapia Cognitiva</button>
            <button className="hover:text-[#5e5555] transition duration-300">ABA</button>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="font-semibold">ATENDIMENTO</span>
            <button className="hover:text-[#5e5555] transition duration-300 flex gap-2">
              <Image src={whatsappIcon} alt="Whatsapp Icon"/>+55 (11) 93769-8342
            </button>
            <button className="hover:text-[#5e5555] transition duration-300 flex gap-2 text-left">
              <Image src={locationIcon} alt="Whatsapp Icon"/>Estr. de Itapecerica, 2720 - Consultório 1<br />Campo Limpo, SP
            </button>
          </div>
        </div>
        <span className="text-[#67595E] flex text-sm justify-center">Copyright © 2024. Todos os direitos reservados</span>
      </div>
    </div>
  );
}
