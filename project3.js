var stopHere;


function setup()
    {
        createCanvas(400, 600);
        background(248, 246, 207);
var tileX=0
var tileY=0
while(tileY<650)
    {
    drawTile(tileX, tileY);
    tileX+=50
    if (tileX > 400)
      {
         tileX = 0;
         tileY += 100;
      }
    }
    stopHere=0;
}

function drawTile(x, y){
push();
translate(x,y);
fill(248, 246, 207);
rotate(random(PI, 2*PI));
stroke(random(100, 200), random(200, 255), random(40, 200), random(100, 150));
ellipse(0, 0, 40, 100);
ellipse(0, 0, 30, 80);
ellipse(0, 0, 20, 60);
ellipse(0, 0, 10, 40);
ellipse(0, 0, 0, 20);
pop();
}



function drawSpiral(cx, cy, radi, rot) {

var sx, sy, sradi;

    rotate(rot);
    stroke(121, 150, 122);
    fill(121, 150, 122);
    sradi = 0;


    for (var i=0; i < stopHere; i++) 
    {
        sx = cx +sradi*sin(radians(i));
        sy = cy + sradi*cos(radians(i));
        ellipse(sx, sy, sradi/5, sradi/5);
        sradi = sradi + radi/720;
    }

//advance the loop parameter so each frame it animates more //as long as we havenâ€™t reach 720 (visually pleasing)

    if (stopHere < 720)
    {
        stopHere = stopHere + 1; }
    }

    

// continued on next page
function draw()
{
    stroke(121, 150, 122);
    strokeWeight(32);
    line(width/2, height, width/2, height/2.5);

 
push();
    strokeWeight(1);
    drawSpiral(390, 100, -80, 1);
    drawSpiral(443, -20, 60, 0);
    drawSpiral(305, 10, -40, 0);
    drawSpiral(600, 40, 100, 0); 
pop();  


    //MIDDLE BUD
    fill(124, 114, 139) //Purple Color
    noStroke();
    ellipse(200, 190, 40);

    //SMALL STEMS

    //PURPLE STEM
    stroke(124, 114, 139) //Purple Color
    strokeWeight(2);
    line(200, 160, 200, 135);
    rect(197, 135, 6, 12, 2);
    fill(196, 104, 129);

    //PETALS
    noStroke();
    ellipse(200, 115, 20);
    ellipse(200, 80, 30);
    ellipse(200, 30, 40);

     //GREEN STEM
push();
translate(220, 140);
rotate(radians(25));
    stroke(121, 150, 122) //GREEN Color
    strokeWeight(2);
    line(0, 0, 0, 25);

    fill(121, 150, 122);
    rect(-2, 0, 6, 12, 2);

    fill(196, 104, 129);
    noStroke();
    ellipse(0, -20, 20);
    ellipse(0, -55, 30);
    ellipse(0, -107, 40);
pop();

//PURPLE STEM

push();
translate(238, 154);
rotate(radians(50));
    stroke(124, 114, 139) //GREEN Color
    strokeWeight(2);
    line(0, 0, 0, 25);

    fill(124, 114, 139);
    rect(-2, 0, 6, 12, 2);

    fill(196, 104, 129); //PETAL
    noStroke();
    ellipse(0, -20, 20);
    ellipse(0, -55, 30);
    ellipse(0, -107, 40);
pop();

    //GREEN STEM
push();
translate(249, 175);
rotate(radians(75));
    stroke(121, 150, 122) //GREEN Color
    strokeWeight(2);
    line(0, 0, 0, 25);

    fill(121, 150, 122);
    rect(-2, 0, 6, 12, 2);

    fill(196, 104, 129); //PETAL
    noStroke();
    ellipse(0, -20, 20);
    ellipse(0, -55, 30);
    ellipse(0, -107, 40);
pop();

//PURPLE STEM

push();
translate(252, 195);
rotate(radians(90));
    stroke(124, 114, 139) //GREEN Color
    strokeWeight(2);
    line(0, 0, 0, 25);

    fill(124, 114, 139);
    rect(-2, 0, 6, 12, 2);

    fill(196, 104, 129);  //PETAL
    noStroke();
    ellipse(0, -20, 20);
    ellipse(0, -55, 30);
    ellipse(0, -107, 40);
pop();


     //GREEN STEM
push();
translate(180, 140);
rotate(radians(-25));
    stroke(121, 150, 122) //GREEN Color
    strokeWeight(2);
    line(0, 0, 0, 25);

    fill(121, 150, 122);
    rect(-2, 0, 6, 12, 2);

    fill(196, 104, 129); //PETAL
    noStroke();
    ellipse(0, -20, 20);
    ellipse(0, -55, 30);
    ellipse(0, -107, 40);
pop();

//PURPLE STEM

push();
translate(160, 154);
rotate(radians(-50));
    stroke(124, 114, 139) //GREEN Color
    strokeWeight(2);
    line(0, 0, 0, 25);

    fill(124, 114, 139);
    rect(-2, 0, 6, 12, 2);

    fill(196, 104, 129);  //PETAL
    noStroke();
    ellipse(0, -20, 20);
    ellipse(0, -55, 30);
    ellipse(0, -107, 40);
pop();

   //GREEN STEM
push();
translate(150, 175);
rotate(radians(-75));
    stroke(121, 150, 122) //GREEN Color
    strokeWeight(2);
    line(0, 0, 0, 25);

    fill(121, 150, 122);
    rect(-2, 0, 6, 12, 2);

    fill(196, 104, 129); //PETAL
    noStroke();
    ellipse(0, -20, 20);
    ellipse(0, -55, 30);
    ellipse(0, -107, 40);
pop();

//PURPLE STEM

push();
translate(152, 195);
rotate(radians(-90));
    stroke(124, 114, 139) //GREEN Color
    strokeWeight(2);
    line(0, 0, 0, 25);

    fill(124, 114, 139);
    rect(-2, 0, 6, 12, 2);

    fill(196, 104, 129);  //PETAL
    noStroke();
    ellipse(0, -20, 20);
    ellipse(0, -55, 30);
    ellipse(0, -107, 40);
pop();



}