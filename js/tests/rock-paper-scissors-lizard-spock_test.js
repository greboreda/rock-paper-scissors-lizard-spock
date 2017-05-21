var model = rockPaperScissorsLizardSpockManager.model;
var messages = rockPaperScissorsLizardSpockManager.messages;

var Rock = model.Rock;
var Paper = model.Paper;
var Scissors = model.Scissors;
var Lizard = model.Lizard;
var Spock = model.Spock;

QUnit.module("rockPaperScissorsLizardSpockManager elements", function() {

	QUnit.test("manager exists", function(assert) {
		assert.ok(rockPaperScissorsLizardSpockManager, 'manager exists');
		assert.ok(rockPaperScissorsLizardSpockManager.model, 'manager contains model');
		assert.ok(rockPaperScissorsLizardSpockManager.messages, 'manager contains messages');
	});

});

QUnit.module("Test Model", function() {

	QUnit.test('Rock entity', function(assert) {
		assert.ok(model.Rock, 'Rock is defined');
		var e = new model.Rock();
		assert.ok(e.wins, 'wins method defined');
	});

	QUnit.test('Paper entity', function(assert) {
		assert.ok(model.Paper, 'Paper is defined');
		var e = new model.Paper();
		assert.ok(e.wins, 'wins method defined');
	});

	QUnit.test('Scissors entity', function(assert) {
		assert.ok(model.Scissors, 'Scissors is defined');
		var e = new model.Scissors();
		assert.ok(e.wins, 'wins method defined');
	});

	QUnit.test('Lizard entityl', function(assert) {
		assert.ok(model.Lizard, 'Lizard is defined');
		var e = new model.Lizard();
		assert.ok(e.wins, 'wins method defined');		
	});
	
	QUnit.test('Spock entity', function(assert) {
		assert.ok(model.Spock, 'Spock is defined');
		var e = new model.Spock();
		assert.ok(e.wins, 'wins method defined');
	});

});

QUnit.module( "Rock tests", function() {

	QUnit.test('Rock ties vs Rock', function(assert) {
		var rock = new Rock();
		var r = rock.wins(rock);
		assert.ok(r.result === messages.TIE, 'result is tie');
	});
	QUnit.test('Rock wins vs Lizzard', function(assert) {
		var r = new Rock().wins(new Lizard());
		assert.ok(r.result);
		assert.ok(r.message === messages.ROCK_CRUSHES_LIZARD);
	});
	QUnit.test('Rock wins vs Scissors', function(assert) {
		var r = new Rock().wins(new Scissors());
		assert.ok(r.result);
		assert.ok(r.message === messages.ROCK_CRUSHES_SCISSORS);
	});
	QUnit.test('Rock looses vs Paper', function(assert) {
		var r = new Rock().wins(new Paper());
		assert.notOk(r.result);
		assert.ok(r.message === messages.PAPER_COVERS_ROCK);
	});
	QUnit.test('Rock looses vs Spock', function(assert) {
		var r = new Rock().wins(new Spock());
		assert.notOk(r.result);
		assert.ok(r.message === messages.SPOCK_VAPORIZES_ROCK);
	});
	
});

QUnit.module( "Paper tests", function() {

	QUnit.test('Paper ties vs Paper', function(assert) {
		var paper = new Paper();
		var r = paper.wins(paper);
		assert.ok(r.result === messages.TIE, 'result is tie');
	});
	QUnit.test('Paper wins vs Rock', function(assert) {
		var r = new Paper().wins(new Rock());
		assert.ok(r.result);
		assert.ok(r.message === messages.PAPER_COVERS_ROCK);
	});
	QUnit.test('Paper wins vs Spock', function(assert) {
		var r = new Paper().wins(new Spock());
		assert.ok(r.result);
		assert.ok(r.message === messages.PAPER_DISPROVES_SPOCK);
	});
	QUnit.test('Paper looses vs Lizard', function(assert) {
		var r = new Paper().wins(new Lizard());
		assert.notOk(r.result);
		assert.ok(r.message === messages.LIZARD_EATS_PAPER);
	});
	QUnit.test('Paper looses vs Scissors', function(assert) {
		var r = new Paper().wins(new Scissors());
		assert.notOk(r.result);
		assert.ok(r.message === messages.SCISSORS_CUTS_PAPER);
	});
	
});


QUnit.module( "Scissors tests", function() {

	QUnit.test('Scissors ties vs Scissors', function(assert) {
		var scissors = new Scissors();
		var r = scissors.wins(scissors);
		assert.ok(r.result === messages.TIE, 'result is tie');
	});
	QUnit.test('Scissors wins vs Paper', function(assert) {
		var r = new Scissors().wins(new Paper());
		assert.ok(r.result);
		assert.ok(r.message === messages.SCISSORS_CUTS_PAPER);
	});
	QUnit.test('Scissors wins vs Lizard', function(assert) {
		var r = new Scissors().wins(new Lizard());
		assert.ok(r.result);
		assert.ok(r.message === messages.SCISSORS_DECAPITATES_LIZARD);
	});
	QUnit.test('Scissors looses vs Rock', function(assert) {
		var r = new Scissors().wins(new Rock());
		assert.notOk(r.result);
		assert.ok(r.message === messages.ROCK_CRUSHES_SCISSORS);
	});
	QUnit.test('Scissors looses vs Spock', function(assert) {
		var r = new Scissors().wins(new Spock());
		assert.notOk(r.result);
		assert.ok(r.message === messages.SPOCK_SMASHES_SCISSORS);
	});
	
});


QUnit.module( "Lizard tests", function() {

	QUnit.test('Lizard ties vs Lizard', function(assert) {
		var lizard = new Lizard();
		var r = lizard.wins(lizard);
		assert.ok(r.result === messages.TIE, 'result is tie');
	});
	QUnit.test('Lizard wins vs Spock', function(assert) {
		var r = new Lizard().wins(new Spock());
		assert.ok(r.result);
		assert.ok(r.message === messages.LIZARD_POISONS_SPOCK);
	});
	QUnit.test('Lizard wins vs Paper', function(assert) {
		var r = new Lizard().wins(new Paper());
		assert.ok(r.result);
		assert.ok(r.message === messages.LIZARD_EATS_PAPER);
	});
	QUnit.test('Lizard looses vs Rock', function(assert) {
		var r = new Lizard().wins(new Rock());
		assert.notOk(r.result);
		assert.ok(r.message === messages.ROCK_CRUSHES_LIZARD)
	});
	QUnit.test('Lizard looses vs Scissors', function(assert) {
		var r = new Lizard().wins(new Scissors());
		assert.notOk(r.result);
		assert.ok(r.message === messages.SCISSORS_DECAPITATES_LIZARD);
	});
	
});


QUnit.module( "Spock tests", function() {

	QUnit.test('Spock ties vs Spock', function(assert) {
		var spock = new Spock();
		var r = spock.wins(spock);
		assert.ok(r.result === messages.TIE, 'result is tie');
	});
	QUnit.test('Spock wins vs Rock', function(assert) {
		var r = new Spock().wins(new Rock());
		assert.ok(r.result);
		assert.ok(r.message === messages.SPOCK_VAPORIZES_ROCK);
	});
	QUnit.test('Spock wins vs Scissors', function(assert) {
		var r = new Spock().wins(new Scissors());
		assert.ok(r.result);
		assert.ok(r.message === messages.SPOCK_SMASHES_SCISSORS);
	});
	QUnit.test('Spock looses vs Lizard', function(assert) {
		var r = new Spock().wins(new Lizard());
		assert.notOk(r.result);
		assert.ok(r.message === messages.LIZARD_POISONS_SPOCK)
	});
	QUnit.test('Spock looses vs Paper', function(assert) {
		var r = new Spock().wins(new Paper());
		assert.notOk(r.result);
		assert.ok(r.message === messages.PAPER_DISPROVES_SPOCK);
	});
	
});




