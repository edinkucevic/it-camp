// const miles = [15,20,1,60,45,120]
// const rezultat = (numbers) => {
//     const kilometri = numbers.map ((el) => el * 1.60)
//     const totalDistanceInKilometers = kilometri.reduce((a,b) =>a+b)
//     return totalDistanceInKilometers
// }
// console.log(rezultat(miles))

// const brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const kvadrati = (numbers) => {
//     const niz = numbers.filter((el) => el % 2 === 0);
//     const kvadrati = niz.map((el) => el * el);
//     return kvadrati.reduce((b,c) => b+c)


// }
// console.log(kvadrati(brojevi))

// let strings = ["avengers", "captain america", "ironman", "black panther"];
// const upperCase = (rec) => {
//     return rec.map((el) => el.toUpperCase())
// }
// console.log(upperCase(strings))



// const students = [
//     { name: "Faris", grade: 8 , year: 2 },
//     { name: "Isko", grade: 10 , year: 4 },
//     { name: "Aldin", grade: 8 , year: 2 },
//     { name: "Amina", grade: 9 , year: 4 },
//     { name: "Sabina", grade: 9 , year: 3 },
//     { name: "Denis", grade: 7 , year: 4 },
//     { name: "Senad", grade: 6 , year: 1 },

// ];

//     function getAvgGrade(array) {

//         const ocene = array.map((el) => el.grade )
//         console.log(ocene)

//         const avgGrade = ocene.reduce ((prevValue , curValue) => prevValue + curValue) / array.length
//         return avgGrade.toFixed(2) 
        
    

//     }

//     console.log(getAvgGrade(students))




// const person1 = {
//     name: "John Doe",
//     age: 48,
//     job: "Employed",
//     adress: "USA",
//     kids: 4,
// };
// const person2= person1;

// person1.name = "Edin"
// console.log(person1)

// console.log(Object.is(person1,person2))

// // Object.seal(person) // kod seal moze da menjas postojeci ,ali ne mozes da dodajes i brises
// Object.freeze(person) // ovo je funkcija koja zaledi objekt takav kakav jeste, ne moze da se doda ili menja nesto
// Object.keys(person) // vraca sve  kljuceve tog objekta u niz



// console.log(Object.keys(person))
// console.log(Object.values(person)) // vraca sve vrednosti iz tog objekta

