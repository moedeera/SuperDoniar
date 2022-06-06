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
      }
    }
  }
});

function ClearMenus() {
  for (var j = 0; j < MenuTables.length; j++) {
    MenuHeaders[j].style.top = "50%";
    MenuTables[j].style.bottom = "-100%";
  }
}
