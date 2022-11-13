//Get the play area
const playArea = document.querySelector("#game-area");

//Get the timer
const h3Timer = document.querySelector("#time");
let h3TimerContent = parseInt(h3Timer.textContent)

//Get the amount of mines
const h3Mines = document.querySelector("#amount-of-mines");

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
//Run the mines array through the function
shuffle(arrMines)

//log the new order
console.log(arrMines);

//Create a block for each item in arrMines
for (let i = 0; i < arrMines.length; i++) {

    //Create a variable with a div inside
    let block = document.createElement("div")

    //Add the necessary class and id
    block.classList.add("mine-block", "dark-right")
    block.setAttribute("id", "box"+i)

    //append the variable(element) to the play area
    playArea.appendChild(block)

    //add an event listener to the box
    document.querySelector("#box" + i).addEventListener("click", checkBlock, true)
       
}

function checkBlock(blockIndex) {
    //convert the clicked box's id into the index it has in arrMines
    let clickedBlock = blockIndex.target.id.split("box").join("")
    console.log(clickedBlock);

    //check if it was a mine
    if (arrMines[clickedBlock] == "mine") {
        console.log("mine");

        //Stop the timer
        timer("Stop")

        //make the smile into a dead frown
        btnIcon.setAttribute("src", "./img/lose-icon.png")

        //Make the background red and remove the border
        blockIndex.target.setAttribute("style", "background: #ff0000; border: none;")

        //create an img element
        let mineImg = document.createElement("img")

        //add the mine icon to the clicked box
        mineImg.setAttribute("src", "./img/mine-icon.png")
        blockIndex.target.appendChild(mineImg)

        //remove every eventlistener to stop the player from playing more
        for (let index = 0; index < 82; index++) {
            document.querySelector("#box"+index).removeEventListener("click", checkBlock, true)
            console.log("killed event listener");
        }

    } else {
        //if it wasn't a mine, 
        console.log("empty");
        blockIndex.target.classList.add("empty")
        if (document.querySelectorAll(".empty").length == 1) {
            timer("Start")
        } 
    }
}

function timer(key) {
    if (key == "Start") {
        var timerInterval = setInterval(() => {
            h3TimerContent += 1;
            h3Timer.textContent = h3TimerContent
        }, 1000)
    } else {
        clearInterval(timerInterval)
        console.log("Dead?");
    }
}

function flagMine() {
    
}
