/////////Creating constants//////////////////
const textarea = document.querySelector(".textarea h1");
const numbers = document.querySelectorAll(".number");
const removeButton = document.querySelector(".remove");
const btns = document.querySelectorAll(".button");
const typedNumbers = [];

/////////Adding click event on Numbers///////////

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numberToBeAdded = number.children[0].innerHTML;
    typedNumbers.push(numberToBeAdded);
    textarea.innerHTML = typedNumbers.join("");
  });
});

/////////////////Adding remove function////////////////////

removeButton.addEventListener("click", () => {
  typedNumbers.pop();
  textarea.innerHTML = typedNumbers.join("");
});

////////////Change in background when clicked////////////////

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 100);
  });
});
