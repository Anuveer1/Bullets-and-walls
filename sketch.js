var wall, thickness, bullet, speed, weight;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  bullet.shapeColor="green";
}

function draw() {
  background("black");  
  createCanvas(1600,400);
  wall.shapeColor=color(230,230,230);

  if(wall.x - bullet.x <bullet.width/2 + wall.width/2){
    bullet.velocityX=0;
    var deformation= 0.5*weight*speed*speed/ thickness*thickness*thickness;
 }
    if (deformation>10){
      bullet.shapeColor="red";
    }
    if(deformation<10){
      bullet.shapeColor="yellow";
    }

  drawSprites();
}