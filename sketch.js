var myData;
var astronautlist =[];



function preload() {
	myData = loadJSON('assets/peopleInSpace.json');
}

function setup() {
  //colorMode(HSB);
	createCanvas(500, 500);
	
	
	for (var i = 0; i < myData.people.length; i++) {
    var astroData =myData.people[i]; //in the wrecket the index of the asutronaut. in this way in each cicle i will load the data of a single astronaut
		var newAstronaut = new Astronaut(astroData.name, astroData.launchdate, astroData.title, astroData.country);
		astronautlist.push(newAstronaut); //to create really the object
	}
}



function draw() {
	  background(0);
		for (var i = 0; i < myData.people.length; i++) {
    		var astro = astronautlist[i];
    		 
      	astro.move();
    		astro.display();
    }
		
	
}

function mouseClicked() {
  for (var i = 0; i < myData.people.length; i++) {
    var astro = astronautlist[i];
    		astro.clicked();
    		
    		
    
  }
}


 

  function Astronaut(hisName, date, ruolo, origins) {

    this.name = hisName;
    this.launchDate = date; //the date is a string of year, month, day
    this.title= ruolo;
    this.country = origins;
  	
    var daysInSpace =(Date.now() - Date.parse(this.launchDate))/1000 / 60 / 60 /24/ 2 ; // i get days
    
    this.radius = daysInSpace;
    
  	this.x = random(this.radius*1.5, width - this.radius*1.5);
  	this.y = random(this.radius, height - this.radius*2);
  
  	this.incrementX = 1;
  	this.incrementY = 1;
    this.col = color(255,100);
    this.black= color(0);
 


	this.display = function() {
        fill(this.col);
        noStroke();
    		ellipse(this.x, this.y, this.radius * 2);
    		// we what to add a test with the name of the astronaut, at the same posizion of the ball in x, but the y is ypos of ball + radius
    		
    		fill(255);
    		textAlign(CENTER);
    		text(this.name, this.x, this.y+this.radius+15);
    	
    		fill(this.black);
    		textAlign(CENTER);
    		text(this.title, this.x, this.y+this.radius+25);
    		
    		fill(this.black);
    		textAlign(CENTER);
    		text(this.country, this.x, this.y+this.radius+35);
	}
	
	this.clicked= function() {  //clicked is an arbitrarial name
	  if(dist(mouseX,mouseY,this.x,this.y)< this.radius){
      this.col= color(255,0,200);
      this.black=color(255,0,200);
    } else{this.col=color(255,100);
            this.black=(0);
    }
  }
  
  
   
	this.move = function() {
	  
  
	this.x=this.x+random(-1,1);
	this.y=this.y+random(-1,1);}
	
}