// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar novas tarefas ao array
function adicionarTarefa(descricao) {
    // Verificar se a descrição está preenchida
    if (!descricao) {
        console.log("Erro: A descrição da tarefa não pode estar vazia.");
        return;
    }

    // Criar uma nova tarefa
    let tarefa = {
        descricao: descricao,
        concluida: false
    };

    // Adicionar a tarefa ao array
    tarefas.push(tarefa);
    console.log("Tarefa adicionada com sucesso!");
}

// Função para listar todas as tarefas cadastradas
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    console.log("Tarefas cadastradas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. Descrição: ${tarefa.descricao}, Concluída: ${tarefa.concluida ? "Sim" : "Não"}`);
    });
}

// Função para remover uma tarefa específica do array
function removerTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Erro: Índice inválido.");
        return;
    }

    tarefas.splice(indice, 1);
    console.log("Tarefa removida com sucesso!");
}

// Função para marcar uma tarefa como concluída
function concluirTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Erro: Índice inválido.");
        return;
    }

    tarefas[indice].concluida = true;
    console.log("Tarefa marcada como concluída!");
}

// Exemplo de uso
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios físicos");
listarTarefas();
concluirTarefa(0);
listarTarefas();
removerTarefa(1);
listarTarefas();