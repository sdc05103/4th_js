new Promise((resolve, reject)=>{
    console.log("Promise1");
    const value =10;
    if(value===10){
        resolve(value);
    } else {
        reject(value);
    }
}).then(data=>{
    console.log("Resolve!");
    console.log(data);
    return new Promise((resolve, reject)=>{
        if (true){
            resolve(20);
        }else{ 
            reject(30);
        }
    })
}).catch(err=>{
    console.error("Reject!");
    console.error(err);
}).then(data=>{
    console.log("2번째 Promise");
    return new Promise((resolve, reject)=>{
        // ...계속된 로직...
    })
})

   //then의 뒤가 resolve함수, catch뒤가 reject함수