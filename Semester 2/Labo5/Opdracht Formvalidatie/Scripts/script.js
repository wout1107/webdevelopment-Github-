const setup = () => {
    let knop = document.getElementsByName("submit")[0]
    knop.addEventListener("click", methode)
}
window.addEventListener("load", setup);

const methode = () =>
{
    let roker = document.getElementsByName("roker")[0].checked
    let radio = document.getElementsByName("radio")
    let favorieteBuurland = document.getElementsByName("favorieteBuurland")
    let bestellingen = document.getElementsByName("bestellingen")

    if (roker)
    {
        console.log("is een roker")
    }
    else
    {
        console.log("is geen roker")
    }
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked)
        {
            if(i == 0)
            {
                console.log("moedertaal is nl")
            }
            else if(i == 1)
            {
                console.log("moedertaal is fr")
            }
            else if( i == 2)
            {
                console.log("moedertaal is en")
            }
            i = radio.length
        }
    }
    let lijst = favorieteBuurland[0].options
    for (let i = 0; i < lijst.length; i++) {
        if(lijst[i].selected) {
            console.log("favoriete buurland is " + lijst[i].text)
        }}
    }

    console.log(print)



}