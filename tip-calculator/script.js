const BILLAMT = document.querySelector("#amt")
const CALBUTTON = document.querySelector("#calculate")
const PEOPLE = document.querySelector("#people");
const SERVICE = document.querySelector("#serviceId")

function calculateTip(){
    if(BILLAMT === ""||SERVICE === 0 ){
        alert("Please enter valid values");
        return;
    }
    if(PEOPLE === "" || PEOPLE <= 1){
        PEOPLE = 1;
        document.querySelector("#each").style.display = "none"
    }else{
        document.querySelector("#each")
        .style.display = "block";
    }
}
let total = ((BILLAMT.value*SERVICE.value)/PEOPLE.value);
total = total.toFixed(2);
// console.log(BILLAMT.value,PEOPLE.value, SERVICE.value)

document.querySelector("#totalTip")
.style.display = "block";

document.querySelector("#tip")
.innerHTML = total;