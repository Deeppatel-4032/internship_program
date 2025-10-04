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

  // Hover effect using jQuery
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

  // Initially hide all footer social links
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
});
