import { FoodSnippet } from "@/models/FoodSnippet.js"
import { spoonacularApi } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class FoodSnippetsService {
  async getRandomFact() {
    const response = await spoonacularApi.get('/food/trivia/random')
    const snippet = new FoodSnippet(response.data)
    AppState.snippet = snippet
  }
  async getRandomJoke() {
    const response = await spoonacularApi.get('/food/jokes/random')
    const snippet = new FoodSnippet(response.data)
    AppState.snippet = snippet
  }

}

export const foodSnippetsService = new FoodSnippetsService()