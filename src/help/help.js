import "./style.css";

export default function help() {
    const help = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.innerText = "Help";
    help.appendChild(h2);

    const info = document.createElement("div");
    info.classList.add("help-text");
    info.innerText = "Questions? Call us at 555-4574.";
    help.appendChild(info);
    return help;
}
