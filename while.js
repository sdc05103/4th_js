// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while(i<3)

let num;

while(true){
    let num = parseInt(prompt("100보다 큰 숫자를 입력해주세요: "));
    if (num >100){
        break;
    }
}

//

function limitCalls(func, n){
    let i = n;
    function hello(){
        if (n > 0){
            func();
            n--;
        }
    }
    return hello;
}

const limitedHello = limitCalls(() =>
console.log("Hello!"), 2);
limitedHello(); // "Hello!"
limitedHello(); // "Hello!"
limitedHello(); // 아무 일도 일어나지 않음.


