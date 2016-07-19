
$(document).ready(function() { 
	$.get('https://www.reddit.com/r/aww.json', function(reddit) {
// get the title, author, and preview for the first 10
		var data = '<ul class="list">';
		for (var i=0; i<10; i++) {
			// var preview = reddit.data.children[i].preview.images[0]; // image need url or width and height?
			// add the above to the html
			data += '<li class="item"><h2>' + reddit.data.children[i].title + '</h2>';
			data += '<h3>by ' + reddit.data.children[i].author + '</h3>' + reddit.data.children[i].thumbnail + '</li>';
		}
		data += '</ul>';
		console.log(data);
		$('div').html(data);

  }); 
});


	 
