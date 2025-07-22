import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { pagePath } from '../utils/page-path';

import '../style/App.css';

function Header () {
    const [menuOpen, setMenuOpen] = useState(false);       // controla a animação (aberto/fechado)
    const [isVisible, setIsVisible] = useState(false);     // controla se o menu está visível no DOM
    const navigate = useNavigate();

    // Função para abrir o menu
    const openMenu = () => {
        setIsVisible(true);    // mostra o menu no DOM
        setMenuOpen(true);     // ativa a animação de abertura
    };

    // Função para fechar o menu com atraso para permitir a animação
    const closeMenu = () => {
        setMenuOpen(false);    // ativa a animação de fechamento
        setTimeout(() => {
            setIsVisible(false);  // remove do DOM após a animação terminar
        }, 600); // mesmo tempo da duração da animação hideUp
    };

    // Alterna o estado do menu ao clicar no ícone
    const toggleMenu = () => {
        menuOpen ? closeMenu() : openMenu();
    };

    return (
        <>
            {/* Header */}
            <header className="w-full h-auto flex items-center my-2 py-2 px-3 border-y-1 border-black/20 md:px-0 md:justify-center">
                <div className="w-full flex items-center md:w-5/6">
                    {/* Logo */}
                    <div className="flex-1/2">
                        <div className='w-fit cursor-pointer hover:opacity-70 duration-500' onClick={() => {navigate("/"); closeMenu()}}>
                            <img src={Logo} alt="Logo" className='w-20 md:w-24' />
                        </div>
                    </div>

                    {/* Botões de navagação */}
                    <div className='hidden w-3xs md:flex justify-between'>
                        {pagePath.map((link) => (
                            <p
                                key={link.id}
                                onClick={() => navigate(link.path)}
                                className='font-medium cursor-pointer hover:text-orange-500 duration-500 transition-colors'
                            >
                                {link.text}
                            </p>
                        ))}
                    </div>

                    {/* Botão do menu */}
                    <div className="flex-1/2 flex justify-end md:hidden">
                        <div className='w-fit cursor-pointer hover:opacity-50' onClick={toggleMenu}>
                            {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu visível com animação de abrir/fechar */}
            {isVisible && (
                <div
                    className={`w-full h-auto pb-1 absolute bg-white shadow-lg z-50
                    ${menuOpen ? 'animate-reveal-down' : 'animate-hide-up'}`}
                >
                    {pagePath.map((link) => (
                        <div
                            key={link.id}
                            onClick={() => {
                                navigate(link.path);  // navega para o link
                                closeMenu();          // fecha o menu com animação
                            }}
                            className="p-3 border-b border-black/10 cursor-pointer hover:text-blue-400 duration-500 transition-colors"
                        >
                            <p>{link.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Header;
