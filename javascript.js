
  $("#info").bind("click", function() {
    $("#infoTab").show();
    $("#homepage").hide();
    $("#guidelinesTab").hide();
    $("#detailsTab").hide();
 });

 $("#guidelines").bind("click", function() {
  $("#guidelinesTab").show();
  $("#homepage").hide();
  $("#infoTab").hide();
  $("#detailsTab").hide();
});

$("#details").bind("click", function() {
  $("#detailsTab").show();
  $("#homepage").hide();
  $("#guidelinesTab").hide();
  $("#infoTab").hide();
});

$("#home").bind("click", function() {
  $("#homepage").show();
  $("#detailsTab").hide();
  $("#guidelinesTab").hide();
  $("#infoTab").hide();
});