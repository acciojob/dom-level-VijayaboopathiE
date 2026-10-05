//your JS code here. If required.
function findDOMLevel() {

    const element = document.getElementById("level");

    let level = 0;
    let currentElement = element;

    while (currentElement !== null) {

        level++;

        if (currentElement.tagName === "HTML") {
            break;
        }

        currentElement = currentElement.parentElement;
    }

    alert("The level of the element is: " + level);
}

findDOMLevel();