// Example of very simple particle systems - introduction to objects in javascript
var stopHere;
// define a single particle
function Particle(x, y, r, g, b) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-1.2, 1.2);
   this.velY = random(.5, 2);

   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.pcolorB = r;
   this.pcolorG = g;
   this.pcolorR = b;
   this.p_opacity = 255;
   this.locX = x;
   this.locY = y;

   this.life = 0;

   this.setLocation = function(x, y)
   {
      this.locX = x;
      this.locY = y;
   }
  
   // a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life += 1.8;
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
      push();
         strokeWeight (1);
         stroke(this.pcolorR+20, this.pcolorG+20, this.pcolorB+20, this.p_opacity - this.life);
         fill(this.pcolorR, this.pcolorG, this.pcolorB, this.p_opacity - this.life);
         translate(this.locX, this.locY);
         //ellipse(0, 0, this.r, this.r);
         beginShape();
         vertex(0, -5);//top
         vertex(1, -1);//top
         vertex(5, 0);//top
         vertex(1, 1+this.life/20);
         vertex(3, 5+this.life/20);
         vertex(0, 3+this.life/20);
         vertex(-3, 5+this.life/20);
         vertex(-1, 1+this.life/20);
         vertex(-5, 0);//top
         vertex(-1, -1);//top
         vertex(0, -5);//top
         endShape();
      pop();
   };
} //end of particle object definition


function drawStars(x, y, rot)
{
   push();
   fill(color(random(0, 255), random(0, 255), random(0, 255)))
   translate(x, y);
   rotate(rot);
   beginShape();
         vertex(0, -5);//top
         vertex(1, -1);//top
         vertex(5, 0);//top
         vertex(1, 1);
         vertex(3, 5);
         vertex(0, 3);
         vertex(-3, 5);
         vertex(-1, 1);
         vertex(-5, 0);//top
         vertex(-1, -1);//top
         vertex(0, -5);//top
         endShape();
      pop();
}

// define a group of particles as a particleSys
function PSys(sX, sY, num, r, g, b)
{
   // the data - lots of particles
   this.particles = [];
   this.r = r;
   this.g = g;
   this.b = b;
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY, 
         r + random(-20, 20), 
         g + random(-20, 20), 
         b + random(-20, 20)));
   }

  
   // function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();

         if (this.particles[i].locX<0||
            this.particles[i].locX>width||
            this.particles[i].locY<0||
            this.particles[i].locY>height)
         {
            this.particles.splice(i, 1);
         }
      }

   }

   this.setSystemLocation = function(x, y)
   {
      for (var i = 0; i < this.particles.length; i++)
      {
         this.particles[i].setLocation(x, y);
      }
   }

}

var fireworks = []; //store fireworks
var click_fw = [];
var frame_counter = 0; 
var counter = 3; //fireworks counter
var fw_number = 500; //total of the fireworks in the list
var clicks = 0;
var fw_count = 4;

function setup() 
{
   createCanvas(500, 500);

   

   for (var i=0; i<fw_number; i++)
   {
      fireworks[i] = new PSys(random(width), random(height/2), 
         random(30,100), random(0, 255), random(0, 255), random(0, 255));

      click_fw[i] = new PSys(0, 0, 
         random(30,100), random(0, 255), random(0, 255), random(0, 255));

   }

}

function draw() 
{

background(0, 0, 40);
   noStroke();
   fill(0, 180, 0);
   rect(0, 3*height/4, width, height/4);

//stars
   var starX=0;
   var starY=0;
   var rotStar=random(0, 2*PI);
   while(starY<3*height/4)
       {
       drawStars(starX, starY, rotStar);
       starX+=20
       if (starX > width)
         {
            starX = 0;
            starY += 20;
         }
       }
       stopHere=0;

//alien
   fill(200, 220, 255);
   ellipse(200, 300, 40);
   ellipse(200, 345, 20, 60);
   stroke(200, 220, 255);
   strokeWeight(4);
   line(200, 370, 190, 410);//legs
   line(200, 370, 210, 410);
   line(200, 340, 150, 300);//arms
   line(200, 340, 240, 290);

   fill(255);
   noStroke();
   ellipse(192, 292, 10);
   ellipse(208, 292, 10);
   fill(0);
   ellipse(192, 290, 6);
   ellipse(208, 290, 6);
   ellipse(200, 310, 15);


   for (var i=0; i < clicks; i++) {
      click_fw[i].run();
   }
   //make sure second counter doesn't get too big
   if (counter < fw_number - fw_count) {
      for (var j=counter-3; j<counter; j++) {
         fireworks[j].run();
      }
   }
}


function mouseClicked()
{
   click_fw[clicks].setSystemLocation(mouseX, mouseY);
   clicks++;
}