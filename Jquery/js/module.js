
var $ = (function(){
    
    var element;
    
    
    return  {
        select : function(selector){
            element = document.querySelectorAll(selector);
            
            return this;
         },
         addClass : function(classAdd){
            for(var i = 0; i<element.length; i++){
                element[i].classList.add(classAdd);
                
            }
            return this ;
         }
         
         
        }
})();