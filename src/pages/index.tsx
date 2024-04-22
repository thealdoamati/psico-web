import Image from "next/image";
import React from "react";
import HomeIMG from '../assets/image/Home.png';
import HomeMobileIMG from '../assets/image/HomeMobile.png'
import ProblemasCognitivos from '../assets/image/ProblemasCognitivos.png';
import Consultorio from '../assets/image/Consultório.png';
import CriancasTerapia from '../assets/image/CriancasTerapia.png';
import { IoIosArrowForward } from 'react-icons/io';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-40 bg-[#F2F2F2]">
      <section className="relative w-full lg:h-auto">
        <div className="md:block hidden">
          <Image
            src={HomeIMG}
            alt="Imagem Terapia Psicólogo"
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
            src={HomeMobileIMG}
            alt="Imagem Terapia Psicólogo"
            layout="responsive"
            objectFit="cover"
            quality={100}
            className="w-full"
          />
        </div>
        <div className="absolute top-0 left-0 px-10 md:px-0 w-full h-full flex justify-center items-start mt-14 md:mt-0 md:items-center">
          {/* Conteúdo centralizado horizontal e verticalmente */}
          <div className="flex md:px-10 flex-col gap-4 lg:gap-10 md:max-w-[957px]  w-full mx-auto space-y-4 text-center items-start"> 
            
            <div className="flex gap-3 lg:gap-7 md:items-start flex-col bg-[#F2F2F2]/80 items-center py-8 lg:py-12 px-7 lg:px-20 rounded-3xl justify-between w-full">
              <div className="text-[#67595E] text-center md:text-left flex flex-col gap-3 lg:gap-4">
                <h1 className="text-[28px] lg:leading-[55px] lg:text-[42px] font-bold">
                Terapia ABA e <br/> Terapia Cognitiva
                </h1>
                <p className="text-[14px] lg:text-[18px] font-regular">
                  Na região do Campo Limpo, em São Paulo, a Psicóloga Hellen E. Pereira recebe seus pacientes com dedicação e expertise. O atendimento é realizado de segunda a sexta, das 12h às 18h.
                </p>
              </div>
              <button className="text-[12px] md:text-[16px] px-10 py-2 rounded-[20px] h-fit md:whitespace-nowrap text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
                <Link href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+ABA+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1" target="_blank" className="text-[12px] md:text-[16px] px-10 py-2 rounded-[20px] h-fit md:whitespace-nowrap text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
                  AGENDAR CONSULTA
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] md:px-10 flex flex-col md:flex-row gap-10 items-center">
          <Image
            src={ProblemasCognitivos}
            alt="Imagem Problemas Terapia Psicólogo"
            layout="responsive"
            quality={100}
            className="block md:hidden"
          />
          <div className="flex flex-col gap-0 md:gap-3 text-[#67595E]">
            <span className="text-[28px] md:text-[46px] md:leading-[50px] font-bold mb-4 md:mb-0">Terapia Cognitivo Compartamental</span>
            <span className="text-[14px] md:text-[16px]">Através de estratégias validadas, ajuda a reestruturar pensamentos negativos e comportamentos destrutivos, promovendo bem-estar e saúde mental duradouros.</span>
            <Link href='/terapia-cognitiva'>
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
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] md:px-10 flex flex-col md:flex-row gap-10 items-center">
          <Image
            src={CriancasTerapia}
            alt="Imagem Problemas Terapia Psicólogo"
            layout="responsive"
            quality={100}
          />
          <div className="flex flex-col gap-0 md:gap-2 text-[#67595E]">
            <span className="text-[28px] md:text-[46px] font-bold mb-4 md:mb-0">Terapia ABA</span>
            <span className="text-[14px] md:text-[16px]">Com abordagens baseadas em evidências, oferecemos um caminho personalizado para cada paciente, visando a melhoria contínua e uma vida mais plena e feliz.</span>
            <Link href='/aba'>
              <button className="mt-6 text-[12px] md:text-[16px] text-left hover:text-[#000000] transition duration-500 font-semibold flex items-center">              
                Saiba mais <IoIosArrowForward className="ml-2" />                
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] md:px-10 flex md:flex-row flex-col gap-10 items-center">
          <div className="flex flex-col gap-3 text-[#67595E]">
            <span className="text-[24px] md:text-[36px] font-bold">Agende Uma Consulta em Nosso Espaço</span>
            <span>Na região do Campo Limpo, em São Paulo, a Psicóloga Hellen E. Pereira recebe seus pacientes com dedicação e expertise. O atendimento é realizado de segunda a sexta, das 12h às 18h.</span>
            <button className="px-10 py-2 mt-4 w-full md:w-fit md:mx-0 mx-auto rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
              <Link href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+ABA+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1" target="_blank" className="text-[12px] md:text-[16px] px-10 py-2 rounded-[20px] h-fit md:whitespace-nowrap text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
                AGENDAR CONSULTA
              </Link>
            </button>
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
          <button className="px-10 py-2 w-fit rounded-[20px] h-fit text-[#67595E] bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold">
            <Link href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+ABA+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1" target="_blank" className="px-10 py-2 w-fit rounded-[20px] h-fit text-[#67595E] bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold">
              RECEBER LIGAÇÃO
            </Link>
          </button>
        </div>
      </section>

    </main>
  );
}
