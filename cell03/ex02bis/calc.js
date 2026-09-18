$("#submit").click(function () {

    let left = $("#left").val();
    let right = $("#right").val();
    let operator = $("#operator").val();

    if (
        left === "" ||
        right === "" ||
        !Number.isInteger(Number(left)) ||
        !Number.isInteger(Number(right)) ||
        Number(left) < 0 ||
        Number(right) < 0
    ) {
        alert("Error :(");
        return;
    }

    left = Number(left);
    right = Number(right);

    if ((operator === "/" || operator === "%") && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    if (operator === "+") {
        result = left + right;
    } else if (operator === "-") {
        result = left - right;
    } else if (operator === "*") {
        result = left * right;
    } else if (operator === "/") {
        result = left / right;
    } else if (operator === "%") {
        result = left % right;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);