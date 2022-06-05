const menuSliderBtn1 = document.getElementById("menu-slider-btn-1");
const menuSliderBtn2 = document.getElementById("menu-slider-btn-2");

const menuSlideSet1 = document.getElementById("menu-slider-set-1");
const menuSlideSet2 = document.getElementById("menu-slider-set-2");

const slideBtn1Left = document.getElementById("arrow-menu-slider-left");
const slideBtn1Right = document.getElementById("arrow-menu-slider-right");

let menuSlideDropDown = "none";

function clearCurrentSLide() {
  menuSlideSet1.style.display = "none";
  menuSlideSet2.style.display = "none";
}

menuSliderBtn1.addEventListener("click", () => {
  if (menuSlideDropDown === "none") {
    menuSlideSet1.style.display = "block";

    menuSlideDropDown = "option1";
  } else if (menuSlideDropDown === "option1") {
    console.log("condition 2");
    menuSlideSet1.style.display = "none";
    menuSlideDropDown = "none";
  } else {
    clearCurrentSLide();
    menuSlideSet1.style.display = "block";
    menuSlideDropDown = "option1";
  }
});

menuSliderBtn2.addEventListener("click", () => {
  console.log(menuSlideDropDown);
  if (menuSlideDropDown === "none") {
    menuSlideSet2.style.display = "block";

    menuSlideDropDown = "option2";
  } else if (menuSlideDropDown === "option2") {
    menuSlideSet2.style.display = "none";
    menuSlideDropDown = "none";
  } else {
    clearCurrentSLide();
    menuSlideSet2.style.display = "block";
    menuSlideDropDown = "option2";
  }
});

/// First Slider ///

const menuSlider1slide1 = document.getElementById("menu-slider-option-1");
const menuSlider1slide2 = document.getElementById("menu-slider-option-2");
const menuSlider1slide3 = document.getElementById("menu-slider-option-3");
const menuSlider1slide4 = document.getElementById("menu-slider-option-4");
const menuSlider1slide5 = document.getElementById("menu-slider-option-5");

var menuSlider1 = [
  menuSlider1slide1,
  menuSlider1slide2,
  menuSlider1slide3,
  menuSlider1slide4,
  menuSlider1slide5,
];

function shiftSlider(x, array) {
  if (x === 1) {
    array[0].style.transform = "translateX(-400%)";
    array[1].style.transform = "translateX(-300%)";
    array[2].style.transform = "translateX(-200%)";
    array[3].style.transform = "translateX(-100%)";
    array[4].style.transform = "translateX(0%)";
    slidePosition = 5;
  } else if (x === 2) {
    array[0].style.transform = "translateX(-0%)";
    array[1].style.transform = "translateX(100%)";
    array[2].style.transform = "translateX(200%)";
    array[3].style.transform = "translateX(300%)";
    array[4].style.transform = "translateX(400%)";
    slidePosition = 1;
  } else if (x === 3) {
    array[0].style.transform = "translateX(-100%)";
    array[1].style.transform = "translateX(-0%)";
    array[2].style.transform = "translateX(100%)";
    array[3].style.transform = "translateX(200%)";
    array[4].style.transform = "translateX(300%)";
    slidePosition = 2;
  } else if (x === 4) {
    array[0].style.transform = "translateX(-200%)";
    array[1].style.transform = "translateX(-100%)";
    array[2].style.transform = "translateX(-0%)";
    array[3].style.transform = "translateX(100%)";
    array[4].style.transform = "translateX(200%)";
    slidePosition = 3;
  } else if (x === 5) {
    array[0].style.transform = "translateX(-300%)";
    array[1].style.transform = "translateX(-200%)";
    array[2].style.transform = "translateX(-100%)";
    array[3].style.transform = "translateX(0%)";
    array[4].style.transform = "translateX(100%)";
    slidePosition = 4;
  }
}

let slidePosition = 3;

slideBtn1Left.addEventListener("click", () => {
  console.log(slidePosition);

  shiftSlider(slidePosition, menuSlider1);
});
