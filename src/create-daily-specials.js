import cartIcon from "./cart-icon";

export default function createDailySpecial(dish) {
    const container = document.createElement("div");
    container.classList.add("daily-special-container");

    const img = document.createElement("img");
    img.classList.add("daily-special-img");
    img.src = dish.image;
    container.appendChild(img);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("daily-special-description-container");

    const description = document.createElement("p");
    description.innerText = dish.name;
    description.classList.add("daily-special-description");
    descriptionContainer.appendChild(description);

    descriptionContainer.appendChild(cartIcon());

    container.appendChild(descriptionContainer);

    return container;
}
