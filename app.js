

// tableau 

var x = 11;
var y = 21;
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
table(x, y);




var xtab = new Array(1,2,3,4, 5, 6, 7, 8, 9, 10);
var ytab = new Array(1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);


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

shuffleX(xtab);
shuffleY(ytab);


var tabXshu = xtab;
var tabYshu = ytab;




// 


												// Fonction afficher les carnivorous
		
$('carnivorous.class.js', function() 
{
	$("#" + tabXshu[1] + "C" + tabYshu[4]).append(lion.nom);
	$("#" + tabXshu[2] + "C" + tabYshu[5]).append(tigre.nom);
})
												

												// Fonction Afficher les vegetals

$('vegetals.class.js', function() 
{
	$("#" + tabXshu[3] + "C" + tabYshu[14]).append(grass.nom);
})
		
// Fonction click pour commencer à faire pousser l'herbe




$( "#herbe" ).click(function() 
{
	stopHerbe = setInterval(function()
	{
		shuffleX(xtab);
		shuffleY(ytab);
		$('vegetals.class.js', function() 
		{
			$("#" + tabXshu[3] + "C" + tabYshu[14]).append(grass.nom);
		})
		
	},
	800);

});

											// Fonction pour arrêter tout grace au bouton STOOOOOP 
	
$( "#stop" ).click(function() 
{
	clearInterval(stopHerbe);
	clearInterval(stopCarnivor);
	
});

											// Fonction pour ajouter des Carnivores


$( "#carnivor" ).click(function() 
{
	stopCarnivor = setInterval(function()
	{
		shuffleX(xtab);
		shuffleY(ytab);
		$('carnivorous.class.js', function() 
		{
			$("#" + tabXshu[3] + "C" + tabYshu[14]).append(lion.nom);
		})
		
	},
	2500);

});


    // $("herbe").click(function()
    // {
    //     $('td').css("color", "green");
    // });
