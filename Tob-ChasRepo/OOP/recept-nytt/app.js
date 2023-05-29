//Recipie class
class recipe {
    constructor(title, desc, time, instructions) {
        this.title = title
        this.desc = desc 
        this.time = time
        this.ingredients = []
        this.instructions = []
    }

    printRecipie = function () {
        console.log(`${this.title}, ${this.desc} that takes ${this.time} to make`);
        console.log("Ingredients:");
        this.ingredients.forEach(ingredient => {
            console.log(ingredient);
        });
    }

    addIngredient = function (ingredient) {
        this.ingredients.push(ingredient)
    }

    removeIngredient = function (ingredient) {
        const index = this.ingredients.indexOf(ingredient)
        this.ingredients.splice(index, 1)
    }
}

const chickenAndRice = new recipe("Chicken and Rice", "A delicious and easy recipie", "15 minutes")

chickenAndRice.addIngredient("Rice 200g")
chickenAndRice.addIngredient("Chicken")
chickenAndRice.addIngredient("Peas")
chickenAndRice.addIngredient("Spices")

chickenAndRice.removeIngredient("Spices")

chickenAndRice.printRecipie()

