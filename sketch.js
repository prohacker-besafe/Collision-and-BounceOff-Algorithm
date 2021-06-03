var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(200,200,30,30);
  obj1.shapeColor = "blue";
  obj2 = createSprite(300,250,30,30);
  obj2.shapeColor = "blue";
  obj3 = createSprite(400,300,30,30);
  obj3.shapeColor = "blue";
  obj4 = createSprite(500,350,30,30);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
bounceOff(movingRect, fixedRect);
  

if(isTouching(movingRect, obj4)){
    movingRect.shapeColor = "green";
    obj4.shapeColor = "green";
}else {
  movingRect.shapeColor = "red";
  obj4.shapeColor = "red";
}


  drawSprites();
}


