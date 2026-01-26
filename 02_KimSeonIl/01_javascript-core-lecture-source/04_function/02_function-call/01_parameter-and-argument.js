// parameter(매개변수)와 argument(전달인자)

function hello(name){
    //argument
    //함수 호출 시 전달된 인수를 참조할 수 있다.
    console.log('arguments', arguments);
    console.log(arguments[1]);
    return `${name}님 안녕하세요`
}

hello();
hello("유관순");
hello("유관순", "홍길동");
hello("유관순", "홍길동","이순신");

var result = hello();
var result2 = hello('유관순');
var result3 = hello('유관순','홍길동');

console.log("result: " , result, result2, result3)

/* 매개 변수 기본 값 설정
* - 매개 변수에 값이 전달되지 않거나 undefined인 경우 설정한 기본값이 대입되도록 할수 있다.
* */

function hi(name='아무개'){
    return `${name} 안녕`
}

console.log(hi('아'));
console.log(hi());
console.log(hi(undefined));