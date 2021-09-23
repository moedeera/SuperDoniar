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


// Slider  function 
const LeftBtn = document.querySelector(".arrow-left")
const rightBtn = document.querySelector(".arrow-right")
const circles = [document.getElementById("circle1"),document.getElementById("circle2")
,document.getElementById("circle3"),document.getElementById("circle4")]
const slide = document.querySelectorAll(".slide")
var current  = 0;  



LeftBtn.addEventListener('click', (e)=>{

e.preventDefault();
MoveLeft();


})


rightBtn.addEventListener('click',(e)=>{
e.preventDefault();
MoveRight();


})

setInterval(MoveRight, 5000);

function MoveLeft (){

if (current===0){

current = 3;
var z = 0; 

slide[0].style.left='-300%'
slide[1].style.left = '-200%'
slide[2].style.left = '-100%'
slide[3].style.left = '0'
} 


else if (current===3){

current =2 ;

slide[0].style.left='-200%'
slide[1].style.left = '-100%'
slide[2].style.left = '0'
slide[3].style.left = '100%'
} 

else if (current===2){

  current =1 ;
  
  slide[0].style.left='-100%'
  slide[1].style.left = '0%'
  slide[2].style.left = '100%'
  slide[3].style.left = '200%'
  } 
  
  else if (current===1){

    current =0 ;
    
    slide[0].style.left='0%'
    slide[1].style.left = '100%'
    slide[2].style.left = '200%'
    slide[3].style.left = '300%'
    } 
    

    CircleUpdate()



}


function MoveRight (){

  if (current===0){
  
  current = 1;

  
  slide[0].style.left='-100%'
  slide[1].style.left = '0%'
  slide[2].style.left = '100%'
  slide[3].style.left = '200%'
  } 
  
  
  else if (current===1){
  
  current =2 ;
  
  slide[0].style.left='-200%'
  slide[1].style.left = '-100%'
  slide[2].style.left = '0'
  slide[3].style.left = '100%'
  } 
  
  else if (current===2){
  
    current =3 ;
    
    slide[0].style.left='-300%'
    slide[1].style.left = '-200%'
    slide[2].style.left = '-100%'
    slide[3].style.left = '0%'
    } 
    
    else if (current===3){
  
      current =0 ;
      
      slide[0].style.left='0%'
      slide[1].style.left = '100%'
      slide[2].style.left = '200%'
      slide[3].style.left = '300%'
      } 
      
  
  
      CircleUpdate()
  
  
  }

function CircleUpdate(){

for (var j=0; j<circles.length; j++){

  circles[j].classList.remove("chosen");
if (current===j){
circles[j].classList.add("chosen")
}


}





}


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}


