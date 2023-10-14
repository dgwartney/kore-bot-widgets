// import chalk from "chalk";
import Buttons from "./button";


export function createButton() {
    return new Buttons();
}

const b = createButton();
console.log(b.render());