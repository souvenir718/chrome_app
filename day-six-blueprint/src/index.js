
import "./styles.css";

const select = document.querySelector("select");
const myCountry = document.querySelector("h2");


function selectValue(event) {
  localStorage.setItem("myCountry", event.target.value);
  myCountry.innerText = `MyCountry is ${event.target.value}`;
}

function init() {
    myCountry.innerText = `MyCountry is ${ localStorage.getItem('myCountry')}`;
    select.addEventListener("change", selectValue);
}
init();
