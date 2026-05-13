import { Habit } from "../model/habit.js";
import { HabitsList } from "../model/habits-list.js";

export class HabitService {
    constructor(habits, storageService) {
        this.habits = habits;
        this.storageService = storageService;

        this.init();
    }

    init() {
        this.habits.habits = this.storageService.getHabits();

        const lastDate = this.storageService.getLastDate();
        const today = new Date().toLocaleDateString();

        if (lastDate && lastDate.toLocaleDateString() !== today) {
            this.processNewDay();
        }

        this.storageService.updateLastDate();
        
    }

    processNewDay() {
        const habits = this.habits.getHabits();
        habits.forEach(habit => {
            if (habit.status === 'completed') {
                habit.status = 'pending';
            }
        });
        this.saveHabits();
    }

    saveHabits() {
        this.storageService.saveHabits(this.habits.getHabits());
    }

    addHabit(name, creationDate, daysHistory, status, type) {
        this.habits.addHabit(new Habit(name, creationDate, daysHistory, status, type));
        this.saveHabits();
    }

    getHabits() {
        return this.habits.getHabits();
    }

    removeHabit(habitId) {
        this.habits.removeHabit(habitId);
        this.saveHabits();
    }

    getCompletedHabits() {
        return this.habits.getCompletedHabits();
    }

    getPendingHabits() {
        return this.habits.getPendingHabits();
    }

    completeHabit(habitId) {
        const habit = this.habits.getHabits().find(h => h.id === Number(habitId));
        if (habit) {
            habit.status = 'completed';
            habit.daysHistory.push(new Date());
        }
        this.saveHabits();
    }
}