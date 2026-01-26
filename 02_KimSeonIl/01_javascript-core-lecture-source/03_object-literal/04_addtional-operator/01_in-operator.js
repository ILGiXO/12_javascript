/* in 연산자 : 객체 내 프로퍼티 존재 여부를 확인하는 연산자 */
var student ={
    name: "유관순",
    age: 16,
    test: undefined
}


/* student.name의 타입이 undefined 값이 대입되어 있는지 */
console.log(student.name === undefined);
console.log(student.age === undefined);
// 변수의 값이 대입되지 않아서 타입이 지정되지 않았다

// student.test는 프로퍼티가 존재하지만 값이 undefined로 property는 있지만 대입된 값이 없는 상태
console.log(student.test === undefined);

// student 객체 내부에 key값이 name인 프로퍼티가 있는지 확인
console.log("name" in student);
