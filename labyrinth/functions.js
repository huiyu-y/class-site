$("#sky").hide();
$(".flight").hide();
$(".flight-1").hide();
$(".flight-bottom").hide();
$(".taipei-bottom").hide();
$(".ric-bottom").hide();
$(".ric-1").hide();
$(".flicker").hide();
$(".flicker-bottom").hide();
$(".cloud-container").hide();


$(".math").hide();

$("#enter").click(function() {
  $(".labyrinth").hide();
  $("#enter").hide();
  $("#sky").show();
  $(".flight").show();
  $(".flight-bottom").show();
});

$(".flight-bottom").click(function() {
  $(".flight-bottom").hide();
  $(".flight").hide()
  $(".taipei-bottom").show();
  $(".ric-bottom").show();
  $(".flight-1").show();
  // $("body").css('background', '#161616');
});

$(".ric-bottom").click(function() {
  $(".taipei-bottom").hide();
  $(".ric-bottom").hide();
  $(".flight-1").hide();
  $("body").css('background', '#ffffff');
    $(".ric-1").show();
});

$(".flower").hover(function() {
  $(".flower").css('font-weight', 'bolder');
});


$(".flower").click(function() {
  $(".ric-1").hide();
  $(".flower").hide();
  $(".flicker").show();
  $(".flicker-bottom").show();
});

$(".lines").hide();
$("#line-bottom").hide();

$(".flicker-bottom").click(function() {
  $(".flicker").hide();
  $(".lines").show();
  $("#line-bottom").show();
});

$("#line-bottom").click(function() {
  $(".lines").hide();
  $(".flight-1").show();
  $(".taipei-bottom").show();
  $(".ric-bottom").show();
  $("body").css('background', '#000000');
});


$(".taipei-bottom").click(function() {
  $(".cloud-container").show();
  $(".ric-bottom").hide();
  $(".taipei-bottom").hide();
  $("body").css('background', 'rgb(203, 203, 203)');
  $(".flight-1").hide();
});

$(".cloud2").click(function() {
  $(".cloud-container").hide();
  $(".math").show();
});

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

$("#answer").click(function(){
  $("input").css('color', '#8e8a7e');
});

$(".math-answer").hide();
$(".math-answer-hover").mouseover(function(){
     $(".math-answer").fadeIn();
 });

 $(".math-answer-hover").mouseleave(function(){
      $(".math-answer").fadeOut();
  });

//  $("#yes").click(function(){
//    $("").fadeOut();
// });



// $(".math-answer").hover(
//   function () {
//     $(this).show();
//   },
//   function () {
//     $(this).hide();
//   }
// );
