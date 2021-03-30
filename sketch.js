hr = hour()
mn = minute()
sc = second()




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES)

scAngle = map(sc,0,60,0,360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr,0,12,0,360)

stroke(255,0,0)
strokeweight(7)
line(0,0,100,0)


}

function draw() {
  background(255,255,255);  
  drawSprites();
}