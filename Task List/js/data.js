var data = (function(){
    var tasks = [
        { id : 1, title : 'Do something', done : false },
        { id : 2, title : 'Do something other', done : false },
        { id : 3, title : 'Do something other second', done : false },
    ]
    return {
        add : function (task){
            tasks.push(task);
        },
        getAll : function(){
            return tasks;
        },
        updateStatus : function(id){
            for(var i = 0; i < tasks.length; i++){
                if(tasks[i].id == id){
                    if(!tasks[i].done){
                        tasks[i].done = true;
                    }else{
                        tasks[i].done = false;
                    }
                    return tasks[i].done;
                }
            }
        },
        removeTask : function(id){
            tasks.forEach(function(item, index){
                if(item.id == id){
                    tasks.splice(index, 1);
                }
            });

        }
    }
})();
