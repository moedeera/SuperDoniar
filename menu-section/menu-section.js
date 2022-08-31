// Toggle Menu

var MenuTables = [
  document.getElementById("opt1"),
  document.getElementById("opt2"),
  document.getElementById("opt3"),
  document.getElementById("opt4"),
];

var MenuHeaders = [
  document.getElementById("opt1h"),
  document.getElementById("opt2h"),
  document.getElementById("opt3h"),
  document.getElementById("opt4h"),
];

var MenuTargets = [
  document.getElementById("opt1ht"),
  document.getElementById("opt2ht"),
  document.getElementById("opt3ht"),
  document.getElementById("opt4ht"),
];

var pointerTargets = [
  document.getElementById("menu-pointer"),
  document.getElementById("menu-pointer2"),
  document.getElementById("menu-pointer3"),
  document.getElementById("menu-pointer4"),
];

document.getElementById("choices-section").addEventListener("click", (e) => {
  e.preventDefault();
  //

  for (var j = 0; j < MenuTargets.length; j++) {
    if (e.target === MenuTargets[j]) {
      if (MenuTables[j].style.bottom === "30%") {
        ClearMenus();
      } else {
        ClearMenus();
        MenuTables[j].style.bottom = "30%";
        MenuHeaders[j].style.top = "10%";
        pointerTargets[j].style.transform = "rotate(180deg)";
      }
    }
  }
});

// MenuHeaders[0].addEventListener("click", (e) => {
//   if (MenuTables[0].style.bottom === "30%") {
//     ClearMenus();
//   } else {
//     ClearMenus();
//     MenuTables[0].style.bottom = "30%";
//     MenuHeaders[0].style.top = "10%";
//     pointerTargets[0].style.transform = "rotate(180deg)";
//   }
// });
// MenuHeaders[1].addEventListener("click", (e) => {
//   if (MenuTables[1].style.bottom === "30%") {
//     ClearMenus();
//   } else {
//     ClearMenus();
//     MenuTables[1].style.bottom = "30%";
//     MenuHeaders[1].style.top = "10%";
//     pointerTargets[1].style.transform = "rotate(180deg)";
//   }
// });
// MenuHeaders[2].addEventListener("click", (e) => {
//   if (MenuTables[2].style.bottom === "30%") {
//     ClearMenus();
//   } else {
//     ClearMenus();
//     MenuTables[2].style.bottom = "30%";
//     MenuHeaders[2].style.top = "10%";
//     pointerTargets[2].style.transform = "rotate(180deg)";
//   }
// });
// MenuHeaders[3].addEventListener("click", (e) => {
//   if (MenuTables[3].style.bottom === "30%") {
//     ClearMenus();
//   } else {
//     ClearMenus();
//     MenuTables[3].style.bottom = "30%";
//     MenuHeaders[3].style.top = "10%";
//     pointerTargets[3].style.transform = "rotate(180deg)";
//   }
// });

function ClearMenus() {
  for (var j = 0; j < MenuTables.length; j++) {
    MenuHeaders[j].style.top = "50%";
    MenuTables[j].style.bottom = "-100%";
    pointerTargets[j].style.transform = "rotate(0deg)";
  }
}
