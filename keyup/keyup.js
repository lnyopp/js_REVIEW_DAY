let newDiv = $('body').append('<div id="myText"><div>')


$('#text').keyup(function(e){
    alert($('input').val());
    $('#mytext').append($('input').val());
});


// console.log(newDiv);
// console.log($('input').val());

// .appendTo('#myText');
