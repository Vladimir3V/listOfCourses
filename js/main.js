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
var items = check.length;
var findAncestor = (target, needClass) => {
	while ((target = target.parentElement) && !target.classList.contains(needClass));

	target.classList.add('greenBackgound');


	setTimeout(() => {
		target.parentElement.style.display = "none";
	}, 1000);
	items -= 1;
	if (!items) {
		document.getElementById("complete_block").style.display = "block";
		document.getElementById("courses_wrap").style.display = "none";
	}
}
var needClass = "course_item_text";

for (var i = 0; i < check.length; i++) {

	check[i].addEventListener("change", function (e) {
		var target = e.target;


		findAncestor(target, needClass);
	});
};



