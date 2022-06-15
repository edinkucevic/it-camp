// SPREAD OPERATOR su tri tacke ( ... )
// sa njima dodajemo nesto pre niza,posle niza 

// const names = ["faris", "edin", "senad", "hamza", "sabina" ];

// const newNames = [...names];

// console.log(names)
// console.log(newNames);


// const numbers = [1, 2, 3, 1, 5, 2, 7, 10];

// const nemaDuplih = [...new Set(numbers)] 
// //kroz set ne moze da se rade metode i ne moze da se prolazi kroz njega..
// //set se definise - new Set(, 

// console.log(nemaDuplih)

// const numbers = [1, 2, 3, 1, 5, 2, 7, 10];

// const names = ["john", "cena", "undertaker" ];

// const spojeni = [...names, ...numbers]; // spajamo dva niza pomocu spread operatora

// console.log(spojeni)


const person = {
    name: "John",
    state: "USA",

}
const extendedPerson = {
    ...person,
    phone: "+38166662323",
    age: 34,
    address: "NY St 8",
};

console.log(person)
console.log(extendedPerson)


const movies = [
    {title: "Movie 1", rating: 8, budget: "230M"},
    {title: "Movie 2", rating: 5, budget: "30M"},
    {title: "Movie 3", rating: 9, budget: "530M"},
    {title: "Movie 4", rating: 4, budget: "200M"},
    {title: "Movie 5", rating: 9.5, budget: "120M"},

];

const newMoviesArray = movies.map((movie) => {

    return{
    title: movie.title,
    budget: movie.budget,
    }
});

console.log(newMoviesArray)
