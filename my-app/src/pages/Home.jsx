import { useNavigate } from "react-router-dom";

import Carousel from "../components/Carousel";
import Button from "../components/Button";
import { carousel } from "../utils/carousel";
import { apresentationText } from "../utils/apresentation";

import Cerveja from "../assets/images/cervejinha-gelada.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-white py-2">
      {/* Corpo principal */}
      <div className="flex w-full flex-col gap-4 md:w-5/6">
        {/* Carrossel */}
        <Carousel items={carousel} />

        {/* Container */}
        <div className="mb-8 flex flex-col gap-6 px-3 md:grid md:auto-rows-auto md:grid-cols-3 md:px-0">
          {/* Texto de apresentação */}
          <div className="col-start-2 col-end-4 row-start-1 row-end-1 mb-6">
            <h1 className="my-8 text-2xl font-semibold md:text-3xl">
              Bem vindo ao
              <br />
              <span className="text-3xl font-extrabold text-orange-800 md:text-5xl">
                Empório Sabor da Roça
              </span>
            </h1>

            {/* Linha estilizada */}
            <div className="relative my-6">
              <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-orange-800 via-black to-orange-800" />
            </div>

            {/* Texto */}
            <div className="mt-8 flex flex-col gap-4">
              {apresentationText.map((paragraph) => (
                <p className="leading-relaxed text-gray-600" key={paragraph.id}>
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex max-h-dvh w-full justify-start">
            <img
              src={Cerveja}
              alt="Cervejinha gelada"
              className="h-auto rounded-lg shadow-lg shadow-orange-200"
            />
          </div>

          {/* Botão */}
          <div className="col-start-2 col-end-3 row-start-2 row-end-3">
            <Button
              onClick={() => navigate("/cardapio")}
              text="SAIBA MAIS"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
