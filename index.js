var display = document.getElementById("display");

function isOper(buttonText) {
  if (
    buttonText == "+" ||
    buttonText == "-" ||
    buttonText == "*" ||
    buttonText == "/" ||
    buttonText == "%"
  ) {
    return true;
  } else {
    return false;
  }
}

function buttonClicked(buttonText) {
  if (buttonText === "=") {
    display.innerText = eval(display.innerText);
    return;
  }
  if (buttonText === "DEL") {
    display.innerText = display.innerText.slice(0, -1);
    return;
  }
  if (buttonText === "CLR") {
    display.innerText = "0";
    return;
  }
  if (display.innerText === "0") {
    if (buttonText === "0" || buttonText === "00") {
      //console.log("clicked")
      return;
    }
    if (buttonText === "." || isOper(buttonText)) {
      display.innerText = "0" + buttonText;
      return;
    }
    display.innerText = buttonText;
  } else {
    if (
      isOper(buttonText) &&
      isOper(display.innerText[display.innerText.length - 1])
    ) {
      display.innerText = display.innerText.slice(0, -1) + buttonText;
      return;
    }
    display.innerText = display.innerText + buttonText;
  }
}
