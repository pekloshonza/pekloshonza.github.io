let message = document.getElementsByClassName('message')[0]; //0, protože get elementS - je to seznam , 0 = index

function funkce(event){
    event.preventDefault() //aby se ta stranka nerefreshovala
let novazprava = document.createElement("p");
    novazprava.textContent = "Posláno";
    message.appendChild(novazprava);
}
