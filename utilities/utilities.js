function getInputValue(id) {
    return document.getElementById(id).value;
}

function getIntegerInputValue(id) {
    const element = document.getElementById(id).value;
    const convertedElement = parseInt(element);
    return convertedElement;
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



