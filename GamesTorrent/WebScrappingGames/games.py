import requests
from bs4 import BeautifulSoup
import json
from unidecode import unidecode
import re

url=requests.get("https://www.gamestorrents.fm/juegos-pc/") #conseguimos el contenido html
data={}
content=BeautifulSoup(url.content,"html.parser")#lo transformamos en contenido que se pueda utilizar

imgs=content.find_all("img",class_="img-responsive lapinio") #ecnontramos adentro de el contenido todas las etiquetas img con la clase img-respons (nos regresa una lista)
names=[]
urls=[]
imgurls=[]
data["imgs"]=[]
for img in imgs:
    if img and "style" in img.attrs:
        estilo=img["style"]
        result = re.findall(r'\((.*?)\)', estilo)
        result[0]=result[0].strip("'\"")
        print(result[0])
        data["imgs"].append(result[0])


print(data)


with open("gamestorrentsgames.json", "w") as file:
    json.dump(data,file,indent=4)

