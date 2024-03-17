const setup = () =>
{
    let btnTrigrams = document.getElementById("btnTrigrams");
    btnTrigrams.addEventListener("click", trigramsDoen)
}

const trigramsDoen = () =>
{
    let onoorbaar = "onoorbaar";
    let drieletters;
    let einde = 3;
    for (let i = 0; i < onoorbaar.length - 2; i++) {
        drieletters = onoorbaar.slice(i,einde)
        einde ++;
        console.log(drieletters);
    }
}
window.addEventListener("load", setup);




