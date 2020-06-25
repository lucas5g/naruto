class Animacao{
  //constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    constructor(data){
    this.matriz = data.matriz
    this.imagem = data.image
    this.largura = data.largura 
    this.altura = data.altura
    this.x = data.x
    this.variacaoY = data.variacaoY
    this.y = height - this.altura - this.variacaoY
    
    this.larguraSprite = data.larguraSprite
    this.alturaSprite = data.alturaSprite
    
    this.frameAtual = 0    
  }
 
  exibe(){
    
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite)
    this.anima()
    /**/
  }
  
  anima(){
    this.frameAtual++
    
    this.frameAtual =  this.frameAtual >= this.matriz.length -1 ? 0 :  this.frameAtual
  }
  
}
