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

// Baddy Functions
function resetBaddy(baddy) { 
	var windowHeight = $(window).height();
	var newYPosition = Math.floor( Math.random() * windowHeight );

	baddy.ySpeed = Math.floor( Math.random() * 12 ) - 6;
	baddy.xSpeed = Math.floor( Math.random() * 4 ) + 8;

	baddy.element.css( 'left', '-64px' );
	baddy.element.css( 'top', newYPosition + 'px' );
};

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

	setTimeout( function() { moveBaddy( baddy ) }, 20 );	
};

var baddies = new Array();
for ( var i=1; i<=5; i++ ) {

	baddies[i] = createBaddy(i);
	resetBaddy( baddies[i] );
	moveBaddy( baddies[i] );
}

/*

var baddy = null;
var baddyXSpeed = 0; 
var baddyYSpeed = 0; 

function init() {
	baddy = $("div.baddy");
	resetBaddy();
	move();
}

function move() {
	var windowWidth = $(window).width();
	var newXPosition = parseInt( baddy.css('left') ) + baddyXSpeed;
 
	var windowHeight = $(window).height();
	var newYPosition = parseInt( baddy.css('top') ) + baddyYSpeed;

	//console.log( windowWidth );
	//console.log( newXPosition );

	if( newXPosition > windowWidth ||
		newYPosition > windowHeight ||
		newYPosition < -64 ) {
		resetBaddy();
	}
	else {
		baddy.css( 'left', newXPosition + 'px' );
		baddy.css( 'top', newYPosition + 'px' );
	}

	setTimeout( move, 20 );
}

function resetBaddy() {
	var windowHeight = $(window).height();
	var newYPosition = Math.floor( Math.random() * windowHeight );

	baddyYSpeed = Math.floor( Math.random() * 12 ) - 6;	
	baddyXSpeed = Math.floor( Math.random() * 4 ) + 8;
	
	//console.log( windowHeight );

	baddy.css( 'left', '-64px' );
	baddy.css( 'top', newYPosition + 'px' );
}



window.onload =init;
*/

