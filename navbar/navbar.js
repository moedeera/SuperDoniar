const smallNavOption1 = document.getElementById("nav-sm-menu-option-1");
const smallNavOption2 = document.getElementById("nav-sm-menu-option-2");
const smallNavOption3 = document.getElementById("nav-sm-menu-option-3");
const smallNavOption4 = document.getElementById("nav-sm-menu-option-4");

const smallOption1 = document.getElementById("drop-1");
const smallOption2 = document.getElementById("drop-2");
const smallOption3 = document.getElementById("drop-3");
const smallOption4 = document.getElementById("drop-4");

const arrow1 = document.getElementById("arrow-menu1");
const arrow2 = document.getElementById("arrow-menu2");
const arrow3 = document.getElementById("arrow-menu3");
const arrow4 = document.getElementById("arrow-menu4");

let option = "none";

const navbarButton = document.getElementById("navbar-menu");
const backArrow = document.getElementById("back-arrow");

function ClearOptions() {
  smallOption1.style.display = "none";
  smallOption2.style.display = "none";
  smallOption3.style.display = "none";
  smallOption4.style.display = "none";
  arrow1.innerHTML = ' <i class="fa fa-chevron-down"></i>';
  arrow2.innerHTML = ' <i class="fa fa-chevron-down"></i>';
  arrow3.innerHTML = ' <i class="fa fa-chevron-down"></i>';
  arrow4.innerHTML = ' <i class="fa fa-chevron-down"></i>';
}

smallNavOption1.addEventListener("click", () => {
  if (option === "none") {
    smallOption1.style.display = "flex";
    arrow1.innerHTML = ' <i class="fa fa-chevron-up"></i>';
    option = "menu";
  } else if (option === "menu") {
    smallOption1.style.display = "none";
    arrow1.innerHTML = ' <i class="fa fa-chevron-down"></i>';
    option = "none";
  } else {
    ClearOptions();
    smallOption1.style.display = "flex";
    arrow1.innerHTML = ' <i class="fa fa-chevron-up"></i>';
    option = "menu";
  }
});

smallNavOption2.addEventListener("click", () => {
  if (option === "none") {
    smallOption2.style.display = "flex";
    arrow2.innerHTML = ' <i class="fa fa-chevron-up"></i>';
    option = "hours";
  } else if (option === "hours") {
    smallOption2.style.display = "none";
    arrow2.innerHTML = ' <i class="fa fa-chevron-down"></i>';
    option = "none";
  } else {
    ClearOptions();
    smallOption2.style.display = "flex";
    arrow2.innerHTML = ' <i class="fa fa-chevron-up"></i>';
    option = "hours";
  }
});

smallNavOption3.addEventListener("click", () => {
  if (option === "none") {
    smallOption3.style.display = "flex";
    arrow3.innerHTML = ' <i class="fa fa-chevron-up"></i>';
    option = "location";
  } else if (option === "location") {
    smallOption3.style.display = "none";
    arrow3.innerHTML = ' <i class="fa fa-chevron-down"></i>';
    option = "none";
  } else {
    ClearOptions();
    smallOption3.style.display = "flex";
    arrow3.innerHTML = ' <i class="fa fa-chevron-up"></i>';
    option = "location";
  }
});

smallNavOption4.addEventListener("click", () => {
  if (option === "none") {
    smallOption4.style.display = "flex";
    arrow4.innerHTML = ' <i class="fa fa-chevron-up"></i>';
    option = "contact";
  } else if (option === "contact") {
    smallOption4.style.display = "none";
    arrow4.innerHTML = ' <i class="fa fa-chevron-down"></i>';
    option = "none";
  } else {
    ClearOptions();
    option = "contact";
    smallOption4.style.display = "flex";
    arrow4.innerHTML = ' <i class="fa fa-chevron-up"></i>';
  }
});

let menu = true;

navbarButton.addEventListener("click", () => {
  navbarButton.style = "opacity:0";
  navbarButton.style = "animation:rotate-disappear 600ms";
  setTimeout(() => {
    navbarButton.style = "display:none";
  }, 600);

  setTimeout(() => {
    backArrow.style = "display:block";
  }, 600);

  document.getElementById("menu-side-bar").style = "transform:translateX(0)";
});

backArrow.addEventListener("click", () => {
  navbarButton.style = "display:block";
  backArrow.style = "display:none";

  document.getElementById("menu-side-bar").style =
    "transform:translateX(-100%)";
});

const dropDown1btn = document.getElementById("drop-down-1");
const dropDown2btn = document.getElementById("drop-down-2");
const dropDown3btn = document.getElementById("drop-down-3");

const dropDownMenu1 = document.getElementById("ml-option-1");
const dropDownMenu2 = document.getElementById("ml-option-2");
const dropDownMenu3 = document.getElementById("ml-option-3");

const icon1 = document.getElementById("menu-icon-1");
const icon2 = document.getElementById("menu-icon-2");
const icon3 = document.getElementById("menu-icon-3");

function clearDropdowns(x) {
  // if (x === 1) {
  //     dropDownMenu2.style = "display:none";
  //     dropDownMenu3.style = "display:none";
  //     icon2.style = "transform:rotate(0deg)";
  //     icon3.style = "transform:rotate(0deg)";
  // }
  // else if (x === 2) {

  // } else if (x === 3) {

  // }
  dropDownMenu1.style = "display:none";
  dropDownMenu2.style = "display:none";
  dropDownMenu3.style = "display:none";
  icon1.style = "transform:rotate(0deg)";
  icon2.style = "transform:rotate(0deg)";
  icon3.style = "transform:rotate(0deg)";
}

dropDown1btn.addEventListener("mouseover", () => {
  clearDropdowns();
  dropDownMenu1.style = "display:grid";
  icon1.style = "transform:rotate(180deg)";
});
dropDown2btn.addEventListener("mouseover", () => {
  clearDropdowns();
  dropDownMenu2.style = "display:grid";
  icon2.style = "transform:rotate(180deg)";
});
dropDown3btn.addEventListener("mouseover", () => {
  clearDropdowns();
  dropDownMenu3.style = "display:grid";
  icon3.style = "transform:rotate(180deg)";
});

dropDownMenu1.addEventListener("mouseleave", () => {
  clearDropdowns();
});

dropDownMenu2.addEventListener("mouseleave", () => {
  clearDropdowns();
});

dropDownMenu3.addEventListener("mouseleave", () => {
  clearDropdowns();
});

document
  .getElementById("showcase-section")
  .addEventListener("mouseenter", () => {
    clearDropdowns();
  });

const pick = document.getElementById(".pick");
if (pick) {
  pick.addEventListener("click", () => {
    console.log("hey");
  });
}
