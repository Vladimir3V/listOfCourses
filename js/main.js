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


var check = document.getElementsByClassName("checkbox");

for (var i = 0; i < check.length; i++) {
	check[i].addEventListener("change", function(e) {
	var target = e.target;
	var needClass = "course_item_text";	
		
	var findAncestor = (target, needClass) => {
		 while ((target = target.parentElement) && !target.classList.contains(needClass));
		
		target.classList.add('greenBackgound');
		
		
		setTimeout(()=>{target.parentElement.style.display="none"; console.log (1111);},1000);
		
		console.log (target);
	} 	
	
	findAncestor (target,needClass);
	
});
}


