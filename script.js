/* Script unifie pour le Portail Etudiant */

document.addEventListener('DOMContentLoaded', function() {
    
    /* Logique pour le Gestionnaire de Taches */
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    if (taskInput && addTaskBtn && taskList) {
        const addTask = function() {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded border-0';
                const span = document.createElement('span');
                span.textContent = taskText;
                span.className = 'fw-semibold text-dark';
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn btn-outline-danger btn-sm';
                deleteBtn.textContent = 'Supprimer';
                deleteBtn.addEventListener('click', function() { li.remove(); });
                li.appendChild(span);
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
                taskInput.value = '';
            }
        };
        addTaskBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') { addTask(); }
        });
    }

    /* Validation du formulaire */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            contactForm.classList.add('was-validated');
        }, false);
    }
});