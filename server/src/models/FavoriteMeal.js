import { Schema } from "mongoose";

export const FavoriteMealSchema = new Schema({
  name: { type: String, required: true, },
  image: { type: String, required: true },
  spoonacularMealId: { type: String, required: true, unique: true },
  accountId: { type: Schema.ObjectId, required: true, ref: 'Account' },
},
  { timestamps: true, toJSON: { virtuals: true } }
)