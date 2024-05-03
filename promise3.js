// then 지옥 해결

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function fastFunction(data){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const result = data * 2;
            console.log('Fast function done', result)
            resolve(result);
        }, 1000);
    })
}

// 위랑 동일한 함수 
async function fastFunction(data){
    await delay(1000);
    const result = data*2;
    console.log("Fast Function done", result);
    return result;
}

// await 함수는 async 안에서만 써야하고 수행 가능 
// await가 없을 경우에는 또 새로운 비동기적인 흐름을 자기마음대로 실행 
// async자체가 비동기적인 흐름을 가져가는 함수
// promise 객체 자체가 비동기적인 흐름을 가져가는 객체
// 일반적인 함수로 만드려면 then으로 콜백함수 호출 
async function slowFunction(data){
    await delay(3000);  // 3초간 기다렸다가 
    const result = data + 10;
    console.log('slow function done', result)
    return result;
}

async function runTask(){
    let result = await fastFunction(10);
    console.log(result);
    try {
        data = await slowFunction(data);
    }catch(err){
        console.error(err);
    }
    result = await slowFunction(result);
    console.log(result);
}

const sample = runTask();
console.log(sample);