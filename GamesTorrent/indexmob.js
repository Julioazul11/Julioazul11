divm=document.getElementById("mostimg");

function get6(){
    fetch("WebScrappingGames/gamestorrentsgames.json").then((res)=>res.json()).then((data)=>put6(data));
}

function put6(data){
    for (let i = 1; i < 7; i++) {
        let ima=document.createElement("img");
        ima.src=data["imgs"][i];
        ima.style.scale="0.8";
        ima.style.marginRight="-40px";
        ima.classList.add("pop");
        divm.appendChild(ima);
    }
}

get6();