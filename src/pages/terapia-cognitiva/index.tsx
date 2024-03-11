import Image from "next/image";
import React from "react";
import TerapiaIMG from '../../assets/image/Psicologa.webp';
import ProblemasCognitivos from '../../assets/image/ProblemasCognitivos.png';
import Consultorio from '../../assets/image/Consultório.png';

export default function TerapiaCognitiva() {
  return (
    <main className="flex flex-col gap-40 bg-[#F2F2F2]">
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
                AGENDAR CONSULTA
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
      <section className="flex justify-center w-full">
        <div className="w-[1140px] flex gap-16 items-center">
          <div className="bg-[#EED6D3]  min-w-[350px] flex flex-col justify-center gap-2 h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-xl">Evidência<br /> e Eficiência</h3>
            <p className="text-sm">Tratamentos respaldados cientificamente para resultados comprovadamente eficazes.</p>
          </div>
          <div className="bg-[#EED6D3] min-w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-xl">Transformador<br /> e Empoderador</h3>
            <p className="text-sm">Aprenda técnicas práticas para gerenciar ansiedade, depressão, estresse e outros desafios, capacitando-o a assumir o controle de sua vida.</p>
          </div>
          <div className="bg-[#EED6D3] min-w-[350px]  flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-xl">Personalizado<br /> e Direcionado</h3>
            <p className="text-sm">Sessões moldadas para atender suas necessidades únicas e promover o desenvolvimento pessoal.</p>
          </div>
        </div>
      </section>
      <section className="text-[#67595E] flex justify-center w-ful">
        <div className="w-[1140px] flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-6">Problemas Tratados pela TCC</h2>
          <div className="flex flex-wrap w-full justify-center items-center my-14">
            <div className="flex flex-col text-left gap-14 mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Ansiedade</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Depressão</p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-14 mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Problemas de Relacionamento</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Baixa autoestima</p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-14 mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Depressão</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Procrastinação</p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-14 mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Transtorno de Humor</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Fobias Específicas</p>
              </li>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold">E muito mais...</p>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full">
        <div className="w-[1140px] flex gap-10 items-center">
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
