var canvas;
var gameState=0;
var form,game;
var astroJet,astroJetIMG;
var alien,ufo,boss,fireBall,fireBallIMG;
var alienGroup,UFOGroup,fireBallGroup;
var alienIMG,ufoIMG,bossIMG;
var bg,backgroundIMG;
var out,outIMG;
var startButton,startButtonIMG;
var score = 0;

function preload(){
  backgroundIMG = loadImage("images/galex.jpg");
  alienIMG = loadImage("images/alien.png");
  astroJetIMG = loadImage("images/JET.png");
  ufoIMG = loadImage("images/UFO.png");
  startButtonIMG = loadImage("images/start.png");
  outIMG = loadImage("images/outlook.png");
  fireBallIMG = loadImage("images/fireBall.png");

}

function setup() {
  createCanvas(400,625);
    game = new Game();
}

function draw() {
      background(0);
      
      drawSprites();

      console.log(gameState);

      if(gameState === 0){
        game.start();
      }
      
      if(gameState === 1){
        game.play();
      }

      if(keyDown("space")){
        createfireBall();
      }
      if(keyDown(LEFT_ARROW)){
        astroJet.velocityX = -6;
        astroJet.x = 10;
      }
      if(keyDown(RIGHT_ARROW)){
        astroJet.velocityX = +6;
        astroJet.x = 10;
      }
      if(keyDown("enter")){
        gameState = 1;
      }
    
      text("score :"+score,350,30);
      textSize(30);
      fill("gold");
      text("-Escape Galaxy-",90,100);

      textSize(10);
      text("level 1",185,300);
      text("instruction:\n");
      text("-Enter To Start-",165,440);
         
}
function alienSpawn() {
    if(frameCount % 50 === 0){
      var alien = createSprite(0,Math.round(random(400,20)), 10, 10);
      alien.addImage(alienIMG);
      alien.velocityY = -(9+(score/4));
      alien.lifetime = 400;
      alien.scale = 0.5; 
      alienGroup.add(alien);
    }

}
function UFOSpawn() {
  if(frameCount % 50 === 0){
    var ufo = createSprite(0,Math.round(random(20, 370)), 10, 10);
    ufo.addImage(ufoIMG);
    ufo.velocityY = -(9+(score/4));
    ufo.lifetime = 400;
    ufo.scale = 0.5; 
    UFOGroup.add(ufo);
  }
  
}
function createfireBall() {
  var fireBall= createSprite(200, 420, 10, 10);
  fireBall.addImage(fireBallIMG);
  fireBall.y = 400;
  fireBall.x=astroJet.x;
  fireBall.velocityY = -6;
  fireBall.lifetime = 1000;
  fireBall.scale = 0.3;
  fireBallGroup.add(fireBall);
   
}
