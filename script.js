const texto = [
"Desenvolvedora Front-End",
"Estudante de Sistemas para Internet"
];

let contador = 0;
let letra = 0;

function digitar(){

const elemento = document.querySelector(".digitando");

if(letra < texto[contador].length){

elemento.innerHTML += texto[contador].charAt(letra);

letra++;

setTimeout(digitar,80);

}else{

setTimeout(apagar,2000);

}

}

function apagar(){

const elemento = document.querySelector(".digitando");

if(letra > 0){

elemento.innerHTML = texto[contador].substring(0,letra-1);

letra--;

setTimeout(apagar,50);

}else{

contador++;

if(contador >= texto.length){

contador = 0;

}

setTimeout(digitar,500);

}

}

digitar();


const projetos = [

{

titulo:"Portfólio Pessoal",

descricao:"Portfólio desenvolvido para apresentar meus projetos e habilidades em desenvolvimento web.",

link:"#",

tecnologias:["HTML","CSS","JavaScript"]

},

{

titulo:"Sistema de Gestão",

descricao:"Aplicação web para gerenciamento de projetos com interface responsiva.",

link:"#",

tecnologias:["HTML","CSS","JavaScript"]

}

];


function carregarProjetos(){

const container=document.getElementById("projetos-container");

projetos.forEach(projeto=>{

const card=document.createElement("div");

card.classList.add("card");

card.innerHTML=`

<h3>${projeto.titulo}</h3>

<p>${projeto.descricao}</p>

<p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>

<a href="${projeto.link}" target="_blank">Ver Projeto</a>

`;

container.appendChild(card);

});

}

carregarProjetos();
