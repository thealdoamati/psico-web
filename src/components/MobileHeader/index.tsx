import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logoHellen from "../../assets/logos/logo-hellen.svg";
import Link from "next/link";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className={`flex justify-center py-3 w-full ${isOpen ? "shadow-md" : ""} bg-[#ffffff]`}
    >
      <div className="max-w-[1140px] w-full px-10">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-[#67595E] transition duration-300 block text-center"
            >
              <Image
                quality={100}
                src={logoHellen}
                alt="Logo Psicóloga Hellen"
                width={210}
                height={50}
              />
            </Link>
            <button onClick={toggleMenu} className="text-[#67595E] md:hidden">
              <span className="text-2xl">☰</span>
            </button>
          </div>
          <div
            ref={menuRef}
            className={`flex-col py-5 md:flex md:flex-row md:items-center md:justify-center gap-7 ${isOpen ? "flex" : "hidden"}`}
          >
            {/* Adicione o evento onClick para chamar closeMenu em cada Link */}
            <div onClick={closeMenu}>
              <Link
                href="/"
                className="text-[#67595E] transition duration-300 block text-center"
              >
                INICIO
              </Link>
            </div>
            <div onClick={closeMenu}>
              <Link
                href="/terapia-cognitivo"
                className="text-[#67595E] transition duration-300 block text-center"
              >
                TERAPIA COGNITIVO
              </Link>
            </div>
            <div onClick={closeMenu}>
              <Link
                href="/aba"
                className="text-[#67595E] transition duration-300 block text-center"
              >
                ABA
              </Link>
            </div>
            <div onClick={closeMenu}>
              <Link
                href="/fale-conosco"
                className="text-[#67595E] transition duration-300 block text-center"
              >
                FALE CONOSCO
              </Link>
            </div>
            <div onClick={closeMenu}>
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B5511937698342&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1"
                target="_blank"
                className="btn_agendamento px-6 py-2 rounded-[20px] h-fit text-white bg-[#169244] hover:bg-[#137938] transition duration-500 block text-center"
              >
                Agendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
