var scaleBT= 1;
var xBT= 150;
var yBT= 150;
var rotBT= 0;

function setup() {
	createCanvas(600, 650);
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



//water
fill('#6DBBFF');
noStroke();
rect(0,220, 600, 430);

ellipse(-50, 200, 150, 100);
ellipse(50, 200, 150, 100);
ellipse(150, 200, 150, 100);
ellipse(250, 200, 150, 100);
ellipse(350, 200, 150, 100);
ellipse(450, 200, 150, 100);
ellipse(550, 200, 150, 100);

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


//fish
//body
fill(255, 255, 255);
ellipse(420, 450, 200, 140);
//mouth
fill('#6DBBFF');
ellipse(335, 480, 50, 30);
//eye
ellipse(350, 440, 20, 20);

//fish tail
push();
	translate(535,485)
	rotate(radians(315))
	fill(255, 255, 255);
	ellipse(0, 0, 80, 100);
	pop();
push();
	translate(535,400)
	rotate(radians(45))
	fill(255, 255, 255);
	ellipse(0, 0, 80, 100);
	pop();
//top gill
push();
	translate(400,350)
	rotate(radians(340))
	fill(255, 255, 255);
	ellipse(0, 0, 20, 70);
	pop();
push();
	translate(420,350)
	rotate(radians(200))
	fill(255, 255, 255);
	ellipse(0, 0, 20, 70);
	pop();
//gill arcs
noFill();
stroke('#6DBBFF');
strokeWeight(5);
arc(430, 450, 100, 80, 3*PI/2, PI/2);

arc(430, 450, 70, 60, 3*PI/2, PI/2);

arc(430, 450, 50, 40, 3*PI/2, PI/2);


//grass
stroke('#2EE8A6');
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





}