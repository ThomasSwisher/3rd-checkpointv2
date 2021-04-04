import { ProxyState } from "../AppState.js";
import Ingredient from "../Models/Ingredient.js";
import { saveState } from "../Utils/LocalStorage.js";

class IngredientsService {
    deleteIngredient(id) {
        ProxyState.ingredients = ProxyState.ingredients.filter(i => i.id != id)
        saveState()

    }
    addIngredient(newIng) {
        ProxyState.ingredients.push(new Ingredient(newIng.name, newIng.pizzaId))
        saveState()
        ProxyState.ingredients = ProxyState.ingredients
    }
}

export const ingredientsService = new IngredientsService();

