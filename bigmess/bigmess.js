$(document).ready(function () {
    let randomValue = function () {
      return Math.random() * 500
    }
    let body = $("body *")
    body.each(function () {
      $(this).css({
        "position": "absolute",
        "top": randomValue(),
        "left": randomValue()
      })
    })
  });