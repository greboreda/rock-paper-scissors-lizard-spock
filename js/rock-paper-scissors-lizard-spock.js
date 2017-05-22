var rockPaperScissorsLizardSpockManager = (function(){
	
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
	
	function getPlayers() {
		return {
			ROCK: 'ROCK',
			PAPER: 'PAPER',
			SCISSORS: 'SCISSORS',
			LIZARD: 'LIZARD',
			SPOCK: 'SPOCK'
		};
	};
	
	var names = getPlayers();
	
	var winnings = [
		{
			name: names.ROCK,
			winnings: [
				{ name: names.LIZARD, message: messages.ROCK_CRUSHES_LIZARD },
				{ name: names.SCISSORS, message: messages.ROCK_CRUSHES_SCISSORS }
			]
		},
		{
			name: names.PAPER,
			winnings: [
				{ name: names.SPOCK, message: messages.PAPER_DISPROVES_SPOCK },
				{ name: names.ROCK, message: messages.PAPER_COVERS_ROCK }
			]
		},
		{
			name: names.SCISSORS,
			winnings: [
				{ name: names.PAPER, message: messages.SCISSORS_CUTS_PAPER },
				{ name: names.LIZARD, message: messages.SCISSORS_DECAPITATES_LIZARD }
			]
		},
		{
			name: names.LIZARD,
			winnings: [
				{ name: names.PAPER, message: messages.LIZARD_EATS_PAPER },
				{ name: names.SPOCK, message: messages.LIZARD_POISONS_SPOCK }
			]
		},
		{
			name: names.SPOCK,
			winnings: [
				{ name: names.SCISSORS, message: messages.SPOCK_SMASHES_SCISSORS },
				{ name: names.ROCK, message: messages.SPOCK_VAPORIZES_ROCK }
			]
		}
	];
	
	function isValid(player) {
		return Object.keys(names).indexOf(player) !== -1;
	}
	
	
	function getMessageIfWins(p1, p2) {		
		var w = winnings.find(function(current) {return current.name === p1})
				.winnings
				.find(function(current) {return current.name === p2});
		if(!w) return null;
		return w.message;
	}
	
	function play(player1, player2) {
		
		if(!isValid(player1) || !isValid(player2)) {
			throw new Error('not valid game player');
		}
		
		if(player1 === player2) {
			var message = player1 + ' ties vs ' + player2;
			return {
				winner: messages.TIE,
				message: message,
				repr: 'There is no winner! ' + message
			};			
		}

		var p1winsMessage = getMessageIfWins(player1,player2);
		
		var winnerNum, winner, looser, message;
		
		if(p1winsMessage) {
			winnerNum = 1;
			winner = player1;
			looser = player2;
			message = p1winsMessage;
		} else {
			winnerNum = 2;
			winner = player2;
			looser = player1;
			message = getMessageIfWins(player2, player1);			
		}
		
		return {
			winner: 'PLAYER ' + winnerNum,
			value: winner,
			message: message,
			repr: 'Player' + winnerNum +' wins with ' + winner + ' vs ' + looser + ' because ' + message + '!'
		};
	}
		
	return {
		options: getPlayers(),
		messages: getMessages(),
		play: play
	};

})();
