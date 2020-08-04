function setup()
{
createCanvas(800, 600);
noLoop();

}

function draw()
{
var x, w, h;
background(145, 212, 255);

//clouds
fill(240, 240, 255);
noStroke();
ellipse(100, 100, 40);
ellipse(130, 90, 40);
ellipse(120, 90, 40);
ellipse(110, 80, 40);
ellipse(90, 70, 40);
ellipse(110, 50, 40);
ellipse(130, 60, 40);

ellipse(300, 80, 60);
ellipse(330, 70, 60);
ellipse(320, 70, 60);
ellipse(310, 60, 60);
ellipse(290, 50, 60);
ellipse(310, 30, 60);
ellipse(330, 40, 60);

ellipse(600, 110, 60);
ellipse(630, 100, 60);
ellipse(620, 100, 60);
ellipse(610, 90, 60);
ellipse(590, 80, 60);
ellipse(610, 60, 60);
ellipse(630, 70, 60);

noStroke();


x=0;

while (x<800)
	{

		h=random(100, 290);
		w=random(70, 80);

		//end rectangle at edge
		if(w+x > 800)
			w = 800-x;

		building (color (random(255), random(255), random(255)), 
			color(random(255), random(255), random(255)), 
			color(random(255), random(255), random(255)),
			x,
			400-h,
			w,
			h);

		x += w;
		
	}

//tree reflection
fill(121, 80, 44);
stroke(82, 43, 25);
strokeWeight(3);
rect(200, 400, 20, 150);

fill(59, 122, 38);

stroke(60, 84, 22);
ellipse(215, 500, 40);
ellipse(180, 510, 40);
ellipse(170, 540, 40);
ellipse(180, 570, 40);
ellipse(210, 580, 40);
ellipse(235, 570, 40);
ellipse(250, 550, 40);
ellipse(250, 525, 40);
ellipse(240, 510, 40);

noStroke();
ellipse(215, 540, 80);

//water
fill(50, 67, 169, 99);
noStroke();
rect(0, 400, width, 200);


//waves
stroke(50, 67, 169, 190);
strokeWeight(5);
noFill();
arc(20, 474, 20, 10, 0, PI);
arc(40, 470, 20, 10, PI, 0);
arc(60, 474, 20, 10, 0, PI);

arc(20, 574, 20, 10, 0, PI);
arc(40, 570, 20, 10, PI, 0);
arc(60, 574, 20, 10, 0, PI);
//
arc(100, 514, 20, 10, 0, PI);
arc(120, 510, 20, 10, PI, 0);
arc(140, 514, 20, 10, 0, PI);
//
arc(180, 474, 20, 10, 0, PI);
arc(200, 470, 20, 10, PI, 0);
arc(220, 474, 20, 10, 0, PI);

arc(180, 574, 20, 10, 0, PI);
arc(200, 570, 20, 10, PI, 0);
arc(220, 574, 20, 10, 0, PI);
//
arc(260, 514, 20, 10, 0, PI);
arc(280, 510, 20, 10, PI, 0);
arc(300, 514, 20, 10, 0, PI);
//
arc(340, 474, 20, 10, 0, PI);
arc(360, 470, 20, 10, PI, 0);
arc(380, 474, 20, 10, 0, PI);

arc(340, 574, 20, 10, 0, PI);
arc(360, 570, 20, 10, PI, 0);
arc(380, 574, 20, 10, 0, PI);
//
arc(420, 514, 20, 10, 0, PI);
arc(440, 510, 20, 10, PI, 0);
arc(460, 514, 20, 10, 0, PI);
//
arc(500, 474, 20, 10, 0, PI);
arc(520, 470, 20, 10, PI, 0);
arc(540, 474, 20, 10, 0, PI);

arc(500, 574, 20, 10, 0, PI);
arc(520, 570, 20, 10, PI, 0);
arc(540, 574, 20, 10, 0, PI);
//
arc(580, 514, 20, 10, 0, PI);
arc(600, 510, 20, 10, PI, 0);
arc(620, 514, 20, 10, 0, PI)
//
arc(660, 474, 20, 10, 0, PI);
arc(680, 470, 20, 10, PI, 0);
arc(700, 474, 20, 10, 0, PI);

arc(660, 574, 20, 10, 0, PI);
arc(680, 570, 20, 10, PI, 0);
arc(700, 574, 20, 10, 0, PI);
//
arc(740, 514, 20, 10, 0, PI);
arc(760, 510, 20, 10, PI, 0);
arc(780, 514, 20, 10, 0, PI)
//


//sidewalk
noStroke();
fill(100);
rect(0, 400, width, 50);

stroke(20);
strokeWeight(2);
noFill();
line(20, 405, 12, 445);
line(70, 405, 63, 445);
line(120, 405, 114, 445);
line(170, 405, 165, 445);
line(220, 405, 216, 445);
line(270, 405, 267, 445);
line(320, 405, 318, 445);
line(370, 405, 369, 445);

line(420, 405, 422, 445);
line(470, 405, 473, 445);
line(520, 405, 524, 445);
line(570, 405, 575, 445);
line(620, 405, 626, 445);
line(670, 405, 677, 445);
line(720, 405, 728, 445);
line(770, 405, 779, 445);


fill(50);
strokeWeight(3);
rect(0, 435, width, 15);


//tree
fill(121, 80, 44);
stroke(82, 43, 25);
strokeWeight(3);
rect(200, 250, 20, 150);

fill(59, 122, 38);

stroke(60, 84, 22);
ellipse(215, 200, 40);
ellipse(180, 210, 40);
ellipse(170, 240, 40);
ellipse(180, 270, 40);
ellipse(210, 280, 40);
ellipse(235, 270, 40);
ellipse(250, 250, 40);
ellipse(250, 225, 40);
ellipse(240, 210, 40);

noStroke();
ellipse(215, 240, 80);


}

function building(fillColor, windowColor, strokeColor, x, y, w, h)
{
push();
	translate(x, y);

//buildings
	fill(fillColor, 100);
	rect(0, 0, w, h);
fill(fillColor, 50);
rect(0, 0+h, w, h);

//roofs
	fill(strokeColor);
	triangle(0, 0, w/2, -w, w, 0);
triangle(0, 2*h, w/2, w+2*h, w, 2*h)

//doors
	fill(strokeColor);
	rect(w/3, h/2, w/3, h/2);
	fill(windowColor);
	ellipse(7*w/12, 3*h/4, 8);
fill(strokeColor);
rect(w/3, h, w/3, h/2);
fill(windowColor);
ellipse(7*w/12, 5*h/4, 8);

//top left window
	fill(windowColor);
	rect(w/8, h/10, w/4, h/4);

	noFill();
	stroke(strokeColor);
	strokeWeight(5);
	//vertical
	line(w/4, h/10, w/4, h/3);
	//horizontal
	line(w/8, h/5, w/2.8, h/5);
		//reflection of above window
		fill(windowColor);
		noStroke();
		rect(w/8, 1.65*h, w/4, h/4);

		noFill();
		stroke(strokeColor);
		strokeWeight(5);
		//vertical
		line(w/4, 1.9*h, w/4, 1.67*h);
		//horizontal
		line(w/8, 1.8*h, w/2.8, 1.8*h);


//top right window
	fill(windowColor);
	noStroke();
	rect(5*w/8, h/10, w/4, h/4);

	noFill();
	stroke(strokeColor);
	strokeWeight(5);
	//vertical
	line(3*w/4, h/10, 3*w/4, h/3);
	//horizontal
	line(5*w/8, h/5, 7*w/8, h/5);
		//reflection of above window
		fill(windowColor);
		noStroke();
		rect(5*w/8, 1.65*h, w/4, h/4);

		noFill();
		stroke(strokeColor);
		strokeWeight(5);
		//vertical
		line(3*w/4, 1.9*h, 3*w/4, 1.67*h);
		//horizontal
		line(5*w/8, 1.8*h, 7*w/8, 1.8*h);



pop();
}