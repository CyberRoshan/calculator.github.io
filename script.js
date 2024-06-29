let table = document.querySelector("table");
let inputResult = document.querySelector("input");
let opr = ["+", "-", "*", "/", "."];

table.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    let oldValue = inputResult.value;
    let lastChar = oldValue[oldValue.length - 1];
    let afterRemovingLastChar = oldValue.slice(0, oldValue.length - 1);
    if (event.target.innerText == "C") {
      inputResult.value = "";
    } else if (event.target.innerHTML == "=") {
      inputResult.value = eval(inputResult.value);
    } else {
      if (opr.includes(event.target.innerHTML) && opr.includes(lastChar)) {
        inputResult.value = afterRemovingLastChar + event.target.innerHTML;
      } else {
        inputResult.value = oldValue + event.target.innerText;
        if (oldValue[0] == "*" || oldValue[0] == "/") {
          // ! Error Caught Ask From Sir
          oldValue.slice(0, 1);
        }
      }
    }
  }
});
