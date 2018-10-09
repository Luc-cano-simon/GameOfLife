function Carnivorous (nom, apparence, hp, attack, x , y )
{
	this.nom = nom;
	this.apparence = apparence;
	this.hp = hp;
	this.attack = attack;
	this.x = x;
	this.y = y;

	var currentCord = [this.x, this.y, "#"+this.x+"C"+this.y]
	


	this.getid = function(currentCord)
	{

		var Random_displacement = Math.floor(Math.random() * Math.floor(4));
		
		if (Random_displacement == 0 ) 
		{
			var currentX = currentCord[0]+1;
			var currentY = currentCord[1];
		}
		if (Random_displacement == 1 ) 
		{
			var currentX = currentCord[0]-1;
			var currentY = currentCord[1];
		}
		if (Random_displacement == 2 ) 
		{
			var currentX = currentCord[0];
			var currentY = currentCord[1]+1;
		}
		if (Random_displacement == 3 ) 
		{
			var currentX = currentCord[0];
			var currentY = currentCord[1]-1;
		}

		currentX=limitMondex(currentX);
		currentY=limitMondey(currentY)	;
		var res = "#"+currentX+ "C" +currentY;
		var array = [currentX,currentY,res];
		return array;
	}
		
	this.move = function()
	{
		$(currentCord[2]).empty();
		currentCord = this.getid(currentCord);
		$(currentCord[2]).append(this.apparence);
	} 
}

		



function limitMondex(currentCord)
{

	if (currentCord< 0 )
	{
		currentCord+=1;
	}
	if (currentCord> 10)
	{
		currentCord-=1;
	}
	console.log("x "+currentCord);

	return currentCord;
}

function limitMondey(currentCord)
{

	
	if (currentCord< 0)
	{
		currentCord +=1;
	}
	if (currentCord > 20)
	{
		currentCord -=1;
	}
	console.log("y "+currentCord);

	return currentCord;
}




// var lion = new Carnivorous("Lion",'<img src="lion.png" width="60px">', 100 ,-20 , 5 , 10);
// var tigre = new Carnivorous("Tigre",'<img src="tigre.png" width="60px">', 50 ,-20 , 5 , 10);






