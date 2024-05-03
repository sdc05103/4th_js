// const arr1 = [1,2,3,4,5];

// const result = arr1.forEach((item) => {
//     console.log(item*10);
// })

// arr1.forEach(function(item){
//     console.log(item);
// })

// function sample(item, idx){
//     console.log(item-idx);
// }

// arr1.forEach(sample);

// console.log(result);

// let sample = [1,2,3];
// let sample2 = sample.map(function(val){return val*10;})
// console.log(sample2);

const arr = [1,2,3,4,5];
const result = arr.reduce((prev,cur,idx,arr) =>{
    console.log(prev,cur,idx,arr);
    console.log("-".repeat(10));
    return prev + cur;
}, 10);
console.log(result);





