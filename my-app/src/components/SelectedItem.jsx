import CloseIcon from "@mui/icons-material/Close";

function SelectedItem({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="animate-fade-in relative flex max-h-96 w-full max-w-md flex-col gap-2 rounded-xl bg-white p-6 shadow-lg">
        {/* Botão de fechar */}
        <div className="flex w-full justify-end text-gray-500 transition hover:text-black">
          <CloseIcon
            onClick={onClose}
            aria-label="Fechar"
            className="cursor-pointer duration-500 hover:opacity-50"
          />
        </div>

        {/* Conteúdo do item */}
        <div className="flex min-h-full w-full flex-col items-center gap-4 overflow-y-auto px-2 py-4 text-center">
          {/* Imagem do produto */}
          <img
            src={item.image}
            alt={item.name}
            className="h-40 w-full max-w-xs rounded-xl object-cover shadow-md"
          />

          {/* Nome do item */}
          <h2 className="w-full text-2xl font-bold text-gray-800">
            {item.name}
          </h2>

          {/* Preço formatado */}
          <p className="text-lg font-medium text-green-700">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.price)}
          </p>

          {/* Descrição (caso tenha) */}
          {item.description && (
            <p className="max-w-prose text-base text-gray-500 italic">
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
            <div className="mt-4 w-full max-w-md text-left">
              <h3 className="mb-1 text-lg font-semibold text-gray-800">
                Ingredientes
              </h3>
              <ul className="list-inside list-disc space-y-0.5 text-sm text-gray-600">
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Indicação de bebida alcoólica (caso exista) */}
          {item.alcoholic !== undefined && (
            <span
              className={`mt-2 rounded-full px-2 py-1 text-sm font-medium ${
                item.alcoholic
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {item.alcoholic ? "Contém álcool" : "Sem álcool"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectedItem;
