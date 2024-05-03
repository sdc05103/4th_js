
let num1 = parseInt(prompt("정수를 입력해주세요: "));
for(let i = 0; i < num1; i++){
  console.log("안녕");
}

let num2 = parseInt(prompt("정수를 입력해주세요: "));
for(let i = 0; i < num2; i++){
    let str = ""
    for(let j = 0 ; j <= i; j++){
        str += "*"
    }
    console.log(str)
}

let num3 = parseInt(prompt("정수를 입력해주세요: "));
for(let i = 0; i < num3; i++){
    let str = ""
    for(let j = num3 ; i < j; j--){
        str += "*"
    }
    console.log(str)
}

// console.log("*".repeat(i))

let x = [3, 6, 9, 20, -7, 5];

for (let i of x){
    console.log(i * 10);
}


let y = {"math": 70, "science": 80, "english": 20};

for (let i in y){
    y[i]+= 10;
}
console.log(y)


let num = parseInt(prompt("정수를 입력해주세요: "));
for(let i = 1; i <= num; i++){
    let k = num * i;
    console.log(`${num}*${i} = ${k}`);
}

let word = ["school", "game", "piano", "science", "hotel", "mountian"] ;
let arr = []
for (let i = 0; i < word.length; i++){
    if(word[i].length >= 6){
        arr.push(word[i]);
    }
}
console.log(arr);

// 의도한 풀이 방법 
let newWord = word.filter(elem => {
    elem.length >= 6;
})
console.log(newWord);
console.log(arr);

//

for (let j = 1; j <= 9; j++){
    for(let i = 1; i <= 9; i++){
        let k = i * j ;
        console.log(`${j}*${i} = ${k}`);
    }
}


for (let i = 1 ; i <= 100; i++){
    if (i % 3 === 0 && i % 5 !== 0){
        console.log("3의 배수");
    }
    else if(i % 5 === 0 && i % 3 !== 0){
        console.log("5의 배수");
    }
    else if(i % 5 === 0 && i % 3 === 0 ){
        console.log("3과 5의 공배수");
    }
    else{
        console.log(i);
    }
}



