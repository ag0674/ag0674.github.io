//Amber Gomez app.js
// Enemies our player must avoid
var Enemy = function() {
    this.sprite = 'images/horse.png';
	this.speed= Math.floor(Math.random()*200)+50;
	this.x=-100;
	
	//enemy can be generated in 1 of 3 paths
	var yLocation=Math.floor(Math.random()*3)+1;
	switch (yLocation) {
		case 1:
			this.y=73;
			break;
		case 2:
			this.y=156;
			break;
		case 3:
			this.y=239;
			break;
	}
};

//generates new Enemies
Enemy.prototype.generate = function(){
	setInterval(function(){
	allEnemies.push(new Enemy());
		if (allEnemies[0].x>500){
			allEnemies.shift();
		console.log("popped an enemy");//pop enemy if off the screen
		}
	}, 1200); //creates new Enemy every 1.2 seconds
}

// Update the enemy's position by mutliplying movement by dt to run at same speed on all computers
Enemy.prototype.update = function(dt) {
	this.x+=this.speed*dt;
	
	//collison detection
	if(this.y== player.y){
		if (this.x<player.x+101 && this.x+101>player.x){
		player.reset();
		console.log ("collision");
		}
	}
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player who you will be
var Player = function() {
	this.sprite = 'images/snow.png';
	this.x=200;
	this.y=405;
};

//character selected is Snow
Player.prototype.snow= function(){
	this.sprite= 'images/snow.png';
}

//character selected is Frost
Player.prototype.frost=function(){
	this.sprite = 'images/frost.png';
}

//reset player to original position
Player.prototype.reset=function(){
	this.x=200;
	this.y=405;
}

//update player
Player.prototype.update = function(dt) {
	if (this.y==-10){
		window.alert("Winner! Click OK to play again");
		this.reset();
	}//player wins if it hits water
	
};

//player drawn on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);	
};

Player.prototype.handleInput= function(keys){
	//changes player position based on keys
	if (keys=='left' && this.x>0){
		this.x-=101;
	} else if (keys=='right' && this.x<402){
		this.x+=101;
	} else if (keys=='up' && this.y>0){
		this.y-=83;
	} else if (keys=='down' && this.y<405){
		this.y+=83;
	}
};

// This listens for key presses and sends the keys to your Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Object Instantiation
var player = new Player();
var allEnemies=[new Enemy(), new Enemy(), new Enemy()];
allEnemies[0].generate();
