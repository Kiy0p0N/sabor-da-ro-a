import { useEffect, useState } from 'react';

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
                prevIndex === items.length - 1 ? 0 : prevIndex + 1
            );
        }, 10000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, [items.length]);

    return (
        <div className="w-full h-64 relative overflow-hidden shadow-lg my-2 md:h-[70dvh] md:rounded-lg">
            {/* Imagem de fundo com transição suave */}
            {items.map((item, index) => (
                <img
                    key={item.id}
                    src={item.image}
                    alt={item.text}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}

            {/* Texto sobre a imagem */}
            <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center p-4">
                <div className="bg-white bg-opacity-80 text-black p-4 rounded-md max-w-lg shadow-md text-center">
                    <p className="text-lg font-semibold">{items[currentIndex].text}</p>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
