const nBill = document.getElementById('inputBill');
const nPeople = document.getElementById('inputPeople');
const vAmount = document.getElementById('vAmount');
const pAmount = document.getElementById('pAmount');
const btnReset = document.getElementById('btnReset')
const btnCustom = document.querySelector('.btnCustom');
const btnOptions = document.querySelectorAll('.btnOptions');

nBill.addEventListener('input', calc)
nPeople.addEventListener('input', calc)
btnCustom.addEventListener('input', calc)

for (let i = 0; i <= btnOptions.length; i++) {
   btnOptions[i].addEventListener('input', () => {

      let tipOp = parseInt(btnOptions[i].value);
      let pessoas = Number(nPeople.value);
      let custo = Number(nBill.value);
      let por = (custo * tipOp) / 100;
      let tipAmount = por / pessoas;

      vAmount.innerHTML = "$" + tipAmount.toFixed(2);

   })
}

function calc() {
   let custo = Number(nBill.value);
   let pessoas = Number(nPeople.value);
   let tipCustom = Number(btnCustom.value);

   if (pessoas >= 1) {
      let por = (custo * tipCustom) / 100
      let tipAmount = por / pessoas;
      let total = custo / pessoas;
      vAmount.innerHTML = "$" + tipAmount.toFixed(2);
      pAmount.innerHTML = "$" + total.toFixed(2);
   }
}

btnReset.addEventListener('click', () => {
   nBill.value = '';
   nPeople.value = '';
   btnOptions.value = '';
   vAmount.innerText = '$0.00';
   pAmount.innerText = '$0.00';
})


