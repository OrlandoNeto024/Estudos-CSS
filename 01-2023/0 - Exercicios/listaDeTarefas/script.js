const inputElement = document.getElementById('input-nova-tarefa');
var caixas = 0;

inputElement.addEventListener('keyup', function(e){
    var key = e.keyCode;
    if(key == 13){

        var tarefaInsertion = `<div id="main"><input type="checkbox" id="tarefa" name="tarefa"><label for="tarefa">${document.getElementById('input-nova-tarefa').value}</label><div id="delete"><a href="#">X</a></div></div>`;

        document.getElementById('container').innerHTML += tarefaInsertion;
    }
})



/*<input type="checkbox" id="tarefa" name="tarefa">
<label for="tarefa">Tarefa</label>

<div id="delete">
    <a href="#">X</a>
</div>*/

/* PARA AMANHÃ: Como adicionar mais elementos com valores diferentes */