$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var under16 = age < 16;
    if (under16) {
      // do something only adults can do
      alert("You should not be driving");
      return;
    }
    if (age) {
          var quote = (100 - age) * 3;
          if (gender === 'male' && age < 26) {
            quote += 50;
          }

          $("#rate").empty().append(quote);
          $("#quote").show();
        } else {
          alert('Please enter your age.');
        }

        event.preventDefault();
  });
});
