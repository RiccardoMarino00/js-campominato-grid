
const btnPlay = document.querySelector(".play-btn");

// // Aggiungo un event listener che al click su play fa partire la funzione playOnclick
// btnPlay.addEventListener("click", function () {
//     // Recupero elemento contenitore
//     const containerElement = document.querySelector(".container");
//     // Dichiaro una costante contenente la dimensione di un lato
//     const size = 10;
//     // Dichiaro una costante contenente il numero di celle da far stare nel contenitore attraverso il calcolo dell'area del contenitore (quadrato)
//     const numberOfCell = size * size;
//     // Recupero bottone play
//     // Creo un ciclo for per stamparmi 100 quadrati nel mio contenitore containerElement
//     for (let i = 0; i < numberOfCell; i++) {
//         // Dichiaro una costante numero per avere i quadrati numerati
//         const num = i + 1;
//         // Dichiaro una costante per crare il mio elemento square come oggetto
//         const squareElement = document.createElement("div"); // obj
//         // Aggiungo la classe square a divElement
//         squareElement.className = "square";
//         // Appendo tutti i div uno dopo l'altro 
//         containerElement.append(squareElement);
//         // Aggiungo al quadrato il suo rispettivo numero
//         squareElement.innerHTML = num
//         // Aggiungo un event listener che cambia il colore del quadrato in azzurro al mio click e ad un ulteriore click lo toglie ( grazie a toggle)
//         squareElement.addEventListener("click", function () {

//             squareElement.classList.toggle("bg-lightblue");
//         })
//     }
// })

// Livelli di difficoltà
const  selectElement = document.getElementById("select-difficulty").value;

btnPlay.addEventListener("click", function(){
    // SE utente seleziona easy al click sul tasto play deve comparire una griglia 10x10
    if (selectElement === "easy"){
        // Recupero elemento contenitore
        const containerElement = document.querySelector(".container");
        // Dichiaro una costante contenente la dimensione di un lato
        const size = 10;
        // Dichiaro una costante contenente il numero di celle da far stare nel contenitore attraverso il calcolo dell'area del contenitore (quadrato)
        const numberOfCell = size * size;
        console.log(numberOfCell)
        // Recupero bottone play
        // Creo un ciclo for per stamparmi 100 quadrati nel mio contenitore containerElement
        for (let i = 0; i < numberOfCell; i++) {
            // Dichiaro una costante numero per avere i quadrati numerati
            const num = i + 1;
            // Dichiaro una costante per crare il mio elemento square come oggetto
            const squareElement = document.createElement("div"); // obj
            // Aggiungo la classe square a divElement
            squareElement.className = "square";
            // Appendo tutti i div uno dopo l'altro 
            containerElement.append(squareElement);
            // Aggiungo al quadrato il suo rispettivo numero
            squareElement.innerHTML = num
            // Aggiungo un event listener che cambia il colore del quadrato in azzurro al mio click e ad un ulteriore click lo toglie ( grazie a toggle)
            squareElement.addEventListener("click", function () {
    
                squareElement.classList.toggle("bg-lightblue");
            })
        }
   // INVECE SE seleziona medium al click sul tasto play deve comparire una griglia 9x9
   } else if (selectElement === "medium"){
        // Recupero elemento contenitore
        const containerElement = document.querySelector(".container");
        // Dichiaro una costante contenente la dimensione di un lato
        const size = 9;
        // Dichiaro una costante contenente il numero di celle da far stare nel contenitore attraverso il calcolo dell'area del contenitore (quadrato)
        const numberOfCell = size * size;
        console.log(numberOfCell)

        // Recupero bottone play
        // Creo un ciclo for per stamparmi 100 quadrati nel mio contenitore containerElement
        for (let i = 0; i < numberOfCell; i++) {
            // Dichiaro una costante numero per avere i quadrati numerati
            const num = i + 1;
            // Dichiaro una costante per crare il mio elemento square come oggetto
            const squareElement = document.createElement("div"); // obj
            // Aggiungo la classe square a divElement
            squareElement.className = "square";
            // Appendo tutti i div uno dopo l'altro 
            containerElement.append(squareElement);
            // Aggiungo al quadrato il suo rispettivo numero
            squareElement.innerHTML = num
            // Aggiungo un event listener che cambia il colore del quadrato in azzurro al mio click e ad un ulteriore click lo toglie ( grazie a toggle)
            squareElement.addEventListener("click", function () {
    
                squareElement.classList.toggle("bg-lightblue");
            })
        }
    // ALTRIMENTI al click sul tasto play deve comparire una griglia 7x7
    } else {
        // Recupero elemento contenitore
        const containerElement = document.querySelector(".container");
        // Dichiaro una costante contenente la dimensione di un lato
        const size = 7;
        // Dichiaro una costante contenente il numero di celle da far stare nel contenitore attraverso il calcolo dell'area del contenitore (quadrato)
        const numberOfCell = size * size;
        console.log(numberOfCell)

        // Recupero bottone play
        // Creo un ciclo for per stamparmi 100 quadrati nel mio contenitore containerElement
        for (let i = 0; i < numberOfCell; i++) {
            // Dichiaro una costante numero per avere i quadrati numerati
            const num = i + 1;
            // Dichiaro una costante per crare il mio elemento square come oggetto
            const squareElement = document.createElement("div"); // obj
            // Aggiungo la classe square a divElement
            squareElement.className = "square";
            // Appendo tutti i div uno dopo l'altro 
            containerElement.append(squareElement);
            // Aggiungo al quadrato il suo rispettivo numero
            squareElement.innerHTML = num
            // Aggiungo un event listener che cambia il colore del quadrato in azzurro al mio click e ad un ulteriore click lo toglie ( grazie a toggle)
            squareElement.addEventListener("click", function () {
    
                squareElement.classList.toggle("bg-lightblue");
            })
        }
    }
})