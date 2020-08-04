var xCT; 
var yCT; 
var disappear_cat;
var xRE = 420
var yRE = 250
var xLE = 420
var yLE = 250
var egg;
var xY= 400
var yY= 235
var yolk;
var rotY=0;
var xFL= 419
var yFL= 230
var rotFL=0;
var xYF= 409;
var yYF= 140;
var rotYF=0;

function setup() 
{
	createCanvas(800, 500);

	xCT = 410;
	yCT = 290;
	disappear_cat = false; 
	egg= false;
	yolk = false;
}

function draw() {
	background(107,146, 193); //blue sky color

//Draw Clouds
	noStroke();
	fill(256, 256, 256);

	ellipse(130, 5, 200, 30);
	ellipse(220, 10, 40, 30);
	ellipse(190, 18, 40, 30);
	ellipse(160, 20, 40, 30);
	ellipse(130, 20, 40, 30);
	ellipse(100, 18, 40, 30);
	ellipse(70, 15, 40, 30);
	ellipse(40, 10, 40, 30);

	ellipse(400, 80, 200, 30);
	ellipse(310, 65, 40);
	ellipse(340, 60, 50);
	ellipse(370, 55, 60);
	ellipse(400, 60, 50);
	ellipse(430, 60, 50);
	ellipse(470, 60, 75, 60);

	ellipse(40, 180, 200, 30);
	ellipse(-40, 165, 40);
	ellipse(-10, 160, 50);
	ellipse(20, 155, 60);
	ellipse(50, 160, 50);
	ellipse(80, 160, 50);
	ellipse(120, 160, 75, 55);

	ellipse(300, 200, 200, 30);
	ellipse(240, 190, 60, 40);
	ellipse(270, 180, 60, 50);
	ellipse(310, 170, 60, 50);
	ellipse(350, 185, 90, 50);

	ellipse(40, 400, 200, 30);
	ellipse(-20, 390, 60, 40);
	ellipse(10, 380, 60, 50);
	ellipse(50, 370, 60, 50);
	ellipse(90, 385, 90, 50);

	ellipse(200, 300, 60, 40);
	ellipse(170, 300, 60, 40);
	ellipse(185, 290, 50, 40);


	ellipse(450, 400, 200, 30);
	ellipse(390, 390, 60, 40);
	ellipse(430, 390, 60, 40);
	ellipse(420, 380, 60, 50);
	ellipse(460, 370, 60, 50);
	ellipse(500, 385, 90, 50);

	ellipse(500, 280, 100, 20);
	ellipse(490, 260, 50, 60);

	ellipse(250, 500, 200, 30);
	ellipse(160, 485, 40);
	ellipse(190, 480, 50);
	ellipse(220, 475, 60);
	ellipse(250, 480, 50);
	ellipse(280, 480, 50);
	ellipse(320, 480, 75, 60);


	ellipse(700, 150, 100, 30);
	ellipse(640, 140, 60, 40);
	ellipse(670, 130, 60, 50);
	ellipse(710, 120, 60, 50);
	ellipse(750, 135, 90, 50);

	ellipse(850, 400, 200, 30);
	ellipse(790, 390, 60, 40);
	ellipse(830, 390, 60, 40);
	ellipse(820, 380, 60, 50);
	ellipse(860, 370, 60, 50);
	ellipse(900, 385, 90, 50);

	ellipse(700, 280, 100, 20);
	ellipse(690, 260, 50, 60);

	ellipse(650, 500, 200, 30);
	ellipse(560, 485, 40);
	ellipse(590, 480, 50);
	ellipse(620, 475, 60);
	ellipse(650, 480, 50);
	ellipse(680, 480, 50);
	ellipse(720, 480, 75, 60);


//Hat (darker part)
	noStroke();
	fill(0,0,0);
	arc(410, 300, 130, 170, radians(0), radians(180));

//Hat (lighter shading)
	noStroke();
	fill(58, 54, 46);
	ellipse(410, 310, 125, 30);

//Hat (dark top part)
	noStroke();
	fill(0,0,0);
	ellipse(410, 290, 200, 50);

//Hat (top lighter shading)
	noStroke();
	fill(44, 36, 44);
	ellipse(410, 290, 120, 30);


//FLOWER #1
//Flower Stem
	stroke(85, 107, 47);
	strokeWeight(9);
	line(410, 285, 410, 160);


//Flower #2
//Flower Stem"
	stroke('#bab86c');
	strokeWeight(9);
	line(420, 285, 420, 250);

drawFlower(xFL, yFL, rotFL);
{
	rotFL+=PI/20;
}

drawYellowflower(xYF, yYF, rotYF);
{
	rotYF+=-PI/20;
}

	drawCat(xCT, yCT);

	if(disappear_cat)
	{
		yCT-=1;
	}
drawYolk(xY, yY);
if (yolk)
	{
	yY+=3;
	rotY+=PI/50;
	}
	

drawRightEgg(xRE, yRE);
{}

drawLeftEgg(xLE, yLE);
{}


}

function drawCat(x, y)
{
	push();
		translate(xCT, yCT);

		//Cat Body
		noStroke();
		fill(126, 114, 102);
		arc(0, 0, 100, 250, radians(180), radians(0));
		//Cat Ears (darker part)
		ellipse(-25, -180, 20, 50);
		ellipse(25, -180, 20, 50);

		//Cat Ears (lighter part)
		noStroke();
		fill(105, 102, 108);
		ellipse(-25, -180, 10, 40);
		ellipse(25, -180, 10, 40);
		
		//Cat Stomach (Shading)
		noStroke();
		fill(187, 177, 171);
		arc(0, 0, 50, 160, radians(180), radians(0));

		//Cat Head
		noStroke();
		fill(126, 114, 102);
		ellipse(0, -140, 90);

		//Cat Eyes (Yellow)
		noStroke();
		fill(215, 186, 126); //Yellowish Color
		ellipse(-15, -150, 15, 12);
		ellipse(15, -150, 15, 12);

		//Cat Eyes (Black Centers)
		noStroke();
		fill(0, 0, 0);
		ellipse(-15, -150, 7, 12);
		ellipse(15, -150, 7, 12);

		//Cat Nose
		noStroke();
		fill(170, 143, 142);
		ellipse(0, -130, 13, 5);
		ellipse(0, -127, 5, 9);

		//Cat Mouth
		stroke(256, 256, 256);
		noFill();
		strokeWeight (1);
		line(-.25, -122.5, -.25, -118); //Downward Mouth
		arc(.25, -111.75, 10, 10, radians(180), radians(0));

	pop();
}

//FUNCTIONS DRAWING EGGS
function drawRightEgg(x,y)
{
	push();
translate(xRE, yRE);


//egg
fill(255, 255, 255);
stroke(0, 0, 0);
strokeWeight(2);

beginShape();
vertex(-1, -125);
vertex(-14, -113);
vertex(-6, -102);
vertex(-27, -88);
vertex(-11, -71);
vertex(-19, -59);
vertex(-36, -47);
vertex(-20, -33);
vertex(-28, -21);
vertex(-15, -8);
vertex(-24, 4);
vertex(-32, 26);
vertex(-14, 38);
vertex(-22, 50);
vertex(-2, 57);
vertex(-15, 64);
vertex(0, 72);
vertex(-14, 80);
vertex(-7, 85);
vertex(-21, 98);
vertex(-12, 105);
vertex(-19, 111);
vertex(-12, 114);
vertex(-14, 117);
vertex(-1,125);
vertex(17, 115);
vertex(72, -8);
vertex(1, -124);
endShape();


arc(0, 0, 400, 250, 3*PI/2, PI/2);

pop();
}

function drawLeftEgg(x, y)
{
push();
translate(xLE, yLE);

//egg
stroke(0, 0, 0);
strokeWeight(2);
fill(255, 255, 255);


beginShape();
vertex(-40, -125);
vertex(-40, -125);
vertex(-1, -125);
vertex(-14, -113);
vertex(-6, -102);
vertex(-27, -88);
vertex(-11, -71);
vertex(-19, -59);
vertex(-36, -47);
vertex(-20, -33);
vertex(-28, -21);
vertex(-15, -8);
vertex(-24, 4);
vertex(-32, 26);
vertex(-14, 38);
vertex(-22, 50);
vertex(-2, 57);
vertex(-15, 64);
vertex(0, 72);
vertex(-14, 80);
vertex(-7, 85);
vertex(-21, 98);
vertex(-12, 105);
vertex(-19, 111);
vertex(-12, 114);
vertex(-14, 117);
vertex(-1,125);
vertex(-40, 125);

vertex(-192, -8);
vertex(-40, -125);
vertex(-1, -124);
endShape();

arc(-40, 0, 400, 250, PI/2, 3*PI/2);

stroke(0, 0, 0);
noFill();
arc(-196, 0, 15, 20, 3*PI/2, PI/2);
arc(-203, 0, 15, 20, PI, 3*PI/2);


beginShape();
vertex(-188, 0);
vertex(-170, -10);
vertex(-150, 0);
vertex(-144, -5);
vertex(-125, -25);
vertex(-108, -10);
vertex(-87, 0);
vertex(-70, -8);
vertex(-57, 3);
vertex(-43, -15);
vertex(-32, -13);
vertex(-28, -19);


endShape();

}

function drawYolk(x, y, rot)
{
push();
translate(xY, yY);
rotate(rotY);

//left sun rays
fill(255, 255, 0, 95);
noStroke();
beginShape();
vertex(-33, 73);
vertex(-399, 144);
vertex(-380, 71);
vertex(-28, 71);
endShape();

beginShape();
vertex(-35, 30);
vertex(-309, -207);
vertex(-215, -235);
vertex(-15, 20);
endShape();

beginShape();
vertex(-44, 46);
vertex(-383, -31);
vertex(-385, -141);
vertex(-34, 34);
endShape();
//center ray
beginShape();
vertex(-1, 17);
vertex(-75, -230);
vertex(75, -230);
vertex(1, 17);
endShape();
//right rays
fill(255, 255, 0, 95);
beginShape();
vertex(33, 73);
vertex(399, 144);
vertex(380, 71);
vertex(28, 71);
endShape();

beginShape();
vertex(35, 30);
vertex(309, -207);
vertex(215, -235);
vertex(15, 20);
endShape();

beginShape();
vertex(44, 46);
vertex(383, -31);
vertex(385, -141);
vertex(34, 34);
endShape();


fill(255, 255, 0);
noStroke();
ellipse(0, 0, 310);

noFill();
stroke(255, 130, 0, 60);
strokeWeight(100);
arc(0, 0, 310, 310, 0, 0);

noFill();
stroke(255, 100, 0, 30);
strokeWeight(100);
arc(0, 0, 240, 240, 0, 0);



pop();
}

function drawFlower(x, y, rot)
{push();
translate(xFL, yFL);
rotate(rotFL);
	//Flower Petals (purple)
	noStroke()
	fill('#b19cd9');
	ellipse(1, 21, 24);
	ellipse(1, -20, 24);
	ellipse(-19, 11, 24);
	ellipse(-18, -10, 24);
	ellipse(19, -10, 24);
	ellipse(19, 11, 24);

//Flower Center 
	noStroke();
	fill('#FFC966');
	ellipse(0, 0, 27);
pop();
}

function drawYellowflower(x, y, rot)
{
push();
translate(xYF, yYF);
rotate(rotYF);
//Flower Petals (yellow)
	noStroke()
	fill('#ffdb58');
	ellipse(-1, 21, 24);
	ellipse(1, -20, 24);
	ellipse(-19, 11, 24);
	ellipse(-18, -10, 24);
	ellipse(19, -10, 24);
	ellipse(19, 11, 24);
//Flower Center 
	noStroke();
	fill('#ffb6c1');
	ellipse(0, 0, 27);
pop();
}

function mouseClicked()
{

	if(mouseX>210&&mouseX<230&&mouseY>240&&mouseY<260)
	{
		xRE = 590;
		xLE = 250;
		egg = true
		yY= 235;
		yolk= true;
	}


	if (mouseX > 310 && mouseX < 512 && mouseY > 260 && mouseY < 390&&egg&&yolk)

	{
		yCT = 290;
		xCT = 410;
		disappear_cat = true;
	}


}