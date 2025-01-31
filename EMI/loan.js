const amountEnter = document.getElementById("amountEnter");
const btn = document.getElementById("btn");
const emiCost = document.getElementById("emi-cost");
const payAmount = document.getElementById("pay-amount");

btn.addEventListener("click", () => {
  const loanAmount = Number(amountEnter.value);
  const totalEmMI = emiCalc(loanAmount);
  console.log(typeof totalEmMI);
  const totalPayableAmount = loanAmount + Number(totalEmMI);
  emiCost.textContent = totalEmMI;
  payAmount.textContent = totalPayableAmount;
});

function emiCalc(amt) {
  let inter = 5;
  let time = 10;

  let monthlyRate = inter / 100 / 12;

  let months = time * 12;

  console.log(typeof inter);
  console.log(typeof time);
  console.log(typeof months);

  let emi =
    (amt * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  console.log(typeof emi);

  return emi.toFixed(2);
}
