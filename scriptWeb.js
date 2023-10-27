const menu = document.querySelector("#Menu");
const botaoMenu = document.querySelector("#botao_menu");
const caixaMensagemLinksExternos = document.querySelectorAll(".container_mensagem_links_externos");
const caixaLinkedin = document.querySelector("#container_link_Linkedin");
const caixaRepositorio = document.querySelectorAll(".container_mensagem_repositorio_projeto");
const caixaProducao = document.querySelectorAll(".container_mensagem_producao_projeto");
const iconesExternos = document.querySelectorAll(".icone_link_externo");
const projetosCard = document.querySelectorAll(".card");
const efeitoClick = document.querySelector("#efeitoClickProjeto");


/*projetosCard[0].addEventListener('click', () => {
    projetosCard[0].classList.toggle('efeitoClick')
})*/

function clickProjeto() {
    projetosCard[0].style.display = "none"
}

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
    caixaMensagemLinksExternos[0].style.display = "block" 
            
}

function enibirMensagemGithub() {
    caixaMensagemLinksExternos[0].style.display = "none"

}

function exibirMensagemLinkedin() {
    caixaLinkedin.style.display = "block"
    
}

function enibirMensagemLinkedin() {
    caixaLinkedin.style.display = "none"
         
}

function exibirMensagemEmail() {
    caixaMensagemLinksExternos[1].style.display = "block"

}

function enibirMensagemEmail() {
    caixaMensagemLinksExternos[1].style.display = "none"

}



function exibirMensagemRepositorio01() {      /* Grupo de Funções que revelam e ocultam a mensagem dos links externos do PROJETO01 ao passar o mouse*/  
    caixaRepositorio[0].style.visibility = "visible"
    
}

function enibirMensagemRepositorio01() {
    caixaRepositorio[0].style.visibility = "hidden" 
    
}

function exibirMensagemProducao01() {
    caixaProducao[0].style.visibility = "visible"

}

function enibirMensagemProducao01() {
    caixaProducao[0].style.visibility = "hidden"

}



function exibirMensagemRepositorio02() {      /* Grupo de Funções que revelam e ocultam a mensagem dos links externos do PROJETO02 ao passar o mouse*/  
    caixaRepositorio[1].style.visibility = "visible"
    
}

function enibirMensagemRepositorio02() {
    caixaRepositorio[1].style.visibility = "hidden" 
    
}

function exibirMensagemProducao02() {
    caixaProducao[1].style.visibility = "visible"

}

function enibirMensagemProducao02() {
    caixaProducao[1].style.visibility = "hidden"

}



function exibirMensagemRepositorio03() {      /* Grupo de Funções que revelam e ocultam a mensagem dos links externos do PROJETO03 ao passar o mouse*/  
    caixaRepositorio[2].style.visibility = "visible"
    
}

function enibirMensagemRepositorio03() {
    caixaRepositorio[2].style.visibility = "hidden" 
    
}

function exibirMensagemProducao03() {
    caixaProducao[2].style.visibility = "visible"

}

function enibirMensagemProducao03() {
    caixaProducao[2].style.visibility = "hidden"

}

