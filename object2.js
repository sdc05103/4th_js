// let arr = ["KIM", "SHIN"];

// let [name1, name2] = arr;

// console.log(name1);
// console.log(name2);

// let arr2 = ['a', 'b', 'c', 'd'];

// let[v1, v2, ...v3] = arr2;
// console.log(v1);
// console.log(v2);
// console.log(v3);

let options= {
    title: "Menu",
    width: 100,
    height: 200,
    k1: 'v1',
    k2: 'v2',
}
// ...은 객체를 풀어서 대입 
// 그리고 덮여씌워진다.. 
let options2 ={
    title: "newTitle",
    ...options,
    width : 500,
}

console.log(options2);

// let {width, height, ...rest} = options;
// console.log(width);
// console.log(rest);