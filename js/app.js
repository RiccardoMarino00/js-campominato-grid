// Recupero elemento contenitore
const containerElement = document.querySelector(".container");
// Dichiaro una costante contenente la dimensione di un lato
const size = 10;
// Dichiaro una costante contenente il numero di celle da far stare nel contenitore attraverso il calcolo dell'area del contenitore (quadrato)
const numberOfCell = size * size;
// Recupero bottone play
const btnPlay = document.querySelector("play-btn")
// Creo un ciclo for per stamparmi 100 quadrati nel mio contenitore containerElement
for (let i = 0; i < numberOfCell; i++){
    // Dichiaro una costante per crare il mio elemento contenitore come oggetto
    const divElement = document.createElement("div"); // obj
    // Aggiungo la classe square a divElement
    divElement.className = "square"
    // Appendo tutti i div uno dopo l'altro 
    containerElement.append(divElement)
    // Aggiungo un event listener che cambia il colore del quadrato in azzurro al mio click e ad un ulteriore click lo toglie ( grazie a toggle)
    divElement.addEventListener("click", function () {

        divElement.classList.toggle("bg-lightblue");
    })
}

// Creo una funzione che al click sul tasto play imposta la classe display: block all'elemento contenitore
function playOnClick (disp){
    // Se ha come classe display none allora falla diventare display: block
    if (containerElement.style.display="none"){
        containerElement.style.display="block"
    }
}

// Aggiungo un event listener che al click su play fa partire la funzione playOnclick
btnPlay.addEventListener("clcik", function(){
    function playOnClick (btnPlay)

})
