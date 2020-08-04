function setup()
{
   createCanvas(800, 500);
   noLoop();
}
/* function to evaluate the implicit equation for a
circle */
function impl_circ(cx, cy, radi, in_x, in_y)
{
return ((in_x-cx)*(in_x-cx) + (in_y-cy)*(in_y-cy) - radi*radi);
}
function imp_line(x, y, x0, y0, x1, y1){
	return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}
function distance(x0, y0, x1, y1)
{
	return sqrt(pow(x0-x1,2) + pow(y0-y1, 2));
}
function draw()
{
background(255);
noStroke();

//sunset background
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
	d= distance(x, y, width/2, 0);
	f= distance(x, y, width/2, height);
if (imp_line(x, y, 0, 220, width, 220) < 0.0)
        {
           fill(240+random(-10, 10), 230+random(-10,10)-d/2, 10+random(-5,5));
} 
//ground 
else {
           fill(230+random(-50,25), 100+random(-20,20)-f/5, 200+random(-20, 10)-f/3);
        }
        ellipse(x+random(-1,1), y+random(-1,1), 14);
    }
} 


//blue sky
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
	d= distance(x, y, width/2, 0);
	f= distance(x, y, width/2, height);
if (imp_line(x, y, 0, 100, width, 100) < 0.0)
        {
           fill(65+random(-10, 10)-d/3, 190+random(-10,10)-d/3, 220+random(-10,10)-d/3);
} 
//ground
else {
           fill(0, 0);
        }
        ellipse(x+random(-1,1), y+random(-1,1), 14);
    }
} 
//cloud silhouette

//darkest blue, left
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(0, 90, 50, x, y) < 0.0)
        {
           fill(25+random(-5,5), 80+random(-20,10), 110+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(0, 70, 50, x, y) < 0.0)
	        {
	           fill(25+random(-5,5), 80+random(-20,10), 110+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 

//2nd darkest blue, left
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(50, 90, 50, x, y) < 0.0)
        {
           fill(25+random(-5,5), 80+random(-20,10), 110+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(50, 70, 50, x, y) < 0.0)
	        {
	           fill(25+random(-5,5), 80+random(-20,10), 110+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 

//mid dark blue, left
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(100, 90, 50, x, y) < 0.0)
        {
           fill(35+random(-5,5), 90+random(-20,10), 110+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(100, 70, 50, x, y) < 0.0)
	        {
	           fill(35+random(-5,5), 90+random(-20,10), 110+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 

//mid light teal, left
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(150, 90, 50, x, y) < 0.0)
        {
           fill(45+random(-5,5), 120+random(-20,10), 130+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(150, 70, 50, x, y) < 0.0)
	        {
	           fill(45+random(-5,5), 120+random(-20,10), 130+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 

//2nd lightest teal, left
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(200, 90, 50, x, y) < 0.0)
        {
           fill(64+random(-5,5), 140+random(-20,10), 140+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 	
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(200, 70, 50, x, y) < 0.0)
	        {
	           fill(64+random(-5,5), 140+random(-20,10), 140+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 	

//lightest teal, left
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(250, 90, 50, x, y) < 0.0)
        {
           fill(70+random(-5,5), 155+random(-20,10), 150+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(250, 70, 50, x, y) < 0.0)
	        {
	           fill(70+random(-5,5), 155+random(-20,10), 150+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 



//darkest blue, right
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(800, 90, 50, x, y) < 0.0)
        {
           fill(25+random(-5,5), 80+random(-20,10), 110+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(800, 70, 50, x, y) < 0.0)
	        {
	           fill(25+random(-5,5), 80+random(-20,10), 110+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 

//2nd darkest blue, right
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(750, 90, 50, x, y) < 0.0)
        {
           fill(25+random(-5,5), 80+random(-20,10), 110+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(750, 70, 50, x, y) < 0.0)
	        {
	           fill(25+random(-5,5), 80+random(-20,10), 110+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 

//mid dark blue, right
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(700, 90, 50, x, y) < 0.0)
        {
           fill(35+random(-5,5), 90+random(-20,10), 110+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(700, 70, 50, x, y) < 0.0)
	        {
	           fill(35+random(-5,5), 90+random(-20,10), 110+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 

//mid light teal, right
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(650, 90, 50, x, y) < 0.0)
        {
           fill(45+random(-5,5), 120+random(-20,10), 130+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(650, 70, 50, x, y) < 0.0)
	        {
	           fill(45+random(-5,5), 120+random(-20,10), 130+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 

//2nd lightest teal, right
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(600, 90, 50, x, y) < 0.0)
        {
           fill(64+random(-5,5), 140+random(-20,10), 140+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 	
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(600, 70, 50, x, y) < 0.0)
	        {
	           fill(64+random(-5,5), 140+random(-20,10), 140+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 	

//lightest teal, right
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(550, 90, 50, x, y) < 0.0)
        {
           fill(70+random(-5,5), 155+random(-20,10), 150+random(-10,20), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
	//up
	for (var y=0; y < height; y+= 5) {
	for (var x=0; x < width; x+=5) {
	if (impl_circ(550, 70, 50, x, y) < 0.0)
	        {
	           fill(70+random(-5,5), 155+random(-20,10), 150+random(-10,20), 100);} 
	    else {
	           fill(0, 0);
	        }
	        ellipse(x+random(-2,2), y+random(-2,2), 8);
	    }
	} 


//bush
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(650, 140, 40, x, y) < 0.0)
        {
           fill(0+random(0, 30), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (x>640&&x<660&&y>177&&y<222)
        {
           fill(0+random(0, 30), 100);} 
    else {
           fill(0, 0);
        }
        ellipse(x+random(-2,2), y+random(-2,2), 8);
    }
} 

//sun
for (var y=0; y < height; y+= 5) {
for (var x=0; x < width; x+=5) {
if (impl_circ(400, 0, 180, x, y) < 0.0)
        {
           fill(240+random(-10, 10), 230+random(-10,10), 10+random(-5,5));
} 
//ground
else {
           fill(0, 0);
        }
        ellipse(x+random(-1,1), y+random(-1,1), 14);
    }
} 





//end draw
}
