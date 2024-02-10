let boxes = document.querySelectorAll('.box')
turn = true;
let count = 0
let reset = document.querySelector(".reset-btn")
let winner = document.querySelector(".show")
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn) {
            box.innerText = "O"
            turn = false;


        }
        else {

            box.innerText = "X"
            turn = true
        }
        box.disabled = true
        let iswin = checkwin();
        count++;

        if (count === 9 && !iswin) {

            winner.innerText = "Game DRAW please Restart"

        }



    })


})

let checkwin = () => {
    for (let option of wins) {
        let p1 = boxes[option[0]].innerText;
        let p2 = boxes[option[1]].innerText;
        let p3 = boxes[option[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {

                console.log("Winner");
                disableBoxes()
                showwinner(p1)

                return true;
            }

        }


    }


}

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        count = 0
        box.disabled = false
        box.innerText = " "
    })
    winner.innerText = " Lets Play"
})


let showwinner = (e) => {


    winner.innerText = `Winner is ${e}`;

}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

};



