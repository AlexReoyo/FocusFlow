
export class HabitView {
    constructor() {
        this.app = document.getElementById('app');
    }

    render(habits, numberOfHabits, handdleAddHabit, handdleRemoveHabit, handleGetCompletedHabits, handleGetPendingHabits) {
        const habitListElement = document.getElementById('habit-list');
        habitListElement.innerHTML = '';

        const totalCountEl = document.getElementById('total-count');
        if (totalCountEl) totalCountEl.textContent = String(numberOfHabits || habits.length);

        if (!habits || habits.length === 0) {
            habitListElement.innerHTML = '<div class="empty-state"><p>No tienes hábitos aún. ¡Empieza creando uno arriba!</p></div>';
        }

        habits.forEach(habit => {
            const li = document.createElement('li');
            // Añadimos clases para el estilo base y el estado completado
            li.className = `habit-item ${habit.status}`;
            li.classList.add(habit.type.toLowerCase()); // Clase adicional según el tipo de hábito

            const isCompleted = habit.status === 'completed';
            const toggleBtnClass = `toggle-btn${isCompleted ? ' completed' : ''}`;
            const toggleBtnDisabled = isCompleted ? 'disabled' : '';
            const toggleBtnText = isCompleted ? 'Completado' : 'Completar';

            li.innerHTML = `
                <div class="habit-content ${habit.type.toLowerCase()} ${habit.status}">
                    <h3 class="habit-title">${habit.name}</h3>

                    <div class="habit-details">
                        <span class="detail-item date">
                             Inicio: ${habit.creationDate.toDateString()}
                        </span>
                        <br>
                        <span class="detail-item streak">
                             ${habit.daysHistory.length || 0} días🔥
                        </span>
                        <br>

                        <span class="detail-item type">
                             ${habit.type.toLowerCase()}
                        </span>
                        <span class="detail-item status">
                             ${habit.status}
                        </span>
                    </div>
                </div>

                <div class="habit-btns">
                    <button class="${toggleBtnClass}" data-id="${habit.id}" title="Cambiar estado" ${toggleBtnDisabled} aria-disabled="${isCompleted}">
                        ${toggleBtnText}
                    </button>
                    <button class="remove-btn" data-id="${habit.id}" title="Eliminar">
                        Eliminar
                    </button>
                </div>
            `;

            habitListElement.appendChild(li);
        });
        // Note: filter buttons are bound via `bindFilterHandlers` to avoid re-adding listeners on every render
    }

    bindAddHabit(handler) {
        const addHabitForm = document.getElementById('habit-form');
        addHabitForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const nameInput = document.getElementById('habit-name');
            const typeInput = document.getElementById('habit-category');

            handler(nameInput.value, new Date(), [], 'pending', typeInput.value);
        });
    }

    bindRemoveHabit(handler) {
        const habitListElement = document.getElementById('habit-list');
        if (!habitListElement) return;
        // Delegation: single listener handles all current and future remove buttons
        habitListElement.addEventListener('click', (event) => {
            const btn = event.target.closest('.remove-btn');
            if (!btn) return;
            const habitId = btn.dataset.id;
            handler(habitId);
        });
    }

    bindCompleteHabit(handler) {
        const habitListElement = document.getElementById('habit-list');
        if (!habitListElement) return;
        // Delegation: single listener handles all current and future toggle buttons
        habitListElement.addEventListener('click', (event) => {
            const btn = event.target.closest('.toggle-btn');
            if (!btn) return;
            if (btn.classList.contains('completed')) return; // Evitar completar si ya está completado  
            const habitId = btn.dataset.id;
            handler(habitId);
        });
    }

    bindFilterHandlers(completedHandler, pendingHandler, showAllHandler) {
        const showCompletedBtn = document.getElementById('show-completed');
        const showPendingBtn = document.getElementById('show-pending');
        const showAllBtn = document.getElementById('show-all');

        const setActiveButton = (activeBtn) => {
            [showAllBtn, showCompletedBtn, showPendingBtn].forEach(btn => {
                if (btn) btn.classList.remove('active');
            });
            if (activeBtn) activeBtn.classList.add('active');
        }

        if (showCompletedBtn) {
            showCompletedBtn.addEventListener('click', () => {
                completedHandler();
                setActiveButton(showCompletedBtn);
            });
        }
        if (showPendingBtn) {
            showPendingBtn.addEventListener('click', () => {
                pendingHandler();
                setActiveButton(showPendingBtn);
            });
        }
        if (showAllBtn) {
            showAllBtn.addEventListener('click', () => {
                showAllHandler();
                setActiveButton(showAllBtn);
            });
        }

    }

}