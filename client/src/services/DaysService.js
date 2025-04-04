import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Day } from "@/models/Day.js"
import { AppState } from "@/AppState.js"
import { MealDay } from "@/models/mealDay.js"

class DaysService {
  async getOrCreateCurrentDay() {
    const response = await api.get('day')
    logger.log(response.data)
    const day = new Day(response.data)
    AppState.activeDay = day
    const mealDays = response.data.mealDays.map(md => new MealDay(md))
    AppState.mealDays = mealDays
  }

}

export const daysService = new DaysService()