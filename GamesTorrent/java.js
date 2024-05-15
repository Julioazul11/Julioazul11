table=document.getElementById("teibol");

function fetching(){
	fetch("WebScrappingGames/gamestorrentsgames.json").then((res)=>res.json()).then((data)=>getImgs(data));
}
i=1;
function getImgs(data){
	for (let j = 0; j < 5; j++) {
		imas=i+6;
		tere=document.createElement("tr");
		for (i = i; i < imas; i++) {
			a=document.createElement("a");
			a.href="#"
			tede=document.createElement("td");
			ach=document.createElement("h1")
			let gni=data["imgs"][i].lastIndexOf("/");
			let gn=data["imgs"][i].substring(gni+1);
			gn=gn.substring(0,gn.length-4);
			ach.innerHTML=gn
			ach.classList.add("GT");
			image=document.createElement("img");
			image.classList.add("stet");
			image.src=data["imgs"][i];
			image.classList.add("tableimg");
			a.appendChild(image);
			tede.appendChild(a);
			tede.appendChild(ach);
			tere.appendChild(tede);
	}
		table.appendChild(tere);
	}
}

fetching();