// user interface logic below
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var inputPhrase = $("input#phrase").val();
    console.log(inputPhrase);
    var inputValues = inputPhrase.split(" ");
    console.log("inputValues: ", inputValues);
  });
});