class Inimigo extends Animacao{
  constructor({matriz, image, x, variacaoY, largura, altura, larguraSprite, alturaSprite, speed, delay}){

    super({matriz,  image, x, variacaoY, largura, altura, larguraSprite, alturaSprite})
    
    
    this.speed = speed

    this.delay = delay

    this.x = width + this.delay
    /**/
  }
  
  move(){
    this.x = this.x - this.speed
    if(this.x < - this.largura){
      this.x = width
    }
  }
  
  /*
  estaColidindo(){
    const precisao = .7
  
  }
  /** */

}