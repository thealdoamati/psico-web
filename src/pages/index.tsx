import Image from "next/image";
import React from "react";
import TerapiaIMG from '../assets/image/Psicologa.webp';
import ProblemasCognitivos from '../assets/image/ProblemasCognitivos.png';

export default function Home() {
  return (
    <main className="flex flex-col gap-10 bg-[#F2F2F2]">
    <section className="relative w-full h-auto">
      <Image
        src={TerapiaIMG}
        alt="Imagem Terapia Psicólogo"
        layout="responsive"
        objectFit="cover"
        quality={100}
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {/* Conteúdo centralizado horizontal e verticalmente */}
        <div className="flex flex-col gap-14 max-w-[1140px] w-full mx-auto space-y-4 text-center"> 
          <div className="max-w-[540px] text-left flex flex-col gap-5">
          <h1 className="text-5xl text-white font-bold">
            Terapia Cognitivo Comportamental
          </h1>
          <p className="text-lg font-light text-white">
            Descubra o poder da Terapia Cognitiva Comportamental (TCC) com a Psicóloga Hellen Pereira, especialista em desbloquear o potencial de sua mente.
          </p>
          </div>
          <div className="flex bg-[#EED6D3]/80 items-center py-5 px-10 rounded-xl justify-between w-full">
            <div className="text-[#67595E] text-left flex flex-col gap-1">
              <h1 className="font-bold text-[36px]">Agende agora sua consulta !</h1>
              <p className="text-[15px]">A Psicóloga Hellen atende em consultório ou por telemedicina.</p>
            </div>
            <button className="px-10 py-2 rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="flex justify-center w-full">
      <div className="w-[1140px] flex gap-10 items-center">
        <Image
          src={ProblemasCognitivos}
          alt="Imagem Problemas Terapia Psicólogo"
          quality={100}
        />
        <div className="flex flex-col gap-3 text-[#67595E]">
          <span className="text-[26px]">Por que escolher a</span>
          <span className="text-4xl font-bold">Terapia Cognitivo Compartamental?</span>
          <span>A Terapia Cognitiva Comportamental é uma forma eficaz de tratar uma variedade de problemas psicológicos.</span>
          <span>Através de estratégias validadas, ajuda a reestruturar pensamentos negativos e comportamentos destrutivos, promovendo bem-estar e saúde mental duradouros.</span>
        </div>
      </div>
    </section>
    </main>
  );
}
