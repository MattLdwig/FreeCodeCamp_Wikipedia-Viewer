function wikiSearch(){
  $('.responses').empty();
	var searchTerm = document.getElementById('search').value;
		$.ajax({
		  url: 'https://en.wikipedia.org/w/api.php?   action=opensearch&format=json&formatversion=2&utf8=1&formatversion=2&callback=?&search='+searchTerm,
		  dataType: 'jsonp',
		  success: function(data){
		    if(data[1].length !== 0){
		      $('.searchBox').addClass('header');
		      var answers = data[1];
		      var i = 0;
			      while(answers[i]){
				    $('.responses').append("<ul class='responseCard'><li><a href="+data[3][i]+"><h2>"+answers[i]+"</h2></a><p>"+data[2][i]+"</p></li></ul>");
				    i++;
			      }
			  } else{
			      $('.responses').append("<p>The page "+searchTerm+" does not exist. You can <a href='https://en.wikipedia.org/wiki/Wikipedia:Articles_for_creation'>ask for it to be created</a>.");
		    }
		  }
	})
};

//Call wikiSearch if Enter is pressed
$('input').keypress(function(e){
	if(e.keyCode === 13){
	wikiSearch();			
	}
});


