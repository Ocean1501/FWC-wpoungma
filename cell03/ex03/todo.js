let input = document.getElementById("todoInput");
let addButton = document.getElementById("add");
let list = document.getElementById("ft_list");

addButton.addEventListener("click", function () {

    let text = input.value.trim();

    if (text !== "") {
        addTodo(text);
        input.value = "";
    }
});

function addTodo(text) {

    let todo = document.createElement("div");
    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        todo.remove();
    });

    list.prepend(todo);
}