// Business logic





// User interface logic

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    const userName = $("input#name").val();
    const favFoods = $("#foods").val();
  
    
    $("#output").text(userName);
    $("#output2").text(favFoods);
  });
});