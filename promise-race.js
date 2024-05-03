const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fastFunction(data){
    await delay(1000);
    const result = data*2;
    console.log("Fast Function done", result);
    return result;
}


async function slowFunction(data){
    await delay(3000);  // 3초간 기다렸다가 
    const result = data + 10;
    console.log('slow function done', result)
    return result;
}

// 비동기 함수를 병렬적으로 처리하는데 하나라도 reject되면 다 reject
function runTask(){
   
    Promise.race([fastFunction(5), slowFunction(10)]).then((data)=>{
        console.log("작업완료");
        console.log(data);});


}

runTask();