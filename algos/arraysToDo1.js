// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

function pushFront(myArray, value) {
    for (let i = myArray.length; i >= 0; i--) {
        myArray[i] = myArray[i-1]
    }
    myArray[0] = value
    return myArray
}

console.log(pushFront([5,7,2,3], 8)) // [8,5,7,2,3]
console.log(pushFront([99], 7)) // [7,99]

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

function popFront(myArray) {
    let front = myArray[0]
    for(let i = 0; i < myArray.length; i++) {
        myArray[i] = myArray[i + 1]
    }
    myArray.length = myArray.length - 1
    console.log(myArray)
    return front
}

console.log(popFront([0,5,10,15])) // 0 returned, with [5,10,15] printed in the function
console.log(popFront([4,5,7,9])) // 4 returned, with [5,7,9] printed in the function

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

function insertAt(myArray, idx, value) {
    for(let i = myArray.length; i >= idx; i--) {
        myArray[i] = myArray[i - 1]
    }
    myArray[idx] = value
    return myArray
}

console.log(insertAt([100,200,5], 2, 311)) // [100,200,311,5]
console.log(insertAt([9,33,7], 1, 42)) // [9,42,33,7]