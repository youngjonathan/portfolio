$(document).ready(function() {
  $(".bio-button").click(function() {
      $("html, body").animate({
        scrollTop: $("#bio").offset().top}, 1000);
  });

  $(".edu-button").click(function() {
      $("html, body").animate({
        scrollTop: $("#education").offset().top}, 1000);
  });

  $(".exp-button").click(function() {
      $("html, body").animate({
        scrollTop: $("#exp").offset().top}, 1000);
  });

  $(".skill-button").click(function() {
      $("html, body").animate({
        scrollTop: $("#skills").offset().top}, 1000);
  });

  $(".proj-button").click(function() {
      $("html, body").animate({
        scrollTop: $("#proj").offset().top}, 1000);
  });

  $(".contact-button").click(function() {
      $("html, body").animate({
        scrollTop: $("#contact").offset().top}, 1000);
  });

});
