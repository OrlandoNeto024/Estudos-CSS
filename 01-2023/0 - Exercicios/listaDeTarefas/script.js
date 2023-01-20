const inputElement = document.getElementById('input-nova-tarefa');


inputElement.addEventListener('keyup', function(e){
    var key = e.keyCode;
    if(key == 13){
        
        var slugInput = document.getElementById('input-nova-tarefa').value;
        slugInput = slugInput.replaceAll(' ', '-')

        var tarefaInsertion = `<div id="main"><input onclick="check()" type="checkbox" id="${slugInput}" name="${slugInput}"><label for="${slugInput}">${document.getElementById('input-nova-tarefa').value}</label><div id="delete"><a href="#">X</a></div></div>`;

        
        document.getElementById('main-area').innerHTML += tarefaInsertion;
        document.getElementById('input-nova-tarefa').value = ''
        
    }
})

/*function check(){
    var checkBox = document.getElementById(`${slugInput}`);
    
    
    if(checkBox.checked == true){
        alert(`${checkBox.label.value}`)
    }
    else{
        if(checkBox.checked == false){
            label.style.textDecoration = 'none'
        }
    }
}*/

