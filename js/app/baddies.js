var baddies = new Array();
var baddiesOn = false;

// Baddy Functions

// Takes in a id of a element with the baddy class and outputs a class with default data
function createBaddy(id) {
	
	var baddy = new Object();

	// Baddy Constents
	baddy.id		= id;
	baddy.element	= $( "div.baddy#" + id );

	// Baddy Variables
	baddy.xSpeed	= 0;
	baddy.ySpeed	= 0;

	return baddy;
}

// Initialiazes baddies and sets them in motion
function start() {

	baddiesOn = true;
	$('.baddies').removeClass('off');

	var baddyElements = $('div.baddies > div.baddy');

	for ( var i = 0; i < baddyElements.length ; i++ ) {

		baddies[i] = createBaddy( baddyElements[i].id );
		resetBaddy( baddies[i] );
		moveBaddy( baddies[i] );
	}
}

function stop() {
	baddiesOn = false;
	$('.baddies').addClass('off');
}



// Takes in a boddy class and moves it per its speeds or resets it if it goes off screen
function moveBaddy(baddy) {

	var windowWidth = $(window).width();
	var newXPosition = parseInt( $( "div.baddy#" + baddy.id ).css('left') ) + baddy.xSpeed;
 
	var windowHeight = $(window).height();
	var newYPosition = parseInt( $( "div.baddy#" + baddy.id ).css('top') ) + baddy.ySpeed;

	if( newXPosition > windowWidth ||
		newYPosition > windowHeight ||
		newYPosition < -64 ) {
		resetBaddy( baddy );
	}
	else {
		$( "div.baddy#" + baddy.id ).css( 'left', newXPosition + 'px' );
		$( "div.baddy#" + baddy.id ).css( 'top', newYPosition + 'px' );
	}

	if( baddiesOn ) {
		setTimeout( function() { moveBaddy( baddy ) }, 20 );	
	}
};

function resetBaddy(baddy) { 
	var windowHeight = $(window).height();
	var newYPosition = Math.floor( Math.random() * windowHeight );

	baddy.ySpeed = Math.floor( Math.random() * 12 ) - 6;
	baddy.xSpeed = Math.floor( Math.random() * 4 ) + 8;

	baddy.element.css( 'left', '-64px' );
	baddy.element.css( 'top', newYPosition + 'px' );
};


function changePhoto() {
	$('div.baddies div.baddy img').attr( 'src', 'null' );
}
