var cloudRight = 0;
var cloudLeft = 0;

var livesc = 1
var livex = -400;
var livey = 100;
var truckX = 0;
var truckY = 0;
var beanieX1 = 200;
var beanieY1 = 350;
var beanieR1 = 0;

var nextScene = false;
var button;
var scene = 1;

var locDT;
var dirDT;
var locBUS;
var dirBUS;
var locPUL;
var dirPUL;
var Rrot;
var Lrot;
var Rarmrot;
var Larmrot;
var Rlegout= true;
var Llegout= false;
var animate = true;
var land;
var accel;


var beanieX9=0;
var beanieY9=457;
var beanieX11 = 300;
var beanieY11 = 457;
var icecreamX = 329;
var icecreamY = 435;


var locDT;
var dirDT;
var locIN;
var dirIN;
var locCF;
var dirCF;
var rotR;
var rotL;
var Rleg= true;
var Lleg= false;

var fireW1;
var firework = [];




function setup() {
createCanvas(700, 500);

// start a new particle system
fireW1 = new PSys(340, 180, 100)
fireW2 = new PSys(450, 120, 100)
fireW3 = new PSys(300, 205, 100)

background('#FFFFFF');

  Rrot= -PI/10;
  Lrot= PI/10;
  Rarmrot= 5*PI/4;
  Larmrot= 3*PI/4;


   accel= createVector(0.001, 0.05);
   locDT = createVector(-30, 400);
   dirDT = createVector(1, 0);
   locIN = createVector(-30, 400);
   dirIN = createVector(1, 0);
   locCF = createVector(-30, 400);
   dirCF = createVector(1, 0);
   locBUS = createVector(200, 550);
   dirBUS = createVector(0, -1);
   locPUL = createVector(300, 550);
   dirPUL = createVector(0, -5.5);
   land= createVector(370, 350);

    rotR= -PI/10;
    rotL= PI/10;



}

function draw(){

   if (scene == 1)
   {
    sceneOne();
    drawButton();
   }
   else if(scene == 2)
   {
    sceneTwo();
   }
   else if(scene == 3){
    sceneThree();
    drawButton();
   }
   //else if(scene == 4){
   // sceneFour();
   // drawButton();
   //}
    else if(scene == 4){
    sceneFIVE();
   }
    else if(scene == 5){
    sceneSIX();
    drawButton();
   }
    else if(scene == 6){
    sceneFour();
    drawButton();
   }
    else if(scene == 7){
    sceneEIGHT();
   }else if(scene == 8){
    sceneNine();
   }else if(scene == 9){
    sceneTen();
    } else if(scene == 10){
    sceneEleven();
    drawButton();
    } else if(scene ==11){
      sceneTwelve();
      drawButton();
    }else if(scene == 12){
      sceneThirteen();
    }else if(scene == 13){
      sceneFourteen();
    }

}

function drawButton(){
   fill(20, 150, 30);
   noStroke();
   ellipse(650, 450, 50);
   fill(255);
   noStroke();
   textSize(12);
   textFont("Montserrat");
   text("NEXT", 634, 455);
}

function mousePressed(){
   //if (mouseX > 600 && mouseX < 700 && mouseY < 500 && mouseY>400){
      scene++;
  //}

}

function drawBeanie(x,y, rot, sc){
   fill('#CD853F');
   push();
   translate(x,y);
   scale(sc);
   rotate(rot);
   ellipse(0, 0, 35, 50);

   fill(0);
   ellipse(-7, -4, 5, 5);
   ellipse(7, -4, 5, 5);

   fill('#FFB6C1');
   ellipse(-9, 2, 8, 3);
   ellipse(9, 2, 8, 3);

   noFill();
   stroke(0);
   arc(0, 6, 5, 5, 0, PI);
   pop();
   
}

function drawCloud(cloudX, cloudY, size, sc){
   push();
      scale(sc);
      fill(255, 255, 255, 130);
      ellipse(cloudX, cloudY, size*5, size*3);
      ellipse(cloudX*1.25, cloudY*1.1, size*3, size*2);
      ellipse(cloudX*-0.01, cloudY*1.1, size*8, size*3);
   pop();

}


function sceneOne(){
   noStroke();

   background('#B5F1F7');
   fill('#525759');
     rect(0, 375, 700, 125);

     fill('#FCDC56');
     rect(0, 425, 40, 15);
     rect(100, 425, 40, 15);
     rect(200, 425, 40, 15);
     rect(300, 425, 40, 15);
     rect(400, 425, 40, 15);
     rect(500, 425, 40, 15);
     rect(600, 425, 40, 15);
     rect(695, 425, 40, 15);


      push();
         translate(cloudRight, 0);
         drawCloud(100, 100, 20, 1);
         drawCloud(200, 100, 10, 1.2);
         drawCloud(50, 170, 15, 1);
         drawCloud(300, 50, 20, 1);
         drawCloud(500, 170, 15, 1);
      pop();

      push();
         translate(cloudLeft, 0);

         drawCloud(450, 50, 20, 1);
         drawCloud(600, 60, 30, 1);
         drawCloud(350, 30, 12, 1);
         drawCloud(500, 150, 10, 1);
         drawCloud(700, 20, 15, 1);
      pop();


    drawTruck(truckX,truckY);

   
   drawBeanie(beanieX1, beanieY1, beanieR1, 1);

   cloudLeft-=0.12;
   cloudRight+=0.09;
   truckX += 5;

   if (beanieY1<380){
     beanieX1-=1;
     beanieY1+=1;
   }
   if (beanieR1 < 361){
    beanieR1+= 30;
  }
   

}

function drawTruck(x, y){
  push();
  translate(x, y)



     fill('#5E686F');
     rect(250, 250, 340, 100, 20, 40, 0, 20);
     rect(400, 175, 100, 75, 25, 0, 0, 0);
     triangle(500, 175, 500, 250, 550, 250);

     fill('#4D4D4E');
     ellipse(325, 350, 80);
     ellipse(510, 350, 80);

     fill('#FFFFFF');
     ellipse(325, 350, 40);
     ellipse(510, 350, 40);

     fill('#FACD4E');
     rect(560, 270, 30, 25, 20, 10, 0, 20);

     fill('#ED5B45');
     rect(250, 275, 30, 25);

     fill('#99A5A6');
     rect(430, 260, 30, 10, 20, 20, 20, 20);

     fill('#B2DEF7');
     rect(425, 185, 65, 60);
     triangle(490, 185, 490, 245, 525, 245);
  pop();

}

function sceneTwo(){
   background('#B5F1F7');
   
   fill(0);
   noStroke();
   textSize(48);
   textFont("Montserrat");
   text("OH NO!", 230, 100);
   textSize(32);
   textFont("Montserrat");
   text("Beanie fell off the bean truck!", 100, 200);
   text("Let's help him find his way home.", 75, 250);

   fill(50, 200, 100);
   rect(245, 350, 200, 50);
   fill(0);
   textSize(24);
   text("START", 310, 380);
 
}

function sceneThree(){

   background('#B5F1F7');

   for (var y=0; y < height + 5; y+= 5){
         for (var x=0; x < width + 5; x+=5){
            noStroke();
            var milkyWay = impl_line(x,y-200, 0, 400, 700, 0);
            var busRoad = impl_line(x,y, 0, 400, 700, 0);

            if(milkyWay > 0){
               fill(50, 230+random(-10,10), 130, 150);
               ellipse(x+random(-2,2), y+random(-2, 2), 3, 20);
            }

            if(busRoad > 0 && milkyWay < 0){
               fill(100, 100, 100);
               ellipse(x,y, 8);
            }
           
         }
      }
   noStroke();
   stop();

   //bus movement
   bus(livex, livey, livesc, -PI/6);
   livex+=15;
   livey-=0.0001;
   livesc-=0.005

   //speech box
    fill(255);
   rect(40, 28, 300, 25);

   fill(0);
   noStroke();
   textSize(12);
   textFont("Montserrat");
   text("First, Beanie gets on the bus to go downtown", 50, 50);

}

function bus(x,y,sc, rot){
   push();
      scale(sc);
      rotate(rot);
      translate(x,y);
   
      fill('#ffd800');
      rect(200, 250, 390, 100, 0, 40, 0, 20);
      rect(200, 175, 300, 75, 25, 0, 0, 0);
      triangle(500, 175, 500, 250, 550, 250);

      fill('#0000CD');
      rect(200, 290, 390, 20);

      fill('#FFFFFF');
      rect(200, 285, 390, 10);

      fill('#4D4D4E');
      ellipse(275, 350, 80);
      ellipse(510, 350, 80);

      fill('#FFFFFF');
      ellipse(275, 350, 40);
      ellipse(510, 350, 40);

      fill('#ED5B45');
      rect(560, 270, 30, 25, 20, 10, 0, 20);

      fill('#ED5B45');
      rect(200, 275, 30, 25);

      fill('#6CA6CD');
      rect(230, 185, 30, 50, 5);
      rect(270, 185, 30, 50, 5);
      rect(310, 185, 30, 50, 5);
      rect(350, 185, 30, 50, 5);
      rect(390, 185, 40, 140, 5);

      fill('#6CA6CD');
      rect(440, 185, 50, 60);
      triangle(490, 185, 490, 245, 525, 245);

      fill(181, 101, 29);

      drawBeanie(425, 300, 0, 1);
   pop();

}


/* function to evaluate the implicit equation for a line */
function impl_line(x, y, x0, y0, x1, y1){
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;

}/* function to evaluate the distance between two points */


function sceneFour(){
   background('#B5F1F7');

      //speech box
    fill(255);
   rect(40, 28, 300, 25);

   fill(0);
   noStroke();
   textSize(12);
   textFont("Montserrat");
   text("Then, Beanie arrives downtown!", 50, 50);
   
   noFill();
   bus(-175, -50, 1.5, 0);
}

function sceneEIGHT()//downtown
{
      //start downtown scene
      background(200, 230, 255);

      noStroke();
      fill(140);
      rect(0, 3*height/4, width, height/4);

      //beverlys
      fill(220);
      rect(0, 100, 160, height);
      fill(0);
            textSize(25);
            textFont("Zapfino");
            text("Beverly's", -20, 165);
      rect(-10, 270, 70, 105);//door
      fill(255);
      ellipse(40, 320, 10);//doorknob

      //mcconnells
      fill(230, 0, 0);
      rect(160, 50, 300, height);
      fill(255);
            textSize(35);
            textFont("Palatino");
            text("McConnell's", 220, 105);
      rect(250, 250, 110, 130);// door
      fill(0);
      ellipse(340, 320, 15);//doorknob
      fill(200, 230, 255);
      rect(180, 270, 50, 90); //window
      rect(380, 270, 50, 90);
      fill(238, 193, 182);
      triangle(290, 180, 310, 240, 330, 180);//cone
      fill(255, 140, 197);
      ellipse(310, 160, 50);//ice cream

      //firestone
      fill(255);
      rect(460, 140, 300, height);
      fill(240, 0, 0);
            textSize(40);
            textFont("Impact");
            text("FireStone", 550, 200);
      fill(180);
      rect(580, 280, 90, 100);//door
      fill(255, 0, 0);
      ellipse(650, 330, 15);//doorknob
      fill(200, 230, 255);
      rect(480, 250, 80, 100);


      noStroke();
      fill(140);
      rect(0, 3*height/4, width, height/4);

      noFill();
      strokeWeight(4);
      stroke(0);
      line(0, height, 10, 3*height/4+5);
      line(100, height, 108, 3*height/4+5);
      line(200, height, 206, 3*height/4+5);
      line(300, height, 304, 3*height/4+5);
      line(400, height, 396, 3*height/4+5);
      line(500, height, 494, 3*height/4+5);
      line(600, height, 592, 3*height/4+5);
      line(700, height, 690, 3*height/4+5);
      //end downtown scene

      //bean
      downtownBean();
         if (animate)
         {
            moveDowntownBean();
         }

      if(locDT.x ==380){
      chat();
   }

}

function chat(){
   push();
   translate(locDT.x, locDT.y);
   fill(255);
   stroke(0);
   strokeWeight(3);
   ellipse(160, -50, 150, 100);
   ellipse(70, -30, 30, 20);
   ellipse(35, -10, 20, 10);
   fill(0)
   noStroke();
      textSize(14);
      textFont("Arial");
     text("Maybe my", 122, -70);
     text("friends are in", 122, -55);
     text("the ice cream", 122, -40);
     text("shop?", 122, -25);
   pop();
}



function downtownBean()
{
fill('#CD853F');
noStroke();
push();
translate(locDT.x, locDT.y);
ellipse(0, 0, 35, 50);

fill(0);
ellipse(-7, -4, 5, 5);
ellipse(7, -4, 5, 5);


fill('#FFB6C1');
ellipse(-9, 2, 8, 3);
ellipse(9, 2, 8, 3);

noFill();
stroke(0);
strokeWeight(1);
arc(0, 6, 5, 5, 0, PI);

      push();
            translate(7, 23);
            rotate(Rrot);
            line(0, 0, 0, 17); //Right Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Right Foot
      pop();
      push();
            translate(-7, 23);
            rotate(Lrot);
            line(0, 0, 0, 17); //Left Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Left Foot
      pop();

      push();
            translate(17, 0);
            line(0, 0, 5, 18); //Right Arm
      pop();
      push();
            translate(-18, 0);
            line(0, 0, -5, 18); //Left Arm
      pop();

pop();
}


function moveDowntownBean()
{

   if (locDT.x < 380){
      locDT.add(dirDT);
 
     
   //left leg
   if (Lrot > PI/5)
   {
      Llegout = true;
   }
   if (Lrot < -PI/5)
   {
      Llegout = false;
   }

   if (Llegout == false)
   {
      Lrot += PI/100;
   }
   else
   {
      Lrot -= PI/100;
   }

   //right leg
   if (Rrot > PI/5)
   {
      Rlegout = true;
   }
   if (Rrot < -PI/5)
   {
      Rlegout = false;
   }

   if (Rlegout == false)
   {
      Rrot += PI/100;
   }
   else
   {
      Rrot -= PI/100;
   }
   
}

}


function sceneSIX() //bus pulley
{
      background(220);

      //window
      fill(200, 230, 255);
      stroke(50);
      strokeWeight(40);
      rect(150, 20, 600, 520);

      //pulley
      noFill();
      strokeWeight(15);
      stroke(255, 255, 0);
      arc(-100, 250, 500, 200, 0, PI);
      arc(400, 250, 500, 200, 0, PI);
      arc(900, 250, 500, 200, 0, PI);

      pulleyBean();
         if (animate)
         {
            movePulleyBean();
         }
     

}


function movePulleyBean()
{
      if (locPUL.y>0)
      {
            locPUL.add(dirPUL);
            dirPUL.add(accel);

            if (locPUL.y>350)
            {
                  locPUL.y=350;
                  accel.x=0;
            }
      }

}


function pulleyBean()
{
fill('#CD853F');
noStroke();
push();
translate(locPUL.x, locPUL.y);
ellipse(0, 0, 35, 50);

fill(0);
ellipse(-7, -4, 5, 5);
ellipse(7, -4, 5, 5);


fill('#FFB6C1');
ellipse(-9, 2, 8, 3);
ellipse(9, 2, 8, 3);

noFill();
stroke(0);
strokeWeight(1);
arc(0, 6, 5, 5, 0, PI);

      push();
            translate(7, 23);
            rotate(Rrot);
            line(0, 0, 0, 17); //Right Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Right Foot
      pop();
      push();
            translate(-7, 23);
            rotate(Lrot);
            line(0, 0, 0, 17); //Left Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Left Foot
      pop();

      push();
            translate(17, 0);
            line(0, 0, 5, 18); //Right Arm
      pop();
      push();
            translate(-18, 0);
            rotate(Larmrot);
            line(0, 0, -5, 18); //Left Arm
      pop();

pop();
}



function sceneFIVE() //inside bus
{
      background(220);

      //window
      fill(200, 230, 255);
      stroke(50);
      strokeWeight(20);
      rect(150, 50, 400, 320);
      rect(-320, 50, 400, 320);
      rect(620, 50, 400, 320);

      //BUS SEATS
      noStroke();
      fill(130);
      rect(0, 200, 100, 180);
      fill(100);
      quad(-50, 380, 100, 380, 80, 460, -30, 460);

      fill(130);
      rect(130, 200, 150, 180);
      fill(100);
      quad(130, 380, 280, 380, 260, 460, 150, 460);

      fill(130);
      rect(310, 200, 150, 180);
      fill(100);
      quad(310, 380, 460, 380, 440, 460, 330, 460);

      fill(130);
      rect(490, 200, 150, 180);
      fill(100);
      quad(490, 380, 640, 380, 620, 460, 510, 460);

      fill(130);
      rect(670, 200, 150, 180);
      fill(100);
      quad(670, 380, 820, 380, 800, 460, 690, 460);


      //pulley
      noFill();
      strokeWeight(5);
      stroke(255, 255, 0);
      arc(50, 100, 200, 100, 0, PI);
      arc(250, 100, 200, 100, 0, PI);
      arc(450, 100, 200, 100, 0, PI);
      arc(650, 100, 200, 100, 0, PI);

      //text
   noStroke();
   fill(255, 255, 0);
   rect(250, 30, 200, 50);
   fill(0);
      textSize(25);
      textFont("Arial Black");
      text("PULL to Stop", 260, 65);

 //person
    fill(255, 226, 210);
    ellipse(385, 150, 80, 100); //head
    rect(375, 190, 20, 40); //neck

    noFill()
    strokeWeight(20);
    stroke(255, 226, 210);
    arc(300, 300, 30, 130, PI/2, 3*PI/2); //arms
    arc(470, 300, 30, 130, 3*PI/2, PI/2); //arms

    noStroke();
    fill(255, 0, 0);
    rect(300, 220, 170, 50); // arm sleeves
    rect(335, 220, 100, 150); // torso
    fill(255, 226, 210);
    arc(385, 220, 60, 40, 0, PI); // collar bone

    //pants
    fill(0, 30, 90);
    rect(335, 370, 100, 40);
    rect(335, 410, 48, 90);
    rect(387, 410, 48, 90);

//hair
      fill(120, 106, 92);
      ellipse(370, 100, 20);
      ellipse(360, 105, 20);
      ellipse(380, 100, 20);
      ellipse(390, 100, 20);
      ellipse(400, 100, 20);
      ellipse(410, 105, 20);
      ellipse(350, 115, 20);
      ellipse(345, 125, 20);
      ellipse(420, 115, 20);
      ellipse(425, 125, 20);

 //face
      //eyes
    fill(255);
    ellipse(370, 140, 20);
    ellipse(400, 140, 20);
    fill(0);
    ellipse(368, 143, 10);
    ellipse(398, 143, 10);
    //brows
    noFill();
    strokeWeight(3);
    stroke(120, 106, 92);
    arc(370, 130, 20, 8, PI, 0);
    arc(400, 130, 20, 20, PI, 0);
    //nose
    stroke(20, 15, 5);
    arc(385, 160, 10, 15, 3*PI/2, PI/4);
    arc(385, 180, 30, 10, 5*PI/4, 0)

      //pole
      fill(170);
      noStroke();
      ellipse(115, height/2, 25, 700);
      ellipse(515, height/2, 25, 700);


      backofBeanie();
      if (animate)
         {
            moveBusBeanie();

                  if (locBUS.y==400)
                  {
                        drawBeanie(locBUS.x, locBUS.y, 0, 1);
                        Rarmrot=0;
                        Larmrot=0;
                  }
         }

}



function backofBeanie()
{
      fill('#CD853F');
      noStroke();
      push();
      translate(locBUS.x,locBUS.y);

      ellipse(0, 0, 35, 50);

      noFill();
      stroke(0);
      strokeWeight(1);

      push();
            translate(7, 23);
            rotate(Rrot);
            line(0, 0, 0, 17); //Right Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Right Foot
      pop();
      push();
            translate(-7, 23);
            rotate(Lrot);
            line(0, 0, 0, 17); //Left Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Left Foot
      pop();

      push();
            translate(17, 0);
            rotate(Rarmrot);
            line(0, 0, 5, 18); //Right Arm
      pop();
      push();
            translate(-18, 0);
            rotate(Larmrot);
            line(0, 0, -5, 18); //Left Arm
      pop();


pop();

}

function moveBusBeanie()
{

      if (locBUS.y > 400){
      locBUS.add(dirBUS);
 
     
   //left leg
   if (Lrot > PI/5)
   {
      Llegout = true;
   }
   if (Lrot < -PI/5)
   {
      Llegout = false;
   }

   if (Llegout == false)
   {
      Lrot += PI/100;
   }
   else
   {
      Lrot -= PI/100;
   }

   //right leg
   if (Rrot > PI/5)
   {
      Rlegout = true;
   }
   if (Rrot < -PI/5)
   {
      Rlegout = false;
   }

   if (Rlegout == false)
   {
      Rrot += PI/100;
   }
   else
   {
      Rrot -= PI/100;
   }
   
}
}


   function drawBeanieArmUp(x, y, rot, sc)
   {
   fill('#CD853F');
   noStroke();
   push();
   translate(x,y);
   scale(sc);
   rotate(rot);
   ellipse(0, 0, 35, 50);

   fill(0);
   ellipse(-7, -4, 5, 5);
   ellipse(7, -4, 5, 5);


   fill('#FFB6C1');
   ellipse(-9, 2, 8, 3);
   ellipse(9, 2, 8, 3);

   noFill();
   stroke(0);
   strokeWeight(1);
   arc(0, 6, 5, 5, 0, PI);
   line(7, 23, 7, 40); //Right Leg
   line(-7, 23, -7, 40); //Left Leg

   line(17, 0, 25, -18); //Right Arm
   line(-18, 0, -23, 18); //Left Arm

   fill(0);
   noStroke();
   ellipse(7, 40, 5, 3); //Right Foot
   ellipse(-7, 40, 5, 3); //Left Foot
   pop();
   

}

function sceneNine ()
{
//SCENE 9

background(255);

fill("#8B0000");
noStroke();
rect(0, 250, width, 250);  //Ice Cream Counter

fill("#FFC0CB"); //Strawberry Ice Cream
noStroke();
ellipse(100, 180, 120, 60);

stroke("#e75480");
strokeWeight(2);
arc(100, 180, 100, 30, radians(350), radians(40));
arc(100, 180, 100, 30, radians(180), radians(220));

fill("#f9e5bc"); //Vanilla Ice Cream
noStroke();
ellipse(100, 80, 120, 60);

stroke(255);
strokeWeight(2);
arc(100, 80, 100, 30, radians(350), radians(40));
arc(100, 80, 100, 30, radians(170), radians(220));

fill("#8B4513"); //Chocolate Ice Cream
noStroke();
ellipse(300, 180, 120, 60);

stroke(0);
strokeWeight(2);
arc(300, 180, 100, 30, radians(200), radians(315));
arc(300, 180, 100, 30, radians(25), radians(135));

fill("#8B4513"); //Chocolate Ice Cream
noStroke();
ellipse(300, 80, 120, 60);

stroke(0);
strokeWeight(2);
arc(300, 80, 100, 30, radians(200), radians(315));
arc(300, 80, 100, 30, radians(25), radians(135));

fill("#f9e5bc"); //Vanilla Ice Cream
noStroke();
ellipse(500, 180, 120, 60);

stroke(255);
strokeWeight(2);
arc(500, 180, 100, 30, radians(350), radians(40));
arc(500, 180, 100, 30, radians(170), radians(220));

fill("#a4f0d8"); //Mint Ice Cream
noStroke();
ellipse(500, 80, 120, 60);

fill("#8B4513") //CHOCOLATE CHIPS
noStroke();
rect(510, 85, 5, 4);
rect(490, 95, 5, 4);
rect(460, 85, 5, 4);
rect(480, 60, 5, 4);
rect(530, 70, 5, 4);
rect(530, 90, 5, 4);
rect(500, 60, 5, 4);

fill("#a4f0d8"); //Mint Ice Cream
noStroke();
ellipse(700, 180, 120, 60);

fill("#8B4513") //CHOCOLATE CHIPS
noStroke();
rect(670, 165, 5, 4);
rect(690, 195, 5, 4);
rect(660, 185, 5, 4);


fill("#FFC0CB"); //Strawberry Ice Cream
noStroke();
ellipse(700, 80, 120, 60);

stroke("#e75480");
strokeWeight(2);
arc(700, 80, 100, 30, radians(350), radians(40));
arc(700, 80, 100, 30, radians(180), radians(220));


//WINDOW


fill(192, 192, 192, 70);
noStroke();
rect(0, 0, width, 250);


noFill();
stroke(0);
strokeWeight(4);
line(0,0, 700, 0); //line on the top of the canvas
line(0,250, 0, 500);
line(625,250, 625, 500);
beginShape();
vertex(0, 250);
vertex(45, 0);
vertex(665, 0);
vertex(625, 250);
endShape();

noStroke(); //SPEECH BUBBLE
fill(255);
rect(380, 200, 300, 230, 40);

fill("#8B0000"); //RED TEXT
textSize(15);
textFont("Helvetica");
text("WELCOME TO MCCONNELS", 430, 260);

fill(0); //BLACK TEXT
textSize(15);
textFont("Helvetica");
text("Maybe you belong here!", 450, 290);
text("Talk to the worker to find out", 435, 320);

//TALK TO WORKER BUTTON
fill("#8B0000");
noStroke();
rect(455, 360, 145, 30, 3);

fill(255);  //TALK TO CHAD TEXT
textSize(15);
textFont("Helvetica");
text("Talk to Chad", 490, 380);


}





function sceneTen () {

// SCENE 10

background("#8B0000");

noStroke();
fill("#E5B887");
ellipse(180, 250, 300);

noStroke();  //EYES (BLACK)
fill(0);
ellipse(130, 200, 50, 70);
ellipse(220, 200, 50, 70);

noStroke();  //EYES (WHITE)
fill(255);
ellipse(130, 200, 30);
ellipse(220, 200, 30);

stroke(0);  //SMILE
noFill();
strokeWeight(4);
arc(180, 300, 60, 60, radians(0), radians(180));

noStroke(); //HAIR
fill("#FFE39F");
ellipse(100, 100, 80);
ellipse(170, 95, 80);
ellipse(240, 95, 80);
ellipse(290, 120, 60);
ellipse(310, 150, 40);
ellipse(315, 170, 30);
ellipse(60, 135, 60);
ellipse(50, 170, 30);
ellipse(140, 65, 80);
ellipse(210, 65, 80);

noStroke(); //SHIRT
fill("#24A0ED");
rect(50, 400, 280, 200, 70);

noStroke(); //SPEECH BUBBLE
fill(255);
rect(380, 50, 300, 400, 70);

fill(0); //TEXT
textSize(30);
textFont("Helvetica");
text("Hi coffee bean!", 430, 120);
text("We don't sell", 440, 200);
text("coffee ice cream", 420, 240);
text("here...", 500, 280);
text("BUT", 500, 350);


//ACCEPT TREAT BUTTON
fill("#24A0ED");
noStroke();
rect(460, 380, 145, 30, 3);

fill(255);  //ACCEPT TREAT TEXT
textSize(20);
textFont("Helvetica");
text("Accept treat", 480, 400);


fill(255); //NAMETAG
noStroke();
rect(207, 457, 55, 20, 3);

fill(0);
textSize(10);
textFont("Helvetica");
text("CHAD", 220, 470);

}



//SCENE 11
function sceneEleven()
{

background(255);

fill("#8B0000");
noStroke();
rect(0, 250, width, 250);  //Ice Cream Counter

fill("#FFC0CB"); //Strawberry Ice Cream
noStroke();
ellipse(100, 180, 120, 60);

stroke("#e75480");
strokeWeight(2);
arc(100, 180, 100, 30, radians(350), radians(40));
arc(100, 180, 100, 30, radians(180), radians(220));

fill("#f9e5bc"); //Vanilla Ice Cream
noStroke();
ellipse(100, 80, 120, 60);

stroke(255);
strokeWeight(2);
arc(100, 80, 100, 30, radians(350), radians(40));
arc(100, 80, 100, 30, radians(170), radians(220));

fill("#8B4513"); //Chocolate Ice Cream
noStroke();
ellipse(300, 180, 120, 60);

stroke(0);
strokeWeight(2);
arc(300, 180, 100, 30, radians(200), radians(315));
arc(300, 180, 100, 30, radians(25), radians(135));

fill("#8B4513"); //Chocolate Ice Cream
noStroke();
ellipse(300, 80, 120, 60);

stroke(0);
strokeWeight(2);
arc(300, 80, 100, 30, radians(200), radians(315));
arc(300, 80, 100, 30, radians(25), radians(135));

fill("#f9e5bc"); //Vanilla Ice Cream
noStroke();
ellipse(500, 180, 120, 60);

stroke(255);
strokeWeight(2);
arc(500, 180, 100, 30, radians(350), radians(40));
arc(500, 180, 100, 30, radians(170), radians(220));

fill("#a4f0d8"); //Mint Ice Cream
noStroke();
ellipse(500, 80, 120, 60);

fill("#8B4513") //CHOCOLATE CHIPS
noStroke();
rect(510, 85, 5, 4);
rect(490, 95, 5, 4);
rect(460, 85, 5, 4);
rect(480, 60, 5, 4);
rect(530, 70, 5, 4);
rect(530, 90, 5, 4);
rect(500, 60, 5, 4);

fill("#a4f0d8"); //Mint Ice Cream
noStroke();
ellipse(700, 180, 120, 60);

fill("#8B4513") //CHOCOLATE CHIPS
noStroke();
rect(670, 165, 5, 4);
rect(690, 195, 5, 4);
rect(660, 185, 5, 4);


fill("#FFC0CB"); //Strawberry Ice Cream
noStroke();
ellipse(700, 80, 120, 60);

stroke("#e75480");
strokeWeight(2);
arc(700, 80, 100, 30, radians(350), radians(40));
arc(700, 80, 100, 30, radians(180), radians(220));


//WINDOW


fill(192, 192, 192, 70);
noStroke();
rect(0, 0, width, 250);


noFill();
stroke(0);
strokeWeight(4);
line(0,0, 700, 0); //line on the top of the canvas
line(0,250, 0, 500);
line(625,250, 625, 500);
beginShape();
vertex(0, 250);
vertex(45, 0);
vertex(665, 0);
vertex(625, 250);
endShape();

drawBeanieArmUp (beanieX11, beanieY11, radians(0), 1);


if (beanieX11 > 299 && beanieX11<720)
{
beanieX11 += 1.2;
}  

icecream(icecreamX, icecreamY, 0);
if (icecreamX > 299 && icecreamX<720)
{
icecreamX += 1.2;
}

}


function icecream(x, y, sc)
{
push();
translate(x, y);

fill("#f9e5bc");
noStroke();
triangle(-4, 0, 4, 0, 0, 15);  //ICE CREAM CONE

fill("#FFC0CB"); //STRAWBERRY ICE CREAM SCOOP
noStroke();
ellipse(0, -5, 12);

fill("#a4f0d8"); //MINT ICE CREAM SCOOP
noStroke();
ellipse(0, -15, 12);

fill("#f9e5bc"); //VANILLA ICE CREAM SCOOP
noStroke();
ellipse(0, -25, 12);
}



function sceneTwelve() {

      //downtown
      background(200, 230, 255);

      // french quarter store
     noStroke();
     fill(184, 186, 186);
     rect(0, 55, 241, 320);
     //door
     fill('#434139');
     rect(35, 237, 110, 138);
     //door handle
     fill('#FE7D6A');
     ellipse(121, 310, 20);
     //title
     fill('#FE7D6A');
     textSize(33);
     textFont("Cardo");
     text("French Quarter", 8, 107);

     // scout coffee
     fill(126,106,95);
     rect(241, 120, 277, 255);
     // door
     fill('#CCC9A3');
     rect(325, 237, 110, 138);
     //door handle
     fill('#846427');
     ellipse(411, 311, 20);
     //title
     fill(255);
     textSize(35);
     textFont("Bellota");
     text("Scout's Coffee", 270, 150);

     // woodstocks pizza
fill('#CCC9A3');
rect(518, 25, 182, 350);
//door
fill(126,106,95);
rect(600, 237, 100, 138);
//door handle
fill('#434139');
ellipse(684, 311, 20);
//title
fill(255);
textSize(30);
textFont("Muli");
text("Woodstocks", 530, 80);
text("Pizza", 628, 120);

//coffee bean
push();
fill('#66441A');
rotate(radians(28));
ellipse(429, -11, 33, 46);
noFill(0);
strokeWeight(1);
stroke('#291D0F');
line(427, -33, 427, 10);
pop();
     
      // sidewalk
      noStroke();
      fill(140);
      rect(0, 3*height/4, width, height/4);

      noFill();
      strokeWeight(4);
      stroke(0);
      line(0, height, 10, 3*height/4+5);
      line(100, height, 108, 3*height/4+5);
      line(200, height, 206, 3*height/4+5);
      line(300, height, 304, 3*height/4+5);
      line(400, height, 396, 3*height/4+5);
      line(500, height, 494, 3*height/4+5);
      line(600, height, 592, 3*height/4+5);
      line(700, height, 690, 3*height/4+5);
     

      //beanie
      beanDowntown();
         if (animate)
         {
            moveBean();
         }

      if(locCF.x ==390){
      chatBubble();
   }

}

function chatBubble(){
   push();
   translate(locCF.x, locCF.y);
   fill(255);
   ellipse(121, -40, 114, 52);
   ellipse(70, -10, 33, 13);

   //message
   fill(0)
   noStroke();
   textSize(16);
   textFont("OpenSans");
   text("I'm Home!", 88, -35);
   pop();
}



function beanDowntown() {
fill('#CD853F');
noStroke();
push();
translate(locCF.x, locCF.y);
ellipse(0, 0, 35, 50);

fill(0);
ellipse(-7, -4, 5, 5);
ellipse(7, -4, 5, 5);


fill('#FFB6C1');
ellipse(-9, 2, 8, 3);
ellipse(9, 2, 8, 3);

noFill();
stroke(0);
strokeWeight(1);
arc(0, 6, 5, 5, 0, PI);

      push();
            translate(7, 23);
            rotate(rotR);
            line(0, 0, 0, 17); //Right Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Right Foot
      pop();
      push();
            translate(-7, 23);
            rotate(rotL);
            line(0, 0, 0, 17); //Left Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Left Foot
      pop();

      push();
            rotate(radians(-85));
            translate(17, 0);
            line(-9, 14, 10, 20); //Right Arm
            fill(0);
            ellipse(9, 20, 3, 3); // right hand
      pop();
      push();
            translate(-18, 0);
            line(0, 0, -5, 18); //Left Arm
            fill(0);
            ellipse(-5, 19, 3, 3); //left arm
      pop();

pop();
}


function moveBean()
{

   if (locCF.x < 390){
      locCF.add(dirCF);
 
     
   //left leg
   if (rotL > PI/8)
   {
      Lleg = true;
   }
   if (rotL < -PI/8)
   {
      Lleg = false;
   }

   if (Lleg == false)
   {
      rotL += PI/100;
   }
   else
   {
      rotL -= PI/100;
   }

   //right leg
   if (rotR > PI/8)
   {
      Rleg = true;
   }
   if (rotR < -PI/8)
   {
      Rleg = false;
   }

   if (Rleg == false)
   {
      rotR += PI/100;
   }
   else
   {
      rotR -= PI/100;
   }
  
 }

}


function sceneThirteen() {


//inside cafe
background('#F4DBB3');

   //window
   fill(200, 230, 255);
   stroke(255);
   strokeWeight(1);
   rect(32, 50, 161, 134);
   rect(276, 50, 161, 134);
   rect(516, 50, 161, 134);

// table
noStroke();
fill(139,90,43);
rect(0, 3*height/4, width, height/4)


// 1st coffee mug
fill(255);
rect(160, 270, 144, 103, 12);
ellipse(232, 268, 143, 50);
ellipse(232, 375, 144, 37);
fill('#846427');
ellipse(232, 269, 112, 30);
noFill();
stroke(255);
strokeWeight(10);
ellipse(160, 320, 75, 74);


// 2nd coffee mug
noStroke();
fill(255);
rect(402, 270, 144, 103, 12);
ellipse(473, 268, 143, 50);
ellipse(474, 375, 144, 37);
fill('#846427');
ellipse(474, 269, 112, 30);
noFill();
stroke(255);
strokeWeight(10);
ellipse(549, 319, 75, 74); 

//beanie 
beanie();
      if (animate) 
      {
         beanInside();
      }

      if(locIN.x ==50){
      chatHome();
   }
}


function chatHome() {
   push();
   translate(locIN.x, locIN.y);
   fill('#96918F');
   noStroke();
   ellipse(121, -40, 114, 52);
   ellipse(70, -10, 33, 13);

   //message
   fill(0)
   noStroke();
   textSize(18);
   textFont("OpenSans");
   text("Hi!", 105, -35);
   pop();
}

function beanie() {
fill('#CD853F');
noStroke();
push();
translate(locIN.x, locIN.y);
ellipse(0, 0, 35, 50);

fill(0);
ellipse(-7, -4, 5, 5);
ellipse(7, -4, 5, 5);


fill('#FFB6C1');
ellipse(-9, 2, 8, 3);
ellipse(9, 2, 8, 3);

noFill();
stroke(0);
strokeWeight(1);
arc(0, 6, 5, 5, 0, PI);

      push();
            translate(7, 23);
            rotate(rotR);
            line(0, 0, 0, 17); //Right Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Right Foot
      pop();
      push();
            translate(-7, 23);
            rotate(rotL);
            line(0, 0, 0, 17); //Left Leg
            fill(0);
            noStroke();
            ellipse(0, 17, 5, 3); //Left Foot
      pop();

      push();
            translate(17, 0);
            line(0, 0, 5, 18); //Right Arm
            fill(0);
            ellipse(7, 20, 3, 3); // right hand
      pop();
      push();
            translate(-18, 0);
            line(0, 0, -5, 18); //Left Arm
            fill(0);
            ellipse(-5, 19, 3, 3); //left arm
      pop();

pop();
}


function beanInside() {

   if (locIN.x < 50){
      locIN.add(dirIN);
  
      
   //left leg
   if (rotL > PI/5) 
   {
      Lleg = true;
   } 
   if (rotL < -PI/5) 
   {
      Lleg = false;
   }

   if (Lleg == false) 
   {
      rotL += PI/100;
   } 
   else 
   {
      rotL -= PI/100;
   }

   //right leg
   if (rotR > PI/5) 
   {
      Rleg = true;
   } 
   if (rotR < -PI/5) 
   {
      Rleg = false;
   }

   if (Rleg == false) 
   {
      rotR += PI/100;
   } 
   else 
   {
      rotR -= PI/100;
   }
   
}


// beanies friend
   push();

   //right arm
   noFill();
   stroke(0);
   strokeWeight(1);
   line(647, 399, 651, 425);

   // left arm
   line(612, 400, 610, 425);
   fill(0);
   ellipse(620, 442, 5, 3);  //left foot


   // right leg
   line(636, 417, 640, 442);
   ellipse(641, 442, 5, 3);  //right foot

   //left leg
   line(623, 417, 620, 442);

   //body
   noStroke();
   fill('#CD853F');
   ellipse(630, 400, 35, 50);

   //eyes
   fill(0);
   ellipse(637, 396, 5, 5);
   ellipse(623, 396, 5, 5);
   
   // cheeks
   fill('#FFB6C1');
   ellipse(621, 402, 8, 3); // left
   ellipse(639, 402, 8, 3); // right
   
   //mouth
   noFill();
   stroke(0);
   arc(630, 407, 5, 5, 0, PI);
   pop();

   // message bubble
   fill('#96918F');
   ellipse(533, 361, 114, 52);
   ellipse(570, 391, 33, 13);

   //message
   fill(0)
   noStroke();
   textSize(16);
   textFont("OpenSans");
   text("BEANIE!!", 500, 367);
   

 }




 function Particle(x , y) {

   // the data associated with a particle
   this.accelY = 0.04; //gravity
   this.velX = random(-1, 1);
   this.velY = random(-1, 1.3);


   // How fast it moves/color
   this.pcolorR = random(255);
   this.pcolorG = random(255);
   this.pcolorB = random(100);
   this.p_opacity = 250;
   this.locX = x;
   this.locY = y;
   this.r = 5.0;
   this.life = 20;
 
   // a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life += 1.5;
   }
 
   // function to draw coffee bean particles
   this.renderP = function()
   {
      noStroke();
      push();
         fill('#66441A');
         //fill(this.pcolorR, this.pcolorG, this.pcolorB, this.p_opacity - this.life);
         translate(this.locX, this.locY);
         //ellipse(0, 0, this.r, this.r);
         //fill('#66441A');
         beginShape();
         rotate(radians(28));
         ellipse(0, 0, 10, 14);
         noFill(0);
         strokeWeight(1);
         stroke('#291D0F');
         rect(0, -3, 0, 7);
         endShape();
      pop();
   }
}



function PSys(sX, sY, num) {

   // the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++)
   {
      this.particles.push(new Particle(sX+random(-10,10), sY+random(-10,10)));
   }
 
   // function defining what to do each frame
   this.run = function()
   {
      for (var i=0; i < this.particles.length; i++)
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();

      }
   }
}

function sceneFourteen() {

background('#F4DBB3');

// table
noStroke();
fill(139,90,43);
rect(0, 3*height/4.3, width, height)


 //message
   fill(0)
   noStroke();
   textSize(50);
   textFont("OpenSans");
   text("The End!", 255, 70);
   pop();


// 1st coffee mug
fill(255);
rect(250, 219, 193, 138, 12);
ellipse(346, 217, 192, 68);
ellipse(347, 360, 194, 50);
fill('#846427');
ellipse(347, 223, 151, 58);
noFill();
stroke(255);
strokeWeight(10);
ellipse(447, 283, 101, 100);

// beanie in the coffee cup
   push();

   //right arm
   fill(0);
   stroke(0);
   strokeWeight(1);
   line(363, 229, 367, 251);
   ellipse(367, 250, 3, 3);

   // left arm
   line(329, 229, 327, 252);
   ellipse(327.2, 252, 3, 3);
   fill(0);

   //body
   noStroke();
   fill('#CD853F');
   ellipse(346, 227, 35, 50);

   //eyes
   fill(0);
   ellipse(353, 220, 5, 5);  // right eye
   ellipse(340, 220, 5, 5); // left eye
  
   //cheeks
   fill('#FFB6C1');
   ellipse(354, 226, 8, 3); // right
   ellipse(338, 226, 8, 3); // left
  
   //mouth
   noFill();
   stroke(0);
   arc(345, 230, 5, 5, 0, PI);
   fill(0);
   ellipse(347, 232, 3, 2);
   pop();

   

   // run the particle system
   fireW1.run();
   fireW2.run();
   fireW3.run();

 for (var i=0; i<firework; i++)
   {
      firework[i].run();
   }
}