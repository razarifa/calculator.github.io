//variables
let lowerPart = document.querySelector("#lower-part");
let buttons = document.querySelectorAll("button");
let part = document.querySelector(".part");
let count = 0;
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
function Invert(num) {
 return -1 * Number(num);
}
let a = 0,
 b = 0,
 op,
 counter = 0;
let array = ["", "", ""];
let p;
function display(event) {
 if (/[0-9\.]+$/.test(event.target.innerText)) {
  if (array[1] != "") {
   part.innerText = "";
   part.innerText = array[2] + event.target.innerText;
   array[2] = part.innerText;
  } else {
   part.innerText += event.target.innerText;
  }
 }
 if (event.target.innerText == "AC") {
  part.innerText = "";
 }
 if (event.target.innerText == "C") {
  let num = part.innerText.split("");
  num.pop();
  part.innerText = num.join("");
 }
 if (event.target.innerText == "=") {
  if (array[0] != "" && array[1] != "" && array[2] != "") {
   if (array[1] == "/" && Number(array[0]) % Number(array[2]) == 0) {
    part.innerText = parseInt(
     operate(array[1], Number(array[0]), Number(array[2]))
    );
   } else {
    part.innerText = operate(array[1], Number(array[0]), Number(array[2]));
   }
  }
  array[1] = "";
  array[0] = "";
  array[2] = "";
 }
 if (/[*\-+/]+/.test(event.target.innerText)) {
  if (array[1] != "") {
   if (array[1] == "/" && Number(array[0]) % Number(array[2]) == 0) {
    part.innerText = parseInt(
     operate(array[1], Number(array[0]), Number(array[2]))
    );
   } else {
    part.innerText = "";
    if (array[1] == "/" && Number(array[0]) % Number(array[2]) == 0) {
     part.innerText = parseInt(
      operate(array[1], Number(array[0]), Number(array[2]))
     );
    } else {
     part.innerText = operate(array[1], Number(array[0]), Number(array[2]));
    }
    array[1] = undefined;
    array[0] = undefined;
    array[2] = undefined;
   }
   array[1] = event.target.innerText;
  } else if (array[1] === "" && array[0] === "") {
   array[1] = event.target.innerText;
   array[0] = part.innerText;
  }
 }
}

//events
[...buttons].forEach((button) => {
 button.addEventListener("click", display);
});
