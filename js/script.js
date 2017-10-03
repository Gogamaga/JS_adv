

var ul = document.getElementsByTagName('ul');
for(var i = 0; i< ul.length; i++){
	if(ul[i].parentElement == document.body){
		(!ul[i].classList.contains('device'))?ul[i].classList.add('device'):false;
	}
}

var newNode = ul[0].cloneNode(true);
newNode.firstElementChild.firstElementChild.textContent = 'iPhone 5';
newNode.firstElementChild.lastElementChild.firstElementChild.textContent = 'Our Hero';
newNode.firstElementChild.lastElementChild.lastElementChild.firstElementChild.textContent = '300$';
document.body.appendChild(newNode);
var h4 = document.getElementsByTagName('h4');
for(var i = 0; i < h4.length; i++){
	var text = h4[i].textContent;
	h4[i].textContent = text.replace('iPhone', 'Android')
};

for(var i = 0; i< ul.length; i++){
	if(ul[i].parentElement != document.body){
	 	ul[i].lastElementChild.lastElementChild.classList.add('red');
		var liText = ul[i].firstElementChild.textContent;
		ul[i].firstElementChild.textContent = capitalize(liText);
		var price = ul[i].lastElementChild.firstElementChild.textContent;
		ul[i].lastElementChild.firstElementChild.textContent = currency.convert(subsPrice(price))
	}
}

function subsPrice(price){
	var symbol = price.indexOf('$');
	var subPrice = price.slice(0, symbol);
	return subPrice;
}
function capitalize(string){
	var firstChar = string[0].toUpperCase();
	var newString = string.replace(string[0], firstChar);
	return newString;
}
