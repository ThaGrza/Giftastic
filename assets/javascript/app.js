var topics = ['tigers', 'robots', 'space'];

generateButtons();
// Funtion for genrating buttons.
function generateButtons() {
    $("#buttons").empty();
// Loops through array and generates buttons in "buttuns" div.
    for (var i = 0; i < topics.length; i++) {
      var a = $("<button class='btn-primary'>");
      a.addClass("gif");
      a.attr("gif-data", topics[i]);
      a.text(topics[i]);
      $("#buttons").append(a);
    }
};

$(document).ready(function(){
    $("#buttons").on("click", ".gif", function(){
        var gifImage = $(this).attr("gif-data");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifImage + "api_key=yFYPFKROkSJmh6uPLhNDPJ3G4pbKnfMm";

        // Ajax request to the giphy api
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response))


    }
}