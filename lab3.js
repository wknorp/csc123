var xRE = 400
var yRE = 300
var xLE = 400
var yLE = 300


function setup() {
	createCanvas(800, 600);
}

function draw() {
	background (255, 255, 197);

//sand
noStroke();
fill(170, 137, 72);
rect(0,380, 800, 220);

//bottom of sky
fill(255, 130, 0, 80);
rect(0, 300, 800, 80);

//water
fill(255, 255, 255);
rect(0, 380, 800, 30);
fill(120, 192, 255, 99);
rect(0, 380, 800, 30);

//waves
stroke(237, 197, 55, 99);
noFill();
arc(20, 394, 8, 5, 0, PI);
arc(28, 394, 8, 5, PI, 0);
arc(36, 394, 8, 5, 0, PI);

arc(70, 386, 8, 5, 0, PI);
arc(78, 386, 8, 5, PI, 0);
arc(86, 386, 8, 5, 0, PI);

arc(100, 400, 8, 5, 0, PI);
arc(108, 400, 8, 5, PI, 0);
arc(116, 400, 8, 5, 0, PI);

arc(140, 388, 8, 5, 0, PI);
arc(148, 388, 8, 5, PI, 0);
arc(156, 388, 8, 5, 0, PI);

arc(180, 400, 8, 5, 0, PI);
arc(188, 400, 8, 5, PI, 0);
arc(196, 400, 8, 5, 0, PI);

arc(220, 388, 8, 5, 0, PI);
arc(228, 388, 8, 5, PI, 0);
arc(236, 388, 8, 5, 0, PI);

arc(260, 400, 8, 5, 0, PI);
arc(268, 400, 8, 5, PI, 0);
arc(276, 400, 8, 5, 0, PI);

arc(300, 388, 8, 5, 0, PI);
arc(308, 388, 8, 5, PI, 0);
arc(316, 388, 8, 5, 0, PI);

arc(340, 400, 8, 5, 0, PI);
arc(348, 400, 8, 5, PI, 0);
arc(356, 400, 8, 5, 0, PI);

arc(380, 388, 8, 5, 0, PI);
arc(388, 388, 8, 5, PI, 0);
arc(396, 388, 8, 5, 0, PI);

arc(420, 400, 8, 5, 0, PI);
arc(428, 400, 8, 5, PI, 0);
arc(436, 400, 8, 5, 0, PI);

arc(460, 388, 8, 5, 0, PI);
arc(468, 388, 8, 5, PI, 0);
arc(476, 388, 8, 5, 0, PI);

arc(500, 400, 8, 5, 0, PI);
arc(508, 400, 8, 5, PI, 0);
arc(516, 400, 8, 5, 0, PI);

arc(540, 388, 8, 5, 0, PI);
arc(548, 388, 8, 5, PI, 0);
arc(556, 388, 8, 5, 0, PI);

arc(580, 400, 8, 5, 0, PI);
arc(588, 400, 8, 5, PI, 0);
arc(596, 400, 8, 5, 0, PI);

arc(620, 388, 8, 5, 0, PI);
arc(628, 388, 8, 5, PI, 0);
arc(636, 388, 8, 5, 0, PI);

arc(660, 400, 8, 5, 0, PI);
arc(668, 400, 8, 5, PI, 0);
arc(676, 400, 8, 5, 0, PI);

arc(700, 388, 8, 5, 0, PI);
arc(708, 388, 8, 5, PI, 0);
arc(716, 388, 8, 5, 0, PI);

arc(740, 400, 8, 5, 0, PI);
arc(748, 400, 8, 5, PI, 0);
arc(756, 400, 8, 5, 0, PI);

arc(780, 388, 8, 5, 0, PI);
arc(788, 388, 8, 5, PI, 0);
arc(796, 388, 8, 5, 0, PI);

//lake thing
fill(255, 255, 255);
noStroke();
beginShape();
curveVertex(376, 379);
curveVertex(376, 379);
curveVertex(383, 400);
curveVertex(389, 429);
curveVertex(318, 465);
curveVertex(257, 519);
curveVertex(338, 564);
curveVertex(502, 564);
curveVertex(524, 513);
curveVertex(464, 465);
curveVertex(430, 411);
curveVertex(400, 379);
curveVertex(376, 379);
endShape();

fill(120, 192, 255, 90);
noStroke();
beginShape();
curveVertex(376, 379);
curveVertex(376, 379);
curveVertex(383, 400);
curveVertex(389, 429);
curveVertex(318, 465);
curveVertex(257, 519);
curveVertex(338, 564);
curveVertex(502, 564);
curveVertex(524, 513);
curveVertex(464, 465);
curveVertex(430, 411);
curveVertex(400, 379);
curveVertex(376, 379);
endShape();


//orange transparency
fill(237, 220, 55, 90);
noStroke();
beginShape();
curveVertex(376, 379);
curveVertex(376, 379);
curveVertex(383, 400);
curveVertex(389, 429);

curveVertex(358, 465);
curveVertex(297, 519);
curveVertex(378, 544);
curveVertex(462, 544);
curveVertex(484, 513);
curveVertex(424, 465);

curveVertex(430, 411);
curveVertex(400, 379);
curveVertex(376, 379);
endShape();

//orange solid
fill(237, 220, 55);
noStroke();
beginShape();
curveVertex(386, 379);
curveVertex(386, 379);
curveVertex(393, 400);
curveVertex(399, 429);

curveVertex(378, 455);
curveVertex(364, 476);
curveVertex(317, 509);
curveVertex(398, 534);

curveVertex(442, 534);
curveVertex(464, 503);
curveVertex(430, 490);
curveVertex(404, 455);

curveVertex(420, 411);
curveVertex(390, 379);
curveVertex(386, 379);
endShape();

//left sun rays
fill(255, 255, 0, 95);
beginShape();
vertex(367, 308);
vertex(1, 379);
vertex(20, 306);
vertex(372, 306);
endShape();

beginShape();
vertex(365, 265);
vertex(91, 28);
vertex(185, 0);
vertex(385, 255);
endShape();

beginShape();
vertex(356, 281);
vertex(17, 204);
vertex(15, 94);
vertex(366, 269);
endShape();

//center ray
beginShape();
vertex(399, 252);
vertex(325, 5);
vertex(475, 5);
vertex(401, 252);
endShape();


//right rays
fill(255, 255, 0, 95);
beginShape();
vertex(433, 308);
vertex(799, 379);
vertex(780, 306);
vertex(428, 306);
endShape();

beginShape();
vertex(435, 265);
vertex(709, 28);
vertex(615, 0);
vertex(415, 255);
endShape();

beginShape();
vertex(444, 281);
vertex(783, 204);
vertex(785, 94);
vertex(434, 269);
endShape();

//yolk sun
fill(255, 255, 0);
noStroke();
ellipse(400, 290, 180);

noFill();
stroke(255, 130, 0, 60);
strokeWeight(50);
arc(400, 290, 180, 180, 0, 0);

noFill();
stroke(255, 100, 0, 30);
strokeWeight(20);
arc(400, 290, 110, 110, 0, 0);


drawRightEgg(xRE, yRE);

drawLeftEgg(xLE, yLE);

}

//MOUSE CLICKING FUNCTION
function mouseClicked()
{

if(mouseX>160&&mouseX<600&&mouseY>175&&mouseY<425)
{
	xRE = 590;
	xLE = 250;
}

}

//FUNCTIONS DRAWING EGGS
function drawRightEgg(x,y)
{
	push();
translate(xRE, yRE);

//egg shadow
fill(122, 99, 51, 90);
noStroke();
ellipse(100, 144, 200, 60);

//egg
fill(255, 255, 240);
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

//egg shadow
fill(122, 99, 51, 90);
noStroke();
ellipse(-110, 144, 200, 60);

//egg
stroke(0, 0, 0);
strokeWeight(2);
fill(255, 255, 240);


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

}