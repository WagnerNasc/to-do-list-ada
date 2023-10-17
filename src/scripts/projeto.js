const listaDeTarefa = []
var idAutomatico = 0
function adicionaTarefa(titulo, descricao){
const tarefa ={
    id: idAutomatico,
    titulo: titulo,
    descricao: descricao
}
idAutomatico++
listaDeTarefa.push(tarefa)
return tarefa.id
}

function buscarPorId(id){
    if (listaDeTarefa.some(tarefa=> tarefa.id==id)){
        return listaDeTarefa.find(tarefa=>tarefa.id==id)
    }else {
        throw new ReferenceError("Tarefa não encontrada!")
    }
}

function editarTarefa(id, novoTitulo, novaDescricao){
    const index = listaDeTarefa.indexOf(buscarPorId(id))
    if (index!=-1) {
        listaDeTarefa[index].titulo=novoTitulo
        listaDeTarefa[index].descricao=novaDescricao
    }
}

adicionaTarefa("Aula 05", "Aula do curso Ada Vem ser Tech")


try{
    editarTarefa(1,"aula 06", "Aula do curso Ada Vem ser Tech - BackEnd")
} catch(err){
    console.log(err.message)
}

try{
    const tarefa = buscarPorId(0)
    console.log(tarefa)
} catch(err){
    console.log(err.message)
}
