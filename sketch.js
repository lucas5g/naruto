let imagemCenario
let imagemPersonagem
let imagemInimigo
let cenario
let somDojogo
let somDoPulo
let somGrito
let personagem
let inimigo

const matrizPersonagem = [
    [9, 8], [66, 8], [120, 8], [172, 8], [228, 8], [284, 8], [344, 8],   [394, 8],    
  ]  

const matrizInimigo = [
  [380, 555], [770,550], [1117, 540], [1461, 510]
]

function preload() {
  imagemCenario = loadImage('imagens/cenario/forest.jpg')
  imagemPersonagem = loadImage('imagens/personagem/naruto_run_jump.png')
  imagemInimigo = loadImage('imagens/inimigos/shuriken.png')
  somDoJogo = loadSound('sons/funk-triste-original.mp3')
  somDoPulo = loadSound('sons/somPulo.mp3')
  somDoGrito = loadSound('sons/br.mp3')

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 9)
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, height,  60,120, 40, 48)
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, height - 100, 50,  60, 310, 380)
  
  frameRate(15)
  //somDoJogo.loop()

}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula()
    somDoPulo.play()
    
  }
}


function draw() {

  cenario.exibe()
  cenario.move()
  personagem.exibe()
  
  inimigo.exibe()
  inimigo.move()
  personagem.aplicaGravidade()
  
  if(personagem.estaColidindo(inimigo)){
    console.log(personagem.estaColidindo(inimigo))
    noLoop()
    somDoGrito.play() 
  
  }
  
  

}

