import Image from "next/image";
import React from "react";
import ABAIMG from '../../assets/image/ABA.webp';
import ABAmobileIMG from '../../assets/image/ABAmobile.png';
import CriancasTerapia from '../../assets/image/CriancasTerapia.png';
import Consultorio from '../../assets/image/Consultório.png';
import Link from "next/link";

export default function ABA() {
  return (
    <main className="flex flex-col gap-16 md:gap-40 bg-[#F2F2F2]">
      <section className="flex px-10 mt-5 md:mt-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] md:px-10 flex md:flex-row flex-col gap-10 items-center">
          <div className="flex flex-col gap-3 text-[#67595E]">
            <span className="text-[24px] md:text-[36px] font-bold">Agende Uma Consulta em Nosso Espaço</span>
            <span>Na região do Campo Limpo, em São Paulo, a Psicóloga Hellen E. Pereira recebe seus pacientes com dedicação e expertise. O atendimento é realizado de segunda a sexta, das 12h às 18h.</span>
            <Link href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+ABA+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1" target="_blank" className="px-10 py-2 mt-4 w-full md:w-fit md:mx-0 mx-auto rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
              AGENDAR CONSULTA
            </Link>
          </div>
          <Image
            src={Consultorio}
            alt="Consultório Psicóloga Hellen Pereira"
            layout="responsive"
            height={519}
            width={561}
            quality={100}
          />
        </div>
      </section>
      <section className="flex justify-center px-10 w-full bg-[#67595E] py-10">
        <div className="w-[1140px] md:px-10 flex flex-col gap-6 justify-center items-center">
          <h2 className="text-[22px] md:text-[30px] text-white font-bold text-center">Entramos em contato para marcar sua consulta</h2>
          <Link href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+ABA+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1" target="_blank" className="px-10 py-2 w-fit rounded-[20px] h-fit text-[#67595E] bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold">
            RECEBER LIGAÇÃO
          </Link>
        </div>
      </section>

    </main>
  );
}
