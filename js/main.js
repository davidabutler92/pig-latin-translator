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

var pigLatin = function pigLatin(englishPhrase) {
  
  var vowels = ["a","e","i","o","u"];
  var englishArr = englishPhrase.split("");
  // console.log(englishArr);
  var vowelIndex

  //find vowel index in a string
  for(var i = 0; i < englishArr.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
      if(englishArr[i] === vowels[j]) {
        if(vowelIndex === undefined) {
          vowelIndex === englishArr.indexOf(englishArr[i]);
          console.log(vowelIndex);
        }
      }
    }
  } 


};

