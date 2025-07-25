function Button({ text, onClick }) {
  return (
    <button
      className="w-fit cursor-pointer rounded-lg bg-amber-800 p-3 text-white duration-500 hover:opacity-100 md:opacity-70"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
