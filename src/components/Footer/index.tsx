import Image from "next/image";
import React from "react";
import logoHellen from "../../assets/logos/logo-hellen.svg";
import whatsappIcon from "../../assets/icons/whatsapp-icon.svg";
import locationIcon from "../../assets/icons/location-icon.svg";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex md:px-0 justify-center py-14 w-full bg-[#F2F2F2]">
      <div className="w-[1140px] px-10 flex flex-col gap-20">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row w-full text-[#67595E] justify-between">
          <div className="flex flex-col md:max-w-[300px] gap-1">
            <Image quality={100} src={logoHellen} alt="Logo Psicóloga Hellen" />
            <p className="text-sm">
              É formada em Psicologia. Pós graduanda em terapia cognitivo
              comportamental. Atua em consultório particular na área de
              Psicologia Clínica.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="font-semibold">TERAPIA COGNITIVA</span>
            <Link href="/terapia-cognitiva" passHref>
              <button className="hover:text-[#5e5555] transition duration-300">
                Terapia Cognitiva
              </button>
            </Link>
            <Link href="/aba" passHref>
              <button className="hover:text-[#5e5555] transition duration-300">
                ABA
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="font-semibold">ATENDIMENTO</span>
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
              target="_blank"
              className="hover:text-[#5e5555] transition duration-300 flex gap-2"
            >
              <Image src={whatsappIcon} alt="Whatsapp Icon" />
              +55 (11) 93769-8342
            </Link>
            <a
              href="https://maps.app.goo.gl/GpYFzy3guXjxdPus9"
              target="_blank"
              className="hover:text-[#5e5555] transition duration-300 flex gap-2 text-left"
            >
              <Image src={locationIcon} alt="Whatsapp Icon" />
              Av. Giovanni Gronchi 6195
              <br /> Vila Andrade, São Paulo - SP
              <br /> 05724-003
            </a>
          </div>
        </div>
        <span className="text-[#67595E] flex text-sm justify-center">
          Copyright © 2024. Todos os direitos reservados
        </span>
      </div>
    </div>
  );
}
