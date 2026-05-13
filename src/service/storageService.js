import { Habit } from "../model/habit.js";

export class StorageService {
    constructor() {
        this.HABITS_KEY = "focusflow_habits";
        this.DATE_KEY = "focusflow_last_date";
    }

    saveHabits(habits) {
        localStorage.setItem(this.HABITS_KEY, JSON.stringify(habits));
    }

    getHabits() {
        const habitsData = localStorage.getItem(this.HABITS_KEY);
        const sinMapear = habitsData ? JSON.parse(habitsData) : [];

        return sinMapear.map(habitData => {
            const habit = new Habit(
                habitData.name,
                new Date(habitData.creationDate),
                habitData.daysHistory,
                habitData._status,
                habitData._type
            );
            habit.id = habitData.id;
            return habit;
        });
    }


    getLastDate() {
        const dateData = localStorage.getItem(this.DATE_KEY);
        return dateData ? new Date(dateData) : null;
    }

    updateLastDate() {
        const today = new Date().toLocaleDateString();
        localStorage.setItem(this.DATE_KEY, today);
    }
}