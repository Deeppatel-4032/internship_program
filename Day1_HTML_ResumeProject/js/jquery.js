// hide/show about section
$(document).ready(function () {
  $("#toggleBtn").click(function () {
    $("#about").toggle();
  });

  //skills section
  $(".skills li").hover(
    function () {
      $(this).addClass("hovered").animate({ paddingLeft: "30px" }, 200);
    },
    function () {
      $(this).removeClass("hovered").animate({ paddingLeft: "20px" }, 200);
    }
  );

  // Hover effect form submit using jQuery
  $("#submitBtn").hover(
    function () {
      $(this).css("background", "linear-gradient(45deg, #39bb68ff, #8ff4c0ff)");
    },
    function () {
      $(this).css("background", "transparent");
    }
  );

  // Form validation
  $("#myFrom").submit(function (e) {
    e.preventDefault();

    let inputName = $("#uname").val();
    let inputEmail = $("#email").val();
    let inputDescription = $("#description").val();
    let status = $("#status");
    status.removeClass("error success");

    if (!inputName) {
      status.text("Please fill out Name field.").addClass("error");
      return;
    }
    if (!inputEmail) {
      status.text("Please fill out Email field.").addClass("error");
      return;
    }
    if (!inputDescription) {
      status.text("Please fill out Description field.").addClass("error");
      return;
    }

    status.text("Message sent successfully!").addClass("success");
    $("#myFrom")[0].reset();

    setTimeout(() => {
      status.text("").removeClass("success");
    }, 3000);
  });

  // hide all footer social-media
  $(".footer .social-media ul li a").hide();

  // Fade in on hover of the list item
  $(".footer .social-media ul li").hover(
    function () {
      $(this).find("a").stop().fadeIn(400);
    },
    function () {
      $(this).find("a").stop().fadeOut(400);
    }
  );

  // mouse enters a skill hover add
  $("ul.skills").on("mouseenter", "li", function () {
    $(this).addClass("hovered");
  });

  // mouse leaves a skill hover remove
  $("ul.skills").on("mouseleave", "li", function () {
    $(this).removeClass("hovered");
  });

  // Function to fetch JSON data and return a Promise
  function fetchData() {
    return $.ajax({
      url: "data.json",
      method: "GET",
      dataType: "json",
      timeout: 5000,
      beforeSend: function () {
        $("#errorMessage").hide();
        $("#skillsContainer").empty();
        $("#tableData").empty();
      },
    });
  }

  // Function to render skills
  function renderSkills(skills) {
    skills.forEach((skill) => {
      $("#skillsContainer").append(`
        <li>
          <img src="${skill.icon}" alt="${skill.name}">
          ${skill.name}
        </li>
      `);
    });
  }

  // Function to render education
  function renderEducation(education) {
    education.forEach((e) => {
      $("#tableData").append(`
        <tr>
          <td class="p-3">${e.school}</td>
          <td class="p-3">${e.class}</td>
          <td class="p-3">${e.institute}</td>
          <td class="p-3">${e.year}</td>
        </tr>
      `);
    });
  }

  // Function to load data using Promises
  function loadSkills() {
    fetchData()
      .then((data) => {
        renderSkills(data.skills);
        renderEducation(data.education);
      })
      .catch((xhr) => {
        let message = "";

        if (xhr.status === 404) {
          message = "⚠️ Oops! The data file was not found (404).";
        } else if (xhr.status === 500) {
          message = "🚨 Server error occurred. Please try again later.";
        } else if (xhr.statusText === "timeout") {
          message =
            "⏳ The request took too long. Please refresh and try again.";
        } else {
          message =
            "❌ Something went wrong while loading data. Please try again.";
        }

        $("#errorMessage").text(message).fadeIn();
      })
      .always(() => {
        setTimeout(() => $("#loading").fadeOut(), 500);
      });
  }
  // Initial load on page load
  loadSkills();

  // 🔁 Refresh button click
  $("#refreshData").on("click", function () {
    $("#loading").css("color", "white").text("🔁 Refreshing data...").fadeIn();
    loadSkills();
  });
});
