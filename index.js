const amountCount = document.querySelector(".amount");
const incBtn = document.querySelector(".incbtn");
const decBtn = document.querySelector(".decbtn");

let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  amountCount.innerText = count;
});

decBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    amountCount.innerText = count;
  }
});
