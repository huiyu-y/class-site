

$(document).ready(function()
{
    $("#answer").change(function() {
        if($(this).val() == "3225578") {
            $("#yes").show();
        }
        else {
            $("#yes").hide();
        }
    });
});

$("#yes").hide();


$("#answer").hover(function(){
  $("input").css('color', '#8e8a7e');
});



// function myFunction(val) {
//   $("input").css('color', '#000000');
// };


// $("#answer").onChange(function(){
//   $("input").css('color', '#000000');
// });
