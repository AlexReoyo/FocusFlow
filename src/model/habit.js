
export class Habit {
    static types = Object.freeze({
        SALUD: 'salud',
        MENTE: 'mente',
        TRABAJO: 'trabajo',
    });
    static statuses = Object.freeze({
        PENDING: 'pending',
        COMPLETED: 'completed',
    });

    constructor(name, creationDate, daysHistory, status, type) {
        this.name = name;
        this.creationDate = creationDate;
        this.daysHistory = daysHistory;
        this.status = status;
        this.type = type;
        this.id = Date.now();
    }

    set type(value) {
        if (Object.values(Habit.types).includes(value)) {
            this._type = value;
        } else {
            throw new Error(`Tipo de hábito no válido: ${value}`);
        }
    }
    set status(status) {
        if (Object.values(Habit.statuses).includes(status)) {
            this._status = status;
        } else {
            throw new Error(`Estado de hábito no  álido: ${status}`);
        }
    }

    get status() {
        return this._status;
    }
    get type() {
        return this._type;
    }

    addDayHistory(date) {
        this.daysHistory.push(date);
    }
}