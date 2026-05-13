import { HabitView } from "../view/view.js";
import { HabitService } from "../service/habitService.js";

export class HabitController {
    constructor(view, service) {
        this.view = view;
        this.service = service;
        view.bindAddHabit(this.handdleAddHabit);
        view.bindRemoveHabit(this.handdleRemoveHabit);
        view.bindCompleteHabit(this.handleCompleteHabit);
        view.bindFilterHandlers(this.handleGetCompletedHabits, this.handleGetPendingHabits, this.handleShowAllHabits);
        // allow view to call controller methods if needed
        view.controller = this;
    }

    initialize() {
        this.renderHabits();
    }

    handdleAddHabit = (name, creationDate, daysHistory, status, type) => {
        this.service.addHabit(name, creationDate, daysHistory, status, type);
        this.renderHabits();
    }
    handdleRemoveHabit = (habitId) => {
        this.service.removeHabit(habitId);
        this.renderHabits();
    }
    handleGetCompletedHabits = () => {
        const completedHabits = this.service.getCompletedHabits();
        const numberOfHabits = completedHabits.length;
        this.view.render(completedHabits, numberOfHabits);
    }
    handleGetPendingHabits = () => {
        const pendingHabits = this.service.getPendingHabits();
        const numberOfHabits = pendingHabits.length;
        this.view.render(pendingHabits, numberOfHabits);
    }
    handleShowAllHabits = () => {
        this.renderHabits();
    }

    handleCompleteHabit = (habitId) => {
        this.service.completeHabit(habitId);
        this.renderHabits();
    }


    renderHabits() {
        const habits = this.service.getHabits();
        const numberOfHabits = habits.length;
        this.view.render(
            habits,
            numberOfHabits
        );
    }
}