import Image from "next/image";
import React from "react";
import ABAIMG from '../../assets/image/ABA.webp';
import CriancasTerapia from '../../assets/image/CriancasTerapia.png';
import Consultorio from '../../assets/image/Consultório.png';

export default function ABA() {
  return (
    <main className="flex flex-col gap-12 md:gap-40 bg-[#F2F2F2]">
      <section className="relative w-full h-auto">
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
        <div className="absolute top-0 left-0 px-10 md:px-0 w-full h-full flex justify-center items-center">
          {/* Conteúdo centralizado horizontal e verticalmente */}
          <div className="flex md:flex-col flex-row gap-20 max-w-[1140px] w-full mx-auto space-y-4 text-center items-end"> 
            <div className="max-w-[540px] text-left flex flex-col gap-5">
            <h1 className="text-5xl text-white font-bold">
              Terapia ABA
            </h1>
            <p className="text-lg font-light text-white">
             Explorando o potencial da Análise do Comportamento Aplicada (ABA) com a Psicóloga Hellen Pereira, especializada em criar caminhos transformadores para crianças e adultos.
            </p>
            </div>
            <div className="flex md:flex-row flex-col bg-[#EED6D3]/80 items-center py-5 px-10 rounded-xl justify-between w-full">
              <div className="text-[#67595E] text-left flex flex-col gap-1">
                <h1 className="font-bold text-[36px]">Agende agora a sua consulta !</h1>
                <p className="text-[15px]">Atendemos com foco em autismo e desafios de comportamento através de sessões personalizadas.</p>
              </div>
              <button className="px-10 py-2 rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
                AGENDAR CONSULTA
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] flex flex-col md:flex-row gap-10 items-center">
          <div className="flex flex-col gap-3 text-[#67595E]">
            <span className="text-[26px]">Por que escolher a</span>
            <span className="text-4xl font-bold">Terapia ABA?</span>
            <span>A Terapia ABA é reconhecida mundialmente por sua eficácia no desenvolvimento de habilidades de comunicação, sociais, de aprendizado, e na redução de comportamentos desafiadores.</span>
            <span>Com abordagens baseadas em evidências, oferecemos um caminho personalizado para cada paciente, visando a melhoria contínua e uma vida mais plena e feliz.</span>
          </div>
          <Image
            src={CriancasTerapia}
            alt="Imagem Problemas Terapia Psicólogo"
            layout="responsive"
            quality={100}
          />
        </div>
      </section>
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] flex flex-col md:flex-row md:gap-16 gap-8 items-center justify-center">
          <div className="bg-[#EED6D3] ms:w-full w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">Desenvolvimento de Habilidades</h3>
            <p className="text-sm">Técnicas ABA focam no desenvolvimento de habilidades sociais, de comunicação e de vida diária, promovendo a independência.</p>
          </div>
          <div className="bg-[#EED6D3] ms:w-full w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">Intervenção Precoce</h3>
            <p className="text-sm">Intervenção ABA precoce pode resultar em melhorias significativas no comportamento e na aprendizagem de crianças com autismo.</p>
          </div>
          <div className="bg-[#EED6D3] ms:w-full w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">Suporte Familiar</h3>
            <p className="text-sm">Oferecemos suporte e orientação para famílias, ajudando na implementação de estratégias eficazes no dia a dia.</p>
          </div>
        </div>
      </section>
      <section className="text-[#67595E] px-10 md:px-0 flex justify-center w-full">
        <div className="w-[1140px] flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-6">Benefícios da Terapia ABA</h2>
          <div className="flex flex-wrap w-full justify-center items-center my-14">
            <div className="flex flex-col text-left gap-14 mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Melhoria da Comunicação</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Aumento das Habilidades Sociais</p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-14 mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Redução de Comportamentos Desafiadores</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Desenvolvimento de Habilidades de Vida Diária</p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-14 mx-auto">
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
          <div className="text-center">
            <p className="text-sm font-bold">E muitas outras melhorias...</p>
          </div>
        </div>
      </section>
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] flex md:flex-row flex-col gap-10 items-center">
          <div className="flex flex-col gap-3 text-[#67595E]">
            <span className="text-4xl font-bold">Agende Uma Consulta em Nosso Espaço</span>
            <span>Na região do Campo Limpo, em São Paulo, a Psicóloga Hellen E. Pereira recebe seus pacientes com dedicação e expertise. O atendimento é realizado de segunda a sexta, das 12h às 18h.</span>
            <button className="px-10 py-2 w-fit rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
              AGENDAR CONSULTA
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
      <section className="flex justify-center w-full bg-[#67595E] py-10">
        <div className="w-[1140px] flex flex-col gap-6 justify-center items-center">
          <h2 className="text-3xl text-white font-bold text-center">Entramos em contato para marcar sua consulta</h2>
          <button className="px-10 py-2 w-fit rounded-[20px] h-fit text-[#67595E] bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold">
            RECEBER LIGAÇÃO
          </button>
        </div>
      </section>

    </main>
  );
}
