
// todoId가 1, 3, 5, 7, 9인 데이터를 조회하여 출력하세요.
// 모든 todo중 completed가 true인 데이터만 모아서 새로운 배열로 만드세요.
// todoId가 1, 3, 5, 7, 9인 데이터를 새로운 배열로 만들어 저장하라 

// fetch("https://jsonplaceholder.typicode.com/todos").then(resp=>{
//     console.log(resp);
//     return resp.json();
// }).then(data=>{console.log(data)});


const todoIds = [1, 3, 5, 7, 9];

Promise.all(
  todoIds.map(id =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())    // 각 fetch요청의 응답을 JSON 형식으로 변환 
  )
)
.then(todos => {
  console.log(todos);
})
.catch(error => {
  console.error('Error:', error);
});


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(todos => {
//     const completedTodos = todos.filter(todo => todo.completed);
//     console.log(completedTodos);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


//   const todoIds = [1, 3, 5, 7, 9];
// const todos = [];

// const todoIds = [1, 3, 5, 7, 9];
// const todos = [];

// Promise.all(
//   todoIds // 홀수인 todoId만 필터링
//     .map(id =>
//       fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then(response => response.json())  // 각 fetch요청의 응답을 JSON 형식으로 변환
//         .then(data => {
//           todos.push(data);  // JSON 객체를 todos 배열에 추가
//         })
//     )
// )
// .then( data  => {
//     //todos.push(data);  // JSON 객체를 todos 배열에 추가
//     console.log(todos);
// })
// .catch(error => {
//   console.error('Error:', error);
// });




//1.응답의 순서를 보장하고 싶으면..?

// const baseUrl = "https://jsonplaceholder.typicode.com/todos";
// [1,3,5,7,9].forEach((value) =>{
//   const url =  `${baseUrl}/${value}`
//   fetch(url).then(resp=>{
//     return resp.json();
//   }). then(data =>{console.log(data);})
// })

// async function fetchById(todoId){
//   const baseUrl = "https://jsonplaceholder.typicode.com/todos";
//   const url =  `${baseUrl}/${todoId}`;
//   const resp = await fetch(url);
//   const data = await resp.json();
//   return data;
// }

// // 요청이 왔을 때 비로소 응답하니까 blocking이 실행되고 있는 코드 => 만약 응답 순서를 보장하고 싶으면 
// async() => {
//   for (let i in [1,3,4,7,9]){
//     console.log(await fetchById(i));
//   }
// }

//2 해설

async function fetchCompleted(){
    const url = "https://jsonplaceholder.typicode.com/todos";
    const resp = await fetch(url);
    const data = await resp.json();
    const result = data.filter(elem => elem.fetchCompleted);
    console.log(result);
}

//3

async function fetchById(){
  const baseUrl = "https://jsonplaceholder.typicode.com/todos";
  const url =  `${baseUrl}/${todoId}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

(async()=>{
  const arr = [1,3,5,7,9]. map(value =>fetchById(value)); //promise 객체 
  const data = await Promise.all(arr);  //all에 넣어줘서 배열의 순서가 유지되서 순서대로 출력 가능 
  console.log(data);
})();