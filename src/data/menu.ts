import type { MenuCategory } from '../types';

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    title: "Nos Riz Savoureux",
    items: [
      {
        name: "Riz au Porc (sauce secrète)",
        desc: "Riz parfumé accompagné de morceaux de porc tendres, nappé de notre sauce secrète maison.",
        price: "15€",
        img: "/riz_porc.png",
      },
      {
        name: "Riz au Poulet (sauces secrètes)",
        desc: "Poulet juteux et riz délicatement épicé, relevé par notre sauce secrète unique.",
        price: "15€",
        img: "/riz_poulet.jpg",
      },
      {
        name: "Fried Rice",
        desc: "Riz sauté aux saveurs authentiques, au choix avec boulettes de viande ou poulet grillé.",
        price: "15€",
        img: "/riz_saute.png",
      },
    ],
  },
  {
    title: "Nos Sandwichs Mboa",
    items: [
      {
        name: "Sandwich Poisson haché",
        desc: "Savoureux, bien épicé et généreusement garni de poisson haché local.",
        price: "10€",
        img: "/pain_poisson.png",
      },
      {
        name: "Sandwich Boulettes au bœuf",
        desc: "Boulettes fondantes avec une sauce maison irrésistible.",
        price: "10€",
        img: "/pain_viande.png",
      },
      {
        name: "Sandwich Jazz",
        desc: "Le mix signature Mboa plein de goût et de surprises.",
        price: "10€",
        img: "/pain_haricot.png",
      },
      {
        name: "Sandwich Omelette spaghettis",
        desc: "Gourmand et copieux, le combo qui cale bien ! Spécialité légendaire.",
        price: "8€",
        img: "pain_garri.png",
      },
    ],
  },
  {
    title: "Nos Boissons",
    items: [
      {
        name: "Bissap Maison (Foléré)",
        desc: "Fait par moi, rafraîchissant et 100% naturel.",
        price: "5€",
        img: "/bissap.png",
      },
      {
        name: "Gamme Top & Soda",
        desc: "Ananas, Pamplemousse, Grenadine, Djino ou Coca-Cola.",
        price: "5€",
        img: "/jus_top.png",
      },
    ],
  },
];
