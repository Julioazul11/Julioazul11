$(document).ready(function(){
    let arr= new Array(54).fill(false);
    $("#give").click(function(){
        var c =true;
        var n = Math.floor(Math.random()*54) + 1;
        while(c){
            if(arr[n-1]==true){
                continue;
            }else{
                arr[n-1]=true;
                c=false
                $("#disp").html("<img  src='loteria/"+n+".jpg'>");
            }
        }
    });
});