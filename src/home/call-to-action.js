export default function callToAction() {
    const callToAction = document.createElement("div");
    callToAction.classList.add("call-to-action-container");

    const para = document.createElement("p");
    para.innerText = "Ready to order?";
    callToAction.appendChild(para);

    const menu = document.createElement("button");
    menu.classList.add("button-home");
    menu.innerText = "Check the menu";

    callToAction.appendChild(menu);

    const contact = document.createElement("button");
    contact.classList.add("button-home");
    contact.innerText = "Contact us";
    callToAction.appendChild(contact);

    return callToAction;
}
