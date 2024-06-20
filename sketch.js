var sea, seaImg;
var ship, shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  //oceano
  sea = createSprite(400, 200);
  sea.addImage(seaImg);
  sea.velocityX = -3;
  sea.scale = 0.3;

  //barco
  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation("moving", shipImg);
  ship.scale = 0.25;


}

function draw() {
  background("blue");

  //fondo infinito
  if (sea.x <= 0) {
    sea.x = 200;
  }

  console.log(sea.x);
 drawSprites();
}