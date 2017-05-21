// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

  $(document).on("turbolinks:load", function() {
  var currColor = location.pathname.split('/')[1];
  console.log("HELLO",currColor);
  $("body").css("background-color", currColor);

  page_view_count[currColor] += 1;
  $("#"+currColor+" .view_count.badge").text(page_view_count[currColor]);
});
