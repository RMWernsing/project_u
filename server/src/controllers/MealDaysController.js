import { Auth0Provider } from "@bcwdev/auth0provider";
import { mealEntriesService } from "../services/MealEntriesService.js";
import BaseController from "../utils/BaseController.js";
import { mealsService } from "../services/MealsService.js";
import { daysService } from "../services/DaysService.js";

export class MealDaysController extends BaseController {
  constructor() {
    super('mealDay')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/entry', this.addEntryToDay)
      .post('', this.addKnownEntry)
  }

  async addEntryToDay(request, response, next) {
    try {
      const mealData = request.body
      mealData.accountId = request.userInfo.id

      // {  spoonacularId, name, image, day?  }

      const meal = await mealsService.getOrCreateMeal(mealData)
      const day = await daysService.getOrCreateDay({ day: mealData.day, id: request.userInfo.id })
      const entry = await mealEntriesService.createEntry({
        dayId: day.id,
        mealId: meal.id,
        accountId: request.userInfo.id,
        // servings: req.body.servings
      })
      // create the meal entry

      response.send({ meal, day, entry })
    } catch (error) {
      next(error)
    }
  }

  async addKnownEntry(req, res, next) {
    try {
      // check body for mealId; 
      // if no mealId, spoonacular Id should be there; or fail if not
      // add new meal to Id 
      res.send('NOT HERE')
    }
    catch (error) {
      next(error)
    }
  }
}