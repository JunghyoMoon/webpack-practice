import "../scss/styles.scss";
import { add } from "./calc";

let stack = 5;
console.log(stack);
stack = add(add(stack));
console.log(stack);
