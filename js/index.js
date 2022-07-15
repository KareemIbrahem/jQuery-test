
$(document).ready(function () { 

    $("#loading .spinner").fadeOut(100 , function () {
    $("#loading").fadeOut(100 , function () { 
        $("#loading").remove();
        $("body").css('overflow-y' , 'auto')
     })

  })
 })



