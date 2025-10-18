let eventi=[]
var categoria=0
let divRisultato=document.getElementById("risultato")
class Evento{
    constructor(evento, data, categoria){
        this.evento=evento
        this.data=data
        this.categoria=categoria
    }
    toString(){
        return this.evento+" "+this.data+" "+this.categoria
    }
}
const immagini=document.querySelectorAll("#immagini img")
immagini[0].addEventListener("click", categoria1)
immagini[1].addEventListener("click", categoria2)
immagini[2].addEventListener("click", categoria3)
immagini[3].addEventListener("click", categoria4)
function categoria1(){
    categoria="lavoro"
    console.log(categoria)
}
function categoria2(){
    categoria="casa"
    console.log(categoria)
}
function categoria3(){
    categoria="tempo libero"
    console.log(categoria)
}
function categoria4(){
    categoria="famiglia"
    console.log(categoria)
}
const bottoneRegistra=document.getElementById("bottone_centrato")
bottoneRegistra.addEventListener("click", aggiungiEvento)
function aggiungiEvento(){
    const evento=document.getElementById("evento").value
    const data=document.getElementById("data").value
    if(categoria===0){
        alert("Non hai inserito la categoria")
        
    }else{
        const cat=categoria
        const ev=new Evento(evento, data, cat)
        eventi.push(ev)
        console.log(ev.toString())
        alert("Evento aggiunto correttamente")
        categoria=0
    }   
}
const visualizza=document.getElementById("visualizza")
visualizza.addEventListener("click", visualizzaPerCategoria)
function visualizzaPerCategoria(){
    divRisultato.innerHTML=""
    const cat=prompt("Inserisci la categoria degli eventi da visualizzare: ")
    let eventiFiltrati=eventi.filter(function(p){
        return p.categoria===cat 
    })
    if(eventiFiltrati.length===0){
        divRisultato.textContent="Nessun elemento di quella categoria presente"
    } else{
        const ul=document.createElement("ul")
        let img=document.createElement("img")
        if(cat==="lavoro"){
            img.setAttribute("src", "lavoro.png")
        } else if(cat==="famiglia"){
            img.setAttribute("src", "famiglia.png")
        } else if(cat==="casa"){
            img.setAttribute("src", "casa.png")
        } else{
            img.setAttribute("src", "tempoLib.png")
        }
        img.setAttribute("width", "20%")
        divRisultato.appendChild(img)
        for(let i=0;i<eventiFiltrati.length;i++){
            const li=document.createElement("li")
            li.textContent=eventiFiltrati[i].toString()
            ul.appendChild(li)
        }
        divRisultato.appendChild(ul)
    }
}
const visualizzaTutto=document.getElementById("view")
visualizzaTutto.addEventListener("click", stampaTutto)
function stampaTutto(){
    divRisultato.innerHTML=""
    if(eventi.length===0){
        divRisultato.textContent="Nessun evento è stato ancora inserito"
    } else{
        const ul=document.createElement("ul")
        for(let i=0;i<eventi.length;i++){
            const li=document.createElement("li")
            li.textContent=eventi[i].toString()
            ul.appendChild(li)
        }
        divRisultato.appendChild(ul)
    }
}