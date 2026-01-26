// 일반 for문(java와 유사함)
for (var i = 0; i < 5; i++) {
    console.log(i);
}


/* for in 반복문 : 객체의 모든 키를 순회하는 반복문 */

var student ={
    name: "유관순",
    age: 16,
    getInfo(){
        return`${this.name}은 ${this.age}세 입니다.`
    }
}


for (var key in student) {
    // student 객체 내 프로퍼티 키 값을 순ㅏ적으로 꺼내와 Key 변수에 저장
    console.log(`key : ${key}`);
}


// 객체에 접근방법은 ex)student.key , student[key] 두개인데 forin 구문에는 []로 접근해야한다 ex)student[key]..
console.log(`student.key:${student.key}`);
console.log(`student.key:${student[key]}`);