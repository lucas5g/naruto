class Inimigo extends Animacao{
  constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite){
    super(matriz,  imagem, x, y, largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = 15
  }
  
  move(){
    this.x = this.x - this.velocidade
    if(this.x < - this.largura){
      this.x = width
    }
  }
  
  estaColidindo(){
    const precisao = .7
  
  }

}