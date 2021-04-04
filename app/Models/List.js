import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor(name, color, id = generateId()) {
        this.id = id
        this.name = name
        this.color = color
    }


    get Template() {
        return `
    <div class="col-md-4">
      <div class="pizza-card shadow mb-5 bg-white rounded">
            <div class="header-card-h p-3 ${this.color}">
                <div class="d-flex justify-content-center flex-direction-column">
                    <div>
                    <h4 class="">${this.name}</h4>
                    </div>
                    <div>
                    <span>0</span>/<span>0</span>
                    </div>
                    
                </div>
                <div>
                <i class="fas fa-times ml-2 on-hoover" onclick="app.listsController.deleteList('${this.id}')"></i>
                </div>
            </div>

          <div class="p-3 card-height">
             
            <input type="checkbox" id="coding" name="interest" value="coding">
            ${this.Ingredients}
                  
          </div>
          <form class="d-flex p-2" onsubmit="app.ingredientsController.addIngredient('${this.id}')">
              <input type="text" name="name" required id="name" class="form-control" placeholder="Add Task..."
                  aria-describedby="helpId" required minlength="3" maxlength="50">
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