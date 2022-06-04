const circles = [
  document.getElementById("circle1"),
  document.getElementById("circle2"),
  document.getElementById("circle3"),
  document.getElementById("circle4"),
];
const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const slide3 = document.getElementById("slide-3");

const slide1Info = document.getElementById("slider-info-1");
const slide2Info = document.getElementById("slider-info-2");
const slide3Info = document.getElementById("slider-info-3");

const circle1 = document.getElementById("circle-1");
const circle2 = document.getElementById("circle-2");
const circle3 = document.getElementById("circle-3");

const circle1Lg = document.getElementById("circle-1-lg");
const circle2Lg = document.getElementById("circle-2-lg");
const circle3Lg = document.getElementById("circle-3-lg");

circle1.addEventListener("click", () => {
  circle1.style.color = "crimson";
  circle2.style.color = "white";
  circle3.style.color = "white";
  circle1Lg.style.color = "crimson";
  circle2Lg.style.color = "white";
  circle3Lg.style.color = "white";

  slide1.style.left = "0%";

  slide2.style.left = "100%";
  slide3.style.left = "200%";
  slide1Info.style.left = "0%";

  slide2Info.style.left = "100%";
  slide3Info.style.left = "200%";
});

circle1Lg.addEventListener("click", () => {
  circle1.style.color = "crimson";
  circle2.style.color = "white";
  circle3.style.color = "white";
  circle1Lg.style.color = "crimson";
  circle2Lg.style.color = "white";
  circle3Lg.style.color = "white";

  slide1.style.left = "0%";
  slide2.style.left = "100%";
  slide3.style.left = "200%";
  slide1Info.style.left = "0%";
  slide2Info.style.left = "100%";
  slide3Info.style.left = "200%";
});

circle2.addEventListener("click", () => {
  circle1.style.color = "white";
  circle2.style.color = "crimson";
  circle3.style.color = "white";
  circle1Lg.style.color = "white";
  circle2Lg.style.color = "crimson";
  circle3Lg.style.color = "white";

  slide1.style.left = "-100%";
  slide2.style.left = "0%";
  slide3.style.left = "100%";
  slide1Info.style.left = "-100%";
  slide2Info.style.left = "0%";
  slide3Info.style.left = "100%";
});

circle2Lg.addEventListener("click", () => {
  circle1.style.color = "white";
  circle2.style.color = "crimson";
  circle3.style.color = "white";
  circle1Lg.style.color = "white";
  circle2Lg.style.color = "crimson";
  circle3Lg.style.color = "white";

  slide1.style.left = "-100%";
  slide2.style.left = "0%";
  slide3.style.left = "100%";

  slide1Info.style.left = "-100%";
  slide2Info.style.left = "0%";
  slide3Info.style.left = "100%";
});

circle3.addEventListener("click", () => {
  circle1.style.color = "white";
  circle2.style.color = "white";
  circle3.style.color = "crimson";
  circle1Lg.style.color = "white";
  circle2Lg.style.color = "white";
  circle3Lg.style.color = "crimson";

  slide1.style.left = "-200%";
  slide2.style.left = "-100%";
  slide3.style.left = "0%";
  slide1Info.style.left = "-200%";
  slide2Info.style.left = "-100%";
  slide3Info.style.left = "0%";
});

circle3Lg.addEventListener("click", () => {
  circle1.style.color = "white";
  circle2.style.color = "white";
  circle3.style.color = "crimson";
  circle1Lg.style.color = "white";
  circle2Lg.style.color = "white";
  circle3Lg.style.color = "crimson";

  slide1.style.left = "-200%";
  slide2.style.left = "-100%";
  slide3.style.left = "0%";
  slide1Info.style.left = "-200%";
  slide2Info.style.left = "-100%";
  slide3Info.style.left = "0%";
});
