import "./style.css";
import main from "./main";
import header from "./header";

function content() {
    const content = document.getElementById("content");

    content.appendChild(header());
    content.appendChild(main());

    document.body.appendChild(content);
}

content();
