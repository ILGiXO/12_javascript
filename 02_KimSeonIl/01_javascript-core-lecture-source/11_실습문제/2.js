function filterRange(arr, a, b) {
    let slice1 = arr.slice(0, 2);
    let slice2 = arr.slice(4, 1);
    let slice3 = arr.slice(6, 1);

    let result = slice1.concat(slice2, slice3);
    console.log(result);

}

const arr = [5, 3, 8, 1, 10, 4];

filterRange(arr, 1, 5);

console.log(arr);
