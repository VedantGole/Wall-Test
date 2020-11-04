//Declaring Global Variables
var bullet, weight, thickess;
var wall, speed;

var damage;

//Additional Speed tracking Mechanism
var Speed = speed;

function setup() {
createCanvas(1600, 400);

//Assigning random values to the speed and weight and the bullet
speed = random(223, 321);
weight = random(30, 52);



//creating the wall and the bullet

//giving  random thickness to the wall
thickness = Math.round(random(22, 83));

bullet = createSprite(50, 200, 75, 10);
wall = createSprite(1200, 200, thickness, height/2);


//giving the random speed to the bullet
bullet.velocityX = speed;

bullet.shapeColor = "white";
  
}
function draw() {
  background(0);
  
  //Adding code for the bullets's results : green and red for pass and fail respectively.
    if(hasCollided(bullet, wall)){
      bullet.velocityX = 0;
      //putting the damage Formula into an variable
      damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

      if(damage < 10){
        wall.shapeColor = color(0, 255, 0);
        fill(0, 255, 0);
        text("PASS!", 1000, 50);
      }
      
      if(damage > 10){
        wall.shapeColor = color(255, 0, 0);
        fill(255, 0, 0);
        text("FAIL!", 1000, 50);
      
      }
    }
      fill("yellow");
      text("Bullet speed = " + Math.round(speed) + "KM/H", 650, 50);

      

  drawSprites();
}

function hasCollided (lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  } else{
   return false; 
}
}
