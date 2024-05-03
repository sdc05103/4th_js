// const animal = {
//     name: "lion",
//     run(){
//         console.log(`${this.name}이 달립니다.`);
//     },
//     run2: function(){
//         console.log('동물이 달려요. ');
//     }
// }

// animal.run();
// animal.run2();

// --------------------------------------------------------------------------------------------------------

// function Animal(name){
//     this.name = name;
//     this.run = function(){
//         console.log(`${this.name} 동물이 달린다. `)
//     }
// }

// const animal2 = new Animal("사자");
// console.log(animal2);
// console.log(animal2.constructor);
// animal2.run();

// // prototype은 부모클래스가 자식클래스에 전달할 method
// Animal.prototype.eat = function(){
//     console.log( `${this.name}가 먹는다.`);
// }


// rabbit1. eat = function(){
//     console.log("새로운 달리기"); // 프로토타입까지 안 올라가고 그저 속성에 추가됨

// animal2.eat();
// console.log(animal2);
// console.log(animal2.__proto__);     // 내가 빗대어 만든 생성자 함수의 프로토타입에 접근하는 함수
// // 만약 내가 가진 속성에 없으면 __proto__에 접근해서 있는지 확인(계속 올라감..)


// ---------------------------------------------------------------------------------------------------

function Animal(name){
    this.name = name;
    this.run = function(){
        console.log(`${this.name} 동물이 달린다. `)
    }
}

function Rabbit(name, color){
    Animal.apply(this, arguments);  // Rabbit의 함수가 Animal상속 가능 
    this.color = color;
}

// prototype은 부모클래스가 자식클래스에 전달할 method
Animal.prototype.eat = function(){
    console.log( `${this.name}가 먹는다.`);
}


Rabbit.prototype = Object.create(Animal.prototype); // 해당하는 object를 복사하는게 아니라 Animal을 prototype으로 가지는 새로운 객체를 생성, 이게 Animal을 가리키니까 아래서 수정 
// Rabbit.prototype = Animal.prototype;    // 이렇게 해버리면 Rabbit의 속성을 바꾸면 Animal의 속성도 같이 바뀜..
Rabbit.prototype.constructor = Rabbit;


console.log(Rabbit.prototype);  

console.log(Rabbit.prototype.__proto__);


// const rabbit1 = new Rabbit("토끼", "white");
// console.log(rabbit1.__proto__.constructor);


// rabbit1.run();  // Rabbit에 해당함수가 없어도 Animal의 run함수 실행 가능 
// rabbit1.eat();
// console.log(rabbit1);
// console.log(rabbit1.__proto__);
// console.log(rabbit1.__proto__.__proto__);


// anmimal.<특정속성> 호출시 자기자신의 this.속성(메소드)에 없는 속성이면,
// animal.__proto__에서 찾는다. 