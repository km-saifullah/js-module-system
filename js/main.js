// ES6 Module System
import PI, {
  addition,
  subtruction,
  product,
  division,
} from "../module/simpleOperation.js";

// Show Result in the DOM
let text = document.querySelector(".text");
let text2 = document.querySelector(".text2");
text.innerHTML = `Additon: ${addition(20, 30)}`;
text2.innerHTML = `Subtruction: ${subtruction(50, 30)}`;
text.style.color = "red";
text2.style.color = "red";
text.style.fontSize = "40px";
text2.style.fontSize = "40px";

let divisionVlue = division(50, 30);
console.log(
  addition(20, 30),
  subtruction(50, 30),
  product(50, 30),
  Number(divisionVlue.toFixed(2))
);
console.log(`Value of pi is: ${PI}`);
