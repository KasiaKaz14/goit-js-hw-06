const textInput = document.querySelector("#validation-input");
const lengthValue = textInput.getAttribute("data-length");

function blur() {
  if (this.value.length === Number(lengthValue)) {
    this.classList.add("valid");
  } else if (this.value.length === 0) {
    this.classList.remove("valid", "invalid");
  } else {
    this.classList.add("invalid");
  }
}

textInput.addEventListener("blur", blur);
