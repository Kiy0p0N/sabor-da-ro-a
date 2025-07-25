import { useEffect, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import Slider from "@mui/material/Slider";
import CloseIcon from "@mui/icons-material/Close";
import { optionsMenu } from "../utils/menu-options";
import SelectedItem from "./SelectedItem";

function MenuOptions() {
  const [filterOpen, setFilterOpen] = useState(false); // controla a animação (aberto/fechado)
  const [filterVisible, setFilterVisible] = useState(false); // controla se o filtro está no DOM
  const [selectedType, setSelectedType] = useState("todos");
  const [selectedItem, setSelectedItem] = useState(null); // item selecionado

  // Lista de tipos únicos para o filtro
  const types = ["todos", ...new Set(optionsMenu.map((item) => item.type))];

  // Controla a exibição e animação do filtro
  const toggleFilter = () => {
    if (filterOpen) {
      setFilterOpen(false);
      setTimeout(() => setFilterVisible(false), 600); // espera a animação terminar
    } else {
      setFilterVisible(true);
      setTimeout(() => setFilterOpen(true), 0); // ativa a animação suavemente
    }
  };

  const prices = optionsMenu.map((item) => parseFloat(item.price));
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  // Atualiza priceRange se os valores mudarem (por exemplo, ao mudar o tipo de produto)
  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Filtra os produtos por tipo e faixa de preço
  const filteredItems = optionsMenu.filter((item) => {
    const price = parseFloat(item.price);
    const matchesType = selectedType === "todos" || item.type === selectedType;
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    return matchesType && matchesPrice;
  });

  return (
    <div className="flex flex-col">
      {/* Ícone do filtro */}
      <div className="pb-2">
        <SortIcon
          onClick={toggleFilter}
          className="cursor-pointer duration-500 hover:opacity-50"
        />
      </div>

      {/* Filtro animado sobreposto */}
      {filterVisible && (
        <div
          className={`absolute left-0 z-10 flex w-9/10 flex-col gap-2 bg-white px-3 py-4 shadow-md lg:w-1/3 ${filterOpen ? "animate-slide-in" : "animate-slide-out"} `}
        >
          {/* Botão para fechar o filtro */}
          <div className="text-right">
            <CloseIcon
              onClick={toggleFilter}
              className="cursor-pointer duration-500 hover:opacity-50"
            />
          </div>

          {/* Filtros ativados */}
          <div className="flex flex-col border-b border-black/20 pb-3">
            <h3 className="mb-2 font-semibold text-gray-800">
              Filtros aplicados
            </h3>

            <div className="flex flex-wrap gap-4 text-sm">
              {/* Filtro por tipo */}
              <span className="rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-blue-700 shadow-sm">
                Tipo:{" "}
                <strong className="ml-1 capitalize">{selectedType}</strong>
              </span>

              {/* Filtro por preço */}
              <span className="rounded-full border border-green-300 bg-green-100 px-3 py-1 text-green-700 shadow-sm">
                Preço: <strong className="ml-1">R$ {priceRange[0]}</strong> a{" "}
                <strong>R$ {priceRange[1]}</strong>
              </span>
            </div>
          </div>

          {/* Filtros disponíveis */}
          <div className="flex max-h-96 w-full flex-col gap-1 overflow-x-hidden overflow-y-auto">
            {/* Tipo do item */}
            <div className="flex flex-col border-b border-black/20">
              <h3 className="font-medium">Tipo</h3>

              <div className="flex flex-col gap-0.5 px-2">
                {/* Opções de tipo */}
                {types.map((type) => (
                  <p
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className="cursor-pointer text-sm font-medium text-gray-600 hover:text-blue-700"
                  >
                    {type[0].toUpperCase() + type.slice(1)}
                  </p>
                ))}
              </div>
            </div>

            {/* Preços */}
            <div className="flex flex-col border-b border-black/20 pb-2">
              <h3 className="mb-2 font-medium">Preço</h3>

              <div className="pr-6 pl-3">
                <Slider
                  size="small"
                  value={priceRange}
                  onChange={(e, newValue) => setPriceRange(newValue)}
                  valueLabelDisplay="on"
                  min={minPrice}
                  max={maxPrice}
                  step={1}
                  sx={{
                    color: "#b91c1c",
                    "& .MuiSlider-thumb": {
                      borderRadius: "50%",
                    },
                  }}
                />
              </div>

              <div className="mt-1 flex justify-between text-sm text-gray-600">
                <span>R$ {priceRange[0]}</span>
                <span>R$ {priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cardápio */}
      <div className="mt-1 flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4 2xl:grid-cols-5">
        {/* Lista todos os itens */}
        {filteredItems.map((option) => (
          <div
            key={option.id}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 shadow-md duration-500 hover:scale-105 hover:opacity-50 md:flex-col md:p-10"
            onClick={() => setSelectedItem(option)}
          >
            {/* Imagem */}
            <div className="h-20 w-20 flex-shrink-0 md:w-full">
              <img
                src={option.image}
                alt={option.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex w-full flex-col justify-center md:items-center">
              <span className="w-full max-w-[160px] truncate overflow-hidden text-lg font-semibold whitespace-nowrap text-gray-800 md:text-center lg:text-xl">
                {option.name}
              </span>
              <span className="mt-1 text-sm text-gray-600 lg:text-lg">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(option.price)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Informações adicionais do item selecionado */}
      <SelectedItem item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default MenuOptions;
