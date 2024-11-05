document.getElementById("boton").addEventListener("click", function(){
    let numero = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if(numero==1){
        document.getElementById("img").src="imgs/1.png"
    }
    if(numero==2){
        document.getElementById("img").src="imgs/2.png"
    }
    if(numero==3){
        document.getElementById("img").src="imgs/3.png"
    }
    if(numero==4){
        document.getElementById("img").src="imgs/4.png"
    }
    if(numero==5){
        document.getElementById("img").src="imgs/5.png"
    }
    if(numero==6){
        document.getElementById("img").src="imgs/6.png"
    }
});