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
                <div className="min-h-full flex flex-col items-center gap-4 text-center overflow-y-auto">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-lg shadow"
                    />
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p className="text-gray-600 text-lg">R$ {item.price}</p>

                    {item.description && (
                        <p className="text-gray-500 mt-2">{item.description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SelectedItem;
