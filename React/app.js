

// document.getElementById(pocetak)
// document.getElementByClassName(prva-klasa)
// document.querySelector('#id')
// document.querySelectorAll('#id')
// document.getElementByTagName()

const glavniDiv = document.querySelector("#pocetak");

const paragraf = document.createElement('p');
paragraf.textContent = 'Ovo je p dodat iz JS';  //<p> Ovo je p dodat  iz JS</p> - isto kao ove dve linije

// glavniDiv.style.backgroundColor = "red" - ovo je inline style
glavniDiv.classList.add("kocka"); // dodavanje klase

paragraf.classList.add ("tekst")
const dugme = document.createElement('button')
dugme.textContent = "click me";
glavniDiv.append(dugme)

const onButtonClick = () => {
    paragraf.classList.toggle("veci-font");
    
}

dugme.addEventListener('click',onButtonClick)
glavniDiv.append(paragraf);

const skriveniDiv = document.createElement("div");
skriveniDiv.classList.add("drugaKocka");
body.append(skriveniDiv);

skriveniDiv.innerHTML =`
<h1> Ovo je h1</h1>
<p> Neka deskripcija </p>`



console.log(glavniDiv)

