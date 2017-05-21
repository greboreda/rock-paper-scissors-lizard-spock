$(document).ready(function() {
	pageManager.init();
});

var pageManager = (function() {
	
	var buttons = {
		PLAY: '#play-button',
		OPTION: '.option-button'
	};
	
	var containers = {
		OPTIONS: '.options-list'
	};
	
	var dataKeys = {
		OPTION: 'option'
	}
	
	function init() {
		initOptions();
		initPlayButton();
	}

	function initPlayButton() {
		$(buttons.PLAY).click(function(evt) {
			var selectedOptions = retrieveSelectedOptions();
			var r = rockPaperScissorsLizardSpockManager.play(selectedOptions.player1, selectedOptions.player2);
			alert(r.repr);
		});
	}
	
	function retrieveSelectedOptions() {
		function retrievePlayerSelectedOption(containerId) {
			return $(containerId)
				.find(buttons.OPTION + '.active')
				.data(dataKeys.OPTION);
		}
		return {
			player1: retrievePlayerSelectedOption('#player1-options'),
			player2: retrievePlayerSelectedOption('#player2-options'),
		};
	}
	
	function createOptionButton(optionName) {
		var $optionButton = $('<a></a>', {
			href: '#',
			class: 'list-group-item list-group-item-action option-button'
		});
		$optionButton.data(dataKeys.OPTION, optionName);
		$optionButton.append(optionName.toLowerCase());
		return $optionButton;
	}
	
	function onClickOption(evt) {
		$(evt.target)
			.closest(containers.OPTIONS)
			.find(buttons.OPTION)
			.removeClass('active');
		$(evt.target).addClass('active');
		var optionsClicked = $(buttons.OPTION + '.active').length;
		if(optionsClicked === 2) {
			$(buttons.PLAY).removeAttr('disabled');
		}
		evt.preventDefault();		
	}
	
	function initOptions() {
		var lists = $(containers.OPTIONS);
		lists.each(function(index, element) {
			var opts = rockPaperScissorsLizardSpockManager.options;
			for(opt in opts) {
				var $b = createOptionButton(opt);
				$b.click(onClickOption);
				$b.appendTo(element);
			}
		});
	}
	
	return {
		init: init
	};
	
})();

