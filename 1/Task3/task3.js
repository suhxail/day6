// Write a loop that makes seven calls to console.log to output the following triangle:

let n = 7;
let str = "";

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str += "#";
    }
    str += "\n"
}
console.log(str)

// Iterate through the string array and print it contents

var strArray = ["<option>Jazz</option>",
    , "<option>Blues</option>",
    , "<option>New Age</option>",
    , "<option>Classical</option>",
    , "<option>Opera</option>"]

const result = strArray.map((element) => {
    console.log(element)
})

// write a code to count the elements in the array.Don’t use length property

var myarray = [11, 22, 33, 44, 55]

function arrayLength(s) {
    let length = 0;
    while (myarray[length] !== undefined) {
        length++
    }
    return length
}

console.log(arrayLength(myarray))

// find the fifth element of the food array

let foods = ["idli", "dosa", "poori", "pongal", "masaladosa", "ravadosa", "oniondosa", "ravaidli", "chappathi", "naan", "briyani", "firedRice", "noodles", "idiyappam", "uthappam", "paniyaaram", "bajji", "pulao", "shawarma", "rotti"]

console.log(foods[5], foods.length)

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
    "Mari",
    "MaryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
]

friends.splice(0, 1, "Munnabai")
console.log(friends)

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

for (let i = 0; i <= 2; i++) {
    console.log(friends[i])
}

// We have two lists of friends below.Use array methods to combine them into one alphabetically - sorted list.

var friends1 = [
    "Mari",
    "MaryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK Chandran"
]

var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
]

let mergedArray = [];

for (let i = 0; i <= friends1.length - 1; i++) {
    mergedArray.push(friends1[i])
}

for (let j = 0; j <= friends2.length - 1; j++) {
    mergedArray.push(friends2[j])
}

let sortedArray = mergedArray.sort()
console.log("sortedArray", sortedArray)

// Add Mr or Ms to the names in the friends array.

let editedArray = sortedArray.map((element) => `Mr.${element}`)
console.log("editedArray", editedArray)

// Concat all the names the friends array and return as comma “,” seperated string.

let concatedArray = sortedArray.join()
console.log("concatedArray", concatedArray)


// Find the friends names who has letter ‘a’ and return the list.

let namesWithA = []
for (let i = 0; i < sortedArray.length; i++) {
    {
        if (sortedArray[i].includes("a")) {
            namesWithA.push(sortedArray[i])
        }
    }
}
console.log("namesWithA", namesWithA)


// Find the avg length of all the friends names.Get the individual length of the names and do the avg.

let averageLength = 0
for (let i = 0; i < sortedArray.length; i++) {

    (averageLength += sortedArray[i].length / sortedArray.length)
    console.log("individualLength", sortedArray[i].length)
}
console.log("averageLength", averageLength)


// Find the names and return the list starting with letter M.

const listOfNames = []
const firstLetter = sortedArray.map((word) => {
    if (word.charAt(0) === "M") {
        listOfNames.push(word)
    }
})
console.log("list of names that starts with m", listOfNames)

// Find the name with max characters and return the name.
let maximumCharacters = 1
let minimumCharacters = sortedArray[0].length
for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i].length > maximumCharacters) {
        maximumCharacters = sortedArray[i]
    } else if (sortedArray[i].length < minimumCharacters) {
        minimumCharacters = sortedArray[i]
    }
}
console.log("maximumCharacters", maximumCharacters)

// Find the name with min characters and return the name.

console.log("minimum characters", minimumCharacters)


// Add your name to the end of the friends array, and add another name to beginning.

let anotherName = sortedArray.splice(0, 0, "Aslam")

let myName = sortedArray.push("Suhail")
console.log(myName)


function removeDuplicates(data) {
    return sortedArray.filter((value, index) => data.indexOf(value) === index)
}
console.log(removeDuplicates(sortedArray))


// Get the first item, the middle item and the last item of the array

console.log("first item:", sortedArray[0], ",", "second item:", sortedArray[6], ",", "last item:", sortedArray[11])

// Find the average in the array below.

const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "Captain America", 8, 10]
console.log(typeof(friendsInfo[0]))
let friendsAverage = 0
const map = friendsInfo.map((array) => {
    if(!isNaN(array)) {
        friendsAverage += array / friendsInfo.length
    }
})

console.log("Average in friends info array:", friendsAverage)

// Print the contents of the input variable

var input = [
    ["0001","Roman Alamsyah","Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002","Dika Sembiring", "Medan", "10/10/1992","Bermain Gitar"],
    ["0003","Winona","Ambon","25/12/1965","Memasak"],
    ["0004","Bintang Senjaya","Martapura","6/4/1970","Berkebun"]
]

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        input[i].map((object) => console.log("contents of the input", object))
    }
}

dataHandling(input);

// Objects:

// What is the output

myObject = {1:"one", "11":1, "name" :"arun"}

console.log(myObject[11])
console.log(myObject.name)

// Add a new key value pair to myobject

myObject.ten = "ten"
console.log(myObject)  

// Write out an object literal to represent the data below.

const address = {
    line1 : "Guvi",
    line2 : "Geek",
    line3: "IIT-M RP",
    line4 : "Chennai."
}
console.log(address)

// How would you represent the following data using a combination of object literals and arrays ? (You can describe a strategy without typing or writing out the whole thing.)

const address2 = [{
    1: ["Guvi", "Geek", "6", "IIT-M RP","Chennai."],
    2: ["Amazon", "Inc", "31", "SP Infocity", "Chennai."],
    3: ["Google", "Alphabet", "34 Amphitheater Parkway", "MountainView.",],
    4: ["Tesla", "Inc" , "32", "333 Santana Row", "San Jose."]
}]
console.log(address2)


