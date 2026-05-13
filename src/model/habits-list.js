import {Habit} from './habit.js';

export class HabitsList {
    constructor() {
        this.habits = [];
    }

    addHabit(habit) {
        if (habit instanceof Habit) {
            this.habits.push(habit);
        } else {
            throw new Error('El objeto no es una instancia de Habit');
        }
    }

    getHabits() {
        return this.habits;
    }

    removeHabit(habitId) {
        const id = Number(habitId);
        this.habits = this.habits.filter(habit => habit.id !== id);
    }

    getCompletedHabits() {
        return this.habits.filter(habit => habit.status === 'completed');
    }

    getPendingHabits() {
        return this.habits.filter(habit => habit.status === 'pending');
    }
}