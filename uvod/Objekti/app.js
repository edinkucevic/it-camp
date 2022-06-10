// OBJEKTI
// su skup vise stvari koje cine jednu stvar.
// Kjucevi se mogu ispisati na dva nacina. 1.markaAuta 2. marka_auta 


// const myCar = {
// // KLJUC : VREDNOST 
//     id : 1,
//     marka: "Audi",  
//     model: "a4",
//     boja : "crvena",
//     pogon: "prednji",
//     menjac: "automatski",
//     km : 240000,
//     kontakt : [062111000, 063444555],
//     servis : {
//         datum: '4. maj',
//         km : 230000,
//         serviser : "Em Car",
//     },
//     udaran: true,

// }
// console.log (myCar)
// console.log(myCar.servis.serviser) 
// console.log(myCar["servis"],["serviser"])

// //myCar.model === myCar['model']



// const radnik = {
//     first_name: "Bob",
//     last_name: "Euroblok",
//     age : 30,
//     job : 'Programer',
//     adresa : 'Avnoja BB',
//     city : 'Novi Pazar',
//     contact : '+38164123123',
//     radni_sati: 170,
//     dnevnica : 20,
// }

// console.log("Radnik" ,radnik.first_name , radnik.last_name , "radi kao" , radnik.job , "ima" , radnik.age , "godina" , "zivi u" , radnik.city , "prima platu" , radnik.radni_sati * radnik.dnevnica)



// const radnikk = {
//     firstName: "Bob",
//     lastName: "Euroblok",
//     godine: 30,
//     fullName: function() {
//         return this.firstName + " " + this.lastName + this.godine  // THIS uvek menja vrednost gde se poziva , 
//                                                                    // THIS kada se pozove unutar objekta je sam objekat, a kada se pozove u samoj funkciji poziva globalni objekat js
//     },
//     adresa : {
//         ulica: "Avnoja", 
//         broj : "bb",
//         grad : "Novi Pazar",
//         getAddress: function(){
//             console.log(this)
//         },
//     },
// };
// console.log(radnikk.adresa.getAddress());
// console.log(radnikk.fullName())

// function staJeOvdeThis() {
//     console.log(this);

// }
// staJeOvdeThis()



 
const car = {
    marka: "Bmw",
    model: "M5",
    maxBrzina: 330,
    trenutnaBrzina: 0 ,
    vozi:function(value) {
        
        if (this.trenutnaBrzina + value > this.maxBrzina) {
            alert ("Ne moze")
            
        } else {
            this.trenutnaBrzina += value;
        }
        
    },

    koci:function(value) {
        
         this.trenutnaBrzina -= value
    },

    stop: function(value) {
         this.trenutnaBrzina = 0
    },
}

console.log(car)
car.vozi(280)
car.vozi(41)


