// Starting with a 1-indexed array of zeros and a list of operations, 
// for each operation add a value to each of the array element between two given indices, 
// inclusive. Once all operations have been performed, return the maximum value in your array.
// link https://www.hackerrank.com/challenges/crush/problem
function arrayManipulation(n, queries) {
    let max = 0;
    const arr = new Array(n).fill(0);

    for (let i = 0; i < queries.length; i++) {
        arr[queries[i][0]-1] += queries[i][2];
        if (queries[i][1] < arr.length) {
            arr[queries[i][1]] -= queries[i][2];
        }
    }

    for (let j = 1; j < n; j++) {
        arr[j] += arr[j-1];
    }

    for (let k = 0; k < arr.length; k++) {
        max = Math.max(max, arr[k]);
    }
    
    return max;
}