const inputbox = document.getElementById("a");
const listcontainer = document.getElementById("list_container");
const checkedList = document.querySelector('.checked');

function addtask(){
    if(inputbox.value ===''){
        alert("You have to write a message to add in to-do list!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        document.getElementById("a").value='';
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
}

function clearbox(){
    document.getElementById("a").value='';
}

listcontainer.addEventListener('click', function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false);

document.getElementById('clear').onclick = clearbox;
document.getElementById('add').onclick = addtask;