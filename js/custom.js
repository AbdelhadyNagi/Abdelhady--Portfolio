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
});
// Trigger egyfwd Modal
var myModal = document.getElementById("myModal");
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

// *.....................................................................*
