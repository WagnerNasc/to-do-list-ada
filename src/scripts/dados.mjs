import { Tarefa } from './tarefa.mjs';

let listaTarefas = []

function adicionaTarefa(titulo, descricao){
    // Adiciona uma nova tarefa na lista de tarefas
    const tarefa = new Tarefa(titulo, descricao);
    listaTarefas.push(tarefa)

    return tarefa.id
}
    
function buscarPorId(id){
    // Busca uma tarefa especifica a partir do ID passado por parâmetro
    if (listaTarefas.some(tarefa => tarefa.id === id)){
        return listaTarefas.find(tarefa => tarefa.id === id)
    }else {
        throw new ReferenceError("Tarefa não encontrada!")
    }
}

function editarTarefa(id, novoTitulo, novaDescricao){
    // Permite alterar uma determinada tarefa com base no ID passado por parâmetro
    const index = listaTarefas.indexOf(buscarPorId(id))
    if (index!=-1) {
        listaTarefas[index].titulo=novoTitulo
        listaTarefas[index].descricao=novaDescricao
    }
}

function excluirTarefa (id){
    // Exclui uma tarefa da lista a partir de um ID passado. 
    // Por conta dos ids começarem a partir do número um e ele reomver pelo índice (começa no zero), é feita a subtração do id - 1
    if (buscarPorId(id) != undefined){
        listaTarefas.splice(id - 1, 1)
    }else{
        throw new ReferenceError("Não foi possível excluir a tarefa pois ela não existe!")
    } 
}

function exibirTarefas(){
    // Exibe todas as tarefas dentro da lista
    listaTarefas.forEach(tarefa => {
        console.log(tarefa)
    });
}

export { adicionaTarefa, buscarPorId, editarTarefa, excluirTarefa, exibirTarefas };