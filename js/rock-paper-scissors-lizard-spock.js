var rockPaperScissorsLizardSpockManager = (function(){
	
	var names = {
		ROCK: 'ROCK',
		PAPER: 'PAPER',
		SCISSORS: 'SCISSORS',
		LIZARD: 'LIZARD',
		SPOCK: 'SPOCK'
	};

	function getMessages() {
		return {
			TIE: 'TIE',
			ROCK_CRUSHES_LIZARD: 'Rock crushes Lizard',
			ROCK_CRUSHES_SCISSORS: 'Rock crushes Scissors',
			PAPER_COVERS_ROCK: 'Paper covers Rock',
			PAPER_DISPROVES_SPOCK: 'Paper disproves Spock',
			SCISSORS_CUTS_PAPER: 'Scissors cuts Paper',
			SCISSORS_DECAPITATES_LIZARD: 'Scissors decapitates Lizard',
			LIZARD_EATS_PAPER: 'Lizard eats Paper',
			LIZARD_POISONS_SPOCK: 'Lizard poisons Spock',
			SPOCK_SMASHES_SCISSORS: 'Spock smashes Scissors',
			SPOCK_VAPORIZES_ROCK: 'Spock vaporizes Rock'
		};		
	}
	
	var messages = getMessages();
	
	function Option() {
		if(this.constructor === Option) {
			throw new Error("Cant't instantiate Option");
		}
	}
	this.Option.prototype.getWinning = function(oponent) {
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
	this.Option.prototype.wins = function(oponent) {
		if(oponent.name === this.name) {
			return { result: messages.TIE};
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
			{ name: names.LIZARD,	message: messages.ROCK_CRUSHES_LIZARD },
			{ name: names.SCISSORS,	message: messages.ROCK_CRUSHES_SCISSORS }
		];
	};
	Rock.prototype = Object.create(this.Option.prototype);

	function Paper() {
		this.name = names.PAPER;
		this.winnings = [
			{ name: names.SPOCK,	message: messages.PAPER_DISPROVES_SPOCK },
			{ name: names.ROCK,		message: messages.PAPER_COVERS_ROCK }
		];
	}
	Paper.prototype = Object.create(this.Option.prototype);


	function Scissors() {
		this.name = names.SCISSORS;
		this.winnings =  [
		{ name: names.PAPER,		message: messages.SCISSORS_CUTS_PAPER },
		{ name: names.LIZARD,		message: messages.SCISSORS_DECAPITATES_LIZARD }
		];
	}
	Scissors.prototype = Object.create(this.Option.prototype);


	function Lizard() {
		this.name = names.LIZARD;
		this.winnings = [
			{ name: names.PAPER,	message: messages.LIZARD_EATS_PAPER },
			{ name: names.SPOCK,	message: messages.LIZARD_POISONS_SPOCK }
		]
	}
	Lizard.prototype = Object.create(this.Option.prototype);

	function Spock() {
		this.name = names.SPOCK;
		this.winnings = [
			{ name: names.SCISSORS,	message: messages.SPOCK_SMASHES_SCISSORS },
			{ name: names.ROCK,		message: messages.SPOCK_VAPORIZES_ROCK }
		];
	}
	Spock.prototype = Object.create(this.Option.prototype);

	function getModel() {
		return {
			Rock: Rock,
			Paper: Paper,
			Scissors: Scissors,
			Lizard: Lizard,
			Spock: Spock
		};
	}
	
	return {
		model: getModel(),
		messages: getMessages()
	};

})();
