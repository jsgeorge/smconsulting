$(document).ready(function () {
  windowWidth = window.outerWidth;
  var contentWidth = $("body").width();
  var sizeDiff = windowWidth - contentWidth;
  actualSize = windowWidth - sizeDiff;

  var srchDisp = false;

  /*$('.srchForm').css({'display':'none'});*/
  $(".srchForm").css({ opacity: "0" });

  $(".srchLink").click(function () {
    if (!srchDisp) {
      $(this).css({ border: "none" });

      $(".srchForm").animate({ opacity: "1" });

      srchDisp = true;
    } else {
      $(".srchForm").animate({ opacity: "0" });

      srchDisp = false;
    }
  });
  $(".aboutBoxRed").mouseover(function () {
    $(".aboutBoxRed .aboutBoxImage").css({ opacity: "0.7" });
  });
  $(".aboutBoxRed").mouseout(function () {
    $(".aboutBoxRed .aboutBoxImage").css({ opacity: "1" });
  });

  $(".aboutBoxGreen").mouseover(function () {
    $(".aboutBoxGreen .aboutBoxImage").css({ opacity: "0.7" });
  });
  $(".aboutBoxGreen").mouseout(function () {
    $(".aboutBoxGreen .aboutBoxImage").css({ opacity: "1" });
  });

  $(".aboutBoxBlue").mouseover(function () {
    $(".aboutBoxBlue .aboutBoxImage").css({ opacity: "0.7" });
  });
  $(".aboutBoxBlue").mouseout(function () {
    $(".aboutBoxBlue .aboutBoxImage").css({ opacity: "1" });
  });
});
/* Create HTML5 element for IE */
document.createElement("section");

$(window).scroll(function () {
  /*$('.srchForm').animate({opacity: "0"});*/
});

$(function () {
  $(".page-scroll a").bind("click", function () {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});
