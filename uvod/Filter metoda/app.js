
// const DATA1 = [2, 26, 38, 75, 11, 29]
// const DATA2 = ["a", "b" , "c" , "d" , "e"]

// const mutateArrays = (array1,array2) => {
//     const helper = array1.concat (array2)
//     const parni = [];


//     for (const el of helper) {
//         if (el % 2 === 0 ) {
//             parni.push (el);
//         }
//     }

//     parni.unshift (10, 20)
//     return (helper, parni)

// }


// FILTER METODA trazi iz postojeceg niza i pravi novi

// const words = ["televizor","daljinski","telefon", "voda","ranac","stolica"]
// const numbers = [2,8,9,11,26,86,86,90,102,1003,1120]
// const booleans = [true,false,true,false]


// const filteredArray = words
//  .concat(numbers)
//  .concat(booleans)
//  .filter((el) =>  typeof el === "boolean");


// console.log (filteredArray)


// MAP METODA - pravi novi na osnovu postojeceg 

// const numbers = [2,5,3,1,10,8,7];

// const squareNumbers = numbers.map ((el,index) => {
//     if (index === 0 || index === 3 || index === 5) {

//      return el * el
//     } else {
//         return el

//     }
    
   
// })

// console.log (squareNumbers)

const DATA1 = [1,3,4,2,7,6];
// el > 2 = el * 7
// el > 2 && el < 8 = (el*4) / 2

const dogAgeToHuman = (ages) => {
    const humanAge = ages.map (age => {
        if (age > 2 && age < 8) {
            return (age * 4) / 2
        } else if (age > 2) {
            return age * 7
        }
    });
    const lessThan10HumanAge = humanAge.filter ((el) => el < 10);
    return lessThan10HumanAge;
     
};
console.log(dogAgeToHuman(DATA1))
