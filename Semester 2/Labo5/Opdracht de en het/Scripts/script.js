const setup = () =>
{
    let btnVervang = document.getElementById("btnVervang");
    btnVervang.addEventListener("click", vervang);

}

const vervang = () =>
{
    let nieuweText = "";
    let text = document.getElementById("text").value.trim();
    let de = "de";
    let deHoofd = "De";
    let words = text.split(" ");
    for(let i = 0; i < words.length; i ++)
    {
        if(words[i] === de)
        {
            nieuweText += "het ";
        }
        else if(words[i] === deHoofd)
        {
            nieuweText += "Het ";
        }
        else
        {
            nieuweText += words[i] + " ";
        }
    }
    console.log(nieuweText.trim());
}
window.addEventListener("load", setup);