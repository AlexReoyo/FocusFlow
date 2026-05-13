import { Habit } from "./model/habit.js";
import {HabitsList} from "./model/habits-list.js";
import { HabitController } from "./controller/habitController.js";
import { HabitService } from "./service/habitService.js";
import { HabitView } from "./view/view.js";
import { StorageService } from "./service/storageService.js";

const storageService = new StorageService();
const habitList = new HabitsList();
const habitService = new HabitService(habitList, storageService);
const habitView = new HabitView();
const habitController = new HabitController(habitView, habitService);

habitController.initialize();

