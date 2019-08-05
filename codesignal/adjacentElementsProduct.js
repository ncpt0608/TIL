/**
 * adjacentElementsProduct
 
 Given an array of integers, 
 find the pair of adjacent elements that has the largest product and return that product.

 Example

 For inputArray = [3, 6, -2, -5, 7, 3], the output should be
 adjacentElementsProduct(inputArray) = 21.

 7 and 3 produce the largest product.

 Input/Output

 [execution time limit] 4 seconds (js)

 [input] array.integer inputArray

 An array of integers containing at least two elements.

 Guaranteed constraints:
 2 ≤ inputArray.length ≤ 10,
 -1000 ≤ inputArray[i] ≤ 1000.

 [output] integer

 The largest product of adjacent elements.
 
 */

function adjacentElementsProduct(inputArray) {
    let answer = Number.MIN_SAFE_INTEGER;
    
    for(let ix = 0, ixLen = inputArray.length - 1; ix < ixLen; ix++) {
        if (answer < inputArray[ix] * inputArray[ix + 1]) {
            answer = inputArray[ix] * inputArray[ix + 1];
        }    
    }
    
    return answer;
}

function adjacentElementsProduct(arr) {
    return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}
  