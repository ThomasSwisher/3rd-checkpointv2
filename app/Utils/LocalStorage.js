import { ProxyState } from "../AppState.js";
import Ingredient from "../Models/Ingredient.js";
import List from "../Models/List.js";


export function saveState() {
    localStorage.setItem('pizzashack', JSON.stringify({
        lists: ProxyState.lists,
        ingredients: ProxyState.ingredients
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('pizzashack'))
    //debugger
    if (data) {

        ProxyState.lists = data.lists.map(list => new List(list.name, list.color, list.id));
        ProxyState.ingredients = data.ingredients.map(ing => new Ingredient(ing.name, ing.pizzaId, ing.id));
    }
}