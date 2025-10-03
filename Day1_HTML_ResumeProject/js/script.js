// alert message
window.onload = function () {
  alert("Page has loaded successfully!");
};

// name add and Coure
document.addEventListener("DOMContentLoaded", () => {
  let nameTitle = document.getElementById("name-title");
  let couresTitle = document.getElementById("coures");

  nameTitle.innerHTML = "Deep patel";
  couresTitle.innerHTML = "Backend Developer";
});

// nav-bar manu background
document.addEventListener("DOMContentLoaded", () => {
  let navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((link) => {
    link.style.padding = "6px 12px";
    link.style.borderRadius = "6px";

    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "white";
      link.style.color = "black";
    });

    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "";
      link.style.color = "white";
    });
  });
});

// about bg change
document.addEventListener("DOMContentLoaded", () => {
  let aboutSelect = document.getElementById("about");
  let changeBtn = document.getElementById("change-bg-btn");

  let bgDark = "#333";
  let lineaGradient = `linear-gradient(
    90deg,
    rgba(180, 75, 201, 1) 0%,
    rgba(139, 101, 214, 1) 27%,
    rgba(153, 34, 227, 1) 100%,
    rgba(116, 129, 214, 1) 20%
  )`;

  let isDark = false;

  changeBtn.addEventListener("click", () => {
    if (isDark) {
      aboutSelect.style.background = lineaGradient;
    } else {
      aboutSelect.style.background = bgDark;
    }
    isDark = !isDark;
  });
});
