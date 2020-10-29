var bullet;
var wall;
var speed,weight,thickness;
var deformation;


function setup() {
 createCanvas(800,200);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet =  createSprite(50, 100, 80, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall =  createSprite(600, 100, 30, 100);
  wall.shapeColor = "white";
}

function draw() {
  background(30);  

  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/thickness*thickness*thickness
    if(deformation > 10){
      bullet.shapeColor = color(255,0,0);
    }
    if(deformation < 10){
      bullet.shapeColor = color(0,255,0);
    }
  }

  bullet.collide(wall);

  drawSprites();
}