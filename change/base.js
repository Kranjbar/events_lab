console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $("input.add").on("change", function handleChange(event) {
    var left = $("#left").val();
    var right = $("#right").val();
    });
});