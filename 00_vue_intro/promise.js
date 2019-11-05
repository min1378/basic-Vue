// 외부에 요청을 보내서 그 결과를 출력하는 코드를 작성하고자 한다.
// 1. 몇초 뒤에 데이터가 응답되면
// 2. 데이터를 변수에 저장하여 출력!


// function getData() {
//   let data

//   setTimeout(() => {
//     console.log('INFO: 요청을 보냈습니다.')
//     data = {data: 'somedata'}
//   }, 100);
//   return data
// }

// function printData() {
//   let response1 = getData()
//   console.log(response1)
// }

// printData()
// 결과
// undefined
// INFO: 요청을 보냈습니다.


// function getDataCallback(callback) { // 2. callback 으로 함수가 넘어옴 즉, callback = 저 익명함수
//   setTimeout(() => {
//     console.log('INFO: 정보를 보냈습니다.')
//     const data = {'data': 'somedata'}
//     callback(data) // 3. 다 끝나고 저 함수를 실행 
//   }, 100)
// }

// // 1. 출력하는 작업을 하는 함수를 인수로 넘김
// getDataCallback(function(data) {
//   console.log(data)
// })


// // 1. 다짐을 반환한다. // Promise를 반환한다.
// // 2. 어떤 다짐? ==> 데이터를 요청한 뒤 어떻게 할꺼야 // Promise 안쪽의 함수가 표현된다.
// function getDataPromise() { // === axious.get(DATA_URL)
//   return new Promise(resolve =>{
//   setTimeout(() => {
//     if (true) {


//     console.log('INFO: 정보를 보냈습니다.')
//     const data = {'data': 'somedata'}
    
//     resolve(data) // .then으로 꺼낼 수 있는 객체
//         }
//     else {
//       reject = "실패하였습니다."
//     }
//   }, 100)
//   })

// }

// getDataPromise()
//   .then(response =>{
//     console.log(response)
//     console.log(1)
//     return response.data
//   })
//   .then(data => {
//     console.log(data)
//     console.log(2)
//   })
//   .then(() => {
//     console.log(3)
//   })
//   .catch(error => {
//     console.error(error)
//   })



// const handleData = async function() {
//   const response = await getDataPromise()
//   console.log(response)
//     // 이후 작업
//   }
// handleData()


// 1. 데이터를 가져온다.
// 2. 데이터를 출력한다.

function getData(){
  let data
  setTimeout(() => {
    console.log('INFO: 요청 보냄')
    data = {'data': 'somedata'}
  }, 100);
  
  return data // undefined
}

function printData(){
  const data = getData()
  console.log(data)
}


printData()


const handleData = async () => {
  const response = await axios.get(API_URL)
  this.dogImage = response.data.message
  }
handleData()








