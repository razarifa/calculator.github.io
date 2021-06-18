//variables
let lowerPart = document.querySelector("#lower-part");
let buttons = document.querySelectorAll("button");
let part = document.querySelector(".part");
//functions

function add(a, b) {
 return a + b;
}
function subtract(a, b) {
 return a - b;
}
function multiply(a, b) {
 return a * b;
}
function divide(a, b) {
 if (b != 0 && a != 0) {
  return (a / b).toFixed(2);
 } else {
  return "Infinity";
 }
}
function operate(op, a, b) {
 switch (op) {
  case "+":
   return add(a, b);
   break;
  case "-":
   return subtract(a, b);
   break;
  case "*":
   return multiply(a, b);
   break;
  case "/":
   return divide(a, b);
   break;
 }
}
let a = 0,
 b = 0,
 op,
 counter = 0;
function display() {
 [...buttons].forEach((button) => {
  button.addEventListener("click", (e) => {
   if (button.innerText == "AC") {
    part.innerText = "";
   } else if (button.innerText == "+/-") {
    part.innerText = -1 * part.innerText;
   } else if (
    button.innerText == 1 ||
    button.innerText == 2 ||
    button.innerText == 3 ||
    button.innerText == 4 ||
    button.innerText == 5 ||
    button.innerText == 6 ||
    button.innerText == 7 ||
    button.innerText == 8 ||
    button.innerText == 9 ||
    button.innerText == 0 ||
    button.innerText == "." ||
    button.innerText == "+" ||
    button.innerText == "-" ||
    button.innerText == "*" ||
    button.innerText == "/"
   ) {
    part.innerText += button.innerText;
   } else if (button.innerText == "=") {
    let eded = part.innerText.split(/[*\-+/]+/);
    for (let i = 0; i < part.innerText.length; i++) {
     if (
      part.innerText[i] == "+" ||
      part.innerText[i] == "-" ||
      part.innerText[i] == "*" ||
      part.innerText[i] == "/"
     ) {
      op = part.innerText[i];
     }
    }
    if (op == "/" && Number(eded[0]) % Number(eded[1]) == 0) {
     part.innerText = parseInt(operate(op, Number(eded[0]), Number(eded[1])));
    } else {
     part.innerText = operate(op, Number(eded[0]), Number(eded[1]));
    }
   }
  });
 });
}
display();
function Invert(num) {
 return -1 * num;
}
