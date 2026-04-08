// efeito digitando

const texto = [
"Desenvolvedora Front-End",
"Estudante de Sistemas para Internet",
"Criadora do projeto Raízes do Sertão"
];

let contador = 0;
let letra = 0;

function digitar(){

if(letra < texto[contador].length){

document.querySelector(".digitando").innerHTML += texto[contador].charAt(letra);

letra++;

setTimeout(digitar,80);

}else{

setTimeout(apagar,2000);

}

}

function apagar(){

if(letra > 0){

document.querySelector(".digitando").innerHTML = texto[contador].substring(0,letra-1);

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

// Projetos
const projetos = [
    {
        titulo: "Portfólio Pessoal",
        descricao: "Este portfólio desenvolvido em HTML, CSS e JavaScript para apresentar meus trabalhos, habilidades e trajetória profissional.",
        link: "#",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        titulo: "Sistema de Gestão",
        descricao: "Aplicação web para gestão de projetos pessoais, com funcionalidades de CRUD e interface responsiva.",
        link: "#",
        tecnologias: ["HTML", "CSS", "JavaScript", "Node.js"]
    }
];

function carregarProjetos() {
    const container = document.getElementById("projetos-container");
    projetos.forEach(projeto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
            <a href="${projeto.link}" target="_blank">Ver Projeto</a>
        `;
        container.appendChild(card);
    });
}

carregarProjetos();
