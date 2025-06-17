// 🧩 Problem: Two Sum (LeetCode #1)
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.


    // create a function that takes in 2 arguments: an array and a target number
// loop through the array
    // for each number, check if there is another number in the array that adds up to the target
    // if yes, return an array with both of their indexes
// if no pair is found, return an empty array or null
testArray = [2,7,11,15], target = 9 

function twoSum(numberList, targetSum) {
    for (let i = 0; i < numberList.length; i++) {
        for (let j = i + 1; j < numberList.length; j++) {
            if (numberList[i] + numberList[j] === targetSum) {
                return [i, j]
            } 
        }
    }
}

console.log(twoSum(testArray, target))
 