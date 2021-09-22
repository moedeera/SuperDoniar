// hamberger menu function 


const menu = document.querySelector(".menu")
const form = document.querySelector(".form-modal")
const exitBtn = document.getElementById("exit")
var click = 1;

menu.addEventListener('click', (e)=>{

e.preventDefault()
if (click === 1){
document.getElementById("form-modal").style.top ="0"
click = 2;
} else if (click === 2 ){
  document.getElementById("form-modal").style.top ="-100vh" 
  click = 1;
}

})

exitBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  document.getElementById("form-modal").style.top ="-100vh" 
  click = 1;

})