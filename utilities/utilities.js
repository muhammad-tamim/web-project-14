function getInputValue(id) {
    document.getElementById(id).value;
}

function handleToggle(id, status) {
    const element = document.getElementById(id);

    if (status === "block") {
        element.classList.remove("hidden");
        element.classList.add("block");
    }
    else if (status === "hidden") {
        element.classList.remove("block");
        element.classList.add("hidden");
    }
}



