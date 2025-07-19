function Button ({text, onClick}) {
    return (
        <button
            className="w-fit p-3 rounded-lg bg-amber-800 text-white md:opacity-70 hover:opacity-100 duration-500 cursor-pointer"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;