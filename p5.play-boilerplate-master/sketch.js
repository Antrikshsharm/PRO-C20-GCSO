
var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500,200,50,50);
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
background(255,255,255);  
if(wall.x-car.x < (car.width+wall.width)/2)
{
car.velocitiyX=0;
var deformation=0.5 * weight * speed* speed/22500;
if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}

if(deformation<100)
 {
  car.shapeColor=color(0,255,0);
 }
}
drawSprites();
}

function hasCollieded (car,wall) {
  carRightEdge=car.x+car.width;
  wallLeftEdge=wall.x;
  if(carRigthtEdge>=wallLeftEdge){
    return true
  }
  return false;
}



