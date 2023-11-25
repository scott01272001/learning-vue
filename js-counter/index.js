let count = 0;

const countAddBtn = document.getElementById("add");
const countSubtractBtn = document.getElementById("minus");
const countHeader = document.getElementById("count");

countHeader.innerText = count;

countAddBtn.addEventListener("click", () => {
  count++;
  countHeader.innerText = count;
});

countSubtractBtn.addEventListener("click", () => {
  count--;
  countHeader.innerText = count;
});
