$(document).ready(function() {
	wow.init();
});
var wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 40,
	mobile: true,
	live: true,
	callback: function(box){
	},
	scrollContainer: null
	}
);