var container = document.querySelector('.container');
var ul = document.querySelector('ul');
var submit = document.querySelector('button[type="submit"]');

function render(data){
    var li = document.createElement('li');
    var span = document.createElement('span');
    var buttonStatus = document.createElement('button');
    var buttonRemove = document.createElement('button');
    var div = document.createElement('div');
    buttonStatus.setAttribute('name', 'status');
    buttonStatus.setAttribute('onclick', 'changeStatus(this)');
    buttonStatus.innerHTML = '&#10003';
    buttonRemove.setAttribute('name', 'remove');
    buttonRemove.setAttribute('onclick', 'remove(this)');
    buttonRemove.innerHTML = '&#10007;';
    span.textContent = data.title;
    li.dataset.id = data.id;
    li.dataset.status = data.done;
    data.done?li.className = 'statusDone':li.className = '';
    div.appendChild(buttonStatus);
    div.appendChild(buttonRemove);
    li.appendChild(span);
    li.appendChild(div);
    return li;
};
var dataGet = data.getAll();

for(var i = 0; i < dataGet.length; i++){
    var dataObj = dataGet[i];
    ul.appendChild(render(dataObj));
}
function remove(e){
    var li = e.closest('li');
    var id = li.dataset.id;
    data.removeTask(id);
    ul.removeChild(li);
}
function changeStatus(e){
    var li = e.closest('li');
    var status = data.updateStatus(li.dataset.id);
    li.dataset.status = status;
    status? li.className = 'statusDone':li.className = '';
};

submit.onclick = function(){
    var date = new Date();
    var value = document.querySelector('input').value;
    var task = {};
    task.id = date.getTime();
    task.title = value;
    task.done = false;
    ul.appendChild(render(task));
    data.add(task);
    document.querySelector('input').value = '';
    console.log(data.getAll())
}



