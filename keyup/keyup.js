
// My Code

let newDiv = $('body').append('<div id="myText"><div>')


$('#text').keyup(function(e){
    alert($('input').val());
    $('#mytext').append($('input').val());
});

// 

$("input").keyup(function () {
    //keyup is triggered when a key is released after being pressed.
    let value = $("input").val().trim();
    if (value === "") {
      $("input").focus();
    } else {
      alert(value);
      $("#text").append(value);
      $("input").val("");
    }
  })