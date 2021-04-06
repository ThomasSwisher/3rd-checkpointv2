import { generateId } from "../Utils/GenerateId.js"

export default class Ingredient {
    constructor(name, pizzaId, id = generateId(), taskCompleted = false) {
        this.id = id
        this.name = name
        this.pizzaId = pizzaId
        this.taskCompleted = taskCompleted
    }

    get Template() {
        return /*html*/`<div><input class="itemsChecked" name="itemCheckBox" type="checkbox" onclick="app.ingredientsController.completedTask('${this.id}')"> ${this.name} <i class="fas fa-backspace ml-2 text-danger on-hoover" onclick="app.ingredientsController.deleteIngredient('${this.id}')"></i></div>`
    }
}