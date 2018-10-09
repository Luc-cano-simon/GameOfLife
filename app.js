

// tableau avec coordonnées X et Y 


var x = 10;
var y = 20;

var empty=
{
	name:"",
	icone:"&nbsp;"
};

// fonction tableau

function table (x, y) 
{     
	for (var i = 0; i < x; i++) 
	{                   
		$("#grille").append( '<tr data-id="'+i+'"></tr>');                     
		for (var j = 0; j < y; j++) 
		{                       
			$("#grille tr:last-child").append( '<td id="'+i+'C'+j+'">'+empty.icone+ '</td>' );

		}          
	}  
}

// On appel la fonction table

table(x, y);


// Création du tableau à mélanger 

var xtab = new Array(1,2,3,4, 5, 6, 7, 8, 9, 10);
var ytab = new Array(1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);



// Fonction mélanger Y

function shuffleY(ytab)
{
	var j, x, i;
	for(i=ytab.length - 1; i>0; i--)
	{
		j = Math.floor(Math.random() * (i+ 1));
		x = ytab[i];
		ytab[i] = ytab[j];
		ytab[j]=x;
	}
	return ytab;
}


// Fonction mélanger X


function shuffleX(xtab)
{
	var j, x, i;
	for(i=xtab.length - 1; i>0; i--)
	{
		j = Math.floor(Math.random() * (i + 1));
		x = xtab[i];
		xtab[i] = xtab[j];
		xtab[j]=x;
	}
	return xtab;
}

// On appel la fonction shuffleX & shuffleY


shuffleX(xtab);
shuffleY(ytab);



var tabXshu = xtab;
var tabYshu = ytab;

// Fonction click pour ajouter de l herbe


$( "#herbe" ).click(function() 
{
	herbe = setInterval(function()
	{
		shuffleX(xtab);
		shuffleY(ytab);
		$('vegetals.class.js', function() 
		{
			$("#" + tabXshu[3] + "C" + tabYshu[14]).append(grass.apparence);
		})
		
	},
	500);

});



// Fonction click pour ajouter des carnivors




$( "#carnivor" ).click(function() 
{
	carnivor = setInterval(function()
	{
		shuffleX(xtab);
		shuffleY(ytab);
		$('carnivorous.class.js', function() 
		{
			$("#" + tabXshu[3] + "C" + tabYshu[14]).append(lion.apparence);
			$("#" + tabXshu[7] + "C" + tabYshu[8]).append(tigre.apparence);
		})
	},
	2500);
});


// Fonction click pour ajouter les Vegetariens

$( "#vegetarien" ).click(function() 
{
	vegetarien = setInterval(function()
	{
		shuffleX(xtab);
		shuffleY(ytab);
		$('herbivorous.class.js', function() 
		{
			$("#" + tabXshu[3] + "C" + tabYshu[17]).append(biche.apparence);

		})

	},
	800);

});

// Pour arrêter les differents setInterval

$( "#stop" ).click(function() 

{
	clearInterval(herbe);
	clearInterval(carnivor);
	clearInterval(vegetarien);
	clearInterval(stop);
});


// on stock mes fonction aléatoires dans les deux variables


var randomX = x_Aleatoire();
var randomY = nbAleatoir();


console.log("randomX = "+randomX);
console.log("randomY = "+randomY);

// Fonction aléatoire pour X

function nbAleatoir()
{
return Math.floor(Math.random() * Math.floor(20));}

// Fonction aléatoire pour Y

function x_Aleatoire()
{
	return Math.floor(Math.random() * Math.floor(10));
}


var lion = new Carnivorous("Lion",'<img src="lion.png" width="60px">', 100 ,-20 , randomX , randomY);
var tigre = new Carnivorous("Tigre",'<img src="tigre.png" width="60px">', 100 ,-20 , randomX , randomY);

var biche = new Herbivorous("Biche",'<img src="biche.png" width="60px">', 5 , randomX , randomY);


// On fait vivre un peu tout ça 


$( "#bouger" ).click(function() 

{
	stop = setInterval(function()
	{
		lion.move();
	    tigre.move();
		biche.move();
		
	},
	2000);
});
		


// Fonction attaque (in progress)


// function att($pv)
// 	{
// 		if (lion == biche) 
// 		{
// 			this.pv = 0;
// 			hide(biche)
// 		}
// 		console.log(biche)
// 	}