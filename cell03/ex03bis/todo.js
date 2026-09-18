$(document).ready(function () {

    $("#add").click(function () {

        let text = $("#todoInput").val().trim();

        if (text !== "") {
            addTodo(text);
            $("#todoInput").val("");
        }
    });

    function addTodo(text) {

        let todo = $("<div></div>")
            .addClass("todo")
            .text(text);

        todo.click(function () {
            $(this).remove();
        });

        $("#ft_list").prepend(todo);
    }

});