import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { pagePath } from "../utils/page-path";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header */}
      <header className="my-2 flex h-auto w-full items-center border-y border-black/20 px-3 py-2 md:justify-center md:px-0">
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

          {/* Navegação desktop */}
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

          {/* Botão menu mobile */}
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

      {/* Menu mobile animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute z-50 w-full overflow-hidden bg-white pb-1 shadow-lg"
          >
            {pagePath.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                onClick={() => {
                  navigate(link.path);
                  closeMenu();
                }}
                className="border-b border-black/10 p-3"
              >
                <p className="cursor-pointer font-medium transition-colors duration-500 hover:text-orange-500">
                  {link.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
