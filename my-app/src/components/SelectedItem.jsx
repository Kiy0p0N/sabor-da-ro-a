import CloseIcon from '@mui/icons-material/Close';

function SelectedItem({ item, onClose }) {
    if (!item) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md max-h-96 flex flex-col gap-2 rounded-xl shadow-lg p-6 relative animate-fade-in">
                {/* Botão de fechar */}
                <div
                    className="w-full flex justify-end text-gray-500 hover:text-black transition"
                >
                    <CloseIcon
                        onClick={onClose}
                        aria-label="Fechar"
                        className='cursor-pointer hover:opacity-50 duration-500'
                    />
                </div>

                {/* Conteúdo do item */}
                <div className="min-h-full w-full flex flex-col items-center gap-4 text-center overflow-y-auto px-2 py-4">

                    {/* Imagem do produto */}
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full max-w-xs h-40 object-cover rounded-xl shadow-md"
                    />

                    {/* Nome do item */}
                    <h2 className="text-2xl font-bold text-gray-800 w-full">
                        {item.name}
                    </h2>

                    {/* Preço formatado */}
                    <p className="text-lg text-green-700 font-medium">
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.price)}
                    </p>

                    {/* Descrição (caso tenha) */}
                    {item.description && (
                        <p className="text-gray-500 text-base italic max-w-prose">
                            {item.description}
                        </p>
                    )}

                    {/* Volume (caso tenha, para bebidas) */}
                    {item.volume && (
                        <p className="text-sm text-gray-600">
                            Volume: <span className="font-medium">{item.volume}</span>
                        </p>
                    )}

                    {/* Ingredientes (caso tenha) */}
                    {item.ingredients && (
                        <div className="w-full max-w-md text-left mt-4">
                            <h3 className="text-lg font-semibold mb-1 text-gray-800">
                                Ingredientes
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-0.5">
                                {item.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Indicação de bebida alcoólica (caso exista) */}
                    {item.alcoholic !== undefined && (
                        <span className={`text-sm mt-2 px-2 py-1 rounded-full font-medium ${
                            item.alcoholic ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                            {item.alcoholic ? 'Contém álcool' : 'Sem álcool'}
                        </span>
                    )}
                </div>

            </div>
        </div>
    );
}

export default SelectedItem;
