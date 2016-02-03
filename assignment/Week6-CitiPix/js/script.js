var city = ["NYC","SF","LA","ATX","SYD"];
//            0     1    2    3     4

 for (var i = 0; i < city.length; i++ ) {
    $('#city-type').append('<option>'+city[i]+'<option>');
 }

 $('form').on('change', '#city-type', function(){
    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();
        if (city === "nyc"){
          $("header").css("background-color", "transparent");
          $("p").html("This is New York");
          $('body').attr("class","nyc");
      } else if (city === "sf" ){
          $("header").css("background-color", "transparent");
          $("p").html("This is San Francisco");
          $('body').attr('class','sf');
      } else if (city === "la") {
          $("header").css("background-color", "transparent");
          $("p").html("This is Los Angeles");
          $('body').attr('class','la');
      } else if (city ==="atx") {
          $("header").css("background-color", "transparent");
          $("p").html("This is Austin");
          $('body').attr('class','austin');
      } else if (city === "sydney" || city ==="syd") {
          $("header").css("background-color", "transparent");
          $("p").html("This is Sydney");
          $('body').attr('class','sydney');
      } else if (city == "") {
          alert("Please choose another City");
  }
});

console.log("dropdown check #5");
