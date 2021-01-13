var canvas, backgroundImage;

var database;

var playercount=0;
var player,allPlayers,carnumber,car
var car5=0

var car1,car2,car3,car4
var car1img,car2img,car3img,car4img

var form,game,gamestate=0;
var form2

var bgimg,logo,logo1,bg2,bg3,bg4

function preload() {
  bgimg=loadImage("images/startbg.png")
  logo=loadImage("images/logo1.png")
  car1img=loadImage("images/car1.png")
  car2img=loadImage("images/car2.png")
  car3img=loadImage("images/car3.png")
  car4img=loadImage("images/car4.png")
  bg2=loadImage("images/formbg.png")
  bg3=loadImage("images/formbg2.png")
  bg4=loadImage("images/formbg3.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-180);
  
  database = firebase.database();

  background(255)

  //logo1=createSprite(displayWidth/2-80,200,300,200)
  //logo1.addImage(logo)
  //.scale=0.25
  //logo1.visible=false

  game=new Game();
  game.getstate();
  game.start();
 
  form=new Form();
  form2=new Data();  

}

function draw(){
  
  if (gamestate===0){
    if (keyDown('space')){
      gamestate=1
      game.updatestate(1);
      background(bg2);
      //form.hide();
    }
}
  if (gamestate===1){
    //background(bg2)
    form.display();
    //form.hidden();
    //logo1.visible=true
  }
  if (playercount===4){
    gamestate=2
    game.updatestate(2)
    form.hide();
  }
  if (gamestate===2){
    form2.display();
    background(bg4)
  }
  if (car5===4){
    gamestate=3
    game.updatestate(3)
    background(0)
  }
  drawSprites();
}