$('#search').keyup(function(){
	//pulling value from #search field
	var searchField = $('#search').val();
	//simple RegExp, to make search case insensative.
	var myExp = new RegExp(searchField, 'i');
	//using getJSON to pull data.json
	$.getJSON('data.json', function(data){
		//creating a variable and adding ul element
		var output = "<ul class='searchresults'>";
		//looping through date to capture json information
			$.each(data, function(key, val){
				//checking for name match, if it does not match
				//with RegEx parameters don't show.
				if((val.name.search(myExp) != -1) || 
					(val.bio.search(myExp) != -1)){
					//adding to output a li
					output += "<li>";
					//then concatnating h2 with val.name
					output += "<h2>" + val.name + "</h2>";
					//this was the hardest, concating image with val.shortname
					//gotta watch for single quotes and double quotes.
					output += '<img src="images/' + val.shortname + '_tn.jpg" alt="'+val.name + '">';
					output += "<p>" + val.bio + "</p>";
					output += "</li>";	
				}	
			});
		//finally, close output after .each method and push to html.
		output += "</ul>";
		$("#update").html(output);
	});
});

