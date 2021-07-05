import menuItem from "./menu-item";
import "./style.css";

import image1 from "../assets/menu-1.jpg";
import image2 from "../assets/menu-2.jpg";
import image3 from "../assets/menu-3.jpg";
import image4 from "../assets/menu-4.jpg";
import image5 from "../assets/menu-5.jpg";
import image6 from "../assets/menu-6.jpg";

const dishesOnMenu = [
    {
        name: "Spinach & cottage cheese cannelloni",
        price: 9,
        image: image1,
        discount: false,
    },
    {
        name: "Grilled fish and potatoes",
        price: 12,
        image: image2,
        discount: 10,
    },
    { name: "Roast chicken and tomatoes", price: 10, image: image3 },
    { name: "Veggie sushi", price: 13, image: image4, discount: false },
    { name: "Mushroom pizza", price: 10, image: image5, discount: false },
    { name: "Special brunch", price: 13, image: image6, discount: 15 },
];

export default function menu() {
    const menu = document.createElement("main");
    // const h2 = document.createElement("h2");
    // h2.innerText = "Menu";
    // menu.appendChild(h2);

    dishesOnMenu.forEach((dish) => {
        menu.appendChild(menuItem(dish));
    });

    return menu;
}
