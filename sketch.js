var hourss,mins,secs;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  hourss=hour();
  mins=minute();
  secs=second();
  translate(200,200);
  rotate(-90);
  sec=map(secs,0,60,0,360);
  min=map(mins,0,60,0,360);
  hour=map(hourss%12,0,12,0,360);
  //Seconds Hand
  push();
  rotate(sec);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();
  //Seconds Arc
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,sec);
  drawSprites();
  //Minute Hand
  push();
  rotate(min);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,90,0);
  pop();
  //Minutes Arc
  strokeWeight(10);
  noFill();
  stroke(0,255,0);
  arc(0,0,280,280,0,min);
  //Hour Hand
  push();
  rotate(hour);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,70,0);
  pop();
  //Hour Arc
  strokeWeight(10);
  noFill();
  stroke(0,0,255);
  arc(0,0,260,260,0,hour);
  drawSprites();
}