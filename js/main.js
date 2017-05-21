$(document).ready(function() {
	pageManager.init();
});

var pageManager = (function() {
	
	var buttons = {
		PLAY: '#play-button',
		OPTION: '.option-button'
	};
	
	var containers = {
		OPTIONS: '.options-list',
		PLAYER1_OPTIONS: '#player1-options',
		PLAYER2_OPTIONS: '#player2-options'
	};
	
	var modals = {
		RESULT: '#result-modal'
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
			var modal = $(modals.RESULT);
			var p = modal.find('.modal-body').children('p');
			p.empty();
			p.append(r.repr);
			modal.modal('show');
		});
	}
	
	function retrieveSelectedOptions() {
		function retrievePlayerSelectedOption(containerId) {
			return $(containerId)
				.find(buttons.OPTION + '.active')
				.data(dataKeys.OPTION);
		}
		return {
			player1: retrievePlayerSelectedOption(containers.PLAYER1_OPTIONS),
			player2: retrievePlayerSelectedOption(containers.PLAYER2_OPTIONS),
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
				var $b = createOptionButton(opt)
					.click(onClickOption)
					.appendTo(element);
			}
		});
	}
	
	return {
		init: init
	};
	
})();

