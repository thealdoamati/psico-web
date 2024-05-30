import Image from "next/image";
import React from "react";
import ABAIMG from "../../assets/image/ABA.webp";
import ABAmobileIMG from "../../assets/image/ABAmobile.png";
import CriancasTerapia from "../../assets/image/CriancasTerapia.png";
import Consultorio from "../../assets/image/Consultório.png";
import Link from "next/link";
import Head from "next/head";
import { AgendeConsulta } from "@/components/Sections/AgendeConsulta";

export default function ABA() {
  return (
    <main className="flex flex-col gap-10 mt-16 md:gap-20">
      <Head>
        <title>
          Agende uma Consulta | Psicóloga Hellen Pereira - Especialista em ABA e
          TCC
        </title>
        <meta
          name="description"
          content="Agende uma consulta com a Psicóloga Hellen Pereira, especialista em ABA e TCC, em São Paulo. Atendimento personalizado para promover o desenvolvimento e bem-estar."
        ></meta>
        <meta
          name="keywords"
          content="Agendamento de Consulta, Psicóloga em São Paulo, Hellen Pereira, Terapia ABA, Terapia Cognitivo-Comportamental, Atendimento Psicológico"
        ></meta>
        <meta
          property="og:title"
          content="Agende uma Consulta | Psicóloga Hellen Pereira"
        />
        <meta
          property="og:description"
          content="Marque sua consulta com a Psicóloga Hellen Pereira e comece sua jornada para uma melhor saúde mental através da Terapia ABA ou TCC em São Paulo."
        />
      </Head>
      <AgendeConsulta />
      <section className="flex justify-center px-10 w-full bg-[#67595E] py-10">
        <div className="w-[1140px] md:px-10 flex flex-col gap-6 justify-center items-center">
          <h2 className="text-[22px] md:text-[30px] text-white font-bold text-center">
            Entramos em contato para marcar sua consulta
          </h2>
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
            target="_blank"
            className="px-10 py-2 w-fit rounded-[20px] h-fit text-[#67595E] bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold"
          >
            RECEBER LIGAÇÃO
          </Link>
        </div>
      </section>
    </main>
  );
}
