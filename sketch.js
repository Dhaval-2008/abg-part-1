var fixedRect, movingRect;
var car, wall;
function setup(){
  createCanvas(1200, 800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="red";

  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="red"; 
  car = createSprite(300, 200, 40, 40);
  wall = createSprite(800, 200, 20, 100);
  car.shapeColor = "magenta";
  wall.shapeColor = "blue";
  car.velocityX = 4;
}

function draw(){
  background(0, 0, 0);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car, wall)){
    car.shapeColor = "red";
  }

  Bounce(car, wall);
  drawSprites();
}

