// Business logic





// User interface logic

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    const userName = $("input#name").val();
    const favFoods = $("#foods").val();
    const music = $("input:radio[name=music]:checked").val();
  
    
    $("#output").text(userName);
    $("#output2").text(favFoods);
    $("#output3").text(music);
  });
});