import Image from "next/image";
import React from "react";
import ABAIMG from "../../assets/image/ABA.webp";
import ABAmobileIMG from "../../assets/image/ABAmobile.png";
import CriancasTerapia from "../../assets/image/CriancasTerapia.png";
import Consultorio from "../../assets/image/Consultório.png";
import whatsappIcon from "../../assets/icons/whatsapp-icon-white.svg";
import Link from "next/link";
import Head from "next/head";
import { AgendeConsulta } from "@/components/Sections/AgendeConsulta";

export default function ABA() {
  return (
    <main className="flex flex-col gap-16 md:gap-40 bg-[#F2F2F2]">
      <Head>
        <title>Terapia ABA para Autismo | Psicóloga Hellen Pereira</title>
        <meta
          name="description"
          content="A Psicóloga Hellen Pereira é especialista em Terapia ABA para autismo e desafios comportamentais, oferecendo atendimento personalizado para crianças em São Paulo."
        ></meta>
        <meta
          name="keywords"
          content="Terapia ABA, Autismo, Psicóloga Hellen Pereira, Análise do Comportamento Aplicada, Desenvolvimento Infantil, São Paulo"
        ></meta>
        <meta
          property="og:title"
          content="Psicóloga Hellen Pereira | Terapia ABA para Autismo"
        />
        <meta
          property="og:description"
          content="Descubra como a Terapia ABA pela Psicóloga Hellen Pereira pode ajudar crianças com autismo a desenvolver habilidades de comunicação e comportamento em São Paulo."
        />
      </Head>
      <section className="relative w-full lg:h-auto">
        <div className="md:block hidden">
          <Image
            src={ABAIMG}
            alt="Imagem Terapia ABA Psicólogo com criança"
            layout="responsive"
            objectFit="cover"
            quality={100}
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
        <div className="block md:hidden">
          <Image
            src={ABAmobileIMG}
            alt="Imagem Terapia ABA Psicólogo com criança"
            layout="responsive"
            objectFit="cover"
            quality={100}
            className="w-full"
          />
        </div>
        <div className="absolute top-0 left-0 px-10 md:px-0 w-full h-full flex justify-center items-start mt-14 md:mt-0 md:items-center">
          {/* Conteúdo centralizado horizontal e verticalmente */}
          <div className="flex md:px-10 flex-col gap-4 lg:gap-20 max-w-[1140px] w-full mx-auto space-y-4 text-center items-end">
            <div className="max-w-[540px] text-left flex flex-col gap-2 md:gap-2">
              <h1 className="text-[28px] lg:text-[46px] text-white font-bold">
                Terapia ABA
              </h1>
              <p className="text-[14px] lg:text-[18px] font-light text-white">
                Explorando o potencial da Análise do Comportamento Aplicada
                (ABA) com a Psicóloga Hellen Pereira, especializada em criar
                caminhos transformadores para crianças.
              </p>
            </div>
            <div className="flex md:flex-row  gap-3 md:gap-0 flex-col bg-[#ffffff]/75 items-center py-8 lg:py-6 px-7 lg:px-10 rounded-xl justify-between w-full">
              <div className="text-[#574b4f] text-center md:text-left flex flex-col gap-3">
                <h1 className="font-bold text-[24px] leading-7 md:leading-0 lg:text-[32px]">
                  Agende agora a sua consulta !
                </h1>
                <p className="text-[14px] lg:text-[15px]">
                  Atendemos com foco em autismo e desafios de comportamento
                  através de sessões personalizadas.
                </p>
              </div>
              <button className="text-[10px] md:text-[16px] px-10 py-2 rounded-[20px] my-2 w-fit h-fit md:whitespace-nowrap text-white bg-[#00C449] hover:bg-[#137938] transition duration-500 font-semibold">
                <Link
                  href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+ABA+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
                  target="_blank"
                  className="btn_agendamento flex items-center flex-row gap-3"
                >
                  <Image src={whatsappIcon} alt="Whatsapp Icon" />
                  AGENDAR CONSULTA
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] md:px-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex flex-col gap-0 md:gap-2 text-[#67595E]">
            <span className="text-[22px] md:text-[26px]">
              Por que escolher a
            </span>
            <span className="text-[28px] md:text-[46px] font-bold mb-4 md:mb-0">
              Terapia ABA?
            </span>
            <span className="text-[14px] md:text-[16px] mb-2 md:mb-0">
              A Terapia ABA é reconhecida mundialmente por sua eficácia no
              desenvolvimento de habilidades de comunicação, sociais, de
              aprendizado, e na redução de comportamentos desafiadores.
            </span>
            <span className="text-[14px] md:text-[16px]">
              Com abordagens baseadas em evidências, oferecemos um caminho
              personalizado para cada paciente, visando a melhoria contínua e
              uma vida mais plena e feliz.
            </span>
          </div>
          <Image
            src={CriancasTerapia}
            alt="Imagem Problemas Terapia Psicólogo"
            layout="responsive"
            quality={100}
          />
        </div>
      </section>
      <section className="flex justify-center w-full">
        <div className="w-[1140px] px-10 flex flex-col md:flex-row md:gap-16 gap-8 items-center justify-center">
          <div className="bg-[#EED6D3] w-full lg:w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">
              Desenvolvimento de Habilidades
            </h3>
            <p className="text-sm">
              Técnicas ABA focam no desenvolvimento de habilidades sociais, de
              comunicação e de vida diária, promovendo a independência.
            </p>
          </div>
          <div className="bg-[#EED6D3] w-full lg:w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">
              Intervenção Precoce
            </h3>
            <p className="text-sm">
              Intervenção ABA precoce pode resultar em melhorias significativas
              no comportamento e na aprendizagem de crianças com autismo.
            </p>
          </div>
          <div className="bg-[#EED6D3] w-full lg:w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">Suporte Familiar</h3>
            <p className="text-sm">
              Oferecemos suporte e orientação para famílias, ajudando na
              implementação de estratégias eficazes no dia a dia.
            </p>
          </div>
        </div>
      </section>
      <section className="text-[#67595E] px-10 md:px-0 flex justify-center w-full">
        <div className="w-[1140px] md:px-10 flex flex-col items-start md:items-center">
          <h2 className="text-[24px] md:text-[30px] font-bold text-center mb-8">
            Benefícios da Terapia ABA
          </h2>
          <div className="flex flex-wrap w-full mx-4 md:mx-0 md:justify-center md:items-center gap-3 md:gap-0 mt-0 mb-3 md:my-14">
            <div className="flex flex-col text-left gap-3 md:gap-14 md:mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Melhoria da Comunicação</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">
                  Aumento das Habilidades Sociais
                </p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-3 md:gap-14 md:mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">
                  Redução de Comportamentos Desafiadores
                </p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">
                  Desenvolvimento de Habilidades de Vida Diária
                </p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-3 md:gap-14 md:mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Suporte para Famílias</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Treinamento de Autonomia</p>
              </li>
            </div>
          </div>
          <div className="text-center mx-4 md:mx-0">
            <p className="text-sm font-bold">E muitas outras melhorias...</p>
          </div>
        </div>
      </section>
      <div>
        <AgendeConsulta />
        <section className="flex justify-center px-10 w-full bg-[#67595E] py-10">
          <div className="w-[1140px] md:px-10 flex flex-col gap-6 justify-center items-center">
            <h2 className="text-[22px] md:text-[30px] text-white font-bold text-center">
              Entramos em contato para marcar sua consulta
            </h2>
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+ABA+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
              target="_blank"
              className="btn_ligacao px-10 py-2 w-fit whitespace-nowrap rounded-[20px] h-fit text-[#67595E] bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold"
            >
              RECEBER LIGAÇÃO
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
