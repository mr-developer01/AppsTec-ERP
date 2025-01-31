const amountEnter = document.getElementById("amountEnter");
const EmiOnLoan = document.getElementById("loanEMI");
const totalYear = document.getElementById("years-count");
const btn = document.getElementById("btn");
const totalLoanAmount = document.getElementById("loanAmount");
const emiCost = document.getElementById("emi-cost");
const payAmount = document.getElementById("pay-amount");

btn.addEventListener("click", () => {
  const loanAmount = Number(amountEnter.value);
  const emi = Number(EmiOnLoan.value);
  const yrs = Number(totalYear.value);

  const totalEmMI = emiCalc(loanAmount, emi, yrs);
  console.log(typeof totalEmMI, 'totalEMI');
  const totalPayableAmount = loanAmount + totalEmMI;
  totalLoanAmount.textContent = loanAmount;
  emiCost.textContent = totalEmMI;
  payAmount.textContent = totalPayableAmount;
});

function emiCalc(amt, inter, time) {

  let monthlyRate = inter / 100 / 12;

  let months = time * 12;

  let emi =
    (amt * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return Number(emi.toFixed(2));
}
