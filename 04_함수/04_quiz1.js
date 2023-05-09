function calcDivisor(n){
    var count = 0;

    for(i=1; i<=n; i++){
        if(n%i == 0){
            count++;
            console.log(`${count}. ${n}의 약수 : ${i}`);
        }
    }
    return count;
}

var div = 20;
console.log(`${div}의 약수의 총 갯수 : ${calcDivisor(div)}`);