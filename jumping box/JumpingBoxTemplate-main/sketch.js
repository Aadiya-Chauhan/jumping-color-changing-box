var canvas;
var music;
var jumpingBox, rect1, rect2, rect3, rect4, s1, s2, s3, s4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,580);

    //create 4 different surfaces
jumpingBox = createSprite(random(0,800), 300, 50, 50);
jumpingBox.shapeColor = "white";
jumpingBox.velocityX = -10;
jumpingBox.velocityY = 10; 

rect1 = createSprite(0, 300, 30, 600);
rect2 = createSprite(400, 600, 780, 30);
rect3 = createSprite(800, 300, 30, 600);
rect4 = createSprite(400, 00, 780, 30);

s1 = createSprite(100, 560, 200, 30);
s1.shapeColor = "yellow";
s2 = createSprite(310, 560, 200, 30);
s2.shapeColor = "pink";
s3 = createSprite(520, 560, 200, 30);
s3.shapeColor = "red";
s4 = createSprite(730, 560, 200, 30);
s4.shapeColor = "blue";

    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite

    if(jumpingBox.isTouching(s1)) {
        jumpingBox.shapeColor = "yellow";   
       }
    
       if(jumpingBox.isTouching(s2)) {
           jumpingBox.shapeColor = "pink";   
          }
    
       if(jumpingBox.isTouching(s3)) {
          jumpingBox.shapeColor = "red";   
       }
    
       if(jumpingBox.isTouching(s4)) {
           jumpingBox.shapeColor = "blue";   
          }

    jumpingBox.bounceOff(rect1);
    jumpingBox.bounceOff(rect2);
    jumpingBox.bounceOff(rect3);
    jumpingBox.bounceOff(rect4);

    jumpingBox.bounceOff(s1);
    jumpingBox.bounceOff(s2);
    jumpingBox.bounceOff(s3);
    jumpingBox.bounceOff(s4);

   drawSprites();
    //add condition to check if box touching surface and make it box
}

