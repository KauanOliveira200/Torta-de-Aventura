class Jogador {
    constructor() {
      this.imagem = loadImage("jogo/imgjogo/player.png");
      this.posX = 275;
      this.posY = 330;
      this.velocidade = 15;
      this.largura = 80;
      this.altura = 70;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  
    //Faz o jogador controlar o boneco//
    mova() {
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.velocidade;
      }
  
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.velocidade;
      }
  
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }