
function changeColor(id) {
    if (color == "rgb(255, 0, 0)") {
        document.getElementById("player").innerText = "Player2 has to play , color is red";
        color = "rgb(0, 0, 255)";
    } else {
        document.getElementById("player").innerText = "Player1 has to play , color is blue";
        color = "rgb(255, 0, 0)";
    }
    let [changeColorId, from, to] = findCircle(id);
    if (changeColorId == "Please select different column") {
        document.getElementById("player").innerText = "Please select different column";
        document.getElementById("player").style.backgroundColor = "red";
    } else {
        changeColorId = changeColorId.toString();
        document.getElementById("player").style.backgroundColor = "white";
        document.getElementById(changeColorId).style.backgroundColor = color;
        checkWinner(color, from, to);

    }
}

function findCircle(id) {
    let circleNumber = 0;
    for (let i = id; i <= 36; i++) {
        if (i % 6 == 0) {
            circleNumber = i;
            break;
        }
    }

    let constCircleNumber = circleNumber;

    let minimumOfAlreadyMarked = circleNumber - 5;

    while (checkAlreadyMarked(circleNumber)) {

        circleNumber -= 1;
        if (minimumOfAlreadyMarked > circleNumber) {
            return ["Please select different column", 0, 0]
        }
    }
    return [circleNumber, minimumOfAlreadyMarked, constCircleNumber];
}

function checkAlreadyMarked(circleNumber) {
    let backgroundColor = getComputedStyle(document.getElementById(circleNumber)).backgroundColor;
    if (backgroundColor != "rgb(128, 128, 128)") {
        return true;
    } else {
        return false;
    }
}

function checkWinner(color, from, to) {
    // Vertical 
    let count = 0;
    for (let index = from; index <= to; index++) {
        let bgColor = getComputedStyle(document.getElementById(index)).backgroundColor;
        if (bgColor == color) {
            count++;
        } else {
            count = 0;
        }
    }

    if (count == 4) {
        if (color == "rgb(255, 0, 0)") {
            document.getElementById("player").innerText = "Player2 won the game!!!"
        } else {
            document.getElementById("player").innerText = "Player1 won the game!!!"

        }
    } else {
        if (checkAllCirclesAreSelected) {
            disableCircle("container")
        }
    }


    //Horizontal reverse
    let countVR = 0;
    for (let index = from - 1; index <= 36; index = index + 6) {
        let bgColorVR = getComputedStyle(document.getElementById(index)).backgroundColor;
        if (bgColorVR == color) {
            countVR++;
        } else if (countVR < 4) {
            countVR = 0;
        }
    }

    if (countVR == 4) {
        if (color == "rgb(255, 0, 0)") {
            document.getElementById("player").innerText = "Player2 won the game!!!"
        } else {
            document.getElementById("player").innerText = "Player1 won the game!!!"

        }
    } else {
        if (checkAllCirclesAreSelected) {
            disableCircle("container")
        }
    }


    //Horizontal
    let countV = 0;
    console.log(to);
    for (let index = to; index >= 6; index = index - 6) {
        let bgColorV = getComputedStyle(document.getElementById(index)).backgroundColor;
        if (bgColorV == color) {
            countV++;
        } else if (countV < 4) {
            countV = 0;
        }
    }

    if (countV == 4) {
        if (color == "rgb(255, 0, 0)") {
            document.getElementById("player").innerText = "Player2 won the game!!!"
        } else {
            document.getElementById("player").innerText = "Player1 won the game!!!"

        }
    } else {
        if (checkAllCirclesAreSelected) {
           disableCircle("container");
        }
    }


}

function checkAllCirclesAreSelected() {
    let selected = true;
    for (let index = 1; index <= 36; index++) {
        if (getComputedStyle(document.getElementById(index)).backgroundColor == "rgb(128, 128, 128)") {
            selected = false;
            return selected;
        } 
        
    }

    return selected;
}


function checkDiagonal() {

}

function disableCircle(id){
    document.getElementById(id).disabled = "true";
    document.getElementById(id).style.backgroundColor = "#ccc";

}
