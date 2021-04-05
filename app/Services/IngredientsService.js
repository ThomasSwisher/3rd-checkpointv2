import { ProxyState } from "../AppState.js";
import Ingredient from "../Models/Ingredient.js";
import { saveState } from "../Utils/LocalStorage.js";

class IngredientsService {
    deleteIngredient(id) {
        ProxyState.ingredients = ProxyState.ingredients.filter(i => i.id != id)
        window.confirm("Confirm Delete Item")
        saveState()

    }
    addIngredient(newIng) {
        ProxyState.ingredients.push(new Ingredient(newIng.name, newIng.pizzaId))
        saveState()
        ProxyState.ingredients = ProxyState.ingredients
        document.getElementById("numbItems").innerHTML = ProxyState.ingredients.length
    }


}

// document.querySelectorAll('input[name="itemCheckBox"]').click(function () {
//     let checkBoxCount = document.querySelectorAll('input[name="itemCheckBox"]:checked');
//     document.getElementById("itemChecked").innerHTML = checkBoxCount.length
//     console.log(checkBoxCount)
// })

export const ingredientsService = new IngredientsService();

