import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SortIcon from "@mui/icons-material/Sort";
import Slider from "@mui/material/Slider";
import CloseIcon from "@mui/icons-material/Close";

import { optionsMenu } from "../utils/menu-options";
import SelectedItem from "./SelectedItem";

function MenuOptions() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("todos");
  const [selectedItem, setSelectedItem] = useState(null);

  const types = ["todos", ...new Set(optionsMenu.map((item) => item.type))];

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const prices = optionsMenu.map((item) => parseFloat(item.price));
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const filteredItems = optionsMenu.filter((item) => {
    const price = parseFloat(item.price);
    const matchesType = selectedType === "todos" || item.type === selectedType;
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    return matchesType && matchesPrice;
  });

  return (
    <div className="flex flex-col">
      {/* Botão do filtro */}
      <div className="pb-2">
        <SortIcon
          onClick={toggleFilter}
          className="cursor-pointer duration-500 hover:opacity-50"
        />
      </div>

      {/* Filtro com animação */}
      <AnimatePresence>
        {filterOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute left-0 z-10 flex w-9/10 flex-col gap-2 bg-white px-3 py-4 shadow-lg lg:w-1/3"
          >
            {/* Fechar */}
            <div className="text-right">
              <CloseIcon
                onClick={toggleFilter}
                className="cursor-pointer duration-500 hover:opacity-50"
              />
            </div>

            {/* Filtros aplicados */}
            <div className="flex flex-col border-b border-black/20 pb-3">
              <h3 className="mb-2 font-semibold text-gray-800">
                Filtros aplicados
              </h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-blue-700 shadow-sm">
                  Tipo:{" "}
                  <strong className="ml-1 capitalize">{selectedType}</strong>
                </span>
                <span className="rounded-full border border-green-300 bg-green-100 px-3 py-1 text-green-700 shadow-sm">
                  Preço: <strong className="ml-1">R$ {priceRange[0]}</strong> a{" "}
                  <strong>R$ {priceRange[1]}</strong>
                </span>
              </div>
            </div>

            {/* Tipo */}
            <div className="flex flex-col border-b border-black/20">
              <h3 className="font-medium">Tipo</h3>
              <div className="flex flex-col gap-0.5 px-2">
                {types.map((type) => (
                  <motion.p
                    key={type}
                    whileHover={{ scale: 1.02, color: "#ff8904" }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setSelectedType(type)}
                    className="cursor-pointer text-sm font-medium text-gray-600"
                  >
                    {type[0].toUpperCase() + type.slice(1)}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Preço */}
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
                    "& .MuiSlider-thumb": { borderRadius: "50%" },
                  }}
                />
              </div>
              <div className="mt-1 flex justify-between text-sm text-gray-600">
                <span>R$ {priceRange[0]}</span>
                <span>R$ {priceRange[1]}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cardápio */}
      <div className="mt-1 flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4 2xl:grid-cols-5">
        {filteredItems.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 shadow-md md:flex-col md:p-10"
            onClick={() => setSelectedItem(option)}
          >
            <div className="h-20 w-20 flex-shrink-0 md:w-full">
              <img
                src={option.image}
                alt={option.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-center md:items-center">
              <span className="w-full max-w-[160px] truncate text-lg font-semibold text-gray-800 md:text-center lg:text-xl">
                {option.name}
              </span>
              <span className="mt-1 text-sm text-gray-600 lg:text-lg">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(option.price)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Item selecionado */}
      <SelectedItem item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default MenuOptions;
