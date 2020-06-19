import createDoctor from "./doctor.js"
import createPet from "./pet.js"

const john = createDoctor("John Lee", "Eye doctor", "123 mallory ln")
console.log(john)

const rio = createPet("Rio", "lab")
console.log(rio)

const shelby = createPet("Shelby", "unKnown")
console.log(shelby)

const roo = createPet("Roobar", "blue heeler")
console.log(roo)