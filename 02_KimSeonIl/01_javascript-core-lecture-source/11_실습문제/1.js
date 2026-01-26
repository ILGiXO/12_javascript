const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';

console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));

function findWord(str, word) {
    // 코드 작성
    var index1 = str.split(",").indexOf("고양이");
    var index2 = str.split(",").indexOf("샌드위치");
    console.log(`고양이는 배열 index ${index1}번째에 있습니다.`);
    console.log(`샌드위치 배열 index ${index2}번째에 있습니다.`);

}