

let ting = new Audio("ting.mp3")
let gameOver = new Audio("game-over.mp3");

let turn = "X"
let isgameover = false


// Function to change  the turn .
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}



// Function to check the win 

const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let boxtexts = document.getElementsByClassName("boxtext");
    wins.forEach((e) => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText !== "") {
            document.querySelector(".info").innerText = `${boxtexts[e[0]].innerText} Won`
            isgameover = true

            document.querySelector("#imgbox").getElementsByTagName("img")[0].style.width = "200px"
        }
    })

}


// Game Logic Begins Here 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext")

    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn()
            ting.play()
            checkWin()
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = `Turn For ${turn}`;
            }
        }
    })
})


// Reset All 

document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((e) => {
        e.innerText = ""
    })

    turn = "X"
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = `Turn For ${turn}`;
    document.querySelector("#imgbox").getElementsByTagName("img")[0].style.width = "0px"

})

