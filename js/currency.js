var currency = (function() {
	var data = {
		name : 'hryvnya',
		rank : 26,
		symbol : 'uha'
	}
	
	return {
		convert : function(price){
			var convertPrice = price * data.rank;
			return convertPrice + data.symbol;
		}
	};
})();
