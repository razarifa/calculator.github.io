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
let operand = "",
 array = [];
function display(event) {
 if (!event.target) {
  event.target = event;
 }
 if (/[0-9\.]+$/.test(event.target.innerText)) {
  if (array.length == 1) {
   return;
  } else if (array.length == 0 || array.length == 2) {
   operand += event.target.innerText;
   part.innerText = operand.substr(0, 8);
  }
  [...document.querySelectorAll("button")].forEach((button) => {
   button.style.border = "1px solid #2f3130";
  });
 } else if (/[*\-+/]+/.test(event.target.innerText)) {
  if (event.target.innerText == "+/-") {
   part.innerText = -1 * part.innerText;
   operand = part.innerText;
  } else {
   [...document.querySelectorAll("button")].filter((button) => {
    if (button.innerText == event.target.innerText) {
     button.style.border = "1px solid #dbba35";
    } else {
     button.style.border = "1px solid #2f3130";
    }
   });
   if (array.length == 0 || array.length == 2) {
    if (event.target.innerText != "/" && event.target.innerText != "*") {
     array.push(operand);
     operand = "";
    } else {
     array.push(operand);
     operand = "";
    }
   }

   if (array.length == 1) {
    array.push(event.target.innerText);
   } else if (array.length == 2) {
    array[array.length - 1] = event.target.innerText;
   } else if (array.length === 3) {
    let result;
    if (array[1] == "/") {
     if (array[2] == "") {
      array[2] = "1";
     }
     if (array[1] == "/") {
      if (Number(array[0]) % Number(array[2]) == 0) {
       result = parseInt(operate(array[1], Number(array[0]), Number(array[2])));
      } else {
       result = parseFloat(
        operate(array[1], Number(array[0]), Number(array[2]))
       ).toFixed(2);
      }
     }
    } else {
     if (array[1] == "*" && array[2] == "") {
      array[2] = "1";
     }
     result = operate(array[1], Number(array[0]), Number(array[2]));
    }
    if (result.toString().includes(".")) {
     result = parseFloat(result).toFixed(2);
     console.log(result);
    }
    if (result.toString().length > 12) {
     document.querySelector(".part").style["font-size"] = "120%";
    }

    array = [];
    array.push(result);
    array.push(event.target.innerText);
    part.innerText = result;
   }
  }
 } else if (event.target.innerText === "=") {
  if (array.length == 0 || array.length == 2) {
   if (event.target.innerText != "/" && event.target.innerText != "*") {
    array.push(operand);
    operand = "";
   } else {
    array.push(operand);
    operand = "";
   }
  }
  if (array.length == 0 || array.length == 1 || array.length == 2) {
   return;
  } else {
   let result;
   if (array[1] == "/") {
    if (array[2] == "") {
     array[2] = "1";
    }
    if (Number(array[0]) % Number(array[2]) == 0) {
     result = parseInt(operate(array[1], Number(array[0]), Number(array[2])));
    } else {
     result = parseFloat(
      operate(array[1], Number(array[0]), Number(array[2]))
     ).toFixed(2);
    }
   } else {
    if (array[1] == "*" && array[2] == "") {
     array[2] = "1";
    }
    result = operate(array[1], Number(array[0]), Number(array[2]));
   }
   if (result.toString().includes(".")) {
    result = parseFloat(result).toFixed(2);
    console.log(result);
   }
   if (result.toString().length > 12) {
    document.querySelector(".part").style["font-size"] = "120%";
   }
   array = [];
   array.push(result);
   console.log(array);
   part.innerText = result;
  }
 } else if (event.target.innerText == "AC") {
  array = [];
  part.innerText = "";
  [...document.querySelectorAll("button")].forEach(
   (button) => (button.style["border"] = "none")
  );
 }
 if (event.target.innerText == "C") {
  let num = part.innerText.split("");
  num.pop();
  part.innerText = num.join("");
  operand = part.innerText;
 }
}

//events
[...buttons].forEach((button) => {
 button.addEventListener("click", display);
});
[...buttons].forEach((button) => {
 button.addEventListener("mouseenter", () => {
  button.classList.add("BG");
 });
 button.addEventListener("mouseleave", () => {
  button.classList.remove("BG");
 });
});
window.addEventListener("keydown", (e) => {
 [...buttons].forEach((button) => {
  if (e.which == button.getAttribute("data-key")) {
   display(button);
  }
 });
});
