let numbers = [20, 100, 37, 54, 88, 9];
let numbers2 = [ 100, 88, 54, 37, 20, 9 ];
let strings = ['wow', 'js', 'party', 'hello'];


let sort = numbers.sort((a, b) => a - b);
let sort2 = numbers2.sort((a, b) => a + b);
let string1 = strings.sort((a, b => a - b));

console.log(sort);
console.log(sort2);
console.log(string1);