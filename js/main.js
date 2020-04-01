// user interface logic below
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var englishPhrase = $("input#phrase").val();
  
    var pigLatinPhrase = pigLatin(englishPhrase);

    $(".pig-latin").text(pigLatinPhrase);

    $("#result").show();


  });
});

