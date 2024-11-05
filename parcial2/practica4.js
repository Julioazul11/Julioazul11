$(document).ready( function(){
     $("#btn").click(function(){
        var nombr = $("#texto").val();
        alert(nombr);
    });

    $("#css").click(function(){
        $("#css").css("display", "inherit").fadeOut(200);
    });
});
