/* ------------------------- */
/* PRINCESSIA.COM            */
/* ------------------------- */
/* (c) 2015 Vincent Fontaine */
/* ------------------------- */

/* -- NOTIFICATIONS --------------------------------------------------------- */

var socket = io.connect();

socket.on('connected', function(e){
	/* dummy */
});

socket.on('testme', function(e){
	console.log(e.author + ":" + e.message);
});


/* -- RESIZE HANDLING ------------------------------------------------------- */

$(window).resize(function(e){
	/* dummy */
});


$('#clients-slider').owlCarousel({
	items:5,
	lazyLoad:true,
	loop:true,
	margin:10
});
