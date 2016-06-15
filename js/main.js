$('.submit').on('click', (wikiSearch))

function wikiSearch(){
	$('.responses').empty();
var searchTerm = document.getElementById('search').value;
		$.ajax({
		url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&list=search&utf8=1&formatversion=2&suggest=true&search='+searchTerm,
		dataType: 'jsonp',
		success: function(data){
		var answers = data[2];
		var i = 0;
			while(answers[i]){
				$('.responses').append("<div class='responseCard'><a href="+data[3][i]+">"+answers[i]+"</a></div>");
			i++;
			}
		}
	})
};


$('input').keypress(function(e){
	if(e.keyCode === 13){
	wikiSearch();			
	}
});


