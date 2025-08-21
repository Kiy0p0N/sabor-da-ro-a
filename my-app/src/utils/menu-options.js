import pQueijo from "../assets/images/menu options/pastel-queijo.jpeg";
import pCarne from "../assets/images/menu options/pastel-carne.jpeg";
import heineken from "../assets/images/menu options/heineken.jpeg";
import coca from "../assets/images/menu options/coca-cola.jpeg";

export const optionsMenu = [
  {
    name: "Pastel de queijo",
    price: 8.0,
    type: "pastel",
    image: pQueijo,
    description: "Pastel crocante recheado com queijo muçarela.",
    ingredients: ["Queijo muçarela", "Massa de pastel", "Óleo para fritura"],
  },
  {
    name: "Pastel de carne",
    price: 8.0,
    type: "pastel",
    image: pCarne,
    description: "Pastel crocante recheado com carne moída temperada.",
    ingredients: ["Carne moída", "Cebola", "Temperos", "Massa de pastel"],
  },
  {
    name: "Heineken",
    price: 10.0,
    type: "bebida",
    image: heineken,
    description: "Cerveja Heineken long neck, puro malte.",
    volume: "330ml",
    alcoholic: true,
  },
  {
    name: "Coca-cola",
    price: 6.5,
    type: "bebida",
    image: coca,
    description: "Refrigerante Coca-cola gelado.",
    volume: "350ml",
    alcoholic: false,
  },
];
