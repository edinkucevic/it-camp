const fibonacci = () => {
    const niz = [1 , 2];

    let el = 2;

    while (niz[el - 2] + niz[el - 1] <= 4000000) {
        niz.push(niz[el - 2] + niz[el - 1]);
        el++;
    }

    return niz.filter((el) => el % 2 === 0).reduce((prevValue, curValue) => prevValue + curValue);
    

}


console.log(fibonacci())