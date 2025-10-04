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

// form validation
// storege
// let storege = [];
// document.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputName = document.getElementById("uname");
//   let inputEmail = document.getElementById("email");
//   let inputDescription = document.getElementById("description");

//   let nameError = document.getElementById("nameError");
//   let emailError = document.getElementById("emailError");
//   let descriptionError = document.getElementById("descriptionError");

//   const nameValue = inputName.value;
//   const emailValue = inputEmail.value;
//   const descriptionValue = inputDescription.value;

//   nameError.innerHTML = "";
//   emailValue.innerHTML = "";
//   descriptionValue.innerHTML = "";

//   if (nameValue == "") {
//     nameError.innerHTML = "required name field";
//   } else if (emailValue == "") {
//     emailError.innerHTML = "required email field";
//   } else if (descriptionValue == "") {
//     descriptionError.innerHTML = "required Message field";
//   } else {
//     alert("Form submitted successfully!");
//     storege.push({
//       name: nameValue,
//       email: emailValue,
//       description: descriptionValue,
//     });
//     console.log(storege);

//     inputName.value = "";
//     inputEmail.value = "";
//     inputDescription.value = "";
//   }
// });
