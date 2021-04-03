import { ingredientsService } from "../Services/IngredientsService.js";


//Public
export default class IngredientsController {

    addIngredient(pizzaId) {
        window.event.preventDefault()
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
        ingredientsService.deleteIngredient(id)
    }

}
