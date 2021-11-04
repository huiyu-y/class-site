
$("#enter").click(function(){
  $("#labyrinth").hide();
  $("#enter").hide();
  $("#sky").show();
  $("#flight").show();
});

$("#fbottom").click(function(){
  $("#taipeib").show();
  $("#ricb").show();
  $("#fbottom").hide();
  $("#flight").hide();
  $("#flight1").show();
});



$("#ricb").click(function(){
  $("#taipeib").hide();
  $("#ricb").hide();
  $("#ric-1").show();
  $("#flight1").hide();
  $(".flower").show();
  // $("#flight2").show();
});

$(".flower").hover(function(){
  $(".flower").css('color', 'black');
  $(".flower").css('background', '#ffffff');
    $(".flower").css('font-weight', 'bolder');
});

$(".flower").click(function(){
    $("#ric-1").hide();
    $(".flower").hide();
    $(".flicker").show();
    $(".flicker-bottom").show();
  });

  $(".flicker-bottom").click(function(){
      $(".flicker").hide();
      $(".lines").show();
      $(".lines-2").show();
      $(".lines-2").css('background', '#ffffff');
      $(".line").show();
    });

    $("#line-bottom").click(function(){
        $(".lines").hide();
        $(".lines-2").hide();
        $(".line").hide();
        $("#line-bottom").show();
          $("#flight1").show();
          $("#taipeib").show();
          $("#ricb").show();
      });
