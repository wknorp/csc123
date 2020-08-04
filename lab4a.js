function setup()
{

createCanvas(600, 600);
background(9,28,97);
noLoop();
}

function draw()
{

for(var i=0; i<50; i++)
	{
		drawCloud (random(width),
			random(height),
			color (random(200, 255)), 
			random(2*PI),
			random(.1, 2));
	}

for(var i=0; i<800; i++)
	{
		drawRain (random(width),
			random(height),
			color (random(70, 90), random(80, 130), random(200, 255)),  
			random(.1, 1));
	}

for(var i=0; i<90; i++)
	{
		drawBolt (random(width),
			random(height),
			color (random(255), random(255), random(255)), 
			color(random(255), random(255), random(255)), 
			random(2*PI),
			random(.1, 1.5));
	}



}

function drawBolt (x, y, fillColor, strokeColor, rot, sc)
{
push();
translate(x, y);
rotate(rot);
scale(sc);

fill(fillColor);
stroke(strokeColor);
strokeWeight(3);
beginShape();
vertex(0, 0);
vertex(20,0 );
vertex(13, 25);
vertex(23, 25);
vertex(16, 50);
vertex(25, 50);
vertex(0, 90);
vertex(6, 60);
vertex(-5, 60);
vertex(5, 30);
vertex(-7, 30);
vertex(0, 0);

endShape();


pop();
}

function drawRain (x, y, rainColor, scRain)
{
push();
translate(x, y);
scale(scRain);

noFill();
stroke(rainColor);
line(0, 0, 0, 40);

pop();

}


function drawCloud (x, y, cloudColor, rotCloud, scCloud)
{
push();
translate(x, y);
rotate(rotCloud);
scale(scCloud);

noStroke();
fill(cloudColor);
	ellipse(0, 0, 40);
	ellipse(30, -10, 40);
	ellipse(20, -10, 40);
	ellipse(10, -20, 40);
	ellipse(-10, -30, 40);
	ellipse(10, -50, 40);
	ellipse(30, -40, 40);

pop();
}
