// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get all cards
const cards = document.querySelectorAll(".card");
console.log(cards);

//Get the image inside the modal
const modalImg = document.querySelector("#modalImg");

// When the user clicks the button, open the modal 
function showModal(n) {
  //Displat the modal
  modal.style.display = "block";

  //Get the targeted img from the card
  let targetedImg = cards[n].firstElementChild;
  console.log(targetedImg);
  targetedImg = targetedImg.getAttribute("src")

  //Get the targeted img source
  modalImg.setAttribute('src', targetedImg)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}