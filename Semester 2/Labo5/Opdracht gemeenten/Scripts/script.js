const setup = () => {
    opgevenGemeentes();
}

const opgevenGemeentes = () =>
{
    let stopInput = false;
    let lijstGemeenten = document.getElementById('gemeenten');
    let gemeenten = [];

    while(!stopInput)
    {
        let input = prompt("Geef een gemeente op. schrijf stop om te stoppen")
        if(input === 'stop')
        {
            stopInput = true;
        }
        else
        {
            gemeenten.push(input);
        }
    }

    gemeenten = gemeenten.sort;
    console.log(gemeenten);
    for(let i = 0; i < gemeenten.length; i++)
    {
        for (let i = 0; i < gemeenten.length; i++){
            let input = gemeenten[i];
            lijstGemeenten.innerHTML += `<option value="${input}">${input}</option>`;
        }

    }
}

window.addEventListener("load", setup);