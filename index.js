let todoInput = document.querySelector(".input");
let addToDoButton = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container");
let todo;
let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = localData || [];

/**Creating function to get unique id */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}

addToDoButton.addEventListener("click",(e) => {
    e.preventDefault();
    todo = todoInput.value;
    if (todo.length > 0){
        todoList.push({id:uuid(),todo,isCompleted: false})
    }
    renderTodoList(todoList);
    todoInput.value = "";
})
showTodos.addEventListener("click",(e) => {
  let key = e.target.dataset.key;
  let delTodokey = e.target.dataset.todokey
  todoList = todoList.map(todo => todo.id === key ? {...todo, isCompleted: !todo.isCompleted} : todo);
  todoList = todoList.filter(todo => todo.id !== delTodokey)
  localStorage.setItem("todo",JSON.stringify(todoList));
  renderTodoList(todoList);
  console.log(todoList);
})
function renderTodoList(){
  showTodos.innerHTML = todoList.map(({ id, todo, isCompleted})=> `<div class="relative"><input class = "t-checkbox" id ="item${id}" type="checkbox" data-key=${id}
  ${isCompleted ? "checked":""}> <label for="item-${id}" class ="todo todo-text t-pointer ${isCompleted ? "checked-todo" :""}"data-key=${id}>${todo}</label> <button class=" absolute right-0 button cursor" > <span data-todokey=${id} class="del-btn material-symbols-outlined">delete</span>
  </button>
  </div>`)

}
renderTodoList(todoList)