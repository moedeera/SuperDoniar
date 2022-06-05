const menuSliderBtn1 = document.getElementById("menu-slider-btn-1");

const menuSlideSet1 = document.getElementById("menu-slider-set-1");

menuSliderBtn1.addEventListener("click", () => {
  console.log("clicked");
  menuSlideSet1.style.transform = "translateY(0)";
});
