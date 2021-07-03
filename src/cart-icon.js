export default function cartIcon() {
    const cartIcon = document.createElement("span");
    cartIcon.classList.add("material-icons");
    cartIcon.classList.add("material-icons-outlined");
    cartIcon.innerText = "shopping_cart";
    return cartIcon;
}
