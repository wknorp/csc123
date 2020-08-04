// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, time, beakR, bottombeakR, leftlegR, rightlegR;

var neckDown = true;
var wingDown = false;
var animate = false;
var topbeakDown = true;
var bottombeakDown = true;
var leftlegOut = true;
var rightlegOut = false;



// normal set up
function setup() 
{
   createCanvas(800, 500);

   loc = createVector(width*.9, height*.5);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   beakR = PI/10;
   bottombeakR = PI/10;
   leftlegR = PI/10;
   rightlegR = -PI/10;
}

// normal draw
function draw() 
{
   background(12, 245, 216);

   //foreground
   fill(78, 155, 16);
   rect(0, height/2, width, height/2);

   //sun
   fill(250, 250, 0);
   ellipse(width, 0, 250);

   //tree
   fill(200, 170, 15);
   rect(560, 130, 30, 120);
   fill(0, 200, 40);
   ellipse(575, 130, 150);

   fill(180, 120, 15);
   rect(360, 130, 30, 120);
   fill(0, 170, 30);
   ellipse(375, 130, 150);


//human
   //shirt
   fill(50, 50, 200);
   rect(145, 200, 10, 20);
   rect(125, 210, 50, 50);
   //head
   fill(200, 140, 5);
   ellipse(150, 180, 50);
   //eyes
   fill(255);
   ellipse(160, 172, 12);
   ellipse(140, 172, 12);
   fill(0);
   ellipse(162, 173, 8);
   ellipse(142, 173, 8);
   //hair
   arc(150, 165, 50, 30, PI, 0);
   //nose
   noFill();
   stroke(0);
   strokeWeight(3);
   arc(150, 183, 7, 4, 3*PI/2, PI/2);
   //mouth
   line(140, 190, 160, 190);

//lemonade stand  
   fill(130, 60, 5);
   rect(65, 130, 20, 200);
   rect(235, 130, 20, 200);
   rect(60, 250, 200, 100);
   rect(60, 60, 200, 70);
//lemonade
noStroke();
   fill(255);
   ellipse(200, 235, 50, 40);
   quad(195, 220, 185, 210, 215, 210, 205, 220);
   stroke(255);
   strokeWeight(6);
   noFill();
   arc(220, 235, 30, 20, 3*PI/2, PI/2);
   noStroke();
   fill(250, 250, 0);
   ellipse(200, 240, 45, 29);
   //text
   noStroke();
   fill(0)
      textSize(35);
      textFont("Arial Black");
      text("ICE Fresh", 70, 110);
      textSize(30);
      text("Lemonade", 75, 310);





//draw chat bubble
   if(loc.x ==380){
   chat();
   }

   drawDuck();
   if (animate) 
   {
      moveDuck();
   }
}

// method to control starting the duck over again and 
// control animation on and off
function mousePressed() 
{
   loc = createVector(width*.9, height*.5);
   animate = !animate;

}

// code to draw the duck with animation parameters 
// neckR and wingR - other transforms align the pieces 
// to the correct pivot points Be very careful modifying 
// this code - the structure of the push and pops are 
// what builds the hierarchical relationships
function drawDuck() 
{
   noStroke();

   push();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(2); //scale the entire duck

      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck 
      push();
         fill(255, 150, 0);
         translate(2, 10);
         rotate(leftlegR);
         rect(0, 0, 3, 20);
         ellipse(-5, 20, 15, 5);
      pop();
      push();
         fill(255, 150, 0);
         translate(4, 10);
         rotate(rightlegR);
         rect(0, 0, 3, 20);
         ellipse(-5, 20, 15, 5);
      pop();

      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         fill(255, 150, 0);
            push();
               translate(-5, -16);
               rotate(beakR);
               triangle(-6, -2, -0, -4, 0, 0); // top beak
            pop();
            push();
               translate(-5,-13);
               rotate(bottombeakR);
               triangle(-6, -2, -0, -4, -0, 0); //beak
            pop();
         fill(245, 226, 12);
         ellipse(0, -17, 14, 14); //head
         fill(255);
         ellipse(0, -19, 6);
         fill(0);
         ellipse(-2, -19, 3);  //eye
      pop();

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();



   pop();
}

// function to update all animation parameters - very 
// simple scripted animation
function moveDuck() 
{
   // update the ducks global location
   console.log(loc.x)
   if (loc.x > 380){
      loc.add(dir);
   

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (neckR < -PI/3) 
   {
      neckDown = false;
   } 
   if (neckR > PI/10) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= PI/100;
   } 
   else 
   {
      neckR += PI/100;
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -2*PI/5) 
   {
      wingDown = true;
   } 
   if (wingR > -PI/20) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= PI/100;
   } 
   else 
   {
      wingR += PI/100;
   }


//top beak
   if (beakR < radians(-30)) 
   {
      topbeakDown = true;
   } 
   if (beakR > radians(30)) 
   {
      topbeakDown = false;
   }

   if (topbeakDown == false) 
   {
      beakR -= PI/80;
   } 
   else 
   {
      beakR += PI/80;
   }

//bottom beak
   if (bottombeakR < radians(-3)) 
   {
      bottombeakDown = true;
   } 
   if (bottombeakR > radians(3)) 
   {
      bottombeakDown = false;
   }

   if (bottombeakDown == false) 
   {
      bottombeakR -= PI/80;
   } 
   else 
   {
      bottombeakR += PI/80;
   }

   //left leg
   if (leftlegR < -PI/5) 
   {
      leftlegOut = true;
   } 
   if (leftlegR > PI/5) 
   {
      leftlegOut = false;
   }

   if (leftlegOut == false) 
   {
      leftlegR -= PI/100;
   } 
   else 
   {
      leftlegR += PI/100;
   }

   //right leg
   if (rightlegR < -PI/5) 
   {
      rightlegOut = true;
   } 
   if (rightlegR > PI/5) 
   {
      rightlegOut = false;
   }

   if (rightlegOut == false) 
   {
      rightlegR -= PI/100;
   } 
   else 
   {
      rightlegR += PI/100;
   }

}
}

function chat(){
   push();
   translate(450, 150);
   fill(255);
   noStroke();
   ellipse(0, 0, 220, 70);
   triangle(-100, 10, -140, 50, -80, 10);
   fill(0)
      textSize(20);
      textFont("Arial Black");
      text("Got any grapes?", -90, 10);
   pop();
}


