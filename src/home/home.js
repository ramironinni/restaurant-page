import createDailySpecial from "./create-daily-specials";
import { dishes } from "./daily-special-dishes";
import callToAction from "./call-to-action";
import "./style.css";

export default function home() {
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.innerText = "Daily Specials";
    main.appendChild(h2);

    dishes.forEach((dish) => {
        const dailySpecial = createDailySpecial(dish);
        main.appendChild(dailySpecial);
    });

    main.appendChild(callToAction());

    return main;
}
