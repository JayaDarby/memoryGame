function shuffle(array) {
    var copy = [], n = array.length, i;
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    return copy;
}


var outerDiv = document.createElement('div');
outerDiv.id = 'grab';
outerDiv.width = '610px';
document.body.appendChild(outerDiv);

var photoIds = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
var picIds = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];

var photoLinks = ['http://files.abovetopsecret.com/files/img/jt55203930.jpg',
                  'http://files.abovetopsecret.com/files/img/jt55203930.jpg',
                  'https://www.quantamagazine.org/wp-content/uploads/2013/06/AngelOakTree_articleSpan02.jpg',
                  'https://www.quantamagazine.org/wp-content/uploads/2013/06/AngelOakTree_articleSpan02.jpg',
                  'http://www.apogeephoto.com/march2011/Hitchman_photos/Joshua-trees-keys-view-road.jpg',
                  'http://www.apogeephoto.com/march2011/Hitchman_photos/Joshua-trees-keys-view-road.jpg',
                  'http://images.wookmark.com/126557_the-fountain-fountain-tree-of-life-none-1440x900-wallpaper_www.wall321.com_63.jpg',
                  'http://images.wookmark.com/126557_the-fountain-fountain-tree-of-life-none-1440x900-wallpaper_www.wall321.com_63.jpg',
                  'http://images.nationalgeographic.com/wpf/media-live/photos/000/230/cache/backlit-tree-sunlight_23017_600x450.jpg',
                  'http://images.nationalgeographic.com/wpf/media-live/photos/000/230/cache/backlit-tree-sunlight_23017_600x450.jpg',
                  'http://onebigphoto.com/uploads/2013/05/ponthus-beech-in-broc%C3%A9liande-forest-france.jpg',
                  'http://onebigphoto.com/uploads/2013/05/ponthus-beech-in-broc%C3%A9liande-forest-france.jpg',
                  'http://images.fineartamerica.com/images-medium-large/alone-tree-alex-stoen-photography.jpg',
                  'http://images.fineartamerica.com/images-medium-large/alone-tree-alex-stoen-photography.jpg',
                  'http://img.designswan.com/2011/10/fall/1.jpg',
                  'http://img.designswan.com/2011/10/fall/1.jpg'
                  ];

var shuffledPhotos = shuffle(photoLinks);

for(var i = 0; i < 16; i++){
    var myDiv = document.createElement('div');
    myDiv.style.width = '150px';
    myDiv.style.height = '100px';
    myDiv.style.border = "1px solid #000000";
    myDiv.style.float = 'left';
    //myDiv.style.backgroundColor = '#9E1919';
    myDiv.className = "myStyle";
    myDiv.id = photoIds[i];
    var myPic = document.createElement('img');
    myPic.src = 'http://globe-views.com/dcim/dreams/red/red-01.jpg';
    myPic.style.width = '150px';
    myPic.style.height = '100px';
    myPic.className = 'thePics';
    myPic.id = picIds[i];
    document.getElementById('grab').appendChild(myDiv);
    document.getElementById(photoIds[i]).appendChild(myPic);

}

var allPics = document.getElementsByClassName('thePics');
for(var j = 0; j < allPics.length; j++){
  addEventListenerFor(allPics[j], j);
}

var counter = 0, match = 0; score = 0; game = 0;
var current, current2, currentId, currentId2;

var myScore = document.createElement('p');
myScore.innerHTML = 'Score: '+score;
myScore.id = 'theScore';
myScore.float = 'left';
document.getElementById('grab').appendChild(myScore);
var gamesWon = document.createElement('p');
gamesWon.innerHTML = 'Games Won: '+game;
gamesWon.float = 'left';
gamesWon.id = 'theGame';
document.getElementById('grab').appendChild(gamesWon);
var myButton = document.createElement('button');
myButton.innerHTML = 'Play Again!';
myButton.id = 'theButton';
myButton.float = 'right';
document.getElementById('grab').appendChild(myButton);

document.getElementById('theButton').addEventListener('click', function(){
	for(var j = 0; j < allPics.length; j++){
		allPics[j].src = 'http://globe-views.com/dcim/dreams/red/red-01.jpg';
	}
});


function addEventListenerFor(thePic, j){
	thePic.addEventListener('click', function(){
      thePic.src= shuffledPhotos[j];
      if(counter ===0){
      	counter++;
      	currentId = this.getAttribute('id');
      	//console.log(currentId);
      	current = document.getElementById(currentId);
      	//console.log(current);
      }
      else if(counter ===1 && this.getAttribute('id')!==currentId){
      	counter = 0;
      	currentId2 = this.getAttribute('id');
      	//console.log(currentId2);
      	current2 = document.getElementById(currentId2);
      	//console.log(current2);
      	if(current2.src !== current.src){
      		setTimeout(function(){current2.src = 'http://globe-views.com/dcim/dreams/red/red-01.jpg'; }, 600);
      		setTimeout(function(){current.src = 'http://globe-views.com/dcim/dreams/red/red-01.jpg'; }, 600);
      	}
      	else {
      	  match++;  
      	  score+=10;
      	  document.getElementById('theScore').innerHTML = 'Score: '+score;
      	} 
      if(match === 8){
      	console.log('Congratulations! You Won!');
      	match = 0;
      	score = 0;
      	game++;
      	document.getElementById('theScore').innerHTML = 'Score: '+score;
      	document.getElementById('theGame').innerHTML = 'Games Won: '+game;
      }	 
    }
  });
}
