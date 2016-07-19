$(document).ready(function() { 

//  $('div.content').on(function() {
//   $( 'this' ).toggle( "explode" );
// });


	$.get('http://www.reddit.com/r/aww.json', function(reddit) {
// get the title, author, and preview for the first 10
		var data = '<ul class="list">';
		for (var i=0; i<10; i++) {
			// var preview = reddit.data.children[i].preview.images[0]; // image need url or width and height?
			// add the above to the html
			data += '<li class="item"><h2>' + reddit.data.children[i].data.title + '</h2>';
			data += '<h3>by ' + reddit.data.children[i].data.author + '</h3>' + '<img src=' + reddit.data.children[i].data.preview.images[0].source.url + ' class="pic"' + '/>' + '</li>';
		}
		data += '</ul>';
		$('div.content').html(data);
  }); 
});


	 
