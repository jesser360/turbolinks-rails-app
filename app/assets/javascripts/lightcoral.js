// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("turbolinks:load", function() {
  var currColor = location.pathname.split('/')[1];
  console.log("HELLO",currColor);
  $("body").css("background-color", "lightcoral");

  var current_path = "lightcoral";
  page_view_count[current_path] += 1;
  $("#lightcoral .view_count.badge").text(page_view_count[current_path]);
});
