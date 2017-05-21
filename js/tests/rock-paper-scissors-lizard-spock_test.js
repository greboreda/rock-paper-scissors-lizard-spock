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
		
	QUnit.module('Rock tests', function() {

		QUnit.test('Rock ties vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.ROCK);
			assert.ok(r.winner === 'TIE', 'result is tie');
			assert.ok(r.message === 'ROCK ties vs ROCK', 'message is the expected');
		});
		QUnit.test('Rock wins vs Lizzard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.LIZARD);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.ROCK, 'value is ROCK');
			assert.ok(r.message === messages.ROCK_CRUSHES_LIZARD, 'message is the expected');
		});
		QUnit.test('Rock wins vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.SCISSORS);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.ROCK, 'value is ROCK');
			assert.ok(r.message === messages.ROCK_CRUSHES_SCISSORS, 'message is the expected');
		});
		QUnit.test('Rock looses vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.PAPER);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.PAPER, 'value is PAPER');
			assert.ok(r.message === messages.PAPER_COVERS_ROCK, 'message is the expected');
		});
		QUnit.test('Rock looses vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.ROCK, opts.SPOCK);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.SPOCK, 'value is SPOCK');
			assert.ok(r.message === messages.SPOCK_VAPORIZES_ROCK, 'message is the expected');
		});

	});

	
	QUnit.module( "Paper tests", function() {
		
		QUnit.test('Paper ties vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.PAPER);
			assert.ok(r.winner === 'TIE', 'result is tie');
			assert.ok(r.message === 'PAPER ties vs PAPER', 'message is the expected');
		});
		QUnit.test('Paper wins vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.ROCK);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.PAPER, 'value is PAPER');
			assert.ok(r.message === messages.PAPER_COVERS_ROCK, 'message is the expected');
		});
		QUnit.test('Paper wins vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.SPOCK);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.PAPER, 'value is PAPER');
			assert.ok(r.message === messages.PAPER_DISPROVES_SPOCK, 'message is the expected');
		});
		QUnit.test('Paper looses vs Lizard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.LIZARD);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.LIZARD, 'value is LIZARD');
			assert.ok(r.message === messages.LIZARD_EATS_PAPER, 'message is the expected');
		});
		QUnit.test('Paper looses vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.PAPER, opts.SCISSORS);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.SCISSORS, 'value is SCISSORS');
			assert.ok(r.message === messages.SCISSORS_CUTS_PAPER, 'message is the expected');
		});
		
	});
	
	
	QUnit.module( "Scissors tests", function() {
		
		QUnit.test('Scissors ties vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.SCISSORS);
			assert.ok(r.winner === 'TIE', 'result is tie');
			assert.ok(r.message === 'SCISSORS ties vs SCISSORS', 'message is the expected');
		});
		QUnit.test('Scissors wins vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.PAPER);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.SCISSORS, 'value is SCISSORS');
			assert.ok(r.message === messages.SCISSORS_CUTS_PAPER, 'message is the expected');
		});
		QUnit.test('Scissors wins vs Lizard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.LIZARD);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.SCISSORS, 'value is SCISSORS');
			assert.ok(r.message === messages.SCISSORS_DECAPITATES_LIZARD, 'message is the expected');
		});
		QUnit.test('Scissors looses vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.ROCK);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.ROCK, 'value is ROCK');
			assert.ok(r.message === messages.ROCK_CRUSHES_SCISSORS, 'message is the expected');
		});
		QUnit.test('Scissors looses vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SCISSORS, opts.SPOCK);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.SPOCK, 'value is SCISSORS');
			assert.ok(r.message === messages.SPOCK_SMASHES_SCISSORS, 'message is the expected');
		});
		
	});
	
	
	QUnit.module( "Lizard tests", function() {
		
		QUnit.test('Lizard ties vs Lizard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.LIZARD);
			assert.ok(r.winner === 'TIE', 'result is tie');
			assert.ok(r.message === 'LIZARD ties vs LIZARD', 'message is the expected');
		});
		QUnit.test('Lizard wins vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.PAPER);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.LIZARD, 'value is LIZARD');
			assert.ok(r.message === messages.LIZARD_EATS_PAPER, 'message is the expected');
		});
		QUnit.test('Lizard wins vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.SPOCK);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.LIZARD, 'value is LIZARD');
			assert.ok(r.message === messages.LIZARD_POISONS_SPOCK, 'message is the expected');
		});
		QUnit.test('Lizard looses vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.SCISSORS);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.SCISSORS, 'value is SCISSORS');
			assert.ok(r.message === messages.SCISSORS_DECAPITATES_LIZARD, 'message is the expected');
		});
		QUnit.test('Lizard looses vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.LIZARD, opts.ROCK);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.ROCK, 'value is ROCK');
			assert.ok(r.message === messages.ROCK_CRUSHES_LIZARD, 'message is the expected');
		});
		
	});
	
	
	QUnit.module( "Spock tests", function() {
		
		QUnit.test('Spock ties vs Spock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.SPOCK);
			assert.ok(r.winner === 'TIE', 'result is tie');
			assert.ok(r.message === 'SPOCK ties vs SPOCK', 'message is the expected');
		});
		QUnit.test('Spock wins vs Rock', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.ROCK);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.SPOCK, 'value is SPOCK');
			assert.ok(r.message === messages.SPOCK_VAPORIZES_ROCK, 'message is the expected');
		});
		QUnit.test('Spock wins vs Scissors', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.SCISSORS);
			assert.ok(r.winner === 'PLAYER 1', 'winner is player 1');
			assert.ok(r.value === opts.SPOCK, 'value is SPOCK');
			assert.ok(r.message === messages.SPOCK_SMASHES_SCISSORS, 'message is the expected');
		});
		QUnit.test('Spock looses vs Lizard', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.LIZARD);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.LIZARD, 'value is LIZARD');
			assert.ok(r.message === messages.LIZARD_POISONS_SPOCK, 'message is the expected');
		});
		QUnit.test('Spock looses vs Paper', function(assert) {
			var r = rockPaperScissorsLizardSpockManager.play(opts.SPOCK, opts.PAPER);
			assert.ok(r.winner === 'PLAYER 2', 'winner is player 2');
			assert.ok(r.value === opts.PAPER, 'value is PAPER');
			assert.ok(r.message === messages.PAPER_DISPROVES_SPOCK, 'message is the expected');
		});
		
	});


});





