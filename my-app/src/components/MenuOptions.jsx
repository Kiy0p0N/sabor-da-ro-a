import {  useState } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import Slider from '@mui/material/Slider';
import CloseIcon from '@mui/icons-material/Close';
import { optionsMenu } from '../utils/menu-options';

function MenuOptions () {
    const [filterOpen, setFilterOpen] = useState(false);        // controla a animação (aberto/fechado)
    const [filterVisible, setFilterVisible] = useState(false);  // controla se o filtro está no DOM
    const [selectedType, setSelectedType] = useState('todos');
    const [priceRange, setPriceRange] = useState([0, 100]);     // intervalo inicial

    // Lista de tipos únicos para o filtro
    const types = ['todos', ...new Set(optionsMenu.map(item => item.type))];

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

    const prices = optionsMenu.map(item => parseFloat(item.price));
    const minPrice = Math.min(...prices) -1;
    const maxPrice = Math.max(...prices) +1;

    // Filtra os produtos por tipo e faixa de preço
    const filteredItems = optionsMenu.filter((item) => {
        const price = parseFloat(item.price);
        const matchesType = selectedType === 'todos' || item.type === selectedType;
        const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

        return matchesType && matchesPrice;
    });

     return (
        <div className="flex flex-col">
            {/* Ícone do filtro */}
            <div className='pb-2'>
                <SortIcon onClick={toggleFilter} className='cursor-pointer hover:opacity-50 duration-500' />
            </div>

            {/* Filtro animado sobreposto */}
            {filterVisible && (
                <div
                    className={`
                        absolute left-0 w-9/10 z-10 lg:w-1/3
                        flex flex-col gap-2 px-3 py-4 bg-white shadow-md
                        ${filterOpen ? 'animate-slide-in' : 'animate-slide-out'}
                    `}
                >
                    {/* Botão para fechar o filtro */}
                    <div className='text-right'>
                        <CloseIcon onClick={toggleFilter} className='cursor-pointer hover:opacity-50 duration-500' />
                    </div>

                    {/* Filtros disponíveis */}
                    <div className='w-full max-h-96 overflow-y-auto overflow-x-hidden flex flex-col gap-1'>
                        {/* Tipo do item */}
                        <div className='flex flex-col border-b border-black/20'>
                            <h3 className='font-medium'>
                                Tipo
                            </h3>

                            <div className='px-2 flex flex-col gap-0.5'>
                                {/* Opções de tipo */}
                                {types.map((type) => (
                                    <p
                                        key={type}
                                        onClick={() => setSelectedType(type)}
                                        className="text-sm font-medium text-gray-600 cursor-pointer hover:opacity-70"
                                    >
                                        {type[0].toUpperCase() + type.slice(1)}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Preços */}
                        <div className='flex flex-col border-b border-black/20 pb-2'>
                            <h3 className='font-medium mb-2'>Preço</h3>

                            <div className='pl-3 pr-6'>
                                <Slider
                                    size='small'
                                    value={priceRange}
                                    onChange={(e, newValue) => setPriceRange(newValue)}
                                    valueLabelDisplay="on"
                                    min={minPrice}
                                    max={maxPrice}
                                    step={1}
                                    sx={{
                                    color: '#b91c1c', // vermelho escuro (opcional)
                                    '& .MuiSlider-thumb': {
                                        borderRadius: '50%',
                                    },
                                    }}
                                />
                            </div>

                            <div className="flex justify-between text-sm text-gray-600 mt-1">
                                <span>R$ {priceRange[0]}</span>
                                <span>R$ {priceRange[1]}</span>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* Cardápio */}
            <div className='flex flex-col gap-2 mt-1 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4 2xl:grid-cols-5'>
                {filteredItems.map((option) => (
                <div
                    key={option.id}
                    className="flex items-center gap-4 bg-white rounded-xl shadow-md p-3 hover:opacity-50 duration-500 md:flex-col md:p-10 cursor-pointer"
                >
                    {/* Imagem */}
                    <div className="w-20 h-20 flex-shrink-0">
                        <img
                            src={option.image}
                            alt={option.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col justify-center md:items-center">
                        <span className="text-lg text-center font-semibold text-gray-800 lg:text-xl">
                            {option.name}
                        </span>
                        <span className="text-sm text-gray-600 mt-1 lg:text-lg">
                            R$ {option.price}
                        </span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default MenuOptions;
