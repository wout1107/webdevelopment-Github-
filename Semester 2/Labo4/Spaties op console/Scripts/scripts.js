// const setup = () => {
//     btnSpaties.addEventListener('click', change)
// }
// btnSpaties = document.getElementById(button)
// const change = () => {
//     let input = document.getElementById("text").value;
//     let output = document.getElementById("output");
//     let result = "";
//     for(let i = 0; i < input.length; i++)
// { result += input.charAt(i) + " ";
// }
// return output.textContent = result;
// }
// window.addEventListener("load", setup);
let btnSpaties; // Definieer btnSpaties variabele

const setup = () => {
    btnSpaties = document.getElementById("button"); // Verkrijg de referentie naar het element met de id "button"
    btnSpaties.addEventListener('click', change);
}

const change = () => {
    let input = document.getElementById("text").value;
    let output = document.getElementById("output");
    let result = "";
    for (let i = 0; i < input.length; i++) {
        result += input.charAt(i) + " ";
    }
    output.textContent = result; // Gebruik output.textContent om de tekst in het output-element in te stellen
}

window.addEventListener("load", setup);