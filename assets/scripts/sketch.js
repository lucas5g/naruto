let pontuacao


const cenario = {speed: 9 }
let personagem = {
  x: 50,
  variacaoY: 12,
  largura:60,
  altura:120,
  larguraSprite:40,
  alturaSprite: 48,
  matriz: [
    [9, 8], [66, 8], [120, 8], [172, 8], [228, 8], [284, 8], [344, 8],   [394, 8],    
  ]  

} 

let inimigo = {
  x:50,
  variacaoY: 100,
  largura: 50,
  altura: 60,
  larguraSprite: 310, 
  alturaSprite: 380, 
  speed: 10,
  delay: 100,
  matriz:  [
    [380, 555], [770,550], [1117, 540], [1461, 510]
  ],
}

let inimigoVoador = {
  x: 0,
  variacaoY:200,
  largura: 100,
  altura: 75, 
  larguraSprite:200, 
  alturaSprite: 150,
  speed: 10, 
  delay:1450 ,
  matriz: [
    [0, 0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
  ]
}
let inimigoGrande = {
  x: 0,
  variacaoY: -10,
  largura: 200,
  altura: 200, 
  larguraSprite:400, 
  alturaSprite: 400,
  speed: 10, 
  delay: 200,
  matriz: [
    [0, 0],
    [400, 0],
    [800, 0],
    [1200, 0],
    [1600, 0],
    [0, 400],
    [400, 400],
    [800, 400],
    [1200, 400],
    [1600, 400],
    [0, 800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200],
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
  ]
  
}
const inimigos = []
let sound = {}
function preload() {
  
  cenario.image =  loadImage(loadPath("forest.jpg"))
  personagem.image = loadImage(loadPath("naruto_run_jump.png"))
  inimigo.image = loadImage(loadPath("shuriken.png"))
  inimigoVoador.image = loadImage(loadPath("gotinha-voadora.png"))
  inimigoGrande.image = loadImage(loadPath('troll.png'))
 
  sound= {
    background: loadSound(loadPath('funk-triste-original.mp3')),
    jump: loadSound(loadPath('jump.mp3'))
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario.action = new Cenario(cenario)
  
  personagem = new Personagem(personagem)
  
  inimigo = new Inimigo(inimigo)
  inimigos.push(inimigo)

  inimigoVoador = new Inimigo(inimigoVoador)
  inimigos.push(inimigoVoador)
 
  inimigoGrande = new Inimigo(inimigoGrande)
  inimigos.push(inimigoGrande)  
    /** */
  frameRate(15)
  //sound.background.loop()

}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula()
    sound.jump.play()
    
  }
}


function draw() {
  
  cenario.action.exibe()
  cenario.action.move()
  
  personagem.exibe()
  
  personagem.aplicaGravidade()

  inimigos.map(inimigo => {
    inimigo.exibe()
    inimigo.move()

    if(personagem.estaColidindo(inimigo)){
      //console.log(personagem.estaColidindo(inimigo))
      //noLoop()
      //somDoGrito.play() 
    }
  })
  
  /** */ 
  

}

