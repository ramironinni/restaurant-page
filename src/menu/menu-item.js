export default function menuItem(dish) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("menu-item-img-container");

    const img = document.createElement("img");
    img.classList.add("menu-item-img");
    img.src = dish.image;
    imgContainer.appendChild(img);
    menuItem.appendChild(imgContainer);

    const descContainer = document.createElement("div");
    descContainer.classList.add("menu-item-description-container");

    const text = document.createElement("p");
    text.classList.add("menu-item-description");
    text.innerText = dish.name;
    descContainer.appendChild(text);

    const price = document.createElement("p");
    price.classList.add("menu-item-price");
    price.innerText = `$${dish.price}`;
    descContainer.appendChild(price);

    if (dish.discount) {
        const discount = document.createElement("div");
        discount.classList.add("menu-item-discount");
        discount.innerText = `-${dish.discount}%`;

        menuItem.appendChild(discount);
    }

    menuItem.appendChild(descContainer);

    return menuItem;
}
