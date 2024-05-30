import Link from "next/link";
import whatsappIcon from "../../assets/icons/whatsapp-icon-white.svg";
import Image from "next/image";

export const AgendeConsulta = () => {
  return (
    <section className="flex px-10 md:px-0 bg-white justify-center w-full">
      <div className="w-[1140px] md:px-10 flex md:flex-row flex-col gap-10 items-center">
        <div className="flex flex-col gap-3 text-[#67595E]">
          <span className="text-[24px] md:text-[36px] font-bold">
            Agende Uma Consulta em Nosso Espaço
          </span>
          <span>
            Na região da Vila Andrade, em São Paulo, a Psicóloga Hellen E.
            Pereira recebe seus pacientes com dedicação e expertise. O
            atendimento é realizado de segunda a sexta, das 12h às 18h.
          </span>
          <button className="text-[12px] md:text-[16px] px-10 py-2 rounded-[20px] my-2 w-fit h-fit md:whitespace-nowrap text-white bg-[#169244] hover:bg-[#137938] transition duration-500 font-semibold">
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+de+ABA+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
              target="_blank"
              className="flex flex-row gap-3"
            >
              <Image src={whatsappIcon} alt="Whatsapp Icon" />
              AGENDAR CONSULTA
            </Link>
          </button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14620.730637465336!2d-46.7366238!3d-23.6336287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51b32f8ec3e9%3A0x9e3f5a2ca4f44bb4!2sPsic%C3%B3loga%20Infantil%20-%20Hellen%20Pereira!5e0!3m2!1spt-BR!2sbr!4v1717086922546!5m2!1spt-BR!2sbr"
          className="w-full sm:w-3/4 md:w-full lg:w-[1000px] h-[450px]"
        ></iframe>
      </div>
    </section>
  );
};
