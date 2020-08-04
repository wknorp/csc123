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
	strokeWeight(40);
	rect(150, 20, 600, 520);

	//pulley
	noFill();
	strokeWeight(15);
	stroke(255, 255, 0);
	arc(-100, 250, 500, 200, 0, PI);
	arc(400, 250, 500, 200, 0, PI);
	arc(900, 250, 500, 200, 0, PI);

}