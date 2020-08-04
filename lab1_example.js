
function setup() {
	createCanvas(1000, 1000);
}


function draw() {
	background('#01521D');

	
// background

	fill('#49CBFA')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(0, 0, 500, 120)

	fill('#49CBFA')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(0, 100, 500, 140)

	fill('#49CBFA')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(450, 0, 550, 290)

	fill('#49CBFA')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(200, 50, 400, 250)

	fill('#005A7A')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(300, 200, 600, 400)

	fill('#007DAB')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(50, 120, 200, 280)

	fill('#49CBFA')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(650, 30, 300, 80)

	fill('#007DAB')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(230, 150, 300, 150)

	fill('#005270')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(150, 300, 300, 50)

	fill('#007DAB')
	stroke('#00B5F7')
	strokeWeight(5)
	rect(480, 120, 300, 150)

// background leaves

	fill('#36D936');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(0, 0, 800, 960, 0, 500);

	fill('#36D936');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(0, 1000, 1000, 0, 1000, 900);



// upper arms brown

	stroke('#9F670C');
	strokeWeight(20);
	line(560, 540, 760, 200);

	stroke('#9F670C');
	strokeWeight(20);
	line(440, 540, 240, 200);


// white legs

	stroke(255, 255, 255);
	strokeWeight(20);
	line(560, 580, 620, 800);

	stroke(255, 255, 255);
	strokeWeight(20);
	line(440, 580, 380, 800);


	stroke(255, 255, 255);
	strokeWeight(20);
	line(560, 560, 680, 560);
	stroke(255, 255, 255);
	strokeWeight(20);
	line(680, 560, 750, 800);

	stroke(255, 255, 255);
	strokeWeight(20);
	line(440, 560, 300, 560);
	stroke(255, 255, 255);
	strokeWeight(20);
	line(300, 560, 230, 800);

	fill(255, 255, 255);
	ellipse(500, 560, 130, 80);


// wing/ colorful abdomen thing

	fill('#02DEA0');
	noStroke();
	ellipse(500, 300, 250, 300);


	fill('#23F9FF');
	ellipse(500, 300, 150, 200);


// head

	noStroke();
	fill('#9F670C');
	ellipse(500, 490, 150, 90);

// eyes

	fill(0, 0, 0);
	ellipse(485, 470, 20, 20);
	fill(0, 0, 0);
	ellipse(515, 470, 20, 20);
	fill(0, 0, 0);
	ellipse(460, 470, 16, 16);
	fill(0, 0, 0);
	ellipse(540, 470, 16, 16);

	
// pupils

	fill('#02A879');
	ellipse(485, 470, 10, 10);
	fill('#02A879');
	ellipse(515, 470, 10, 10);
	fill('#02A879');
	ellipse(460, 470, 7, 7);
	fill('#02A879');
	ellipse(540, 470, 7, 7);

	
// tongue

	
	push();
	translate(505,505)
	rotate(radians(340))
	fill('#AB0A3A');
	triangle(0, 0, 10, 15, 20, 0);
	pop();

// smile

	stroke(0, 0, 0);
	strokeWeight(5);
	noFill();
	arc(500, 490, 50, 25, 0*Math.PI, 1*Math.PI);



// yellow and orange curves on abdomen

	stroke('#F0DD00');
	strokeWeight(15);
	noFill();
	arc(480, 300, 105, 200, PI/2, 3*PI/2);
	stroke('#F0DD00');
	strokeWeight(15);
	noFill();
	arc(520, 300, 105, 200, 3*PI/2, PI/2);

	stroke('#FFBB0B');
	strokeWeight(15);
	noFill();
	arc(440, 300, 115, 250, PI/2, 3*PI/2);
	stroke('#FFBB0B');
	strokeWeight(15);
	noFill();
	arc(560, 300, 115, 250, 3*PI/2, PI/2);


// triangles on abdomen
	//orange fill yellow stoke

	fill('#FFBB0B');
	stroke('#F0DD00');
	strokeWeight(5);
	triangle(400, 350, 410, 370, 420, 350);
	fill('#FFBB0B');
	stroke('#F0DD00');
	strokeWeight(5);
	triangle(530, 250, 540, 270, 550, 250);
	fill('#FFBB0B');
	stroke('#F0DD00');
	strokeWeight(5);
	triangle(490, 370, 500, 350, 510, 370);
	fill('#FFBB0B');
	stroke('#F0DD00');
	strokeWeight(5);
	triangle(490, 180, 500, 160, 510, 180);
	fill('#FFBB0B');
	stroke('#F0DD00');
	strokeWeight(5);
	triangle(460, 280, 470, 260, 480, 280);
	fill('#FFBB0B');
	stroke('#F0DD00');
	strokeWeight(5);
	triangle(583, 310, 593, 330, 603, 310);
	fill('#FFBB0B');
	stroke('#F0DD00');
	strokeWeight(5);
	triangle(550, 410, 560, 390, 570, 410);


	//yellow fill, orange stroke

	fill('#F0DD00');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(450, 330, 460, 350, 470, 330);
	fill('#F0DD00');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(490, 420, 500, 440, 510, 420);
	fill('#F0DD00');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(410, 220, 420, 200, 430, 220);
	fill('#F0DD00');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(395, 280, 405, 300, 415, 280);
	fill('#F0DD00');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(575, 230, 585, 210, 595, 230);
	fill('#F0DD00');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(490, 230, 500, 210, 510, 230);
	fill('#F0DD00');
	stroke('#FFBB0B')
	strokeWeight(5)
	triangle(520, 310, 530, 330, 540, 310);




}