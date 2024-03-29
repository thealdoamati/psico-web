import Image from "next/image";
import React from "react";
import TerapiaIMG from '../../assets/image/Psicologa.webp';
import TerapiaMobileIMG from '../../assets/image/PsicologaMobile.png'
import ProblemasCognitivos from '../../assets/image/ProblemasCognitivos.png';
import Consultorio from '../../assets/image/Consultório.png';
import Link from "next/link";

export default function TerapiaCognitiva() {
  return (
    <main className="flex flex-col gap-16 md:gap-40 bg-[#F2F2F2]">
      <section className="relative w-full lg:h-auto">
        <div className="md:block hidden">
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
        </div>
        <div className="block md:hidden">
          <Image
            src={TerapiaMobileIMG}
            alt="Imagem Terapia Psicólogo"
            layout="responsive"
            objectFit="cover"
            quality={100}
            className="w-full"
          />
        </div>
        <div className="absolute top-0 left-0 px-10 md:px-0 w-full h-full flex justify-center items-start mt-14 md:mt-3 md:items-center">
          {/* Conteúdo centralizado horizontal e verticalmente */}
          <div className="flex md:px-10 flex-col gap-4 lg:gap-10 max-w-[1140px] w-full mx-auto space-y-4 text-center items-start"> 
            <div className="max-w-[540px] text-left flex flex-col gap-2 md:gap-5">
              <h1 className="text-[28px] lg:text-[46px] md:leading-[50px] text-white font-bold">
                Terapia Cognitivo Comportamental
              </h1>
              <p className="text-[14px] lg:text-[18px] font-regular md:font-light text-white">
                Descubra o poder da Terapia Cognitiva Comportamental (TCC) com a Psicóloga Hellen Pereira, especialista em desbloquear o potencial de sua mente.
              </p>
            </div>
            <div className="flex md:flex-row  gap-3 md:gap-0 flex-col bg-[#EED6D3]/80 items-center py-8 lg:py-6 px-7 lg:px-10 rounded-xl justify-between w-full">
              <div className="text-[#67595E] text-center md:text-left flex flex-col gap-3 md:gap-4">
                <h1 className="font-bold text-[24px] leading-7 md:leading-0 lg:text-[32px]">Agende agora sua consulta !</h1>
                <p className="text-[14px] lg:text-[15px]">A Psicóloga Hellen atende em consultório ou por telemedicina.</p>
              </div>
              <Link href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+TCC+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1" target="_blank" className="text-[12px] md:text-[16px] px-10 py-2 rounded-[20px] h-fit md:whitespace-nowrap text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
                AGENDAR CONSULTA
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] md:px-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex flex-col gap-0 md:gap-3 text-[#67595E]">
            <span className="text-[22px] md:text-[26px]">Por que escolher a</span>
            <span className="text-[28px] md:text-[46px] md:leading-[50px] font-bold mb-4 md:mb-0">Terapia Cognitivo Compartamental?</span>
            <span className="text-[14px] md:text-[16px] mb-2 md:mb-0">A Terapia Cognitiva Comportamental é uma forma eficaz de tratar uma variedade de problemas psicológicos.</span>
            <span className="text-[14px] md:text-[16px]">Através de estratégias validadas, ajuda a reestruturar pensamentos negativos e comportamentos destrutivos, promovendo bem-estar e saúde mental duradouros.</span>
          </div>
          <Image
            src={ProblemasCognitivos}
            alt="Imagem Problemas Terapia Psicólogo"
            layout="responsive"
            quality={100}
          />
        </div>
      </section>
      <section className="flex justify-center w-full">
        <div className="w-[1140px] px-10 flex flex-col md:flex-row md:gap-16 gap-8 items-center justify-center">
          <div className="bg-[#EED6D3] w-full lg:w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">Evidência e Eficiência</h3>
            <p className="text-sm">Tratamentos respaldados cientificamente para resultados comprovadamente eficazes.</p>
          </div>
          <div className="bg-[#EED6D3] w-full lg:w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">Transformador e Empoderador</h3>
            <p className="text-sm">Aprenda técnicas práticas para gerenciar ansiedade, depressão, estresse e outros desafios, capacitando-o a assumir o controle de sua vida.</p>
          </div>
          <div className="bg-[#EED6D3] w-full lg:w-[350px] flex flex-col gap-2 justify-center h-full text-[#67595E] text-center px-10 py-8 rounded-xl">
            <h3 className="font-bold text-md md:text-xl">Personalizado e Direcionado</h3>
            <p className="text-sm">Sessões moldadas para atender suas necessidades únicas e promover o desenvolvimento pessoal.</p>
          </div>
        </div>
      </section>
      <section className="text-[#67595E] px-10 md:px-0 flex justify-center w-full">
        <div className="w-[1140px] md:px-10 flex flex-col items-start md:items-center">
          <h2 className="text-[24px] md:text-[30px] font-bold text-center mb-8">Problemas Tratados pela TCC</h2>
          <div className="flex flex-wrap w-full mx-4 md:mx-0 md:justify-center md:items-center gap-3 md:gap-0 mt-0 mb-3 md:my-14">
            <div className="flex flex-col text-left gap-3 md:gap-14 md:mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Ansiedade</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Estresse</p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-3 md:gap-14 md:mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Problemas de Relacionamento</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Baixa autoestima</p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-3 md:gap-14 md:mx-auto">
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Depressão</p>
              </li>
              <li className="flex items-center">
                <span className="inline-block mr-2 w-2 h-2 bg-[#67595E] rounded-full"></span>
                <p className="text-sm font-bold">Procrastinação</p>
              </li>
            </div>
            <div className="flex flex-col text-left gap-3 md:gap-14 md:mx-auto">
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
          <div className="text-center mx-4 md:mx-0">
            <p className="text-sm font-bold">E muitas mais...</p>
          </div>
        </div>
      </section>
      <section className="flex px-10 md:px-0 justify-center w-full">
        <div className="w-[1140px] md:px-10 flex md:flex-row flex-col gap-10 items-center">
          <div className="flex flex-col gap-3 text-[#67595E]">
            <span className="text-[24px] md:text-[36px] font-bold">Agende Uma Consulta em Nosso Espaço</span>
            <span>Na região do Campo Limpo, em São Paulo, a Psicóloga Hellen E. Pereira recebe seus pacientes com dedicação e expertise. O atendimento é realizado de segunda a sexta, das 12h às 18h.</span>
            <Link href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+TCC+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1" target="_blank" className="px-10 py-2 mt-4 w-full md:w-fit md:mx-0 mx-auto rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
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
          <Link href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+TCC+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1" target="_blank" className="px-10 py-2 w-fit rounded-[20px] h-fit text-[#67595E] bg-white hover:bg-[#f7eef1] transition duration-500 font-semibold">
            RECEBER LIGAÇÃO
          </Link>
        </div>
      </section>

    </main>
  );
}
