var phone = document.getElementById("phone");
phone.onclick = function () {
  window.open(
    "https://abdelhadynagi.github.io/Abdelhady--Portfolio/",
    "mywin",
    "width=400,height=1024"
  );
};
// jQuery Scripting
$(function () {
  "use strict";
  // Triger Loading Page
  $(window).on("load", function () {
    $("#loading-page").fadeOut();
  });
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
      if ($(this).hasClass("upwork") && $(document).width() > 767) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("/Abdelhady&nbsp;Nagi").fadeIn("fast");
      } else if ($(this).hasClass("freelancer") && $(document).width() > 767) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("@AbdelhadyNagi").fadeIn("fast");
      } else if ($(this).hasClass("truelancer") && $(document).width() > 767) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("/abdelhadynagi").fadeIn("fast");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("mstql") && $(document).width() > 767) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("&nbsp;/Abdelhady_97").fadeIn("fast");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("gmail") && $(document).width() > 767) {
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
      if ($(document).width() > 767) {
        $(this).find("p").html("").fadeOut("fast");
        $(this).find("a").animate(
          {
            width: 0,
          },
          150
        );
      }
    }
  );
  // Socail Media Items
  var SocialLink = $(".contacts .social-contacts ul li");
  SocialLink.hover(
    function () {
      if ($(this).hasClass("facebook") && $(document).width() > 767) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").fadeIn().html("&nbsp;/AbdelhadyNagi97");
        // $(this).find("p")
      } else if ($(this).hasClass("twitter") && $(document).width() > 767) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("@AbdelhadyOmar97");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("linkedin") && $(document).width() > 767) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("/AbdelhadyNagi");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("instegram") && $(document).width() > 767) {
        $(this).find("a").animate(
          {
            width: 220,
          },
          150
        );
        $(this).find("p").html("@abdelhady_nagi");
        $(this).find("p").fadeIn("fast");
      } else if ($(this).hasClass("youtube") && $(document).width() > 767) {
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
      if ($(document).width() > 767) {
        $(this).find("p").html("");
        $(this).find("a").animate(
          {
            width: 0,
          },
          250
        );
        $(this).find("p").fadeOut("fast");
      }
    }
  );
  //Hide Social Accounts on Contact Section
  $("#list-tab a").click(function () {
    if ($(".fade-social-accounts-pc").hasClass("active")) {
      $("#socialAccounts").fadeOut("fast");
    } else if ($(".fade-social-accounts-phone").hasClass("active")) {
      $("#socialAccounts").fadeOut("fast");
    } else {
      $("#socialAccounts").fadeIn("fast");
    }
  });
  //Trigger Dark-light Desktop Mode
  var clicks = 0;
  $(".views .dark-light").click(function () {
    if (clicks == 0) {
      $(".views .dark-light i:first-child").animate({
        left: 36,
      });
      $("link[href = 'css/light-mode.css']").attr("href", "css/dark-mode.css");
      $(".views .dark-light i:nth-child(2)").css("color", "white");
      clicks++;
    } else {
      $(".views .dark-light i:first-child").animate({
        left: 6,
      });
      $("link[href = 'css/dark-mode.css']").attr("href", "css/light-mode.css");
      clicks--;
    }
  });
  //Trigger Dark-light Mobile Mode
  var clicks = 0;
  $("footer .dark-light").click(function () {
    if (clicks == 0) {
      $("footer .dark-light i:first-child").animate({
        left: 28,
      });
      $("link[href = 'css/light-mode.css']").attr("href", "css/dark-mode.css");
      $("footer .dark-light i:nth-child(2)").css("color", "white");
      clicks++;
    } else {
      $("footer .dark-light i:first-child").animate({
        left: 6,
      });
      $("link[href = 'css/dark-mode.css']").attr("href", "css/light-mode.css");
      clicks--;
    }
  });
});
// Trigger egyfwd Modal
var myModal = document.getElementById("myModal");
myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

// *.....................................................................*
