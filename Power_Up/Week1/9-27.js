const sensei = {
    myName: "Splinter",
    myAge: 100,
    myWeapon: "knowledge",
    myOccupation: "Sensei",
    myLikes: ["Meditation", "Kung-fu", "Teaching"]
}

const {myName, myAge, myWeapon, myOccupation, myLikes}  = sensei
console.log(myName)
console.log(myAge)
console.log(myWeapon)
console.log(myOccupation)
console.log(myLikes)

const logTheSecondLike = () => console.log(myLikes[1])

logTheSecondLike()

const ninja = {
    name: "Raphael",
    age: 19,
    weapon: "sai",
    occupation: "Ninja Turtle",
    family:
        [{ name: "Leonardo", age: 17 }, { name: "Michelangelo", age: 18 }, { name: " Donatello", age: 19 }],
    likes: ["Pizza", "Kung-fu", "Fighting Crime"]

}

const Enemies = ["Shredder", "Baxter", "Toka", "Razhar"]
console.log(Enemies)

// const [first,second,,fourth] = Enemies

const [first, second, ...rest] = Enemies //destructuring the Emenies constant

console.log(first)

console.log(rest)


const { name, age, weapon, occupation, family: [{ name: value1, age: val3 }, { name: value2 }], likes: [l1, l2, l3] } = ninja //destructuring ninja


console.log(value2)
console.log(val3)
console.log(l2)

// Below you can play with arrow functions :) 

const otherCoolFunc = function myFunc() {
    console.log("Ninja Turtles Rock")
}

const coolFunc = () => console.log("Ninja's from coding dojo are the best")

coolFunc()
