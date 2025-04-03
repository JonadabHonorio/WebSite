const menu = document.querySelector("#Menu");
const botaoMenu = document.querySelector("#botao_menu");
const main = document.querySelector("main");
const caixaMensagemLinksExternos = document.querySelectorAll(".container_mensagem_links_externos");
const caixaLinkedin = document.querySelector("#container_link_Linkedin");
const caixaRepositorio = document.querySelectorAll(".container_mensagem_repositorio_projeto");
const caixaProducao = document.querySelectorAll(".container_mensagem_producao_projeto");
const projetosCard = document.querySelectorAll(".card");
const linksProjeto = document.querySelectorAll(".icone_card");
const janelaNavegador = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; // Armazena as dimenções da tela do user


function clickMenu() {   /*Função responsável por revelar e ocultar o menu lateral juntamente com a mudança de cor do botão */
    if (menu.style.display == "block") {
        menu.style.display = "none"
        menu.style.animation = "saida 0.3s"
        botaoMenu.style.color = "#FF6000"   
        
    } else {
        menu.style.display = "block"
        menu.style.animation = "slide 0.3s"
        botaoMenu.style.color = "#F0F0F0"
    }   
}


main.addEventListener('click', function() { /*Função responsável por fechar o menu qunado o usuário clica fora dele*/
    if (janelaNavegador <= 1170) {
        menu.style.display = "none"
        botaoMenu.style.color = "#FF6000"
    } 
}) 

function exibirMensagemGithub() {  /* Grupo de Funções que revelam e ocultam a mensagem dos links externos do MENU ao passar o mouse */
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



function exibirMensagemRepositorio01() {      /* Grupo de Funções que revelam e ocultam a mensagem dos links externos do Projeto01 ao passar o mouse*/  
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



function exibirMensagemRepositorio02() {      /* Grupo de Funções que revelam e ocultam a mensagem dos links externos do Projeto02 ao passar o mouse*/  
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



function exibirMensagemRepositorio03() {      /* Grupo de Funções que revelam e ocultam a mensagem dos links externos do Projeto03 ao passar o mouse*/  
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


projetosCard[0].addEventListener('click', function() {  /*Função responsável pela animação ao clicar sob o card do Projeto01 */
        if(janelaNavegador >= 1170) {
            projetosCard[0].style.animationName= ""
            setTimeout(() => projetosCard[0].style.animation = "pulsarCard 0.3s linear", 5)
        } else {
            projetosCard[0].style.animationName= ""
            setTimeout(() => projetosCard[0].style.animation = "mobilePulsarCard 0.3s linear", 5)
        }

})

projetosCard[1].addEventListener('click', function() {  /*Função responsável pela animação ao clicar sob o card do Projeto02 */
        if(janelaNavegador >= 1170) {
            projetosCard[1].style.animationName= ""
            setTimeout(() => projetosCard[1].style.animation = "pulsarCard 0.3s linear", 5)
        } else {
            projetosCard[1].style.animationName= ""
            setTimeout(() => projetosCard[1].style.animation = "mobilePulsarCard 0.3s linear", 5)
        }
})

projetosCard[2].addEventListener('click', function() {  /*Função responsável pela animação ao clicar sob o card do Projeto03 */
        if(janelaNavegador >= 1170) {
            projetosCard[2].style.animationName= ""
            setTimeout(() => projetosCard[2].style.animation = "pulsarCard 0.3s linear", 5)
        } else {
            projetosCard[2].style.animationName= ""
            setTimeout(() => projetosCard[2].style.animation = "mobilePulsarCard 0.3s linear", 5)
        }
})