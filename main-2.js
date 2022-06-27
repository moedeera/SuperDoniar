//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.getElementById("nav-bar-section").style =
      "background:rgba(255, 255, 255, 0.95); padding:35px 0; color:white!important";
    // document.getElementById("nav-large").style.color = "white";
  } else {
    mybutton.style.display = "none";
    document.getElementById("nav-bar-section").style = "background:white";
    document.getElementById("nav-large-menu").style =
      "color: white !important;";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const faders = document.querySelectorAll(".fade-test");

const appearOptions = {
  threshold: 1,
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    console.log("hello");
    appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
