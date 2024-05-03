let s1=prompt("점수입력1: ");
let s2=prompt("점수입력2: ");
let s3=prompt("점수입력3: ");


if((s1 > 65) && (s2 > 65) && (s3 > 65)){
    if((s1 > 100) || (s2 > 100) || (s3 > 100)){
        console.log("잘못된 점수가 입력되었습니다.");
    }
    else{
        console.log("합격");
    }
}
else{
    console.log("불합격");
}

let num = parseInt(prompt("정수를 입력해주세요: "));
if ((num %2) === 0){
    console.log(`입력하신 ${num}은 짝수입니다.`);
}
else{
    console.log(`입력하신 ${num}은 홀수입니다.`);
}


//includes 사용하기 
if (browser === "Edge") {
    console.log("Edge를 사용하고 계시네요!");
  } 
else if (
    browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera"
  ) {
    console.log("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
  } 
  else {
    // alert는 브라우저 js에서만 동작합니다.
    alert("현재 페이지가 괜찮아 보이길 바랍니다!");
  }


  let num1 = parseInt(prompt("정수를 입력해주세요: "));
  for(let i = 0; i < num1; i++){
    console.log("안녕");
  }

