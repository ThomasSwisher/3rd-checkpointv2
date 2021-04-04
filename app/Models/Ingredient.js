import { generateId } from "../Utils/GenerateId.js"

export default class Ingredient {
    constructor(name, pizzaId, id = generateId()) {
        this.id = id
        this.name = name
        this.pizzaId = pizzaId
    }

    get Template() {
        return `<div><input class="itemsChecked" name="itemCheckBox" type="checkbox"> ${this.name} <i class="fas fa-backspace ml-2 text-danger on-hoover" onclick="app.ingredientsController.deleteIngredient('${this.id}')"></i></div>`
    }
}