// jQuery Scripting
$(function () {
  "use strict";
  // Triger Views
  var desktop = $(".views .view .desktop");
  var phone = $(".views .view .phone");
  var desktopIcon = $(".views .view .desktop i");
  var phoneIcon = $(".views .view .phone i");

  desktop.click(function () {
    desktopIcon.addClass("active");
    phoneIcon.removeClass("active");
    $(".page-content-md").css("width", "100%");
  });
  phone.click(function () {
    desktopIcon.removeClass("active");
    phoneIcon.addClass("active");
    $(".page-content-phone").css({
      width: "375px",
      "margin-left": "auto",
      "margin-right": "auto",
    });
  });
  // Freelancing Items
  var freeLancLink = $(".contacts .freelancing ul li a");
  freeLancLink.hover(
    function () {
      if ($(this).parent().hasClass("upwork")) {
        $(this).find("p").animate(
          {
            width: 132,
          },
          50
        );
        $(this).find("p").text("/Abdelhady Nagi");
        $(this).find("p").fadeIn(300);
      } else if ($(this).parent().hasClass("freelancer")) {
        $(this).find("p").animate(
          {
            width: 132,
          },
          50
        );
        $(this).find("p").text("@AbdelhadyNagi");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).parent().hasClass("truelancer")) {
        $(this).find("p").animate(
          {
            width: 132,
          },
          50
        );
        $(this).find("p").text("/abdelhadynagi");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).parent().hasClass("mstql")) {
        $(this).find("p").animate(
          {
            width: 132,
          },
          50
        );
        $(this).find("p").html("&nbsp;/Abdelhady_97");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).parent().hasClass("gmail")) {
        $(this).find("p").animate(
          {
            width: 132,
          },
          50
        );
        $(this).find("p").html("&nbsp;/abdelhadynagi97");
        $(this).find("p").fadeIn("fast");
      }
    },
    function () {
      $(this).find("p").text("");
      $(this).parent().animate;
      $(this).find("p").animate(
        {
          width: 0,
        },
        50
      );
      $(this).find("p").fadeOut("fast");
    }
  );
  // Socail Media Items
  var SocialLink = $(".contacts .social-contacts ul li a");
  SocialLink.hover(
    function () {
      if ($(this).parent().hasClass("facebook")) {
        $(this).find("p").animate(
          {
            width: 132,
          },
          50
        );
        $(this).find("p").html("&nbsp;/AbdelhadyNagi97");
        $(this).find("p").fadeIn(300);
      } else if ($(this).parent().hasClass("twitter")) {
        $(this).find("p").animate(
          {
            width: 150,
          },
          50
        );
        $(this).find("p").text("@AbdelhadyOmar97");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).parent().hasClass("linkedin")) {
        $(this).find("p").animate(
          {
            width: 132,
          },
          50
        );
        $(this).find("p").text("/AbdelhadyNagi");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).parent().hasClass("instegram")) {
        $(this).find("p").animate(
          {
            width: 140,
          },
          50
        );
        $(this).find("p").html("&nbsp;@abdelhady_nagi");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).parent().hasClass("youtube")) {
        $(this).find("p").animate(
          {
            width: 132,
          },
          50
        );
        $(this).find("p").html("Abdelhady Nagi");
        $(this).find("p").fadeIn("fast");
      }
    },
    function () {
      $(this).find("p").text("");
      $(this).parent().animate;
      $(this).find("p").animate(
        {
          width: 0,
        },
        50
      );
      $(this).find("p").fadeOut("fast");
    }
  );
  //Hide Social Accounts on Contact Section
  $(".tabs a").click(function () {
    if ($(".tabs .contact").hasClass("active")) {
      $(".social-accounts").fadeOut("fast");
    } else {
      $(".social-accounts").fadeIn("fast");
    }
  });
});
// Trigger egyfwd Modal
var myModal = document.getElementById("myModal");
myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

// *.....................................................................*
