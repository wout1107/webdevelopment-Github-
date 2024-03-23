const setup = () =>
{
    let kipStaat = document.getElementById("KipStaat");
}

window.addEventListener("load", setup)
const getKipStaat = () =>
{
    let staten = document.getElementsByName("kipStaat")[0].checked
    let output = document.getElementById("output")
    let lijst = staten[0].options
    let print = "Hierboven, "
    let count = 0;
    for (let i = 0; i < lijst.length; i++) {
        if(lijst[i].selected === "niets")
        {
            print += lijst[i].text + " "
            count++

        }
        if(lijst[i].selected === "kip zonder ei")
        {
            print += lijst[i].text + " "
            count++
            div.style.cssText("#img.with-egg")
            output
        }
        if(lijst[i].selected === "kip met ei")
        {
            print += lijst[i].text + " "
            count++
            div.style.cssText("#img.without-egg")
        }
    }
    if(count == 0)
    {
        print += "niets"
    }

    console.log(print);

}