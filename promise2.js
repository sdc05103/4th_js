function fastFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data * 2;
            console.log("Fast Function done", result);
            resolve(result);
        }, 1000);
    })
}

function slowFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data + 10;
            console.log("Slow Function done", result);
            resolve(result,);
        }, 3000)
    })
}
//수도 코드
class Promise2 {
    constructor(func){
        this.func = func;
    }
    then(resolve){
        // resolve: function
        this.resolve = resolve
    }
    catch(reject){
        // reject: function
        this.reject = reject
    }
    call(){
        this.func(this.resolve, this.reject);
    }
}

function runTask(){
    return fastFunction(10).then(data=>{
        console.log(data)
        return slowFunction(data)
    }).then(data=>{
        console.log(data);
    }).catch(err=>{ 
        console.error(err);
    })
}

function runTask(){
    return fastFunction(10).then(data=>{
        console.log(data)
        return slowFunction(data).then(data=>{
            console.log(data);
        })
    }).catch(err=>{ 
        console.error(err);
    })
}

const sample = runTask();
console.log(sample); 
// pending: 종료X
// fulfilled: 성공
// Rejected: 실패







