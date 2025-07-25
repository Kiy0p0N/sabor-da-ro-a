import { useEffect, useState } from "react";

/**
 * Componente reutilizável de carrossel
 * Props:
 * - items: array de objetos com { id, image, text }
 */
function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Alterna o índice da imagem a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    }, 6000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [items.length]);

  return (
    <div className="relative my-2 h-64 w-full overflow-hidden shadow-lg md:h-[70dvh] md:rounded-lg">
      {/* Imagem de fundo com transição suave */}
      {items.map((item, index) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.text}
          className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Texto sobre a imagem */}
      <div className="absolute top-0 left-0 flex h-full w-full items-end justify-center p-4">
        <div className="bg-opacity-80 max-w-lg rounded-md bg-white p-4 text-center text-black shadow-md">
          <p className="text-lg font-semibold md:text-2xl">
            {items[currentIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
