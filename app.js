const tips = document.querySelectorAll(".tips");
const valueBill = document.querySelector("#input-bill");
const tipCuston = document.querySelector('#input-tip-custom');
const valuePeople = document.querySelector("#input-people");
const tipAmount = document.querySelector('#tip-value');
const tipTotal = document.querySelector('#person-value');
const resetBtn = document.querySelector('#btn-clean');
const error = document.querySelector('#people-error')

valuePeople.addEventListener('input', getValue);
valueBill.addEventListener('input', getValue);
resetBtn.addEventListener('click', reset);

valuePeople.value = 1;
valueBill.value = 0;

tips.forEach(function (val) {
   val.addEventListener('click', handleClick)

})

function handleClick(event) {
   tips.forEach(function (val) {
      val.classList.remove('tip-activ');
      if (event.target.innerHTML == val.innerHTML) {
         val.classList.add('tip-activ');
         getValue(parseInt(val.innerHTML));
      }
   })
};


function getValue(value) {
   let vBill = valueBill.value;
   let vPeople = valuePeople.value;

   let totalTip = (vBill * value) / 100;
   let totalTipPerson = totalTip / vPeople;

   tipAmount.innerHTML = `$${totalTipPerson.toFixed(2)}`;

   let total = vBill / vPeople;
   tipTotal.innerHTML = `$${total.toFixed(2)}`;

   getError()
}

function getError() {
   error.style.display = 'none';
   if (valuePeople.value < 1) {
      error.style.display = 'flex';
   }
}

function reset() {
   tipAmount.innerHTML = "$0.00";
   tipTotal.innerHTML = "$0.00";
   valuePeople.value = "0";
   valueBill.value = "0";
   tipCuston.value = "";

   tips.forEach(function (val) {
      val.classList.remove('tip-activ');
   })
}
