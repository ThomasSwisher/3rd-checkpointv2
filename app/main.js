//  NOTE IMPORTING CONTROLLERS=====================
import IngredientsController from "./Controllers/IngredientsController.js";
import ListsController from "./Controllers/ListsController.js";

class App {
  // NOTE =================LISTS CREATOR============================
  listsController = new ListsController();
  // NOTE =================TASK CREATOR============================
  ingredientsController = new IngredientsController();
}

window["app"] = new App();
