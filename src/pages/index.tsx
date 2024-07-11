import Image from "next/image";
import React from "react";
import HomeIMG from "../assets/image/Home.png";
import HomeMobileIMG from "../assets/image/HomeMobile.png";
import ProblemasCognitivos from "../assets/image/ProblemasCognitivos.png";
import Consultorio from "../assets/image/Consultório.png";
import CriancasTerapia from "../assets/image/CriancasTerapia.png";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import HellenIMG1 from "../assets/image/HellenIMG1.png";
import whatsappIcon from "../assets/icons/whatsapp-icon-white.svg";
import LocationIcon from "../assets/icons/location-icon2.svg";
import CameraIcon from "../assets/icons/camera-icon.svg";
import FamilyIcon from "../assets/icons/family-icon.svg";
import { AgendeConsulta } from "@/components/Sections/AgendeConsulta";
import { handleAgendarConsultaClick, handleReceberLigacaoClick } from "@/utils/googleTag";

export default function Home() {
  return (
    <main className="flex flex-col md:gap-28 bg-[#ffffff]">
      <section className="w-full mb-5 py-10 md:bg-gradient-to-r pt-7 pb-14 md:py-14 from-[#FFFFFF] to-[#EED6D3]">
        {/* Conteúdo centralizado horizontal e verticalmente */}
        <div className="flex px-10 gap-10 md:gap-20 flex-col md:flex-row max-w-[1140px] justify-between items-center mx-auto">
          <div className="flex flex-col gap-5 lg:gap-4">
            <div className="text-[#67595E] text-center md:text-left flex flex-col gap-3 lg:gap-4">
              <h1 className="text-[22px] lg:leading-[45px] lg:text-[34px] font-bold">
                Marque sua Consulta para Terapia ABA e Terapia Cognitivo (TCC)
              </h1>
              <p className="text-[14px] lg:text-[16px] font-regular">
                Faça como outras pacientes, comece hoje seu caminho para a
                felicidade, marque sua consulta.
              </p>
            </div>
            <button onClick={handleAgendarConsultaClick} className="text-[12px] md:text-[16px] flex justify-center md:px-10 py-2 rounded-[20px] my-2 md:w-fit h-fit md:whitespace-nowrap text-white bg-[#00C449] hover:bg-[#137938] transition duration-500 font-semibold">
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B5511956558397&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
                target="_blank"
                className="btn_agendamento flex flex-row gap-3"
              >
                <Image src={whatsappIcon} alt="Whatsapp Icon" />
                AGENDAR CONSULTA
              </Link>
            </button>
            <div className="flex flex-col mt-2 gap-5">
              <div className="flex flex-row gap-3">
                <Image src={LocationIcon} alt="Location Icon" />
                <h3 className="text-[14px] lg:text-[15px] text-[#67595E] font-semibold">
                  Atendimento psicológico presencial (Vila Andrade/ SP)
                </h3>
              </div>
              <div className="flex flex-row gap-3">
                <Image src={CameraIcon} alt="Camera Icon" />
                <h3 className="text-[14px] lg:text-[15px] text-[#67595E] font-semibold">
                  Atendimento psicológico online (Terapia Online)
                </h3>
              </div>
              <div className="flex flex-row gap-3">
                <Image src={FamilyIcon} alt="Family Icon" />
                <h3 className="text-[14px] lg:text-[15px] text-[#67595E] font-semibold">
                  Adultos e crianças (até 7 anos)
                </h3>
              </div>
            </div>
          </div>

          <Image
            src={HellenIMG1}
            quality={100}
            width={370}
            height={370}
            alt="Psicóloga Hellen Pereira"
          />
        </div>
      </section>
      <section className="flex py-10 md:py-0 px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] md:px-10 flex flex-col md:flex-row gap-10 items-center">
          <Image
            src={ProblemasCognitivos}
            alt="Imagem Problemas Terapia Psicólogo"
            layout="responsive"
            quality={100}
            className="block md:hidden"
          />
          <div className="flex flex-col gap-0 md:gap-3 text-[#67595E]">
            <span className="text-[28px] md:text-[46px] md:leading-[50px] font-bold mb-4 md:mb-0">
              Terapia Cognitivo Comportamental
            </span>
            <span className="text-[14px] md:text-[16px]">
              Através de estratégias validadas, ajuda a reestruturar pensamentos
              negativos e comportamentos destrutivos, promovendo bem-estar e
              saúde mental duradouros.
            </span>
            <Link href="/terapia-cognitivo">
              <button className="mt-6 text-[12px] md:text-[16px] text-left hover:text-[#000000] transition duration-500 font-semibold flex items-center">
                Saiba mais <IoIosArrowForward className="ml-2" />
              </button>
            </Link>
          </div>
          <Image
            src={ProblemasCognitivos}
            alt="Imagem Problemas Terapia Psicólogo"
            layout="responsive"
            quality={100}
            className="md:block hidden"
          />
        </div>
      </section>
      <div>
        <section className="flex mb-10 md:mb-20 py-10 md:py-0 px-10 md:px-0 justify-center w-full">
          <div className="w-[1140px] md:px-10 flex flex-col md:flex-row gap-10 items-center">
            <Image
              src={CriancasTerapia}
              alt="Imagem Problemas Terapia Psicólogo"
              layout="responsive"
              quality={100}
            />
            <div className="flex flex-col gap-0 md:gap-2 text-[#67595E]">
              <span className="text-[28px] md:text-[46px] font-bold mb-4 md:mb-0">
                Terapia ABA
              </span>
              <span className="text-[14px] md:text-[16px]">
                Com abordagens baseadas em evidências, oferecemos um caminho
                personalizado para cada paciente, visando a melhoria contínua e
                uma vida mais plena e feliz.
              </span>
              <Link href="/aba">
                <button className="mt-6 text-[12px] md:text-[16px] text-left hover:text-[#000000] transition duration-500 font-semibold flex items-center">
                  Saiba mais <IoIosArrowForward className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </section>
        <AgendeConsulta />
        <section className="flex mt-10 justify-center px-10 w-full bg-[#67595E] py-10">
          <div className="w-[1140px] md:px-10 flex flex-col gap-6 justify-center items-center">
            <h2 className="text-[22px] md:text-[30px] text-white font-bold text-center">
              Entramos em contato para marcar sua consulta
            </h2>
            <button onClick={handleReceberLigacaoClick} className="px-10 py-2 w-fit rounded-[20px] h-fit text-[#67595E] whitespace-nowrap bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold">
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B5511956558397&text=Ol%C3%A1!+Gostaria+de+receber+ligação+para+marcar+uma+consulta+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
                target="_blank"
                className="btn_ligacao px-10 py-2 w-fit rounded-[20px] h-fit text-[#67595E] bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold"
              >
                RECEBER LIGAÇÃO
              </Link>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
