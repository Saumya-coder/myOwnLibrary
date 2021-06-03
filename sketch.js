var fixedRect, movingRect;
var Box1,Box2,Box3,Box4;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 250, 50, 80);
  movingRect=createSprite(400,200,80,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  Box1=createSprite(100,120,50,80);
  Box1.shapeColor="blue";

  Box2=createSprite(200,120,50,80);
  Box2.shapeColor="blue";

  Box3=createSprite(300,120,50,80);
  Box3.shapeColor="blue"; 

  Box4=createSprite(400,120,50,80);
  Box4.shapeColor="blue";
}


function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  if (isTouching(Box1,movingRect)){
    Box1.shapeColor="purple";
    movingRect.shapeColor="purple";
  }
  else{
    Box1.shapeColor="blue";
    movingRect.shapeColor="green";
  }
  
  
  drawSprites();
}

