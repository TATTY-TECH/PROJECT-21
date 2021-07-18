var bullet, wall, thickness;

var speed, weight;

var fixedRect, movingRect;


function setup(){
  createCanvas(1800, 800);

  thickness=random(22,83);

  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200,200,thickness,100);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed;

  fixedRect = createSprite(200,200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = +5;

  movingRect = createSprite(200,400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;

}

function draw(){
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  }
  if(deformation>180) {
  bullet.shapeColor = "white";
  }
  if(deformation<180 && deformation>100) {
  bullet.shapeColor = "white";
  }
  if(deformation<100) {
  bullet.shapeColor = "white";
  }

  if(hasCollided(bullet, wall)) {
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }

  if(damage>10) {
  wall.shapeColor = "red";
  }

  if(damage<10) {
  wall.shapeColor = "green";
  }

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  

  drawSprites()

}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
  return true;
  }
  return false;
}
