const body = document.querySelector("body");
const inputArea = document.getElementById("inputArea");
let firstNumber = undefined;
let secondNumber = 0;
let result = 0;
let clearValue;
let operand = "";
let operatorSelection = false;
const divs = document.querySelectorAll("#panel div");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    let selection1 = div.id;
    switch (selection1) {
      case "one":
        if (operatorSelection == false) {
          inputArea.value += "1";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "1";
        }
        break;
      case "two":
        if (operatorSelection == false) {
          inputArea.value += "2";
          operatorSelection = false;
        } else {
          inputArea.value = "2";
          operatorSelection = false;
        }
        break;
      case "three":
        if (operatorSelection == false) {
          inputArea.value += "3";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "3";
        }
        break;
      case "four":
        if (operatorSelection == false) {
          inputArea.value += "4";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "4";
        }
        break;
      case "five":
        if (operatorSelection == false) {
          inputArea.value += "5";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "5";
        }
        break;
      case "six":
        if (operatorSelection == false) {
          inputArea.value += "6";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "6";
        }
        break;
      case "seven":
        if (operatorSelection == false) {
          inputArea.value += "7";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "7";
        }
        break;
      case "eight":
        if (operatorSelection == false) {
          inputArea.value += "8";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "8";
        }
        break;
      case "nine":
        if (operatorSelection == false) {
          inputArea.value += "9";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "9";
        }
        break;
      case "zero":
        if (operatorSelection == false) {
          inputArea.value += "0";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = "0";
        }
        break;
      case "decimal":
        if (operatorSelection == false) {
          inputArea.value += ".";
          operatorSelection = false;
        } else {
          operatorSelection = false;
          inputArea.value = ".";
        }
        break;
      case "clear":
        clearValue = inputArea.value;
        clearValue = clearValue.slice(0, -1);
        inputArea.value = clearValue;
        break;
      case "allClear":
        inputArea.value = "";
        firstNumber = undefined;
        secondNumber = 0;
        break;
      case "add":
        resultFunction();
        operand = "+";
        break;
      case "subtract":
        resultFunction();
        operand = "-";
        break;
      case "divide":
        resultFunction();
        operand = "/";
        break;
      case "multiply":
        resultFunction();
        operand = "x";
        break;
      case "module":
        resultFunction();
        operand = "%";
        break;
      case "equal":
        resultFunction();
        secondNumber = 0;
        operand = "";
        break;
    }
  });
});

window.addEventListener("keydown", (e) => {
  inputArea.focus();
  if (isNumberKey(e) == true) {
    if (operatorSelection == false) {
      inputArea.value += e.key;
      operatorSelection = false;
    } else {
      operatorSelection = false;
      inputArea.value = e.key;
    }
  }

  var keycode1 = e.keyCode;
  if (e.key == "Enter") {
    resultFunction();
    secondNumber = 0;
    operand = "";
  } else if (e.key == "+") {
    document.getElementById("add").click();
  } else if (e.key == "-") {
    document.getElementById("subtract").click();
  } else if (e.key == "x" || e.key == "*" || e.key == "X") {
    document.getElementById("multiply").click();
  } else if (e.key == "/") {
    document.getElementById("divide").click();
  } else if (e.key == "%") {
    document.getElementById("module").click();
  } else if (e.key == "Backspace") {
    document.getElementById("clear").click();
  }
});

const calculate = (num1, oper, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (oper) {
    case "+":
      result = num1 + num2;
      return result;
    case "-":
      result = num1 - num2;
      return result;
    case "x":
      result = num1 * num2;
      return result;
    case "/":
      result = num1 / num2;
      return parseFloat(result);
    case "%":
      result = num1 % num2;
      return result;
  }
};
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if ((charCode > 47 && charCode < 58) || charCode == 190) {
    return true;
  } else {
    return false;
  }
}
const resultFunction = () => {
  operatorSelection = true;
  if (firstNumber != undefined) {
    secondNumber = inputArea.value.replaceAll(/\D\./g, "");
    inputArea.value = "";
    if (calculate(firstNumber, operand, secondNumber) == undefined) {
      result = firstNumber;
      inputArea.value = result;
    } else {
      inputArea.value = calculate(firstNumber, operand, secondNumber);
    }
    firstNumber = result;
  } else {
    firstNumber = parseFloat(inputArea.value);
    inputArea.value = "";
  }
};
