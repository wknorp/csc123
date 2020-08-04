function setup()
{
	createCanvas(700, 500);
}

function draw()
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

}