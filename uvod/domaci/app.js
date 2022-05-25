const prvi = prompt ("Unesi prvi broj")
const drugi = prompt ("Unesi drugi broj")
const treci= prompt ("Unesi treci broj")

function mnozenje() {
    return prvi * drugi * treci;
}
alert ("Rezultat je" + " " + mnozenje(prvi,drugi,treci))