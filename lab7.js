var numFlies;
var dir = [];
var loc = [];
var sc = [];
var topCol= [];
var bottomCol= [];
var circleCol= [];
var theta = [];
var thetaAdd = [];
var centerLoc = [];

var flowerX= [];
var flowerH= [];
var flowerRot= [];
var flowerScale= [];
var flowerCol= [];
var insideCol= [];
var stemCol= [];


function imp_line(x, y, x0, y0, x1, y1){
	return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}
function distance(x0, y0, x1, y1)
{
	return sqrt(pow(x0-x1,2) + pow(y0-y1, 2));
}

function setup() 
{
   createCanvas(700, 400);
   numFlies = 5;

   for (var i=0; i<numFlies; i++)
   {
      centerLoc.push(createVector(random(100, 600), random(50, 400)));
      loc.push(createVector());
      dir.push(createVector());
      theta.push(random(2*PI));
      thetaAdd.push(random(-PI/30, PI/30));
      sc.push(random(.1, 1.7));
      topCol.push(color(random(180, 255), random(40, 120), random(50, 180)));
      bottomCol.push(color(random(180, 255), random(40, 120), random(50, 180)));
      circleCol.push(color(random(180, 255), random(40, 120), random(50, 180)));
		var num=random(-PI/200, PI/200);
      	while (abs(num)<PI/500)
      	{
      		num=random(-PI/200, PI/200);
      	}
   }


   //flower variables
   var x= -50;
   while(x<width + 50)
   {
      flowerX.push(x);
      flowerH.push(random(-50, -350));
      flowerRot.push(random(-PI/70, PI/70));
      flowerScale.push(random(.5,2));
      flowerCol.push(color(random(180, 255), random(40, 120), random(50, 180)));
      insideCol.push(color(random(180, 255), random(40, 120), random(50, 180)));
      stemCol.push(color(random(200, 240), random(150,240), random(5,15)));

      x+= random(10, 40);
   }
}

function draw() 
{
   var next = createVector();
   noStroke();
   //sky gradient
   for (var y=0; y < height; y+= 5) {
   for (var x=0; x < width; x+=5) {
      d= distance(x, y, x, height);
   if (imp_line(x, y, 0, height, width, height) < 0.0)
           {
              fill(182-d/2, 243-d/3, 250-d/3);
   } 
   //ground 
   else {
              fill(153+d/2, 203+d/3, 209+d/3);
           }
           ellipse(x+random(-1,1), y+random(-1,1), 14);
       }
   } 

   //flowers
   for (var i=0; i<flowerX.length; i++)
   {
      drawFlower(flowerX[i], height, flowerH[i], flowerRot[i], flowerScale[i], flowerCol[i], insideCol[i], stemCol[i]);
   }



   // draw butterflies
   for (var i=0; i<numFlies; i++)
   {
      drawButterfly(loc[i].x, loc[i].y, dir[i].x, dir[i].y, sc[i], topCol[i], bottomCol[i], circleCol[i]);
      
      // updates the dragonfly's location by getting the next (x,y) and 
      // determining the direction from the current location to the next.
      theta[i] += thetaAdd[i];
      next.x = centerLoc[i].x + 200 * cos(theta[i]);
      next.y = centerLoc[i].y + 100 * sin(theta[i]);

      dir[i].x = next.x - loc[i].x;
      dir[i].y = next.y - loc[i].y;

      loc[i].x += dir[i].x
      loc[i].y += dir[i].y;
   }
}


function drawButterfly(x, y, dx, dy, sc, tcol, bcol, circCol)
{
	push();
		translate(x,y);
		rotate(atan2(dy,dx)+PI/2);
		scale(sc);


		//top wings
			fill(tcol);
			noStroke();
			//right top wing
			beginShape();
			curveVertex(0, 0);
			curveVertex(0, 0);
			curveVertex(30, 0);
			curveVertex(50, -10);
			curveVertex(50, -30);
			curveVertex(30, -30);
			curveVertex(10, -20);
			curveVertex(0, 0);
			curveVertex(0, 0);
			endShape();

			//left top wing
			beginShape();
			curveVertex(0, 0);
			curveVertex(0, 0);
			curveVertex(-30, 0);
			curveVertex(-50, -10);
			curveVertex(-50, -30);
			curveVertex(-30, -30);
			curveVertex(-10, -20);
			curveVertex(0, 0);
			curveVertex(0, 0);
			endShape();

	//bottom wings
		fill(bcol);
		noStroke();

	//right bottom wing
		beginShape();
			curveVertex(0, 0);
			curveVertex(0, 0);
			curveVertex(2, 20);
			curveVertex(15, 30);
			curveVertex(35, 30);
			curveVertex(35, 10);
			curveVertex(15, 0);
			curveVertex(0, 0);
			curveVertex(0, 0);
		endShape();

	//right top wing
		beginShape();
			curveVertex(0, 0);
			curveVertex(0, 0);
			curveVertex(-2, 20);
			curveVertex(-15, 30);
			curveVertex(-35, 30);
			curveVertex(-35, 10);
			curveVertex(-15, 0);
			curveVertex(0, 0);
			curveVertex(0, 0);
		endShape();

	//circle on top wings
		fill(circCol);
		noStroke();
		ellipse(-20, -10, 15);
		ellipse(20, -10, 15);

	//antennae
	noFill();
	strokeWeight(2);
	stroke(circCol);
	arc(0, -25, 20, 50, 7*PI/4, PI/2);
	arc(0, -25, 20, 50, PI/2, 5*PI/4);

	noStroke();
	fill(circCol);
	ellipse(10, -35, 5);
	ellipse(-10, -35, 5);

	pop();
}

function drawFlower(x, y, h, rot, sc, fcol, incol, scol)
{
	
	push();
	translate(x,y);
	rotate(rot);

	//stem
	noFill();
	strokeWeight(5);
	stroke(scol);
	line(0, 10, 0, h);

	//inside flower
	noStroke();
	fill(incol);
	ellipse(0, h-20, 40);

	//right petal
	noStroke();
	fill(fcol);
	beginShape();
	curveVertex(0, h);
	curveVertex(0, h);
	curveVertex(30, h);
	curveVertex(50, h-10);
	curveVertex(50, h-30);
	curveVertex(30, h-30);
	curveVertex(0, h);
	curveVertex(0, h);
	endShape();

	//left petal
	noStroke();
	fill(fcol);
	beginShape();
	curveVertex(0, h);
	curveVertex(0, h);
	curveVertex(-30, h);
	curveVertex(-50, h-10);
	curveVertex(-50, h-30);
	curveVertex(-30, h-30);
	curveVertex(0, h);
	curveVertex(0, h);
	endShape();

	noFill();
	strokeWeight(2);
	stroke(fcol);
	arc(0, h-45, 20, 90, 7*PI/4, PI/2);
	arc(0, h-45, 20, 90, PI/2, 5*PI/4);

	noStroke();
	fill(fcol);
	ellipse(10, h-55, 10);
	ellipse(-10, h-55, 10);


	pop();

}
