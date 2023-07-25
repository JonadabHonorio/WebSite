const menu = document.getElementById("Menu");
const botaoMenu = document.getElementById("botao_menu");
function clickMenu() {        /*Função responsável por revelar e ocultar o menu lateral juntamente com a mudança de cor do botão */
    if (menu.style.display == "block" ) {
        menu.style.display = "none"
        botaoMenu.style.color = "#FF6000"
        menu.style.animation = "saida 0.3s ease-in"
    } else {
        menu.style.display = "block"
        botaoMenu.style.color = "#F0F0F0"
        menu.style.animation = "start .3s ease-in"
        
          
    }   
}; 

