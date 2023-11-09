const contenitore = document.getElementById('contenitore')
for (let i = 1; i <= 76; i++) {
    const cella = document.createElement('div');
    cella.className = 'cella';
    cella.textContent = i;
    contenitore.appendChild(cella)
    }


    

const numeriEstratti = [];

function selezionaNumRandom() {           
let numeroRandom;
do {numeroRandom = Math.floor(Math.random() * 76) + 1;
} while (numeriEstratti.includes(numeroRandom));

        
numeriEstratti.push(numeroRandom);

        
const cellaIndicata = document.querySelector(`.cella:nth-child(${numeroRandom})`, );
cellaIndicata.classList.add('selezionato');


}


for (let i = 0; i < 24; i++) {
    const numeriRandom = Math.floor(Math.random() * 76) + 1;
    const cella2 = document.createElement('div');
    cella2.className = 'cella2';
    cella2.textContent = numeriRandom;
    cartella.appendChild(cella2);
}


