const tips = document.querySelectorAll(".tips");

const valuePeople = document.querySelector("#input-people").value;
const valueBill = document.querySelector("#input-bill").value;

const tipAmount = document.querySelector('#tip-value');
const tipTotal = document.querySelector('#person-value');


tips.forEach(function (val) {
   console.log({val})
   val.addEventListener('click', handleClick)
})

function handleClick(event){
   console.log({event})
   tips.forEach(function (val) {
      console.log({val})
      val.classList.remove('tip-activ');
       if(event.target.innerHTML == val.innerHTML){
         val.classList.add('tip-activ');
       }
   })
}