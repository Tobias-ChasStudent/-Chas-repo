//Get the play area
const playArea = document.querySelector("#game-area");

//Get the timer
const h2Timer = document.querySelector("#time");

//Get the amount of mines
const h2Mines = document.querySelector("#amount-of-mines");

//Get the icon that we will use as a button
const btnIcon = document.querySelector("#icon-button")

//Create the array of mines and empty space
const arrMines = []

//Fill arrMines with mines and empty space
for (let i = 1; i < 82; i++) {
    if (i <= 20) {
        arrMines.push("mine")
    } else {
        arrMines.push("empty")
    }
}

//Shuffle the array
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}
shuffle(arrMines)
console.log(arrMines);

for (let i = 0; i < arrMines.length; i++) {
    let block = document.createElement("div")
    block.classList.add("mine-block", "dark-right")
    block.setAttribute("id", "box"+i)
    playArea.appendChild(block)
    document.querySelector("#box" + i).addEventListener("click", checkBlock)
       
}

function checkBlock(blockIndex) {
    let clickedBlock = blockIndex.target.id.split("box").join("")
    console.log(clickedBlock);
    if (arrMines[clickedBlock] == "mine") {
        console.log("mine");
        btnIcon.setAttribute("src", "./img/lose-icon.png")
        blockIndex.target.setAttribute("style", "background: #ff0000; border: none;")
        let mineImg = document.createElement("img")
        mineImg.setAttribute("src", "./img/mine-icon.png")
        blockIndex.target.appendChild(mineImg)
    } else {
        console.log("empty");
        blockIndex.target.classList.add("empty")
    }
}

function flagMine() {
    
}

function mine() {
    
}

function empty() {

}