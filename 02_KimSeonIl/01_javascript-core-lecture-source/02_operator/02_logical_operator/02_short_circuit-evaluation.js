//단축 평가
// -표현식을 평가하는 도중 평가 결과가 확정된 경우
// 나머지 평가 과정을 생략하는 것

// - &&, || 연산자 표현식의 결과가 때로는 boolean 값이 아닐수도 있다

// 'apple'은 Truthy한 값이기 때문에 true로 평가되고
// 평가 도중 true가 발생하면 (확정되면) 나머지 연산을 수행하지 않음
// 확정된 결과인 'apple'을 반환
console.log('apple'||'banana');
// 앞쪽 평가가 실패(false)하면 || 뒤에가 반환됨
console.log(false ||'banana');

// 'apple'이 true로 평가 되어도
// &&연산읜 좌항, 우항을 모두 평가해야되기 때문에
console.log('apple' &&'banana');

// -> 좌항 true명 우항이 반환됨
console.log(false &&'banana');
console.log(false && 'banana');
/* 객체를 가리키기를 기대하는 변수가 null 또는 undefined인지 확인하고
* null 또는 undefined(Flasy)로 판단되면*/
var obj =null;

var tem = obj.value;