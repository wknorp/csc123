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

function setup()
{
	createCanvas(700, 500);
     Rrot= -PI/10;
     Lrot= PI/10;
     Rarmrot= 5*PI/4;
     Larmrot= 3*PI/4;
     accel= createVector(0.001, 0.05);
   locDT = createVector(-30, 400);
   dirDT = createVector(1, 0);
   locBUS = createVector(200, 550);
   dirBUS = createVector(0, -1);
   locPUL = createVector(300, 550);
   dirPUL = createVector(0, -5.5);
   land= createVector(370, 350);

}

function draw()
{

sceneFIVE();

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


function drawBeanie(x, y, rot, sc)
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
