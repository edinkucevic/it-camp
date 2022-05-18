// N I Z O V I
// u nizu se nikad ne mutira ili menja 
// nizovi su indexirani tipovi podataka oni pocinju od 0
// niz se definise kockastim zagradama 
// [] - Oznacava NIZ
// {} - Oznacava OBJEKT


// const cars = ["BMW" , "Audi" , "VW" , "MB" , "Skoda"]
//            //   0   ,   1    ,   2  ,  3    ,   4

// for (let i = 0; i < cars.length ; i++) 

// console.log (cars[i])

// 1. cars[0]
//indexi pocinju od 0 a lenght od 1

// const niz = ["BMW" , 4 , undefined, "vw" , null , NaN , false , true , "sadas" , "kurs"]
// //   for (let i = 0 ; i < niz.length ; i++)

// //   if(niz[i]) {
// //       console.log (niz[i])
// //   }

//   for (let clan in niz) {  //for of petlja 
//                           // in je samo funkcija za nizove 
//       console.log ("Index", clan, "Vrednost clana", niz[clan]);
//   } 


const studenti = ["Marko" , "Janko" , "Sasa"];

studenti [8] = "Zika"
console.log(studenti)

const drugiNiz =new Array ('clan1', 'clan2', 'clan3')
console.log (drugiNiz)