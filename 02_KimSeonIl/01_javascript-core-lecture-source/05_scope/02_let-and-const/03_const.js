// const (constant, 상수)
// let 키워드와 동일한 특징을 가짐
// - 단 한번 값을 대입하면 변경할 수 없음.

const x =21;

const student = {
    name : "홍길동"
}

// 새로운 객체로 재할당 X(왜? 상수니까)

student.name = "홍길동";
console.log(student);