const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

// 로딩시점에 첫번째 input요소 focus
window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", () => {
    const currentInput = input;
    const pervInput = input.previousSibling;
    const nextInput = input.nextElementSibling;

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    if (
      !inputs[inputs.length - 1].hasAttribute("disabled") &&
      inputs[inputs.length - 1].value !== ""
    ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});
