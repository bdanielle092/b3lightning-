import createDoctor from "./doctor.js"
import BowWowKennels from "./pet.js"

const john = createDoctor("John Lee", "Eye doctor", "123 mallory ln")
console.log(john)

const rio = BowWowKennels("Rio", "lab")
console.log(rio)

const shelby = BowWowKennels("Shelby", "unKnown")
console.log(shelby)

const roo = BowWowKennels("Roobar", "blue heeler")
console.log(roo)