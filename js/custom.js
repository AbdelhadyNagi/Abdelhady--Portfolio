var phone = document.getElementById("phone");
phone.onclick = function () {
  window.open(
    "https://abdelhadynagi.github.io/Abdelhady--Portfolio/",
    "mywin",
    "width=380,height=1024"
  );
};

// jQuery Scripting
$(function () {
  "use strict";
  // Triger Views
  var desktop = $(".views .view .desktop");
  var phoneView = $(".views .view .phone");
  var desktopIcon = $(".views .view .desktop i");
  var phoneIcon = $(".views .view .phone i");

  desktop.click(function () {
    desktopIcon.addClass("active");
    phoneIcon.removeClass("active");
    $("html").animate({
      width: "100%",
      marginLeft: 0,
      marginRight: 0,
    });
  });
  phoneView.hover(() => {
    desktopIcon.removeClass("active");
    phoneIcon.addClass("active");
  });
  phoneView.mouseleave(() => {
    desktopIcon.addClass("active");
    phoneIcon.removeClass("active");
  });
  // Freelancing Items
  var freeLancLink = $(".contacts .freelancing ul li");
  freeLancLink.hover(
    function () {
      if ($(this).hasClass("upwork")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("/Abdelhady&nbsp;Nagi").fadeIn("fast");
      } else if ($(this).hasClass("freelancer")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("@AbdelhadyNagi").fadeIn("fast");
      } else if ($(this).hasClass("truelancer")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("/abdelhadynagi").fadeIn("fast");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("mstql")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("&nbsp;/Abdelhady_97").fadeIn("fast");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("gmail")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("&nbsp;&nbsp;/abdelhadynagi97").fadeIn("fast");
        $(this).find("p").fadeIn("fast");
      }
    },
    function () {
      $(this).find("p").html("").fadeOut("fast");
      $(this).find("a").animate(
        {
          width: 0,
        },
        150
      );
    }
  );
  // Socail Media Items
  var SocialLink = $(".contacts .social-contacts ul li");
  SocialLink.hover(
    function () {
      if ($(this).hasClass("facebook")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").fadeIn().html("&nbsp;/AbdelhadyNagi97");
        // $(this).find("p")
      } else if ($(this).hasClass("twitter")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("@AbdelhadyOmar97");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("linkedin")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("/AbdelhadyNagi");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("instegram")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("@abdelhady_nagi");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("youtube")) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("&nbsp;&nbsp;Abdelhady&nbsp;Nagi");
        $(this).find("p").fadeIn("fast");
      }
    },
    function () {
      $(this).find("p").html("");
      $(this).find("a").animate(
        {
          width: 0,
        },
        250
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
  // Collapse Nav Section
});
// Trigger egyfwd Modal
var myModal = document.getElementById("myModal");
myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

// *.....................................................................*
