// DRY 
// FUNKCIJE 


// function saberi_tri_pet() {
//     const zbir = 3 + 5;
//     return zbir;
    
//  }

//  function saberi (prviBroj , drugiBroj) {
//     return prviBroj + drugiBroj;
//  }

//  function pozdrav (ime) {
//      alert ("Pozdrav " + " " + ime)
    
//  }

// function inchToCm (inch){
//     return inch * 2.54
// }
// const visina = inchToCm(25)

// console.log(visina)

const inchToCm = (inch) => inch * 2.54
const saberi = (a , b ) => a + b

console.log(saberi(10 , 1))

const ime = "Faris" // globalni scope je sve sto se nalazi van fukcije
                    // lokalni scope je sve sto se nalazi u funckiji ili izmedju viticastih zagrada

function sabiraj(prvi,drugi,treci = false) {
    if(treci) {
        return prvi + drugi + treci
    }
    else {
        return prvi + drugi
    }

}
console.log(sabiraj(2,2,10))

//  console.log(saberi(10 , 15))
// const saberi = function(){
//     //funkcija

// }
 
// const arrowFunc = () => {    //najbolji nacin ispisivanja funkcija
//     //funkcija
// }


