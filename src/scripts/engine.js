

const state = {
    listaDeTarefas: [{
        id:0,
        titulo:"correr",
        descricao:"correr as 12:00"
    }],
    idAutomatico:0,
    novaTarefa:{
        titulo:document.getElementById("title-add"),
        descricao:document.getElementById("description-add")
    },
    tabela:{
        tarefas: document.getElementById("tabela-tarefas")
    },
    action:{
        buttonAdd:document.getElementById("button-add"),
        buttonRemoveAll:document.getElementById("remove-all"),
        filterAll:document.getElementById("filter-all"),
        filterPending:document.getElementById("filter-pending"),
        filterCompleted:document.getElementById("filter-completed"),
    }

}



function adicionarTarefa(){

}
function removerTodasTarefas(){
    
}
function habilitarTarefa(){
    // celula.setAttribute("contenteditable", "true");
}
function deletarTarefa(){
    
}
function salvarTarefa(){

}
function alterarStatosTarefa(){
    
}
function listarTarefas(){
    if (state.listaDeTarefas!=[]){
        state.listaDeTarefas.forEach(Tarefa=>{
            const linha = document.createElement("tr")
            linha.innerHTML = ` <td> Pendente </td>
                        <td>${Tarefa.titulo}</td>
                        <td>${Tarefa.titulo}</td>
                        <td>
                        <button> edit </button>
                        <button>remover</button>
                        </td>`
            state.tabela.tarefas.appendChild(linha)
        })
    }
}
function init(){
    listarTarefas()
}
init()