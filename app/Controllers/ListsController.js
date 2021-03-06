import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState } from "../Utils/LocalStorage.js";


// NOTE ======== DRAWING "NO TASKS" WHEN NO TASKS LISTED ==============
function _draw() {
  let lists = ProxyState.lists;
  let template = ''
  if (lists.length == 0) {
    template += '<div class="col text-center"><p><em>no tasks</em><p></div>'
  }
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on("lists", _draw);
    ProxyState.on("ingredients", _draw);
    loadState()
    _draw()
  }

  addList() {
    window.event.preventDefault()
    let form = window.event.target
    let rawList = {
      name: form['listName'].value,
      color: form['color'].value
      // NOTE question I change the "for" value on the from still got an error
      //but as soon as I chanced the id everything was good. 
    }
    listsService.addList(rawList)
    // reset form fields
    form.reset()
  }


  deleteList(id) {
    let prompt = window.confirm("Confirm Delete Item I");
    if (prompt) {
      listsService.deleteList(id)
    }
  }

}



