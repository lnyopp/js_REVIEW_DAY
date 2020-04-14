
$(document).ready(function() {

$("#rollOver").hover(
    function() {
    $(this).empty();
    $(this).append(' Mouse Over ');
    console.log('first function')
  },
  function(){
    $(this).empty();
    $(this).append(' Mouse Out ');
    console.log('second function')
  }
  
  );
});

