let jsonFile = '{"MyBad"}';

try {
    console.log('code1');
    throw new SyntaxError("에러 발생");
    // JSON.parse(jsonFile);
    console.log('code1 종료')
} catch(err){
    console.log("Error 처리");
    // console.log(err);

    if(err instanceof SyntaxError){}
    else if(err instanceof RangeError){}
}
finally{
    console.log("finally");
}