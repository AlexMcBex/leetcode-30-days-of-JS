// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

var chunk = function (arr, size) {
    let array = []
    let chunk = []
    for (let i = 0; i < arr.length; i++) {
        if (chunk.length === size - 1 || i === arr.length-1) {
            chunk.push(arr[i])
            array.push(chunk)
            chunk = []
        } else {
            chunk.push(arr[i])
        }
    }
    return array
};

// var chunk = function(arr, size) {
//     var chunkedArray = [];
//     var index = 0;
  
//     while (index < arr.length) {
//       chunkedArray.push(arr.slice(index, index + size));
//       index += size;
//     }
  
//     return chunkedArray;
//   }