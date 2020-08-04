var scaleBT= 1.4;
var xBT= 750;
var yBT= 200;
var rotBT= 0;
var scaleCT = 1;
var xCT = 310;
var yCT = 300;
var counter = 0;
var rotCT = 0;
var xFS= 620;
var yFS= 450;

function setup() {
	createCanvas(900, 650);
	
}

function draw() {
	background (255, 255, 255);


//bush
noStroke();
fill('#2EE8A6');
rect(0, 60, 70, 150);
ellipse(0, 50, 40, 40);
ellipse(30, 50, 40, 40);
ellipse(60, 60, 40, 40);
ellipse(70, 80, 40, 40);
ellipse(70, 110, 40, 40);
ellipse(73, 140, 40, 40);
ellipse(0, 130, 40, 40);
ellipse(0, 150, 40, 40);
ellipse(70, 170, 40, 40);
ellipse(70, 200, 40, 40);



//water
fill('#6DBBFF');
noStroke();
rect(0,260, 900, 430);

ellipse(-50, 250, 150, 100);
ellipse(50, 250, 150, 100);
ellipse(150, 250, 150, 100);
ellipse(250, 250, 150, 100);
ellipse(350, 250, 150, 100);
ellipse(450, 250, 150, 100);
ellipse(550, 250, 150, 100);
ellipse(650, 250, 150, 100);
ellipse(750, 250, 150, 100);
ellipse(850, 250, 150, 100);


drawFish(xFS, yFS);
	{
		xFS -= 2;
	}

//CAT

drawCat(xCT, yCT, rotCT, scaleCT);
	
	if (yCT <= 525)
	{
		yCT += .5;
		rotCT += PI/40;
	}

drawBoat(xBT, yBT);
	if (xBT > 250)
	{
		xBT -= 1.2;
	}




// MAN
//Shoes
	noStroke();
	fill(132, 112, 80); //Brown
	ellipse(124, 200, 13, 5); //Left toes
	rect(116, 182, 7, 27); //Left Base
	rect(180, 195, 15, 7); //Right base
	ellipse(195, 200, 13, 10); //Right Toes

	//Legs
	fill(242, 154, 145); //Skin Color
	quad(127, 182, 155, 192, 155, 202, 127, 192); //Left calf
	rect(145, 178, 10, 20); //Left Thigh
	quad(170, 167, 188, 177, 188, 187, 170, 184); //Right Thigh
	rect(182, 177, 7, 14);//Right Calf


	//Pants 
	fill(132, 112, 80); //brown
	push();
	translate(145, 156);
	rotate(radians(22));
		rect(0, 0, 30, 20);
		ellipse(29, 10, 16, 20);
	pop();
	ellipse(145, 160, 29, 33); //Bottom

	//Head
	fill(242, 154, 145); //Skin Color
	ellipse(220, 87, 35, 35); //head
	push();
	translate(230, 100);
	rotate(radians(120));
		ellipse(0,0,5,10); //Nose
	pop();

	//Shirt
	fill(144, 194,225); //blue
	push();
	translate(165, 168);
	rotate(radians(225));
		rect(0,0,36, 80,9);
	pop();
	rect(207, 107, 12, 85, 3); //Right arm
	push(); //left arm
	translate(210, 104);
	rotate(radians(25));
		rect(0, 0, 35, 12, 3);
	pop();

	//Hands
	fill(242, 154, 145); //Skin Color
	ellipse(215, 196, 20, 11); //Left Hand
	ellipse(249, 125, 20, 11); //Right Hand

	//Right Hand Inner Part
	fill(256, 256, 256); //White
	ellipse(255, 127, 15, 3.5); //White Part

	//Hair
	fill(132, 112, 80); //brown
	push();
	translate(213, 78);
	rotate(radians(45));
		ellipse(0,0, 15, 27);
	pop();
	push();
	translate(229, 78);
	rotate(radians(45));
		ellipse(0,0, 27, 12);
	pop();

	//Eye
	fill(132, 112, 80); //brown
	push();
	translate(230, 94); //eye
	rotate(radians(45));
		ellipse(0, 0, 2, 4);
	pop();

	//Smile
	stroke(132, 112, 80);
	strokeWeight(1.5);
	noFill();
	push();
	translate(225, 100);
	rotate(45);
		arc(0,0,5,7,radians(40),radians(110));
	pop();


//DECK

noStroke();
fill('#E8D72E');
rect(0, 200, 250, 50);







//grass
noFill();
stroke('#2EE8A6');
strokeWeight(2);
arc(22, 540, 50, 80, PI/2, 3*PI/2);
arc(20, 620, 50, 80, 3*PI/2, PI/2);

stroke('#73FF40');
arc(52, 540, 50, 80, PI/2, 3*PI/2);
arc(50, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E8D72E');
arc(82, 540, 50, 80, PI/2, 3*PI/2);
arc(80, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E0AF4F');
arc(112, 540, 50, 80, PI/2, 3*PI/2);
arc(110, 620, 50, 80, 3*PI/2, PI/2);

stroke('#2EE8A6');
arc(142, 540, 50, 80, PI/2, 3*PI/2);
arc(140, 620, 50, 80, 3*PI/2, PI/2);

stroke('#73FF40');
arc(172, 540, 50, 80, PI/2, 3*PI/2);
arc(170, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E8D72E');
arc(202, 540, 50, 80, PI/2, 3*PI/2);
arc(200, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E0AF4F');
arc(232, 540, 50, 80, PI/2, 3*PI/2);
arc(230, 620, 50, 80, 3*PI/2, PI/2);

stroke('#2EE8A6');
arc(262, 540, 50, 80, PI/2, 3*PI/2);
arc(260, 620, 50, 80, 3*PI/2, PI/2);

stroke('#73FF40');
arc(292, 540, 50, 80, PI/2, 3*PI/2);
arc(290, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E8D72E');
arc(322, 540, 50, 80, PI/2, 3*PI/2);
arc(320, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E0AF4F');
arc(352, 540, 50, 80, PI/2, 3*PI/2);
arc(350, 620, 50, 80, 3*PI/2, PI/2);

stroke('#2EE8A6');
arc(382, 540, 50, 80, PI/2, 3*PI/2);
arc(380, 620, 50, 80, 3*PI/2, PI/2);

stroke('#73FF40');
arc(412, 540, 50, 80, PI/2, 3*PI/2);
arc(410, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E8D72E');
arc(442, 540, 50, 80, PI/2, 3*PI/2);
arc(440, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E0AF4F');
arc(472, 540, 50, 80, PI/2, 3*PI/2);
arc(470, 620, 50, 80, 3*PI/2, PI/2);

stroke('#2EE8A6');
arc(502, 540, 50, 80, PI/2, 3*PI/2);
arc(500, 620, 50, 80, 3*PI/2, PI/2);

stroke('#73FF40');
arc(532, 540, 50, 80, PI/2, 3*PI/2);
arc(530, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E8D72E');
arc(562, 540, 50, 80, PI/2, 3*PI/2);
arc(560, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E0AF4F');
arc(592, 540, 50, 80, PI/2, 3*PI/2);
arc(590, 620, 50, 80, 3*PI/2, PI/2);

stroke('#2EE8A6');
arc(622, 540, 50, 80, PI/2, 3*PI/2);
arc(620, 620, 50, 80, 3*PI/2, PI/2);

stroke('#73FF40');
arc(652, 540, 50, 80, PI/2, 3*PI/2);
arc(650, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E8D72E');
arc(682, 540, 50, 80, PI/2, 3*PI/2);
arc(680, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E0AF4F');
arc(712, 540, 50, 80, PI/2, 3*PI/2);
arc(710, 620, 50, 80, 3*PI/2, PI/2);

stroke('#2EE8A6');
arc(742, 540, 50, 80, PI/2, 3*PI/2);
arc(740, 620, 50, 80, 3*PI/2, PI/2);

stroke('#73FF40');
arc(772, 540, 50, 80, PI/2, 3*PI/2);
arc(770, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E8D72E');
arc(802, 540, 50, 80, PI/2, 3*PI/2);
arc(800, 620, 50, 80, 3*PI/2, PI/2);

stroke('#E0AF4F');
arc(832, 540, 50, 80, PI/2, 3*PI/2);
arc(830, 620, 50, 80, 3*PI/2, PI/2);

stroke('#2EE8A6');
arc(862, 540, 50, 80, PI/2, 3*PI/2);
arc(860, 620, 50, 80, 3*PI/2, PI/2);

stroke('#73FF40');
arc(892, 540, 50, 80, PI/2, 3*PI/2);
arc(890, 620, 50, 80, 3*PI/2, PI/2);


}

function drawCat(x, y, rot, sc)
{	//-------CAT--------//

	push();
	translate(xCT, yCT);
	scale(sc);
	rotate(rot);

	fill(132, 112, 80);
		arc(0,0,14, 50, radians(180), radians(0)); //CAT body
		ellipse(0,-30,15,15); //CAT Head
		ellipse(-4,-35,3,15); //CAT Left Ear
		ellipse(4,-35,3,15); //CAT Right Ear
	

	
	stroke(132, 112, 80); //Brown
	strokeWeight(2.5);
	noFill();
		arc(-3.5, -20, 30, 30, radians(90), radians(180));


	//CAT EYE WHITES//
	
	fill(256, 256, 256);
	noStroke();
		ellipse(-3.5, -32, 3, 3); //Left Eye (Whites)
		ellipse(3.5, -32, 3, 3); //Right Eye (Whites)
	
	//CAT EYE BLUE//
	
	fill(144, 194,225);
	noStroke();
		ellipse(-4, -32.3, 2, 2); //Left Eye (Blue)
		ellipse(3, -32.3, 2, 2); //Right Eye (Blue)
	pop();

}

function drawBoat(x, y, rot, sc)
{
	//BOAT AND FISHER
push();
	translate(xBT, yBT);
	scale(scaleBT);

//fisher
//torso
fill('#70DBD5');
noStroke();
rect(15, -25, 10, 30);

//arm
fill('#70DBD5');
rect(20, -20, 10, 5);

//head
fill('#FFD1B8');
ellipse(20, -30, 10, 10);

//hair
fill('#F0BE69');
ellipse(22, -33, 13, 5);

ellipse(19, -34, 11, 7);

//boat
fill(255, 0, 0);
noStroke();
ellipse(0, 0, 90, 24);

//pole
noFill();
stroke(0, 0, 0);
strokeWeight(2);
arc(150, -30, 200, 150, 3*PI/4, PI);
arc(125, 127, 300, 200, radians(140), radians(250))

stroke('#A36B5F');
strokeWeight(4);
noFill();
line(30, -18, 50, -30);

//bobber
noStroke()
fill(150, 0, 0);
ellipse(90, 30, 8, 10);

//hook
stroke(0, 0, 0);
strokeWeight(2);
noFill();
stroke(0, 0, 0);
arc(36, 220, 10, 20, PI/4, radians(250));

fill(0, 0, 0);
triangle(39, 223, 41, 220, 43, 223);

noFill();
ellipse(34, 208, 6, 6);

//worm
stroke('#A87F58')
strokeWeight(3);
arc(40, 225, 10, 10, PI/2, 3*PI/2);

arc(39, 235, 10, 10, 3*PI/2, PI/2);


pop();
}


function drawFish(x, y)

{
push();
translate(xFS, yFS);


//fish
//body
noStroke();
fill(255, 255, 255);
ellipse(0, 0, 200, 140);
//mouth
fill('#6DBBFF');
ellipse(-85, 30, 50, 30);
//eye
ellipse(-70, -10, 20, 20);

//fish tail

	rotate(radians(315))
	fill(255, 255, 255);
	ellipse(50, 105, 80, 100);

	rotate(radians(80))
	fill(255, 255, 255);
	ellipse(65, -100, 80, 100);

//top gill

	rotate(radians(340))
	fill(255, 255, 255);
	ellipse(-20, -95, 20, 70);

	rotate(radians(155))
	fill(255, 255, 255);
	ellipse(0, 100, 20, 70);

//gill arcs

noFill();
stroke('#6DBBFF');
strokeWeight(5);
arc(10, 0, 100, 80, radians(100), radians(280));

arc(10, 0, 70, 60, radians(100), radians(280));

arc(10, 0, 50, 40, radians(100), radians(280));
pop();
}
