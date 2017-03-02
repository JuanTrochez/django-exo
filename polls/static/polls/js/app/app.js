$(document).ready(function($) {

  $("#changeBack").click(function() {
    $("body").toggleClass("change-bkg");
  });

  TweenMax.to("input[type='submit']", 2, {opacity: 1});
});
