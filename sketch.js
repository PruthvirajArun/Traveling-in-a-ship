var sea ,ship ,sea_image ,ship_image;

function preload(){
sea_image = loadImage(sea.png);
ship_image = loadAnimation(ship1.png,ship2.png,ship3.png,ship3.png)
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
  sea.addImage(sea_image);
  sea.velocityX = -2;
  ship = createSprite(50,300,20,20);
  ship.addAnimation("upanddown",sea_image);

  
}

function draw() {
  background("blue");
  if(sea.x < 0) {
    sea.x = sea.width/2;
  }
  drawSprites();
 
}