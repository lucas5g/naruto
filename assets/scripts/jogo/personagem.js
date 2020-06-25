class Personagem extends Animacao{
  //constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite ){
  constructor(data){
    super(data)
  //super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
   this.variacaoY = data.variacaoY
   this.yInicial = height - this.altura - this.variacaoY
   this.y = this.yInicial
   
    this.speedJump = 0
    this.gravidade = 6
    this.alturaDoPulo = -50
    this.pulos = 0  
//    console.log(this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite)
/** */
  }
  teste(){
    console.log('test method')
  }
  
  
  jump(){
    this.speedJump = -50
  }
  
  aplicaGravidade(){
    this.y = this.y + this.speedJump
    this.speedJump = this.speedJump + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
    }
    
    
  }
  
  estaColidindo(inimigo){
    const precisao = .7
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )
    
    return colisao
  
  }
}