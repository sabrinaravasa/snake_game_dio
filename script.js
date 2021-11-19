let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32px cada quadradinho, vai ser o tamanho dele//

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //fillRect trabalha com quatro parâmetros, posição x, y, altura e largura. No retângulo onde vai acontecer o jogo, altura e largura de 16 quadradinhos//
}

criarBG()