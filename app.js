const tips = document.querySelectorAll(".tips");
const inputBill = document.querySelector("#input-bill");
const inputPeople = document.querySelector("#input-people");
const inputCuston = document.querySelector('#input-tip-custom');
const tipAmount = document.querySelector('#tip-value');
const tipTotal = document.querySelector('#person-value');
const resetBtn = document.querySelector('#btn-clean');
const error = document.querySelector('#people-error')

inputBill.addEventListener('input', billInputFun);
inputPeople.addEventListener('input', peopleInputFun);

tips.forEach(function (val) {
   val.addEventListener('click', handleClick);
});

resetBtn.addEventListener("click", reset);
inputCuston.addEventListener("input", tipInputFun);

inputBill.value = '0';
inputPeople.value = '1';
tipAmount.innerHTML = '$' + (0).toFixed(2);
tipTotal.innerHTML = '$' + (0).toFixed(2);

let valueBill = 0;
let valuePeople = 1;
let tipValue = 0;

function billInputFun() {
   valueBill = parseFloat(inputBill.value);
   calculateTip();
};

function tipInputFun() {
   tipValue = parseFloat(inputCuston.value / 100);

   tips.forEach(function (val) {
      val.classList.remove('tip-activ');
   });
   calculateTip();
}

function peopleInputFun() {
   valuePeople = parseFloat(inputPeople.value);

   if (valuePeople < 1) {
      error.style.display = 'flex';
   } else {
      error.style.display = 'none';
      calculateTip();
   }
}

function handleClick(event) {
   tips.forEach(function (val) {
      inputCuston.value = '';
      val.classList.remove('tip-activ');
      if (event.target.innerHTML == val.innerHTML) {
         val.classList.add('tip-activ');
         tipValue = parseFloat(val.innerHTML) / 100;
      }
   });
   calculateTip();
}

function calculateTip() {
   if (valuePeople >= 1) {
      let totalTip = (valueBill * tipValue) / valuePeople;
      let total = valueBill / valuePeople;
      tipAmount.innerHTML = "$" + totalTip.toFixed(2);
      tipTotal.innerHTML = "$" + total.toFixed(2);
   }
}

function reset() {
   inputBill.value = '0';
   billInputFun();
   inputPeople.value = '1';
   peopleInputFun();
   inputCuston.value = '';
}































