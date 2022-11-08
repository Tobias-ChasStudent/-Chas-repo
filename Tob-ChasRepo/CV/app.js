/* Projects */
//Get the main area
const divProjects = document.querySelector(".projects");

//Fetch the portfolio JSON file
function portfolioJSON() { 
    fetch("../portfolio.json")
    //Tell js it's a json file
    .then((Response) => Response.json())
    //Do something with the data
    .then((data) => {
        //Get the array of projects
        let arrPortfolio = data.Projects
        //console.log(arrPortfolio);
        
        //Loop through each one and create an element in divProjects
        arrPortfolio.forEach(element => {
            let itemKey = Object.keys(element)
            let itemID = itemKey.toString()
            itemID = itemID.replace(" ", "-")
            console.log(itemID);
            //console.log(itemKey);
            //console.log(element[itemKey]);
            
            //Create the article box for the project
            let project = document.createElement("article")
            project.id = itemID
            
            //Create the title and append it to the article
            let header = document.createElement("h3")
            header.textContent = itemKey
            project.appendChild(header)
            
            //Create the text and append it to the article
            let text = document.createElement("p")
            text.textContent = element[itemKey]
            project.appendChild(text)
            
            //Append the project to divProjects
            divProjects.appendChild(project)
        });
    })
    .then(() => {
        //Get the "My Projects" article
        const articleMyProjects = document.querySelector("#My-Projects")

        //Get the modal window
        const sectionModal = document.querySelector(".modal")

        //Get the modal content
        const divModalContent = document.querySelector(".modal-content")

        //Add event listener to the article to display a modal
        articleMyProjects.addEventListener("click", () => {
            sectionModal.classList.add("displayModal")
        })

        sectionModal.addEventListener("click", (e) => {
            if (e.target != divModalContent) {
                sectionModal.classList.remove("displayModal")
            }
        })
    })
}
portfolioJSON()
