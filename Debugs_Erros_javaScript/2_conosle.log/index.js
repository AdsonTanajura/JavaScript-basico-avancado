class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    markCompleted() {
        console.log(`Marcando a tarefa '${this.title}' como concluída.`);
        this.completed = true;
    }

    toString() {
        return `${this.title} - ${this.completed ? 'Concluída' : 'Pendente'}`;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        console.log("TaskManager criado. Tarefas inicializadas.");
    }

    addTask(title, description) {
        const task = new Task(title, description);
        this.tasks.push(task);
        console.log(`Tarefa adicionada: ${task.toString()}`);
    }

    removeTask(title) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.title !== title);
        if (this.tasks.length < initialLength) {
            console.log(`Tarefa '${title}' removida com sucesso.`);
        } else {
            console.log(`Nenhuma tarefa encontrada com o título '${title}'.`);
        }
    }

    listTasks() {
        console.log("Listando todas as tarefas:");
        if (this.tasks.length === 0) {
            console.log("Nenhuma tarefa encontrada.");
            return;
        }
        this.tasks.forEach(task => {
            console.log(task.toString());
        });
    }

    completeTask(title) {
        const task = this.tasks.find(task => task.title === title);
        if (task) {
            task.markCompleted();
        } else {
            console.log(`Tarefa '${title}' não encontrada.`);
        }
    }
}

// Testando o TaskManager
const taskManager = new TaskManager();

// Adicionando tarefas
taskManager.addTask("Aprender JavaScript", "Estudar funções e objetos.");
taskManager.addTask("Criar projeto", "Implementar uma aplicação de gerenciamento de tarefas.");

// Listando tarefas
taskManager.listTasks();

// Concluindo uma tarefa
taskManager.completeTask("Aprender JavaScript");

// Removendo uma tarefa
taskManager.removeTask("Criar projeto");

// Listando tarefas novamente
taskManager.listTasks();
