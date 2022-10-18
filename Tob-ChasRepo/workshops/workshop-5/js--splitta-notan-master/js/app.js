function calculate() {
    /* Fetch all elements */
    const sum = document.querySelector("#sum");
    const friends = document.querySelector("#numberOfFriends");
    const tip = document.querySelector("#tip");
    const showsum = document.querySelector("#showSum");
    const result = document.querySelector("#result");

    /* Log the different values */
    console.log(sum.value);
    console.log(friends.value);
    console.log(tip.value);

    /* Calculate the whole sum */
    let totalBil = ((sum.value * tip.value) + parseInt(sum.value)) / parseInt(friends.value);

    /* Log totalTip */
    console.log(totalBil);

    /* Show the sum */
    showsum.classList.toggle("hide");
    result.textContent = totalBil + " kr";
}