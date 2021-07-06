import "./style.css";
import cartIcon from "./assets/cart-icon";

export default function header() {
    const header = document.createElement("header");

    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const ul = document.createElement("ul");
    ul.classList.add("nav-list");

    const navItems = [
        { text: "Home", class: "nav-home" },
        { text: "Menu", class: "nav-menu" },
        { text: "Help", class: "nav-help" },
    ];

    navItems.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item.text;
        li.classList.add("nav-item");
        li.classList.add(item.class);
        ul.appendChild(li);
    });

    ul.appendChild(cartIcon());

    nav.appendChild(ul);
    header.appendChild(nav);
    return header;
}
