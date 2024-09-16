// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Função para criar uma nova tarefa
    function createTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="removeButton">Remover</button>
        `;
        
        // Marcar tarefa como concluída
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Remover tarefa
        li.querySelector('.removeButton').addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });

        taskList.appendChild(li);
    }

    // Adicionar nova tarefa
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            createTask(taskText);
            taskInput.value = '';
        }
    });

    // Permitir adicionar tarefa ao pressionar Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});

