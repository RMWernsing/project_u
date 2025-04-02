import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { DaySchema } from '../models/Day.js';
import { MealSchema } from '../models/Meal.js';
import { ExerciseSchema } from '../models/Exercise.js';


class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Day = mongoose.model('Day', DaySchema);
  Meal = mongoose.model('Meal', MealSchema);
  Exercise = mongoose.model('Exercise', ExerciseSchema);
}

export const dbContext = new DbContext()
