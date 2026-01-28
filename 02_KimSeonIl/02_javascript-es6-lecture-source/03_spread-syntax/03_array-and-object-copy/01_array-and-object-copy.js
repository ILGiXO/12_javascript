// 얕은 복사

const arr = [10, 20, 30];
const arr2 = arr;
arr2[2] = 100;

console.log(arr);
console.log(arr2);

// 배열 깊은 복사
const copyArr = [...arr];
// arr의 값이 풀어진 후 다시 묶인 새배열

copyArr[0] = 99;
console.log(arr);
console.log(copyArr);


/* 객체 깊은 복사 */
const obj = {
    name: "홍길동",
    age: 24
}

const copyObj1 = obj;   //얉은 복사
const copyObj2 = {...obj};  //깊은 복사

//타입 일치 + 저장된 값(참조 주소) 일치 여부
console.log(obj === copyObj1); //true
console.log(obj === copyObj2); //false

const numbers = [10, 20, 30];

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sum(...numbers))  //대괄호를 풀어버린다

