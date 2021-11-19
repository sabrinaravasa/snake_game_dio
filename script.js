let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32px cada quadradinho, vai ser o tamanho dele//
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; //variável com a direção que a gente quer que a cobrinha ande//
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,//criação de números aleatórios, math.random retorna sempre um número ateatório até um//
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //fillRect trabalha com quatro parâmetros, posição x, y, altura e largura. No retângulo onde vai acontecer o jogo, altura e largura de 16 quadradinhos//
}

//A cobrinha precisa ser um array para conseguir trabalhar melhor//
function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//captar o toque no botão e transmitir o código da tecla para a função. Keydown é um evento de clique e vai chamar a update//
document.addEventListener("keydown", update);

function update (event){
    //&& adição, obrigatório, != não pode ser, proibido. Se o botão for 37 e a direção não for direita, ela muda para esquerda. Se não a cobrinha ia ficar com duas cabeças//
    if(event.keyCode == 37 && direction != "right") direction = "left"; 
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    //se o valor de snake[0] (que é a cabeça da cobrinha) da posição x for maior que 15 vezes o tamanho do box, que é o tamanho do canvas. Se isso acontecer, para a direção da direita ela sairia da tela. Então, se isso acontecer e ela sair da tela, ela vai receber o valor de 0 e aparecer novamente da esquerda para a direit// 
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    drawFood();

    //coordenadas por onde a cobrinha vai seguir//
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    //condicionais que vão mostrar por onde a cobrinha vai seguir//
    if(direction == "right") snakeX += box; //se a direção da cobrinha for pra direta, a posição da cobrinha vai acrescentar um quadradinho a mais//
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    
    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //função pop que retira o último elemento do Array//
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
    
    let newHead = { //criando uma nova cabeça// 
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método que acrescenta uma nova cabeça sempre no primeiro elemento, acrescenta na frente//
}

//intervalo de 100 milisegundos sendo passado para iniciarJogo, de modo que, a cada 100 milisegundos ela vai ficar sendo renovada e dar continuidade ao jogo sem ele travar//
let jogo = setInterval(iniciarJogo, 100);


