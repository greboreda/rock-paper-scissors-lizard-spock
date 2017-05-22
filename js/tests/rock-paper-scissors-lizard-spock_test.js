QUnit.module("Test rockPaperScissorsLizardSpockManager", function() {

	QUnit.test("manager elements", function(assert) {
		assert.ok(rockPaperScissorsLizardSpockManager, 'manager exists');
		//assert.ok(rockPaperScissorsLizardSpockManager.messages, 'manager contains messages');
	});
	
	QUnit.test('exists all option names', function(assert) {
		var options = rockPaperScissorsLizardSpockManager.options;
		assert.ok(options.ROCK === "ROCK", 'ROCK option is defined');
		assert.ok(options.PAPER === "PAPER", 'PAPER option is defined');
		assert.ok(options.SCISSORS === "SCISSORS", 'SCISSORS option is defined');
		assert.ok(options.LIZARD === "LIZARD", 'LIZARD option is defined');
		assert.ok(options.SPOCK === "SPOCK", 'SPOCK option is defined');
	});

	var opts = rockPaperScissorsLizardSpockManager.options;
	var messages = rockPaperScissorsLizardSpockManager.messages;
	
	QUnit.module('Illegal values test', function() {
		
		var notValidOption = 'NOT_VALID_OPTION';
		
		QUnit.test('Player 1 invalid value', function(assert) {
			assert.throws(function() {
				rockPaperScissorsLizardSpockManager.play(notValidOption, opts.ROCK);
			}, 'throwed error');
		});

		QUnit.test('Player 2 invalid value', function(assert) {
			assert.throws(function() {
				rockPaperScissorsLizardSpockManager.play(opts.ROCK, notValidOption);
			}, 'throwed error');
		});

		QUnit.test('Player 1 and 2 invalid values', function(assert) {
			assert.throws(function() {
				rockPaperScissorsLizardSpockManager.play(notValidOption, notValidOption);
			}, 'throwed error');
		});
		
	});
	
	QUnit.module('Rock tests', function() {

		QUnit.test('Rock ties vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.ROCK);
			assert.equal(r.winner, messages.TIE);
			assert.equal(r.message, 'ROCK ties vs ROCK');
		});
		QUnit.test('Rock wins vs Lizzard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.LIZARD);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.ROCK,);
			assert.equal(r.message, messages.ROCK_CRUSHES_LIZARD);
		});
		QUnit.test('Rock wins vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.SCISSORS);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.ROCK);
			assert.equal(r.message, messages.ROCK_CRUSHES_SCISSORS);
		});
		QUnit.test('Rock looses vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.PAPER);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.PAPER);
			assert.equal(r.message, messages.PAPER_COVERS_ROCK);
		});
		QUnit.test('Rock looses vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.SPOCK);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.SPOCK);
			assert.equal(r.message, messages.SPOCK_VAPORIZES_ROCK);
		});

	});

	
	QUnit.module( "Paper tests", function() {
		
		QUnit.test('Paper ties vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.PAPER);
			assert.equal(r.winner, messages.TIE);
			assert.equal(r.message, 'PAPER ties vs PAPER');
		});
		QUnit.test('Paper wins vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.ROCK);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.PAPER);
			assert.equal(r.message, messages.PAPER_COVERS_ROCK);
		});
		QUnit.test('Paper wins vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.SPOCK);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.PAPER);
			assert.equal(r.message, messages.PAPER_DISPROVES_SPOCK);
		});
		QUnit.test('Paper looses vs Lizard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.LIZARD);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.LIZARD);
			assert.equal(r.message, messages.LIZARD_EATS_PAPER);
		});
		QUnit.test('Paper looses vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.SCISSORS);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.SCISSORS);
			assert.equal(r.message, messages.SCISSORS_CUTS_PAPER);
		});
		
	});
	
	
	QUnit.module( "Scissors tests", function() {
		
		QUnit.test('Scissors ties vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.SCISSORS);
			assert.equal(r.winner, messages.TIE);
			assert.equal(r.message, 'SCISSORS ties vs SCISSORS');
		});
		QUnit.test('Scissors wins vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.PAPER);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.SCISSORS);
			assert.equal(r.message, messages.SCISSORS_CUTS_PAPER);
		});
		QUnit.test('Scissors wins vs Lizard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.LIZARD);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.SCISSORS);
			assert.equal(r.message, messages.SCISSORS_DECAPITATES_LIZARD);
		});
		QUnit.test('Scissors looses vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.ROCK);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.ROCK);
			assert.equal(r.message, messages.ROCK_CRUSHES_SCISSORS);
		});
		QUnit.test('Scissors looses vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.SPOCK);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.SPOCK);
			assert.equal(r.message, messages.SPOCK_SMASHES_SCISSORS);
		});
		
	});
	
	
	QUnit.module( "Lizard tests", function() {
		
		QUnit.test('Lizard ties vs Lizard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.LIZARD);
			assert.equal(r.winner, messages.TIE);
			assert.equal(r.message, 'LIZARD ties vs LIZARD');
		});
		QUnit.test('Lizard wins vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.PAPER);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.LIZARD);
			assert.equal(r.message, messages.LIZARD_EATS_PAPER);
		});
		QUnit.test('Lizard wins vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.SPOCK);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.LIZARD);
			assert.equal(r.message, messages.LIZARD_POISONS_SPOCK);
		});
		QUnit.test('Lizard looses vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.SCISSORS);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.SCISSORS);
			assert.equal(r.message, messages.SCISSORS_DECAPITATES_LIZARD);
		});
		QUnit.test('Lizard looses vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.ROCK);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.ROCK);
			assert.equal(r.message, messages.ROCK_CRUSHES_LIZARD);
		});
		
	});
	
	
	QUnit.module( "Spock tests", function() {
		
		QUnit.test('Spock ties vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.SPOCK);
			assert.equal(r.winner, messages.TIE);
			assert.equal(r.message, 'SPOCK ties vs SPOCK');
		});
		QUnit.test('Spock wins vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.ROCK);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.SPOCK);
			assert.equal(r.message, messages.SPOCK_VAPORIZES_ROCK);
		});
		QUnit.test('Spock wins vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.SCISSORS);
			assert.equal(r.winner, 'PLAYER 1');
			assert.equal(r.value, opts.SPOCK);
			assert.equal(r.message, messages.SPOCK_SMASHES_SCISSORS);
		});
		QUnit.test('Spock looses vs Lizard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.LIZARD);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.LIZARD);
			assert.equal(r.message, messages.LIZARD_POISONS_SPOCK);
		});
		QUnit.test('Spock looses vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.PAPER);
			assert.equal(r.winner, 'PLAYER 2');
			assert.equal(r.value, opts.PAPER);
			assert.equal(r.message, messages.PAPER_DISPROVES_SPOCK);
		});
		
	});


});





