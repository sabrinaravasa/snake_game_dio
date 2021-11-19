let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32px cada quadradinho, vai ser o tamanho dele//
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; //variável com a direção que a gente quer que a cobrinha ande//

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

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    //coordenadas por onde a cobrinha vai seguir//
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    //condicionais que vão mostrar por onde a cobrinha vai seguir//
    if(direction == "right") snakeX += box; //se a direção da cobrinha for pra direta, a posição da cobrinha vai acrescentar um quadradinho a mais//
    if(direction == "left") snakeY -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    snake.pop(); //função pop que retira o último elemento do Array//
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

//intervalo de 100 milisegundos sendo passado para iniciarJogo, de modo que, a cada 100 milisegundos ela vai ficar sendo renovada e dar continuidade ao jogo sem ele travar//
let jogo = setInterval(iniciarJogo, 100);

