let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32px cada quadradinho, vai ser o tamanho dele//
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //fillRect trabalha com quatro parâmetros, posição x, y, altura e largura. No retângulo onde vai acontecer o jogo, altura e largura de 16 quadradinhos//
}

//A cobrinha precisa ser um array para conseguir trabalhar melhor//
function criarCobrinha() {
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();