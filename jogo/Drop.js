class Drop {
    constructor() {
      this.imagem = imgDrops[int(random(0, 4.9))];
      this.posX = random(490, 0);
      this.posY = 30;
      this.velocidade = random(1, velocidade);
      this.largura = 70;
      this.altura = 40;
      this.yInicial = this.posY - this.altura;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
    }
  
    //Define a posição dos drops//
    mova() {
      this.posY += this.velocidade;
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }