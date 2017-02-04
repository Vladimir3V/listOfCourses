//var
///*	Переменная пути к дааным о пройденых курсах */
//	jsonUrl = 'js/courses_data.json',
//	/*	Переменная id тега, куда добавятся данные о курсах */
//	elemId = 'results';
//
//
///* Функция возращяет промис, который резолвится при усмешной загрузке файла */
//
//function getFile() {
//	return new Promise((resolve, reject) => {
//		var xhr = new XMLHttpRequest();
//		xhr.open('GET', jsonUrl, true);
//		xhr.send();
//		xhr.addEventListener('load', () => {
//			resolve(xhr.responseText);
//		});
//		xhr.addEventListener('erorr', () => {
//			reject();
//		});
//	});
//}
//
///* Функция принимает объект и id DOM-элемента, золпняет шаблон и добаляет HTML код в DOM */
//
//
//function jsonToHandelbars(responce, elementId) {
//	var data = JSON.parse(responce);
//	var source = entrytemplate.innerHTML;
//	var templateFn = Handlebars.compile(source);
//	var context = templateFn({
//		list: data
//	});
//	var element = document.getElementById(elementId);
//	element.innerHTML = context;
//};
//
//
//
//getFile(jsonUrl).then(
//	// если все хоро то заполняем шаблон
//	(response) => {
//		jsonToHandelbars(response, elemId);
//
//		//Далее собираем всеэлементы которые будем скрывать
//
//		var check = document.getElementsByClassName("checkbox");
//		var needClass = "course_item_text";
//		var items = check.length;
//		var time = 1000;
//
//		// Функция скрывает элменты через секунду, а если все элементы скрыты раскрывает элемент, что все куры пройдены
//
//		var findAndCanselElement = (target, needClass, qty, duration) => {
//
//			while ((target = target.parentElement) && !target.classList.contains(needClass));
//
//			target.classList.add('greenBackgound');
//
//			setTimeout(() => {
//				target.parentElement.style.display = "none";
//			}, duration);
//			qty -= 1;
//			if (!items) {
//				document.getElementById("complete_block").style.display = "block";
//				document.getElementById("courses_wrap").style.display = "none";
//			}
//		};
//
//		// НАвешиваем прослушку на все элементы
//
//		for (var i = 0; i < check.length; i++) {
//
//			check[i].addEventListener("change", function (e) {
//				var target = e.target;
//
//				findAndCanselElement(target, needClass, items, time);
//			});
//		};
//
//
//	},
//
//	() => {
//		console.log("Что-то пошло не так");
//	});


console.log (
  [1,1,1,1,1,1,1].reduceRight((sum,el,i,arr) => {
    if (i<(arr.length-3)) {
      return sum + el;
    } else {
      return sum;
    }
  })
);