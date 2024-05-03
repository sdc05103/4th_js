function slowFunction(err, data, done){
    // 3초 걸리는 함수(10을 더한다.)
    setTimeout(function(){
        done(undefined, data+10);
    }, 3000)
}

// done은 함수 
function fastFunction(err, data, done){
    // 1초 걸리는 함수(2를 곱한다.)
    setTimeout(function(){
        done(undefined, data*2);
    }, 1000)
}

function runTasks(cb){
    fastFunction(undefined, 10, (err, data) => 
    {if (err) return cb(err);
    console.log("fastFunction", data);
    // error가 없으면 
    slowFunction(undefined, data, (err, data) => {
        if(err) return cb(err);
        console.log("slowFunction", data);
    })

})
}

// runTasks에서 에러가 발생하면 다른 에러를 호출..?
runTasks(err=>{console.error(err);})
