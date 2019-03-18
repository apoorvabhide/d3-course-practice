const SHOWTEXT = document.querySelector('#show');
const SHOWBUTTON = document.querySelector('#show-button');

function showMessage(e){
    SHOWTEXT.innerHTML = Date();
    console.log(e);
}

function showMouseOver(){
    console.log('Mouseover');
}

SHOWBUTTON.onclick = showMessage;
// SHOWBUTTON.onmouseover = showMouseOver;
SHOWBUTTON.addEventListener("click",showMessage);
SHOWBUTTON.addEventListener("keydown",function(){console.log("Down key is pressed");})