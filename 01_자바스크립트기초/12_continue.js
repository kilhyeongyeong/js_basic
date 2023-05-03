var total = 0;

// 1~100까지 중 3의 배수만 더한 총합
for(var i=1; i<=100; i++){
    if(i%3 !== 0) continue;
    total += i;
}

console.log(`total = ${total}`);