$.getJSON('data.json', function(data){
	//using getJSON to pull data.json
	//creating a variable and adding ul element
	var output = "<ul class='searchresults'>";
	//looping through date to capture json information
	$.each(data, function(key, val){
		//adding to output a li
		output += "</li>";
		//then concatnating h2 with val.name
		output += "<h2>" + val.name + "</h2>";
		//this was the hardest, concating image with val.shortname.
		//gotta watch for single quotes and double quotes.
		output += '<img src="images/' + val.shortname + '_tn.jpg" alt="'+val.name + '">';
		output += "<p>" + val.bio + "</p>";
		output += "</li>";
	});
	//finally, close output after .each method and push to html.
	output += "</ul>";
	$("#update").html(output);
});