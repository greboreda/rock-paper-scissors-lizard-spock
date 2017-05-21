var names = {
	ROCK: 'ROCK',
	PAPER: 'PAPER',
	SCISSORS: 'SCISSORS',
	LIZARD: 'LIZARD',
	SPOCK: 'SPOCK'
};

function Option() {
	if(this.constructor === Option) {
		throw new Error("Cant't instantiate Option");
	}
}
Option.prototype.getWinning = function(oponent) {
	for(var i=0 ; i<this.winnings.length ; i++) {
		var current = this.winnings[i];
		if(oponent.name === current.name) {
			return {
				result: true,
				message: current.message
			};
		}
	}
}
Option.prototype.wins = function(oponent) {
	if(oponent.name === this.name) {
		return { result: 'TIE'};
	}
	var winning = this.getWinning(oponent);
	if(!winning) {
		var message = oponent.getWinning(this).message;
		return {
			result: false,
			message: message
		};
	}
	return winning;
}

function Rock() {
	this.name = names.ROCK;
	this.winnings = [
		{ name: names.LIZARD,		message: 'Rock crushes Lizard'},
		{ name: names.SCISSORS,		message: 'Rock crushes Scissors'}
	];
};
Rock.prototype = Object.create(Option.prototype);

function Paper() {
	this.name = names.PAPER;
	this.winnings = [
		{ name: names.SPOCK,		message: 'Paper disproves Spock'},
		{ name: names.ROCK,			message: 'Paper covers Rock'}
	];
}
Paper.prototype = Object.create(Option.prototype);


function Scissors() {
	this.name = names.SCISSORS;
	this.winnings =  [
		{ name: names.PAPER,		message: 'Scissors cuts Paper'},
		{ name: names.LIZARD,		message: 'Scissors decapitates Lizard'}
	];
}
Scissors.prototype = Object.create(Option.prototype);


function Lizard() {
	this.name = names.LIZARD;
	this.winnings = [
		{ name: names.PAPER,		message: 'Lizard eats Paper'},
		{ name: names.SPOCK,		message: 'Lizard poisons Spock'}
	]
};
Lizard.prototype = Object.create(Option.prototype);

function Spock() {
	this.name = names.SPOCK;
	this.winnings = [
		{ name: names.SCISSORS,	message: 'Spock smashes Scissors'}, 
		{ name: names.ROCK,		message: 'Spock vaporizes Rock'}
	];
}
Spock.prototype = Object.create(Option.prototype);	
	

var rockPaperScissorsLizardSpockManager = (function(){
	
})();



