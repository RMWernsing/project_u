export class Day {
  constructor(data) {
    this.id = data.id
    this.day = new Date(data.day)
    this.calorieGoal = data.calorieGoal
    this.accountId = data.accountId
    this.journalBody = data.journalBody
    this.mood = data.mood
    this.mealEntries = data.mealEntry
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get dayCaloriesConsumed() {
    let dayCalorieCount = 0
    for (let i = 0; i < this.mealEntries.length; i++) {
      const mealDay = this.mealEntries[i];
      let mealTotal = (mealDay.meal.calorieCount * (mealDay.meal.servingSize ?? 1))
      dayCalorieCount += mealTotal
    }
    return dayCalorieCount.toFixed(0)
  }
}