/*************** Education ******************/
$("a.ebtn").mousedown(function(){
    $(this).addClass("pressed");
});

$("a.ebtn").mouseup(function(){
    $(this).removeClass("pressed");
});

$("a.ebtn").on("tap",function(){
    $(this).removeClass("pressed");
});

$("a.ebtn").mouseout(function(){
    $(this).removeClass("pressed");
});
