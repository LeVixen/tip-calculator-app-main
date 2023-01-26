const tips = document.querySelectorAll(".tips");
const valuePeople = document.querySelector("#input-people");
const valueBill = document.querySelector("#input-bill");
const tipAmount = document.querySelector('#tip-value');
const tipTotal = document.querySelector('#person-value');
const error = document.querySelector('#btn-clean');

valuePeople.addEventListener('input', getValueTip);
valueBill.addEventListener('input', getValueTip);
error.addEventListener('click', reset)

tips.forEach(function (val) {
   val.addEventListener('click', handleClick)
})



function handleClick(event) {
   tips.forEach(function (val) {
      val.classList.remove('tip-activ');
      if (event.target.innerHTML == val.innerHTML) {
         val.classList.add('tip-activ');
         let value = parseInt(val.innerText);
         getValueTip(value);
      }
   })
};

function getValueTip(value) {
   let totalTip = (valueBill.value * value) / 100;
   let total = valueBill.value / valuePeople.value;

   tipAmount.innerHTML = `${totalTip.toFixed(2)}`;
   tipTotal.innerHTML = `${total.toFixed(2)}`;
}


function reset() {
   tipAmount.innerHTML = "$0.00";
   tipTotal.innerHTML = "$0.00";
   valuePeople.value= "0";
   valueBill.value = "0";
}
