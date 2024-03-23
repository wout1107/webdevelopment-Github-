const setup = () => {
    document.querySelector("#myDIV").addEventListener("click", Pelementbij)
}
const Pelementbij = () => {
    let paragraaf = document.createElement("p");
    let div = document.querySelector('div');
    paragraaf   = document.createTextNode("This is a new paragraph.");
    div.appendChild(paragraaf);
}
window.addEventListener("load", setup);