var basketIcon = document.querySelector('.fa-shopping-basket');
var itemWrap = document.querySelector('.itemWrap');
var tBody = document.querySelector('tbody');
var table = document.querySelector('table');
var totalCount = document.querySelectorAll('.totalCount');
var totalSum = document.querySelector('.totalSum');

basketIcon.onclick = function(){
    var basket = document.querySelector('.basket');
    basket.classList.toggle('active');
}

function renderItem(item){
    var divItemCart = document.createElement('div');
    divItemCart.className = 'itemCart';
    var divItemPhoto = document.createElement('div');
    divItemPhoto.className = 'itemPhoto';
    var divInfoCart = document.createElement('div');
    divInfoCart.className = 'infoCart';
    var divPriceButton = document.createElement('div');
    var img = document.createElement('img');
    img.src = item.photo;
    divItemPhoto.appendChild(img);
    var h3 = document.createElement('h3');
    h3.textContent = item.name;
    var p = document.createElement('p');
    p.textContent = item.description;
    divInfoCart.appendChild(h3);
    divInfoCart.appendChild(p);
    var spanPrice = document.createElement('span');
    spanPrice.className = 'price';
    spanPrice.textContent = item.price + '$';
    var buttonBuy = document.createElement('button');
    buttonBuy.className = 'button';
    buttonBuy.textContent = 'В корзину';
    buttonBuy.setAttribute('onclick', 'buy(this)')
    divPriceButton.appendChild(spanPrice);
    divPriceButton.appendChild(buttonBuy);
    divInfoCart.appendChild(divPriceButton);
    divItemCart.appendChild(divItemPhoto);
    divItemCart.appendChild(divInfoCart);
    divItemCart.dataset.id = item.id;
    return divItemCart; 
};

function renderBasket(item){
    var tr = document.createElement('tr');
    tr.dataset.id = item.id;
    var tdName = document.createElement('td');
    tdName.textContent = item.name;
    var tdPrice = document.createElement('td');
    tdPrice.textContent = item.price + '$';
    var tdCount = document.createElement('td');
    tdCount.textContent = item.count;
    var tdSum = document.createElement('td');
    tdSum.textContent = item.sum + '$';
    var tdButton = document.createElement('td');
    var button = document.createElement('button');
    button.className = 'button btn btn-danger';
    button.textContent = 'Видалити';
    button.setAttribute('onclick', 'deleteItem(this)')
    tdButton.appendChild(button);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdCount);
    tr.appendChild(tdSum);
    tr.appendChild(tdButton);
    return tr;

}
function renderTbody(arrBasket){
    var tBody = document.createElement('tbody');
    for(var i = 0; i < arrBasket.length; i++){
        tBody.appendChild(renderBasket(arrBasket[i]));
    }
    return tBody;
}

var items = data.getAllItems();
var basket = data.getItemsForBasket();

for(var i = 0; i<basket.length; i++){
    tBody.appendChild(renderBasket(basket[i]))
}

for(var i = 0; i<items.length; i++){
    itemWrap.appendChild(renderItem(items[i]))
};
recalculationCounAndSum();

function buy(e){
   var idItem = e.closest('.itemCart').dataset.id;
   var idDataItem = data.findOne(idItem);
   var tBody = document.querySelector('tbody');
   data.setItemToBasket(idDataItem, data.findForBasket(idItem,data.getItemsForBasket()));
   table.replaceChild(renderTbody(data.getItemsForBasket()), tBody);
   totalCount[0].classList.add('plusCount');   
   recalculationCounAndSum();
   setTimeout(function() {
    totalCount[0].classList.remove('plusCount');
   }, 400);
}

function deleteItem(e){
    var tr = e.closest('tr');
    var idItemFromBasket = tr.dataset.id;
    tr.parentNode.removeChild(tr);
    data.removeFromBasket(idItemFromBasket);
    recalculationCounAndSum();   
}

function recalculationCounAndSum(){
    var totalCountAndSum = data.totalCountAndSum(data.getItemsForBasket());
    totalCount[0].innerHTML = totalCountAndSum.count;    
    totalCount[1].innerHTML = totalCountAndSum.count;
    totalSum.innerHTML = 'Сума - ' + totalCountAndSum.sum + '$';
    
}

function clearBasket(){
    var tBody = document.querySelector('tbody');
    data.clearBasket();
    tBody.innerHTML = '';
    recalculationCounAndSum();
}


// var arr = [1,3,54,2,24];

// var obj = {
//     filter : arr.filter(function(item){
//         return item>0;
//     })
// }
if({ss: 'as'}){
    console.log('err')
}else{
    console.log('true')
}







