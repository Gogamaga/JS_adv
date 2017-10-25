var data = (function(){
    var items = [
        {
            id : 1,
            name : 'iPhone 5S',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab, voluptatem quibusdam tenetur asperiores quam numquam voluptates quo officiis. Placeat, dolor voluptatum. Possimus soluta eius natus sunt quia in.',
            price : 200,
            photo : 'https://staticshop.o2.co.uk/product/images/iphone-5s-silver-sku-header.png?cb=9176bf3c0b3787734388b25bce27a258'
        },
        {
            id : 2,
            name : 'iPhone 6S',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab, voluptatem quibusdam tenetur asperiores quam numquam voluptates quo officiis. Placeat, dolor voluptatum. Possimus soluta eius natus sunt quia in.',
            price : 550,
            photo : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/KY/MKY12/MKY12_AV1_SILVER?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1486508183330'
        },
        {
            id : 3,
            name : 'iPhone 7',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab, voluptatem quibusdam tenetur asperiores quam numquam voluptates quo officiis. Placeat, dolor voluptatum. Possimus soluta eius natus sunt quia in.',
            price : 800,
            photo : 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430122140'
        },
        {
            id : 4,
            name : 'iPhone X',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est ab, voluptatem quibusdam tenetur asperiores quam numquam voluptates quo officiis. Placeat, dolor voluptatum. Possimus soluta eius natus sunt quia in.',
            price : 1000,
            photo : 'https://aip5-a.akamaihd.net/2017/08/Kak-iOS-11-budet-vyglyadet-na-iPhone-8-foto-1.jpg?x44442'
        }
    ];
    var basket = [];
    return {
        getAllItems : () => items,

        findOne : id => items.filter(item => item.id == id).reduce((oneItem, item) => 
            oneItem = item
        , {}),        
        getItemsForBasket : function(){
            if(localStorage.getItem('basket')){
                var parseBasket = localStorage.getItem('basket');
                basket = JSON.parse(parseBasket);
            }
            return basket;
        },
        setItemToBasket : function(item, basketItem){
            if(basketItem.length > 0){
                basketItem[0].count++;
                basketItem[0].sum = basketItem[0].price * basketItem[0].count;
                localStorage.setItem('basket', JSON.stringify(basket));
            }else{
                item.count = 1;
                item.sum = item.price * item.count;
                basket.push(item);
                localStorage.setItem('basket', JSON.stringify(basket));
            }
        },
        findForBasket : (id, basketItem) =>
             basketItem.filter(item => item.id == id),

        removeFromBasket : function(id){
            var parseBasket = localStorage.getItem('basket');
            basket = JSON.parse(parseBasket);
            var filterBasket = basket.filter(item => item.id != id)
            localStorage.setItem('basket', JSON.stringify(filterBasket))
        },
        totalCountAndSum : basketItem => {
            return basketItem.reduce((total, item) => {
                    total.count = (total.count || 0) + item.count;
                    total.sum = (total.sum || 0) + item.sum;
                    return total;
                },{count : 0, sum : 0})
        },
        clearBasket : () => {
            localStorage.clear();
            basket = [];
        }
    }
})();
