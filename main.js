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
    console.log(isNumberKey(e));
    if (operatorSelection == false) {
      inputArea.value += e.key;
      operatorSelection = false;
    } else {
      operatorSelection = false;
      inputArea.value = e.key;
    }
  }

  var keycode1 = e.keyCode;
  if (keycode1 == 13) {
    resultFunction();
    secondNumber = 0;
    operand = "";
  }
});
const clearScreen = () => {
  inputArea.value = "";
};
const calculate = (num1, oper, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  console.log("running calculate");
  console.log("current operator is " + oper);
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
      return result;
    case "%":
      result = num1 % num2;
      return result;
  }
};
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if ((charCode > 47 && charCode < 58) || charCode == 190) {
    console.log(charCode);
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
    console.log("first number before calculation is = " + firstNumber);
    console.log("second number before calculation is = " + secondNumber);
    console.log("inside !=0 ");
    if (calculate(firstNumber, operand, secondNumber) == undefined) {
      result = firstNumber;
      inputArea.value = result;
      console.log("result after calculation is = " + result);
    } else {
      inputArea.value = calculate(firstNumber, operand, secondNumber);
    }
    firstNumber = result;
  } else {
    firstNumber = parseFloat(inputArea.value);
    inputArea.value = "";
    console.log("inside =0 ");
    console.log("first number is " + firstNumber);
  }
};
