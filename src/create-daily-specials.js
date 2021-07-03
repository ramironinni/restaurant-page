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

    const icon = document.createElement("span");
    icon.classList.add("material-icons");
    icon.classList.add("material-icons-outlined");
    icon.innerText = "shopping_cart";
    descriptionContainer.appendChild(icon);

    container.appendChild(descriptionContainer);

    return container;
}
