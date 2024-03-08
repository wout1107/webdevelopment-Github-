// const setup = () => {
//     let btnCount = document.getElementById("btnCount");
//     btnCount.addEventListener("click", lastIndexOf);
// }
//
// const lastIndexOf = () => {
//     let text = document.getElementById("input").innerText;
//     let output = document.getElementById("output");
//     let totaalAn = 0;
//     let index = text.length;
//
//     while(text.lastIndexOf('an', index) !== -1)
//     {
//         index = text.lastIndexOf('an', index) - 1;
//         count ++
//     }
//     output.innerText = count.toString();
// }
// window.addEventListener("load", setup);

const setup = () => {
    let btnCount = document.getElementById("btnCount");
    btnCount.addEventListener("click", lastIndexOf);
}

const lastIndexOf = () => {
    let text = document.getElementById("input").value;
    let output = document.getElementById("output");
    let count = 0;
    let index = 0;

    while (index !== -1) {
        index = text.indexOf('an', index); // Zoek naar de volgende voorkomen van 'an' vanaf de huidige index
        if (index !== -1) {
            count++;
            index += 2; // Ga verder naar de volgende index na het huidige voorkomen van 'an'
        }
    }

    output.innerText = count.toString();
}
window.addEventListener("load", setup);
