import baconBurger from "./img/baconBurger.jpg";
import chickenBurger from "./img/chickenBurger.jpg";
import vegeBurger from "./img/vegeBurger.jpg";
import fishBurger from "./img/fishBurger.jpg";
import chickenPizza from "./img/chickenPizza.jpg";
import rukolaPizza from "./img/rukolaPizza.jpg";
import tunnaPizza from "./img/tunnaPizza.jpg";
import salamiPizza from "./img/salamiPizza.jpg";
import lasagnePasta from "./img/lasagnePasta.jpg";
import salmonPasta from "./img/salmonPasta.jpg";
import spinachPasta from "./img/spinachPasta.jpg";
import bolonesePasta from "./img/bolonesePasta.jpg";
import coffeCake from "./img/coffeCake.jpg";
import icecream from "./img/icecream.jpg";
import strawberryYogurt from "./img/strawberryYogurt.jpg";
import muffin from "./img/muffin.jpg";

import klaudiaKwiatkowska from "./img/klaudiaKwiatkowska.jpg";
import janKowalski from "./img/janKowalski.jpg";
import joannaMajewska from "./img/joannaMajewska.jpg";
import adamNowak from "./img/adamNowak.jpg";

import galery1 from "./img/gallery1.jpg";
import galery1Thumb from "./img/gallery1Thumb.jpg";
import galery2 from "./img/gallery2.jpg";
import galery2Thumb from "./img/gallery2Thumb.jpg";
import galery3 from "./img/gallery3.jpg";
import galery3Thumb from "./img/gallery3Thumb.jpg";
import galery4 from "./img/gallery4.jpg";
import galery4Thumb from "./img/gallery4Thumb.jpg";
import galery5 from "./img/gallery5.jpg";
import galery5Thumb from "./img/gallery5Thumb.jpg";
import galery6 from "./img/gallery6.jpg";
import galery6Thumb from "./img/gallery6Thumb.jpg";
import galery7 from "./img/gallery7.jpg";
import galery7Thumb from "./img/gallery7Thumb.jpg";

const meals = [
  {
    id: 1,
    type: "burgers",
    name: "Burger z bekonem",
    price: 24,
    ingredients: "bułka, mięso wołowe, bekon, ogórek kiszony, sos",
    img: baconBurger,
  },
  {
    id: 2,
    type: "burgers",
    name: "Burger z kurczakiem",
    price: 22,
    ingredients: "bułka, filet z kurczaka, ogórek kiszony, sos",
    img: chickenBurger,
  },
  {
    id: 3,
    type: "burgers",
    name: "Burger wege",
    price: 25,
    ingredients: "bułka, kotlet z soczewicy, ogórek kiszony, humus, sos",
    img: vegeBurger,
  },
  {
    id: 4,
    type: "burgers",
    name: "Burger z rybą",
    price: 28,
    ingredients: "bułka, filet z łososia, ogórek kiszony, sos",
    img: fishBurger,
  },
  {
    id: 5,
    type: "pizza",
    name: "Pizza z kurczakiem",
    price: 31,
    ingredients: "sos, grilowany kurczak, pieczarki, cebula",
    img: chickenPizza,
  },
  {
    id: 6,
    type: "pizza",
    name: "Pizza z rukolą",
    price: 30,
    ingredients: "sos, rukola, ser pleśniowy, cebula",
    img: rukolaPizza,
  },
  {
    id: 7,
    type: "pizza",
    name: "Pizza z tuńczykiem",
    price: 33,
    ingredients: "sos, tuńczyk, pieczarki, cebula",
    img: tunnaPizza,
  },
  {
    id: 8,
    type: "pizza",
    name: "Pizza z salami",
    price: 35,
    ingredients: "sos, salami, cebula",
    img: salamiPizza,
  },
  {
    id: 9,
    type: "pastas",
    name: "Lasagna",
    price: 31,
    ingredients: "sos, wołowina, cebula, makaron",
    img: lasagnePasta,
  },
  {
    id: 10,
    type: "pastas",
    name: "Spaghetti z łososiem",
    price: 39,
    ingredients: "sos, łosoś, cebula, makaron",
    img: salmonPasta,
  },
  {
    id: 11,
    type: "pastas",
    name: "Tagliatelle ze szpinakiem",
    price: 36,
    ingredients: "sos, szpinak, cebula, makaron",
    img: spinachPasta,
  },
  {
    id: 12,
    type: "pastas",
    name: "Spaghetti bolognese",
    price: 32,
    ingredients: "sos, wołowina, cebula, makaron",
    img: bolonesePasta,
  },
  {
    id: 13,
    type: "desserts",
    name: "Ciasto kawowe",
    price: 12,
    ingredients: "biszkopt, kakao, bita śmietana",
    img: coffeCake,
  },
  {
    id: 14,
    type: "desserts",
    name: "Lody czekoladowe",
    price: 14,
    ingredients: "lody czekoladowe, bita śmietana",
    img: icecream,
  },
  {
    id: 15,
    type: "desserts",
    name: "Jogurt truskawkowy",
    price: 11,
    ingredients: "truskawki, kawałki czekolady, bita śmietana",
    img: strawberryYogurt,
  },
  {
    id: 16,
    type: "desserts",
    name: "Mafinka",
    price: 15,
    ingredients: "biszkopt, kawałki czekolady, bita śmietana",
    img: muffin,
  },
];
const mainMeals = [
  meals[0],
  meals[2],
  meals[5],
  meals[7],
  meals[10],
  meals[11],
  meals[13],
  meals[14],
];
const burgers = meals.filter((meal) => meal.type === "burgers");
const pizza = meals.filter((meal) => meal.type === "pizza");
const pastas = meals.filter((meal) => meal.type === "pastas");
const desserts = meals.filter((meal) => meal.type === "desserts");

const opinions = [
  {
    id: 1,
    classActive: "active",
    name: "Joanna Majewska",
    img: joannaMajewska,
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed odio qui ducimus reiciendis tenetur, ea modi exercitationem saepe voluptatem unde quaerat sint esse consequuntur mollitia ad pariatur eum recusandae nihil.",
  },
  {
    id: 2,
    name: "Adam Nowak",
    img: adamNowak,
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed odio qui ducimus reiciendis tenetur, ea modi exercitationem saepe voluptatem unde quaerat sint esse consequuntur mollitia ad pariatur eum recusandae nihil.",
  },
  {
    id: 3,
    name: "Klaudia Kwiatkowska",
    img: klaudiaKwiatkowska,
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed odio qui ducimus reiciendis tenetur, ea modi exercitationem saepe voluptatem unde quaerat sint esse consequuntur mollitia ad pariatur eum recusandae nihil.",
  },
  {
    id: 4,
    name: "Jan Kowalski",
    img: janKowalski,
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed odio qui ducimus reiciendis tenetur, ea modi exercitationem saepe voluptatem unde quaerat sint esse consequuntur mollitia ad pariatur eum recusandae nihil.",
  },
];

const gallery = [
  {
    id: 1,
    description: "Some photo1",
    src: galery1,
    thumbnail: galery1Thumb,
  },
  {
    id: 2,
    description: "Some photo2",
    src: galery2,
    thumbnail: galery2Thumb,
  },
  {
    id: 3,
    description: "Some photo3",
    src: galery3,
    thumbnail: galery3Thumb,
  },
  {
    id: 4,
    description: "Some photo4",
    src: galery4,
    thumbnail: galery4Thumb,
  },
  {
    id: 5,
    description: "Some photo5",
    src: galery5,
    thumbnail: galery5Thumb,
  },
  {
    id: 6,
    description: "Some photo6",
    src: galery6,
    thumbnail: galery6Thumb,
  },
  {
    id: 7,
    description: "Some photo7",
    src: galery7,
    thumbnail: galery7Thumb,
  },
];

export {
  meals,
  mainMeals,
  burgers,
  pizza,
  pastas,
  desserts,
  opinions,
  gallery,
};
