const myArry = [8, 1, 5, 3, 7, 4, 6, 2, 9];

function swap(array, leftIndex, rightIndex){
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)]     //middle element in the array between left and right
        i = left; //left pointer
        j = right; //right pointer 
    while (i <= j) { // while inside the array, itterating through once
        while (array[i] < pivot) { // while the left is less than the pivot, move on to next element to the right
            i++;
        }
        while (array[j] > pivot) { // while the right is higher than the pivot, move on to next element to the left 
            j--;
        }
        if (i <= j) {  // when left is greater than pivot, and right is lower than pivot, swap and continue
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}


const quickSort = (array, left, right) => {
    let pivot;
    if (array.length > 1) {  // as long as there are at least 2 or more items in the given array edge case
        pivot = partition(array, left, right); // new pivot returned from partition each time 
        if (left < pivot - 1) { // if there are still elements on the left side of the pivot
            quickSort(array, left, pivot - 1);
        }
        if (pivot < right) {  // if there are still elements on the right side of the pivot
            quickSort(array, pivot, right);
        }
    }
    return array;
}

const sortedArray = quickSort(myArry, 0, myArry.length - 1);


const { performance } = require('perf_hooks');
const start = performance.now();

console.log(sortedArray); 
console.log(`This took ${performance.now() - start} milliseconds to run`);