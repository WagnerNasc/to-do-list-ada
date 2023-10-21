import { adicionaTarefa, buscarPorId, editarTarefa, excluirTarefa, exibirTarefas } from './dados.mjs';

exibirTarefas()

console.log("---------------------------------------------")

adicionaTarefa("Varrer", "Varrer a casa toda segunda as 09:00")
exibirTarefas()


console.log("---------------------------------------------")

adicionaTarefa("Correr", "Correr todo dia as 17:00")
exibirTarefas()

console.log("---------------------------------------------")

adicionaTarefa("Estudar", "Estudar todo dia as 15:00")
exibirTarefas()

console.log("---------------------------------------------")

excluirTarefa(2)
exibirTarefas()

console.log("---------------------------------------------")

adicionaTarefa("Correr", "Correr todo dia as 17:00")
exibirTarefas()

console.log("---------------------------------------------")

excluirTarefa(3)
exibirTarefas()

console.log("---------------------------------------------")

adicionaTarefa("Jogar video-game", "Jogar todo final de semana")
exibirTarefas()

console.log("---------------------------------------------")

editarTarefa(1, "", "")

exibirTarefas()

console.log("---------------------------------------------")

editarTarefa(1, "deitar", "")

exibirTarefas()

console.log("---------------------------------------------")

editarTarefa(1, "", "pular")

exibirTarefas()