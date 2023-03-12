var ing1 = document.querySelector("ul");//pega toda a lista
var ing2 = document.querySelector("ul").children[0].innerHTML;//pega os valores do 1o na lista

console.log(ing1);
console.log(ing2);


//adicionando elemento por meio do js
var lista = document.querySelector("ul");
var novo_item = document.createElement("li");

lista.appendChild(novo_item);
document.querySelector("ul").children[3].innerHTML = "Azeitonas"



