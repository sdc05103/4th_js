// function createGreeting(greetingPrefix){
//     return function(name){
//         console.log(greetingPrefix + ", " + name + "!");
//     }
// }

// const greetHello = createGreeting("Hello");
// const greetHi = createGreeting("Hi");

// greetHello("Alice");
// greetHi("Bob");

// function outer(){
//     let count = 0;

//     function inner(){
//         count++;
//         return count;
//     }
//     return inner;
// }

// const counter = outer();
// console.log(counter());
// console.log(counter());

// function createCounter(){
//     let count = 0

//     function inner(){
//         count++;
//         return count;
//     }
//     return inner;

// }

// const counter1 = createCounter()
// console.log(counter1());
// console.log(counter1());

// const counter2 = createCounter()
// console.log(counter2());
// console.log(counter2());
// console.log(counter1());


// function createIncrementer(start, step){
//     let a = start;
//     function inner(){
//         a += step;
//         return a;
//     }
//     return inner;

// }

// const incByOne = createIncrementer(5, 1);
// console.log(incByOne());
// console.log(incByOne());

// const incByTen = createIncrementer(10, 10);
// console.log(incByTen());
// console.log(incByTen());

// class Incrementer {
//     constructor(start, step) {
//       this.value = start;
//       this.step = step;
//     }
  
//     getNext() {
//       this.value += this.step;
//       return this.value;
//     }
//   }
  
//   const incByOne = new Incrementer(5, 1);
//   console.log(incByOne.getNext()); // 6
//   console.log(incByOne.getNext()); // 7
  
//   const incByTen = new Incrementer(10, 10);
//   console.log(incByTen.getNext()); // 20
//   console.log(incByTen.getNext()); // 30



function OnLoginBtnClick(){
    console.log("로그인 버튼 로직..");
}

function loggingBtn(btnName, func){
    let count =0;
    return function (){
        console.log(`${btnName} 클릭되었습니다..`);
        count ++;
        func();
        console.log(`${btnName} - ${count}번 실행완료`);
        // return count;
    }
}

const btn1Click = loggingBtn("LoginBtn", OnLoginBtnClick);
btn1Click();