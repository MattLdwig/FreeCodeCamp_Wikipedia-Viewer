$('.submit').on('click', (noName))

function wikiSearch(){
var searchTerm = document.getElementById('search').value;
		$.ajax({
		url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=intitle%3A'+searchTerm,
		dataType: 'jsonp',
		success: function(data){
			console.log(data);
		}
	})
};

$('input').keypress(function(e){
	if(e.keyCode === 13){
	wikiSearch();			
	}
});


