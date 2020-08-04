var max_theta

function setup()
{
    createCanvas(600, 800);
    noStroke();
    max_theta=0;
}

function draw()
{
    var x, y, theta

    background(255);

    
//stem
noFill();
stroke(0, 100, 0);
strokeWeight(8);
line(300, 300, 300, 700);
fill(0, 100, 0);
triangle(305, 450, 310, 455, 305, 460);
triangle(305, 650, 310, 655, 305, 660);
triangle(295, 550, 290, 555, 295, 560);


noStroke();


    for (theta=0; theta<max_theta; theta+= 2*PI/600)
    {
        x= 300 + 150 * cos(6*theta/5)*cos(theta);
        y= 300 + 150 * cos(6*theta/5)*sin(theta);

        fill(175, 0, 0);
        ellipse (x, y, 2);
    }

    max_theta += 2*PI/600

    for (theta=0; theta<max_theta; theta+= 2*PI/400)
    {
        x= 300 + 100 * cos(6*theta/5)*cos(theta);
        y= 300 + 100 * cos(6*theta/5)*sin(theta);

        fill(220, 0, 0);
        ellipse (x, y, 2);
    }

    max_theta += 2*PI/400

   for (theta=0; theta<max_theta; theta+= 2*PI/200)
    {
        x= 300 + 50 * cos(6*theta/5)*cos(theta);
        y= 300 + 50 * cos(6*theta/5)*sin(theta);

        fill(255, 0, 0);
        ellipse (x, y, 2);
    }

    max_theta += 2*PI/200




fill(200, 220, 255, 90);
beginShape();
curveVertex(50, 400);
curveVertex(50, 400);
curveVertex(175, 150);
curveVertex(300, 100);
curveVertex(425, 150);
curveVertex(550, 400);
curveVertex(550, 400);
endShape();
rect(50, 400, 500, 300);
fill(150, 100, 10);
rect(50, 700, 500, 100);
ellipse(300, 100, 150, 50);
ellipse(300, 75, 50, 50)


}