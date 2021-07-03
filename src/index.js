import "./style.css";
import logo from "./logo-white.png";

function createHeader() {
    const header = document.createElement("header");

    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const ul = document.createElement("ul");
    ul.classList.add("nav-list");

    const navItems = ["Home", "Menu", "Contact"];

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("logo-container");
    const img = document.createElement("img");
    img.src = logo;
    img.classList.add("logo");
    imgContainer.appendChild(img);

    ul.appendChild(document.createElement("li").appendChild(imgContainer));

    navItems.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        li.classList.add("nav-item");
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
    return header;
}

// function createDailySpecial(){

// }

// function createMain(){
//     const main = document.createElement("main");

// }

function content() {
    const content = document.getElementById("content");
    const header = createHeader();

    content.appendChild(header);
    document.body.appendChild(content);
}

content();
