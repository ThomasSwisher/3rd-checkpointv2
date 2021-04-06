import { ingredientsService } from "../Services/IngredientsService.js";


//Public
export default class IngredientsController {

    addIngredient(pizzaId) {
        let form = window.event.target
        let rawIng = {
            name: form['name'].value,
            pizzaId: pizzaId
        }
        ingredientsService.addIngredient(rawIng)
        // @ts-ignore
        form.reset()
    }

    deleteIngredient(id) {
        //let prompt = window.confirm("Confirm Delete Item I");
        if (window.confirm("Confirm Delete Item I")) {
            ingredientsService.deleteIngredient(id)
        }
    }
    completedTask(id) {
        ingredientsService.completedTask(id)

    }

}
