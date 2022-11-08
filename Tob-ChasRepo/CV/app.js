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
            //console.log(itemKey);
            //console.log(element[itemKey]);
            
            //Create the article box for the project
            let project = document.createElement("article")
            project.id = itemKey
            
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
}
portfolioJSON()