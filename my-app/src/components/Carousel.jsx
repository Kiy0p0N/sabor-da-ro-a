import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  // Alterna o índice da imagem a cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div
      onClick={() => navigate("/cardapio")}
      className="relative my-2 h-64 w-full overflow-hidden shadow-lg md:h-[70dvh] md:rounded-lg"
    >
      {/* Imagem de fundo com transição suave + efeito de zoom */}
      {items.map((item, index) => (
        <motion.img
          key={item.id}
          src={item.image}
          alt={item.text}
          initial={{ opacity: 0, scale: 1 }}
          animate={
            index === currentIndex
              ? { opacity: 1, scale: 1.05 } // aproxima levemente
              : { opacity: 0, scale: 1 } // reseta ao sair
          }
          transition={{
            opacity: { duration: 1 }, // fade suave
            scale: { duration: 6, ease: "easeOut" }, // zoom ao longo dos 6s
          }}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      ))}

      {/* Texto sobre a imagem */}
      <div className="absolute top-0 left-0 flex h-full w-full items-end justify-center">
        <div className="rounded-md p-4 text-center text-white">
          <p className="text-3xl font-bold text-shadow-lg text-shadow-orange-400 md:text-2xl lg:text-5xl">
            {items[currentIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
