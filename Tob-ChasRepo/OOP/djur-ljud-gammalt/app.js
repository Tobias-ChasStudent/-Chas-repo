//Constructor
function animalSound(animal, sound) {
    this.animal = animal
    this.sound = sound
}
animalSound.prototype.makeSound = function () {
    return "The " + this.animal + " " + this.sound + "s"
}

const cow = new animalSound("cow", "moo")
const cat = new animalSound("cat", "meow")

console.log(cow.makeSound());
console.log(cat.makeSound());