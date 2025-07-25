import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { pagePath } from "../utils/page-path";

import "../style/App.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // controla a animação (aberto/fechado)
  const [isVisible, setIsVisible] = useState(false); // controla se o menu está visível no DOM
  const navigate = useNavigate();

  // Função para abrir o menu
  const openMenu = () => {
    setIsVisible(true); // mostra o menu no DOM
    setMenuOpen(true); // ativa a animação de abertura
  };

  // Função para fechar o menu com atraso para permitir a animação
  const closeMenu = () => {
    setMenuOpen(false); // ativa a animação de fechamento
    setTimeout(() => {
      setIsVisible(false); // remove do DOM após a animação terminar
    }, 600); // mesmo tempo da duração da animação hideUp
  };

  // Alterna o estado do menu ao clicar no ícone
  const toggleMenu = () => {
    menuOpen ? closeMenu() : openMenu();
  };

  return (
    <>
      {/* Header */}
      <header className="my-2 flex h-auto w-full items-center border-y-1 border-black/20 px-3 py-2 md:justify-center md:px-0">
        <div className="flex w-full items-center md:w-5/6">
          {/* Logo */}
          <div className="flex-1/2">
            <div
              className="w-fit cursor-pointer duration-500 hover:opacity-70"
              onClick={() => {
                navigate("/");
                closeMenu();
              }}
            >
              <img src={Logo} alt="Logo" className="w-20 md:w-24" />
            </div>
          </div>

          {/* Botões de navagação */}
          <div className="hidden w-3xs justify-between md:flex">
            {pagePath.map((link) => (
              <p
                key={link.id}
                onClick={() => navigate(link.path)}
                className="cursor-pointer font-medium transition-colors duration-500 hover:text-orange-500"
              >
                {link.text}
              </p>
            ))}
          </div>

          {/* Botão do menu */}
          <div className="flex flex-1/2 justify-end md:hidden">
            <div
              className="w-fit cursor-pointer hover:opacity-50"
              onClick={toggleMenu}
            >
              {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </header>

      {/* Menu visível com animação de abrir/fechar */}
      {isVisible && (
        <div
          className={`absolute z-50 h-auto w-full bg-white pb-1 shadow-lg ${menuOpen ? "animate-reveal-down" : "animate-hide-up"}`}
        >
          {pagePath.map((link) => (
            <div
              key={link.id}
              onClick={() => {
                navigate(link.path); // navega para o link
                closeMenu(); // fecha o menu com animação
              }}
              className="border-b border-black/10 p-3"
            >
              <p className="cursor-pointer font-medium transition-colors duration-500 hover:text-orange-500">
                {link.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
