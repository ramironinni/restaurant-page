import "./style.css";
import home from "./home/home";
import header from "./header";
import menu from "./menu/menu";
import help from "./help/help";

document.body.appendChild(header());

const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

function setContent(currentTab) {
    content.innerText = "";
    content.appendChild(currentTab());
}

setContent(home);

(function listeners() {
    const homeBtn = document.querySelector(".nav-home");
    homeBtn.addEventListener("click", () => {
        setContent(home);
    });

    const menuBtn = document.querySelector(".nav-menu");
    menuBtn.addEventListener("click", () => {
        setContent(menu);
    });

    const helpBtn = document.querySelector(".nav-help");
    helpBtn.addEventListener("click", () => {
        setContent(help);
    });
})();
