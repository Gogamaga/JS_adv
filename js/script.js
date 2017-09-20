var test = document.body.lastElementChild.previousElementSibling.lastElementChild;
console.log(test);
var $ = {
	a: '',
	selectElement : function(element){
		 a = document.querySelector(element);
		return a;
	}
}

var element = $.selectElement('#w');
var ul = element.nextElementSibling;
console.log(element);
console.log(ul);

var elements = new $();
var test = elements.selectElement('#w');
console.log(test);