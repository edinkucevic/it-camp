const miles = [15,20,1,60,45,120]
const rezultat = (numbers) => {
    const kilometri = numbers.map ((el) => el * 1.60)
    const totalDistanceInKilometers = kilometri.reduce((a,b) =>a+b)
    return totalDistanceInKilometers
}
console.log(rezultat(miles))

const brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const kvadrati = (numbers) => {
    const niz = numbers.filter((el) => el % 2 === 0);
    const kvadrati = niz.map((el) => el * el);
    return kvadrati.reduce((b,c) => b+c)


}
console.log(kvadrati(brojevi))

let strings = ["avengers", "captain america", "ironman", "black panther"];
const upperCase = (rec) => {
    return rec.map((el) => el.toUpperCase())
}
console.log(upperCase(strings))

