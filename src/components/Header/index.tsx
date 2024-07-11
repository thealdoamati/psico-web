import Image from "next/image";
import React from "react";
import logoHellen from "../../assets/logos/logo-hellen.svg";
import Link from "next/link";
import { handleAgendarConsultaClick } from "@/utils/googleTag";

export function Header() {
  return (
    <div className="flex justify-center py-3 w-full bg-[#ffffff]">
      <div className="w-[1140px] px-10">
        <div className="flex w-full items-center font-semibold text-[#67595E] justify-between">
          <Link href="/" passHref>
            <Image quality={100} src={logoHellen} alt="Logo Psicóloga Hellen" />
          </Link>
          <div className="flex items-center text-[12px] lg:text-[16px] justify-center gap-7">
            <Link href="/" passHref>
              <button className="hover:text-[#7a7272] transition duration-300">
                INICIO
              </button>
            </Link>
            <Link href="/terapia-cognitivo" passHref>
              <button className="hover:text-[#7a7272] transition duration-300">
                TERAPIA COGNITIVO
              </button>
            </Link>
            <Link href="/aba" passHref>
              <button className="hover:text-[#7a7272] transition duration-300">
                ABA
              </button>
            </Link>
            <Link href="/fale-conosco" passHref>
              <button className="hover:text-[#7a7272] transition duration-300">
                FALE CONOSCO
              </button>
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B5511956558397&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
              target="_blank"
            >
              <button onClick={handleAgendarConsultaClick} className="btn_agendamento px-6 py-2 rounded-[20px] h-fit text-white bg-[#00C449] hover:bg-[#137938] transition duration-500">
                Agendar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
