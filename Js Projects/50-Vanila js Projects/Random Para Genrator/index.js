const container = document.getElementsByClassName("container")[0]; 
const inputtext = document.getElementById("inputBtn"); 
const psGeanrate = document.getElementById("btn"); 
const newtwxt = document.getElementsByClassName("newtwxt")[0]; 

function geanratePragraphp() {
  const newElement = document.createElement("p"); 
  newElement.innerHTML = "Mayur is the best coder"; 
  newtwxt.appendChild(newElement); 
}

psGeanrate.addEventListener("click", geanratePragraphp);

