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


// function arrayMap(arr, clback) {
//     res = []
//     for (let i = 0; i < arr.length; i++) { 
//         newEl = clback(arr[i]);
//         res.push(newEl)
   
//     }
//     return res;

// }

// myfunc =  function (arg1) {
//     return arg1 * 2;
// };

// niz = arrayMap([1, 2, 3, 4, 5], myfunc);


// console.log(niz)

// res = [1, 2, 3, 4, 5].map((el) =>{      
//     if  (el >= 3) {
//         return el;
//     }
// });


// res2 = [1, 2, 3, 4, 5].filter((el) =>{
//     if  (el >= 3) {
//         return el;
//     }
// });

// console.log(res);
// console.log(res2)


// console.log(1);
// console.log(2);

// func = () => {
//     console.log(3);

// }

// setTimeout(func, 1000);

// console.log(4);


// posao = new Promise((resolve, reject) => {
//     response = 200;
    
//     for (let i = 0 ; i < 900000000; i++) {}
//     if (response === 200) {
//         resolve([1,2,3,4,5]);
    
//     } else {
//         reject(["GRESKA!!!"])
//     }
// });

// posao.then((data) => {                       // THEN se koristi  ako je uspesan odgovor
//     console.log("uspeo povukao podatke", data)
// });

// posao.catch((err) => {                  // CATCH se koristi ako je neuspesan odgovor
//     console.log("neuspesno povukao podatke", err)
// });

// for (let i = 0; i < 10; i++) {
//    setTimeout(() => {
//        console.log(i);  
//     screen }, 0);
    
// }

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);  
//      screen }, 0);
     
//  }


// function mojaFunc() {
//     console.log("neke komande")
// function drugaFunc() {
//         console.log("drugaaa")
//     }
//     return drugaFunc;
// }

// mojaFunc()() // ispisi funkciju i  funkciju iz funkcije 

// res = mojaFunc()

// res();


// function mojaFunc() {
// a = 10

// function drugaFunc(arg1) {
//     console.log("druga");
//     console.log(arg1 + a);
// }
// return drugaFunc;
// }

// res = mojaFunc();

// res(5);


// function makeAdder(x) {
//     function innerFunc(y) {
//         return x + y;
//     }
//     return innerFunc
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10)

// console.log(add5(3));
// console.log(add10(23))



// prom = new Promise((res,rej) => {
//     res();
// });

// prom.then(() => {
//     prom.then(()=> {
//         console.log("B");
//     });
//     console.log("A");
// });

// prom.then(() => {
//     console.log("C")
// });



// Fatch znaci prikupiti i odnosi se na prikupljanje podataka ..
// API je veza izmedju frontend-a i backend-a.. Uvek se podaci dobijaju preko API

//  QUERY PARAM(S) je znak ? u linku koji koristimo kada trazimo neki poseban komentar i koristi se jednom u linku,posle toga
//  se koritsti & (AND)..

// const getUsers = () => {
//     fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
//     .then((response) => response.json())
//     .then ((res) => res.map((el) => el.Id));
        
//     };

// console.log(getUsers());



// ASYNC 
// await mora da ide uvek na API
// async vraca promise i pisemo .then na funkciju

const BASE_URL = "https://jsonplaceholder.typicode.com"
const getUsers = async () => {
      const response = await fetch(`${BASE_URL}/users`); //da ne bi pisali ceo link..
      const posts = await response.json();
      return posts.map ((el) => {
          return {ime: "Edin", id: el.id };
      });
};
getUsers().then((res) => console.log(res));