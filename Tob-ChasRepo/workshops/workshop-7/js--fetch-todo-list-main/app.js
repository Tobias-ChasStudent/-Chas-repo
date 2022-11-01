//Get the list
let list = document.querySelector(".todoList")

//Fetch the JSON data
async function getData() {
    fetch("todo.json")
        .then((Response) => Response.json())
        .then((data) => {
            let arrData = data.items

            //Loop through each element in arrData
            arrData.forEach(element => {
                console.log(element);
                //Create the list item
                let listItem = document.createElement("li")

                //If the task is completed display a check and make it green
                if (element.completed == "true") {
                    listItem.textContent = element.item + " ✓";
                    listItem.classList.add("completed")
                } else { //Else, display a cross and make it red
                    listItem.textContent = element.item + " ✗";
                    listItem.classList.add("incomplete")
                }

                //Append the list item to the todolist
                list.appendChild(listItem)
            });
        });
}
getData()