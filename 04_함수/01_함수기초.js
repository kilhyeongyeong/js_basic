// 함수 정의하기(실행과는 별개)
function makeFood(sause){
    console.log('면을 삶습니다.');
    console.log(`${sause}를 넣고 면수와 볶습니다.`);
    console.log(`${sause}스파게티 완성!`);
}

// 함수 호출
makeFood('까르보나라 소스');

// 원넓이를 구하는 함수
function calcCircle(r) {
    return 3.14 * (r**2);
}

calcCircle(2);