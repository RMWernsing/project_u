export class MealEntry {
  constructor(data) {
    this.id = data.id
    this.dayId = data.dayId
    this.accountId = data.accountId
    this.meal = data.meal
    this.servings = data.servings

  }

  imageBaseUrl = 'https://img.spoonacular.com/ingredients'

  get smImageURL() {
    return this.imageBaseUrl + '_100x100/' + this.meal.image
  }
  get medImageURL() {
    return this.imageBaseUrl + '_250x250/' + this.meal.image
  }
  get lgImageURL() {
    return this.imageBaseUrl + '_500x500/' + this.meal.image
  }
}