var imgFundo;
var drops = [];
var imgDrops = [];
var jogador;
var pontos = 0;
var vilao;
var velocidade = 5;
var som;
var imgAbertura;
var controleTela = "INICIO"
var imgGameover;
var vidas = 3;
//Define as predefinições do jogador//

class Vilao {
  constructor() {
    this.imagem = loadImage("jogo/imgjogo/vilao.png");
    this.posX = -5;
    this.posY = -30;
    this.velocidade = random(1, 4.9);
    this.largura = 600;
    this.altura = 500;
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
  }

  //Faz o jogador controlar o boneco//
  mova() {
    image(this.imagem, this.posX, this.posY, this.largura, this.altura);

    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
  }
}



//Define as predefinições dos drops//


//As fotos dos objetos//
function preload() {
  imgFundo = loadImage("jogo/imgjogo/cenario.png");
  imgDrops[0] = loadImage("jogo/imgjogo/torta.png");
  imgDrops[1] = loadImage("jogo/imgjogo/sanduiche.png");
  imgDrops[2] = loadImage("jogo/imgjogo/morango.png");
  imgDrops[3] = loadImage("jogo/imgjogo/supremo.png");
  imgDrops[4] = loadImage("jogo/imgjogo/bomb.png");
  som_comer = loadSound("jogo/sons/comendo.mp3");
  som_explosao = loadSound("jogo/sons/explosao.mp3");
  drops[0] = new Drop();
  drops[1] = new Drop();
  drops[2] = new Drop();
  drops[3] = new Drop();
  drops[4] = new Drop();
  imgAbertura = loadImage("jogo/imgjogo/inicial.gif")
  imgGameover = loadImage("jogo/imgjogo/game-over.gif")
  //Posição onde os carros ficam/
  jogador = new Jogador();
  vilao = new Vilao();
}

//Tamanho da tela//
function setup() {
  createCanvas(600, 400).parent("jogo");
}

//Imagem de fundo usada na tela//
function draw() {
  if(controleTela == "INICIO"){
    mostraAbertura();
  } if(controleTela == "JOGO"){
    executarJogo();
  }if(controleTela == ("MORTE")){
    mostraFinal();
  }
  if(keyIsDown(13)){
  controleTela = ("JOGO")
  }
}
