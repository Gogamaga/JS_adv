var data = (function(){
    
    var tasks = [];
   
    return {
        add : function (task){
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks))
        },
        getAll : function(){
            if(localStorage.getItem('tasks')){
            var reTask = localStorage.getItem('tasks');
            tasks = JSON.parse(reTask);
            }
            return tasks;
        },
        updateStatus : function(id){
            var reTask = localStorage.getItem('tasks');
            tasks = JSON.parse(reTask);
            for(var i = 0; i < tasks.length; i++){
                if(tasks[i].id == id){
                    if(!tasks[i].done){
                        tasks[i].done = true;
                    }else{
                        tasks[i].done = false;
                    }
                    localStorage.setItem('tasks', JSON.stringify(tasks))
                    return tasks[i].done;
                }
            }
        },
        removeTask : function(id){
            var reTask = localStorage.getItem('tasks');
            tasks = JSON.parse(reTask);
            tasks.forEach(function(item, index){
                if(item.id == id){
                    tasks.splice(index, 1);
                    localStorage.setItem('tasks', JSON.stringify(tasks))
                }
            });

        }
    }
})();
