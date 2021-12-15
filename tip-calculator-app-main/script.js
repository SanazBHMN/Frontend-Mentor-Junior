console.log("hello world");

const tipBtns = document.querySelectorAll(".tip");
const customTipBtn = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset");
const bill = document.querySelector(".input--bill");
const people = document.querySelector(".input--people");
const amountTip = document.querySelector(".amount--tip");
const amountTotal = document.querySelector(".amount--total");

const getTipAmount = function (percent) {
  const tipValue = (bill.value * percent) / 100 / people.value;
  const tipTotal = bill.value / people.value + tipValue;
  amountTip.innerText = `$${tipValue.toFixed(2)}`;
  amountTotal.innerText = `$${tipTotal.toFixed(2)}`;
};

function deactivateAll() {
  tipBtns.forEach((el) => {
    el.classList.remove("active");
  });
  customTipBtn.classList.remove("active");
}

function selectTip(e) {
  deactivateAll();
  e.target.classList.add("active");
  const percent = e.target.innerText;
  if (bill.value && people.value) {
    getTipAmount(percent.slice(0, -1));
  }
}

function customTip(val) {
  deactivateAll();

  getTipAmount(val.slice(0, -1));
}

function reset() {
  amountTip.innerText = "$0.00";
  amountTotal.innerText = "$0.00";
  bill.value = "";
  people.value = "";
  customTipBtn.value = "";
}

tipBtns.forEach((el) => {
  el.addEventListener("click", selectTip);
});

customTipBtn.addEventListener("keypress", (e) => {
  if (e.keyCode === 13 && e.target.value.includes("%")) {
    customTipBtn.classList.add("active");

    customTip(e.target.value);
  }
});

resetBtn.addEventListener("click", reset);
