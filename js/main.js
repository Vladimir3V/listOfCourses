var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/courses_data.json', false);
xhr.send();
if (xhr.status != 200) {
	console.log('error');
} else {
	var data = JSON.parse(xhr.responseText);
	
	
	var source = entrytemplate.innerHTML;
					var templateFn = Handlebars.compile(source);
					var context = templateFn({
						list: data
					});
	var element = document.getElementById('results');
	element.innerHTML = context;	
}
