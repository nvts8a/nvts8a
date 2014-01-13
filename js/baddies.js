var baddy = null;
var baddyXSpeed = 0; 
var baddyYSpeed = 0; 

function init() {
	baddy = document.getElementById('baddy');
	baddy.style.position= 'relative'; 
	resetBaddy();
}

function move() {
	var windowWidth = $(window).width();
	var newXPosition = parseInt(baddy.style.left) + baddyXSpeed;
 
	var windowHeight = $(window).height();
	var newYPosition = parseInt(baddy.style.top) + baddyYSpeed;

	//console.log( windowWidth );
	//console.log( newXPosition );

	if( newXPosition > windowWidth ||
		newYPosition > windowHeight ||
		newYPosition < 0 ) {
		resetBaddy();
	}
	else {
		baddy.style.left = newXPosition + 'px';
		baddy.style.top = newYPosition + 'px';
	}

	setTimeout( move, 20 );
}

function resetBaddy() {
	var windowHeight = $(window).height();
	var newYPosition = Math.floor( Math.random() * windowHeight );

	baddyYSpeed = Math.floor( Math.random() * 12 ) - 6;	
	baddyXSpeed = Math.floor( Math.random() * 4 ) + 8;
	
	//console.log( windowHeight );

	baddy.style.left = '0px';
	baddy.style.top = newYPosition + 'px';
}



window.onload =init;
