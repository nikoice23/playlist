// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"X (EQUIS)",
	"artist":" Nicky Jam x J. Balvin ",
	"mp3Url":" https://open.spotify.com/track/39N9RPD9MRb5WmoLzNzPeA",
	"imageUrl":" https://genius.com/Nicky-jam-and-j-balvin-x-equis-lyrics",
	"producer": "Nicky Jam",
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3Url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageUrl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3Url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3Url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageUrl":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  

$(".songs").append("<p>Song " + mySong.title + "</p>");
$(".songs").append("<p>By:" + mySong.artist + "</p>");
$(".songs").append("<p>Song" + mySong.mp3Url + "</p>");
$(".songs").append("<p> imageUrl : <img src=  " + mySong.imageUrl + "</p>");

for(var i = 0; i < myPlayList.length; i++) {
    $(".playlist").append("<p>" + myPlayList[i].title + "</p>");
    $(".playlist").append("<p>" + myPlayList[i].artist + "</p>");
    $(".playlist").append("<p>" + myPlayList[i].mp3Url + "</p>");
    
}
});


function displayList(){


 
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
