let counterValue = 0;

const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function () {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

resetBtn.addEventListener("click", function () {
    counterValue = 0;
    counterDisplay.textContent = counterValue;
});
