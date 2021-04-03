import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor(name, color) {
        this.id = generateId()
        this.name = name
        this.color = color
    }


    get Template() {
        return `
    <div class="col-md-4">
      <div class="pizza-card shadow mb-5 bg-white rounded">
          <div class="text-center ${this.color} p-2 d-flex justify-content-between">
              <h3>${this.name}</h3>
              <i class="fas fa-times ml-2 on-hoover" onclick="app.listsController.deleteList('${this.id}')"></i>
          </div>
          <div class="p-3 card-height">
              <ul>
                  ${this.Ingredients}
              </ul>
          </div>
          <form class="d-flex p-2" onsubmit="app.ingredientsController.addIngredient('${this.id}')">
              <input type="text" name="name" id="name" class="form-control" placeholder="Add Task..."
                  aria-describedby="helpId">
              <button type="submit" class="btn btn-success" title='add ingredient'><i
                      class="fas fa-plus"></i></button>
          </form>
      </div>
    </div>
    `
    }

    get Ingredients() {
        let ings = ProxyState.ingredients.filter(i => i.pizzaId === this.id)
        let template = ''
        ings.forEach(i => template += i.Template)
        return template
    }

}