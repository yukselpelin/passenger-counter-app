const incrementBasligi = document.getElementById("counter-el");
const previousEntries = document.getElementById("save-el");

let ilkSayi = 0;

function increment() {
    ilkSayi += 1;
    incrementBasligi.innerHTML = ilkSayi;
}

function save() {
    let girisStr = ilkSayi + " - ";
    previousEntries.innerHTML += girisStr;
    incrementBasligi.innerText = 0;
    ilkSayi = 0;
}