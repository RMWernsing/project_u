import { Schema } from "mongoose";

export const MealSchema = new Schema(
  {
    spoonacularMealId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    calorieCount: { type: Number, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)


