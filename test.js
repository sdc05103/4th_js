function Animal(name){
    this.name = name;
    this.run = function(){
        console.log(`${this.name} 동물이 달린다. `)
    }
}

const animal2 = new Animal("사자");
console.log(animal2);
console.log(animal2.constructor);
animal2.run();
