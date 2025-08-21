import { useNavigate } from "react-router-dom";
import BarImage from "../assets/images/bar-frente.png";
import Button from "../components/Button";

function About() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-white py-2 pb-8">
      {/* Título */}
      <h1 className="mb-6 text-center text-3xl font-bold text-orange-800 md:mb-0 md:text-4xl">
        Sobre o Empório Sabor da Roça
      </h1>

      {/* Container principal */}
      <div className="grid w-full grid-cols-1 items-center gap-8 px-3 md:w-5/6 md:grid-cols-2 md:px-0">
        {/* Imagem */}
        <img
          src={BarImage}
          alt="Frente do bar"
          className="h-full w-full rounded-xl object-cover shadow-lg md:h-4/6"
        />

        {/* Texto */}
        <div className="flex flex-col gap-4 leading-relaxed text-gray-700">
          <p>
            O Empório Sabor da Roça tem uma história marcada pela tradição e
            acolhimento. Criado pelo sr. Pedrinho, sempre foi um ponto de
            encontro para os moradores de Cantagalo se reunirem, beberem e se
            divertirem.
          </p>

          <p>
            Com o passar dos anos, o bar foi alugado por outras pessoas, mas
            recentemente voltou a ser cuidado pela família. Hoje é administrado
            pelo Silvio, a Regiane e suas três filhas, mantendo o espírito
            acolhedor que sempre fez parte do lugar.
          </p>

          <p>
            Diferente de antigamente, o bar agora recebe visitantes de todo o
            Brasil que percorrem a famosa rota do Caminho da Fé. Um espaço que
            une tradição, boa comida e histórias que só a vida no interior pode
            proporcionar.
          </p>

          {/* Botão para o cardápio */}
          <div className="mt-2">
            <Button text="CARDÁPIO" onClick={() => navigate("/cardapio")} />
          </div>
        </div>
      </div>

      {/* Diferenciais */}
      <div className="mt-10 w-full max-w-4xl md:mt-0">
        <h2 className="mb-4 text-center text-2xl font-semibold text-orange-900">
          Por que visitar o Empório?
        </h2>
        <ul className="grid grid-cols-1 gap-4 px-3 text-center text-gray-700 md:grid-cols-3 md:px-0">
          <li className="flex items-center justify-center rounded-lg bg-orange-50 p-4 shadow-sm">
            🍻 Ambiente acolhedor e familiar
          </li>
          <li className="rounded-lg bg-orange-50 p-4 shadow-sm">
            🥟 Receitas tradicionais com ingredientes frescos
          </li>
          <li className="rounded-lg bg-orange-50 p-4 shadow-sm">
            🚶‍♂️ Ponto de parada para os viajantes do Caminho da Fé
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
