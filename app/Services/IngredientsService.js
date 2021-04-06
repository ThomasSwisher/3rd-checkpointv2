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
        document.getElementById("numbItems").innerHTML = ProxyState.ingredients.length
    }
    completedTask(id) {
        let foundTask = ProxyState.ingredients.find(i => i.id == id)
        foundTask.taskCompleted = true

        let totalCompleted = 0
        for (let i = 0; i < ProxyState.ingredients.length; i++) {
            const ingredient = ProxyState.ingredients[i];
            if (ingredient.taskCompleted) {
                totalCompleted++
            } else {

            }
        }
        document.getElementById("itemChecked").innerHTML = totalCompleted
    }


}







export const ingredientsService = new IngredientsService();

