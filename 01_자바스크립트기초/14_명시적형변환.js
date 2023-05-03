var x = 30;
var y = 40;

var z = '' + z + y;
var z2 = String(x) + y.toString();
console.log(`z의 타입 : ${typeof z}, z2의 타입 : ${typeof z2}`);

var num = Number('hello');
console.log(`숫자로 바꿀수 없는 문자를 숫자로 : ${num}`);

var num2 = parseInt('1532');
console.log(`숫자로 바꿀수 있는 문자를 숫자로 : ${num2}`); // 이친구는 문자변한시 에러나버림

// var y = null;
// console.log(String(y));
// console.log(y.toString()); // 얘는 에러남