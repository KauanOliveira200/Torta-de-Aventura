function executarJogo(){
    background(imgFundo);

    //Faz o jogador se mexer//
    jogador.mova();
    vilao.mova();
  
    //Ele verifica cada drop//
    for (let i = 0; i < drops.length; i++) {
      drops[i].mova();
      //Faz os drops voltarem ao início//
      if (drops[i].posY > 400) {
        drops[i] = new Drop();
      }
      //Faz o jogador pegar os drops//
      if (
        jogador.xInicial < drops[i].xFinal &&
        jogador.xFinal > drops[i].xInicial &&
        jogador.yInicial < drops[i].yFinal &&
        jogador.yFinal > drops[i].yInicial
      ) {
        if (drops[i].imagem == imgDrops[4]) {
          drops[i] = new Drop(drops[i].posY);
          velocidade = 5;
          som_explosao.play(); 
          vidas --;

        } else {
          drops[i] = new Drop(drops[i].posY);
          pontos++;
          velocidade += 1;
          som_comer.play();
        }
        if (vidas == 0){
          controleTela = ("MORTE");
          vidas = 3;
          pontos = 0;
        }
      }
      text("Pontuação: " + pontos, 10, 20);
      text("Vidas: " + vidas, 500, 20);
    }
}