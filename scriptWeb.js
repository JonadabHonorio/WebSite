const menu = document.getElementById("Menu");
const botaoMenu = document.getElementById("botao_menu");
const caixaGitHub = document.getElementById("container_link_GitHub");
const caixaLinkedin = document.getElementById("container_link_Linkedin");
const caixaEmail = document.getElementById("container_link_Email");
const caixaRepositorio = document.querySelectorAll(".container_mensagem_repositorio_projeto");
const caixaProducao = document.querySelectorAll(".container_mensagem_producao_projeto");


function clickMenu() {                 /*Função responsável por revelar e ocultar o menu lateral juntamente com a mudança de cor do botão */
    if (menu.style.display == "block") {
        menu.style.display = "none"
        botaoMenu.style.color = "#FF6000"
        
    } else {
        menu.style.display = "block"
        botaoMenu.style.color = "#F0F0F0"
    }   
};

                                    
function exibirMensagemGithub() {       /* Grupo de Funções que revelam e ocultam a mensagem dos links externos do MENU ao passar o mouse*/
    caixaGitHub.style.visibility = "visible"  
         
}

function enibirMensagemGithub() {
    caixaGitHub.style.visibility = "hidden"
}


function exibirMensagemLinkedin() {
    caixaLinkedin.style.visibility = "visible" 
}

function enibirMensagemLinkedin() {
    caixaLinkedin.style.visibility = "hidden"
}


function exibirMensagemEmail() {
    caixaEmail.style.visibility = "visible" 
}

function enibirMensagemEmail() {
    caixaEmail.style.visibility = "hidden"
}



function exibirMensagemRepositorio() {      /* Grupo de Funções que revelam e ocultam a mensagem dos links externos dos PROJETOS ao passar o mouse*/  
    caixaRepositorio[0].style.visibility = "visible"
    console.log(caixaRepositorio[0])
    
}

function enibirMensagemRepositorio() {
    
    caixaRepositorio[0].style.visibility = "hidden" 
    
}

function exibirMensagemProducao() {
    caixaProducao[0].style.visibility = "visible"

}

function enibirMensagemProducao() {
    caixaProducao[0].style.visibility = "hidden"

}





