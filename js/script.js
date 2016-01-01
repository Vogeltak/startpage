document.body.style.background = '#404040';
//document.body.style.backgroundImage = 'url(https://unsplash.it/' + window.innerWidth + '/' + window.innerHeight + '/?random&blur)';

var searchbox = document.getElementById('search');
var searchbutton = document.getElementById('button-search')

window.onload = function() {
    var input = searchbox.focus();
};

searchbox.onkeypress = function(e) {
	if (e.keyCode === 13) {
		search();
	}
}

searchbutton.addEventListener('click', search, false);

function search() {
	var query = searchbox.value;
	window.location = 'https://duckduckgo.com/?q=' + query;
}
