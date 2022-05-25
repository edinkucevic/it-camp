const cars = ["BMW" , "AUDI" , "Smart"];
//cars[3] = "MB"

//dodavanje elementa na kraju niza - push
cars.push("MB")
cars.push ("RR")
//za brisanje zadnjeg clana - pop
// const popValue = cars.pop()

//dodavanje na pocetku niza - unshift
cars.unshift("Bentley")

//brisanje prvog clana niza - shift
cars.shift()
cars.shift()

//okrece niz naopako - reverse
cars.reverse()

// console.log (cars)

//spajanje dva niza - concat (niz);
const imena = ["Faris" , "Edin" , "Hamza"]
const age = [18,20,100]

const spojeniNiz = imena.concat(age); //u zagradama ubacujemo niz koji zelimo da spojimo
console.log (spojeniNiz)
 

// trazenje clana niza - find
const trazenaVrednost = age.find((el) => el > 50) //vraca samo prvog clana koji ispuni uslov
console.log(trazenaVrednost)


//trazenje indexa - findIndex();

const trazeniIndex = age.findIndex((el) => el < 100) // vraca prvi index koji ispuni uslov 
console.log (trazeniIndex)






// const godine = [12 , 76, 26, 6, 23, 21, 29, 16];

// const druge_godine = [23,12,14,44,11,6,43,54,67,2]


// function returnAdults(ages) {
//         const nonAdults = [];
//         for (const age of ages) {
//             if (age < 18) {
//                 nonAdults.push (age)
//             }
//         }

//         return nonAdults;
        
        
//     } 
        
        

//     console.log (returnAdults(druge_godine))
    
